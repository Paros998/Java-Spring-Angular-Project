import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { AppComponent } from '../app.component';
import { ModalComponent } from '../modal/modal.component';

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

function showAdd() {
  let div = document.getElementById('add-modal');
  // @ts-ignore
  div.style.display = 'block';
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private app: AppComponent,private modal:ModalComponent) { }

  ngOnInit() {
  }

  // TS execs of JS functions to animate website
  public onMouseOverAddAnim():void{
    activateAnimationForButton();
  }
  public onMouseOutDelAnim():void{
    deactivateAnimationForButton();
  }

  // TS execs of JS functions to show right modals
  public openModal(employee: Employee | undefined | null, mode: string): void{
    this.modal.openModal(employee,mode);
  }

  public searchEmployyes(key: String):void{
    const results: Employee[] = [];
    for(let employee of this.app.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ){
        results.push(employee);
      }
    }
    this.app.employees = results;
    if(results.length === 0 || !key){
      this.app.getEmployees();
    }
  }
}
