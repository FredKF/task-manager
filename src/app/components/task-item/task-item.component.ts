import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {


  @Input() taskList: Task[];
  @Input() index: number;
  @Input() task: Task;
  disabled: boolean = false;
  @ViewChild('title') taskNameElement: ElementRef;

  constructor(public dialog: MatDialog) { }

  toggleCompleteTask(task: Task): void{
    task.completed = !task.completed;
  }

  deleteTask(index: number): void{
    this.taskList.splice(index, 1);
  }

  openDialog(index: number):void{
    const dialogRef = this.dialog.open(DialogComponent, {
      data:{name: this.task.name},
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.deleteTask(index);
      }
    });
  }


  toggleEditValue(): void{
    this.disabled = !this.disabled;
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.taskNameElement.nativeElement.focus();
    }, 0);
  }
}
