import { Component } from '@angular/core';
import MockMercado, { IMercado } from './Mercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected abrido = false;
  protected selectedMarket! : IMercado;
  protected mercado: IMercado[] = []
    constructor(){
    this.mercado = MockMercado
  }

  clicked = (market : IMercado) => {
    this.abrido = !this.abrido;
    this.selectedMarket = market
  }
  
  close = () => {
    this.abrido = !this.abrido
  }
}