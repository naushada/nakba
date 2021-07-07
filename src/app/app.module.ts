import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingEnquiryComponent } from './TRACKING/tracking-enquiry/tracking-enquiry.component';
import { TrackingEntryComponent } from './TRACKING/tracking-entry/tracking-entry.component';
import { ShippingComponent } from './SHIPPING/shipping/shipping.component';
import { JobSchedulingComponent } from './SHIPPING/job-scheduling/job-scheduling.component';
import { ManifestingComponent } from './SHIPPING/manifesting/manifesting.component';
import { SuppliesComponent } from './SHIPPING/supplies/supplies.component';
import { ShipmentPricingComponent } from './SHIPPING/shipment-pricing/shipment-pricing.component';
import { AltRefUpdateComponent } from './SHIPPING/alt-ref-update/alt-ref-update.component';
import { OperationsDiscrepancyReportComponent } from './REPORTING/operations-discrepancy-report/operations-discrepancy-report.component';
import { DeliveryRunManifestComponent } from './REPORTING/delivery-run-manifest/delivery-run-manifest.component';
import { ShipmentHistoryReportComponent } from './REPORTING/shipment-history-report/shipment-history-report.component';
import { LoginComponent } from './FRMWRK/login/login.component';
import { MenuBarComponent } from './FRMWRK/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingEnquiryComponent,
    TrackingEntryComponent,
    ShippingComponent,
    JobSchedulingComponent,
    ManifestingComponent,
    SuppliesComponent,
    ShipmentPricingComponent,
    AltRefUpdateComponent,
    OperationsDiscrepancyReportComponent,
    DeliveryRunManifestComponent,
    ShipmentHistoryReportComponent,
    LoginComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
