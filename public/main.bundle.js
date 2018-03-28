webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DemoMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__ = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_topbar_admin_topbar_component__ = __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_company_admin_company_component__ = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__node_modules_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_company_dashboard_company_dashboard_component__ = __webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_company_task_vs_status_company_task_vs_status_component__ = __webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_company_resoure_vs_hour_company_resoure_vs_hour_component__ = __webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_company_project_vs_hour_company_project_vs_hour_component__ = __webpack_require__("../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_company_project_vs_status_company_project_vs_status_component__ = __webpack_require__("../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_company_progress_graph_company_progress_graph_component__ = __webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_company_login_company_login_component__ = __webpack_require__("../../../../../src/app/components/company-login/company-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_company_status_graph_company_status_graph_component__ = __webpack_require__("../../../../../src/app/components/company-status-graph/company-status-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_company_bar_graph_company_bar_graph_component__ = __webpack_require__("../../../../../src/app/components/company-bar-graph/company-bar-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_super_admin_service__ = __webpack_require__("../../../../../src/app/services/super-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_admin_dashboard_pie_admin_dashboard_pie_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_admin_dashboard_bar_admin_dashboard_bar_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_company_signup_company_signup_component__ = __webpack_require__("../../../../../src/app/components/company-signup/company-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_compay_aditninfo_compay_aditninfo_component__ = __webpack_require__("../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_company_topbar_company_topbar_component__ = __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_company_sidebar_company_sidebar_component__ = __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_company_project_planning_company_project_planning_component__ = __webpack_require__("../../../../../src/app/components/company-project-planning/company-project-planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_company_manage_team_company_manage_team_component__ = __webpack_require__("../../../../../src/app/components/company-manage-team/company-manage-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_company_manage_access_rights_company_manage_access_rights_component__ = __webpack_require__("../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import { CompanyService } from './services/company.service';














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
    { path: 'admin-topbar', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */] },
    { path: 'admin-footer', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'company-dashboard', component: __WEBPACK_IMPORTED_MODULE_25__components_company_dashboard_company_dashboard_component__["a" /* CompanyDashboardComponent */] },
    { path: 'company-signup', component: __WEBPACK_IMPORTED_MODULE_39__components_company_signup_company_signup_component__["a" /* CompanySignupComponent */] },
    { path: 'company-access-rights', component: __WEBPACK_IMPORTED_MODULE_47__components_company_manage_access_rights_company_manage_access_rights_component__["a" /* CompanyManageAccessRightsComponent */] },
    { path: 'company-login', component: __WEBPACK_IMPORTED_MODULE_31__components_company_login_company_login_component__["a" /* CompanyLoginComponent */] },
    { path: 'compay-aditninfo/:id', component: __WEBPACK_IMPORTED_MODULE_40__components_compay_aditninfo_compay_aditninfo_component__["a" /* CompayAditninfoComponent */] },
    { path: 'company-team', component: __WEBPACK_IMPORTED_MODULE_46__components_company_manage_team_company_manage_team_component__["a" /* CompanyManageTeamComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_32__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_41__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'project-planning/:id', component: __WEBPACK_IMPORTED_MODULE_45__components_company_project_planning_company_project_planning_component__["a" /* CompanyProjectPlanningComponent */] },
    { path: 'spinner', component: __WEBPACK_IMPORTED_MODULE_42__components_spinner_spinner_component__["a" /* SpinnerComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_19__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["I" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_company_login_company_login_component__["a" /* CompanyLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_compay_aditninfo_compay_aditninfo_component__["a" /* CompayAditninfoComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_admin_dashboard_pie_admin_dashboard_pie_component__["a" /* AdminDashboardPieComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_admin_dashboard_bar_admin_dashboard_bar_component__["a" /* AdminDashboardBarComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_company_signup_company_signup_component__["a" /* CompanySignupComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_company_topbar_company_topbar_component__["a" /* CompanyTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_company_sidebar_company_sidebar_component__["a" /* CompanySidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_company_project_planning_company_project_planning_component__["a" /* CompanyProjectPlanningComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_company_dashboard_company_dashboard_component__["a" /* CompanyDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_company_task_vs_status_company_task_vs_status_component__["a" /* CompanyTaskVsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_company_resoure_vs_hour_company_resoure_vs_hour_component__["a" /* CompanyResoureVsHourComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_company_project_vs_hour_company_project_vs_hour_component__["a" /* CompanyProjectVsHourComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_company_project_vs_status_company_project_vs_status_component__["a" /* CompanyProjectVsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_company_progress_graph_company_progress_graph_component__["a" /* CompanyProgressGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_company_status_graph_company_status_graph_component__["a" /* CompanyStatusGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_company_bar_graph_company_bar_graph_component__["a" /* CompanyBarGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_company_manage_team_company_manage_team_component__["a" /* CompanyManageTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_company_manage_access_rights_company_manage_access_rights_component__["a" /* CompanyManageAccessRightsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__node_modules_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_49__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_48__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js') : [],
                __WEBPACK_IMPORTED_MODULE_6_angular2_recaptcha__["ReCaptchaModule"],
                __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_14__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_35__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_36__services_super_admin_service__["a" /* SuperAdminService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-all-companies works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAllCompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAllCompaniesComponent = (function () {
    function AdminAllCompaniesComponent() {
    }
    AdminAllCompaniesComponent.prototype.ngOnInit = function () {
    };
    AdminAllCompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-all-companies',
            template: __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminAllCompaniesComponent);
    return AdminAllCompaniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n      \r\n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n                 <!-- sidebar-->\r\n               \r\n                 <admin-sidebar></admin-sidebar> \r\n                 <!-- end sidebar-->\r\n            </div>\r\n            \r\n            <div class=\"col-md-12 col-xs-12\">\r\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n                <!-- topbar-->\r\n                <admin-topbar></admin-topbar> \r\n                \r\n                    <!-- end topbar-->\r\n                \r\n                \r\n                <div class=\"user-dashboard\">\r\n                 <h1>Hello, JS</h1>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2 col-sm-2 col-xs-12 gutter\">\r\n\r\n                            <ul class=\"nav tabs\">\r\n                                <li [ngClass]=\"{'active1': viewComp == 'AllCompanies'}\"><a (click)=\"updateView('AllCompanies')\" href=\"#tab1\" data-toggle=\"tab\">All Companies</a></li>\r\n                                <li [ngClass]=\"{'active1': viewComp == 'Subscribed'}\"><a (click)=\"updateView('Subscribed')\" href=\"#tab2\" data-toggle=\"tab\">Subscribed</a></li> \r\n                                <li [ngClass]=\"{'active1': viewComp == 'Trial'}\"><a (click)=\"updateView('Trial')\" href=\"#tab3\" data-toggle=\"tab\">Trial</a></li>\r\n                                <li [ngClass]=\"{'active1': viewComp == 'NotVerified'}\"><a (click)=\"updateView('NotVerified')\" href=\"#tab4\" data-toggle=\"tab\">Not Verified</a></li>  \r\n                                <li [ngClass]=\"{'active1': viewComp == 'Expired'}\"><a (click)=\"updateView('Expired')\" href=\"#tab5\" data-toggle=\"tab\">Expired</a></li>\r\n                                              \r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\r\n\r\n                            <div *ngIf=\"viewComp == 'AllCompanies'\">\r\n                                <admin-all-companies></admin-all-companies>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'Subscribed'\">\r\n                                  <admin-subscribed></admin-subscribed>\r\n                                </div>\r\n                              <div *ngIf=\"viewComp == 'Trial'\">\r\n                                <admin-trial></admin-trial>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'NotVerified'\">\r\n                                <admin-not-verified></admin-not-verified>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'Expired'\">\r\n                                <admin-expired></admin-expired>\r\n                              </div>\r\n                            \r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n                <!-- footer-->\r\n                <admin-footer></admin-footer>\r\n       <!-- end footer-->\r\n        </div>\r\n         </div>\r\n        <!-- Modal -->\r\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminCompanyComponent = (function () {
    function AdminCompanyComponent(routes) {
        this.routes = routes;
        this.viewComp = 'AllCompanies';
    }
    AdminCompanyComponent.prototype.ngOnInit = function () {
        console.log(this.viewComp);
    };
    AdminCompanyComponent.prototype.updateView = function (page) {
        this.viewComp = page;
        this.title = page + ' Users List';
    };
    AdminCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-company',
            template: __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminCompanyComponent);
    return AdminCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.domain,\r\n.tick,\r\n.tick line {\r\n  stroke: #62D2E7;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <h1>{{title}}</h1> -->\r\n<!-- <h2>{{subtitle}}</h2> -->\r\n<div  class=\"col-md-12 no-g-data\">\r\n    <!-- <svg  width=\"960\" height=\"500\"></svg> -->\r\n    <div id=\"chart\"></div>\r\n\r\n</div>\r\n    \r\n<ng-template #empty>\r\n    <div class=\"col-md-12 no-g-data\">\r\n        <!-- <img src=\"assets/images/sad.png\" alt=\"sad\"> -->\r\n        <h4>No Data Available!</h4>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var AdminDashboardBarComponent = (function () {
    function AdminDashboardBarComponent(superAdminService) {
        this.superAdminService = superAdminService;
        // public barchart: count[] =[ ] ;
        this.graphData = true;
        this.title = 'Company vs Survey';
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
    }
    AdminDashboardBarComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminDashboardBarComponent.prototype.refresh = function () {
        //     this.superAdminService.getBarDataforAdminDashboard().subscribe(data=>{
        //      console.log(data.length)
        //      if(data.length <= 0){
        //      }
        //      // console.log(this.graphData)
        //    this.barchart= [];
        //    data.forEach(elm =>{
        //     //  console.log(elm);
        //      if (elm.tbl_projects.length != 0){
        //       this.graphData = true;
        //        this.barchart.push({label: elm.cmp_name, value:(elm.tbl_projects.length)});
        //        // this.initSvg();
        //        // this.initAxis();
        //        // this.drawAxis();
        //        // this.drawBars();
        //      }
        //    });
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.barchart.push({label: "elm.cmp_name", value:5});
        //    this.drawBar();
        //   //  console.log(data);
        //   });
        //   }
        //   /*_____________________________________BAR CHART____________________________________*/
        // drawBar(){
        //   var bardata = [];
        // for (var i = 0; i < 100; i++) {
        //   bardata.push(Math.round(Math.random()*30) +1)
        // };
        // var height = 500,
        // 		width = 800		
        // var yScale = d3.scaleLinear()
        //     .domain([0, d3.max(bardata)])
        //     .range([0, height]);
        // var xScale = d3.scaleBand()
        //     .domain(d3.range(0, bardata.length))
        //     .range([0, width]);
        // var colors = d3.scaleLinear()
        //     .domain([0, d3.max(bardata)])
        //     .range(['#ffeb3b', '#d20f53']);
        // var tooltip = d3.select('body').append('div')
        // 		.style('position', 'absolute')
        // 		.style('background', '#fff')
        // 		.style('padding', '5px')
        // 		.style('border', '1px #000 solid')
        // 		.style('border-radius', '5px')
        // 		.style('opacity', '0');
        // var myChart = d3.select('#chart').append('svg')
        // 					.attr('width', width)
        // 					.attr('height', height)
        // 					.style('background', '#fdf6e3')
        // 					.selectAll('rect').data(bardata)
        // 					.enter().append('rect')
        // 						.style('fill', colors)
        // 						.attr('width', xScale.bandwidth())
        // 						.attr('height', 0)
        // 						.attr('x', function(d,i) {
        // 							return (i * xScale.bandwidth()) + 1;
        // 						})
        // 						.attr('y', height)
        // 				.on('mouseover', function(d) {
        //           d3.select(this).style('opacity', '0.3')	
        // 					tooltip.style('opacity', '1').html(d)
        // 						.style('left', (d3.event.pageX)+'px')
        // 						.style('top', (d3.event.pageY)+'px')	
        // 				})
        // 				.on('mouseout', function(d) {
        //           d3.select(this).style('opacity', '1')
        // 					tooltip.style('opacity', '0')
        // 				});
        // 	myChart.transition()
        // 		.attr('height', function(d){
        // 			return yScale(d);
        // 		})
        // 		.attr('y', function(d){
        // 			return height - yScale(d);
        // 		})
        // 		.duration(800)
        // 		.delay(function(d,i) {
        // 			return i * 20;
        // 		});
    };
    AdminDashboardBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard-bar',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard-bar/admin-dashboard-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], AdminDashboardBarComponent);
    return AdminDashboardBarComponent;
}());

// export interface count {
//   company: string,
//   count: number
// } 


/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  .pie-gr {\r\n    /* background: -webkit-gradient(linear, left top, left bottom, from(#606c88), to(#3f4c6b));\r\n    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%); */\r\n    background-color: #fff;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 80px;\r\n  }\r\n  \r\n  .pie {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-filter: drop-shadow(0 2px 0px #333);\r\n            filter: drop-shadow(0 2px 0px #333);\r\n  }\r\n  \r\n  .data-path:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .data-text {\r\n    transition: transform .2s ease-in-out;\r\n    fill: #fff;\r\n  }\r\n  .data-text__value {\r\n    font-size: 7rem;\r\n    transform: translateY(-0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text__name {\r\n    font-size: 2rem;\r\n    transform: translateY(0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text--show {\r\n    transform: translateY(0);\r\n    animation: fadeGraphTextIn 0.5s forwards;\r\n  }\r\n  .data-text:hover {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .legend-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  @keyframes fadeGraphTextIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pie-gr\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var AdminDashboardPieComponent = (function () {
    function AdminDashboardPieComponent(superAdminService) {
        this.superAdminService = superAdminService;
    }
    AdminDashboardPieComponent.prototype.ngOnInit = function () {
        this.loadDetails();
    };
    AdminDashboardPieComponent.prototype.loadDetails = function () {
        var _this = this;
        this.superAdminService.getPieDataforAdminDashboard().subscribe(function (resData) {
            // console.log(resData)
            _this.pieData = resData;
            _this.drawPie();
        });
    };
    AdminDashboardPieComponent.prototype.drawPie = function () {
        // const pieData = [
        //   {name: 'Running', value: 40, color: '#18FFFF'},
        //   {name: 'Paused', value: 40, color: '#0288D1'},
        //   {name: 'Stopped', value: 7, color: '#BF360C'},
        //   {name: 'Failed', value: 13, color: '#F4511E'},
        //   {name: 'Unknown', value: 19, color: '#F9A825'},
        // ];
        bakeDonut(this.pieData);
        function bakeDonut(d) {
            var activeSegment;
            var data = d.sort(function (a, b) { return b['value'] - a['value']; }), viewWidth = 500, viewHeight = 300, svgWidth = viewHeight, svgHeight = viewHeight, thickness = 40, colorArray = data.map(function (k) { return k.color; }), el = d3.select('.pie-gr'), radius = Math.min(svgWidth, svgHeight) / 2, color = d3.scaleOrdinal()
                .range(colorArray);
            var max = d3.max(data, function (maxData) { return maxData.value; });
            var svg = el.append('svg')
                .attr('viewBox', "0 0 " + (viewWidth + thickness) + " " + (viewHeight + thickness))
                .attr('class', 'pie')
                .attr('width', viewWidth)
                .attr('height', svgHeight);
            var g = svg.append('g')
                .attr('transform', "translate( " + ((svgWidth / 2) + (thickness / 2)) + ", " + ((svgHeight / 2) + (thickness / 2)) + ")");
            var arc = d3.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius);
            var arcHover = d3.arc()
                .innerRadius(radius - (thickness + 5))
                .outerRadius(radius + 8);
            var pie = d3.pie()
                .value(function (pieData) { return pieData.value; })
                .sort(null);
            var maxAssigned = false;
            var maxArcAssigned = false;
            var path = g.selectAll('path')
                .attr('class', 'data-path')
                .data(pie(data))
                .enter()
                .append('g')
                .attr('class', 'data-group')
                .each(function (pathData, i) {
                var group = d3.select(this);
                group.append('text')
                    .text("" + pathData.data.value)
                    .attr('class', 'data-text data-text__value')
                    .attr('text-anchor', 'middle')
                    .attr('dy', '0em');
                group.append('text')
                    .text("" + pathData.data.name)
                    .attr('class', 'data-text data-text__name')
                    .attr('text-anchor', 'middle')
                    .attr('dy', '1.5em');
                // Set default active segment
                if (pathData.value === max && !maxAssigned) {
                    var textVal = d3.select(this).select('.data-text__value')
                        .classed('data-text--show', true);
                    var textName = d3.select(this).select('.data-text__name')
                        .classed('data-text--show', true);
                    maxAssigned = true;
                }
            })
                .append('path')
                .attr('d', arc)
                .attr('fill', function (fillData, i) { return color(fillData.data.name); })
                .attr('class', 'data-path')
                .on('mouseover', function () {
                var _thisPath = this, parentNode = _thisPath.parentNode;
                if (_thisPath !== activeSegment) {
                    activeSegment = _thisPath;
                    var dataTexts = d3.selectAll('.data-text')
                        .classed('data-text--show', false);
                    var paths = d3.selectAll('.data-path')
                        .transition()
                        .duration(250)
                        .attr('d', arc);
                    d3.select(_thisPath)
                        .transition()
                        .duration(250)
                        .attr('d', arcHover);
                    var thisDataValue = d3.select(parentNode).select('.data-text__value')
                        .classed('data-text--show', true);
                    var thisDataText = d3.select(parentNode).select('.data-text__name')
                        .classed('data-text--show', true);
                }
            })
                .each(function (v, i) {
                if (v.value === max && !maxArcAssigned) {
                    var maxArc = d3.select(this)
                        .attr('d', arcHover);
                    activeSegment = this;
                    maxArcAssigned = true;
                }
                this._current = i;
            });
            var legendRectSize = 15;
            var legendSpacing = 10;
            var legend = svg.selectAll('.legend')
                .data(color.domain())
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', function (legendData, i) {
                var itemHeight = legendRectSize + legendSpacing;
                var offset = legendRectSize * color.domain().length;
                var horz = svgWidth + 80;
                var vert = (i * itemHeight) + legendRectSize + (svgHeight - offset) / 2;
                return "translate(" + horz + ", " + vert + ")";
            });
            legend.append('circle')
                .attr('r', legendRectSize / 2)
                .style('fill', color);
            legend.append('text')
                .attr('x', legendRectSize + legendSpacing)
                .attr('y', legendRectSize - legendSpacing)
                .attr('class', 'legend-text')
                .text(function (legendData) { return legendData; });
        }
    };
    AdminDashboardPieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard-pie',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]])
    ], AdminDashboardPieComponent);
    return AdminDashboardPieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-expired works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminExpiredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminExpiredComponent = (function () {
    function AdminExpiredComponent() {
    }
    AdminExpiredComponent.prototype.ngOnInit = function () {
    };
    AdminExpiredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-expired',
            template: __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminExpiredComponent);
    return AdminExpiredComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-footer/admin-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-footer/admin-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center bg-lightgray\">\r\n    \r\n                            <div class=\"copyrights\" style=\"margin-top:25px;\">\r\n                                <p>Taskit © 2018, All Rights Reserved\r\n                                    <br>\r\n                                    \r\n                                \r\n                            </div>\r\n                    </footer> "

/***/ }),

