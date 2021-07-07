import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsDiscrepancyReportComponent } from './operations-discrepancy-report.component';

describe('OperationsDiscrepancyReportComponent', () => {
  let component: OperationsDiscrepancyReportComponent;
  let fixture: ComponentFixture<OperationsDiscrepancyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsDiscrepancyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsDiscrepancyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
