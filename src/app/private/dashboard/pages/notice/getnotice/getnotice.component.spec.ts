import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnoticeComponent } from './getnotice.component';

describe('GetnoticeComponent', () => {
  let component: GetnoticeComponent;
  let fixture: ComponentFixture<GetnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
