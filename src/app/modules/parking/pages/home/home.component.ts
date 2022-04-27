import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Parking } from '../../interfaces/parking.interface';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parkings:Parking[] = []
  loading:boolean = true
  orderParkingsMax:boolean =  true;

  constructor(private parkingService:ParkingService) { }

  ngOnInit(): void {
    this.loading = true
    this.getParkings();  
  }

  getParkings() {
    this.parkingService.getAllParkings().subscribe( (parkings:any) => {
            
      this.parkings = parkings.response.data
      //console.log(parkings);
    })
    this.loading = false
  }

  filterData(filter:any) {
    this.loading = true

    this.parkingService.getAllParkingsFilter(filter)
    .pipe(catchError((err:any) => {
      if(err) {   
        this.loading = false
        return err
      }
    } ))
    .subscribe( (parkings:any) => {

      this.parkings= parkings.response.data;
      this.loading = false
    
    })
    
  }

  orderPriceMax() {
    this.parkings = this.parkings.sort((a:Parking, b:Parking) => b.price - a.price)
    this.orderParkingsMax = true
  }

  orderPriceMin() {
    this.parkings = this.parkings.sort((a:Parking, b:Parking) => a.price - b.price)
    this.orderParkingsMax = false
  }

}
