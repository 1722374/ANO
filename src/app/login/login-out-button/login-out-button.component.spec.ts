import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOutButtonComponent } from './login-out-button.component';

describe('LoginOutButtonComponent', () => {
  let component: LoginOutButtonComponent;
  let fixture: ComponentFixture<LoginOutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
