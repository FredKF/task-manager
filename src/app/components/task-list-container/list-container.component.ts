import { Component, OnInit } from '@angular/core';
import { ListContainer } from 'src/app/models/list-container.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  listContainer: ListContainer[] = [];
  newList: boolean = false;
  listName: string;
  constructor() { }

  ngOnInit(): void {
  }

  cancelAction(): void{
    this.newList = false;
    this.listName = "";
  }

  showListInput(): void{
    this.newList = true;
  }

  addNewList(){
    this.listContainer.push({
      name: this.listName,
      taskList: []
    });    
    this.newList = false;
  }
}
