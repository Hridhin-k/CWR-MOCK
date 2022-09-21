import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { PartlyVaccinatedComponent } from './partly-vaccinated/partly-vaccinated.component';
import { VaccineCheckComponent } from './vaccine-check/vaccine-check.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './base/base.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { VerifiersComponent } from './verifiers/verifiers.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarDirective } from './sidebar.directive';
import { AllchecksComponent } from './allchecks/allchecks.component';
import { CommunicationComponent } from './communication/communication.component';
import { UploadEvidenceComponent } from './upload-evidence/upload-evidence.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EvidenceComponent,
    PartlyVaccinatedComponent,
    VaccineCheckComponent,
    BaseComponent,
    OffcanvasComponent,
    DashboardComponent,
    ReportsComponent,
    VerifiersComponent,
    AdminComponent,
    SidebarDirective,
    AllchecksComponent,
    CommunicationComponent,
    UploadEvidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
