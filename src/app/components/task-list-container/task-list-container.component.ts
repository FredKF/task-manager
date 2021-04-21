import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/task-list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.css']
})
export class TaskListContainerComponent implements OnInit {  
  
  taskList: TaskList [] = [];   
  i : number;
  constructor() { }

  ngOnInit(): void {
  }

  addNewList(){
    this.taskList.push({
        name: "",
        taskItemList: []
      });      
  }


  deleteList(i: number){
    this.taskList.splice(i, 1);
  }
}
