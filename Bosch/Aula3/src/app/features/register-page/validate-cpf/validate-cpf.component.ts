import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from './user.mock';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCpfComponent {
  user: IUser = {
    email: '',
    cpf: '',
    senha: ''
  }
  cadastros: IUser[] = [];

  @Output()
  onClick: EventEmitter<IUser | false> = new EventEmitter();

  submit = () => {
    const cpfValido = this.isValidCPF(this.user.cpf);
    const emailValido = this.isValidEmail(this.user.email);
    const senhaValida = this.isValidSenha(this.user.senha);

    if (cpfValido && emailValido && senhaValida) {

      this.onClick.emit(this.user);
      this.user = { email: '', cpf: '', senha: '' };
    } else {
      this.onClick.emit(false);
    }
  }

  isValidCPF(value: string): boolean {
    if (typeof value !== 'string') return false;

    value = value.replace(/[^\d]+/g, '');

    if (value.length !== 11 || /(\d)\1{10}/.test(value)) {
      return false;
    }

    const num = value.split('').map(el => +el);

    const calc = (count: number) => {
      const slice = num.slice(0, count - 1);
      const soma = slice.reduce((acc, el, index) => {
        return acc + el * (count - index);
      }, 0);

      return ((soma * 10) % 11) % 10;
    };

    return calc(10) === num[9] && calc(11) === num[10];
  }

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  isValidSenha(senha: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(senha);
  }
}