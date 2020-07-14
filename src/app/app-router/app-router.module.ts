import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProfessorListComponent} from "../professor/professor-list/professor-list.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', redirectTo: 'professor', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
