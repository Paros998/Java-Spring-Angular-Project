import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../toasts/toast.service';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];
  public deleteEmployee: Employee ;

  constructor(private service:EmployeeService,private toastService:ToastService,private modalService:NgbModal) {
    this.deleteEmployee = {
      name :'',
      email: '',
      employeeCode: '',
      id: 0,
      imageUrl:'',
      jobTitle:'',
      phone: ''
    };
   }

  ngOnInit() {
    this.getEmployees()
  }

  public openAddModal(add:any){
    this.modalService.open(add);
  }
  public openDeleteModal(employee: Employee,deleted:any){
    this.deleteEmployee = employee;
    this.modalService.open(deleted);
  }

  public getEmployees():void{
    this.service.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;

      },
      (error:HttpErrorResponse) =>{
        this.toastService.show('Employyes not found',error.message);
      }
    );
  }

  public addEmployee(addForm:NgForm):void{
    this.service.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        this.employees.push(response);
        this.toastService.show('Add completed 👍',`Employee ${response.name} have been succesfully added to the database!`)
        this.modalService.dismissAll();
      },
      (error:HttpErrorResponse) => {
        this.toastService.show("Couldn't add new employee!",error.message);
        this.modalService.dismissAll();
      }
    );
  }
  public delEmployee(){
    this.service.deleteEmployee(this.deleteEmployee?.id).subscribe(
      (response: void) => {
        this.toastService.show("Delete completed 👍",`Employee ${this.deleteEmployee.name} has been deleted succesfully!`);
        this.modalService.dismissAll();
        this.getEmployees();
      },
      (error: HttpErrorResponse) =>{
        this.toastService.show(`Couldn't delete employee ${this.deleteEmployee.name}!`,error.message);
        this.modalService.dismissAll();
      }
    );
  }

  public filterEmployees(by:string,val:string):void{
    let filteredEmployees: Employee[] = [];
    if(val != null)
    switch (by) {
      case 'name':
        for(let employee of this.employees){
          if(employee.name.toLowerCase().indexOf(val.toLowerCase()) !== -1)
            filteredEmployees.push(employee);
        }
        if(filteredEmployees.length !== 0){
          this.employees = filteredEmployees;
        }else this.getEmployees();
        break;
      case 'job':
        for(let employee of this.employees){
          if(employee.jobTitle.toLowerCase().indexOf(val.toLowerCase()) !== -1)
            filteredEmployees.push(employee);
        }
        if(filteredEmployees.length !== 0){
          this.employees = filteredEmployees;
        }else this.getEmployees();
        break;
      case 'email':
        for(let employee of this.employees){
          if(employee.email.toLowerCase().indexOf(val.toLowerCase()) !== -1)
            filteredEmployees.push(employee);
        }
        if(filteredEmployees.length !== 0){
          this.employees = filteredEmployees;
        }else this.getEmployees();
        break;
      case 'phone':
        for(let employee of this.employees){
          if(employee.phone.toLowerCase().indexOf(val.toLowerCase()) !== -1)
            filteredEmployees.push(employee);
        }
        if(filteredEmployees.length !== 0){
          this.employees = filteredEmployees;
        }else this.getEmployees();
        break;
    }
  }

}
