import { Component, Input } from '@angular/core';
import MockComida, { IComida } from './Comida.mock'
@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComida[] = []
  constructor(){
    this.comidas = MockComida
  }
  }
