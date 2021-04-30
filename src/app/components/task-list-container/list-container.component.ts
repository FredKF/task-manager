import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListContainer } from 'src/app/models/list-container.model';


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  listContainer: ListContainer[] = [];
  newList: boolean = false;
  listName: string;
  disabled: boolean = false;
  searchText: string;
  constructor() { }

  ngOnInit(): void {  }

  cancelAction(): void{
    this.newList = false;
    this.listName = "";
    this.inputFormControl.markAsUntouched();
  }

  showListInput(): void{
    this.newList = true;
  }

  addNewList(){
    if(this.listName)
    {
      this.listContainer.push({
        name: this.listName,
        taskList: []
      });
        this.listName = "";
        this.newList = false;
        this.inputFormControl.clearValidators();
      }else{
        this.inputFormControl.markAsTouched();
      }
    }
}
