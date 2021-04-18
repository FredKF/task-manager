import { Component } from '@angular/core';
import { TaskList } from 'src/app/models/task-list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: TaskList[] = [];   
  taskItem: Task;
  constructor() {}    

  addNewTask(ev): void{
      this.taskList.push({
        name : "list1",
        taskItemList: [this.taskItem]
      });      
  }

  deleteTask(index : number){
    // this.taskItemList.splice(index, 1);
  }
}
