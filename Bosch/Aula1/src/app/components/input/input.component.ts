import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() 
  Change = new EventEmitter<string>();
  Abc = ""
  onInput(valor: any) {
    this.Change.emit(valor.target.value);
  }
}
