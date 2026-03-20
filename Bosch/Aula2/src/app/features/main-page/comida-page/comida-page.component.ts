import { Component, Input } from '@angular/core';
import MockComida, { IComida } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comida: IComida[] = []
  protected abrido = false;
  protected selectedFood! : IComida;
  
  constructor(){
    this.comida = MockComida
  }
  clicked = (food : IComida) => {
    this.abrido = !this.abrido;
    this.selectedFood = food
  }

  close = () => {
    this.abrido = !this.abrido
  }
}