/***/ "../../../../../src/app/components/admin-footer/admin-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminFooterComponent = (function () {
    function AdminFooterComponent() {
    }
    AdminFooterComponent.prototype.ngOnInit = function () {
    };
    AdminFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-footer',
            template: __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, select{outline:none;}\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{    width: 56%;\r\n    left: 22%;\r\n    bottom: 10%;\r\n    z-index: 100;\r\n    min-height: 20px;\r\n    color: #fff;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    line-height: 22px;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n\r\n\r\n\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}\r\n\r\n.loder{\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\nlogn{\r\n  position: relative\r\n}\r\n.btn-nxt{\r\n  position: absolute;\r\n  top: 68px;\r\n  right: 0;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.nxt-cntainer{\r\n  position: relative;\r\n}\r\nselect,input{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  padding-right: 44px;\r\n}\r\nselect{\r\n  cursor: pointer;\r\n}\r\n.inp-hd{\r\n  font-size: 25px;\r\n}\r\n.errMsg{\r\n  font-size: 13px;color: #ff336a;\r\n}\r\n.progress-bar{\r\n  background-color: #28d685 !important;\r\n}\r\n.inp-top{\r\n  top: 89px;\r\n}\r\n.submit-form{\r\n  position: absolute;\r\n    top: 138px;\r\n    right: 0;\r\n    background: transparent;\r\n    border: none;\r\n  transition: color 1s ease;\r\n    \r\n}\r\n.trans-clr{\r\n  color: #20ad6b;\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-not-verified works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNotVerifiedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminNotVerifiedComponent = (function () {
    function AdminNotVerifiedComponent() {
    }
    AdminNotVerifiedComponent.prototype.ngOnInit = function () {
    };
    AdminNotVerifiedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-not-verified',
            template: __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNotVerifiedComponent);
    return AdminNotVerifiedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-sidebar/admin-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-sidebar/admin-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"\"><img src=\"./assets/images/logo.jpg\" alt=\"\" class=\"\">\r\n   \r\n</a>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n\r\n<!-- Brand and toggle get grouped for better mobile display -->\r\n<div class=\"navbar-header\">\r\n  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n    <span class=\"sr-only\">Toggle navigation</span>\r\n    <span class=\"icon-bar\"></span>\r\n    <span class=\"icon-bar\"></span>\r\n    <span class=\"icon-bar\"></span>\r\n  </button>\r\n \r\n</div>\r\n\r\n<!-- Collect the nav links, forms, and other content for toggling -->\r\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"zx nav navbar-nav\">\r\n        <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a routerLink=\"/admin-dashboard\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a routerLink=\"/admin-company\"><i class=\"fa fa-building-o\"></i> Company</a></li>\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a routerLink=\"\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i><span class=\"\">Plan</span></a></li>\r\n    </ul>\r\n \r\n \r\n</div><!-- /.navbar-collapse -->\r\n\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSidebarComponent = (function () {
    function AdminSidebarComponent() {
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-sidebar',
            template: __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-subscribed works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSubscribedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSubscribedComponent = (function () {
    function AdminSubscribedComponent() {
    }
    AdminSubscribedComponent.prototype.ngOnInit = function () {
    };
    AdminSubscribedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-subscribed',
            template: __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSubscribedComponent);
    return AdminSubscribedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <header>\r\n            \r\n            <div class=\"col-md-5 pull-right\">\r\n                <div class=\"header-rightside\">\r\n                    <ul class=\"list-inline header-top pull-right\">\r\n                        <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\r\n                        \r\n                        <li>\r\n                            <a href=\"#\" class=\"icon-info\">\r\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                <span class=\"label label-primary\">3</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                                <b class=\"caret\"></b></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li>\r\n                                    <div class=\"navbar-content\">\r\n                                        <span>JS Krishna</span>\r\n                                        <p class=\"text-muted small\">\r\n                                            me@jskrishna.com\r\n                                        </p>\r\n                                        <div class=\"divider\">\r\n                                        </div>\r\n                                        <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminTopbarComponent = (function () {
    function AdminTopbarComponent() {
    }
    AdminTopbarComponent.prototype.ngOnInit = function () {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/assets/sw.js').then(function (registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
        this.displayNotification();
    };
    AdminTopbarComponent.prototype.displayNotification = function () {
        this.notification = Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
        });
        // alert('dd');
        if (this.notification.permission == 'granted') {
            alert('dd');
            navigator.serviceWorker.getRegistration().then(function (reg) {
                var options = {
                    body: 'Here is a notification body!',
                    icon: 'sample.jpg',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    }
                };
                reg.showNotification('Hello world!', options);
            });
        }
    };
    AdminTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-topbar',
            template: __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminTopbarComponent);
    return AdminTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-trial works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTrialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminTrialComponent = (function () {
    function AdminTrialComponent() {
    }
    AdminTrialComponent.prototype.ngOnInit = function () {
    };
    AdminTrialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-trial',
            template: __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminTrialComponent);
    return AdminTrialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-bar-graph/company-bar-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-bar-graph/company-bar-graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/company-bar-graph/company-bar-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyBarGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyBarGraphComponent = (function () {
    function CompanyBarGraphComponent() {
        this.containerId = '';
        this.actual = '';
        this.planning = '';
    }
    CompanyBarGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        var offenseNames = [
            "Hours",
        ];
        var years = ["Planned", "Actual"];
        var offensesByYear = [
            {
                "Hours": 1000,
            },
            { "Hours": 2010,
            },
        ];
        var generateClassStr = function (str) {
            return str.replace(/\s+/g, '-').toLowerCase();
        };
        var n = offenseNames.length, // number of layers
        m = offensesByYear.length, // number of samples per layer
        stack = d3.stack().keys(offenseNames);
        var layers = stack(offensesByYear); // calculate the stack layout
        layers.forEach(function (d, i) {
            // add keys to every datapoint
            d.forEach(function (dd, j) {
                dd.year = years[j];
                dd.offenseName = offenseNames[i];
                dd.class = generateClassStr(dd.offenseName);
                dd.value = dd.data[dd.offenseName];
            });
        });
        var yStackMax = d3.max(layers, function (layer) {
            return d3.max(layer, function (d) {
                return d[1];
            });
        });
        var margin = { top: 70, right: 15, bottom: 40, left: 50 }, fullChartWidth = 400, fullChartHeight = 200, width = fullChartWidth - margin.left - margin.right, height = fullChartHeight - margin.top - margin.bottom;
        d3.select("#" + this.containerId)
            .style("width", fullChartWidth)
            .style("height", fullChartHeight);
        var x = d3
            .scaleBand()
            .domain(years)
            .rangeRound([0, width])
            .padding(0.08);
        var y = d3
            .scaleLinear()
            .domain([0, yStackMax])
            .range([height, 0]);
        var z = d3
            .scaleBand()
            .domain(offenseNames)
            .rangeRound([0, x.bandwidth()]);
        var color = ["#beaed4", "#7fc97f", "#fdc086"];
        var svg = d3
            .select("#" + this.containerId)
            .append("svg")
            .attr("width", width + margin.left + margin.right + 20)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");
        var mycount = 1;
        var layer = svg
            .selectAll(".layer")
            .data(layers)
            .enter()
            .append("g")
            .attr("class", "layer")
            .style("fill", function (d, i) {
            // mycount++;
            //  alert(mycount);
            // alert(i);
            // if(mycount == 0){
            //   mycount++;
            //   return '#7fc97f';
            // }else{
            //   mycount++;
            //   return  '#279428';
            // }
            //   alert(d);
            //  // alert(i);
            return '#7fc97f';
        });
        var rect = layer
            .selectAll(".bar")
            .data(function (d) {
            return d;
        })
            .enter()
            .append("rect")
            .attr("x", function (d) {
            return x(d.year);
        })
            .attr("y", height)
            .attr("width", x.bandwidth())
            .attr("height", 0)
            .on("mouseover", function (d) {
            d3.select(_this)
                .style("opacity", 0.6);
        });
        rect
            .transition()
            .delay(function (d, i) {
            return i * 10;
        })
            .attr("y", function (d) {
            return y(d[1]);
        })
            .attr("height", function (d) {
            return y(d[0]) - y(d[1]);
        });
        svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
    };
    CompanyBarGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-bar-graph',
            template: __webpack_require__("../../../../../src/app/components/company-bar-graph/company-bar-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-bar-graph/company-bar-graph.component.css")],
            inputs: ['containerId', 'actual', 'planning']
        }),
        __metadata("design:paramtypes", [])
    ], CompanyBarGraphComponent);
    return CompanyBarGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".graph-ul li{\r\n    float :left;\r\n    padding: 10px 2px;\r\n    border: 1px solid #ddd;\r\n    margin-top: 10px;\r\n    width: 300px;\r\n    display: table;\r\n    overflow:hidden;\r\n    padding-top: 0px;\r\n   \r\n}\r\n.graph-ul li .divModule{\r\n    background:#ccc;\r\n    padding: 20px 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.graph-ul{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow-x: scroll;\r\n    max-width:1170px;\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n.bg-g{background:#17a88f;color:#fff; padding: 10px;}\r\n.bg-hash{background:#E9E9E9;padding: 10px;}\r\n.bg-hash select{background:none;border:none;width:100%;}\r\n.total{font-weight:700;padding-top: 20px; line-height: 36px;}\r\n.sales{margin-bottom: 25px;border:none;    box-shadow: 4px 7px 31px #e8e8e8;}\r\n.label-bg{background:#ccc;padding:20px;position:relative;margin-bottom: 15px;}\r\n.label-bg .number{width:50px;height:50px;border-radius:50%;background:#fff;left:0;right:0;position:absolute;z-index:10;margin:0 auto;text-align:center;    top: -4px;\r\n    box-shadow: 10px 4px 18px #b1b1b1;\r\n    border: 1px solid #b5b3b3;    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #05b8cc;\r\n    padding-top: 15px;}\r\n\r\n    .graph-ul-hour li .divModule{\r\n        background:#ccc;\r\n        padding: 20px 5px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .graph-ul-hour{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        overflow-x: scroll;\r\n        max-width:1170px;\r\n        float: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .firstColumn{\r\n        background: #e4e4e4;\r\n        padding:0 40px;\r\n    }\r\n\r\n    .firstRow{\r\n        \r\n        font-weight:bold;\r\n        font-weight: bold;\r\n        min-height: 135px;\r\n        border-bottom: 1px solid #ccc;\r\n        text-transform:uppercase;\r\n        padding-top: 35%;\r\n    }\r\n    .secondRow{\r\n       \r\n        font-weight:bold;\r\n        min-height: 330px;\r\n        border-bottom: 1px solid #ccc;\r\n        text-transform:uppercase;\r\n        padding-top: 64%;\r\n    }\r\n    .ThirdRow{\r\n        \r\n        font-weight:bold;\r\n        min-height: 224px;\r\n        text-align:uppercase;\r\n        padding-top: 43%;\r\n    }\r\n    .prjtitle1{\r\n        background: #237cbe;\r\n        padding: 10px;\r\n        color:#fff;\r\n    }\r\n    .prjtitle2{\r\n       \r\n        padding: 10px;\r\n    }\r\n    .hash{    background: #f3f3f3;}\r\n    .datelabel{font-weight:bold;padding-bottom: 10px;}\r\n    .user-dashboard h1{text-align:center;}\r\n    .mr-top{margin-top: 20px;}\r\n\r\n\r\n\r\n\r\n    p {\r\n        font-family: Lato;\r\n      }\r\n      \r\n      .gu-mirror {\r\n        position: fixed !important;\r\n        margin: 0 !important;\r\n        z-index: 9999 !important;\r\n        opacity: 0.8;\r\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\r\n        filter: alpha(opacity=80);\r\n      }\r\n      \r\n      .gu-hide {\r\n        display: none !important;\r\n      }\r\n      \r\n      .gu-unselectable {\r\n        -webkit-user-select: none !important;\r\n        -moz-user-select: none !important;\r\n        -ms-user-select: none !important;\r\n        user-select: none !important;\r\n      }\r\n      .gu-transit {\r\n        opacity: 0.2;\r\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\r\n        filter: alpha(opacity=20);\r\n      }\r\n      \r\n      .handler, .child-handler{\r\n        padding: 0 5px;\r\n        margin-right: 5px;\r\n        background-color: #e0e0e0;\r\n        cursor: move;\r\n      }\r\n      \r\n      .child-handler{\r\n        background-color: #a0a0a0;\r\n      }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n    \n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n               <!-- sidebar-->\n             \n               <admin-sidebar></admin-sidebar> \n               <!-- end sidebar-->\n          </div>\n          \n          <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n              <!-- topbar-->\n              <admin-topbar></admin-topbar> \n              \n                  <!-- end topbar-->\n              \n              \n              <div class=\"user-dashboard\">\n                 \n                  <div class=\"row\">\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                          <div class=\"sales\">\n                              \n                          <company-task-vs-status></company-task-vs-status>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 col-sm-6 col-xs-12 \">\n                          <div class=\"sales\">\n                          <company-resoure-vs-hour></company-resoure-vs-hour>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 col-sm-6 col-xs-12 \">\n                          <div class=\"sales\">\n                          <company-project-vs-hour></company-project-vs-hour>\n                          </div>\n                      </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                            <company-project-vs-status></company-project-vs-status>\n                            </div>\n                        </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                <h1>Sample Heading</h1>\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-md-push-1\">\n                                        <div class=\"col-md-3 bg-g\">*Select Project</div>\n                                        <div class=\"col-md-3 bg-hash\">\n                                        <select>\n                                            <option>Taskit</option>\n                                            <option>Survey</option>\n                                        </select>\n                                        </div> \n                                        <div class=\"col-md-3\">\n                                            <span class=\"total\">Total 7 Milestone</span>\n                                        </div>\n                                    </div> \n                                </div>\n                                <ul class=\"graph-ul\">\n                                    <li >\n                                        <div class=\"divModule\" >Module-1</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-1-progress\"></div>\n                                            <company-progress-graph [containerId]=\"'module-1-progress'\" [progper]=\"92\"></company-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">10</div>\n                                            </div>\n                                            <div id=\"module-1-status\"></div>\n                                            <company-status-graph [containerId]=\"'module-1-status'\"></company-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\">Module-2</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-2-progress\"></div>\n                                            <company-progress-graph [containerId]=\"'module-2-progress'\" [progper]=\"60\"></company-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">7</div>\n                                            </div>\n                                            <div id=\"module-2-status\"></div>\n                                            <company-status-graph [containerId]=\"'module-2-status'\"></company-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\" >Module-3</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-3-progress\"></div>\n                                            <company-progress-graph [containerId]=\"'module-3-progress'\" [progper]=\"55\"></company-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">9</div>\n                                            </div>\n                                            <div id=\"module-3-status\"></div>\n                                            <company-status-graph [containerId]=\"'module-3-status'\"></company-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\" >Module-4</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-4-progress\"></div>\n                                            <company-progress-graph [containerId]=\"'module-4-progress'\" [progper]=\"55\"></company-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">9</div>\n                                            </div>\n                                            <div id=\"module-4-status\"></div>\n                                            <company-status-graph [containerId]=\"'module-4-status'\"></company-status-graph>\n                                        </div>\n                                    </li>\n                                   \n                                   \n                                   \n                                </ul>\n                            </div>\n                           \n                        </div>\n\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                    <h1>Project Vs Status</h1>\n\n                                    <ul class=\"graph-ul-hour\">\n                                            <li>\n                                                <div class=\"firstRow firstColumn\">PROJECTS</div>\n                                                <div class=\"secondRow firstColumn\">Progress</div>\n                                                <div class=\"ThirdRow firstColumn\">Planned <br>vs<br> Actual Hours</div>\n                                            </li>\n                                            <li >\n                                                <div class=\"prjtitle1\">Taskit</div>\n                                                <div class=\"col-md-8 mr-top\">\n                                                <div class=\"datelabel\">Start <span class=\"pull-right\">24-03-2018</span></div>\n                                                <div class=\"datelabel\">End <span class=\"pull-right\">29-03-2018</span></div>\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                                <!-- <div style=\"clear: both;\"></div> -->\n                                                <hr>\n                                                <div id=\"projct-1-progress\"></div>\n                                                <company-progress-graph [containerId]=\"'projct-1-progress'\" [progper]=\"55\"></company-progress-graph>\n                                                <label>0/36 In Progress</label>\n                                                <hr>\n                                                <div id=\"projct-1-bar\"></div>\n                                                <company-bar-graph [containerId]=\"'projct-1-bar'\" [actual]=\"5\" [planning]=\"8\"></company-bar-graph>\n                                            </li>\n                                            <li class=\"hash\">\n                                                <div class=\"prjtitle2 bg-g\">Taskit</div>\n                                                <div class=\"col-md-8 mr-top\">\n                                                        <div class=\"datelabel\">Start <span class=\"pull-right\">24-03-2018</span></div>\n                                                        <div class=\"datelabel\">End <span class=\"pull-right\">29-03-2018</span></div>\n                                                 </div>\n                                                 <div class=\"clearfix\"></div>\n                                                <hr>\n                                                <div id=\"projct-2-progress\"></div>\n                                                <company-progress-graph [containerId]=\"'projct-2-progress'\" [progper]=\"45\"></company-progress-graph>\n                                                <label>2/23 In Progress</label>\n                                                <hr>\n                                                <div id=\"projct-2-bar\"></div>\n                                                <company-bar-graph [containerId]=\"'projct-2-bar'\" [actual]=\"10\" [planning]=\"4\"></company-bar-graph>\n                                            </li>\n                                    </ul>       \n                            </div>\n                        </div>\n                      \n                  </div>\n              </div>\n              \n          </div>\n              <!-- footer-->\n              <admin-footer></admin-footer>\n     <!-- end footer-->\n      </div>\n       </div>\n      <!-- Modal -->\n   </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyDashboardComponent = (function () {
    function CompanyDashboardComponent(_dragulaService) {
        this._dragulaService = _dragulaService;
        this.categories = [
            {
                id: 1,
                name: 'Category 1',
                subCategories: [
                    {
                        id: 5,
                        name: 'Sub-category 5',
                        dragulaName: 'category-1'
                    },
                    {
                        id: 6,
                        name: 'Sub-category 6',
                        dragulaName: 'category-1'
                    },
                    {
                        id: 7,
                        name: 'Sub-category 7',
                        dragulaName: 'category-1'
                    },
                    {
                        id: 8,
                        name: 'Sub-category 8',
                        dragulaName: 'category-1'
                    }
                ]
            },
            {
                id: 2,
                name: 'Category 2',
                subCategories: []
            },
            {
                id: 3,
                name: 'Category3',
                subCategories: []
            },
            {
                id: 4,
                name: 'Category 4',
                subCategories: []
            },
        ];
    }
    CompanyDashboardComponent.prototype.ngOnInit = function () {
        this._dragulaService.setOptions('categories', {
            moves: function (el, container, handle) {
                return handle.className === 'handler';
            }
        });
        this._dragulaService.drop.asObservable().subscribe(function (value) {
            console.log(value);
        });
        /**
         * Used to get the dragged question original position.
         */
        this._dragulaService.drag.asObservable().subscribe(function (value) {
            console.log(value);
        });
    };
    CompanyDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-dashboard',
            template: __webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]])
    ], CompanyDashboardComponent);
    return CompanyDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{width:60%;left:10%;bottom:10%;z-index:100;min-height:20px;color:#fff;text-align:left;font-size:14px;position:absolute;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n/* Card */\r\n.card {\r\n \r\n}\r\n.card:first-child {\r\n\r\n}\r\n.card .title {\r\n      position: relative;\r\n    z-index: 1;\r\n    /* border-left: 5px solid #ec2652; */\r\n    margin: 0 0 35px;\r\n        padding: 20% 0 6% 0;\r\n    color: #f37501;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{background-color:none !important;}\r\n.card .input-container {\r\n        position: relative;\r\n    margin: 0 60px 34px;\r\n    /* overflow: hidden; */\r\n    display: inline-block;\r\n\t\r\n}\r\n.card .input-container input {\r\n  outline: none;\r\n  z-index: 1;\r\n  position: relative;\r\n  background: none;\r\n  width: 100%;\r\n  height: 54px;\r\n  border: 0;\r\n  color: #212121;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n.card .input-container input:focus ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n.card .input-container input:valid ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container label {\r\n  position: absolute;\r\n  top: 0;\r\n      left: 20px;\r\n  color: #757575;\r\n      font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 60px;\r\n  transition: 0.2s ease;\r\n}\r\n.card .fa{     padding-top: 19px;\r\n    font-size: 28px;color:#f37600;}\r\n.card .input-container .bar {\r\n  position: absolute;\r\n      left: -4%;\r\n  bottom: 0;\r\n  background: #757575;\r\n  width: 100%;\r\n  height: 1px;\r\n}\r\n.card .input-container .bar:before, .card .input-container .bar:after {\r\n  content: '';\r\n  position: absolute;\r\n      background: #f47453;\r\n  width: 0;\r\n  height: 2px;\r\n  transition: .2s ease;\r\n}\r\n.card .input-container .bar:before {\r\n  left: 50%;\r\n}\r\n.card .input-container .bar:after {\r\n  right: 50%;\r\n}\r\n.card .button-container {\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n.card .button-container button {\r\n  outline: 0;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: 0;\r\n  width: 240px;\r\n  border: 2px solid #e3e3e3;\r\n  padding: 20px 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button span {\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #ddd;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: block;\r\n  background: #ec2652;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  margin: -15px 0 0 -15px;\r\n  opacity: 0;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\r\n  border-color: #ec2652;\r\n}\r\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ec2652;\r\n}\r\n.card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ffffff;\r\n}\r\n.card .button-container button:active:before, .card .button-container button:focus:before {\r\n  opacity: 1;\r\n  transform: scale(10);\r\n}\r\n.card .footer {\r\n  margin: 6px 0 9%;\r\n  color: #d3d3d3;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n.card .footer a {\r\n      color: inherit;\r\n    text-decoration: none;\r\n    transition: .3s ease;\r\n    font-size: 15px;\r\n    color: #111;\r\n}\r\n.card .footer a:hover {\r\n  color: #bababa;\r\n}\r\n.card.alt {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  z-index: 10;\r\n  width: 100px;\r\n  height: 100px;\r\n  background: none;\r\n  border-radius: 100%;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  transition: .3s ease;\r\n  /* Toggle */\r\n  /* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n  position: relative;\r\n  background: #ec2652;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  color: #ffffff;\r\n  font-size: 42px;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n  content: '\\F067';\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  transform: translate(0, 0);\r\n}\r\n.card.alt .title,\r\n.card.alt .input-container,\r\n.card.alt .button-container {\r\n  left: 100px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.card.alt .title {\r\n  position: relative;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n.card.alt .title .close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 60px;\r\n  display: inline;\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n  content: '\\D7';\r\n}\r\n.card.alt .input-container input {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\r\n  background: #ffffff;\r\n}\r\n.card.alt .input-container input:valid ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container label {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .input-container .bar {\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .button-container button {\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span {\r\n  color: #ec2652;\r\n}\r\n.card.alt .button-container button:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\r\n  display: none;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n<head>\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\t<title>Taskit</title>\r\n\t<!-- <link rel=\"stylesheet\" href=\"css/bootstrap.css\">\r\n\t<link href=\"css/login.css\" rel=\"stylesheet\">\r\n\t<link href=\"css/responsive.css\" rel=\"stylesheet\">\r\n\t<!------ Include the above in your HEAD tag ---------->\r\n<!-- \r\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">  -->\r\n\r\n</head>\r\n\r\n<body class=\"logn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"logn-img\">\r\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" style=\"width:100%;\" />\r\n\t\t\t\t\t<!-- <img src=\"img/login.jpg\"/> -->\r\n\t\t\t\t\t<!-- <div class=\"paragraph\">\r\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<!-- Mixins-->\r\n\t\t\t\t<!-- Pen Title-->\r\n\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"card\"></div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\r\n\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"login(newLogin)\" novalidate>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" name=\"email\" [(ngModel)]=\"newLogin.email\" required/>\r\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Username</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"password\" id=\"Password\" name=\"password\" [(ngModel)]=\"newLogin.password\" required/>\r\n\t\t\t\t\t\t\t\t\t<label for=\"Password\">Password</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"input-container\" *ngIf=\"showCaptcha\">\r\n\t\t\t\t\t\t\t\t\t<re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LdWoEsUAAAAALf4IQwncQqV0HZPduSL0Ab4QC11\" ></re-captcha>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"footer\"><a [routerLink]=\"['/forgot-password']\">Forgot your password?</a></div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Sign in</button></div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\r\n\t\t\t\t\t\t\t\t<app-spinner></app-spinner>\r\n\t\t\t\t\t\t\t<!-- <div class=\"\">\r\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t\t\t\t\t\t\t\t width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\" xml:space=\"preserve\">\r\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t</path>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"social-login\">\r\n\t\t\t\t<a href=\"/auth/facebook\">\r\n\t\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\r\n\t\t\t\tLogin in with facebook\r\n\t\t\t  </a>\r\n\r\n\r\n\r\n\t\t\t  <!-- <div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t\t<a href=\"/auth/google\" class=\"btn btn-lg btn-block omb_btn-google\" style=\"color:#fff;\">\r\n\t\t\t<i class=\"fa fa-google-plus visible-xs\"></i>\r\n\t\t\t<span class=\"hidden-xs\">Sign In With Google+</span>\r\n\t\t</a>\r\n\t\t\t</div> -->\r\n\r\n\t\t\t\t<a href=\"/auth/google\">\r\n\t\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\r\n\t\t\t\tlog in with Google+\r\n\t\t\t  </a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Modal -->\r\n\t<!-- <script src='https://www.google.com/recaptcha/api.js'></script>\r\n\t<script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\r\n\t<script src=\"js/bootstrap.min.js\"></script> -->\r\n\r\n\r\n</body>\r\n\r\n\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyLoginComponent = (function () {
    function CompanyLoginComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.newLogin = {
            email: '',
            password: '',
            captcha: ''
        };
        this.spinner = false;
        this.showCaptcha = false;
        this.siteKey = "sitekey"; //example: 6LdEnxQTfkdldc-Wa6iKZSelks823exsdcjX7A-N
        this.theme = "light"; //you can give any google themes light or dark
    }
    CompanyLoginComponent.prototype.setVerified = function (data) {
        console.log("dfd");
        console.log(data); // data will return true while successfully verified 
    };
    CompanyLoginComponent.prototype.ngOnInit = function () {
        // this.companyService.getLoggedUSerDetails().subscribe(info => {
        //   console.log(info);
        //   if (info == null || info == '') {
        //     this.routes.navigate(['/company-login']);
        //   }
        //   if (info.role_id == 1) {
        //     if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
        //       this.routes.navigate(['/company-login']);
        //     }
        //     if (info.cmp_status == "Expired") {
        //       // this.routes.navigate(['/expired']); expired
        //     }
        //     if (info.is_profile_completed == false) {
        //       // this.routes.navigate(['/additnInfo', info.cmp_id]); additional info
        //     }
        //     this.routes.navigate(['/dashboard']); 
        //   }
        //   if (info.role_id == 3 || info.role_id == 4) {
        //     if (info.delete_status == true || info.block_status == true) {
        //       // this.routes.navigate(['/404']); 404
        //     }
        //     this.routes.navigate(['/dashboard']);  
        //   }
        // });
    };
    CompanyLoginComponent.prototype.handleCorrectCaptcha = function (event) {
        this.token = this.captcha.getResponse();
        // console.log(token);
    };
    CompanyLoginComponent.prototype.login = function (newLogin) {
        var _this = this;
        this.spinner = true;
        newLogin.captcha = this.token;
        // console.log(newLogin);
        this.companyService.authenticateCompany(this.newLogin).subscribe(function (data) {
            console.log(data);
            // console.log("here..........");
            if (data.success) {
                _this.spinner = false;
                if (data.login.status == "Expired") {
                    console.log("expired");
                    var json = data.login;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.login);
                    _this.routes.navigate(['/expired']);
                }
                else {
                    // console.log("esle");
                    _this.spinner = false;
                    var json = data.login;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.login);
                    if (_this.captcha) {
                        _this.captcha.reset();
                    }
                    if (data.login.role_id == 3 || data.login.role_id == 4) {
                        _this.routes.navigate(['/user-dashboard']);
                    }
                    else {
                        _this.routes.navigate(['/company-dashboard']);
                    }
                }
            }
            else if (data.profile_complete == false) {
                // console.log("profile");
                _this.routes.navigate(['/compay-aditninfo/' + data.cmp_id]);
                // var json = data.login;
                // var key = "profile";
                // delete json[key];
                _this.companyService.storeUserData(data.token, data.login);
            }
            else {
                _this.spinner = false;
                if (_this.captcha) {
                    _this.captcha.reset();
                }
                if (data.caseno != null || data.caseno != '' || data.caseno == []) {
                    if (data.caseno == 1) {
                        // console.log(data.caseno);
                        _this.showCaptcha = true;
                        // console.log(this.showCaptcha);
                    }
                }
                _this.msg = data.msg;
                var snackBarRef = _this.snackBar.open(_this.msg, '', {
                    duration: 2000
                });
                if (_this.captcha) {
                    _this.captcha.reset();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__["ReCaptchaComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_recaptcha__["ReCaptchaComponent"])
    ], CompanyLoginComponent.prototype, "captcha", void 0);
    CompanyLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-login',
            template: __webpack_require__("../../../../../src/app/components/company-login/company-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-login/company-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */]])
    ], CompanyLoginComponent);
    return CompanyLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field-underline {\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 96%;\r\n    top: 48px;\r\n}\r\n\r\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label, .mat-form-field-empty.mat-form-field-label {\r\n    padding-left: 10px;\r\n}\r\n\r\ninput.mat-input-element{\r\n    /* border-radius: 50px; */\r\n}\r\n.mat-fltr {\r\n    width: 100%;\r\n    background-color: #fff;\r\n    padding: 0 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\" >\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n  \r\n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n                <!-- sidebar-->\r\n  \r\n                <admin-sidebar></admin-sidebar>\r\n                <!-- end sidebar-->\r\n            </div>\r\n  \r\n            <div class=\"col-md-12 col-xs-12\">\r\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n                <!-- topbar-->\r\n                <admin-topbar></admin-topbar>\r\n                <!-- end topbar-->\r\n  \r\n  \r\n                <div class=\"user-dashboard\">\r\n                    <!-- <h1>Hello, JS</h1> -->\r\n                    <div class=\"row\">\r\n                      \r\n                        <div class=\"col-md-12 col-sm-5 col-xs-12 gutter ad-tp dash-tbl\">\r\n                          <div class=\"col-md-12 spinner-cont\" ngIf=\"showSpinner\">\r\n                              <app-spinner  class=\"tbl-spnner\"></app-spinner>\r\n                          </div>\r\n  \r\n                            <div class=\"example-header\" >\r\n                                <mat-form-field class=\"mat-fltr padd-10\">\r\n                                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                         \r\n                      <div class=\"example-container mat-elevation-z8 \">\r\n                      <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n        \r\n                        <!-- ID Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                          <mat-header-cell matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                          <mat-cell matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n                        </ng-container>\r\n                    \r\n                        <!-- Theme Name -->\r\n                        <ng-container matColumnDef=\"role\">\r\n                          <mat-header-cell matHeaderCellDef mat-sort-header> TEAM NAME </mat-header-cell>\r\n                          <mat-cell matCellDef=\"let row\"> {{row.role}} </mat-cell>\r\n                        </ng-container>\r\n                      \r\n  \r\n                      \r\n                        <!-- ID Column -->\r\n                        <ng-container matColumnDef=\"status\">\r\n                            <mat-header-cell matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n                            <mat-cell matCellDef=\"let row\"> <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                              <mat-icon>more_vert</mat-icon>\r\n                            </button>\r\n                            <mat-menu #menu=\"matMenu\">\r\n                              \r\n                              <button mat-menu-item (click)=\"setRights(row.id, row.role)\">\r\n                                <mat-icon><i class=\"material-icons mat-assign-icn\">add_box</i></mat-icon>\r\n                                <span>Assign</span>\r\n                              </button>\r\n                            </mat-menu>\r\n                             </mat-cell>\r\n                          </ng-container>\r\n                        <mat-header-row matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </mat-row>\r\n                     \r\n                      </mat-table>\r\n                      <div class=\"col-md-12 noItemFound\" ngIf=\"existStatus\">\r\n                          <div class=\"col-md-4 col-md-offset-4\">\r\n                              <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n                          </div>\r\n                          </div>\r\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                      </div>\r\n                      </div>\r\n                    </div>\r\n                   \r\n                </div>\r\n               \r\n  \r\n            </div>\r\n            <!-- footer-->\r\n            <!-- <admin-footer></admin-footer> -->\r\n            <!-- end footer-->\r\n        </div>\r\n    </div>\r\n    <!-- Modal -->\r\n  \r\n  \r\n  \r\n    <div id=\"assignModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n  \r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n              <h4 class=\"modal-title\"></h4>\r\n            </div>\r\n            <!-- <div class=\"modal-header\"> -->\r\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n            <!-- </div> -->\r\n            <div class=\"modal-body delete-popup\">\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <label class=\"modal-lft-lbl\">User Group:</label> \r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <label id=\"team-nm\" class=\"modal-lft-lbl\">{{teamName}}</label>\r\n            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4 \"><label class=\"modal-lft-lbl\">Access Rights :</label></div>\r\n                        <div class=\"col-md-7 padd-15\">\r\n                          <div class=\"col-md-12\"  ngFor=\"let item of accessRights\">\r\n                              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.checked\" name=\"{{i}}\" (ngModelChange)=\"changeMaster(item.id)\">{{item.name}}</mat-checkbox>\r\n                              <div class=\"col-md-10 col-md-offset-1\" ngFor=\"let rights of item.sub\">\r\n                                <mat-checkbox class=\"example-margin\" [(ngModel)]=\"rights.checked\" name=\"{{i}}\" (ngModelChange)=\"change(item.id)\">{{rights.access_right}}</mat-checkbox>                              \r\n                              </div>\r\n                          </div>\r\n                          \r\n                        </div>\r\n                    </div>\r\n  \r\n                    <div class=\"col-md-12\">\r\n                      {{errMessage}}\r\n                    </div>\r\n                  </div>\r\n                  \r\n              </div>\r\n              \r\n  \r\n            </div>\r\n  \r\n            <div class=\"modal-footer\">\r\n              <app-spinner ngIf=\"spinner\"></app-spinner>\r\n              <button ngIf=\"!spinner\" type=\"button\" (click)=\"assignRights()\" class=\"btn round-button\" >Assign</button>\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyManageAccessRightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyManageAccessRightsComponent = (function () {
    function CompanyManageAccessRightsComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'role', 'status'];
        this.showErr = false;
        this.existStatus = false;
        this.showSpinner = false;
        this.errMessage = '';
        this.spinner = false;
    }
    CompanyManageAccessRightsComponent.prototype.ngOnInit = function () {
        this.getUserGroups();
    };
    CompanyManageAccessRightsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : getTeams
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Manu Prasad 
    // Desc          : Get Teams from database
    CompanyManageAccessRightsComponent.prototype.getUserGroups = function () {
        var _this = this;
        this.showSpinner = true;
        this.companyService.getUserGroups().subscribe(function (userGroups) {
            _this.showSpinner = false;
            console.log(userGroups);
            if (userGroups.length <= 0) {
                // console.log("theme is empty");
                _this.existStatus = true;
            }
            else {
                _this.existStatus = false;
            }
            //  else {
            // console.log(themes);
            // console.log("theme is not empty");
            //  console.log(this.existStatus);
            // this.displatStat = true;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](userGroups);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // }  
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getTeams
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Manu Prasad 
    // Desc          : Get Teams from database
    CompanyManageAccessRightsComponent.prototype.getAccessRights = function (usergroupid) {
        var _this = this;
        this.companyService.getAccessRights(usergroupid).subscribe(function (accessRights) {
            _this.accessRights = accessRights;
            console.log(accessRights);
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : setRights
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Manu Prasad 
    // Desc          : set access rights in modal 
    CompanyManageAccessRightsComponent.prototype.setRights = function (usergroupid, usergroupName) {
        this.getAccessRights(usergroupid);
        this.userGroupId = usergroupid;
        $('#assignModal .modal-title').text("Assign Access Rights");
        $('#team-nm').text(usergroupName);
        $('#assignModal').modal('show');
    };
    //  ---------------------------------end-----------------------------------------------
    CompanyManageAccessRightsComponent.prototype.change = function (event) {
        // console.log(this.accessRights)
        var allChecked = true;
        // async.forEachOf(this.accessRights, (element, key, callback)=>{
        this.accessRights.forEach(function (element) {
            if (element.id == event) {
                element.sub.forEach(function (ele) {
                    // console.log(typeof ele.checked);
                    if (ele.checked == false || typeof ele.checked == 'undefined') {
                        // console.log("l");
                        allChecked = false;
                    }
                });
                if (allChecked == true) {
                    element.checked = true;
                }
                else {
                    element.checked = false;
                }
            }
        });
    };
    CompanyManageAccessRightsComponent.prototype.changeMaster = function (event) {
        // console.log(event)
        this.accessRights.forEach(function (element) {
            if (element.id == event) {
                if (element.checked == true) {
                    element.sub.forEach(function (ele) {
                        ele.checked = true;
                    });
                }
                else {
                    element.sub.forEach(function (ele) {
                        ele.checked = false;
                    });
                }
            }
            // console.log(this.accessRights)
        });
        // conso
    };
    CompanyManageAccessRightsComponent.prototype.assignRights = function () {
        var _this = this;
        this.spinner = true;
        this.companyService.assignRights(this.accessRights, this.userGroupId).subscribe(function (res) {
            if (res.status == 1) {
                var snackBarRef = _this.snackBar.open(res.message, '', {
                    duration: 2000
                });
                // this.getAccessRights();
                _this.spinner = false;
                $('#assignModal').modal('toggle');
            }
            else {
                var snackBarRef = _this.snackBar.open(res.message, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyManageAccessRightsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyManageAccessRightsComponent.prototype, "sort", void 0);
    CompanyManageAccessRightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-manage-access-rights',
            template: __webpack_require__("../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-manage-access-rights/company-manage-access-rights.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyManageAccessRightsComponent);
    return CompanyManageAccessRightsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-manage-team/company-manage-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field-underline {\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 96%;\r\n    top: 48px;\r\n}\r\n\r\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label, .mat-form-field-empty.mat-form-field-label {\r\n    padding-left: 10px;\r\n}\r\n\r\ninput.mat-input-element{\r\n    border-radius: 50px;\r\n}\r\n.mat-fltr {\r\n    width: 100%;\r\n    background-color: #fff;\r\n    padding: 0 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-manage-team/company-manage-team.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\" >\r\n  <div class=\"container-fluid display-table\">\r\n      <div class=\"row display-table-row\">\r\n\r\n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n              <!-- sidebar-->\r\n\r\n              <admin-sidebar></admin-sidebar>\r\n              <!-- end sidebar-->\r\n          </div>\r\n\r\n          <div class=\"col-md-12 col-xs-12\">\r\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n              <!-- topbar-->\r\n              <admin-topbar></admin-topbar>\r\n              <!-- end topbar-->\r\n\r\n\r\n              <div class=\"user-dashboard\">\r\n                  <!-- <h1>Hello, JS</h1> -->\r\n                  <div class=\"row\">\r\n                    \r\n                      <div class=\"col-md-12 col-sm-5 col-xs-12 gutter ad-tp dash-tbl\">\r\n                        <div class=\"col-md-12 spinner-cont\" *ngIf=\"showSpinner\">\r\n                            <app-spinner  class=\"tbl-spnner\"></app-spinner>\r\n                        </div>\r\n\r\n                          <div class=\"example-header\" >\r\n                              <mat-form-field class=\"mat-fltr\">\r\n                                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                              </mat-form-field>\r\n                          </div>\r\n                       \r\n                    <div class=\"example-container mat-elevation-z8 \">\r\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n      \r\n                      <!-- ID Column -->\r\n                      <ng-container matColumnDef=\"id\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n                      </ng-container>\r\n                  \r\n                      <!-- Theme Name -->\r\n                      <ng-container matColumnDef=\"name\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> TEAM NAME </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.team_name}} </mat-cell>\r\n                      </ng-container>\r\n                    \r\n\r\n                      <ng-container matColumnDef=\"strength\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> STRENGTH </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.count}} </mat-cell>\r\n                      </ng-container>\r\n                      <!-- Progress Column -->\r\n                      <!-- <ng-container matColumnDef=\"mybid\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Your Bids </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\">  -->\r\n                          \r\n                          <!-- {{row.status}} -->\r\n                          <!-- {{row.h_font_family }} -->\r\n                          <!-- <p *ngFor=\"let bid of row.mybid\">{{row.h_font_family }} : {{bid.date_time | date: 'dd-MM-yyyy h:mm a'}}</p> -->\r\n                        <!-- </mat-cell>\r\n                      </ng-container> -->\r\n                    \r\n                      <!-- ID Column -->\r\n                      <!-- <ng-container matColumnDef=\"topbid\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> Top Bid </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.progress_text_color }} </mat-cell>\r\n                        </ng-container> -->\r\n                    \r\n                      <!-- ID Column -->\r\n                      <ng-container matColumnDef=\"status\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                          </button>\r\n                          <mat-menu #menu=\"matMenu\">\r\n                            \r\n                            <!-- <button mat-menu-item [routerLink]=\"['/edit-theme/',row._id]\">\r\n                              <mat-icon>mode_edit</mat-icon>\r\n                              <span>Edit</span>\r\n                            </button> -->\r\n                            <button mat-menu-item  (click)=\"setTeam(row.team_id, row.team_name)\" data-toggle=\"modal\" data-target=\"#myModal3\"> \r\n                                <mat-icon class=\"mat-menu-icn\"><i class=\"material-icons mat-assign-icn\">add_box</i></mat-icon>\r\n                                <span>Assign</span>\r\n                              </button>\r\n                          </mat-menu>\r\n                           </mat-cell>\r\n                        </ng-container>\r\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                      </mat-row>\r\n                   \r\n                    </mat-table>\r\n                    <div class=\"col-md-12 noItemFound\" *ngIf=\"existStatus\">\r\n                        <div class=\"col-md-4 col-md-offset-4\">\r\n                            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n                        </div>\r\n                        </div>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n                 \r\n              </div>\r\n             \r\n\r\n          </div>\r\n          <!-- footer-->\r\n          <!-- <admin-footer></admin-footer> -->\r\n          <!-- end footer-->\r\n      </div>\r\n  </div>\r\n  <!-- Modal -->\r\n\r\n\r\n\r\n  <div id=\"assignModal\" class=\"modal fade\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\"></h4>\r\n          </div>\r\n          <!-- <div class=\"modal-header\"> -->\r\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n          <!-- </div> -->\r\n          <div class=\"modal-body delete-popup\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                          <label class=\"modal-lft-lbl\">Team Name:</label> \r\n                      </div>\r\n                      <div class=\"col-md-7\">\r\n                          <label id=\"team-nm\" class=\"modal-lft-lbl\">{{teamName}}</label>\r\n          \r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4 \"><label class=\"modal-lft-lbl\">Team Members :</label></div>\r\n                      <div class=\"col-md-7 \">\r\n                        <mat-form-field class=\"inputfileds\"> \r\n                          <mat-select name='selected' multiple [(ngModel)]=\"teamMembers\" (ngModelChange)=\"memberSelect($event)\">\r\n                            <mat-option [value]=\"member.id\" *ngFor=\"let member of members; let i=index\" >{{member.f_name}} {{member.l_name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4 \"><label class=\"modal-lft-lbl\">Team Head :</label></div>\r\n                      <div class=\"col-md-7 \">\r\n                        <mat-form-field class=\"inputfileds\">\r\n                          <mat-select name='selected2'  [(ngModel)]=\"teamHead\" (ngModelChange)=\"headSelect($event)\">\r\n                            \r\n                              <mat-option *ngFor=\"let member of selectedTeamMembers;\" [value]=\"member.id\" >{{member.f_name}} {{member.l_name}}</mat-option>\r\n                            \r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    {{errMessage}}\r\n                  </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n\r\n          </div>\r\n\r\n          <div class=\"modal-footer\">\r\n            <app-spinner *ngIf=\"spinner\"></app-spinner>\r\n            <button *ngIf=\"!spinner\" type=\"button\" (click)=\"assignTeam()\" class=\"btn round-button\" >Assign</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-manage-team/company-manage-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyManageTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyManageTeamComponent = (function () {
    function CompanyManageTeamComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'strength', 'status'];
        this.displatStat = false;
        this.showErr = false;
        this.existStatus = false;
        this.showSpinner = false;
        this.teamMembers = [];
        this.heads = [];
        this.errMessage = '';
        this.spinner = false;
    }
    CompanyManageTeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    CompanyManageTeamComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : getTeams
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Manu Prasad 
    // Desc          : Get Teams from database
    CompanyManageTeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.showSpinner = true;
        this.companyService.getTeams().subscribe(function (teams) {
            _this.showSpinner = false;
            // console.log(teams);
            if (teams.length <= 0) {
                // console.log("theme is empty");
                _this.existStatus = true;
            }
            else {
                _this.existStatus = false;
            }
            //  else {
            // console.log(themes);
            // console.log("theme is not empty");
            //  console.log(this.existStatus);
            _this.displatStat = true;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](teams);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // }  
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : setTeam
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Manu Prasad 
    // Desc          : set value in modal
    CompanyManageTeamComponent.prototype.setTeam = function (teamId, teamName) {
        var _this = this;
        // this.showSpinner =true
        this.teamId = teamId;
        this.companyService.getTeamMembers(teamId).subscribe(function (members) {
            _this.showSpinner = false;
            console.log(members);
            if (members.length <= 0) {
                // console.log("theme is empty");
                _this.existStatus = true;
            }
            else {
                _this.members = members[0];
                _this.teamMembers = members[2];
                _this.existStatus = false;
                _this.heads = members[2];
                _this.selectedTeamMembers = members[4];
                if (members[3] == null) {
                    _this.teamHead = '';
                }
                else {
                    _this.teamHead = members[3].user_profile_id;
                }
                console.log(_this.teamHead);
            }
            //  else {
            // }  
        });
        $('#assignModal .modal-title').text("Assign Members");
        $('#team-nm').text(teamName);
        $('#assignModal').modal('show');
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : setTeam
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Manu Prasad 
    // Desc          : set value in modal
    CompanyManageTeamComponent.prototype.assignTeam = function () {
        var _this = this;
        // console.log(this.teamMembers);
        // console.log(this.teamHead);
        // console.log(this.teamId);
        this.spinner = true;
        if (this.teamMembers.length == 0 || this.teamHead == '') {
            this.errMessage = "Please select fields!";
            this.spinner = false;
        }
        else {
            this.errMessage = "";
            this.companyService.assignTeam(this.teamMembers, this.teamHead, this.teamId).subscribe(function (res) {
                if (res.status == 1) {
                    var snackBarRef = _this.snackBar.open(res.Message, '', {
                        duration: 2000
                    });
                    _this.getTeams();
                    _this.spinner = false;
                    $('#assignModal').modal('toggle');
                }
                else {
                    var snackBarRef = _this.snackBar.open(res.Message, '', {
                        duration: 2000
                    });
                }
            });
        }
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : setTeam
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Manu Prasad 
    // Desc          : set value in modal
    CompanyManageTeamComponent.prototype.memberSelect = function (member) {
        var _this = this;
        console.log(member);
        if (member != '') {
            // this.heads = member;
            this.selectedTeamMembers = [];
            member.forEach(function (element) {
                // console.log(element);
                _this.members.forEach(function (ele) {
                    // console.log(ele);
                    if (element == ele.id) {
                        _this.selectedTeamMembers.push(ele);
                    }
                });
            });
        }
        // console.log(member);
        // console.log(this.teamMembers[this.teamMembers.length-1]);
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : setTeam
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Manu Prasad 
    // Desc          : set value in modal
    CompanyManageTeamComponent.prototype.headSelect = function (head) {
        if (head != '') {
            this.teamHead = head;
        }
        // console.log(head);
        // console.log(this.teamMembers[this.teamMembers.length-1]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyManageTeamComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyManageTeamComponent.prototype, "sort", void 0);
    CompanyManageTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-manage-team',
            template: __webpack_require__("../../../../../src/app/components/company-manage-team/company-manage-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-manage-team/company-manage-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyManageTeamComponent);
    return CompanyManageTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-progress-graph/company-progress-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);", ""]);

// module
exports.push([module.i, "body {\r\n  background: white;\r\n}\r\n\r\n* {\r\n  font-family: \"Open Sans\";\r\n}\r\n\r\n#slider {\r\n  width: 75%;\r\n  margin: 2em auto 1em;\r\n}\r\n\r\n.svg-container {\r\n  margin: 3em auto 0;\r\n  width: 250px;\r\n  /* height: 250px; */\r\n}\r\n\r\nsvg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-progress-graph/company-progress-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/company-progress-graph/company-progress-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProgressGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyProgressGraphComponent = (function () {
    function CompanyProgressGraphComponent() {
    }
    CompanyProgressGraphComponent.prototype.ngOnInit = function () {
        // console.log(this.containerId);
        var colors = {
            'pink': '#E1499A',
            'yellow': '#f0ff08',
            'green': '#47e495',
            'blue': '#4795e4',
        };
        var color = colors.blue;
        var radius = 100;
        var border = 20;
        var padding = 10;
        var startPercent = 0;
        var endPercent = this.progper / 100;
        //var endPercent = 0.85;
        var twoPi = Math.PI * 2;
        var formatPercent = d3.format('.0%');
        var boxSize = (radius + padding) * 2;
        var count = Math.abs((endPercent - startPercent) / 0.01);
        var step = endPercent < startPercent ? -0.01 : 0.01;
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border);
        var parent = d3.select('div#' + this.containerId);
        var svg = parent.append('svg')
            .attr('width', boxSize)
            .attr('height', boxSize);
        var defs = svg.append('defs');
        var filter = defs.append('filter')
            .attr('id', 'blur');
        filter.append('feGaussianBlur')
            .attr('in', 'SourceGraphic')
            .attr('stdDeviation', '0');
        var g = svg.append('g')
            .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');
        var meter = g.append('g')
            .attr('class', 'progress-meter');
        meter.append('path')
            .attr('class', 'background')
            .attr('fill', '#ccc')
            .attr('fill-opacity', 0.5)
            .attr('d', arc.endAngle(twoPi));
        var foreground = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', color)
            .attr('fill-opacity', 1)
            .attr('stroke', color)
            .attr('stroke-width', 5)
            .attr('stroke-opacity', 1)
            .attr('filter', 'url(#blur)');
        var front = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', color)
            .attr('fill-opacity', 1);
        var numberText = meter.append('text')
            .attr('fill', '#000')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em');
        function updateProgress(progress) {
            foreground.attr('d', arc.endAngle(twoPi * progress));
            front.attr('d', arc.endAngle(twoPi * progress));
            numberText.text(formatPercent(progress));
        }
        var progress = startPercent;
        (function loops() {
            updateProgress(progress);
            if (count > 0) {
                count--;
                progress += step;
                setTimeout(loops, 50);
            }
        })();
        // var τ = Math.PI; // http://tauday.com/tau-manifesto
        // var arc = d3.svg.arc()
        //     .innerRadius(250)
        //     .outerRadius(0)
        //     .startAngle(0);
        // // Draw the thing!
        // drawBadge("#candidscore");
        // updateScore(60, "#candidscore");
        // // Pass DOM selector to function, set up Canvas size
        // function drawBadge(svgID) {
        //   var width = 500,
        //     height = 500,
        //     aspect = width / height;
        // // Create the SVG container, and apply a transform such that the origin is the
        // // center of the canvas. This way, we don't need to position arcs individually.
        // var svg = d3.select(svgID)
        //     .attr("preserveAspectRatio", "xMidYMid")
        //     .attr("viewBox", "0 0 500 500")
        //     .attr("width", "100%")
        //     .attr("height", "100%")
        //     .append("g")
        //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        // // Add the background arc, from 0 to 100% (τ).
        // var background = svg.append("path")
        //     .datum({endAngle: 2*τ})
        //     .style("fill", "#f2f2f2")
        //     .attr("transform", "rotate(-90)")
        //     .attr("d", arc);
        // // Add the top arc in orange
        // var foreground_top = svg.append("path")
        //     .attr("id", "foreground_top")
        //     .datum({endAngle: 0 * τ})
        //     .style("fill", "#fab923")
        //     .attr("d", arc)
        //     .attr("transform", "rotate(-90)");
        // // Add bottom arc in orange
        // var foreground_bottom = svg.append("path")
        //     .attr("id", "foreground_bottom")
        //     .datum({endAngle: 0 * -τ })
        //     .style("fill", "#fab923")
        //     .attr("d", arc)
        //     .attr("transform", "rotate(-90)");
        // var trans_circ = svg.append("circle")
        //     .attr("cx", 0)
        //     .attr("cy", 0)
        //     .attr("r", 210)
        //     .attr("fill", "rgba(255,255,255, .25)");
        // // Create "def" element that will contain our drop shadow filter
        // var defs = svg.append("defs");
        // // Create our filter with an id of "#drop-shadow"
        // var filter = defs.append("filter")
        //   .attr("id", "drop-shadow")
        //   .attr("height", "130%");
        // // Create our Gaussian Blur with a standard deviation of 8
        // filter.append("feGaussianBlur")
        //   .attr("in", "SourceAlpha")
        //   .attr("stdDeviation", 8)
        //   .attr("result", "blur");
        // // Translate the output of Gaussian Blur to (0,0), and store result in var offsetBlur
        // filter.append("feOffset")
        //   .attr("in", "blur")
        //   .attr("dx", 0)
        //   .attr("dy", 0)
        //   .attr("result", "offsetBlur");
        // // Control the opacity of the actual drop shadow with 'feComponentTransfer and SLOPE'
        // var comptransf = filter.append("feComponentTransfer");
        // comptransf.append("feFuncA")
        //   .attr("type", "linear")
        //   .attr("slope", .2);
        // // Overlay original SourceGraphic over translated blurred opacity by using feMerge filter ***ORDER IS IMPORTANT***
        // var feMerge = filter.append("feMerge");
        // feMerge.append("feMergeNode")
        // /*	.attr("in", "offsetBlur")*/
        // feMerge.append("feMergeNode")
        //   .attr("in", "SourceGraphic");
        // var white_circ = svg.append("circle")
        //     .attr("cx", 0)
        //     .attr("cx", 0)
        //     .attr("r", 180)
        //     .attr("id", "white_circ")
        //     .style("filter", "url(#drop-shadow)")
        //     .attr("fill", "white");
        // var stroke_circ = svg.append("circle")
        //     .attr("cx", 0)
        //     .attr("cy", 0)
        //     .attr("r", 160)
        //     .attr("fill", "none")
        //     .attr("stroke", "rgba(0,0,0,.125")
        //     .attr("stroke-width", "1px");
        // var candidlogo = svg.append("g")
        // /*  .attr('transform-origin', '0 0')*/
        //   .attr("transform", "translate(-295,-285), scale(1.75)");
        //   candidlogo.append("path")
        //    .attr("d", "M134.3,233.2L134.3,233.2c0-3.3,2.6-6.2,6-6.2c2.2,0,3.6,1,4.7,2.2l-0.8,0.8c-1-1-2.2-1.9-3.9-1.9c-2.7,0-4.7,2.2-4.7,5v0c0,2.8,2.1,5.1,4.8,5.1c1.7,0,2.9-0.9,3.9-2l0.8,0.7c-1.2,1.4-2.6,2.3-4.8,2.3 C136.9,239.3,134.3,236.5,134.3,233.2z" )
        //      .attr("fill", "#A7A8AD");
        //    candidlogo.append("path")
        //         .attr("d", "M147.3,235.6L147.3,235.6c0-2.5,2.1-3.9,5.1-3.9c1.6,0,2.8,0.2,3.9,0.5v-0.5c0-2.4-1.4-3.6-3.9-3.6 c-1.4,0-2.6,0.4-3.7,0.9l-0.4-1c1.3-0.6,2.6-1,4.2-1c1.6,0,2.8,0.4,3.7,1.3c0.8,0.8,1.2,1.9,1.2,3.3v7.3h-1.1v-2 c-0.8,1.1-2.3,2.2-4.5,2.2C149.6,239.3,147.3,238,147.3,235.6z M156.3,234.6v-1.3c-1-0.3-2.3-0.5-4-0.5c-2.5,0-3.9,1.1-3.9,2.7v0 c0,1.7,1.6,2.7,3.4,2.7C154.2,238.2,156.3,236.8,156.3,234.6z" )
        //        .attr("fill", "#A7A8AD");
        //   candidlogo.append("path")
        //      .attr("d", "M161.4,227.3h1.1v2.2c0.8-1.4,2.1-2.5,4.2-2.5c3,0,4.7,2,4.7,4.8v7.2h-1.1v-7c0-2.4-1.4-4-3.7-4 c-2.3,0-4.1,1.7-4.1,4.2v6.8h-1.1V227.3z")
        //      .attr("fill", "#A7A8AD");
        //   candidlogo.append("path")
        //     .attr("d", "M174.7,233.2L174.7,233.2c0-3.9,2.9-6.2,5.7-6.2c2.3,0,3.9,1.3,4.8,2.8v-7.6h1.1V239h-1.1v-2.6 c-1,1.5-2.5,2.9-4.8,2.9C177.6,239.3,174.7,237,174.7,233.2z M185.3,233.2L185.3,233.2c0-3.1-2.3-5.1-4.8-5.1 c-2.6,0-4.6,1.9-4.6,5v0c0,3.1,2.1,5.1,4.6,5.1C183,238.2,185.3,236.2,185.3,233.2z")
        //     .attr("fill", "#A7A8AD");
        //   candidlogo.append("path")
        //     .attr("d", "M190.7,222.7h1.4v1.5h-1.4V222.7z M190.8,227.3h1.1V239h-1.1V227.3z")
        //     .attr("fill", "#A7A8AD");
        //     candidlogo.append("path")
        //     .attr("d", "M195.6,233.2L195.6,233.2c0-3.9,2.9-6.2,5.7-6.2c2.3,0,3.9,1.3,4.8,2.8v-7.6h1.1V239h-1.1v-2.6 c-1,1.5-2.5,2.9-4.8,2.9C198.5,239.3,195.6,237,195.6,233.2z M206.2,233.2L206.2,233.2c0-3.1-2.3-5.1-4.8-5.1 c-2.6,0-4.6,1.9-4.6,5v0c0,3.1,2.1,5.1,4.6,5.1C203.9,238.2,206.2,236.2,206.2,233.2z")
        //     .attr("fill", "#A7A8AD");
        // var text_score = svg.append("text")
        //   /*.text("50")*/
        //   .attr("id", "scorenum")
        //   .attr("x", 0)
        //   .attr("y", 60)
        //   .attr("font-family", "proxima nova")
        //   .attr("text-anchor", "middle")
        //   .attr("font-weight", "bold")
        //   .attr("font-size", 195)
        //   .attr("fill", "#555555");
        // }
        // function arcTween(transition, newAngle) {
        //   transition.attrTween("d", function(d) {
        //     var interpolate = d3.interpolate(d.endAngle, newAngle);
        //     return function(t) {
        //       d.endAngle = interpolate(t);
        //       return arc(d);
        //     };
        //   });
        // }
        // function updateScore(score, svgID) {
        //   console.log(score);
        //   var decimalized = score / 100.0;
        //   console.log(decimalized);
        //   var our_svg = d3.select(svgID);
        //   var foreground_top = our_svg.select("path#foreground_top");
        //   var scorenum = our_svg.select("text#scorenum");
        //   var foreground_bottom = our_svg.select("path#foreground_bottom");
        //   scorenum.text(score);
        //   foreground_top.transition()
        //       .duration(1500)
        //       .ease("elastic")
        //       .call(arcTween, decimalized * τ );
        //   foreground_bottom.transition()
        //       .duration(1500)
        //       .ease("elastic")
        //       .call(arcTween, decimalized * -τ );
        // }
    };
    CompanyProgressGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-progress-graph',
            template: __webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.css")],
            inputs: ['containerId', 'progper']
        }),
        __metadata("design:paramtypes", [])
    ], CompanyProgressGraphComponent);
    return CompanyProgressGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project-planning/company-project-planning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{position:relative;}\r\n.task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\nbutton, input, optgroup, select, textarea{outline:none !important;}\r\n.taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n.task ul li{width:auto;float:left;padding: 8px;}\r\n\ta{color:#111;}\r\n.task h5{padding-top:13px;padding-top: 6px;}\r\n.hash{background:#f7f6f4;}\r\n.assigned{background:#f3f8f2;border-left:3px solid #6fa93b;}\r\n.unassigned{background:#fbf1ef;border-left:3px solid #e5553d;}\r\n\r\n.assigned h5 {\r\n    padding-top: 13px;\r\n    padding-top: 6px;\r\n    display: table-cell;\r\n    padding-right: 15px;\r\n}\r\n.assigned ul li{padding: 6px}\r\n.mrg-tp{margin-top:15px !important;}\r\n.round-button {\r\n    border-radius: 20px;\r\n    margin: 0;\r\n    float: left;\r\n    background: #f37600;\r\n    color: #fff;\r\n    padding: 7px 15px;\r\n    transition: background 2s;\r\n\tmargin-bottom:15px;\r\n}\r\n.round-button:hover {\r\n    background: #ffaa05;\r\n    color: #fff;\r\n}\r\n.dropdown ul.dropdown-menu:before {\r\n    content: \"\";\r\n    border-bottom: 10px solid #fff;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 16px;\r\n    z-index: 10;\r\n}\r\n.round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\nbutton, input, optgroup, select, textarea{outline:none;}\r\n.effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n.effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n.effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n.style{width:100%;}\r\nlabel{font-size:15px;color:#4a4a4a;font-weight:normal;padding:5px 0;}\r\n.mrg-2{margin-bottom:10px;}\r\n.dropdown-menu > li > a {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: normal;\r\n    line-height: 25px;\r\n    color: #333333;\r\n    white-space: nowrap;\r\n}\r\n.addmodule {\r\n    padding: 20px 10px!important;\r\n    min-width: 357px;\r\n    right: inherit;\r\n    left: 20px;\r\n}\r\n.round{width:14px;height:14px;border-radius:50%;background:#70a93e;float:left;margin-right:7px;}\r\n.round2{background:#e4573c;}\r\n.notice p{font-size:11px;}\r\n.style{border:none;border-bottom: 1px solid #ccc;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n}\r\n.btn-file{padding:0;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n\tmargin-bottom:20px;\r\n}\r\n.center-bt{margin:20px auto 10px auto;float:none;}\r\n.project-planning .table > thead > tr > th{border:none;font-weight:normal;}\r\n.project-planning .table{margin-bottom:0;}\r\n@media only screen and (max-width : 767px) {\r\n.mrg-2 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.task ul li{    padding: 2px;}\t\r\n.addmodule{    min-width: 274px;}\r\n.martop {\r\n    margin-top: 35px;\r\n}\r\n.taskedit {\r\n    border-left: 1px solid #ccc;\r\n    display: inline-block;\r\n    width: 78%;\r\n    margin-top: 5px;\r\n    float: right;\r\n}\r\n.task{padding-bottom: 20px;}\r\n.addmodule .style{    margin-bottom: 18px;}\r\n}\r\n.padd-bt{padding-bottom: 20px;}\r\n.psh-left{padding-left:5% ;}\r\n.psh-left .form-group{margin-bottom:0px;}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.modal{top:0;}\r\n.modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n  }\r\n  .modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n  \r\n  }\r\n  .modal-title{color:#fff;}\r\n  .modal-body{    padding:20px 30px;}\r\n  .modal-body input{border:none;}\r\n  .modal-body input{padding: 0;}\r\n  .pad-top{padding-top:20px;}\r\n  .wdth{width:100% !important;}\r\n  .brd{    border: none;\r\n    height: 54px;}\r\n    .material-icons{\r\n        font-size: 20px;\r\n        float: left;\r\n        padding-right: 12px;\r\n        padding-top: 5px;\r\n    }\r\n    .close-bt{    width: 10px;\r\n        background: none;\r\n        float: right;\r\n        margin-top: 31px;\r\n        color: #111;\r\n        font-size: 11px;}\r\n    .padd-bt{    padding: 7px 6px !important;\r\n        font-size: 12px !important;\r\n        margin-top: 24px;}\r\n  .center{text-align: center;}\r\n  .center .round-button{margin:0 auto;float:none ;}\r\n  .editz{min-width: 100px;width: 100%;\r\n    top: 30px;}\r\n    .editz li{padding:0 !important;    width: 100% !important;}\r\n    .editz2 {\r\n        min-width: 522px;\r\n        width: 346%;\r\n        top: 30px;\r\n        left: 0;\r\n        max-width: 492px;\r\n        overflow: hidden;\r\n    }\r\n    .no-brdr{border:none !important;}\r\n    .am{\r\n        float: left;\r\n        background: none;\r\n        border: 2px solid #e6cebe;\r\n        margin-top: 23%;\r\n    }\r\n    .date-time{}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-project-planning/company-project-planning.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n  <div class=\"container-fluid display-table\">\r\n    <div class=\"row display-table-row\">\r\n\r\n      <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n        <!-- sidebar-->\r\n\r\n        <app-company-sidebar></app-company-sidebar>\r\n        <!-- end sidebar-->\r\n      </div>\r\n\r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n        <!-- topbar-->\r\n        <app-company-topbar></app-company-topbar>\r\n\r\n        <!-- end topbar-->\r\n\r\n\r\n        <div class=\"user-dashboard\">\r\n          <!-- <h1>Hello, JS</h1> -->\r\n          <div class=\"row\">\r\n\r\n            <!-- --------------------------------------------- add task modal ----------------------------------------------------------------- -->\r\n            <div id=\"addTaskModal\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\r\n                    <h4 class=\"modal-title\">Add Task </h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"addTask(index);\">\r\n\r\n                      <div>\r\n                        <div class=\"example-container\">\r\n                          <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Task Name * :</label></div>\r\n                          <div class=\"col-md-7 col-xs-6\">\r\n                            <mat-form-field>\r\n                              <input matInput name=\"task_name\" [(ngModel)]=\"newTasks.task_name\" autofocus>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <br>\r\n                          <div class=\"example-container\">\r\n                            <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Assigned person * :</label></div>\r\n                            <div class=\"col-md-7 col-xs-6\">\r\n                              <mat-form-field class=\"inputfileds\">\r\n                                <mat-select placeholder=\"Members\" name='assigned_person' #group=\"ngModel\" [(ngModel)]=\"newTasks.assigned_person\" (ngModelChange)=\"getassigned();\">\r\n                                  <mat-option [value]=\"users\" *ngFor=\"let users of assignPerson;\">{{users.f_name}} {{users.l_name}} </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"clearfix\"></div>\r\n                            <div class=\"example-container\">\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Complexity :</label></div>\r\n                              <div class=\"col-md-7 col-xs-6\">\r\n                                <mat-form-field class=\"inputfileds\">\r\n\r\n                                  <mat-select placeholder=\"Complexity\" name='complexity' #group=\"ngModel\" [(ngModel)]=\"newTasks.complexity\">\r\n                                    <mat-option [value]=\"complexity.id\" *ngFor=\"let complexity of complexitys;\">{{complexity.percentage}}</mat-option>\r\n                                  </mat-select>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Planned Hours *:</label></div>\r\n                              <div class=\"col-md-2 col-xs-6\">\r\n                                <mat-form-field class=\"wdth\">\r\n                                  <input type=\"number\" matInput name=\"planned_hour\" min=\"0\" name='planned_hour' [(ngModel)]=\"newTasks.planned_hour\" required>\r\n                                </mat-form-field>\r\n                              </div>\r\n\r\n                              <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Buffer Hours :</label></div>\r\n                              <div class=\"col-md-2 col-xs-6\">\r\n\r\n                                <mat-form-field class=\"wdth\">\r\n                                  <input type=\"number\" matInput name=\"buffer_time\" min=\"0\" name='buffer_hour' [(ngModel)]=\"newTasks.buffer_hour\" required>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Start Datetime *:</label></div>\r\n                              <div class=\"col-md-3 col-xs-6\">\r\n                                <mat-form-field>\r\n                                  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" [formControl]=\"date\"\r\n                                    name='start_date' [(ngModel)]=\"newTasks.start_date\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #picker1></mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"clearfix\"></div>\r\n                              <ngb-timepicker [meridian]=\"meridian\" name=\"start_time\" [(ngModel)]=\"newTasks.start_time\"></ngb-timepicker>\r\n                              <hr>\r\n                              <div class=\"clearfix\"></div>\r\n                              <!-- <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">End Datetime :</label></div>\r\n                              <div class=\"col-md-3 col-xs-6\">\r\n\r\n                              </div> -->\r\n\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">End Datetime *:</label></div>\r\n                              <div class=\"col-md-3 col-xs-6\">\r\n                                <mat-form-field>\r\n                                  <input matInput [matDatepickerFilter]=\"myFilter1\" [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" [formControl]=\"serializedDate\"\r\n                                    name=\"end_date\" [(ngModel)]=\"newTasks.end_date\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #picker2></mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n\r\n                              <ngb-timepicker name=\"timepicker1\" [meridian]=\"meridian\" name=\"end_time\" [(ngModel)]=\"newTasks.end_time\"></ngb-timepicker>\r\n                              <hr>\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n\r\n                              <div class=\"example-container\">\r\n                                <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Task type :</label></div>\r\n                                <div class=\"col-md-7 col-xs-6\">\r\n                                  <mat-form-field class=\"inputfileds\">\r\n\r\n                                    <mat-select [(value)]=\"selected1\" name='task_type' #group=\"ngModel\" [(ngModel)]=\"newTasks.task_type\">\r\n                                      <!-- <mat-option>None</mat-option> -->\r\n\r\n                                      <mat-option value=\"0\">Billable</mat-option>\r\n                                      <mat-option value=\"1\">Non Billable</mat-option>\r\n\r\n\r\n                                    </mat-select>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                                <div class=\"example-container\">\r\n                                  <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Priority *:</label></div>\r\n                                  <div class=\"col-md-7 col-xs-6\">\r\n                                    <mat-form-field class=\"inputfileds\">\r\n\r\n                                      <mat-select [(value)]=\"selected2\" name='priority' #group=\"ngModel\" [(ngModel)]=\"newTasks.priority\">\r\n                                        <!-- <mat-option>None</mat-option> -->\r\n                                        <mat-option value=\"0\">High</mat-option>\r\n                                        <mat-option value=\"1\">Medium</mat-option>\r\n                                        <mat-option value=\"2\">Low</mat-option>\r\n\r\n\r\n                                      </mat-select>\r\n                                    </mat-form-field>\r\n                                  </div>\r\n                                  <div class=\"clearfix\"></div>\r\n\r\n                                  <div class=\"example-container\">\r\n                                    <div class=\"col-md-4 col-xs-5\"><label class=\"pad-top\">Checklist :</label></div>\r\n                                    <div class=\"col-md-5 col-xs-5\">\r\n                                      <div *ngFor=\"let item of newTasks.newChecklist; let i = index; trackBy:trackByIndex\">\r\n\r\n                                        <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" name=\"checklist{{i}}\" required [(ngModel)]=\"newTasks.newChecklist[i].name\" />\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                          <mat-icon>close</mat-icon>\r\n                                        </button>\r\n                                        </mat-form-field>\r\n                                        <input type=\"button\" value=\"X\" (click)=\"closeChecklist(i)\" class=\"close-bt\">\r\n                                      </div>\r\n\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-3 col-xs-2\"><input type=\"button\" value=\"Add More\" (click)=\"addMore()\" class=\"round-button padd-bt\"></div>\r\n                                    <div class=\"clearfix\"></div>\r\n                                    <div class=\"example-container\">\r\n                                      <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Attachment :</label></div>\r\n                                      <div class=\"col-md-7 col-xs-6\">\r\n\r\n                                        <input (change)=\"displayDoc($event)\" name=\"file\" type=\"file\" [(ngModel)]=\"newTasks.file\" />\r\n                                      </div>\r\n                                      <div class=\"clearfix\"></div>\r\n                                      <div class=\"center\">\r\n                                        <button type=\"submit\" class=\"btn round-button dropdown-toggle mrg-tp\">Save</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- --------------------------------------------- end add modal ----------------------------------------------------------------- -->\r\n\r\n            <!-- --------------------------------------------- delete module modal ----------------------------------------------------------------- -->\r\n            <div id=\"deleteModuleModal\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Delete </h4>\r\n                  </div>\r\n                  <!-- <div class=\"modal-header\"> -->\r\n                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n                  <!-- </div> -->\r\n                  <div class=\"modal-body delete-popup\">\r\n                    <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n                    <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer\" style=\"text-align:center;\">\r\n                    <button type=\"button\" (click)=\"deleteModule(index)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- --------------------------------------------- delete task modal ----------------------------------------------------------------- -->\r\n            <div id=\"deleteTaskModal\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Delete </h4>\r\n                  </div>\r\n                  <!-- <div class=\"modal-header\"> -->\r\n                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n                  <!-- </div> -->\r\n                  <div class=\"modal-body delete-popup\">\r\n                    <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n                    <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer\" style=\"text-align:center;\">\r\n                    <button type=\"button\" (click)=\"deleteTask(i,j)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- ----------------------------------------------------------------------delete task modal--------------------------------------------------------------------- -->\r\n\r\n            <!-- ----------------------------------------------------------------------edit task modal--------------------------------------------------------------------- -->\r\n            <div id=\"editTaskModal\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\r\n                    <h4 class=\"modal-title\">Edit Task </h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"editTask(i,j);\">\r\n\r\n                      <div>\r\n                        <div class=\"example-container\">\r\n                          <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Task Name * :</label></div>\r\n                          <div class=\"col-md-7 col-xs-6\">\r\n                            <mat-form-field>\r\n                              <input matInput name=\"task_name\" [(ngModel)]=\"newTasks.task_name\" autofocus>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <br>\r\n                          <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Planned Hours *:</label></div>\r\n                          <div class=\"col-md-2 col-xs-6\">\r\n                            <mat-form-field class=\"wdth\">\r\n                              <input type=\"number\" matInput name=\"planned_hour\" min=\"0\" name='planned_hour' [(ngModel)]=\"newTasks.planned_hour\" required>\r\n                            </mat-form-field>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Buffer Hours :</label></div>\r\n                          <div class=\"col-md-2 col-xs-6\">\r\n\r\n                            <mat-form-field class=\"wdth\">\r\n                              <input type=\"number\" matInput name=\"buffer_time\" min=\"0\" name='buffer_hour' [(ngModel)]=\"newTasks.buffer_hour\" required>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"example-container\">\r\n                            <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Assigned person * :</label></div>\r\n                            <div class=\"col-md-7 col-xs-6\">\r\n                              <mat-form-field class=\"inputfileds\">\r\n                                <mat-select placeholder=\"Members\" name='assigned_person' #group=\"ngModel\" [(ngModel)]=\"newTasks.assigned_person\" (ngModelChange)=\"getassigned();\">\r\n                                  <mat-option [value]=\"users\" *ngFor=\"let users of assignPerson ;\">{{users.f_name}} {{users.l_name}} </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"clearfix\"></div>\r\n                            <div class=\"example-container\">\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Complexity :</label></div>\r\n                              <div class=\"col-md-7 col-xs-6\">\r\n                                <mat-form-field class=\"inputfileds\">\r\n\r\n                                  <mat-select placeholder=\"Complexity\" name='complexity' #group=\"ngModel\" [(ngModel)]=\"newTasks.complexity\">\r\n                                    <mat-option [value]=\"complexity.id\" *ngFor=\"let complexity of complexitys;\">{{complexity.percentage}}</mat-option>\r\n                                  </mat-select>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <!-- <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Planned Hours *:</label></div>\r\n                              <div class=\"col-md-2 col-xs-6\">\r\n                                <mat-form-field class=\"wdth\">\r\n                                  <input type=\"number\" matInput name=\"planned_hour\" min=\"0\" name='planned_hour' [(ngModel)]=\"newTasks.planned_hour\" required>\r\n                                </mat-form-field>\r\n                              </div>\r\n\r\n                              <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Buffer Hours :</label></div>\r\n                              <div class=\"col-md-2 col-xs-6\">\r\n\r\n                                <mat-form-field class=\"wdth\">\r\n                                  <input type=\"number\" matInput name=\"buffer_time\" min=\"0\" name='buffer_hour' [(ngModel)]=\"newTasks.buffer_hour\" required>\r\n                                </mat-form-field>\r\n                              </div> -->\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Start Datetime *:</label></div>\r\n                              <div class=\"col-md-8 col-xs-6 date-time\">\r\n                                <div class=\"col-md-3\"> Date : </div>\r\n\r\n                                <div class=\"col-md-9\"> {{startdate| date:'EEE, d MMM,y'}} </div>\r\n                                <div class=\"clearfix\"></div>\r\n                                <!-- {{newTasks.start_time.hour, newTasks.start_time.minute, newTasks.start_time.second}} -->\r\n\r\n                                <div class=\"col-md-3\">Time : </div>\r\n                                <div class=\"col-md-9\">\r\n                                  <div *ngIf=\"Projects.start_time\">\r\n                                    {{newTasks.start_time.hour}} : {{newTasks.start_time.minute}} <span *ngIf=\"Projects.start_time.hour\">{{meridain }}</span>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <mat-form-field>\r\n                                  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"pickerf\" placeholder=\"Choose a date\" [formControl]=\"date\"\r\n                                    name='start_date' [(ngModel)]=\"newTasks.start_date\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #picker1></mat-datepicker>\r\n                                </mat-form-field> -->\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"clearfix\"></div>\r\n                              <!-- <ngb-timepicker [meridian]=\"meridian\" name=\"start_time1\" [(ngModel)]=\"newTasks.start_time\" disable></ngb-timepicker> -->\r\n                              <hr>\r\n                              <div class=\"clearfix\"></div>\r\n                              <!-- <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">End Datetime :</label></div>\r\n                                <div class=\"col-md-3 col-xs-6\">\r\n  \r\n                                </div> -->\r\n\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n                              <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">End Datetime *:</label></div>\r\n                              <div class=\"col-md-3 col-xs-6\">\r\n                                <mat-form-field>\r\n                                  <input matInput [matDatepickerFilter]=\"myFilter1\" [matDatepicker]=\"pickerm\" placeholder=\"Choose a date\" [formControl]=\"serializedDate\"\r\n                                    name=\"end_date\" [(ngModel)]=\"newTasks.end_date\">\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker #picker2></mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n\r\n                              <ngb-timepicker name=\"timepicker1\" [meridian]=\"meridian\" name=\"end_time1\" [(ngModel)]=\"newTasks.end_time\"></ngb-timepicker>\r\n                              <hr>\r\n                              <div class=\"clearfix\"></div>\r\n                              <br>\r\n\r\n                              <div class=\"example-container\">\r\n                                <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Task type :</label></div>\r\n                                <div class=\"col-md-7 col-xs-6\">\r\n                                  <mat-form-field class=\"inputfileds\">\r\n\r\n                                    <mat-select [(value)]=\"selected1\" name='task_type' #group=\"ngModel\" [(ngModel)]=\"newTasks.task_type\">\r\n                                      <!-- <mat-option>None</mat-option> -->\r\n\r\n                                      <mat-option value=\"0\">Billable</mat-option>\r\n                                      <mat-option value=\"1\">Non Billable</mat-option>\r\n\r\n\r\n                                    </mat-select>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                                <div class=\"example-container\">\r\n                                  <div class=\"col-md-4 col-xs-6\"><label class=\"pad-top\">Priority *:</label></div>\r\n                                  <div class=\"col-md-7 col-xs-6\">\r\n                                    <mat-form-field class=\"inputfileds\">\r\n\r\n                                      <mat-select [(value)]=\"selected2\" name='priority' #group=\"ngModel\" [(ngModel)]=\"newTasks.priority\">\r\n                                        <!-- <mat-option>None</mat-option> -->\r\n                                        <mat-option value=\"0\">High</mat-option>\r\n                                        <mat-option value=\"1\">Medium</mat-option>\r\n                                        <mat-option value=\"2\">Low</mat-option>\r\n\r\n\r\n                                      </mat-select>\r\n                                    </mat-form-field>\r\n                                  </div>\r\n                                  <div class=\"clearfix\"></div>\r\n\r\n                                  <div class=\"example-container\">\r\n                                    <div class=\"col-md-4 col-xs-5\"><label class=\"pad-top\">Checklist :</label></div>\r\n                                    <div class=\"col-md-5 col-xs-5\">\r\n                                      <div *ngFor=\"let item of newTasks.newChecklist; let i = index; trackBy:trackByIndex\">\r\n\r\n                                        <!-- <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" name=\"checklist{{i}}\" required [(ngModel)]=\"newTasks.newChecklist[i].name\" />\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                            <mat-icon>close</mat-icon>\r\n                                          </button>\r\n                                        </mat-form-field> -->\r\n                                        <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" placeholder=\"Name\" name=\"name\" required [(ngModel)]=\"newTasks.newChecklist[i].name\" />\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                              <mat-icon>close</mat-icon>\r\n                                            </button>\r\n                                        </mat-form-field>\r\n                                        <input type=\"button\" value=\"X\" (click)=\"closeChecklist(i)\" class=\"close-bt\">\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                  <div class=\"col-md-3 col-xs-2\"><input type=\"button\" value=\"Add More\" (click)=\"addMore()\" class=\"round-button padd-bt\"></div>\r\n                                  <div class=\"clearfix\"></div>\r\n                                  <div class=\"example-container\">\r\n                                    <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Attachment :</label></div>\r\n                                    <div class=\"col-md-7 col-xs-6\">\r\n\r\n                                      <input (change)=\"displayDoc($event)\" name=\"file\" type=\"file\" [(ngModel)]=\"newTasks.file\" />\r\n                                    </div>\r\n                                    <div class=\"clearfix\"></div>\r\n                                    <div class=\"center\">\r\n                                      <button type=\"submit\" class=\"btn round-button dropdown-toggle mrg-tp\">Save</button>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- ----------------------------------------------------------------------edit task modal--------------------------------------------------------------------- -->\r\n            <div class=\"col-md-6 col-sm-12 col-xs-12 gutter \">\r\n              <div class=\"white project-planning\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-6\"><label for=\"\">Project Name</label></div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"row\"><label for=\"\" class=\"label2\">{{Projects.project_name}}</label></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-6\"><label for=\"\">Project Code</label></div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"row\"><label for=\"\" class=\"label2\">{{Projects.project_code}}</label></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-6\">\r\n                    <label for=\"\">Project Start Date</label></div>\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"Projects.start_date\" (ngModelChange)=\"startDateSelect()\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"col-md-6 pull-right\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"row\">\r\n                          <ngb-timepicker class=\"no-brdr\" name=\"start_time\" [(ngModel)]=\"Projects.start_time\" (ngModelChange)=\"startDateSelect();\"></ngb-timepicker>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"row\"><button class=\"am\" (click)=\"meridian();\">{{meridain}}</button></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n                    </button> -->\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"col-md-6 padd-bt\"><label for=\"\">Team Members</label></div>\r\n\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <div class=\"col-md-9 psh-left\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-7\"><label for=\"\">Developers</label></div>\r\n\r\n                    <mat-form-field class=\"inputfileds\">\r\n\r\n                      <mat-select placeholder=\"Developers\" name='selected' multiple [(ngModel)]=\"Projects.developer\" (ngModelChange)=\"getuserAvalibality();\">\r\n                        <mat-option [value]=\"Developer\" *ngFor=\"let Developer of Developers;\">{{Developer.f_name}} {{Developer.l_name}} </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-7\"><label for=\"\">Designers</label></div>\r\n                    <mat-form-field class=\"inputfileds\">\r\n\r\n                      <mat-select placeholder=\"Designers\" name='selected' multiple [(ngModel)]=\"Projects.designer\" (ngModelChange)=\"getuserAvalibality();\">\r\n                        <mat-option [value]=\"Designer\" *ngFor=\"let Designer of Designers;\">{{Designer.f_name}} {{Designer.l_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-7\"><label for=\"\">QC</label></div>\r\n                    <mat-form-field class=\"inputfileds\">\r\n\r\n                      <mat-select placeholder=\"QC\" name='selected' multiple [(ngModel)]=\"Projects.qc\" (ngModelChange)=\"getuserAvalibality();\">\r\n                        <mat-option [value]=\"QC\" *ngFor=\"let QC of QCs;\">{{QC.f_name}} {{QC.l_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <form role=\"form\" (ngSubmit)=\"addModule()\" novalidate>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-4 col-xs-7 mrg-2\">\r\n\r\n                      <button type=\"button\" class=\"btn round-button dropdown-toggle mrg-tp\" data-toggle=\"dropdown\" (click)=\"addModuleClear()\">Add Module</button>\r\n                      <ul class=\"dropdown-menu addmodule\" role=\"menu\">\r\n\r\n                        <div class=\"col-md-8\">\r\n                          <input class=\"style\" type=\"text\" placeholder=\"Module Name\" name=\"name\" [(ngModel)]=\"module.module_name\">\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                          <button type=\"submit\" class=\"btn round-button pull-right\">Save</button>\r\n                        </div>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <br>\r\n                <div class=\"clearfix\"></div>\r\n                <div class=\"form-group mrg-2\">\r\n                  <div class=\"col-md-4 col-xs-4\">\r\n                    <label>Total Estimated Hours</label>\r\n                  </div>\r\n                  <div class=\"col-md-4 col-xs-4\">\r\n                    <div>\r\n                      <!-- estimation_hour -->\r\n\r\n                      <h5>{{sum}}</h5>\r\n                    </div>\r\n                    <!-- <input class=\"style\" type=\"text\" placeholder=\"44:00 Hr\"> -->\r\n\r\n                  </div>\r\n                  <div class=\"col-md-4 col-xs-4 notice\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6 col-xs-6\"><span class=\"round\"></span>\r\n                        <p>Assigned</p>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-xs-6\"><span class=\"round round2\"></span>\r\n                        <p>Unasigned</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n\r\n                  <!-- <div  [dragula]='\"myBag\"' draggable=\"true\" [class]=\"'groupClass'\"> -->\r\n                  <div [dragula]='\"third-bag\"' [dragulaModel]='modules'>\r\n                    <div *ngFor=\"let module of modules; let i = index\">\r\n                      <div class=\"col-md-12 col-xs-12 pull-right\">\r\n                        <div class=\"task\">\r\n                          <div class=\"col-md-8 col-xs-7\">\r\n                            <div>\r\n                              <!-- <p>dfd</p> -->\r\n                              <h5>{{module.module_name}}</h5>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"col-md-4 col-xs-5\">\r\n                            <ul class=\"taskedit\">\r\n                              {{module.time}}\r\n                              <!-- <li>22 Hr</li> -->\r\n                              <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteModuleModal\" (click)=\"getId(i)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\r\n\r\n                              <!-- <div class=\"col-md-4 col-xs-7 mrg-2\"> -->\r\n                              <li class=\"pull-right\">\r\n                                <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"editModules(i,module)\" novalidate>\r\n                                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"getId(i)\" class=\"dropdown\"> <i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\r\n                                  <ul class=\"dropdown-menu addmodule editz\" role=\"menu\">\r\n                                    <div class=\"col-md-8\">\r\n                                      <input class=\"style\" type=\"text\" placeholder=\"Module Name\" name=\"module_name\" [(ngModel)]=\"module.module_name\">\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                      <button type=\"submit\" class=\"btn round-button pull-right\">Save</button>\r\n                                    </div>\r\n                                  </ul>\r\n                                </form>\r\n                              </li>\r\n                              <!-- </div> -->\r\n                              <li class=\"pull-right\"></li>\r\n\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <div [dragula]=\"'myBag'\"> -->\r\n                      <div [dragula]='\"third-bag\"' [dragulaModel]='module.tbl_estimation_tasks'>\r\n                        <div draggable=\"true\" [class]=\"'itemClass'\" *ngFor=\"let task of modules[i].tbl_estimation_tasks; let j = index\">\r\n                          <div class=\"col-md-11 col-xs-12 pull-right\">\r\n                            <div class=\"task assigned\" style=\"background:#fbf6f1;\">\r\n                              <div class=\"col-md-9 col-xs-7 martop\">\r\n                                <h5>{{task.task_name}}</h5>\r\n                                <!-- <div *ngFor=\" let assigned of task.assigned_person\"> -->\r\n                                <h5>{{task.assigned}} {{task.assigned1}}</h5>\r\n                                <!-- </div> -->\r\n                                <h5>{{task.planned_hour + task.buffer_hour}} hrs</h5>\r\n                                <h5>{{task.start_date | date:'EEE, d MMM,y'}}</h5>\r\n                                <h5>{{task.end_date | date:'EEE, d MMM,y'}}</h5>\r\n\r\n                              </div>\r\n                              <div class=\"col-md-3 col-xs-5\">\r\n                                <ul class=\"taskedit\">\r\n                                  <li></li>\r\n                                  <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteTaskModal\" (click)=\"getId1(i,j)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\r\n\r\n                                  <li class=\"pull-right\">\r\n                                    <a href=\"#\" data-target=\"#editTaskModal\" data-toggle=\"modal\" (click)=\"getId2(i,j,task)\"> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\r\n                                  </li>\r\n                                </ul>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <button type=\"button\" (click)=\"getId(i)\" data-toggle=\"modal\" data-target=\"#addTaskModal\" class=\"btn round-button pull-right right-btn\">Add Task</button>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- col-md-6-->\r\n            <div class=\"col-md-6\">\r\n              <div class=\"white\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"example-header\">\r\n                        <mat-form-field>\r\n                          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"pull-right\">\r\n                        <mat-form-field class=\"filter\">\r\n\r\n                          <mat-select (change)=\"refresh()\" [(value)]=\"selected\">\r\n                            <!-- <mat-option>None</mat-option> -->\r\n                            <mat-option value=\"0\">All</mat-option>\r\n                            <mat-option value=\"2\">Designer</mat-option>\r\n                            <mat-option value=\"1\">Developer</mat-option>\r\n                            <mat-option value=\"3\">QC</mat-option>\r\n\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"example-container mat-elevation-z8 \">\r\n\r\n                  <mat-table [dataSource]=\"dataSource\" matSort>\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"slno\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n                    </ng-container>\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"user\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> USER </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"start_date\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> START DATE </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.contact_person_email}} </mat-cell>\r\n                    </ng-container>\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"end_date\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> END DATE</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.contact_person_fname}}</mat-cell>\r\n                    </ng-container>\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"hours\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> TOTAL HOURS </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"no_task\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> NO. TASKS</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.cmp_status}}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"action\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\">\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                           <mat-icon>more_vert</mat-icon>\r\n                         </button>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                          <button *ngIf=\"row.delete_status==false\" (click)=\"getId(row._id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item>\r\n                               <i class=\"material-icons\">delete</i>\r\n                             <span>Delete</span>\r\n                           </button>\r\n                          <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                             <i class=\"material-icons\">delete_forever</i>\r\n                           <span>Deleted</span>\r\n                         </button>\r\n                          <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockCompany(row._id)\" mat-menu-item>\r\n                               <i class=\"material-icons\">block</i>\r\n                             <span>Block</span>\r\n                           </button>\r\n                          <!-- <button *ngIf=\"row.block_status==true && row.delete_status==false\" mat-menu-item>\r\n                               <i class=\"material-icons\">block</i>\r\n                             <span><a  (click)=\"unblockCompany(row._id)\">Unblock</a></span>\r\n                           </button> -->\r\n                        </mat-menu>\r\n\r\n                      </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                    </mat-row>\r\n                  </mat-table>\r\n                  <div class=\"col-md-15 \">\r\n                    <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n                         <mat-spinner></mat-spinner>\r\n                        </div> -->\r\n                  </div>\r\n                  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n                    <div class=\"col-md-4 col-md-offset-4\">\r\n                      <mat-toolbar class=\"back-color\">No item found!</mat-toolbar>\r\n                    </div>\r\n                  </div>\r\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <!-- footer-->\r\n      <!-- <admin-footer></admin-footer> -->\r\n      <!-- end footer-->\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/company-project-planning/company-project-planning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProjectPlanningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyProjectPlanningComponent = (function () {
    function CompanyProjectPlanningComponent(route, companyService, snackBar, routes, dragulaService) {
        this.route = route;
        this.companyService = companyService;
        this.snackBar = snackBar;
        this.routes = routes;
        this.dragulaService = dragulaService;
        this.displayedColumns = ['slno', 'user', 'start_date', 'end_date', 'hours', 'no_task', 'action'];
        this.selected = '0';
        this.selected1 = '0';
        this.selected2 = '0';
        this.sum = 0;
        this.sum1 = 0;
        this.arr1 = [];
        this.arr2 = [];
        // ------------------Assigned users--------------
        this.teamMembers = [];
        this.meridain = 'AM';
        this.task_time = 0;
        this.shownewModule = false;
        this.shownewTasks = false;
        this.QcIcon = false;
        this.DeveloperIcon = false;
        this.DesignerIcon = false;
        this.modules = [];
        this.spinner = false;
        this.assignPerson = [];
        this.userAvailablity = [];
        this.endDatetime = {
            start_Date: ''
        };
        // -----assign task----
        this.assigntask = {
            // start_time: '',
            planned_hour: 0,
            buffer_hour: 0,
            total_hour: 0,
        };
        this.module = {
            module_name: '',
            time: 0,
            tbl_estimation_tasks: [],
        };
        this.Projects = {
            name: '',
            code: '',
            start_date: '',
            developer: [],
            designer: [],
            qc: [],
            start_time: ''
        };
        this.newTasks = {
            task_name: '',
            assigned_person: '',
            complexity: '',
            planned_hour: 0,
            buffer_hour: 0,
            start_date: '',
            start_time: '',
            end_date: '',
            end_time: '',
            task_type: '',
            priority: '',
            assigned: '',
            assigned1: '',
            docFile: [],
            docSrc: '',
            file: '',
            newChecklist: [{ name: '' }],
        };
        // myFilter = (d: Date): boolean => {
        //   const day = d.getDay();
        //   // Prevent Saturday and Sunday from being selected.
        //   return day !== 0 && day !== 6;
        // }
        // myFilter1 = (d: Date): boolean => {
        //   const day = d.getDay();
        //   // Prevent Saturday and Sunday from being selected.
        //   return day !== 0 && day !== 6;
        // }
        // time = {hour: 0, minute: 0};
        this.meridian = true;
        // meridian = false;
        // meridian() {
        //   if (this.meridain == 'AM') {
        //     this.meridain = 'PM'
        //   }
        //   else if (this.meridain == 'PM') {
        //     this.meridain = 'AM'
        //   }
        // }
        this.date = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](new Date());
        this.serializedDate = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]((new Date()).toISOString());
        //   dragulaService.setOptions('third-bag', {
        //   removeOnSpill: true
        // }); 
        this.dragulaService.setOptions('third-bag', {
            accepts: function (el, target, source, sibling) {
                return !el.contains(target);
            },
        });
    }
    CompanyProjectPlanningComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    CompanyProjectPlanningComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyProjectPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params.id;
            _this.companyService.getProjectById(_this.p_id).subscribe(function (resData) {
                _this.Projects = resData;
                // console.log(this.Projects);
                // this.spinner = true
                // if (resData.success == true) {
                //   this.spinner = false
                //   let snackBarRef = this.snackBar.open('Success', '', {
                //     duration: 2000
                //   });
                //   this.routes.navigate(['/company-dashboard']);
                // } else {
                //   this.spinner = false
                //   // this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
                //   let snackBarRef = this.snackBar.open('Error', '', {
                //     duration: 2000
                //   });
                //   this.routes.navigate(['/404']);
                // }
            });
            // console.log(this.p_id);
        });
        this.companyService.getDeveloperUsers().subscribe(function (developerDatas) {
            _this.Developers = developerDatas;
        });
        this.companyService.getDesignerrUsers().subscribe(function (designerDatas) {
            _this.Designers = designerDatas;
        });
        this.companyService.getQcUsers().subscribe(function (qcDatas) {
            _this.QCs = qcDatas;
        });
        this.companyService.getTasksModules(this.p_id).subscribe(function (data) {
            _this.moduledata = data;
            // console.log(this.moduledata);
            // console.log(this.modules)
            _this.moduledata.forEach(function (element) {
                _this.modules.push(element);
                _this.task_time = 0;
                _this.arr1.push(element.tbl_estimation.estimation_hour);
                element.tbl_estimation_tasks.forEach(function (elementimation_tasks) {
                    _this.task_time = _this.task_time + elementimation_tasks.planned_hour + elementimation_tasks.buffer_hour;
                });
                element.time = _this.task_time;
                // console.log(element.module_time);
            });
            _this.arr1.forEach(function (element2) {
                _this.sum = _this.sum + element2;
            });
            _this.companyService.getAllUsers().subscribe(function (asignedPerson) {
                // this.assignPerson = asignedPerson;
            });
            _this.companyService.getComplexity().subscribe(function (complexity) {
                _this.complexitys = complexity;
            });
        });
        // this.companyService.getPublicHolidays().subscribe(PublicHolidays => {
        // });
        // this.companyService.getWorkingTime().subscribe(getWorkingTime => {
        // });
        // this.companyService.getOffDays().subscribe(getOffDays => {
        // });
        // this.companyService.getbreakTime().subscribe(breakTime => {
        // });
        // const bag: any = this.dragulaService.find('myBag');
        // if (bag !== undefined) this.dragulaService.destroy('myBag');
        // this.dragulaService.setOptions('myBag', {
        //   revertOnSpill: true,
        //   accepts: function (el, target, source, sibling) {
        //     return !el.contains(target);
        //   },
        // });
    };
    // save(name) {
    //   this.shownewModule = true;
    //   this.newmodule.push({ name: name });
    //   console.log(this.newmodule);
    //   // console.log(this.newmodule);
    //   this.name = '';
    // }
    CompanyProjectPlanningComponent.prototype.addMore = function () {
        this.newTasks.newChecklist.push({ name: '' });
    };
    CompanyProjectPlanningComponent.prototype.closeChecklist = function (index) {
        if (this.newTasks.newChecklist.length > 1) {
            this.newTasks.newChecklist.splice(index, 1);
        }
        else {
            var snackBarRef = this.snackBar.open('* Atleast one item required!', '', {
                duration: 2000
            });
            // console.log("test");
            // setTimeout(()=>{ 
            //     this.atleastOneitem = false;
            // }, 2000);
            return false;
        }
    };
    CompanyProjectPlanningComponent.prototype.displayDoc = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        this.newTasks.docFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.newTasks.docSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyProjectPlanningComponent.prototype.modalClear = function () {
        this.newTasks = {
            task_name: '',
            assigned_person: '',
            complexity: '',
            planned_hour: 0,
            buffer_hour: 0,
            start_date: '',
            start_time: '',
            end_date: '',
            end_time: '',
            task_type: '',
            assigned1: '',
            priority: '',
            assigned: '',
            docFile: [],
            docSrc: '',
            file: '',
            newChecklist: [{ name: '' }]
        };
    };
    CompanyProjectPlanningComponent.prototype.addModule = function () {
        // console.log(module);
        if (this.module.module_name == '') {
            var snackBarRef = this.snackBar.open("Module Name cannot be blank", '', {
                duration: 2000
            });
        }
        else {
            this.modules.push(this.module);
            var snackBarRef = this.snackBar.open("Module added successfully", '', {
                duration: 2000
            });
            // console.log(this.module + "   modulesssssssssss");
            this.module = {
                module_name: '',
                time: 0,
                tbl_estimation_tasks: [],
            };
        }
    };
    CompanyProjectPlanningComponent.prototype.addModuleClear = function () {
        this.module = {
            module_name: '',
            time: 0,
            tbl_estimation_tasks: [],
        };
    };
    CompanyProjectPlanningComponent.prototype.getId = function (index) {
        this.index = index;
        console.log(index + "  index");
        // console.log(index);
        this.newTasks = {
            task_name: '',
            assigned_person: '',
            complexity: '',
            planned_hour: 0,
            buffer_hour: 0,
            start_date: '',
            assigned: '',
            start_time: '',
            end_date: '',
            assigned1: '',
            end_time: '',
            task_type: '',
            priority: '',
            docFile: [],
            docSrc: '',
            file: '',
            newChecklist: [{ name: '' }]
        };
    };
    CompanyProjectPlanningComponent.prototype.getassigned = function () {
        // this.getEnddatetime();
        this.assigned_person = this.newTasks.assigned_person;
        this.assign_id = this.assigned_person.id;
        // console.log(this.assigned_person.id);
        // console.log(this.newTasks.assigned_person);
    };
    CompanyProjectPlanningComponent.prototype.addTask = function (index) {
        var _this = this;
        this.companyService.getDatetime(this.newTasks).subscribe(function (datetime) {
            _this.datetime = datetime;
            if (_this.datetime.success == false) {
                var snackBarRef = _this.snackBar.open(_this.datetime.msg, '', {
                    duration: 2000
                });
            }
            else {
                _this.newTasks.assigned = _this.assigned_person;
                _this.newTasks.assigned1 = _this.assigned_person;
                _this.modules[index].tbl_estimation_tasks.push(_this.newTasks);
                _this.modules[index].time = _this.modules[index].time + _this.newTasks.planned_hour + _this.newTasks.buffer_hour;
                _this.sum = _this.sum + _this.newTasks.planned_hour + _this.newTasks.buffer_hour;
                _this.closeBtn.nativeElement.click();
                var snackBarRef = _this.snackBar.open(' Task added succesfully', '', {
                    duration: 2000
                });
                _this.newTasks = {
                    task_name: '',
                    assigned_person: '',
                    complexity: '',
                    planned_hour: 0,
                    buffer_hour: 0,
                    start_date: '',
                    start_time: '',
                    end_date: '',
                    end_time: '',
                    assigned: '',
                    assigned1: '',
                    task_type: '',
                    priority: '',
                    docFile: [],
                    docSrc: '',
                    file: '',
                    newChecklist: [{ name: '' }]
                };
            }
        });
    };
    CompanyProjectPlanningComponent.prototype.deleteModule = function (i) {
        this.sum = this.sum - this.modules[i].time;
        this.modules.splice(i, 1);
    };
    CompanyProjectPlanningComponent.prototype.editModules = function (i, module) {
        // console.log(this.module);
        this.modules.splice(i, 1);
        this.modules.push(module);
        // let snackBarRef = this.snackBar.open("Module updated successfully", '', {
        //   duration: 2000
        // });
        this.modules.forEach(function (element) {
            console.log(element.module_name);
        });
    };
    CompanyProjectPlanningComponent.prototype.getId1 = function (i, j) {
        this.i = i;
        this.j = j;
    };
    CompanyProjectPlanningComponent.prototype.getId2 = function (i, j, task) {
        this.i = i;
        this.j = j;
        this.newTasks = task;
        this.newTasks.assigned_person = '';
        this.newTasks.start_date = '';
        this.newTasks.start_time = '';
        this.meridain = '';
    };
    CompanyProjectPlanningComponent.prototype.deleteTask = function (i, j) {
        // console.log(i);
        // console.log(j)
        // console.log(this.modules[this.i]);
        // this.newTasks = this.modules[this.i].tbl_estimation_tasks[this.j];
        this.modules[i].time = this.modules[i].time - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
        this.sum = this.sum - this.modules[i].tbl_estimation_tasks[j].planned_hour - this.modules[i].tbl_estimation_tasks[j].buffer_hour;
        this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
    };
    CompanyProjectPlanningComponent.prototype.editTask = function (i, j) {
        // console.log(this.modules[i].tasks[j]);
        this.modules[i].tbl_estimation_tasks.splice(this.j, 1);
        // console.log(this.assigned_person);
        // console.log("helllo");
        this.newTasks.assigned = this.assigned_person.f_name;
        this.newTasks.assigned1 = this.assigned_person.l_name;
        this.modules[i].tbl_estimation_tasks.push(this.newTasks);
        this.modules[i].time = this.modules[i].time + this.newTasks.planned_hour + this.newTasks.buffer_hour;
        this.sum = this.sum + this.newTasks.planned_hour + this.newTasks.buffer_hour;
        this.closeBtn1.nativeElement.click();
        var snackBarRef = this.snackBar.open(' Task updated succesfully', '', {
            duration: 2000
        });
    };
    CompanyProjectPlanningComponent.prototype.startDateSelect = function () {
        this.assignstart_date = this.Projects.start_date;
        this.assignstart_time = this.Projects.start_time;
        // this.modules.forEach(modules => {
        //   modules.tbl_estimation_tasks.forEach(tasks => {
        //     tasks.start_date = this.Projects.start_date;
        //     tasks.start_time = this.Projects.start_time;
        //   });
        // });
    };
    CompanyProjectPlanningComponent.prototype.getuserAvalibality = function () {
        var _this = this;
        this.assignPerson = [];
        // console.log(this.Projects.developer);
        if (this.Projects.developer) {
            this.Projects.developer.forEach(function (developer) {
                if (_this.inArray(developer, _this.assignPerson) == false) {
                    _this.assignPerson.push(developer);
                }
            });
        }
        if (this.Projects.designer) {
            this.Projects.designer.forEach(function (designer) {
                if (_this.inArray(designer, _this.assignPerson) == false) {
                    _this.assignPerson.push(designer);
                }
            });
        }
        if (this.Projects.qc) {
            this.Projects.qc.forEach(function (qc) {
                if (_this.inArray(qc, _this.assignPerson) == false) {
                    _this.assignPerson.push(qc);
                }
            });
        }
    };
    CompanyProjectPlanningComponent.prototype.inArray = function (needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) {
                return true;
            }
        }
        return false;
    };
    // getEnddatetime() {
    //   this.startdate =   this.assignstart_date ;
    //   this.starttime =   this.assignstart_time ;
    //   this.teamMembers = [];
    //   if (this.inArray(this.assign_id, this.teamMembers) == false) {
    //     this.modules.forEach(modules => {
    //        modules.tbl_estimation_tasks.forEach(tasks => {
    //         tasks.start_date = this.assignstart_date;
    //         tasks.start_time = this.assignstart_time;
    //       });
    //     });
    //     // console.log(this.startdate + "  end date");
    //     this.startdate.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
    //     this.teamMembers.push({ assign_person_id: this.assign_id, start_date: this.assignstart_date, start_time: this.assignstart_time });
    //     this.assigntask.total_hour = this.newTasks.planned_hour + this.newTasks.buffer_hour;
    //     this.assignend_date = this.assignstart_date;
    //     this.starttime.hour = this.starttime.hour + this.assigntask.total_hour
    //     this.assignend_date.setHours(this.starttime.hour, this.starttime.minute, this.starttime.second);
    //     // this.teamMembers.push({end_date :this.assignend_date });
    //     // console.log(this.assignend_date);
    //     // var startDate = this.assignstart_date;
    //     // var endDate = this.assignend_date;
    //     var getDates = function (startDate, endDate) {
    //       var dates = [],
    //         currentDate = startDate,
    //         addDays = function (days) {
    //           var date = new Date(this.valueOf());
    //           date.setDate(date.getDate() + days);
    //           return date;
    //         };
    //       while (currentDate <= endDate) {
    //         dates.push(currentDate);
    //         currentDate = addDays.call(currentDate, 1);
    //       }
    //       return dates;
    //     };
    //     // Usage
    // console.log(this.startdate + "  start date");
    //     var dates = getDates(new Date(this.startdate), new Date(this.assignend_date));
    //     // console.log(dates + "  dateee") ;
    //     dates.forEach(function (date) {
    //       console.log(date + " dff");
    //     });
    //   }
    // }
    CompanyProjectPlanningComponent.prototype.getEnddatetime = function () {
        var _this = this;
        this.startdate = '';
        this.starttime = '';
        this.endtime = '';
        this.startdate = this.assignstart_date;
        this.starttime = this.assignstart_time;
        this.endtime = this.assignstart_time;
        this.teamMembers = [];
        if (this.inArray(this.assign_id, this.teamMembers) == false) {
            this.modules.forEach(function (modules) {
                modules.tbl_estimation_tasks.forEach(function (tasks) {
                    tasks.start_date = _this.assignstart_date;
                    tasks.start_time = _this.assignstart_time;
                });
            });
            this.teamMembers.push({ assign_person_id: this.assign_id, start_date: this.assignstart_date, start_time: this.assignstart_time });
            this.assignstart_date.setHours(this.assignstart_time.hour, this.assignstart_time.minute, this.assignstart_time.second);
            this.startdatetime = this.assignstart_date;
            console.log(this.startdatetime);
            this.assigntask.total_hour = this.newTasks.planned_hour + this.newTasks.buffer_hour;
            this.assignend_date = this.startdate;
            this.endtime.hour = this.endtime.hour + this.assigntask.total_hour;
            // console.log( this.endtime.hour);
            // console.log(this.startdatetime + "  Before");
            this.assignend_date.setHours(this.endtime1, this.endtime.minute, this.endtime.second);
            console.log(this.assignend_date);
            // console.log(this.startdatetime + "  after");
            // console.log(this.assignend_date + " end date");
            // console.log(startdatetime + " start  date");
            //     // this.teamMembers.push({end_date :this.assignend_date });
            //     // console.log(this.assignend_date);
            //     // var startDate = this.assignstart_date;
            //     // var endDate = this.assignend_date;
            //     var getDates = function (startDate, endDate) {
            //       var dates = [],
            //         currentDate = startDate,
            //         addDays = function (days) {
            //           var date = new Date(this.valueOf());
            //           date.setDate(date.getDate() + days);
            //           return date;
            //         };
            //       while (currentDate <= endDate) {
            //         dates.push(currentDate);
            //         currentDate = addDays.call(currentDate, 1);
            //       }
            //       return dates;
            //     };
            //     // Usage
            // console.log(this.startdate + "  start date");
            //     var dates = getDates(new Date(this.startdate), new Date(this.assignend_date));
            //     // console.log(dates + "  dateee") ;
            //     dates.forEach(function (date) {
            //       console.log(date + " dff");
            //     });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyProjectPlanningComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyProjectPlanningComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyProjectPlanningComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyProjectPlanningComponent.prototype, "sort", void 0);
    CompanyProjectPlanningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-planning',
            template: __webpack_require__("../../../../../src/app/components/company-project-planning/company-project-planning.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-project-planning/company-project-planning.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], CompanyProjectPlanningComponent);
    return CompanyProjectPlanningComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{padding-left: 6%;}\r\n.sales{margin-top: 25px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Project Vs Task Hours</h1>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"widget\">\n                <div id=\"chart\" class=\"chart-container\">\n            \n                </div>\n               \n                  <div id=\"stacked-bar-chart-container1\">\n                    </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProjectVsHourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyProjectVsHourComponent = (function () {
    function CompanyProjectVsHourComponent() {
    }
    CompanyProjectVsHourComponent.prototype.ngOnInit = function () {
        console.clear();
        var offenseNames = [
            "Completed",
            "Fondling",
            "Statutory Completed",
            "Sa"
        ];
        var years = ["Taskit", "Survey", "Auction"
            // ,"Asif","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","20291","20219","21029","12029","20229","20229","202229","20529","25029","52029","20269","20629","62029","27029","2w029"
        ];
        var offensesByYear = [
            {
                "Completed": 50,
                "Fondling": 10,
                "Statutory Completed": 3,
                "Sa": 2
            },
            {
                "Completed": 26,
                "Fondling": 4,
                "Statutory Completed": 5,
                "Sa": 3
            },
            {
                "Completed": 25,
                "Fondling": 11,
                "Statutory Completed": 3,
                "Sa": 2
            },
        ];
        var generateClassStr = function (str) {
            return str.replace(/\s+/g, '-').toLowerCase();
        };
        var n = offenseNames.length, // number of layers
        m = offensesByYear.length, // number of samples per layer
        stack = d3.stack().keys(offenseNames);
        var layers = stack(offensesByYear); // calculate the stack layout
        layers.forEach(function (d, i) {
            // add keys to every datapoint
            d.forEach(function (dd, j) {
                dd.year = years[j];
                dd.offenseName = offenseNames[i];
                dd.class = generateClassStr(dd.offenseName);
                dd.value = dd.data[dd.offenseName];
            });
        });
        var yStackMax = d3.max(layers, function (layer) {
            return d3.max(layer, function (d) {
                return d[1];
            });
        });
        var margin = { top: 70, right: 15, bottom: 140, left: 50 }, fullChartWidth = 600, fullChartHeight = 400, width = fullChartWidth - margin.left - margin.right, height = fullChartHeight - margin.top - margin.bottom;
        d3.select("#stacked-bar-chart-container")
            .style("width", fullChartWidth)
            .style("height", fullChartHeight);
        var x = d3
            .scaleBand()
            .domain(years)
            .rangeRound([0, width])
            .padding(0.08);
        var y = d3
            .scaleLinear()
            .domain([0, yStackMax])
            .range([height, 0]);
        var z = d3
            .scaleBand()
            .domain(offenseNames)
            .rangeRound([0, x.bandwidth()]);
        var color = ["#17a88f", "#f2ac37", "#b74549", , "#4d5d6e", , "#2778a7"];
        var svg = d3
            .select("#stacked-bar-chart-container1")
            .append("svg")
            .attr("width", width + margin.left + margin.right + 20)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");
        var layer = svg
            .selectAll(".layer")
            .data(layers)
            .enter()
            .append("g")
            .attr("class", "layer")
            .style("fill", function (d, i) {
            return color[i];
        });
        // Define the div for the tooltip
        var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        // alert(x.bandwidth());
        // alert(m);
        var myLPadd = 950;
        var myTPadd = 620;
        var rect = layer
            .selectAll(".bar")
            .data(function (d) {
            return d;
        })
            .enter()
            .append("rect")
            .attr("class", function (d) { return generateClassStr(d.offenseName) + " bar"; })
            .attr("x", function (d) {
            return x(d.year);
        })
            .attr("y", height)
            .attr("width", x.bandwidth())
            .attr("height", 0)
            .on("mouseover", function (d) {
            // d3.selectAll(".bar")
            //   .filter(dd => dd.class != d.class)
            //   .style("opacity", 0.6)
        })
            .on("mousemove", function (d) {
            tooltip
                .style("opacity", .9)
                .html("<b>" + d.value + "</b> cases of " + d.offenseName + " in " + d.year)
                .style("left", (d3.mouse(this)[0]) + myLPadd + "px")
                .style("top", (d3.mouse(this)[1]) + myTPadd + 40 + "px");
        })
            .on("mouseout", function (d) {
            d3.selectAll(".bar").style("opacity", 1);
            tooltip.style("opacity", 0);
        });
        rect
            .transition()
            .delay(function (d, i) {
            return i * 10;
        })
            .attr("y", function (d) {
            return y(d[1]);
        })
            .attr("height", function (d) {
            return y(d[0]) - y(d[1]);
        });
        // alert(height);
        // height = 10;
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");
        // .append("g")
        // .attr("class", "x axis")
        // .attr("transform", "translate(0," + height + ")")
        // .call(d3.axisBottom(x).tickSizeOuter(0))
        // .attr("transform", "rotate(-90)");
        // add the Y gridlines
        svg.append("g")
            .attr("class", "grid")
            .call(d3.axisLeft(y)
            .ticks(25)
            .tickFormat(""));
        // Add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
        // text label for the y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left - 30)
            .attr("x", 0 - (height / 2))
            .attr("dy", "3em")
            .style("text-anchor", "middle")
            .text("Total hours");
        var legend = svg
            .selectAll(".legend")
            .data(offenseNames.reverse()) // match stack order
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
            return "translate(0," + i * 15 + ")";
        });
        legend
            .append("rect")
            .attr("x", width - 10)
            .attr("y", -70)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function (d, i) {
            return color[offenseNames.length - 1 - i]; // match stack order
        });
        legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", -65)
            .attr("font-size", '10px')
            .attr("dy", ".35em")
            .attr("class", "barGraphLegend")
            .style("text-anchor", "end")
            .text(function (d) {
            return d;
        });
        d3.selectAll("input").on("change", change);
        function change() {
            (this.value === "grouped") ? transitionGrouped() : transitionStacked();
        }
        function transitionGrouped() {
            rect
                .transition()
                .duration(500)
                .delay(function (d, i) {
                return i * 10;
            })
                .attr("x", function (d) {
                return x(d.year) + z(d.offenseName);
            })
                .transition()
                .attr("y", function (d) {
                return y(d.data[d.offenseName]);
            })
                .attr("height", function (d) {
                return height - y(d.data[d.offenseName]);
            });
        }
        function transitionStacked() {
            rect
                .transition()
                .duration(500)
                .delay(function (d, i) {
                return i * 10;
            })
                .attr("y", function (d) {
                return y(d[1]);
            })
                .attr("height", function (d) {
                return y(d[0]) - y(d[1]);
            })
                .transition()
                .attr("x", function (d) {
                return x(d.year);
            });
        }
    };
    CompanyProjectVsHourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-project-vs-hour',
            template: __webpack_require__("../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyProjectVsHourComponent);
    return CompanyProjectVsHourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.tasklabel{       background: #efefef;\r\n    padding: 25px 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin: 10px 0;\r\n    border: 1px solid #ccc;\r\n    font-weight: bold;\r\n    font-size : 12px;\r\n  }\r\n  h1{text-align:center;}\r\n  .bg-g{background:#17a88f;color:#fff; padding: 10px;}\r\n  .bg-hash{background:#E9E9E9;padding: 10px;;}\r\n  .bg-hash select{background:none;border:none;width:100%;}\r\n  .total{font-weight:700;padding-top: 20px; line-height: 36px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Project Vs Status</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n          <div class=\"col-md-8 col-md-offset-2\">\n          <div class=\"col-md-6 bg-g\">*Select Project</div>\n          <div class=\"col-md-6 bg-hash\">\n            <select>\n              <option>Taskit</option>\n              <option>Survey</option>\n            </select>\n          </div> \n          <div class=\"clearfix\"></div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              TASKS ASSIGNED\n              <br>\n              2\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n                TASKS COMPLETED\n                <br>\n                10\n               </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              DUE THIS WEEK\n              <br>\n              10\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n               DUE NEXT WEEK\n                <br>\n                10\n               </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              DUE THIS MONTH\n              <br>\n              10\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n                DUE THIS YEAR\n                <br>\n                10\n               </div>\n              </div>\n          </div>\n        </div>\n        </div>\n    \n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"widget\">\n                <div class=\"header\">Task Vs Status</div>\n                <div id=\"chart2\" class=\"chart-container\">\n            \n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProjectVsStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyProjectVsStatusComponent = (function () {
    function CompanyProjectVsStatusComponent() {
    }
    CompanyProjectVsStatusComponent.prototype.ngOnInit = function () {
        var pieData = [
            { name: 'New - Yet to Start', value: 3, color: '#2778a7' },
            { name: 'In Progress', value: 4, color: '#99b745' },
            { name: 'Completed', value: 50, color: '#17a88f' },
            { name: 'On Hold', value: 50, color: '#f2ac37' },
            { name: 'Cancelled', value: 3, color: '#b74549' },
            { name: 'Un Planned', value: 1, color: '#4d5d6e' },
        ];
        this.bakeDonut(pieData);
    };
    CompanyProjectVsStatusComponent.prototype.bakeDonut = function (d) {
        var activeSegment;
        var data = d.sort(function (a, b) { return b['value'] - a['value']; }), viewWidth = 500, viewHeight = 300, svgWidth = viewHeight, svgHeight = viewHeight, thickness = 40, colorArray = data.map(function (k) { return k.color; }), el = d3.select('#chart2'), radius = Math.min(svgWidth, svgHeight) / 2, color = d3.scaleOrdinal()
            .range(colorArray);
        var max = d3.max(data, function (maxData) { return maxData.value; });
        var svg = el.append('svg')
            .attr('viewBox', "0 0 " + (viewWidth + thickness) + " " + (viewHeight + thickness))
            .attr('class', 'pie')
            .attr('width', viewWidth)
            .attr('height', svgHeight);
        var g = svg.append('g')
            .attr('transform', "translate( " + ((svgWidth / 2) + (thickness / 2)) + ", " + ((svgHeight / 2) + (thickness / 2)) + ")");
        var arc = d3.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius);
        var arcHover = d3.arc()
            .innerRadius(radius - (thickness + 5))
            .outerRadius(radius + 8);
        var pie = d3.pie()
            .value(function (pieData) { return pieData.value; })
            .sort(null);
        var maxAssigned = false;
        var maxArcAssigned = false;
        var path = g.selectAll('path')
            .attr('class', 'data-path')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'data-group')
            .each(function (pathData, i) {
            var group = d3.select(this);
            group.append('text')
                .text("" + pathData.data.value)
                .attr('class', 'data-text data-text__value')
                .attr('text-anchor', 'middle')
                .attr('dy', '0em');
            group.append('text')
                .text("" + pathData.data.name)
                .attr('class', 'data-text data-text__name')
                .attr('text-anchor', 'middle')
                .attr('dy', '1.5em');
            // Set default active segment
            if (pathData.value === max && !maxAssigned) {
                var textVal = d3.select(this).select('.data-text__value')
                    .classed('data-text--show', true);
                var textName = d3.select(this).select('.data-text__name')
                    .classed('data-text--show', true);
                maxAssigned = true;
            }
        })
            .append('path')
            .attr('d', arc)
            .attr('fill', function (fillData, i) { return color(fillData.data.name); })
            .attr('class', 'data-path')
            .on('mouseover', function () {
            var _thisPath = this, parentNode = _thisPath.parentNode;
            if (_thisPath !== activeSegment) {
                activeSegment = _thisPath;
                var dataTexts = d3.selectAll('#chart2 .data-text')
                    .classed('data-text--show', false);
                var paths = d3.selectAll('#chart2 .data-path')
                    .transition()
                    .duration(250)
                    .attr('d', arc);
                d3.select(_thisPath)
                    .transition()
                    .duration(250)
                    .attr('d', arcHover);
                var thisDataValue = d3.select(parentNode).select('.data-text__value')
                    .classed('data-text--show', true);
                var thisDataText = d3.select(parentNode).select('.data-text__name')
                    .classed('data-text--show', true);
            }
        })
            .each(function (v, i) {
            if (v.value === max && !maxArcAssigned) {
                var maxArc = d3.select(this)
                    .attr('d', arcHover);
                activeSegment = this;
                maxArcAssigned = true;
            }
            this._current = i;
        });
        var legendRectSize = 15;
        var legendSpacing = 10;
        var legend = svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function (legendData, i) {
            var itemHeight = legendRectSize + legendSpacing;
            var offset = legendRectSize * color.domain().length;
            var horz = svgWidth + 80;
            var vert = (i * itemHeight) + legendRectSize + (svgHeight - offset) / 2;
            return "translate(" + horz + ", " + vert + ")";
        });
        legend.append('circle')
            .attr('r', legendRectSize / 2)
            .style('fill', color);
        legend.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .attr('class', 'legend-text')
            .text(function (legendData) { return legendData; });
    };
    CompanyProjectVsStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-project-vs-status',
            template: __webpack_require__("../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyProjectVsStatusComponent);
    return CompanyProjectVsStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    margin: auto;\r\n    position: relative;\r\n  }\r\n  \r\n  text {\r\n    font: 15px sans-serif;\r\n  }\r\n  \r\n  .axis path,\r\n  .axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n    shape-rendering: crispEdges;\r\n  }\r\n  \r\n  #stacked-bar-chart-container {\r\n    /* position: relative;\r\n    border: 2px solid black; */\r\n    width: 510px;\r\n  }\r\n  \r\n  form {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 20px;\r\n  }\r\n  \r\n  div.tooltip { \r\n    position: absolute;     \r\n    min-width: 60px;          \r\n    padding: 4px;       \r\n    font: 12px sans-serif;    \r\n    background: lightsteelblue; \r\n    border: 0px;    \r\n    border-radius: 8px;     \r\n    pointer-events: none;     \r\n  }\r\n  \r\n  .grid line {\r\n    stroke: white;\r\n    stroke-opacity: 0.7;\r\n    shape-rendering: crispEdges;\r\n  }\r\n  \r\n  g.grid {\r\n    stroke-opacity: 0;\r\n  }\r\n\r\n\r\n\r\n\r\n  svg {\r\n    font: 10px sans-serif;\r\n    shape-rendering: crispEdges;\r\n  }\r\n\r\n  .axis path,\r\n  .axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n  }\r\n \r\n  path.domain {\r\n    stroke: none;\r\n  }\r\n \r\n  .y .tick line {\r\n    stroke: #ddd;\r\n  }\r\n  h1{padding-left: 6%;}\r\n  .sales{margin-top: 25px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Resources Vs Task Hours</h1>\n  <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"widget\">\n              <div id=\"chart\" class=\"chart-container\">\n          \n              </div>\n             \n                <div id=\"stacked-bar-chart-container\">\n                  </div>\n          </div>\n      </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyResoureVsHourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyResoureVsHourComponent = (function () {
    function CompanyResoureVsHourComponent() {
    }
    CompanyResoureVsHourComponent.prototype.ngOnInit = function () {
        console.clear();
        var offenseNames = [
            "Completed",
            "Fondling",
            "Statutory Completed",
            "Sa"
        ];
        var years = ["Yasir", "Rinsha", "Sudha"
            // ,"Asif","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","20291","20219","21029","12029","20229","20229","202229","20529","25029","52029","20269","20629","62029","27029","2w029"
        ];
        var offensesByYear = [
            {
                "Completed": 400,
                "Fondling": 10,
                "Statutory Completed": 3,
                "Sa": 2
            },
            {
                "Completed": 26,
                "Fondling": 4,
                "Statutory Completed": 5,
                "Sa": 3
            },
            {
                "Completed": 25,
                "Fondling": 11,
                "Statutory Completed": 3,
                "Sa": 2
            },
        ];
        var generateClassStr = function (str) {
            return str.replace(/\s+/g, '-').toLowerCase();
        };
        var n = offenseNames.length, // number of layers
        m = offensesByYear.length, // number of samples per layer
        stack = d3.stack().keys(offenseNames);
        var layers = stack(offensesByYear); // calculate the stack layout
        layers.forEach(function (d, i) {
            // add keys to every datapoint
            d.forEach(function (dd, j) {
                dd.year = years[j];
                dd.offenseName = offenseNames[i];
                dd.class = generateClassStr(dd.offenseName);
                dd.value = dd.data[dd.offenseName];
            });
        });
        var yStackMax = d3.max(layers, function (layer) {
            return d3.max(layer, function (d) {
                return d[1];
            });
        });
        var margin = { top: 70, right: 15, bottom: 140, left: 50 }, fullChartWidth = 600, fullChartHeight = 400, width = fullChartWidth - margin.left - margin.right, height = fullChartHeight - margin.top - margin.bottom;
        d3.select("#stacked-bar-chart-container")
            .style("width", fullChartWidth)
            .style("height", fullChartHeight);
        var x = d3
            .scaleBand()
            .domain(years)
            .rangeRound([0, width])
            .padding(0.08);
        var y = d3
            .scaleLinear()
            .domain([0, yStackMax])
            .range([height, 0]);
        var z = d3
            .scaleBand()
            .domain(offenseNames)
            .rangeRound([0, x.bandwidth()]);
        var color = ["#17a88f", "#f2ac37", "#b74549", , "#4d5d6e", , "#2778a7"];
        var svg = d3
            .select("#stacked-bar-chart-container")
            .append("svg")
            .attr("width", width + margin.left + margin.right + 20)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");
        var layer = svg
            .selectAll(".layer")
            .data(layers)
            .enter()
            .append("g")
            .attr("class", "layer")
            .style("fill", function (d, i) {
            return color[i];
        });
        // Define the div for the tooltip
        var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        // alert(x.bandwidth());
        // alert(m);
        var myLPadd = 250;
        var myTPadd = 620;
        var rect = layer
            .selectAll(".bar")
            .data(function (d) {
            return d;
        })
            .enter()
            .append("rect")
            .attr("class", function (d) { return generateClassStr(d.offenseName) + " bar"; })
            .attr("x", function (d) {
            return x(d.year);
        })
            .attr("y", height)
            .attr("width", x.bandwidth())
            .attr("height", 0)
            .on("mouseover", function (d) {
            // d3.selectAll(".bar")
            //   .filter(dd => dd.class != d.class)
            //   .style("opacity", 0.6)
        })
            .on("mousemove", function (d) {
            tooltip
                .style("opacity", .9)
                .html("<b>" + d.value + "</b> cases of " + d.offenseName + " in " + d.year)
                .style("left", (d3.mouse(this)[0]) + myLPadd + "px")
                .style("top", (d3.mouse(this)[1]) + myTPadd + 40 + "px");
        })
            .on("mouseout", function (d) {
            d3.selectAll(".bar").style("opacity", 1);
            tooltip.style("opacity", 0);
        });
        rect
            .transition()
            .delay(function (d, i) {
            return i * 10;
        })
            .attr("y", function (d) {
            return y(d[1]);
        })
            .attr("height", function (d) {
            return y(d[0]) - y(d[1]);
        });
        // alert(height);
        // height = 10;
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");
        // .append("g")
        // .attr("class", "x axis")
        // .attr("transform", "translate(0," + height + ")")
        // .call(d3.axisBottom(x).tickSizeOuter(0))
        // .attr("transform", "rotate(-90)");
        // add the Y gridlines
        svg.append("g")
            .attr("class", "grid")
            .call(d3.axisLeft(y)
            .ticks(25)
            .tickFormat(""));
        // Add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
        // text label for the y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left - 30)
            .attr("x", 0 - (height / 2))
            .attr("dy", "3em")
            .style("text-anchor", "middle")
            .text("Total hours");
        var legend = svg
            .selectAll(".legend")
            .data(offenseNames.reverse()) // match stack order
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) {
            return "translate(0," + i * 15 + ")";
        });
        legend
            .append("rect")
            .attr("x", width - 10)
            .attr("y", -70)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function (d, i) {
            return color[offenseNames.length - 1 - i]; // match stack order
        });
        legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", -65)
            .attr("font-size", '10px')
            .attr("dy", ".35em")
            .attr("class", "barGraphLegend")
            .style("text-anchor", "end")
            .text(function (d) {
            return d;
        });
        d3.selectAll("input").on("change", change);
        function change() {
            (this.value === "grouped") ? transitionGrouped() : transitionStacked();
        }
        function transitionGrouped() {
            rect
                .transition()
                .duration(500)
                .delay(function (d, i) {
                return i * 10;
            })
                .attr("x", function (d) {
                return x(d.year) + z(d.offenseName);
            })
                .transition()
                .attr("y", function (d) {
                return y(d.data[d.offenseName]);
            })
                .attr("height", function (d) {
                return height - y(d.data[d.offenseName]);
            });
        }
        function transitionStacked() {
            rect
                .transition()
                .duration(500)
                .delay(function (d, i) {
                return i * 10;
            })
                .attr("y", function (d) {
                return y(d[1]);
            })
                .attr("height", function (d) {
                return y(d[0]) - y(d[1]);
            })
                .transition()
                .attr("x", function (d) {
                return x(d.year);
            });
        }
    };
    CompanyResoureVsHourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-resoure-vs-hour',
            template: __webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyResoureVsHourComponent);
    return CompanyResoureVsHourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n  <a href=\"\"><img src=\"./assets/images/logo.jpg\" alt=\"\" class=\"\">\r\n \r\n</a>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n\r\n<!-- Brand and toggle get grouped for better mobile display -->\r\n<div class=\"navbar-header\">\r\n<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n  <span class=\"sr-only\">Toggle navigation</span>\r\n  <span class=\"icon-bar\"></span>\r\n  <span class=\"icon-bar\"></span>\r\n  <span class=\"icon-bar\"></span>\r\n</button>\r\n\r\n</div>\r\n\r\n<!-- Collect the nav links, forms, and other content for toggling -->\r\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\r\n  <ul class=\"zx nav navbar-nav\">\r\n      <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n        <a routerLink=\"/admin-dashboard\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n        <a routerLink=\"/admin-company\"><i class=\"fa fa-building-o\"></i> Company</a></li>\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n        <a routerLink=\"\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i><span class=\"\">Plan</span></a></li>\r\n  </ul>\r\n\r\n\r\n</div><!-- /.navbar-collapse -->\r\n\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanySidebarComponent = (function () {
    function CompanySidebarComponent() {
    }
    CompanySidebarComponent.prototype.ngOnInit = function () {
    };
    CompanySidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-sidebar',
            template: __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanySidebarComponent);
    return CompanySidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-signup/company-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, select{outline:none;}\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{    width: 56%;\r\n    left: 22%;\r\n    bottom: 10%;\r\n    z-index: 100;\r\n    min-height: 20px;\r\n    color: #fff;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    line-height: 22px;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n\r\n\r\n\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}\r\n\r\n.loder{\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\nlogn{\r\n  position: relative\r\n}\r\n.btn-nxt{\r\n  position: absolute;\r\n  top: 68px;\r\n  right: 0;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.nxt-cntainer{\r\n  position: relative;\r\n}\r\nselect,input{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  padding-right: 44px;\r\n}\r\nselect{\r\n  cursor: pointer;\r\n}\r\n.inp-hd{\r\n  font-size: 25px;\r\n}\r\n.errMsg{\r\n  font-size: 13px;color: #ff336a;\r\n}\r\n.progress-bar{\r\n  background-color: #28d685 !important;\r\n}\r\n.inp-top{\r\n  top: 89px;\r\n}\r\n.submit-form{\r\n  position: absolute;\r\n    top: 138px;\r\n    right: 0;\r\n    background: transparent;\r\n    border: none;\r\n  transition: color 1s ease;\r\n    \r\n}\r\n.trans-clr{\r\n  color: #20ad6b;\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-signup/company-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"logn\">\r\n    <div class=\"row\">\r\n\t   <div class=\"col-md-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"logn-img\">\r\n\t\t\t\t\t<img src=\"./assets/images/sign.jpg\" class=\"img-responsive\"/>\r\n\t\t\t\t\t<div class=\"paragraph\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t   </div>\r\n\t   <div class=\"col-md-4 bgz\">\r\n\t\t\t<h3>Registration</h3>\r\n\t\t\t<section>\r\n\t\t\t\t<form id=\"theForm\" class=\"simform\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"text-center\" *ngIf=\"registr\">\r\n\t\t\t\t\t<label>{{ssMsg}}</label>\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text-center\" *ngIf=\"showLoader\">\r\n\t\t\t\t\t\t<app-spinner></app-spinner>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"simform-inner\" *ngIf=\"!registr\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div  *ngFor=\"let item of questions;let i=index;\" class=\"nxt-cntainer\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"counter == i\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"inp-hd\" >{{item.question}}</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"item.type == 'text' else password\" [(ngModel)]=\"item.ans\" name=\"item.ans\" [attr.autofocus]=\"counter == i\">\r\n\t\t\t\t\t\t\t\t\t<ng-template #password>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" *ngIf=\"item.type == 'password' else multiple\" [(ngModel)]=\"item.ans\" name=\"item.ans\" autofocus>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #multiple>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"inp\"  [(ngModel)]=\"item.ans\" name=\"item.ans\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"i == 3 else size\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let c of industry\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{c.id}}\">{{c.industry}}</option>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #size>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let s of cmpSize\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{s.id}}\">{{s.size_range}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option>Select Company Size</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-10</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-20</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<button *ngIf=\"counter != 8\" class=\"btn-nxt\" type=\"submit\" (click)=\"validate(i)\" [ngClass]=\"{'inp-top': counter==6}\"><i class=\"la la-arrow-right\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\r\n\t\t\t\t\t\t\t\taria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"progressBarWidth\">\r\n\t\t\t\t\t\t\t\t  <span class=\"sr-only\">70% Complete</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<div class=\"errMsg\" *ngIf=\"counter == 8|| counter == 7\">{{passMessage}}</div>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t<div class=\"errMsg\">{{errMessage}}</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button *ngIf=\"counter == 8\" class=\"submit-form trans-clr\" type=\"submit\" (click)=\"register()\"><i class=\"la la-arrow-right\"></i></button>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div><!-- /simform-inner -->\r\n\t\t\t\t\t<span class=\"final-message\"></span>\r\n\t\t\t\t</form><!-- /simform -->\t\t\t\r\n\t\t\t</section>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t  \r\n\t   \r\n   </div>\r\n\r\n    <!-- Modal -->\r\n \r\n\t\t<script>\r\n\t\t\t\r\n\t\t</script>\r\n\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-signup/company-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanySignupComponent = (function () {
    function CompanySignupComponent(companyService) {
        this.companyService = companyService;
        this.timestamp = new Date().getTime().toString();
        this.questions = [{
                question: "What's your Email?",
                type: "text",
                ans: ""
            },
            {
                question: "What's your Company Name?",
                type: "text",
                ans: ""
            },
            {
                question: "Your Company Code?",
                type: "text",
                ans: ""
            },
            {
                question: "Industry?",
                type: "multiple",
                ans: ""
            },
            {
                question: "Your Contact Number ?",
                type: "text",
                ans: ""
            },
            {
                question: "Company Size?",
                type: "multiple",
                ans: ""
            },
            {
                question: "Why are you looking for task managment software?",
                type: "text",
                ans: ""
            },
            {
                question: "Your Password",
                type: "password",
                ans: ""
            },
            {
                question: "Confirm Password",
                type: "password",
                ans: ""
            },
        ];
        this.errMessage = '';
        this.counter = 0;
        this.progressBarWidth = 0;
        this.registr = false;
        this.ssMsg = '';
        this.showLoader = false;
        this.passMessage = "Must be of 8 letters! Contain atleast 1 character, 1 number & 1 special character!";
        this.reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        this.verification_code = this.timestamp + Math.floor(100000 + Math.random() * 900000);
    }
    CompanySignupComponent.prototype.ngOnInit = function () {
        console.log(this.questions);
        this.getIndustries();
        this.getCompanySize();
    };
    CompanySignupComponent.prototype.register = function () {
        var _this = this;
        if (this.questions[7].ans == this.questions[8].ans) {
            this.errMessage = "";
            this.registr = true;
            this.showLoader = true;
            this.questions.push({ question: 'verification', type: 'text', ans: this.verification_code });
            this.companyService.registerCompany(this.questions).subscribe(function (resData) {
                _this.showLoader = false;
                _this.ssMsg = resData.message;
            });
        }
        else {
            this.errMessage = "Password doesn't match!";
        }
    };
    CompanySignupComponent.prototype.getIndustries = function () {
        var _this = this;
        this.companyService.getIndustries().subscribe(function (resData) {
            // console.log(resData)
            _this.industry = resData;
            // console.log(this.industry)
        });
    };
    CompanySignupComponent.prototype.getCompanySize = function () {
        var _this = this;
        this.companyService.getCompanySize().subscribe(function (resData) {
            // console.log(resData)
            _this.cmpSize = resData;
        });
    };
    CompanySignupComponent.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    CompanySignupComponent.prototype.addCounter = function () {
        // if(this.counter == 0){
        // 	if(this.ValidateEmail(this.questions[this.counter].ans)){
        // 	this.errMessage = "Invalid email address!";
        // 	}
        // }
        this.counter = this.counter + 1;
        this.progressBarWidth = (this.counter / 8) * 100;
        // console.log(this.progressBarWidth );
    };
    CompanySignupComponent.prototype.validate = function (i) {
        if (this.questions[this.counter].ans == '') {
            this.errMessage = "Please fill the fields";
        }
        else {
            if (i == 0) {
                if (!this.reg.test(this.questions[0].ans.toLowerCase())) {
                    this.errMessage = "Enter valid email!";
                }
                else {
                    this.errMessage = "";
                    this.addCounter();
                }
            }
            else if (i == 4) {
                if (!(/^\d+$/.test(this.questions[4].ans))) {
                    this.errMessage = "Enter valid phone number!";
                }
                else {
                    this.errMessage = "";
                    this.addCounter();
                }
            }
            else if (i == 7) {
                var strongRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
                if (!(strongRegex.test(this.questions[7].ans))) {
                    this.errMessage = "Invalid Password";
                }
                else {
                    this.errMessage = "";
                    this.addCounter();
                }
            }
            else {
                this.errMessage = '';
                this.addCounter();
            }
        }
    };
    CompanySignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-signup',
            template: __webpack_require__("../../../../../src/app/components/company-signup/company-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-signup/company-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]])
    ], CompanySignupComponent);
    return CompanySignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-status-graph/company-status-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-status-graph/company-status-graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/company-status-graph/company-status-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyStatusGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyStatusGraphComponent = (function () {
    function CompanyStatusGraphComponent() {
        this.containerId = '';
    }
    CompanyStatusGraphComponent.prototype.ngOnInit = function () {
        //console.log(this.containerId);
        var pieData = [
            { name: 'New - Yet to Start', value: 3, color: '#2778a7' },
            { name: 'In Progress', value: 4, color: '#99b745' },
            { name: 'Completed', value: 50, color: '#17a88f' },
            { name: 'On Hold', value: 50, color: '#f2ac37' },
            { name: 'Cancelled', value: 3, color: '#b74549' },
            { name: 'Un Planned', value: 1, color: '#4d5d6e' },
        ];
        this.bakeDonut(pieData);
    };
    CompanyStatusGraphComponent.prototype.bakeDonut = function (d) {
        var containerId = this.containerId;
        var activeSegment;
        var data = d.sort(function (a, b) { return b['value'] - a['value']; }), viewWidth = 230, viewHeight = 230, svgWidth = viewHeight, svgHeight = viewHeight, thickness = 40, colorArray = data.map(function (k) { return k.color; }), el = d3.select('#' + containerId), radius = Math.min(svgWidth, svgHeight) / 2, color = d3.scaleOrdinal()
            .range(colorArray);
        var max = d3.max(data, function (maxData) { return maxData.value; });
        var svg = el.append('svg')
            .attr('viewBox', "0 0 " + (viewWidth + thickness) + " " + (viewHeight + thickness))
            .attr('class', 'pie')
            .attr('width', viewWidth)
            .attr('height', svgHeight);
        var g = svg.append('g')
            .attr('transform', "translate( " + ((svgWidth / 2) + (thickness / 2)) + ", " + ((svgHeight / 2) + (thickness / 2)) + ")");
        var arc = d3.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius);
        var arcHover = d3.arc()
            .innerRadius(radius - (thickness + 5))
            .outerRadius(radius + 8);
        var pie = d3.pie()
            .value(function (pieData) { return pieData.value; })
            .sort(null);
        var maxAssigned = false;
        var maxArcAssigned = false;
        var path = g.selectAll('path')
            .attr('class', 'data-path')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'data-group')
            .each(function (pathData, i) {
            var group = d3.select(this);
            group.append('text')
                .text("" + pathData.data.value)
                .attr('class', 'data-text data-text__value')
                .attr('text-anchor', 'middle')
                .attr('dy', '0em')
                .style("font-size", "25px");
            group.append('text')
                .text("" + pathData.data.name)
                .attr('class', 'data-text data-text__name')
                .attr('text-anchor', 'middle')
                .attr('dy', '1.5em')
                .style("font-size", "15px");
            // Set default active segment
            if (pathData.value === max && !maxAssigned) {
                var textVal = d3.select(this).select('.data-text__value')
                    .classed('data-text--show', true);
                var textName = d3.select(this).select('.data-text__name')
                    .classed('data-text--show', true);
                maxAssigned = true;
            }
        })
            .append('path')
            .attr('d', arc)
            .attr('fill', function (fillData, i) { return color(fillData.data.name); })
            .attr('class', 'data-path')
            .on('mouseover', function () {
            var _thisPath = this, parentNode = _thisPath.parentNode;
            if (_thisPath !== activeSegment) {
                activeSegment = _thisPath;
                //  alert('#' + containerId + ' .data-text');
                var dataTexts = d3.selectAll('#' + containerId + ' .data-text')
                    .classed('data-text--show', false);
                var paths = d3.selectAll('#' + containerId + ' .data-path')
                    .transition()
                    .duration(250)
                    .attr('d', arc);
                d3.select(_thisPath)
                    .transition()
                    .duration(250)
                    .attr('d', arcHover);
                var thisDataValue = d3.select(parentNode).select('.data-text__value')
                    .classed('data-text--show', true);
                var thisDataText = d3.select(parentNode).select('.data-text__name')
                    .classed('data-text--show', true);
            }
        })
            .each(function (v, i) {
            if (v.value === max && !maxArcAssigned) {
                var maxArc = d3.select(this)
                    .attr('d', arcHover);
                activeSegment = this;
                maxArcAssigned = true;
            }
            this._current = i;
        });
        // const legendRectSize = 15;
        // const legendSpacing = 10;
        //   const legend = svg.selectAll('.legend')
        //   .data(color.domain())
        //   .enter()
        //   .append('g')
        //   .attr('class', 'legend')
        //   .attr('transform', function(legendData, i) {
        //     const itemHeight =    legendRectSize + legendSpacing;
        //     const offset =        legendRectSize * color.domain().length;
        //     const horz =          svgWidth + 80;
        //     const vert =          (i * itemHeight) + legendRectSize + (svgHeight - offset) / 2;
        //     return `translate(${horz}, ${vert})`;
        //   });
        //   legend.append('circle')
        //     .attr('r', legendRectSize / 2)
        //     .style('fill', color);
        //   legend.append('text')
        //     .attr('x', legendRectSize + legendSpacing)
        //     .attr('y', legendRectSize - legendSpacing)
        //     .attr('class', 'legend-text')
        //     .text( (legendData) => legendData )
    };
    CompanyStatusGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-status-graph',
            template: __webpack_require__("../../../../../src/app/components/company-status-graph/company-status-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-status-graph/company-status-graph.component.css")],
            inputs: ['containerId']
        }),
        __metadata("design:paramtypes", [])
    ], CompanyStatusGraphComponent);
    return CompanyStatusGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  body {\r\n    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  .bg-g{background:#17a88f;color:#fff; padding: 10px;margin-bottom:10px;}\r\n  .bg-hash{background:#E9E9E9;padding: 10px;margin-bottom:10px;}\r\n  .bg-hash select{background:none;border:none;width:100%;}\r\n  .total{font-weight:700;padding-top: 20px; line-height: 36px;}\r\n  .widget{margin-top:9%;}\r\n  .tasklabel{       background: #efefef;\r\n    padding: 25px 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin: 10px 0;\r\n    border: 1px solid #ccc;\r\n    font-weight: bold;\r\n    font-size : 12px;\r\n  }\r\n  .pie {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-filter: drop-shadow(0 2px 0px #333);\r\n            filter: drop-shadow(0 2px 0px #333);\r\n  }\r\n  \r\n  .data-path:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .data-text {\r\n    transition: transform .2s ease-in-out;\r\n    fill: #fff;\r\n  }\r\n  .data-text__value {\r\n    font-size: 7rem;\r\n    transform: translateY(-0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text__name {\r\n    font-size: 2rem;\r\n    transform: translateY(0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text--show {\r\n    transform: translateY(0);\r\n    animation: fadeGraphTextIn 0.5s forwards;\r\n  }\r\n  .data-text:hover {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\nh1{text-align:center;}\r\n.sales{margin-bottom: 25px;}\r\n  .legend-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  @keyframes fadeGraphTextIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .sales{    margin-bottom: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h1>Task Vs Status</h1>\n<div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n      <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"col-md-6 bg-g\">*Select Project</div>\n      <div class=\"col-md-6 bg-hash\">\n        <select>\n          <option *ngFor=\"let prj of projects\" value=\"{{prj.id}}\">{{prj.project_name}}</option>\n        </select>\n      </div> \n      <br>\n      <br>\n      <div class=\"col-md-6 bg-g\">*Select Person</div>\n      <div class=\"col-md-6 bg-hash\">\n        <select>\n            <option *ngFor=\"let usr of users\" value=\"{{usr.id}}\">{{usr.f_name}} {{usr.l_name}}</option>\n        </select>\n      </div> \n      <div class=\"clearfix\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          TASKS ASSIGNED\n          <br>\n          2\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n            TASKS COMPLETED\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          DUE THIS WEEK\n          <br>\n          10\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n           DUE NEXT WEEK\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          DUE THIS MONTH\n          <br>\n          10\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n            DUE THIS YEAR\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <div class=\"widget\">\n           \n            <div id=\"chart\" class=\"chart-container\">\n        \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTaskVsStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyTaskVsStatusComponent = (function () {
    function CompanyTaskVsStatusComponent(companyService) {
        this.companyService = companyService;
        this.projects = [];
        this.users = [];
    }
    CompanyTaskVsStatusComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
        var pieData = [
            { name: 'New - Yet to Start', value: 3, color: '#2778a7' },
            { name: 'In Progress', value: 4, color: '#99b745' },
            { name: 'Completed', value: 50, color: '#17a88f' },
            { name: 'On Hold', value: 50, color: '#f2ac37' },
            { name: 'Cancelled', value: 3, color: '#b74549' },
            { name: 'Un Planned', value: 1, color: '#4d5d6e' },
        ];
        this.bakeDonut(pieData);
    };
    CompanyTaskVsStatusComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.companyService.getAllProject().subscribe(function (data) {
            console.log(data);
            _this.projects = data;
            if (_this.projects.length == 0) {
                _this.users = [];
            }
            else {
                _this.getUsers(_this.projects[0].id);
            }
        });
    };
    CompanyTaskVsStatusComponent.prototype.getUsers = function (projId) {
        var _this = this;
        this.companyService.getUsers(projId).subscribe(function (data) {
            _this.users = data;
        });
    };
    CompanyTaskVsStatusComponent.prototype.bakeDonut = function (d) {
        var activeSegment;
        var data = d.sort(function (a, b) { return b['value'] - a['value']; }), viewWidth = 500, viewHeight = 300, svgWidth = viewHeight, svgHeight = viewHeight, thickness = 40, colorArray = data.map(function (k) { return k.color; }), el = d3.select('#chart'), radius = Math.min(svgWidth, svgHeight) / 2, color = d3.scaleOrdinal()
            .range(colorArray);
        var max = d3.max(data, function (maxData) { return maxData.value; });
        var svg = el.append('svg')
            .attr('viewBox', "0 0 " + (viewWidth + thickness) + " " + (viewHeight + thickness))
            .attr('class', 'pie')
            .attr('width', viewWidth)
            .attr('height', svgHeight);
        var g = svg.append('g')
            .attr('transform', "translate( " + ((svgWidth / 2) + (thickness / 2)) + ", " + ((svgHeight / 2) + (thickness / 2)) + ")");
        var arc = d3.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius);
        var arcHover = d3.arc()
            .innerRadius(radius - (thickness + 5))
            .outerRadius(radius + 8);
        var pie = d3.pie()
            .value(function (pieData) { return pieData.value; })
            .sort(null);
        var maxAssigned = false;
        var maxArcAssigned = false;
        var path = g.selectAll('path')
            .attr('class', 'data-path')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'data-group')
            .each(function (pathData, i) {
            var group = d3.select(this);
            group.append('text')
                .text("" + pathData.data.value)
                .attr('class', 'data-text data-text__value')
                .attr('text-anchor', 'middle')
                .attr('dy', '0em');
            group.append('text')
                .text("" + pathData.data.name)
                .attr('class', 'data-text data-text__name')
                .attr('text-anchor', 'middle')
                .attr('dy', '1.5em');
            // Set default active segment
            if (pathData.value === max && !maxAssigned) {
                var textVal = d3.select(this).select('.data-text__value')
                    .classed('data-text--show', true);
                var textName = d3.select(this).select('.data-text__name')
                    .classed('data-text--show', true);
                maxAssigned = true;
            }
        })
            .append('path')
            .attr('d', arc)
            .attr('fill', function (fillData, i) { return color(fillData.data.name); })
            .attr('class', 'data-path')
            .on('mouseover', function () {
            var _thisPath = this, parentNode = _thisPath.parentNode;
            if (_thisPath !== activeSegment) {
                activeSegment = _thisPath;
                var dataTexts = d3.selectAll('#chart .data-text')
                    .classed('data-text--show', false);
                var paths = d3.selectAll('#chart .data-path')
                    .transition()
                    .duration(250)
                    .attr('d', arc);
                d3.select(_thisPath)
                    .transition()
                    .duration(250)
                    .attr('d', arcHover);
                var thisDataValue = d3.select(parentNode).select('.data-text__value')
                    .classed('data-text--show', true);
                var thisDataText = d3.select(parentNode).select('.data-text__name')
                    .classed('data-text--show', true);
            }
        })
            .each(function (v, i) {
            if (v.value === max && !maxArcAssigned) {
                var maxArc = d3.select(this)
                    .attr('d', arcHover);
                activeSegment = this;
                maxArcAssigned = true;
            }
            this._current = i;
        });
        var legendRectSize = 15;
        var legendSpacing = 10;
        var legend = svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function (legendData, i) {
            var itemHeight = legendRectSize + legendSpacing;
            var offset = legendRectSize * color.domain().length;
            var horz = svgWidth + 80;
            var vert = (i * itemHeight) + legendRectSize + (svgHeight - offset) / 2;
            return "translate(" + horz + ", " + vert + ")";
        });
        legend.append('circle')
            .attr('r', legendRectSize / 2)
            .style('fill', color);
        legend.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .attr('class', 'legend-text')
            .text(function (legendData) { return legendData; });
    };
    CompanyTaskVsStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-task-vs-status',
            template: __webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]])
    ], CompanyTaskVsStatusComponent);
    return CompanyTaskVsStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <header>\r\n      \r\n      <div class=\"col-md-5 pull-right\">\r\n          <div class=\"header-rightside\">\r\n              <ul class=\"list-inline header-top pull-right\">\r\n                  <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\r\n                  \r\n                  <li>\r\n                      <a href=\"#\" class=\"icon-info\">\r\n                          <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                          <span class=\"label label-primary\">3</span>\r\n                      </a>\r\n                  </li>\r\n                  <li class=\"dropdown\">\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                          <b class=\"caret\"></b></a>\r\n                      <ul class=\"dropdown-menu\">\r\n                          <li>\r\n                              <div class=\"navbar-content\">\r\n                                  <span>JS Krishna</span>\r\n                                  <p class=\"text-muted small\">\r\n                                      me@jskrishna.com\r\n                                  </p>\r\n                                  <div class=\"divider\">\r\n                                  </div>\r\n                                  <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                              </div>\r\n                          </li>\r\n                      </ul>\r\n                  </li>\r\n                  <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </header>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyTopbarComponent = (function () {
    function CompanyTopbarComponent() {
    }
    CompanyTopbarComponent.prototype.ngOnInit = function () {
    };
    CompanyTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-topbar',
            template: __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyTopbarComponent);
    return CompanyTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, select{outline:none;}\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{    width: 56%;\r\n    left: 22%;\r\n    bottom: 10%;\r\n    z-index: 100;\r\n    min-height: 20px;\r\n    color: #fff;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    line-height: 22px;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n\r\n\r\n\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}\r\n\r\n.loder{\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\nlogn{\r\n  position: relative\r\n}\r\n/* .btn-nxt{\r\n  position: absolute;\r\n  top: 68px;\r\n  right: 0;\r\n  background: transparent;\r\n  border: none;\r\n} */\r\n\r\n.btn-nxt{\r\n  position: absolute;\r\n  top: 185px;\r\n  right: 0;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.nxt-cntainer{\r\n  position: relative;\r\n}\r\nselect,input{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  padding-right: 44px;\r\n}\r\nselect{\r\n  cursor: pointer;\r\n}\r\n.inp-hd{\r\n  font-size: 25px;\r\n}\r\n.errMsg{\r\n  font-size: 13px;color: #ff336a;\r\n}\r\n.progress-bar{\r\n  background-color: #28d685 !important;\r\n}\r\n.inp-top{\r\n  top: 89px;\r\n}\r\n.submit-form{\r\n  position: absolute;\r\n    top: 138px;\r\n    right: 0;\r\n    background: transparent;\r\n    border: none;\r\n  transition: color 1s ease;\r\n    \r\n}\r\n.trans-clr{\r\n  color: #20ad6b;\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"logn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"logn-img\">\r\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" class=\"img-responsive\" />\r\n\t\t\t\t\t<div class=\"paragraph\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi\r\n\t\t\t\t\t\t\ttristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 bgz\">\r\n\t\t\t<h3>Registration</h3>\r\n\t\t\t<section>\r\n\t\t\t\t<form id=\"theForm\" class=\"simform\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"simform-inner\">\r\n\r\n\t\t\t\t\t\t<div *ngFor=\"let item of questions;let i=index;\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"counter == i\">\r\n\t\t\t\t\t\t\t\t<label>{{item.question}}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"item.type == 'text' else password\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\r\n\t\t\t\t\t\t\t\t<ng-template #password>\r\n\t\t\t\t\t\t\t\t\t<input type=\"password\" *ngIf=\"item.type == 'password' else multiple\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\r\n\t\t\t\t\t\t\t\t\t<ng-template #multiple>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"inp\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"i == 2 else size\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let c of industry\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{c.id}}\">{{c.industry}}</option>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #size>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let s of cmpSize\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{s.id}}\">{{s.size_range}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option>Select Company Size</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-10</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-20</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t<!-- <button *ngIf=\"counter != 5\" class=\"\" type=\"submit\" (click)=\"validate()\">next</button> -->\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"counter != 5\" class=\"btn-nxt\" type=\"submit\" (click)=\"validate(i)\" [ngClass]=\"{'inp-top': counter==6}\"><i class=\"la la-arrow-right\"></i></button>\r\n\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"progressBarWidth\">\r\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">70% Complete</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"\">{{errMessage}}</span>\r\n\r\n\t\t\t\t\t\t<!-- <button *ngIf=\"counter == 5\" class=\"submit-form\" type=\"submit\" (click)=\"register()\">GO</button> -->\r\n\r\n\t\t\t\t\t\t<button *ngIf=\"counter == 5\" class=\"submit-form\" type=\"submit\" (click)=\"register()\"><i class=\"la la-arrow-right\"></i></button>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\r\n\t\t\t\t\t\t\t\t<app-spinner></app-spinner>\r\n\t\t\t\t\t\t\t<!-- <div class=\"\">\r\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\t\t x=\"0px\" y=\"0px\" width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\"\r\n\t\t\t\t\t\t\t\t xml:space=\"preserve\">\r\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t</path>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /simform-inner -->\r\n\t\t\t\t\t<span class=\"final-message\"></span>\r\n\t\t\t\t</form>\r\n\t\t\t\t<!-- /simform -->\r\n\t\t\t</section>\r\n\r\n\r\n\r\n\t\t</div>\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t<!-- Modal -->\r\n\r\n\t<script>\r\n\r\n\t</script>\r\n\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompayAditninfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompayAditninfoComponent = (function () {
    function CompayAditninfoComponent(adminService, snackBar, routes, companyService, route) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.routes = routes;
        this.companyService = companyService;
        this.route = route;
        this.timestamp = new Date().getTime().toString();
        this.spinner = false;
        this.questions = [{
                // 	question:"What's your Email?",
                // 	type:"text",
                // 	ans:""
                // },
                // {
                question: "What's your Company Name?",
                type: "text",
                ans: ""
            },
            {
                question: "Your Company Code?",
                type: "text",
                ans: ""
            },
            {
                question: "Industry?",
                type: "multiple",
                ans: ""
            },
            {
                question: "Your Contact Number ?",
                type: "text",
                ans: ""
            },
            {
                question: "Company Size?",
                type: "multiple",
                ans: ""
            },
            {
                question: "Why are you looking for task managment software?",
                type: "text",
                ans: ""
            }
            // {
            // 	question:"Your Password",
            // 	type:"password",
            // 	ans:""
            // },
            // {
            // 	question:"Confirm Password",
            // 	type:"password",
            // 	ans:""
            // },
        ];
        this.array = [];
        this.errMessage = '';
        this.counter = 0;
        this.progressBarWidth = 0;
        this.newReg = {
            company_name: '',
            company_code: '',
            contact_no: '',
            email: '',
            company_strength: '',
            industry: '',
            password: '',
            why_choosen: '',
            verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),
        };
    }
    CompayAditninfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params.id;
            // console.log("sub");
            _this.companyService.getCompanyDetailsById(_this.p_id).subscribe(function (data) {
                // console.log("data" + data.is_profile_completed);
                if (data.is_profile_completed == true) {
                    _this.routes.navigate(['/company-dashboard']);
                    // console.log("completed");
                }
            });
        });
        this.companyService.getLoggedUSerDetails().subscribe(function (info) {
            // console.log("sdsss" + info);
            // if(info == null || info == ''){
            //   this.routes.navigate(['/clogin']); 
            // }
            // if(info.role == "admin"){
            //   this.routes.navigate(['/admin-dashboard']);
            // }
            // if(info.role == "user"){
            //   if(info.delete_status == true || info.block_status == true){
            // 	this.routes.navigate(['/404']); 
            //   }
            //   this.routes.navigate(['/survey', info.surveyId]); 
            // }
            // if(info.role == "company"){
            //   if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
            // 	this.routes.navigate(['/clogin']); 
            //   }
            //   if(info.cmp_status == "Expired"){
            // 	this.routes.navigate(['/expired']);
            //   }
            //   if(info.is_profile_completed == false){
            // 	this.routes.navigate(['/additnInfo', info.id]);
            //   }
            // }
        });
        // console.log(this.questions);
        this.getIndustries();
        this.getCompanySize();
    };
    CompayAditninfoComponent.prototype.register = function () {
        var _this = this;
        this.questions.push({ question: '', type: '', ans: this.p_id });
        this.companyService.registerCompanyFromadtninfo(this.questions).subscribe(function (resData) {
            _this.spinner = true;
            // console.log(resData)
            _this.industry = resData;
            if (resData.success == true) {
                _this.spinner = false;
                var snackBarRef = _this.snackBar.open('Redirecting into your account.', '', {
                    duration: 2000
                });
                _this.routes.navigate(['/company-dashboard']);
            }
            else {
                _this.spinner = false;
                // this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
                var snackBarRef = _this.snackBar.open('Error', '', {
                    duration: 2000
                });
                _this.routes.navigate(['/404']);
            }
        });
    };
    CompayAditninfoComponent.prototype.getIndustries = function () {
        var _this = this;
        this.companyService.getIndustries().subscribe(function (resData) {
            // console.log(resData)
            _this.industry = resData;
            // console.log(this.industry)
        });
    };
    CompayAditninfoComponent.prototype.getCompanySize = function () {
        var _this = this;
        this.companyService.getCompanySize().subscribe(function (resData) {
            // console.log(resData)
            _this.cmpSize = resData;
        });
    };
    CompayAditninfoComponent.prototype.addCounter = function () {
        this.counter = this.counter + 1;
        this.progressBarWidth = (this.counter / 8) * 100;
        // console.log(this.progressBarWidth);
    };
    CompayAditninfoComponent.prototype.validate = function () {
        if (this.questions[this.counter].ans == '') {
            this.errMessage = "Please fill the fields";
        }
        else {
            this.errMessage = '';
            this.addCounter();
        }
    };
    CompayAditninfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'compay-aditninfo',
            template: __webpack_require__("../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CompayAditninfoComponent);
    return CompayAditninfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailVerificationComponent = (function () {
    function EmailVerificationComponent(route, companyService, snackBar, routes) {
        this.route = route;
        this.companyService = companyService;
        this.snackBar = snackBar;
        this.routes = routes;
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Company verification
        // Params        : verification id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 29-12-2017
        // Last Modified : 29-12-2017, Rinsha
        // Desc          : 
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyService.verifyCompany(params.id).subscribe(function (data) {
                _this.msg = data.msg;
                if (data.success) {
                    // this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
                    _this.companyService.storeUserData(data.token, data.login);
                    var snackBarRef = _this.snackBar.open(_this.msg, '', {
                        duration: 2000
                    });
                    // this.routes.navigate(['/dashboard']); dashboard
                    // setTimeout(() => {  
                    // }, 2000);
                }
                else {
                    // this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
                    var snackBarRef = _this.snackBar.open(_this.msg, '', {
                        duration: 2000
                    });
                    // this.routes.navigate(['/home']); home
                    setTimeout(function () {
                    }, 2000);
                }
            });
        });
        // -----------------------------------End------------------------------------------
    };
    EmailVerificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'email-verification',
            template: __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{width:60%;left:10%;bottom:10%;z-index:100;min-height:20px;color:#fff;text-align:left;font-size:14px;position:absolute;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n/* Card */\r\n.card {\r\n \r\n}\r\n.card:first-child {\r\n\r\n}\r\n.card .title {\r\n      position: relative;\r\n    z-index: 1;\r\n    /* border-left: 5px solid #ec2652; */\r\n    margin: 0 0 35px;\r\n        padding: 20% 0 6% 0;\r\n    color: #f37501;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{background-color:none !important;}\r\n.card .input-container {\r\n        position: relative;\r\n    margin: 0 60px 34px;\r\n    /* overflow: hidden; */\r\n    display: inline-block;\r\n\t\r\n}\r\n.card .input-container input {\r\n  outline: none;\r\n  z-index: 1;\r\n  position: relative;\r\n  background: none;\r\n  width: 100%;\r\n  height: 54px;\r\n  border: 0;\r\n  color: #212121;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n.card .input-container input:focus ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n.card .input-container input:valid ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container label {\r\n  position: absolute;\r\n  top: 0;\r\n      left: 20px;\r\n  color: #757575;\r\n      font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 60px;\r\n  transition: 0.2s ease;\r\n}\r\n.card .fa{     padding-top: 19px;\r\n    font-size: 28px;color:#f37600;}\r\n.card .input-container .bar {\r\n  position: absolute;\r\n      left: -4%;\r\n  bottom: 0;\r\n  background: #757575;\r\n  width: 100%;\r\n  height: 1px;\r\n}\r\n.card .input-container .bar:before, .card .input-container .bar:after {\r\n  content: '';\r\n  position: absolute;\r\n      background: #f47453;\r\n  width: 0;\r\n  height: 2px;\r\n  transition: .2s ease;\r\n}\r\n.card .input-container .bar:before {\r\n  left: 50%;\r\n}\r\n.card .input-container .bar:after {\r\n  right: 50%;\r\n}\r\n.card .button-container {\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n.card .button-container button {\r\n  outline: 0;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: 0;\r\n  width: 240px;\r\n  border: 2px solid #e3e3e3;\r\n  padding: 20px 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button span {\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #ddd;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: block;\r\n  background: #ec2652;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  margin: -15px 0 0 -15px;\r\n  opacity: 0;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\r\n  border-color: #ec2652;\r\n}\r\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ec2652;\r\n}\r\n.card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ffffff;\r\n}\r\n.card .button-container button:active:before, .card .button-container button:focus:before {\r\n  opacity: 1;\r\n  transform: scale(10);\r\n}\r\n.card .footer {\r\n  margin: 6px 0 9%;\r\n  color: #d3d3d3;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n.card .footer a {\r\n      color: inherit;\r\n    text-decoration: none;\r\n    transition: .3s ease;\r\n    font-size: 15px;\r\n    color: #111;\r\n}\r\n.card .footer a:hover {\r\n  color: #bababa;\r\n}\r\n.card.alt {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  z-index: 10;\r\n  width: 100px;\r\n  height: 100px;\r\n  background: none;\r\n  border-radius: 100%;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  transition: .3s ease;\r\n  /* Toggle */\r\n  /* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n  position: relative;\r\n  background: #ec2652;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  color: #ffffff;\r\n  font-size: 42px;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n  content: '\\F067';\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  transform: translate(0, 0);\r\n}\r\n.card.alt .title,\r\n.card.alt .input-container,\r\n.card.alt .button-container {\r\n  left: 100px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.card.alt .title {\r\n  position: relative;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n.card.alt .title .close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 60px;\r\n  display: inline;\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n  content: '\\D7';\r\n}\r\n.card.alt .input-container input {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\r\n  background: #ffffff;\r\n}\r\n.card.alt .input-container input:valid ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container label {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .input-container .bar {\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .button-container button {\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span {\r\n  color: #ec2652;\r\n}\r\n.card.alt .button-container button:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\r\n  display: none;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n<head>\r\n<<<<<<< HEAD\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n=======\r\n\t<!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n>>>>>>> fd995b907a2007d36aced134c76503bceed4ec8e\r\n\t<title>Taskit</title>\r\n\t<link rel=\"stylesheet\" href=\"css/bootstrap.css\">\r\n\t<link href=\"css/login.css\" rel=\"stylesheet\">\r\n\t<link href=\"css/responsive.css\" rel=\"stylesheet\">\r\n\t<!------ Include the above in your HEAD tag ---------->\r\n<<<<<<< HEAD\r\n\r\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">\r\n=======\r\n<!-- \r\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">  -->\r\n>>>>>>> fd995b907a2007d36aced134c76503bceed4ec8e\r\n\r\n</head>\r\n\r\n<body class=\"logn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"logn-img\">\r\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" style=\"width:100%;\" />\r\n\t\t\t\t\t<!-- <img src=\"img/login.jpg\"/> -->\r\n\t\t\t\t\t<!-- <div class=\"paragraph\">\r\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<!-- Mixins-->\r\n\t\t\t\t<!-- Pen Title-->\r\n\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"card\"></div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\r\n\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"reset(newPassword)\" novalidate>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" name=\"email\" [(ngModel)]=\"newPassword.email\" required/>\r\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Email</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"input-container\" >\r\n\t\t\t\t\t\t\t\t\t<re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LdWoEsUAAAAALf4IQwncQqV0HZPduSL0Ab4QC11\" ></re-captcha>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\r\n              <div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Reset password</button></div>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n            <br>\r\n            <div class=\"footer\"><a [routerLink]=\"['/company-login']\">Return to login</a></div>\r\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\r\n\t\t\t\t\t\t\t\t<app-spinner></app-spinner>\r\n\t\t\t\t\t\t\t<!-- <div class=\"\">\r\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t\t\t\t\t\t\t\t width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\" xml:space=\"preserve\">\r\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\r\n\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t</path>\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Modal -->\r\n\r\n<<<<<<< HEAD\r\n\t<script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\r\n\t<script src=\"js/bootstrap.min.js\"></script>\r\n=======\r\n\t<!-- <script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\r\n\t<script src=\"js/bootstrap.min.js\"></script> -->\r\n>>>>>>> fd995b907a2007d36aced134c76503bceed4ec8e\r\n\r\n\r\n</body>\r\n\r\n\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(companyService, snackBar, routes) {
        this.companyService = companyService;
        this.snackBar = snackBar;
        this.routes = routes;
        this.newPassword = {
            email: '',
            captcha: ''
        };
        this.spinner = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.handleCorrectCaptcha = function (event) {
        this.token = this.captcha.getResponse();
        // console.log(token);
    };
    ForgotPasswordComponent.prototype.reset = function (newPassword) {
        var _this = this;
        this.spinner = true;
        newPassword.captcha = this.token;
        this.companyService.forgotPassword(this.newPassword).subscribe(function (data) {
            console.log("data");
            _this.spinner = false;
            if (data.success == true) {
                var snackBarRef = _this.snackBar.open('Reset password successfully.Please check your email', '', {
                    duration: 2000
                });
                _this.routes.navigate(['/company-login']);
                if (_this.captcha) {
                    _this.captcha.reset();
                }
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                if (_this.captcha) {
                    _this.captcha.reset();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__["ReCaptchaComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_recaptcha__["ReCaptchaComponent"])
    ], ForgotPasswordComponent.prototype, "captcha", void 0);
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'forgot-password',
            template: __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.home {\r\n    background: #f6f7fa;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n        <div class=\"container-fluid display-table\">\r\n            <div class=\"row display-table-row\">\r\n          \r\n                <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n                     <!-- sidebar-->\r\n                   \r\n                     <admin-sidebar></admin-sidebar> \r\n                     <!-- end sidebar-->\r\n                </div>\r\n                \r\n                <div class=\"col-md-12 col-xs-12\">\r\n                    <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n                    <!-- topbar-->\r\n                    <admin-topbar></admin-topbar> \r\n                    \r\n                        <!-- end topbar-->\r\n                    \r\n                    \r\n                    <div class=\"user-dashboard\">\r\n                        <h1>Hello, JS</h1>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5 col-sm-5 col-xs-12 gutter\">\r\n    \r\n                                <div class=\"sales\">\r\n                                    <h2>Your Sale</h2>\r\n    \r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                            <span>Period:</span> Last Year\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu\">\r\n                                            <a href=\"#\">2012</a>\r\n                                            <a href=\"#\">2014</a>\r\n                                            <a href=\"#\">2015</a>\r\n                                            <a href=\"#\">2016</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\r\n    \r\n                                <div class=\"sales report\">\r\n                                    <h2>Report</h2>\r\n                                    <div class=\"btn-group\">\r\n                                        <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                            <span>Period:</span> Last Year\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu\">\r\n                                            <a href=\"#\">2012</a>\r\n                                            <a href=\"#\">2014</a>\r\n                                            <a href=\"#\">2015</a>\r\n                                            <a href=\"#\">2016</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                    <!-- footer-->\r\n                    <admin-footer></admin-footer>\r\n           <!-- end footer-->\r\n            </div>\r\n             </div>\r\n            <!-- Modal -->\r\n         </body>"

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferenceComponentComponent = (function () {
    function ReferenceComponentComponent() {
    }
    ReferenceComponentComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reference-component',
            template: __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponentComponent);
    return ReferenceComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader{\r\n    margin: 0 0 2em;\r\n    height: 100px;\r\n    width: 20%;\r\n    text-align: center;\r\n    padding: 1em;\r\n    margin: 0 auto 1em;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n  }\r\n  \r\n  /*\r\n    Set the color of the icon\r\n  */\r\n  svg path,\r\n  svg rect{\r\n    fill: #FF6700;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- 8 -->\r\n<div class=\"loader loader--style8\" title=\"7\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n       width=\"24px\" height=\"30px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n      <rect x=\"0\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\" opacity=\"0.2\">\r\n        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      </rect>\r\n      <rect x=\"8\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\"  opacity=\"0.2\">\r\n        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      </rect>\r\n      <rect x=\"16\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\"  opacity=\"0.2\">\r\n        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\r\n      </rect>\r\n    </svg>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
        this.socketURL = "http://localhost:3000";
        this.siteUrl = "http://localhost:3000";
    }
    return Config;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/admin/';
    }
    AdminService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCountsforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 02-03-2018
    // Last Modified : 02-03-2018, Jooshifa 
    // Desc          : for getting count of companies,projects,users
    AdminService.prototype.getCountsforAdminDashboard = function () {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/get_counts_for_dashboard", {}, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getPieDataforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data
    AdminService.prototype.getPieDataforAdminDashboard = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/super_admin_pie_graph", { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getBarDataforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data
    AdminService.prototype.getBarDataforAdminDashboard = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/super_admin_bar_graph", { headers: h })
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/services/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyService = (function () {
    function CompanyService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/company/';
    }
    CompanyService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    CompanyService.prototype.setHeaderWithAuthorization = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    CompanyService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : getIndustries
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get Ind=ustries list from DB
    CompanyService.prototype.getIndustries = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get_industries", { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCompanySize
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get Company size list from DB
    CompanyService.prototype.getCompanySize = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get_cmp_size", { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 05-03-2018
    // Last Modified : 05-03-2018, jooshifa
    // Desc          : 
    CompanyService.prototype.authenticateCompany = function (company) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "authenticate", company, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Store User Data
    // Params        : Token, id and role
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 05-03-2018
    // Last Modified : 05-03-2018, jooshifa
    // Desc          : To locally store  data
    CompanyService.prototype.storeUserData = function (token, company) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('company', JSON.stringify(company));
        this.authToken = token;
        this.company = company;
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get logged user details
    // Params        : 
    // Returns       : get details of logged in entity
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getLoggedUSerDetails = function () {
        var h = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Company verification
    // Params        : verification id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.verifyCompany = function (verif_id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "companyVerification/" + verif_id, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getBarDataforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data
    CompanyService.prototype.registerCompany = function (details) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/register_company", details, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : registerCompanyFromadtninfo
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, 
    // Desc          : 
    CompanyService.prototype.registerCompanyFromadtninfo = function (details) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/register_company2", details, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : forgotPassword
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, 
    // Desc          : 
    CompanyService.prototype.forgotPassword = function (newPassword) {
        // console.log("here..."  +  newPassword.email)
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/forgotPassword", newPassword, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get company details by id
    // Params        : id
    // Returns       : company details
    // Author        : Jooshifa
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getCompanyDetailsById = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getCompanyDetails/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Generate token
    // Params        : company id
    // Returns       : jwt token
    // Author        : Jooshifa
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.generateToken = function (id) {
        // console.log("id" + id);
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "generateToken/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getProjectById 
    // Params        :  id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc :get project details of a purticular id
    CompanyService.prototype.getProjectById = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getProjects/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getDeveloperUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : to get developer users
    CompanyService.prototype.getDeveloperUsers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-developer-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getDesignerrUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getDesignerrUsers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-designer-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getQcUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getQcUsers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-qc-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getTasksModules
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getTasksModules = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-modules-tasks/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getAllUsers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-all-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getComplexity
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Jooshifa
    // Desc          
    CompanyService.prototype.getComplexity = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-complexity-percentage', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getDatetime
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Jooshifa
    // Desc          
    CompanyService.prototype.getDatetime = function (newTasks) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/get-date-time", newTasks, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getAllProject
    // Params        : 
    // Returns       : all projects
    // Author        : Yasir Poongadan  
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Yasir Poongadan
    // Desc          : 
    CompanyService.prototype.getAllProject = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getAllProjects", { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getTeams
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, 
    // Desc          : get team names and strength from db
    CompanyService.prototype.getTeams = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getTeams", { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getTeamMembers
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, 
    // Desc          : get team members based on id passed from db
    CompanyService.prototype.getTeamMembers = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getMembers/" + id, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : get All Users by project id
    // Params        : project id , '' for all users
    // Returns       : All Users
    // Author        : Yasir Poongadan  
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Yasir Poongadan
    // Desc          : 
    CompanyService.prototype.getUsers = function (projId) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getUsersByProject/" + projId, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // Function      : getTeamMembers
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, 
    // Desc          : get team members based on id passed from db
    CompanyService.prototype.assignTeam = function (members, head, teamId) {
        var h = this.setHeader();
        var data = [];
        data.push(members);
        data.push(head);
        data.push(teamId);
        return this.http.post(this.serviceUrl + "assignMemebers/", data, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getUserGroups
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, 
    // Desc          : get user groups  from db
    CompanyService.prototype.getUserGroups = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getUserGroups", { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getAccessRights
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, 
    // Desc          : get Access Rights  from db
    CompanyService.prototype.getAccessRights = function (roleId) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getAccessRights/" + roleId, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------------End--------------------------------------------
    // Function      : assignRights
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, 
    // Desc          : assign tights to usergroup
    CompanyService.prototype.assignRights = function (rights, id) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "assignRights/:id", rights, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAvailablity
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getAvailablity = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'get-availablity/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getPublicHolidays
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getPublicHolidays = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get-public-holidays", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getWorkingTime
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getWorkingTime = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get-working-time", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getOffDays
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getOffDays = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get-off-days-assoc", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : breakTime
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Jooshifa
    // Desc          : 
    CompanyService.prototype.getbreakTime = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get-break-time", { headers: h })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "../../../../../src/app/services/super-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperAdminService = (function () {
    function SuperAdminService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/admin/';
    }
    SuperAdminService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCountsforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 02-03-2018
    // Last Modified : 02-03-2018, Jooshifa 
    // Desc          : for getting count of companies,projects,users
    SuperAdminService.prototype.getCountsforAdminDashboard = function () {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/get_counts_for_dashboard", {}, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getPieDataforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data
    SuperAdminService.prototype.getPieDataforAdminDashboard = function () {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/get_counts_for_dashboard", {}, { headers: h })
            .map(function (res) { return res.json(); });
    };
    SuperAdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */]])
    ], SuperAdminService);
    return SuperAdminService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map