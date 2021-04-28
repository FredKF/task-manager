import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ListContainer } from 'src/app/models/list-container.model';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() listContainer: ListContainer;
  panelOpenState: boolean = false;
  taskText: string;
  constructor() { }
  ngOnInit(): void {
  }

  addNewTask() : void{
    this.listContainer.taskList.push({
      name: this.taskText,
      completed: false
    });
    this.taskText = "";
    this.panelOpenState = false;
  }

  togglePanel(): void{
    this.panelOpenState = !this.panelOpenState
  }
}
