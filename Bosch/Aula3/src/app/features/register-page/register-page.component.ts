import { Component, NgModule } from '@angular/core';
import { ValidateCpfComponent } from './validate-cpf/validate-cpf.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent {  
  receber(event: any) {
  if (event) {
    console.log('Usuário válido:', event);
  } else {
    console.log('Dados inválidos');
  }
}
}
