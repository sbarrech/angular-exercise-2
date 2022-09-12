import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPassengerComponent } from './components/form-passenger/form-passenger.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';

const routes: Routes = [
  { path: 'passenger', component: FormPassengerComponent },
  { path: 'payment', component: FormPaymentComponent },
  { path: '', redirectTo: '/passenger', pathMatch: 'full' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
