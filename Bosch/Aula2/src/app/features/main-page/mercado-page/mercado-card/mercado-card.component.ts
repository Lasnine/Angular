import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockMercado, { IMercado } from '../Mercado.mock';
@Component({
  selector: 'app-mercado-card',
  templateUrl: './mercado-card.component.html',
  styleUrls: ['./mercado-card.component.css']
})

export class MercadoCardComponent {
    @Input()
    mercado!: IMercado;
    @Output()
    onClick : EventEmitter<IMercado> = new EventEmitter();
  
    clicked = () => {
      this.onClick.emit(this.mercado);
    }
}