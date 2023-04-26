import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpacientesComponent } from './lpacientes.component';

describe('LpacientesComponent', () => {
  let component: LpacientesComponent;
  let fixture: ComponentFixture<LpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
