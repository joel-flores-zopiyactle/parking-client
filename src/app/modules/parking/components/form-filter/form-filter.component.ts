import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterParking } from '../../interfaces/parking.interface';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<FilterParking>()

  fiterForm:FormGroup = this.fb.group({
      maxPrice: [0],
      minPrice: [0],
      type: [''],
      amenities: ['']
  }) 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  filterData() {
    this.filter.emit(this.fiterForm.value)
  }

}
