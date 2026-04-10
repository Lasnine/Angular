import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthApi } from '../../../domain/auth.api';
import { IPixel } from '../../../domain/PixelInterface';

@Component({
  selector: 'app-pixel-component',
  imports: [FormsModule],
  templateUrl: './pixel-component.html',
  styleUrl: './pixel-component.css',
})

export class PixelComponent {
  constructor (private api : AuthApi){}

  grid: string[] = [];
  selectedColor: string = '#ffffff';
  ngOnInit() {
    this.grid = Array(10000).fill('#ffffff'); 
  }
  paintPixel(index: number) {
    this.grid[index] = this.selectedColor;
  }
  trackByIndex(index: number) {
    return index;
  }

  // updateData(pixel : IPixel){
  //   this.grid[pixel.Y][pixel.X] = pixel
  // }

  updateData(pixel: IPixel) {
    const size = 1000;
    if (
      pixel.X >= 0 && pixel.X < size &&
      pixel.Y >= 0 && pixel.Y < size
    ) {
      const index = pixel.Y * size + pixel.X;
      this.grid[index] = pixel.Color;
    }
    else{
      alert("Não deu certo");
    }
  }

  isPressed = false
  pass = new Set<[posX : number, posY : number]>()
  onMouseDown(event : MouseEvent, i : number)
  {
    this.isPressed = true;
    this.action(event.movementX, event.movementY, i)
  }
  onMouseUp()
  {
    this.pass = new Set<[posX : number, posY : number]>()
    this.isPressed = false
  }
  onMouseMove(event : MouseEvent, i : number)
  {
    this.action(event.movementX, event.movementY, i)
  }

  action(x : number, y : number, i : number)
  {
    if(!this.isPressed)
      return
    if(this.pass.has([x,y]))
      return
    this.pass.add([x, y]);
    this.paintPixel(i);
  }
}