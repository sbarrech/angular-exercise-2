import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() lastName: string;
  @Input() firstName: string;
  @Input() address: string;
  @Input() email: string;
  @Input() phoneNumber: string;
}
