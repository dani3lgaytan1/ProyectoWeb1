import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpersonalesnpComponent } from './lpersonalesnp.component';

describe('LpersonalesnpComponent', () => {
  let component: LpersonalesnpComponent;
  let fixture: ComponentFixture<LpersonalesnpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpersonalesnpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpersonalesnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
