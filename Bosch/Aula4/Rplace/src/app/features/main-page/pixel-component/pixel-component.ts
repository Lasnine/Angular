import { Component } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pixel-component',
  imports: [Header, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './pixel-component.html',
  styleUrl: './pixel-component.css',
})
export class PixelComponent {
  grid: string[] = [];
  selectedColor: string = '#ff0000';
  ngOnInit() {
    this.grid = Array(10000).fill('#ffffff'); 
  }
  paintPixel(index: number) {
    this.grid[index] = this.selectedColor;
  }
  trackByIndex(index: number) {
    return index;
  }
}
