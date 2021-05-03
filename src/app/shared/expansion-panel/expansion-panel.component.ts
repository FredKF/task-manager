import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListContainer } from 'src/app/models/list-container.model';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent {
  textareaFormControl = new FormControl('', [
    Validators.required
  ]);

  @Input() listContainer: ListContainer;
  panelOpenState: boolean = false;
  taskText: string;
  constructor() { }

  enterSubmit(event: KeyboardEvent): void{
    if(event.key === 'Enter'){
      this.addNewTask(event);
    }
  }

  addNewTask(event: KeyboardEvent) : void{
    if(this.taskText){
      this.listContainer.taskList.push({
        name: this.taskText,
        completed: false
      });
      this.taskText = "";
      this.panelOpenState = false;
      this.textareaFormControl.clearValidators();
    }else{
      this.textareaFormControl.markAsTouched();
    }
  }

  togglePanel(): void{
    this.panelOpenState = !this.panelOpenState;
    this.textareaFormControl.markAsUntouched();
  }
}
