import { Component, Input, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { ListContainer } from 'src/app/models/list-container.model';
import { Task } from 'src/app/models/task.model';

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
  constructor() { }

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
