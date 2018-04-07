import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {Config} from './config/config';
import { AppComponent } from './app.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';
import { UserService} from './services/user.service';

import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminCompanyComponent } from './components/admin-company/admin-company.component';
import { AdminAllCompaniesComponent } from './components/admin-all-companies/admin-all-companies.component';
import { AdminSubscribedComponent } from './components/admin-subscribed/admin-subscribed.component';
import { AdminTrialComponent } from './components/admin-trial/admin-trial.component';
import { AdminNotVerifiedComponent } from './components/admin-not-verified/admin-not-verified.component';
import { AdminExpiredComponent } from './components/admin-expired/admin-expired.component';

import { CompanyTopbarComponent } from './components/company-topbar/company-topbar.component';
import { CompanyFooterComponent } from './components/company-footer/company-footer.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyUsersComponent } from './components/company-users/company-users.component';
import { CompanyProjectCategoryComponent } from './components/company-project-category/company-project-category.component';
import { CompanyEmployeeLeavesComponent } from './components/company-employee-leaves/company-employee-leaves.component';
import { CompanyRequestManagementComponent } from './components/company-request-management/company-request-management.component';
import { CompanyTimeExtensionRequestComponent } from './components/company-time-extension-request/company-time-extension-request.component';
import { CompanyActivityLogComponent } from './components/company-activity-log/company-activity-log.component';
import { CompanyLeaveRequestListComponent } from './components/company-leave-request-list/company-leave-request-list.component';
import { CompanyUserLeaveRequestComponent } from './components/company-user-leave-request/company-user-leave-request.component';



import { UserTopbarComponent } from './components/user-topbar/user-topbar.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserDashboardBarComponent } from './components/user-dashboard-bar/user-dashboard-bar.component';
import { UserActivityLogComponent } from './components/user-activity-log/user-activity-log.component';
import { UserLeaveRequestComponent } from './components/user-leave-request/user-leave-request.component';
import { UserMyRequestComponent } from './components/user-my-request/user-my-request.component';
import { UserMyRequestMytaskComponent } from './components/user-my-request-mytask/user-my-request-mytask.component';
import { UserTaskVsStatusComponent } from './components/user-task-vs-status/user-task-vs-status.component';
import { UserProgressGraphComponent } from './components/user-progress-graph/user-progress-graph.component';
import { UserBarGraphComponent } from './components/user-bar-graph/user-bar-graph.component';
import { UserStatusGraphComponent } from './components/user-status-graph/user-status-graph.component';


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

} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';



const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-sidebar', component:AdminSidebarComponent},
  {path:'admin-topbar', component:AdminTopbarComponent},
  {path:'admin-footer', component:AdminFooterComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'admin-company', component:AdminCompanyComponent},
  {path:'admin-all-companies', component:AdminAllCompaniesComponent},
  {path:'admin-subscribed', component:AdminSubscribedComponent},
  {path:'admin-trial', component:AdminTrialComponent},
  {path:'admin-NotVerified', component:AdminNotVerifiedComponent},
  {path:'admin-expired', component:AdminExpiredComponent},
  {path:'company-sidebar', component:CompanySidebarComponent},
  {path:'company-topbar', component:CompanyTopbarComponent},
  {path:'company-footer', component:CompanyFooterComponent},
  {path:'company-users', component:CompanyUsersComponent},
  {path:'company-project-category', component:CompanyProjectCategoryComponent},
  {path:'company-employee-leaves', component:CompanyEmployeeLeavesComponent},
  {path:'company-request-management', component:CompanyRequestManagementComponent},
  {path:'company-time-extension-request/:id1/:id2', component:CompanyTimeExtensionRequestComponent},
  {path:'user-topbar', component:UserTopbarComponent},
  {path:'user-sidebar', component:UserSidebarComponent},
  {path:'user-footer', component:UserFooterComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'user-activity-log', component:UserActivityLogComponent},
  {path:'user-leave-request', component:UserLeaveRequestComponent},
  {path:'company-activity-log', component:CompanyActivityLogComponent},
  {path:'user-my-request', component:UserMyRequestComponent},
  {path:'user-dashboard-bar', component:UserDashboardBarComponent},
  {path:'user-task-vs-status', component:UserDashboardBarComponent},
  {path:'user-progress-graph', component:UserProgressGraphComponent},
  {path:'user-bar-graph', component:UserBarGraphComponent},
  {path:'user-status-graph', component:UserStatusGraphComponent},
  {path:'company-leave-request-list', component:CompanyLeaveRequestListComponent},
  {path:'company-user-leave-request/:id', component:CompanyUserLeaveRequestComponent},
  {path:'user-my-request-mytask', component:UserMyRequestMytaskComponent}
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
    AdminDashboardComponent,
    AdminCompanyComponent,
    AdminAllCompaniesComponent,
    AdminSubscribedComponent,
    AdminTrialComponent,
    AdminNotVerifiedComponent,
    AdminExpiredComponent,
    CompanyTopbarComponent, 
    CompanyFooterComponent,
    CompanySidebarComponent,
    CompanyUsersComponent,
    CompanyProjectCategoryComponent,
    CompanyEmployeeLeavesComponent,
    CompanyRequestManagementComponent,
    CompanyTimeExtensionRequestComponent,
    CompanyActivityLogComponent,
    UserTopbarComponent,
    UserSidebarComponent,
    UserFooterComponent,
    UserDashboardComponent,
    UserActivityLogComponent,
    UserLeaveRequestComponent,
    UserMyRequestComponent,
    UserDashboardBarComponent,
    UserTaskVsStatusComponent,
    UserProgressGraphComponent,
    UserBarGraphComponent,
    UserStatusGraphComponent,
    CompanyLeaveRequestListComponent,
    CompanyUserLeaveRequestComponent,
    UserMyRequestMytaskComponent
  
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Daterangepicker,
    DemoMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    NgbModule.forRoot()
  ],
  providers: [Config,AdminService,CompanyService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
