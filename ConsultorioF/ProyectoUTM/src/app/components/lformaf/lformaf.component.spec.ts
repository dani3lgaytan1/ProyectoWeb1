import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LformafComponent } from './lformaf.component';

describe('LformafComponent', () => {
  let component: LformafComponent;
  let fixture: ComponentFixture<LformafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LformafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LformafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
