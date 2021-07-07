import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRunManifestComponent } from './delivery-run-manifest.component';

describe('DeliveryRunManifestComponent', () => {
  let component: DeliveryRunManifestComponent;
  let fixture: ComponentFixture<DeliveryRunManifestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRunManifestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRunManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
