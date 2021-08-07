import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'employee', component:EmployeeComponent},
  {path: 'apicall', component:ProductsComponent},
  {path:'employeedetails', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
