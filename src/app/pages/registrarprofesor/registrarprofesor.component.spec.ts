import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarprofesorComponent } from './registrarprofesor.component';

describe('RegistrarprofesorComponent', () => {
  let component: RegistrarprofesorComponent;
  let fixture: ComponentFixture<RegistrarprofesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarprofesorComponent]
    });
    fixture = TestBed.createComponent(RegistrarprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
