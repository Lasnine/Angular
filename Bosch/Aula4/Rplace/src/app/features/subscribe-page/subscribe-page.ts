import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../shared/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from './user.mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscribe-page',
  imports: [Header, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
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
