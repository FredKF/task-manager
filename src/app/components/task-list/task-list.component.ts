import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { ListContainer } from 'src/app/models/list-container.model';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() listContainerCol: ListContainer[];
  @Input() listContainer: ListContainer;
  @Input() index: number;
  task: Task;
  visible:boolean = true;

  constructor() { }

  addNewTask(): void{
    if(this.toggleVisible())
    {
      this.listContainer.taskList.push({
        name : "task1",
        completed : false
      });
    }
  }

  deleteList(index: number){
    this.listContainerCol.splice(index , 1);
  }

  toggleVisible(): boolean{
    return this.visible = !this.visible;
  }
}
