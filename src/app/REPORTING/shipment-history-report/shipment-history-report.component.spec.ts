import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentHistoryReportComponent } from './shipment-history-report.component';

describe('ShipmentHistoryReportComponent', () => {
  let component: ShipmentHistoryReportComponent;
  let fixture: ComponentFixture<ShipmentHistoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentHistoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentHistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
