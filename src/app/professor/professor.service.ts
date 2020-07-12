import { Injectable } from '@angular/core';
import {Professor} from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private profs: Professor[] = [
    {vorname: 'Thomas', nachname: 'Specht', kuerzel: 'SPE', raum: 'A105b'},
    {vorname: 'Michael', nachname: 'Gröschel', kuerzel: 'GMI', raum: 'A105b'}
  ];

  getProfessoren(): Professor[]{
    return this.profs;
  }

  getProfessor(kuerzel: string): Professor |undefined {
    for (const prof of this.profs){
      if (prof.kuerzel === kuerzel){
        return prof;
      }
    }
    return undefined;
  }

  create(professor: Professor): Professor {
    this.profs.push(professor);
    return professor;
  }

  update(professor: Professor): Professor {
    for (const prof of this.profs) {
      if (prof.kuerzel === professor.kuerzel) {
        prof.vorname = professor.vorname;
        prof.nachname = professor.nachname;
        prof.kuerzel = professor.kuerzel;
        prof.raum = professor.raum;
      }
    }
    return professor;
  }

  delete(professorToDelete: Professor): void {
    this.profs = this.profs.filter(
      (element: Professor) => element.kuerzel !== professorToDelete.kuerzel);
  }

  constructor() { }
}
