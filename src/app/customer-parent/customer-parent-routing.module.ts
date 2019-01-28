import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'child',loadChildren:'./child/child.module#ChildModule'},
 {path:'customer-parent',loadChildren:'./customer-parent/customer-parent.module#CustomerParentModule'},
 {path:'',redirectTo:'/customer-parent',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerParentRoutingModule { }
