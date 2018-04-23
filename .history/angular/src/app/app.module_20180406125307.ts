import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
  import {Config} from './config/config';
import { ReCaptchaModule } from 'angular2-recaptcha';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from '../../node_modules/ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminCompanyComponent } from './components/admin-company/admin-company.component';
import { AdminAllCompaniesComponent } from './components/admin-all-companies/admin-all-companies.component';
import { AdminSubscribedComponent } from './components/admin-subscribed/admin-subscribed.component';
import { AdminTrialComponent } from './components/admin-trial/admin-trial.component';
import { AdminNotVerifiedComponent } from './components/admin-not-verified/admin-not-verified.component';
import { AdminExpiredComponent } from './components/admin-expired/admin-expired.component';
import { AdminPlanComponent } from './components/admin-plan/admin-plan.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyUpgradeComponent } from './components/company-upgrade/company-upgrade.component';
import { CompanyPlanlistComponent } from './components/company-planlist/company-planlist.component';
import { AdminDashboardPieComponent } from './components/admin-dashboard-pie/admin-dashboard-pie.component';
import { CompanyAddProjectComponent } from './components/company-add-project/company-add-project.component'
import { CompanyProjectComponent } from './components/company-project/company-project.component';
import { CompanyAssignProjectComponent } from './components/company-assign-project/company-assign-project.component';
import { CompanyEditProjectComponent } from './components/company-edit-project/company-edit-project.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { CompanyTopbarComponent } from './components/company-topbar/company-topbar.component';
import { UserTopbarComponent } from './components/user-topbar/user-topbar.component';
import { UserProjectEstimationComponent } from './components/user-project-estimation/user-project-estimation.component';
import { CompanyApproveEstimationComponent } from './components/company-approve-estimation/company-approve-estimation.component';
import { CompanyApproveProjectComponent } from './components/company-approve-project/company-approve-project.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';
import { TestUserComponent } from './components/test-user/test-user.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyTaskVsStatusComponent } from './components/company-task-vs-status/company-task-vs-status.component';
import { CompanyResoureVsHourComponent } from './components/company-resoure-vs-hour/company-resoure-vs-hour.component';
import { CompanyProjectVsHourComponent } from './components/company-project-vs-hour/company-project-vs-hour.component';
import { CompanyProjectVsStatusComponent } from './components/company-project-vs-status/company-project-vs-status.component';
import { CompanyProgressGraphComponent } from './components/company-progress-graph/company-progress-graph.component';
import { CompanyStatusGraphComponent } from './components/company-status-graph/company-status-graph.component';
import { CompanyBarGraphComponent } from './components/company-bar-graph/company-bar-graph.component';
import { AdminDashboardBarComponent } from './components/admin-dashboard-bar/admin-dashboard-bar.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component'
import { CompayAditninfoComponent } from './components/compay-aditninfo/compay-aditninfo.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyProjectPlanningComponent } from './components/company-project-planning/company-project-planning.component';
import { CompanyManageTeamComponent } from './components/company-manage-team/company-manage-team.component';
import { CompanyManageAccessRightsComponent } from './components/company-manage-access-rights/company-manage-access-rights.component';

import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';
import { UserService} from './services/user.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
 MatFormFieldModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { SuperAdminService } from './services/super-admin.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyWorkingTimeComponent } from './components/company-working-time/company-working-time.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { TreeModule, SharedModule } from 'primeng/primeng';
import { CompanyManageHolidaysComponent } from './components/company-manage-holidays/company-manage-holidays.component';
import { CompanyHolidayComponent } from './components/company-holiday/company-holiday.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { UserViewProjectComponent } from './components/user-view-project/user-view-project.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { ProjectPipe } from './pipes/project.pipe';
import { CompanyTaskRequestsComponent } from './components/company-task-requests/company-task-requests.component';
import { CompanyNewTaskManagementComponent } from './components/company-new-task-management/company-new-task-management.component';


const appRoutes: Routes = [
  {path: '', component: ReferenceComponentComponent },
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-login', component:AdminLoginComponent},
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
  {path:'admin-plan', component:AdminPlanComponent},
  {path:'home', component:HomeComponent},
  {path:'planlist', component:CompanyPlanlistComponent},
  {path:'upgrade/:id', component:CompanyUpgradeComponent},
  {path:'add-project', component:CompanyAddProjectComponent},
  {path:'project', component:CompanyProjectComponent},
  {path:'assign-project/:id', component:CompanyAssignProjectComponent},
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
  {path:'edit-project/:id', component:CompanyEditProjectComponent},
  {path:'company-topbar', component:CompanyTopbarComponent},
  {path:'user-topbar', component:UserTopbarComponent},
  {path:'user-sidebar', component:UserSidebarComponent},
  {path:'estimate-project/:id1/:id2', component:UserProjectEstimationComponent},
  {path:'approve-estimation/:id', component:CompanyApproveEstimationComponent},
  {path:'approve-project/:id', component:CompanyApproveProjectComponent},
  {path:'edit-profile', component:UserEditProfileComponent},
  {path:'test-user', component:TestUserComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'project-planning/:id', component:CompanyProjectPlanningComponent},
  {path:'spinner', component:SpinnerComponent},//To check component

  {path:'user-projects', component:UserProjectsComponent},
  {path:'user-view-project/:id', component:UserViewProjectComponent},

  // {path:'admin-sidebar', component:AdminSidebarComponent},
  // {path:'admin-topbar', component:AdminTopbarComponent},
  // {path:'admin-footer', component:AdminFooterComponent},
  {path:'company-sidebar', component:CompanySidebarComponent},
  // {path:'company-topbar', component:CompanyTopbarComponent},
  // {path:'company-footer', component:CompanyFooterComponent},
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
    AdminLoginComponent,
    AdminSidebarComponent,
    AdminTopbarComponent,
    AdminFooterComponent,
    AdminCompanyComponent,
    AdminAllCompaniesComponent,
    AdminSubscribedComponent,
    AdminTrialComponent,
    AdminNotVerifiedComponent,
    AdminExpiredComponent,
    AdminPlanComponent,
    HomeComponent,
    CompanyPlanlistComponent,
    CompanyUpgradeComponent,
    AdminDashboardPieComponent,
    CompanyAddProjectComponent,
    CompanyProjectComponent,
    CompanyLoginComponent,
    EmailVerificationComponent,
    CompanyAssignProjectComponent,
    CompanyEditProjectComponent,
    CompanyTopbarComponent,
    UserTopbarComponent, 
    UserProjectEstimationComponent,
    CompanyApproveEstimationComponent,
    CompanyApproveProjectComponent,
    UserEditProfileComponent,
    TestUserComponent,
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
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DragulaModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
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
