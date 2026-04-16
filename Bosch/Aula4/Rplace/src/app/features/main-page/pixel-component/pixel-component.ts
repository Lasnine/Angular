import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthApi } from '../../../domain/auth.api';
import { IPixel } from '../../../domain/interface/PixelInterface';
import { RoomApi } from '../../../domain/room.api';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-pixel-component',
  imports: [FormsModule],
  templateUrl: './pixel-component.html',
  styleUrl: './pixel-component.css',
})

export class PixelComponent implements OnInit {
  constructor (
    private roomApi : RoomApi, 
    private router: ActivatedRoute
  ){}

  private idRoom : string = ""
  // private pixelSubscription : Subscribe
  protected pixels = signal<IPixel[][]>([]);
  grid: string[] = [];
  selectedColor: string = '#ffffff';
  ngOnInit(): void {
    this.grid = Array(10000).fill('#ffffff'); 
    this.router.paramMap.forEach(param => {
      this.idRoom = param.get("id") ?? "";
    })
    let lines = []
    for ( let i = 0; i < 100; i++){
      let line: IPixel[] = []
      for (let j = 0; j< 100; j++){
        line.push({
          Color: 'white',
          X: j,
          Y: i
        })
        lines.push(line)
      }
      this.pixels.set(lines)
      this.roomApi.connect(this.idRoom)
      this.roomApi.pixelsObservable.subscribe(res=>{
        switch(res.type){
          case 'FULL_LOAD':
            break;
          case 'SINGLE_LOAD':
            break;
          default:
            break;
        }
      })
    }
  }
  updateSinglPixel = (data: IPixel) => {
    this.pixels.update(oldValue => {
      return oldValue.map(line => {
        return line.map(pixel => {
          if(pixel.X == data.X && pixel.Y == data.Y){
            return data
          }
          else{
            return pixel
          }
        })
      })
    })
  }
  updateOnInit = (data: IPixel[]) => {
    this.pixels.update(oldValue => {
      var cloneList = [...oldValue]
      data.forEach(item => {
      })
      
      return cloneList
    })
  }
  ngOnDestroy = () => {
    this.roomApi.closseConnection();
    // this.pixelSubscribe();
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