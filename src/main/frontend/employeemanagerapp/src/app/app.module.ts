import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ShopBackendComponent } from './shop-backend/shop-backend.component';
import { DefaultComponent } from './default/default.component';
import { EmployeeService } from './employee/employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastsComponent } from './toasts/toasts.component';




@NgModule({
  declarations: [
    AppComponent,
      EmployeeComponent,
      NavComponent,
      FooterComponent,
      ShopBackendComponent,
      DefaultComponent,
      ToastsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
