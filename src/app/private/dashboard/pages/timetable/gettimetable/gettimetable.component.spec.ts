import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettimetableComponent } from './gettimetable.component';

describe('GettimetableComponent', () => {
  let component: GettimetableComponent;
  let fixture: ComponentFixture<GettimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
