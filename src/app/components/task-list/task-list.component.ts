import { Component, Input, ViewChild, ElementRef, AfterViewInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListContainer } from 'src/app/models/list-container.model';
import { Task } from 'src/app/models/task.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements AfterViewInit {

  @Input() listContainerCol: ListContainer[];
  @Input() listContainer: ListContainer;
  @Input() index: number;
  task: Task;
  visible: boolean = true;
  disabled: boolean = false;

  @ViewChild('title') listNameElement: ElementRef;
  constructor(public dialog: MatDialog) { }

  addNewTask(): void{
    this.visible = true;
  }

  cancelNewTask(): void{
    this.visible = false;
  }

  setNewTask(){
    this.listContainer.taskList.push({
      name : "",
      completed : false
    });
  }

  deleteList(index: number){
    this.listContainerCol.splice(index , 1);
  }

  openDialog(index: number):void{
    const dialogRef = this.dialog.open(DialogComponent, {
      data:{name: this.listContainerCol[index].name},
      width: '250px'      
    });    
    
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.deleteList(index);
      } 
    });
  }

  toggleVisible(): boolean{
    return this.visible = !this.visible;
  }

  toggleEditValue(){
    this.disabled = !this.disabled;
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.listNameElement.nativeElement.focus();
    }, 0);
  }
}