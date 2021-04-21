import { Component, Input } from '@angular/core';
import { TaskList } from 'src/app/models/task-list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() index: number; 
  taskList: TaskList[] = [];
  taskItem: Task;
  constructor() {}

  addNewTask(taskItem: Task): void{
      this.taskList.push({
        name : "task" ,
        taskItemList: [taskItem]
      });
  }

  deleteList(index: number){
    this.taskList.splice(index , 1);
  }
}
