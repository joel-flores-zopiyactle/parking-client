import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardParkingComponent } from './components/card-parking/card-parking.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowParkingComponent } from './pages/show-parking/show-parking.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    CardParkingComponent,
    FormFilterComponent,
    ShowParkingComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }
