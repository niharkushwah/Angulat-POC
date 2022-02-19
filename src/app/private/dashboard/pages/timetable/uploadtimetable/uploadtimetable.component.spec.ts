import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtimetableComponent } from './uploadtimetable.component';

describe('UploadtimetableComponent', () => {
  let component: UploadtimetableComponent;
  let fixture: ComponentFixture<UploadtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadtimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
