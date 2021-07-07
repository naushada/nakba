import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEnquiryComponent } from './tracking-enquiry.component';

describe('TrackingEnquiryComponent', () => {
  let component: TrackingEnquiryComponent;
  let fixture: ComponentFixture<TrackingEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
