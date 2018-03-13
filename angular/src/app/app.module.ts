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
import { AdminService } from './services/admin.service'
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
// import { CompanyService } from './services/company.service';
import { SuperAdminService } from './services/super-admin.service';
import { AdminDashboardPieComponent } from './components/admin-dashboard-pie/admin-dashboard-pie.component';
import { AdminDashboardBarComponent } from './components/admin-dashboard-bar/admin-dashboard-bar.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component'
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { CompayAditninfoComponent } from './components/compay-aditninfo/compay-aditninfo.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
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
  {path:'company-signup', component:CompanySignupComponent},
 
  {path:'company-login', component:CompanyLoginComponent},
  {path:'compay-aditninfo/:id', component:CompayAditninfoComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
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
    CompanyLoginComponent,
    EmailVerificationComponent,
    CompayAditninfoComponent,
    ForgotPasswordComponent,
    AdminDashboardPieComponent,
    AdminDashboardBarComponent,
    CompanySignupComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    ReCaptchaModule
  
  ],
  providers: [Config,CompanyService,AdminService,SuperAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
