import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorMainComponent } from './professor-main.component';

describe('ProfessorMainComponent', () => {
  let component: ProfessorMainComponent;
  let fixture: ComponentFixture<ProfessorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
