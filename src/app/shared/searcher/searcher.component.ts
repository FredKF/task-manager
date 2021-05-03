import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {    
  @Output() searchTextEmiter = new EventEmitter<string>();  
  constructor() { } 

  emitFilterText(input){
    this.searchTextEmiter.emit(input.value)    
  }  
}