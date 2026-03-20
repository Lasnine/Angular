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

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponent,
    NavComponent,
    DetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
