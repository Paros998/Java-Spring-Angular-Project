import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from "./employee/employee";
import { EmployeeService } from "./employee/employee.service";


@Injectable(
  {
    providedIn: 'root'
  }
)
//TS Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  public title: String = 'EmployeeApp';

  constructor(private employeeService: EmployeeService) {
  }

  //TS functions to communicate with backend server through service
  public ngOnInit():void{
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public addEmployee(addForm: NgForm):void{
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },(error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public editEmployee(employee: Employee ):void{
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },(error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public deleteEmployee():void{
    // @ts-ignore
    this.employeeService.deleteEmployee(this.modalEmployee.id).subscribe(
      (response: void) => {
        this.getEmployees();
      },(error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}


