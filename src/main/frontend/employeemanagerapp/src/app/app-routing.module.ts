import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShopBackendComponent } from './shop-backend/shop-backend.component';


const routes: Routes = [
  { path: '', component: DefaultComponent},
  { path: 'employee-manager' , component: EmployeeComponent},
  { path: 'shop-manager' , component: ShopBackendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
