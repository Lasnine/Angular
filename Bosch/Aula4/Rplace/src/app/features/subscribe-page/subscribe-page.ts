import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../shared/header/header';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { IUser } from './user.mock';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../domain/UserInterface';
import { AuthApi } from '../../domain/auth.api';

@Component({
  selector: 'app-subscribe-page',
  imports: [Header, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  constructor(private api : AuthApi, private router: Router){}
  subscribeForm : FormGroup = new FormGroup ({
    username: new FormControl(``, [Validators.required]),
    password: new FormControl(``, [Validators.required])
  })

  get Username(){
    return this.subscribeForm.get("username")
  }
  get Password(){
    return this.subscribeForm.get("password")
  }
  
  subscribe = () => {
    if(!this.subscribeForm.valid)
    {
      alert("Todos os campos devem ser preenchidos!")
      return
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.subscribe(data).subscribe(
      res => {
        console.log(res)
        alert("Cadastro realizado com sucesso!");
        this.subscribeForm.reset();
        this.router.navigate(['/']);
      }
    )
  }

  user: IUser = {
    username: '',
    password: ''
  }
  cadastros: IUser[] = [];
  @Output()
  onClick: EventEmitter<IUser | false> = new EventEmitter();

  submit = () => {
    const senhaValida = this.isValidSenha(this.user.password);
    if (senhaValida) {
      this.onClick.emit(this.user);
      this.user = { username: '', password: '' };
    } 
    else {
      this.onClick.emit(false);
    }
  }
  isValidSenha(password: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }

}
