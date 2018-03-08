import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Config} from './config/config';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
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
import { AdminPlanComponent } from './components/admin-plan/admin-plan.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyUpgradeComponent } from './components/company-upgrade/company-upgrade.component';
import { CompanyPlanlistComponent } from './components/company-planlist/company-planlist.component';
import { AdminDashboardPieComponent } from './components/admin-dashboard-pie/admin-dashboard-pie.component';
import { CompanyAddProjectComponent } from './components/company-add-project/company-add-project.component'
import { CompanyProjectComponent } from './components/company-project/company-project.component';
import { AssignProjectComponent } from './components/assign-project/assign-project.component';

import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';

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

const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-login', component:AdminLoginComponent},
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
  {path:'admin-plan', component:AdminPlanComponent},
  {path:'home', component:HomeComponent},
  {path:'planlist', component:CompanyPlanlistComponent},
  {path:'upgrade/:id', component:CompanyUpgradeComponent},
  {path:'add-project', component:CompanyAddProjectComponent},
  {path:'project', component:CompanyProjectComponent},
  {path:'assign-project', component:AssignProjectComponent},
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
    AdminLoginComponent,
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
    AdminPlanComponent,
    HomeComponent,
    CompanyPlanlistComponent,
    CompanyUpgradeComponent,
    AdminDashboardPieComponent,
    CompanyAddProjectComponent,
    CompanyProjectComponent,
    AssignProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule
  ],
  providers: [Config, AdminService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
