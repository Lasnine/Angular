import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMercado } from '../Mercado.mock';

@Component({
  selector: 'app-mercado-details-modal',
  templateUrl: './mercado-details-modal.component.html',
  styleUrls: ['./mercado-details-modal.component.css']
})
export class MercadoDetailsModalComponent {
  @Output()
  onClick : EventEmitter<void> = new EventEmitter();
  @Input()
  market! : IMercado;

  closeModal = () => {
    this.onClick.emit();
  }
}
