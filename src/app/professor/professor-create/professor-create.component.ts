import { Component, OnInit } from '@angular/core';
import {Professor} from "../professor";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessorService} from "../professor.service";
import {SaveChangesInterface} from "../../save-changes/save-changes-interface";

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor: Professor;
  unsavedChangesFlag: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.professor = new Professor();
  }

  onChange(){
    this.unsavedChangesFlag = true;
  }

  hasUnsavedChanges(): boolean {
    return this.unsavedChangesFlag;
  }

  save(professor: Professor): void {
    this.professorService.create(professor);
    this.unsavedChangesFlag = false;
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
