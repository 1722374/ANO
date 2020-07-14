import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfessorModule} from './professor/professor.module';
import {AppRouterModule} from "./app-router/app-router.module";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProfessorModule,
    AppRouterModule,
    LoginModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
