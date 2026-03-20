import { Component, EventEmitter, Input, Output } from '@angular/core';
import {IComida} from '../Comida.mock';
@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent {
  @Input()
  comida!: IComida;

   @Output()
  onClick : EventEmitter<IComida> = new EventEmitter();

  clicked = () => {
    this.onClick.emit(this.comida);
  }
}
