import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-employee-error',
  templateUrl: './employee-error.component.html',
  styleUrls: ['./employee-error.component.css']
})
export class EmployeeErrorComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

  public getEmployeesLength(){
    return this.app.employees.length;
  }
}
