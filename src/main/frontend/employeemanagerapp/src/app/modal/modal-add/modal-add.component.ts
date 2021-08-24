import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee';
import { ModalComponent } from '../modal.component';

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

@Component({
  selector: 'modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  constructor(private modal:ModalComponent) { }

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
}
