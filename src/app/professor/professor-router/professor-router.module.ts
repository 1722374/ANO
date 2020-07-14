import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProfessorMainComponent} from "../professor-main/professor-main.component";
import {ProfessorListComponent} from "../professor-list/professor-list.component";
import {ProfessorCreateComponent} from "../professor-create/professor-create.component";
import {ProfessorEditComponent} from "../professor-edit/professor-edit.component";
import {AuthGuard} from "../../login/auth.guard";
import {SaveChangesGuardGuard} from "../../save-changes/save-changes-guard.guard";


const routes: Routes = [
  {path: 'professor', component: ProfessorMainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ProfessorListComponent},
    {path: 'create', component: ProfessorCreateComponent,
      canDeactivate: [SaveChangesGuardGuard]},
    {path: 'edit/:kuerzel', component: ProfessorEditComponent, canDeactivate: [SaveChangesGuardGuard]}
  ]}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfessorRouterModule { }
