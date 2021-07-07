import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuItem, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule, RoutesRecognized, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

/* Project specific Component */
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
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
