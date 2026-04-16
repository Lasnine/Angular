import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { LoginPage } from './features/login-page/login-page';
import { SubscribePage } from './features/subscribe-page/subscribe-page';
import { authGuard, Login } from './domain/auth-guard';


export const routes: Routes = [
    {path: 'pixel', component: MainPage, canMatch: [authGuard] },
    {path: '', component: LoginPage, canMatch: [Login]},
    {path: 'cadastro', component: SubscribePage, canMatch: [Login] }
];
