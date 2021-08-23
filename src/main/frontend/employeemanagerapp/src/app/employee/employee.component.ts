import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ModalComponent } from '../modal/modal.component';
import { Employee } from './employee';

function showEdit() {
  let div = document.getElementById('edit-modal');
  // @ts-ignore
  div.style.display = 'block';
}

function showDelete() {
  let div = document.getElementById('delete-modal');
  // @ts-ignore
  div.style.display = 'block';
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private app: AppComponent,private modal:ModalComponent) { }

  ngOnInit() {
  }

  public getEmployeesFromApp(){
    return this.app.employees;

  }

  // TS execs of JS functions to show right modals
  public openModal(employee: Employee | undefined | null, mode: string): void{
    this.modal.openModal(employee,mode);
  }

}
