import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopacientesComponent } from './infopacientes.component';

describe('InfopacientesComponent', () => {
  let component: InfopacientesComponent;
  let fixture: ComponentFixture<InfopacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfopacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
