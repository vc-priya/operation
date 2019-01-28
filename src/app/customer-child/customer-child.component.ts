import { Component, OnInit, Input } from '@angular/core';

import {customer} from '../customer';
@Component({
  selector: 'app-customer-child',
  templateUrl: './customer-child.component.html',
  styleUrls: ['./customer-child.component.css']
})
export class CustomerChildComponent implements OnInit {
  @Input() CUSTEMER : customer;
  @Input('master') masterName:string;

  constructor() { }

  ngOnInit() {
  }

}
