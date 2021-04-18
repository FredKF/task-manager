import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.css']
})
export class TaskListContainerComponent implements OnInit {

  TaskList: Task[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewList(ev){
    this.TaskList.push({
        name: (ev.target as HTMLInputElement).value, 
        completed: false
      });
      (ev.target as HTMLInputElement).value = "";
  }
}
