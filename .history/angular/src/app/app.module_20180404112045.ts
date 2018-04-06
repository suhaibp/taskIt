import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReCaptchaModule } from 'angular2-recaptcha';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminCompanyComponent } from './components/admin-company/admin-company.component';
import { CompanyService} from './services/company.service';
import {Config} from './config/config';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from '../../node_modules/ng2-dragula/ng2-dragula';
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
import { UserService } from './services/user.service';
import { SuperAdminService } from './services/super-admin.service';
import { AdminDashboardPieComponent } from './components/admin-dashboard-pie/admin-dashboard-pie.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardBarComponent } from './components/admin-dashboard-bar/admin-dashboard-bar.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component'


import { CompayAditninfoComponent } from './components/compay-aditninfo/compay-aditninfo.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CompanyTopbarComponent } from './components/company-topbar/company-topbar.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyProjectPlanningComponent } from './components/company-project-planning/company-project-planning.component';

import { CompanyManageTeamComponent } from './components/company-manage-team/company-manage-team.component';
import { CompanyManageAccessRightsComponent } from './components/company-manage-access-rights/company-manage-access-rights.component';
import { CompanyWorkingTimeComponent } from './components/company-working-time/company-working-time.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { TreeModule, SharedModule } from 'primeng/primeng';
import { CompanyManageHolidaysComponent } from './components/company-manage-holidays/company-manage-holidays.component';
import { CompanyHolidayComponent } from './components/company-holiday/company-holiday.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { UserViewProjectComponent } from './components/user-view-project/user-view-project.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserTopbarComponent } from './components/user-topbar/user-topbar.component';
import { ProjectPipe } from './pipes/project.pipe';
import { CompanyTaskRequestsComponent } from './components/company-task-requests/company-task-requests.component';
import { CompanyNewTaskManagementComponent } from './components/company-new-task-management/company-new-task-management.component';


const appRoutes: Routes = [
  {path: '', component: ReferenceComponentComponent },
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-sidebar', component:AdminSidebarComponent},
  {path:'admin-topbar', component:AdminTopbarComponent},
  {path:'admin-footer', component:AdminFooterComponent},
  {path:'admin-company', component:AdminCompanyComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'admin-all-companies', component:AdminAllCompaniesComponent},
  {path:'admin-subscribed', component:AdminSubscribedComponent},
  {path:'admin-trial', component:AdminTrialComponent},
  {path:'admin-NotVerified', component:AdminNotVerifiedComponent},
  {path:'admin-expired', component:AdminExpiredComponent},
  {path:'company-dashboard', component:CompanyDashboardComponent},
  {path:'company-signup', component:CompanySignupComponent},
  {path:'company-access-rights', component:CompanyManageAccessRightsComponent},
  {path:'company-working-time', component:CompanyWorkingTimeComponent},
  {path:'company-manage-holyday', component:CompanyManageHolidaysComponent},
  {path:'company-task-requests/:id', component:CompanyTaskRequestsComponent},
  {path:'company-task-manage/:id', component:CompanyNewTaskManagementComponent},
 
  {path:'company-login', component:CompanyLoginComponent},
  {path:'compay-aditninfo/:id', component:CompayAditninfoComponent},
  {path:'company-team', component:CompanyManageTeamComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'project-planning/:id', component:CompanyProjectPlanningComponent},
  {path:'spinner', component:SpinnerComponent},//To check component

  {path:'user-projects', component:UserProjectsComponent},
  {path:'user-view-project/:id', component:UserViewProjectComponent},
  
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
  declarations: [],
 
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
    CompanyLoginComponent,
    EmailVerificationComponent,
    CompayAditninfoComponent,
    ForgotPasswordComponent,
    AdminDashboardPieComponent,
    AdminDashboardBarComponent,
    CompanySignupComponent,
    SpinnerComponent,
    CompanyTopbarComponent,
    CompanySidebarComponent,
    CompanyProjectPlanningComponent,
    CompanyDashboardComponent,
    CompanyTaskVsStatusComponent,
    CompanyResoureVsHourComponent,
    CompanyProjectVsHourComponent,
    CompanyProjectVsStatusComponent,
    CompanyProgressGraphComponent,
   CompanyStatusGraphComponent,
   CompanyBarGraphComponent,
    CompanyManageTeamComponent, 
    CompanyTopbarComponent, 
    CompanySidebarComponent,
    CompanyManageAccessRightsComponent,
    CompanyWorkingTimeComponent,
    CompanyManageHolidaysComponent,
    CompanyManageAccessRightsComponent,
    UserProjectsComponent,
    UserViewProjectComponent, 
    UserSidebarComponent, 
    UserTopbarComponent,
    ProjectPipe,
    CompanyTaskRequestsComponent,
    CompanyNewTaskManagementComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    TreeviewModule.forRoot(),TreeModule, SharedModule,
    ReCaptchaModule,
    NgbModule.forRoot()
  ],
  providers: [AdminService,SuperAdminService,CompanyService, Config, UserService],
  
  

  bootstrap: [AppComponent]
})
export class AppModule { }
