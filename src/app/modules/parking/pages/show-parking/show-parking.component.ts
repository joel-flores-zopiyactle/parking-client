import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from '../../interfaces/parking.interface';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-show-parking',
  templateUrl: './show-parking.component.html',
  styleUrls: ['./show-parking.component.css']
})
export class ShowParkingComponent implements OnInit {
  showCards:boolean = false
  constructor(private parkingService:ParkingService, private router:Router) { }
  parkings:Parking[] = []
  ngOnInit(): void {
  }

  filterData(filter:any) {
  
    this.parkingService.getAllParkingsFilter(filter).subscribe( (parkings:any) => {

      this.parkings= parkings.response.data;
      this.showCards = true
    
    })
  }
}
