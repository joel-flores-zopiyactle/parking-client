import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Parking } from '../../interfaces/parking.interface';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  id:string = ''
  parking!: Parking  
  showCard:boolean = true

  constructor(private parkingService:ParkingService, private router:Router, private route:ActivatedRoute) {  }

  ngOnInit(): void {
    
    const id = String(this.route.snapshot.paramMap.get('id')) 
    console.log(id);
    
    this.parkingService.getParking(id)
    .pipe(catchError((err:any) => {
      if(err) {
        this.showCard = false
        return err
      }
    }))
    .subscribe( (res: any) => {
       this.parking = res.response.data
        
    })   
    
  }

  deleteParking(id:any) {

    if(!confirm('Are you delete parking?')) return

    this.parkingService.deleteParking(id)
    .subscribe( (res:any) => {      
      if(res.response.code === 200) {
        this.router.navigate(['/parking'])
      } else {
        alert('Parking could not be deleted!')
      }
    }) 
  }

}
