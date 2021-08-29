import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Project Specific Component */
import { LoginComponent } from './FRMWRK/login/login.component';
import { MenuBarComponent } from './FRMWRK/menu-bar/menu-bar.component';
import { OperationsDiscrepancyReportComponent } from './REPORTING/operations-discrepancy-report/operations-discrepancy-report.component';
import { ShipmentHistoryReportComponent } from './REPORTING/shipment-history-report/shipment-history-report.component';
import { AltRefUpdateComponent } from './SHIPPING/alt-ref-update/alt-ref-update.component';
import { JobSchedulingComponent } from './SHIPPING/job-scheduling/job-scheduling.component';
import { ManifestingComponent } from './SHIPPING/manifesting/manifesting.component';
import { ShipmentPricingComponent } from './SHIPPING/shipment-pricing/shipment-pricing.component';
import { ShippingComponent } from './SHIPPING/shipping/shipping.component';
import { SuppliesComponent } from './SHIPPING/supplies/supplies.component';
import { TrackingEnquiryComponent } from './TRACKING/tracking-enquiry/tracking-enquiry.component';
import { TrackingEntryComponent } from './TRACKING/tracking-entry/tracking-entry.component';

const routes: Routes = [
  /* Tracking Submenu Items(s) */
  { path: 'tracking-enquiry', component: TrackingEnquiryComponent },
  { path: 'tracking-entry', component: TrackingEntryComponent },
  /* Shipping Submenu's Item(s) */
  { path: 'alt-ref-update', component: AltRefUpdateComponent },
  { path: 'job-scheduling', component: JobSchedulingComponent },
  { path: 'manifesting', component: ManifestingComponent },
  { path: 'shipment-pricing', component: ShipmentPricingComponent },
  { path: 'menu-bar/SHIPPING/Shipping', component: ShippingComponent },
  { path: 'supplies', component: SuppliesComponent },
  /* Reporting Submenu Items(s) */
  { path: 'operations-discrepancy-report', component: OperationsDiscrepancyReportComponent },
  { path: 'shipment-history-report', component: ShipmentHistoryReportComponent },
  /* Landing Page - index/login */
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu-bar', component: MenuBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
