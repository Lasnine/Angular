import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() 
  label: string = "";
}


