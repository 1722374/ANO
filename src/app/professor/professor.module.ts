import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import {FormsModule} from '@angular/forms';
import { ProfessorCreateComponent } from './professor-create/professor-create.component';
import { ProfessorEditComponent } from './professor-edit/professor-edit.component';



@NgModule({
  declarations: [ProfessorListComponent, ProfessorDetailsComponent, ProfessorCreateComponent, ProfessorEditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProfessorListComponent]
})
export class ProfessorModule { }
