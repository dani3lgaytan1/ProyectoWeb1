import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhistoriaExamenComponent } from './lhistoria-examen.component';

describe('LhistoriaExamenComponent', () => {
  let component: LhistoriaExamenComponent;
  let fixture: ComponentFixture<LhistoriaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhistoriaExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LhistoriaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
