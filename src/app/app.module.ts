import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerParentsComponent } from './customer-parents/customer-parents.component';
import { CustomerChildComponent } from './customer-child/customer-child.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerParentsComponent,
    CustomerChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
