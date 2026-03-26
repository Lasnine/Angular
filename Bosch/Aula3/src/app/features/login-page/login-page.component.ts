import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
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
