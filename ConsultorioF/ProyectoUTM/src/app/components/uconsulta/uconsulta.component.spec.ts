import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UconsultaComponent } from './uconsulta.component';

describe('UconsultaComponent', () => {
  let component: UconsultaComponent;
  let fixture: ComponentFixture<UconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UconsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
