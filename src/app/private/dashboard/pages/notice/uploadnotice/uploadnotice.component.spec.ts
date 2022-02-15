import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadnoticeComponent } from './uploadnotice.component';

describe('UploadnoticeComponent', () => {
  let component: UploadnoticeComponent;
  let fixture: ComponentFixture<UploadnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
