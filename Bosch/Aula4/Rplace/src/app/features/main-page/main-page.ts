import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { PixelComponent } from './pixel-component/pixel-component';

@Component({
  selector: 'app-main-page',
  imports: [Header, PixelComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
