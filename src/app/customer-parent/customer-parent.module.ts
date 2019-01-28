import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerParentRoutingModule } from './customer-parent-routing.module';
import { CustomerParentComponent } from './customer-parent.component';

@NgModule({
  declarations: [CustomerParentComponent],
  imports: [
    CommonModule,
    CustomerParentRoutingModule
  ]
})
export class CustomerParentModule { }
