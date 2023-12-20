import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcursoComponent } from './registrarcurso.component';

describe('RegistrarcursoComponent', () => {
  let component: RegistrarcursoComponent;
  let fixture: ComponentFixture<RegistrarcursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarcursoComponent]
    });
    fixture = TestBed.createComponent(RegistrarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
