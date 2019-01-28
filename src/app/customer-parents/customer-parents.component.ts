import { Component, OnInit } from '@angular/core';

import { customer } from '../customer';

@Component({
  selector: 'app-customer-parents',
  templateUrl: './customer-parents.component.html',
  styleUrls: ['./customer-parents.component.css']
})
export class CustomerParentsComponent implements OnInit {
  CUSTOMERS = customer;
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
