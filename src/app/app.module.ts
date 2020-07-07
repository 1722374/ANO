import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfessorModule} from './professor/professor.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ProfessorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
