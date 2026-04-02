import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { LoginPage } from './features/login-page/login-page';
import { SubscribePage } from './features/subscribe-page/subscribe-page';

export const routes: Routes = [
    {path: '', component: MainPage },
    {path: 'login', component: LoginPage },
    {path: 'cadastro', component: SubscribePage }
];