import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parking } from '../../interfaces/parking.interface';

@Component({
  selector: 'app-card-parking',
  templateUrl: './card-parking.component.html',
  styleUrls: ['./card-parking.component.css']
})
export class CardParkingComponent implements OnInit {
  @Input() parking!:Parking
  @Input() showMoreInfo:boolean = true 

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  rederictRoute() {
    this.router.navigate(['details', this.parking.id], { relativeTo: this.route }).then( e => console.log(e))
  }

}
