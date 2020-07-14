import { Component, OnInit } from '@angular/core';
import {Professor} from "../professor";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {ProfessorService} from "../professor.service";
import cloneDeep from 'clone-deep';
import {SaveChangesInterface} from "../../save-changes/save-changes-interface";

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfessorEditComponent implements OnInit, SaveChangesInterface {
  professor: Professor;
  unsavedChangesFlag: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private service: ProfessorService) { }

  ngOnInit(): void {
    let prof: Professor|undefined;
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string|null = routeSnapshot.params['kuerzel'];
    if (kuerzel){
      prof = this.service.getProfessor(kuerzel);
    }
    if (prof) {
      this.professor = cloneDeep(prof);
    }
    else {
      this.router.navigate([''], {relativeTo: this.route.parent?.parent});
    }
  }
  onChange() {
    this.unsavedChangesFlag = true;
  }
  hasUnsavedChanges(): boolean {
    return this.unsavedChangesFlag;
  }


  update(professor: Professor): void {
    this.service.update(professor);
    this.unsavedChangesFlag = false;
    this.router.navigate(['../..'], {relativeTo: this.route});
  }
}
