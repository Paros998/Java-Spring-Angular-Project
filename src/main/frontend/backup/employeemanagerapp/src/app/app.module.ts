import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeErrorComponent } from './employee/employee-error/employee-error.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAddComponent } from './modal/modal-add/modal-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
      NavComponent,
      EmployeeComponent,
      EmployeeErrorComponent,
      ModalComponent,
      ModalAddComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
