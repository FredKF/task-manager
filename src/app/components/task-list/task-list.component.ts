import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  list: Task[] = [];
  constructor() { }  

  addTask(ev: KeyboardEvent): void{
    if(ev.key==="Enter"){
      this.list.push({
        name: (ev.target as HTMLInputElement).value, 
        completed: false
      });
      (ev.target as HTMLInputElement).value = "";
    }
  }

  toggleCompleteTask(task: Task): void{
    task.completed = !task.completed;
  }

  deleteTask(index : number){
    this.list.splice(index, 1);
  }
}
