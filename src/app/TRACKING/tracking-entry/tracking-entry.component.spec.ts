import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingEntryComponent } from './tracking-entry.component';

describe('TrackingEntryComponent', () => {
  let component: TrackingEntryComponent;
  let fixture: ComponentFixture<TrackingEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
