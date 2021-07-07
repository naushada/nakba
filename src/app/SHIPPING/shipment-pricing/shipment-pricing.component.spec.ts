import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPricingComponent } from './shipment-pricing.component';

describe('ShipmentPricingComponent', () => {
  let component: ShipmentPricingComponent;
  let fixture: ComponentFixture<ShipmentPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
