import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import { NgForm } from '@angular/forms';


// JS functions to control website
// Animations

function activateAnimationForButton():void{
  let div = document.getElementById('add-div');
  let a = document.getElementById('add-a');
  // @ts-ignore
  div.className += ' addButtonActiveClass';
  // @ts-ignore
  a.className += ' addButtonActiveClass';
}

function deactivateAnimationForButton():void {
  let div = document.getElementById('add-div');
  let a = document.getElementById('add-a');
  // @ts-ignore
  div.className = "nav-div add-div";
  // @ts-ignore
  a.className = "add-a";
}

// Form control
function hideAdd(): void {
  let div = document.getElementById('add-modal');
  // @ts-ignore
  div.style.display = 'none';
}
function showAdd() {
  let div = document.getElementById('add-modal');
  // @ts-ignore
  div.style.display = 'block';
}

function hideEdit()
{
  let div = document.getElementById('edit-modal');
  // @ts-ignore
  div.style.display = 'none';
}
function showEdit() {
  let div = document.getElementById('edit-modal');
  // @ts-ignore
  div.style.display = 'block';
}

function hideDelete()
{
  let div = document.getElementById('delete-modal');
  // @ts-ignore
  div.style.display = 'none';
}
function showDelete() {
  let div = document.getElementById('delete-modal');
  // @ts-ignore
  div.style.display = 'block';
}

//TS Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  public title: String = 'EmployeeApp';

  public modalEmployee: Employee | undefined;
  public modalTitle: String | undefined;

  constructor(private employeeService: EmployeeService) {
  }

  // TS execs of JS functions to animate website
  public onMouseOverAddAnim():void{
    activateAnimationForButton();
  }
  public onMouseOutDelAnim():void{
    deactivateAnimationForButton();
  }

  // TS execs of JS functions to hide modals
  public onClickHideAdd():void{
    hideAdd();
  }

  public onClickHideEdit():void{
    hideEdit();
  }

  public onClickHideDelete():void{
    hideDelete();
  }

  // TS execs of JS functions to show right modals
  public openModal(employee: Employee | undefined | null, mode: String): void{
    // @ts-ignore
    this.modalEmployee = employee;
    if(mode === 'add'){
      this.modalTitle = "Adding new employee";
      showAdd();
    }else if(mode === 'edit'){
      // @ts-ignore
      this.modalTitle = "Editing Employee " + this.modalEmployee.name;
      showEdit();
    }else if(mode === 'delete'){
      // @ts-ignore
      this.modalTitle = "Are yo sure you want to delete " + this.modalEmployee.name + " from employees?";
      showDelete();
    }
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
        hideAdd();
      },(error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public editEmployee(editForm: NgForm):void{
    this.employeeService.addEmployee(editForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        editForm.reset();
      },(error: HttpErrorResponse) =>{
        alert(error.message);
        editForm.reset();
      }
    );
  }

}


