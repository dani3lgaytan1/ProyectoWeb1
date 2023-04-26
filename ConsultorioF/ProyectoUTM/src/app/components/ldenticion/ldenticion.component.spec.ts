import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdenticionComponent } from './ldenticion.component';

describe('LdenticionComponent', () => {
  let component: LdenticionComponent;
  let fixture: ComponentFixture<LdenticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdenticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LdenticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
