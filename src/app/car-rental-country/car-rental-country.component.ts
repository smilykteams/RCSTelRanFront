import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalculationService} from '../services/calculation.service';

@Component({
  selector: 'app-car-rental-country',
  templateUrl: './car-rental-country.component.html',
  styleUrls: ['./car-rental-country.component.css']
})
export class CarRentalCountryComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  myTask = false;
  objExp: any;


  constructor(private formBuilder: FormBuilder, private calcService: CalculationService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }


  handleChange($event: any) {
    this.myTask = true;
    this.objExp = {position: 'fixed', width: '30%'};
  }
}
