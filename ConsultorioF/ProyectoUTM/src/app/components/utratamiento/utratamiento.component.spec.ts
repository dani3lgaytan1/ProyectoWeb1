import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtratamientoComponent } from './utratamiento.component';

describe('UtratamientoComponent', () => {
  let component: UtratamientoComponent;
  let fixture: ComponentFixture<UtratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtratamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
