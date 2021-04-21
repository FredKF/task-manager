import { Component, Input, OnInit } from '@angular/core';
import { ListContainer } from 'src/app/models/list-container.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  listContainer: ListContainer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewList(){
    this.listContainer.push({
      name:"list",
      taskList: []
    })
  }
}
