import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllchecksComponent } from './allchecks/allchecks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { VerifiersComponent } from './verifiers/verifiers.component';

const routes: Routes = [{ path: 'Dashboard', component: DashboardComponent }, { path: 'Employees', component: ProfileComponent }
  , { path: 'Reports', component: ReportsComponent },
{ path: 'Verifiers', component: VerifiersComponent },
{ path: 'Admin', component: AdminComponent },
{ path: 'evidence', component: EvidenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
