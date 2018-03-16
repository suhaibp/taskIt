import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { AppComponent } from './app.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminCompanyComponent } from './components/admin-company/admin-company.component';
import { CompanyService} from './services/company.service';
import {Config} from './config/config';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
 // MatFormFieldModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { AdminAllCompaniesComponent } from './components/admin-all-companies/admin-all-companies.component';
import { AdminSubscribedComponent } from './components/admin-subscribed/admin-subscribed.component';
import { AdminTrialComponent } from './components/admin-trial/admin-trial.component';
import { AdminNotVerifiedComponent } from './components/admin-not-verified/admin-not-verified.component';
import { AdminExpiredComponent } from './components/admin-expired/admin-expired.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyTaskVsStatusComponent } from './components/company-task-vs-status/company-task-vs-status.component';
import { CompanyResoureVsHourComponent } from './components/company-resoure-vs-hour/company-resoure-vs-hour.component';
import { CompanyProjectVsHourComponent } from './components/company-project-vs-hour/company-project-vs-hour.component';
import { CompanyProjectVsStatusComponent } from './components/company-project-vs-status/company-project-vs-status.component';
import { CompanyProgressGraphComponent } from './components/company-progress-graph/company-progress-graph.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { CompanyStatusGraphComponent } from './components/company-status-graph/company-status-graph.component';
import { CompanyBarGraphComponent } from './components/company-bar-graph/company-bar-graph.component';
import { AdminService } from './services/admin.service';
// import { CompanyService } from './services/company.service';
import { SuperAdminService } from './services/super-admin.service';
import { AdminDashboardPieComponent } from './components/admin-dashboard-pie/admin-dashboard-pie.component';
import { AdminDashboardBarComponent } from './components/admin-dashboard-bar/admin-dashboard-bar.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component'
import { SpinnerComponent } from './components/spinner/spinner.component';


const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-sidebar', component:AdminSidebarComponent},
  {path:'admin-topbar', component:AdminTopbarComponent},
  {path:'admin-footer', component:AdminFooterComponent},
  {path:'admin-company', component:AdminCompanyComponent},
  {path:'admin-all-companies', component:AdminAllCompaniesComponent},
  {path:'admin-subscribed', component:AdminSubscribedComponent},
  {path:'admin-trial', component:AdminTrialComponent},
  {path:'admin-NotVerified', component:AdminNotVerifiedComponent},
  {path:'admin-expired', component:AdminExpiredComponent},
  {path:'company-dashboard', component:CompanyDashboardComponent},
  {path:'company-signup', component:CompanySignupComponent},
 
  {path:'company-login', component:CompanyLoginComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'spinner', component:SpinnerComponent},//To check component
] 
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
 
})
export class DemoMaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponentComponent,
    AdminSidebarComponent,
    AdminTopbarComponent,
    AdminFooterComponent,
    AdminCompanyComponent,
    AdminAllCompaniesComponent,
    AdminSubscribedComponent,
    AdminTrialComponent,
    AdminNotVerifiedComponent,
    AdminExpiredComponent,
    CompanyDashboardComponent,
    CompanyTaskVsStatusComponent,
    CompanyResoureVsHourComponent,
    CompanyProjectVsHourComponent,
    CompanyProjectVsStatusComponent,
    CompanyProgressGraphComponent,
   CompanyLoginComponent,
   EmailVerificationComponent,
   CompanyStatusGraphComponent,
   CompanyBarGraphComponent,
    AdminDashboardPieComponent,
    AdminDashboardBarComponent,
    CompanySignupComponent,
    CompanyLoginComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    HttpModule,
    BrowserAnimationsModule
  
  ],
  providers: [AdminService,SuperAdminService,CompanyService, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
