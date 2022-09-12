import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.css'],
})
export class FormPaymentComponent implements OnInit {
  passenger = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
  };

  form = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{16}$'),
    ]),
    expirationDate: new FormControl('', [
      Validators.required,
      Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$'),
    ]),
    cva: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{3}$'),
    ]),
  });

  constructor(private router: Router) {
    this.passenger = router.getCurrentNavigation().extras
      .state as typeof this.passenger;
  }

  displayAlert() {
    window.alert('Ok');
  }

  ngOnInit() {}
}
