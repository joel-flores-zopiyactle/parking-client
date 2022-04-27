import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  amenities: string[] = []
  amenitie = new FormControl('');

  loadingSpinner:boolean = false 
  showAlert:boolean = false
  statusAlert = 'alert-success'
  messageAlert:string = ''

  parkingForm: FormGroup = this.fb.group({
    address:      ['', Validators.required],
    amenities:    [this.amenities],
    score:        [1,[Validators.required, Validators.maxLength(1)]],
    price:        [0,Validators.required],
    type:         ['',Validators.required],
    image:        [''],
    description:  ['', Validators.required],
  })

  constructor(private fb:FormBuilder, private parkingService:ParkingService) { }

  ngOnInit(): void {
  }

  addAmenitie(event:any) {
    if(event.code === 'Enter') {
      if(this.amenitie.value === '') return 
      this.amenities.push(this.amenitie.value) 
      this.amenitie.reset('')
      return
    }

    return
  }

  deleteAmenties(index:number) {
      this.parkingForm.get('amenities')?.value.splice(index, 1);
  }

  sendParking() {
    if(!this.parkingForm.valid) return
    this.loadingSpinner = true
    this.parkingService.postParking(this.parkingForm.value)
    .pipe(catchError((err:any) => {
      if(err) {   
        this.loadingSpinner = false 
        this.statusAlert = "alert-danger"
        this.messageAlert = 'Error adding new parking'
        this.showAlert = true
        return err
      }
    } ))
    .subscribe(res => {
      console.log(res)
      setTimeout(() => {
        this.loadingSpinner = false 
        this.statusAlert = "alert-success"
        this.messageAlert = 'New parking created'
        this.showAlert = true
        this.parkingForm.reset('')
        this.amenities = []
      }, 1500);     
    })
    
  }

}
