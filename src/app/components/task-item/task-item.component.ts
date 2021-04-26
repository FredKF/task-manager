import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() taskList: Task[];
  @Input() index: number;
  @Input() task: Task;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleteTask(task: Task): void{
    task.completed = !task.completed;
  }

  deleteTask(index: number){
    this.taskList.splice(index, 1);
  }
}
