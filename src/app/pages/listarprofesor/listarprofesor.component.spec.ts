import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprofesorComponent } from './listarprofesor.component';

describe('ListarprofesorComponent', () => {
  let component: ListarprofesorComponent;
  let fixture: ComponentFixture<ListarprofesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarprofesorComponent]
    });
    fixture = TestBed.createComponent(ListarprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
