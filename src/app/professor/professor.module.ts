import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorListComponent} from './professor-list/professor-list.component';
import {ProfessorDetailsComponent} from './professor-details/professor-details.component';
import {ProfessorCreateComponent} from './professor-create/professor-create.component';
import {ProfessorEditComponent} from './professor-edit/professor-edit.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProfessorMainComponent} from './professor-main/professor-main.component';
import {ProfessorRouterModule} from './professor-router/professor-router.module';
import {LoginModule} from '../login/login.module';


@NgModule({
  declarations: [ProfessorListComponent, ProfessorDetailsComponent,
    ProfessorCreateComponent, ProfessorEditComponent,
    ProfessorMainComponent],
  imports: [CommonModule, FormsModule, RouterModule, ProfessorRouterModule, LoginModule],
  exports: [ProfessorRouterModule]
})
export class ProfessorModule {

}
