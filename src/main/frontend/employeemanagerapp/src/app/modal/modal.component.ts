import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Employee } from '../employee/employee';
import { modalControl } from './modalControl';

@Injectable(
  {
    providedIn: 'root'
  }
)
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public modalControl:modalControl = {
    active : true,
    mode : ''
  };
  public modalEmployee: any;
  public modalTitle: string | undefined;

  constructor(private app :AppComponent) { }

  ngOnInit() {
  }

  hideModal(){
    this.modalControl.active = false;
  }

  addEmployee(addForm: NgForm){
    this.app.addEmployee(addForm);
    this.hideModal();
  }
  editEmployee(employee: Employee){
    this.app.editEmployee(employee);
    this.hideModal();
  }
  deleteEmployee(){
    this.app.deleteEmployee();
    this.modalEmployee = undefined;
    this.hideModal();
  }
  // TS execs of JS functions to show right modals
  public openModal(employee: Employee | undefined | null, mode: string): void{
      // @ts-ignore
      this.modalEmployee = employee;
      this.modalControl.mode = mode;
      if(mode === 'add'){
        this.modalTitle = "Adding new employee";
      }else if(mode === 'edit'){
        // @ts-ignore
        this.modalTitle = "Editing Employee " + this.modalEmployee.name;
      }else if(mode === 'delete'){
        // @ts-ignore
        this.modalTitle = "Are yo sure you want to delete " + this.modalEmployee.name + " from employees?";
      }
      this.modalControl.active = true;
      console.log(this.modalControl);
  }
}
