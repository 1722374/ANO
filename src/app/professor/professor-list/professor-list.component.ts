import { Component, OnInit } from '@angular/core';
import {Professor} from '../professor';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professoren: Professor[];
  selektierterProfessor: Professor|undefined;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getProfessoren();
  }

  getProfessoren(): void {
    this.professoren = this.professorService.getProfessoren();
  }
  delete(professor: Professor): void {
    if (this.selektierterProfessor &&
      professor === this.selektierterProfessor) {
      this.selektierterProfessor = undefined;
    }
    this.professorService.delete(professor);
    this.getProfessoren();
  }

  selektiereProfessor(prof: Professor, event: MouseEvent): void {
    if ((event.target as HTMLElement).tagName?.toLowerCase() !== 'button'){
      this.selektierterProfessor = prof;
    }
  }
}
