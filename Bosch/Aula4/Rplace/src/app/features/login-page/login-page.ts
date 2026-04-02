import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ActivatedRoute, Router, RouterLink, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Header, RouterLink, RouterOutlet],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  isSubscribe = false;
  constructor(
    private _router: Router, 
    private _activatedRouter: ActivatedRoute){}
  ngOnInit() : void {
    this._activatedRouter.params.subscribe((param) => {
      console.log(param['tab']);
    })
  }
}
