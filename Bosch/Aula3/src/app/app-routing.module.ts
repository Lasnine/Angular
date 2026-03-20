import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children:[]},
  {path: 'login', component:LoginPageComponent},
  {path: 'Registrar', component:RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
