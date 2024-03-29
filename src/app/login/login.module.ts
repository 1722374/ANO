import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginOutButtonComponent} from './login-out-button/login-out-button.component';
import {LoginRouterModule} from './login-router/login-router.module';
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [LoginComponent, LoginOutButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginRouterModule, LoginOutButtonComponent
  ]
})
export class LoginModule { }
