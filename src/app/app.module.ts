import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormPassengerComponent } from './components/form-passenger/form-passenger.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AppRoutingModule } from './app-routing.module';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    FormPassengerComponent,
    FormPaymentComponent,
    SummaryComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
