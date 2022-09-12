import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-passenger',
  templateUrl: './form-passenger.component.html',
  styleUrls: ['./form-passenger.component.css'],
})
export class FormPassengerComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(12),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{8,12}$'),
    ]),
  });

  get formValues() {
    return {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      address: this.form.get('address').value,
      email: this.form.get('email').value,
      phoneNumber: this.form.get('phoneNumber').value,
    };
  }

  constructor() {}

  ngOnInit() {
    console.log(this.form.get('firstName').value);
  }
}
