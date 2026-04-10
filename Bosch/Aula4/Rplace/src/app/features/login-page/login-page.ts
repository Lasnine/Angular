import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ActivatedRoute, RouterLink  } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { LoginDto } from '../../domain/UserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Header, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  isSubscribe = false;

  constructor(private api : AuthApi, private _activatedRouter: ActivatedRoute, private router: Router){}
  loginForm : FormGroup = new FormGroup ({
    username: new FormControl(``, [Validators.required]),
    password: new FormControl(``, [Validators.required])
  })

  get Username(){
    return this.loginForm.get("username")
  }
  get Password(){
    return this.loginForm.get("password")
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Todos os campos devem ser preenchido!")
      return
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.login(data).subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem("token", res);
        alert("Login realizado com sucesso!");
        this.loginForm.reset();
        this.router.navigate(['/pixel']);
      },
      error: (err) => {
        console.error(err);
        if (err.status === 401 || err.status === 404) {
          alert("Usuário ou senha inválidos!");
        } 
        else {
          alert("Usuário não foi encontrado! É necessário criar um cadastro");
          this.router.navigate(['/cadastro']);
        }
      }
    })
  }


  ngOnInit() : void {
    this._activatedRouter.params.subscribe((param) => {
      console.log(param['tab']);
    })
  }
}
