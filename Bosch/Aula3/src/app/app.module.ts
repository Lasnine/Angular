import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { DetailsModalComponent } from './shared/details-modal/details-modal.component';
import { ValidateCpfComponent } from './features/register-page/validate-cpf/validate-cpf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponent,
    NavComponent,
    DetailsModalComponent,
    ValidateCpfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
