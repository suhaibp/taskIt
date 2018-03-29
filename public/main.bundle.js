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

module.exports = "\n <router-outlet></router-outlet>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__ = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_topbar_admin_topbar_component__ = __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_company_admin_company_component__ = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_plan_admin_plan_component__ = __webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_company_upgrade_company_upgrade_component__ = __webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_company_planlist_company_planlist_component__ = __webpack_require__("../../../../../src/app/components/company-planlist/company-planlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_dashboard_pie_admin_dashboard_pie_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_company_add_project_company_add_project_component__ = __webpack_require__("../../../../../src/app/components/company-add-project/company-add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_company_project_company_project_component__ = __webpack_require__("../../../../../src/app/components/company-project/company-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_company_assign_project_company_assign_project_component__ = __webpack_require__("../../../../../src/app/components/company-assign-project/company-assign-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_company_edit_project_company_edit_project_component__ = __webpack_require__("../../../../../src/app/components/company-edit-project/company-edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_company_login_company_login_component__ = __webpack_require__("../../../../../src/app/components/company-login/company-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_company_topbar_company_topbar_component__ = __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_user_topbar_user_topbar_component__ = __webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_project_estimation_user_project_estimation_component__ = __webpack_require__("../../../../../src/app/components/user-project-estimation/user-project-estimation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_company_approve_estimation_company_approve_estimation_component__ = __webpack_require__("../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_company_approve_project_company_approve_project_component__ = __webpack_require__("../../../../../src/app/components/company-approve-project/company-approve-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_edit_profile_user_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/user-edit-profile/user-edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_test_user_test_user_component__ = __webpack_require__("../../../../../src/app/components/test-user/test-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-login', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
    { path: 'admin-topbar', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */] },
    { path: 'admin-footer', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_14__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'admin-plan', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_plan_admin_plan_component__["a" /* AdminPlanComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'planlist', component: __WEBPACK_IMPORTED_MODULE_23__components_company_planlist_company_planlist_component__["a" /* CompanyPlanlistComponent */] },
    { path: 'upgrade/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_company_upgrade_company_upgrade_component__["a" /* CompanyUpgradeComponent */] },
    { path: 'add-project', component: __WEBPACK_IMPORTED_MODULE_25__components_company_add_project_company_add_project_component__["a" /* CompanyAddProjectComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_26__components_company_project_company_project_component__["a" /* CompanyProjectComponent */] },
    { path: 'assign-project/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_company_assign_project_company_assign_project_component__["a" /* CompanyAssignProjectComponent */] },
    { path: 'company-login', component: __WEBPACK_IMPORTED_MODULE_29__components_company_login_company_login_component__["a" /* CompanyLoginComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_30__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'edit-project/:id', component: __WEBPACK_IMPORTED_MODULE_28__components_company_edit_project_company_edit_project_component__["a" /* CompanyEditProjectComponent */] },
    { path: 'company-topbar', component: __WEBPACK_IMPORTED_MODULE_31__components_company_topbar_company_topbar_component__["a" /* CompanyTopbarComponent */] },
    { path: 'user-topbar', component: __WEBPACK_IMPORTED_MODULE_32__components_user_topbar_user_topbar_component__["a" /* UserTopbarComponent */] },
    { path: 'estimate-project/:id1/:id2', component: __WEBPACK_IMPORTED_MODULE_33__components_user_project_estimation_user_project_estimation_component__["a" /* UserProjectEstimationComponent */] },
    { path: 'approve-estimation/:id', component: __WEBPACK_IMPORTED_MODULE_34__components_company_approve_estimation_company_approve_estimation_component__["a" /* CompanyApproveEstimationComponent */] },
    { path: 'approve-project/:id', component: __WEBPACK_IMPORTED_MODULE_35__components_company_approve_project_company_approve_project_component__["a" /* CompanyApproveProjectComponent */] },
    { path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_36__components_user_edit_profile_user_edit_profile_component__["a" /* UserEditProfileComponent */] },
    { path: 'test-user', component: __WEBPACK_IMPORTED_MODULE_37__components_test_user_test_user_component__["a" /* TestUserComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_42__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_material__["I" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_plan_admin_plan_component__["a" /* AdminPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_company_planlist_company_planlist_component__["a" /* CompanyPlanlistComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_company_upgrade_company_upgrade_component__["a" /* CompanyUpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_dashboard_pie_admin_dashboard_pie_component__["a" /* AdminDashboardPieComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_company_add_project_company_add_project_component__["a" /* CompanyAddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_company_project_company_project_component__["a" /* CompanyProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_company_login_company_login_component__["a" /* CompanyLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_company_assign_project_company_assign_project_component__["a" /* CompanyAssignProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_company_edit_project_company_edit_project_component__["a" /* CompanyEditProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_company_topbar_company_topbar_component__["a" /* CompanyTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_user_topbar_user_topbar_component__["a" /* UserTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_user_project_estimation_user_project_estimation_component__["a" /* UserProjectEstimationComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_company_approve_estimation_company_approve_estimation_component__["a" /* CompanyApproveEstimationComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_company_approve_project_company_approve_project_component__["a" /* CompanyApproveProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_user_edit_profile_user_edit_profile_component__["a" /* UserEditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_test_user_test_user_component__["a" /* TestUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                DemoMaterialModule,
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_38__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_39__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_40__services_user_service__["a" /* UserService */]],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-company',
            template: __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminCompanyComponent);
    return AdminCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  .pie-gr {\r\n    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  \r\n  .pie {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-filter: drop-shadow(0 2px 0px #333);\r\n            filter: drop-shadow(0 2px 0px #333);\r\n  }\r\n  \r\n  .data-path:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .data-text {\r\n    transition: transform .2s ease-in-out;\r\n    fill: #fff;\r\n  }\r\n  .data-text__value {\r\n    font-size: 7rem;\r\n    transform: translateY(-0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text__name {\r\n    font-size: 2rem;\r\n    transform: translateY(0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text--show {\r\n    transform: translateY(0);\r\n    animation: fadeGraphTextIn 0.5s forwards;\r\n  }\r\n  .data-text:hover {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .legend-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  @keyframes fadeGraphTextIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  ", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_super_admin_service__ = __webpack_require__("../../../../../src/app/services/super-admin.service.ts");
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
        this.drawPie();
    };
    AdminDashboardPieComponent.prototype.drawPie = function () {
        var pieData = [
            { name: 'Running', value: 40, color: '#18FFFF' },
            { name: 'Paused', value: 26, color: '#0288D1' },
            { name: 'Stopped', value: 7, color: '#BF360C' },
            { name: 'Failed', value: 13, color: '#F4511E' },
            { name: 'Unknown', value: 19, color: '#F9A825' },
        ];
        bakeDonut(pieData);
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
                    .attr('dy', '1rem');
                group.append('text')
                    .text("" + pathData.data.name)
                    .attr('class', 'data-text data-text__name')
                    .attr('text-anchor', 'middle')
                    .attr('dy', '3.5rem');
                // Set default active segment
                if (pathData.value === max) {
                    var textVal = d3.select(this).select('.data-text__value')
                        .classed('data-text--show', true);
                    var textName = d3.select(this).select('.data-text__name')
                        .classed('data-text--show', true);
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
                if (v.value === max) {
                    var maxArc = d3.select(this)
                        .attr('d', arcHover);
                    activeSegment = this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard-pie',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard-pie/admin-dashboard-pie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_super_admin_service__["a" /* SuperAdminService */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-footer',
            template: __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{width:60%;left:10%;bottom:10%;z-index:100;min-height:20px;color:#fff;text-align:left;font-size:14px;position:absolute;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n/* Card */\r\n.card {\r\n \r\n}\r\n.card:first-child {\r\n\r\n}\r\n.card .title {\r\n      position: relative;\r\n    z-index: 1;\r\n    /* border-left: 5px solid #ec2652; */\r\n    margin: 0 0 35px;\r\n        padding: 20% 0 6% 0;\r\n    color: #f37501;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{background-color:none !important;}\r\n.card .input-container {\r\n        position: relative;\r\n    margin: 0 60px 34px;\r\n    /* overflow: hidden; */\r\n    display: inline-block;\r\n\t\r\n}\r\n.card .input-container input {\r\n  outline: none;\r\n  z-index: 1;\r\n  position: relative;\r\n  background: none;\r\n  width: 100%;\r\n  height: 54px;\r\n  border: 0;\r\n  color: #212121;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n.card .input-container input:focus ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n.card .input-container input:valid ~ label {\r\n  color: #9d9d9d;\r\n  transform: translate(-12%, -50%) scale(0.75);\r\n}\r\n.card .input-container label {\r\n  position: absolute;\r\n  top: 0;\r\n      left: 20px;\r\n  color: #757575;\r\n      font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 60px;\r\n  transition: 0.2s ease;\r\n}\r\n.card .fa{     padding-top: 19px;\r\n    font-size: 28px;color:#f37600;}\r\n.card .input-container .bar {\r\n  position: absolute;\r\n      left: -4%;\r\n  bottom: 0;\r\n  background: #757575;\r\n  width: 100%;\r\n  height: 1px;\r\n}\r\n.card .input-container .bar:before, .card .input-container .bar:after {\r\n  content: '';\r\n  position: absolute;\r\n      background: #f47453;\r\n  width: 0;\r\n  height: 2px;\r\n  transition: .2s ease;\r\n}\r\n.card .input-container .bar:before {\r\n  left: 50%;\r\n}\r\n.card .input-container .bar:after {\r\n  right: 50%;\r\n}\r\n.card .button-container {\r\n  margin: 0 60px;\r\n  text-align: center;\r\n}\r\n.card .button-container button {\r\n  outline: 0;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: 0;\r\n  width: 240px;\r\n  border: 2px solid #e3e3e3;\r\n  padding: 20px 0;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button span {\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #ddd;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: block;\r\n  background: #ec2652;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  margin: -15px 0 0 -15px;\r\n  opacity: 0;\r\n  transition: .3s ease;\r\n}\r\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\r\n  border-color: #ec2652;\r\n}\r\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ec2652;\r\n}\r\n.card .button-container button:active span, .card .button-container button:focus span {\r\n  color: #ffffff;\r\n}\r\n.card .button-container button:active:before, .card .button-container button:focus:before {\r\n  opacity: 1;\r\n  transform: scale(10);\r\n}\r\n.card .footer {\r\n  margin: 6px 0 9%;\r\n  color: #d3d3d3;\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\r\n.card .footer a {\r\n      color: inherit;\r\n    text-decoration: none;\r\n    transition: .3s ease;\r\n    font-size: 15px;\r\n    color: #111;\r\n}\r\n.card .footer a:hover {\r\n  color: #bababa;\r\n}\r\n.card.alt {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  z-index: 10;\r\n  width: 100px;\r\n  height: 100px;\r\n  background: none;\r\n  border-radius: 100%;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  transition: .3s ease;\r\n  /* Toggle */\r\n  /* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n  position: relative;\r\n  background: #ec2652;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  color: #ffffff;\r\n  font-size: 42px;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n  content: '\\F067';\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  transform: translate(0, 0);\r\n}\r\n.card.alt .title,\r\n.card.alt .input-container,\r\n.card.alt .button-container {\r\n  left: 100px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.card.alt .title {\r\n  position: relative;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n.card.alt .title .close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 60px;\r\n  display: inline;\r\n  color: #ffffff;\r\n  font-size: 58px;\r\n  font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n  content: '\\D7';\r\n}\r\n.card.alt .input-container input {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\r\n  background: #ffffff;\r\n}\r\n.card.alt .input-container input:valid ~ label {\r\n  color: #ffffff;\r\n}\r\n.card.alt .input-container label {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .input-container .bar {\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n.card.alt .button-container button {\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span {\r\n  color: #ec2652;\r\n}\r\n.card.alt .button-container button:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\r\n  display: none;\r\n}\r\n.logn-img img{width:100%;}\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n.admin-logn{ margin-top: 18%; }\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"logn\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"logn-img\">\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" />\n\t\t\t\t\t<div class=\"paragraph\">\n\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi\n\t\t\t\t\t\ttristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Mixins-->\n\t\t\t\t<!-- Pen Title-->\n\n\t\t\t\t<div class=\"container admin-logn\">\n\t\t\t\t\t<div class=\"card\"></div>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\n\n\t\t\t\t\t\t<form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n\t\t\t\t\t\t\t<div class=\"input-container\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" [(ngModel)]=\"newLogin.email\" name=\"email\" #email=\"ngModel\" />\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Username</label>\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<div class=\"input-container\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"password\" id=\"Password\" [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\" />\n\t\t\t\t\t\t\t\t\t<label for=\"Password\">Password</label>\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"input-container\">\n\t\t\t\t\t \n\t\t\t\t\t  <div class=\"col-xs-10 padd-lft\">\n\t\t\t\t\t  <div class=\"g-recaptcha\" data-sitekey=\"6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU\"><div style=\"width: 304px; height: 78px;\"><div><iframe src=\"https://www.google.com/recaptcha/api2/anchor?k=6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU&amp;co=aHR0cDovL3d3dy50c3MtYWR2LmNvbTo4MA..&amp;hl=en&amp;v=v1518566665321&amp;size=normal&amp;cb=ri090lbnphd5\" width=\"304\" height=\"78\" role=\"presentation\" frameborder=\"0\" scrolling=\"no\" sandbox=\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"></iframe></div><textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\" class=\"g-recaptcha-response\" style=\"width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; \"></textarea></div></div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div> -->\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<!-- <div class=\"footer\"><a href=\"#\">Forgot your password?</a></div> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Sign up</button></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- \t\t\t\n\t\t  <div class=\"social-login\">\n\t\t\t  <a href=\"#\">\n\t\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\n\t\t\t\tLogin in with facebook\n\t\t\t  </a>\n\t\t\t  <a href=\"#\">\n\t\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\n\t\t\t\tlog in with Google\n\t\t\t  </a>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\n\t<!-- Modal -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var AdminLoginComponent = (function () {
    function AdminLoginComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.newLogin = {
            email: '',
            password: '',
        };
        this.showError = false;
        this.showSpinner = false;
        this.Error = '';
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin Login
    // Params        : admin username,admin password from form
    // Returns       : Token, admin id and role
    // Author        : Rinsha
    // Date          : 01-03-2018
    // Last Modified : 01-03-2018, Rinsha
    // Desc          : Admin login
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.showSpinner = true;
        // console.log(this.newLogin);
        this.adminService.adminLogin(this.newLogin).subscribe(function (data) {
            console.log(data);
            if (data.success == false) {
                //  this.showSpinner =false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 3000
                });
            }
            if (data.success) {
                //  this.showSpinner =false
                _this.adminService.storeUserData(data.token, data.admin);
                //  this.routes.navigate(['/admin-dashboard']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-login',
            template: __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSnackBar */]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-not-verified',
            template: __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNotVerifiedComponent);
    return AdminNotVerifiedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-plan/admin-plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n \r\n  .mat-form-field {\r\n    /* font-size: 14px; */\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .modal{top:0;}\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  .add-project{\r\n    float: right;\r\n    margin-right: 50px;\r\n    margin-top: 50px;\r\n    border: none;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    font-size: 28px;\r\n    line-height: 42px;\r\n    box-shadow: 4px 7px 31px #ffbb8e;\r\n  }\r\n  .modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n}\r\n.modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\n  display: block;\r\n  position: relative;\r\n  -ms-flex: auto;\r\n      flex: auto;\r\n  min-width: 0;\r\n  width: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\n  padding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\n  font-family: Roboto, Arial, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.basic-container {\r\n  padding: 5px;\r\n}\r\n\r\n.version-info {\r\n  font-size: 8pt;\r\n  float: right;\r\n}\r\n.round-button{\r\n  float:none !important;\r\n}\r\n.center-bt {\r\n    margin: 20px auto 10px auto;\r\n    float: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-plan/admin-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <admin-topbar></admin-topbar>\n<br>\n      <div class=\"col-md-12 col-xs-9\">\n        <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n\n          <div class=\"example-container mat-elevation-z8\">\n            <div class=\"example-header\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </div>\n            <mat-table [dataSource]=\"dataSource\" matSort>\n              <ng-container matColumnDef=\"slno\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\n                <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"planname\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> PLAN NAME</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.plan_name}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"price\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> PRICE</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> <span matPrefix>₹&nbsp;</span> {{row.plan_price}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"bestvalue\">\n                <mat-header-cell *matHeaderCellDef > BEST VALUE</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n\n                  <mat-slide-toggle class=\"example-margin\" name=\"best\" [(ngModel)]=\"row.is_best_value\" (change)=\"onChange(row.id,row.is_best_value)\"\n                    [checked]=\"row.is_best_value\">\n\n                  </mat-slide-toggle>\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"action\">\n                <mat-header-cell *matHeaderCellDef> ACTION</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <!-- <button mat-menu-item disabled *ngIf=\"row.status==false\" (click)=\"getEditId(row._id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\n                                                                <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\n                                                                <span>Edit</span>\n                                                                </button> -->\n                    <button mat-menu-item (click)=\"getEditId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\n                                                            <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\n                                                            <span>Edit</span>\n                                                            </button>\n\n\n                    <button mat-menu-item (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\"> \n                                                            <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\n                                                            <span>Delete</span>\n                                                        </button>\n                  </mat-menu>\n                </mat-cell>\n\n              </ng-container>\n\n\n\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n              </mat-row>\n            </mat-table>\n            <!-- <div class=\"col-md-15 \"> -->\n            <!-- <div *ngIf=\"showSpinnerDelete\" class=\"deletespinner\">\n                          <mat-spinner></mat-spinner>\n                       </div> -->\n\n            <!-- </div> -->\n\n            <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n              <div class=\"col-md-4 col-md-offset-4\">\n                <mat-toolbar class=\"back-color\">No item found!</mat-toolbar>\n              </div>\n            </div>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"add-button\">\n        <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n      </div>\n      <!-- -------------------------Modal -add plan------------------------------ -->\n\n      <div id=\"addModal\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n              <h4 class=\"modal-title\">Add New Plan</h4>\n            </div>\n            <div class=\"modal-body\">\n\n              <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"addPlan(newPlan);\" novalidate>\n\n                <div>\n                  <div class=\"example-container\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Plan Name\" name=\"plan_name\" [(ngModel)]=\"newPlan.plan_name\" required>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <span matPrefix>₹&nbsp;</span>\n                      <input matInput placeholder=\"Price\" type=\"number\" min=\"1\" class=\"example-right-align\" name=\"plan_price\" [(ngModel)]=\"newPlan.plan_price\"\n                        required>\n\n                      <!-- <span matSuffix>.00</span> -->\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n\n                      <mat-select placeholder=\"No of projects\" name=\"no_projects\" [(ngModel)]=\"newPlan.no_projects\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n\n\n                    <mat-form-field *ngIf=\"newPlan.no_projects == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value1\" [(ngModel)]=\"newPlan.value1\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Members\" name=\"no_members\" [(ngModel)]=\"newPlan.no_members\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.no_members == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value2\" [(ngModel)]=\"newPlan.value2\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Modules\" name=\"no_modules\" [(ngModel)]=\"newPlan.no_modules\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.no_modules == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value3\" [(ngModel)]=\"newPlan.value3\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Tasks\" name=\"no_tasks\" [(ngModel)]=\"newPlan.no_tasks\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.no_tasks == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value4\" [(ngModel)]=\"newPlan.value4\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n\n                  </div>\n\n                </div>\n                <br>\n                <!-- <div *ngIf=\"showSpinner\">\n                                    <mat-spinner></mat-spinner>\n                                   </div> -->\n\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n\n                  </div>\n                  <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                    <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                      xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div> -->\n\n                </div>\n\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n      <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Delete </h4>\n            </div>\n            <!-- <div class=\"modal-header\"> -->\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n            <!-- </div> -->\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n\n\n              <h4 class=\"textalign\">Are you sure?</h4>\n\n            </div>\n\n            <div class=\"modal-footer\" style=\"text-align:center;\">\n              <button type=\"button\" (click)=\"deletePlan(planId)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- ----------------------------------------------------------------------delete modal-------------------------------------------------------------------------- -->\n      <div id=\"myModal2\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n              <h4 class=\"modal-title\">Update Plan</h4>\n            </div>\n            <div class=\"modal-body\">\n\n              <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updatePlan(plan);\" novalidate>\n\n                <div class=\"form-group\">\n                  <div class=\"example-container\">\n\n                    <mat-form-field>\n                      <input matInput placeholder=\"Plan Name\" name=\"plan_name\" [(ngModel)]=\"plan.plan_name\" required>\n                    </mat-form-field>\n                    <div *ngIf=\"!disablePrice\">\n                      <mat-form-field class=\"inputfileds\">\n\n                        <input matInput placeholder=\"Price\" type=\"number\" min=\"1\" class=\"example-right-align\" name=\"plan_price\" [(ngModel)]=\"plan.plan_price\"\n                          required>\n                        <span matPrefix>₹&nbsp;</span>\n                        <!-- <span matSuffix>.00</span> -->\n\n                      </mat-form-field>\n                    </div>\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of projects\" name=\"noprojects\" [(ngModel)]=\"plan.noprojects\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.noprojects != 'Unlimited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value1\" [(ngModel)]=\"plan.no_projects\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    <!-- <mat-form-field *ngIf=\"newPlan.no_projects == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value1\" [(ngModel)]=\"newPlan.value1\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field> -->\n\n\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of members\" name=\"no_members\" [(ngModel)]=\"plan.nomembers\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.nomembers != 'Unlimited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value2\" [(ngModel)]=\"plan.no_members\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of modules\" name=\"no_modules\" [(ngModel)]=\"plan.nomodules\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.nomodules != 'Unlimited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value3\" [(ngModel)]=\"plan.no_modules\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of tasks\" name=\"no_tasks\" [(ngModel)]=\"plan.notasks\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.notasks != 'Unlimited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value3\" [(ngModel)]=\"plan.no_tasks\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    \n\n                  </div>\n                </div>\n                <!-- <div *ngIf=\"showSpinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n                <br>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Update</button>\n\n                  </div>\n                  <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                    <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                      xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div> -->\n\n                </div>\n\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <footer></footer>  -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-plan/admin-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
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





var AdminPlanComponent = (function () {
    function AdminPlanComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'planname', 'price', 'bestvalue', 'action'];
        this.notExist = false;
        this.disablePrice = false;
        this.showSpinner = false;
        this.showSpinnerDelete = false;
        this.plan = {
            plan_name: '',
            plan_price: '',
            no_projects: '',
            no_members: '',
            no_modules: '',
            no_tasks: '',
            noprojects: '',
            nomembers: '',
            nomodules: '',
            notasks: '',
        };
        this.newPlan = {
            plan_name: '',
            plan_price: '',
            no_projects: '',
            no_members: '',
            no_modules: '',
            value1: '',
            value2: '',
            value3: ''
        };
    }
    AdminPlanComponent.prototype.ngOnInit = function () {
        this.getPlan();
    };
    AdminPlanComponent.prototype.getPlan = function () {
        var _this = this;
        var users = [];
        // ---------------------------------Start-------------------------------------------
        // Function      : get all plans
        // Params        : 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 05-03-2018
        // Last Modified : 05-03-2018, Rinsha
        // Desc          : getAllplans 
        this.adminService.getAllplans().subscribe(function (data) {
            _this.showSpinnerDelete = false;
            // console.log(data);
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
            // console.log(this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        // ---------------------------------End-------------------------------------------
    };
    AdminPlanComponent.prototype.addPlan = function (plan) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : add plan
        // Params        : data from form
        // Returns       : 
        // Author        : Rinsha
        // Date          : 07-03-2018
        // Last Modified : 07-03-2018, Rinsha
        // Desc          : add plan 
        // console.log(plan);
        this.adminService.addPlan(plan).subscribe(function (data) {
            if (data.success == true) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 3000
                });
                _this.closeBtn.nativeElement.click();
                _this.getPlan();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 3000
                });
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    AdminPlanComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminPlanComponent.prototype.onChange = function (id, value) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : best plan
        // Params        : id and value
        // Returns       : 
        // Author        : Rinsha
        // Date          : 07-03-2018
        // Last Modified : 07-03-2018, Rinsha
        // Desc          : to change a plan to best
        this.adminService.bestPlan(id, value).subscribe(function (data2) {
            if (data2.success == true) {
                _this.getPlan();
            }
            else {
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    AdminPlanComponent.prototype.deletePlan = function (id) {
        var _this = this;
        // console.log(id);
        // ---------------------------------Start-------------------------------------------
        // Function      : delete plan
        // Params        : id 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 07-03-2018
        // Last Modified : 07-03-2018, Rinsha
        // Desc          : to delete a plan which is'nt used by any company
        this.adminService.deletePlan(id).subscribe(function (data2) {
            if (data2.success == true) {
                var snackBarRef = _this.snackBar.open(data2.msg, '', {
                    duration: 2000
                });
                _this.getPlan();
            }
            else {
                var snackBarRef = _this.snackBar.open(data2.msg, '', {
                    duration: 2000
                });
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    AdminPlanComponent.prototype.getId = function (id) {
        this.planId = id;
    };
    AdminPlanComponent.prototype.getEditId = function (id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get plan by id
        // Params        : id
        // Returns       : plan
        // Author        : Rinsha
        // Date          : 07-03-2018
        // Last Modified : 07-03-2018, Rinsha
        // Desc          : getplan
        this.adminService.getPlan(id).subscribe(function (res) {
            // console.log(res);
            _this.plan = res;
            _this.plan.noprojects = (res.no_projects != 'Unlimited') ? "limited" : "Unlimited";
            _this.plan.nomembers = (res.no_members != 'Unlimited') ? "limited" : "Unlimited";
            _this.plan.nomodules = (res.no_modules != 'Unlimited') ? "limited" : "Unlimited";
            _this.plan.notasks = (res.no_tasks != 'Unlimited') ? "limited" : "Unlimited";
            if (res.is_defualt == true) {
                _this.disablePrice = true;
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    AdminPlanComponent.prototype.updatePlan = function (plan) {
        var _this = this;
        // console.log(plan);
        // ---------------------------------Start-------------------------------------------
        // Function      : update plan
        // Params        : value from form
        // Returns       : 
        // Author        : Rinsha
        // Date          : 07-03-2018
        // Last Modified : 07-03-2018, Rinsha
        // Desc          : update a plan
        this.adminService.updatePlan(plan).subscribe(function (data) {
            // console.log(data);
            if (data.success == true) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 3000
                });
                _this.closeBtn1.nativeElement.click();
                _this.getPlan();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 3000
                });
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AdminPlanComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AdminPlanComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminPlanComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminPlanComponent.prototype, "sort", void 0);
    AdminPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-plan',
            template: __webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], AdminPlanComponent);
    return AdminPlanComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = "<div class=\"row\">\r\n    <header>\r\n\r\n        <div class=\"col-md-5 pull-right\">\r\n            <div class=\"header-rightside\">\r\n                <ul class=\"list-inline header-top pull-right\">\r\n                    <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\r\n\r\n                    <li>\r\n                        <a href=\"#\" class=\"icon-info\">\r\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                <span class=\"label label-primary\">3</span>\r\n                            </a>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                                <b class=\"caret\"></b></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li>\r\n                                <div class=\"navbar-content\">\r\n                                    <span>JS Krishna</span>\r\n                                    <p class=\"text-muted small\">\r\n                                        me@jskrishna.com\r\n                                    </p>\r\n                                    <div class=\"divider\">\r\n                                    </div>\r\n                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </header>\r\n</div>"

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
    };
    AdminTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-trial',
            template: __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminTrialComponent);
    return AdminTrialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-add-project/company-add-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }\r\n  .info-icon{\r\n    font-size: 19px !important;\r\n    color: #0c64ae;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-add-project/company-add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <company-topbar></company-topbar>\n        <br>\n        <div class=\"col-md-12\"><h3>Add Project</h3></div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n              <!-- <h3>Add Project</h3> -->\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <input matInput [(ngModel)]=\"project.project_name\" name=\"project_name\" autofocus required formControlName=\"project_nameValidation\">\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Type :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select name=\"project_type\" [(ngModel)]=\"project.project_type\" required formControlName=\"project_typeValidation\">\n                      <mat-option value=\"Billable\">Billable</mat-option>\n                      <mat-option value=\"Non-billable\">Non-billable</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Category :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select [(ngModel)]=\"project.category_id\" name=\"category_id\" required formControlName=\"category_idValidation\">\n                      <mat-option *ngFor=\"let item of categories\" [value]=\"item.id\">\n                        {{ item.category_name }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span matTooltip=\"To add a new category, please go to the category by clicking on the master settings on right corner !\"><i class=\"material-icons info-icon\">info_outline</i></span>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Priority :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select name=\"priority\" [(ngModel)]=\"project.priority\" required formControlName=\"priorityValidation\">\n                      <mat-option value=\"Low\">Low</mat-option>\n                      <mat-option value=\"Medium\">Medium</mat-option>\n                      <mat-option value=\"High\">High</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Description :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <textarea matInput [(ngModel)]=\"project.description\" name=\"description\" required formControlName=\"descriptionValidation\"\n                      matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"6\"></textarea>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div *ngIf=\"showPMlist\">\n                  <div class=\"col-md-4 col-xs-6\"><label>Assigned To :</label></div>\n                  <div class=\"col-md-7 col-xs-6\">\n                    <mat-form-field [formGroup]=\"formGroup\">\n                      <mat-select [(ngModel)]=\"project.pm_id\" name=\"pm_id\" required formControlName=\"pm_idValidation\">\n                        <mat-option value=\"Me\">Me</mat-option>\n                        <mat-option *ngFor=\"let item of pm\" [value]=\"item.login_id\">\n                          {{ item.f_name }} {{ item.l_name }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" (click)=\"addProject(project)\" class=\"btn round-button center-bt\">Submit</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-add-project/company-add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyAddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyAddProjectComponent = (function () {
    function CompanyAddProjectComponent(snackBar, companyService, routes, _formBuilder) {
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.showPMlist = true;
        this.project = {
            project_name: '',
            project_type: '',
            priority: '',
            description: '',
            pm_id: '',
            category_id: '',
        };
    }
    CompanyAddProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            if (_this.entity.role_id == 3) {
                _this.showPMlist = false;
            }
        });
        // -----------------------------------End------------------------------------------
        this.formGroup = this._formBuilder.group({
            project_nameValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            project_typeValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            priorityValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            descriptionValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            pm_idValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            category_idValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get All pm, project category in a company
        // Params        : 
        // Returns       : All pm, project category in a company
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getAllPm().subscribe(function (res) {
            _this.pm = res;
        });
        this.companyService.getAllProjectCategory().subscribe(function (res) {
            _this.categories = res;
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyAddProjectComponent.prototype.addProject = function (project) {
        var _this = this;
        if (this.entity.role_id == 3) {
            this.project.pm_id = this.entity.id;
        }
        if (project.pm_id == '' || project.pm_id == "Me") {
            if (confirm("Do you select yourself as the Project Manager? ")) {
                project.pm_id = this.entity.id;
            }
        }
        // console.log(project);
        // ---------------------------------Start-------------------------------------------
        // Function      : add project
        // Params        : data from form
        // Returns       : 
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.addProject(project).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.msg, '', {
                duration: 4000
            });
            if (data.success == true) {
                if (project.pm_id == _this.entity.id) {
                    _this.routes.navigate(['/assign-project', data.id]);
                }
                else {
                    _this.routes.navigate(['/project']);
                }
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyAddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-add-project',
            template: __webpack_require__("../../../../../src/app/components/company-add-project/company-add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-add-project/company-add-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CompanyAddProjectComponent);
    return CompanyAddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }\r\n .no-edit{font-weight: 400 !important;}\r\n .line-breaker {\r\n    white-space: pre-line;\r\n  }\r\n  .task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\n  button, input, optgroup, select, textarea{outline:none !important;}\r\n  .taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n  .task ul li{width:auto;float:left;padding: 8px;}\r\n      a{color:#111;}\r\n  .task h5{padding-top:13px;padding-top: 6px;}\r\n  .hash{background:#f7f6f4;}\r\n  .round-button {\r\n      border-radius: 20px;\r\n      margin: 0;\r\n      float: left;\r\n      background: #f37600;\r\n      color: #fff;\r\n      padding: 7px 15px;\r\n      transition: background 2s;\r\n      margin-bottom:15px;\r\n  }\r\n  .round-button:hover {\r\n      background: #ffaa05;\r\n      color: #fff;\r\n  }\r\n  .dropdown ul.dropdown-menu:before {\r\n      content: \"\";\r\n      border-bottom: 10px solid #fff;\r\n      border-right: 10px solid transparent;\r\n      border-left: 10px solid transparent;\r\n      position: absolute;\r\n      top: -10px;\r\n      right: 16px;\r\n      z-index: 10;\r\n  }\r\n  .round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\n  button, input, optgroup, select, textarea{outline:none;}\r\n  .effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n  .effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n  .effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n  .style{width:100%;}\r\n  label{font-size:15px;color:#4a4a4a;font-weight:normal;padding:5px 0;}\r\n  .mrg-2{margin-bottom:10px;}\r\n  .dropdown-menu > li > a {\r\n      display: block;\r\n      padding: 3px 20px;\r\n      clear: both;\r\n      font-weight: normal;\r\n      line-height: 25px;\r\n      color: #333333;\r\n      white-space: nowrap;\r\n  }\r\n  .addmodule {\r\n      padding: 20px 10px!important;\r\n      min-width: 357px;\r\n      right: 0px;\r\n      left: inherit;\r\n  }\r\n  .style{border:none;border-bottom: 1px solid #ccc;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n  }\r\n  .btn-file{padding:0;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n      margin-bottom:20px;\r\n  }\r\n  .center-bt{margin:20px auto 10px auto;float:none;}\r\n  @media only screen and (max-width : 767px) {\r\n  .mrg-2 {\r\n      margin-bottom: 37px;\r\n  }\r\n  \r\n  .task ul li{    padding: 2px;}\t\r\n  .addmodule{    min-width: 274px;}\r\n  }\r\n  .round-button{float:inherit !important;}  \r\n  .right-btn{float:right !important;margin-left: 15px;}\r\n\r\n\r\n .dwnload{ background: #f39f00;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  clear: left;\r\n  margin-right: 10px;\r\n}\r\n.mr-top{margin-top:20px;}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.modal{top:0;}\r\n.modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n  }\r\n  .modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n  \r\n  }\r\n  .modal-title{color:#fff;}\r\n  .modal-body{    padding:20px 30px;}\r\n  .modal-body input{border:none;}\r\n  .modal-body input{padding: 0;}\r\n  .pad-top{padding-top:20px;}\r\n  .wdth{width:100% !important;}\r\n  .brd{    border: none;\r\n    height: 54px;}\r\n    label{\r\n        font-weight: 700 !important;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <company-topbar></company-topbar>\n        <br>\n        <div class=\"col-md-12\">\n          <h3>Project Estimation</h3>\n        </div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Code :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_code}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Assignee :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{assignee}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Category :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{category?.category_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Priority :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.priority}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Description :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">\n                      {{project?.description}}\n                      </label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Date :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{pro_date}}</label></div>\n                </div>\n                <br>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"col-md-7 col-sm-12 col-xs-12 gutter\">\n\n          <div *ngFor=\"let item of estimations\">\n            <div class=\"white\">\n              <div class=\"col-md-12\">\n                <div class=\"col-md-6\">\n                  <label><b>{{item.team_name}}</b></label>\n                  <div class=\"clearfix\"></div>\n                  <label>Team Lead : {{item.tbl_project_estimation_team.tbl_user_profile.f_name}} {{item.tbl_project_estimation_team.tbl_user_profile.l_name}}</label>\n                </div>\n                <div class=\"col-md-6 text-right\">\n                  Total Hours : {{item.estimation_hour}} Hrs\n                </div>\n                <br>\n                <div class=\"clearfix\"></div>\n                <br>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-md-12\"><button type=\"button\" class=\"btn round-button pull-right right-btn\" data-toggle=\"collapse\" attr.data-target=\"#demo{{item.id}}\">Click Here</button></div>\n              <div class=\"clearfix\"></div>\n              <div id=\"demo{{item.id}}\" class=\"collapse\">\n\n                <div *ngFor=\"let modules of item.tbl_estimation_modules\">\n                  <div class=\"col-md-10 col-xs-12 pull-right\">\n                    <div class=\"task\">\n                      <div class=\"col-md-8 col-xs-7\">\n                        <h5>{{modules.module_name}}</h5>\n                      </div>\n                      <div class=\"col-md-4 col-xs-5\">\n                        <ul class=\"taskedit\">\n                          <li>{{modules.module_time}} Hr</li>\n                          <!-- <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteModuleModal\" (click)=\"getId(i)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                      <li class=\"pull-right\"><a><i (click)=\"editModules(i)\" class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li> -->\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngFor=\"let tasks of modules.tbl_estimation_tasks\">\n                    <div class=\"col-md-9 col-xs-12 pull-right\">\n                      <div class=\"task hash\">\n                        <div class=\"col-md-8 col-xs-7\">\n                          <h5>{{tasks.task_name}} </h5>\n                        </div>\n                        <div class=\"col-md-4 col-xs-5\">\n                          <ul class=\"taskedit\">\n                            <li>{{tasks.planned_hour + tasks.buffer_hour}} Hr</li>\n                            <!-- <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteTaskModal\" (click)=\"getId1(i,j)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                        <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#editTaskModal\" (click)=\"getId1(i,j)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li> -->\n                          </ul>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"clearfix\"></div>\n              </div>\n              <br>\n              <div class=\"col-md-12\">\n                <button type=\"button\" (click)=\"getEstIdtoResubmit(item.id, item.tbl_project_estimation_team.tbl_user_profile.login_id)\" data-toggle=\"modal\" data-target=\"#resubmitModal\" class=\"btn round-button pull-right right-btn\">ReSubmit</button>\n                <button type=\"button\" *ngIf=\"!acceptButtonHide[item.id]\" (click)=\"acceptEstimation(item.id)\" class=\"btn round-button pull-right right-btn\">Accept</button>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-12\">\n            <button type=\"button\" *ngIf=\"sendApprovalButtonShow\" (click)=\"sendForApproval()\" class=\"btn round-button pull-right right-btn\">{{sendForApprovalBtn}}</button>\n            <button type=\"button\" *ngIf=\"forwardButtonShow\" data-toggle=\"modal\" data-target=\"#forwardModal\" class=\"btn round-button pull-right right-btn\">Forward To</button>\n          </div>\n        </div>\n\n\n        <!-- --------------------------------------------- resubmit modal ----------------------------------------------------------------- -->\n        <div id=\"resubmitModal\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                <h4 class=\"modal-title\">Resubmit</h4>\n              </div>\n              <div class=\"modal-body\">\n                <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"resubmit(est_id, team_head_loginId);\" novalidate>\n                  <div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Reason :</label></div>\n                    <div class=\"col-md-7 col-xs-6\">\n                      <mat-form-field class=\"wdth\">\n                        <textarea matInput [(ngModel)]=\"reason\" name=\"reason\" required matAutosizeMinRows=\"3\" class=\"brd\" matAutosizeMaxRows=\"6\"></textarea>\n                      </mat-form-field>\n                    </div>\n                    <br>\n                  </div>\n                  <br>\n                  <div class=\"\">\n                    <div class=\"col-md-12\">\n                      <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button right-btn\">Submit</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- ----------------------------------------------------------------------resubmit modal------------------------------------------------------------------ -->\n      \n        <!-- --------------------------------------------- forward modal ----------------------------------------------------------------- -->\n        <div id=\"forwardModal\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn2>&times;</button>\n                <h4 class=\"modal-title\">Forward</h4>\n              </div>\n              <div class=\"modal-body\">\n                <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"forward();\" novalidate>\n                  <div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Forward To :</label></div>\n                    <div class=\"col-md-7 col-xs-6\">\n                      <mat-form-field class=\"wdth\">\n                        <mat-select [(ngModel)]=\"forward_to\" name=\"forward_to\" required>\n                          <mat-option *ngFor=\"let item of teamheads\" [value]=\"item\">\n                            {{ item.tbl_user_profile.f_name}} {{ item.tbl_user_profile.l_name }}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n                    <br>\n                  </div>\n                  <br>\n                  <div class=\"\">\n                    <div class=\"col-md-12\">\n                      <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button right-btn\">Submit</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n              </div>\n            </div>\n          </div>\n        </div>\n <!-- ----------------------------------------------------------------------forward modal------------------------------------------------------------------ --> \n\n\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyApproveEstimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyApproveEstimationComponent = (function () {
    function CompanyApproveEstimationComponent(userService, route, snackBar, companyService, routes, _formBuilder) {
        this.userService = userService;
        this.route = route;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.team_member = [];
        this.estimations = [];
        this.task_time = 0;
        this.sendApprovalButtonShow = false;
        this.forwardButtonShow = false;
        this.acceptButtonHide = [];
        this.resubmitData = {
            project_id: '',
            to_id: '',
            reason: '',
        };
        this.teamheads = [];
        this.acceptedEstimationCount = 0;
        this.current_estimation_team_ids = [];
        this.forwardCount = 0;
    }
    CompanyApproveEstimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.disabled)
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            // -----------------------------------End------------------------------------------
            _this.sub = _this.route.params.subscribe(function (params) {
                _this.p_id = params['id'];
                // this.notif_id = params['id2'];
                // ---------------------------------Start-------------------------------------------
                // Function      : get project by id
                // Params        : id
                // Returns       : project
                // Author        : Rinsha
                // Date          : 08-03-2018
                // Last Modified : 08-03-2018, Rinsha
                // Desc          : getProject
                _this.companyService.getProject(_this.p_id).subscribe(function (res1) {
                    _this.project = res1;
                    _this.pro_date = _this.project.createdAt.substring(0, 10);
                    _this.category_id = _this.project.category_id;
                    _this.pm_id = _this.project.pm_id;
                    _this.assignee_id = _this.project.assignee_id;
                    if (_this.assignee_id == _this.pm_id) {
                        _this.sendForApprovalBtn = "Approve";
                    }
                    else {
                        _this.sendForApprovalBtn = "Send for Approval";
                    }
                    if (_this.project.status != "Drafted" || _this.project.pm_id != _this.entity.id || _this.project.is_estimation_completed == true) {
                        var snackBarRef = _this.snackBar.open('Unauthorized Access', '', {
                            duration: 4000
                        });
                        _this.routes.navigate(['/project']);
                    }
                    // ---------------------------------Start-------------------------------------------
                    // Function      : get category by id
                    // Params        : id
                    // Returns       : category
                    // Author        : Rinsha
                    // Date          : 08-03-2018
                    // Last Modified : 08-03-2018, Rinsha
                    // Desc          : getCategoryById
                    _this.companyService.getCategoryById(_this.category_id).subscribe(function (res) {
                        _this.category = res;
                    });
                    // ---------------------------------End-------------------------------------------
                    // ---------------------------------Start-------------------------------------------
                    // Function      : get pm by id
                    // Params        : login id
                    // Returns       : user info
                    // Author        : Rinsha
                    // Date          : 13-03-2018
                    // Last Modified : 13-03-2018, Rinsha
                    // Desc          : getPmByLoginid
                    _this.userService.getPmByLoginid(_this.pm_id).subscribe(function (res) {
                        _this.pm = res;
                    });
                    // ---------------------------------End-------------------------------------------
                    // ---------------------------------Start-------------------------------------------
                    // Function      : get assignee by id
                    // Params        : login id
                    // Returns       : user info
                    // Author        : Rinsha
                    // Date          : 13-03-2018
                    // Last Modified : 13-03-2018, Rinsha
                    // Desc          : getPmByLoginid
                    _this.userService.getPmByLoginid(_this.assignee_id).subscribe(function (res) {
                        _this.assignee = res;
                    });
                    // ---------------------------------End-------------------------------------------
                });
                // ---------------------------------End-------------------------------------------
            });
            _this.getTeamHeadsToEstimate();
            _this.getProjectstimations();
            _this.getTotalEstimations();
            _this.getAcceptedEstimations();
            _this.getforwardStatus();
        });
    };
    CompanyApproveEstimationComponent.prototype.getProjectstimations = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getProjectstimations
        // Params        : project id
        // Returns       : estimations
        // Author        : Rinsha
        // Date          : 15-03-2018
        // Last Modified : 15-03-2018, Rinsha
        // Desc          :
        this.forwardButtonShow = true;
        this.acceptedEstimationCount = 0;
        this.companyService.getProjectstimations(this.p_id).subscribe(function (data) {
            // console.log(data);
            _this.estimations = [];
            _this.estimations = data;
            _this.estimations.forEach(function (element) {
                _this.current_estimation_team_ids.push(element.estimation_team_id);
                if (element.tbl_project_estimation_team.team_id == 1) {
                    _this.team_name = "Developer";
                }
                else if (element.tbl_project_estimation_team.team_id == 2) {
                    _this.team_name = "Designer";
                }
                else if (element.tbl_project_estimation_team.team_id == 3) {
                    _this.team_name = "QC";
                }
                element.team_name = _this.team_name;
                element.tbl_estimation_modules.forEach(function (modules) {
                    _this.task_time = 0;
                    modules.tbl_estimation_tasks.forEach(function (tasks) {
                        _this.task_time = _this.task_time + tasks.planned_hour + tasks.buffer_hour;
                    });
                    modules.module_time = _this.task_time;
                });
                if (element.is_accepted == true) {
                    _this.acceptButtonHide[element.id] = true;
                    _this.acceptedEstimationCount = _this.acceptedEstimationCount + 1;
                }
                else {
                    _this.forwardButtonShow = false;
                }
            });
            if (_this.estimations.length == 0) {
                _this.forwardButtonShow = false;
            }
            // if (this.estimations.length == 3) {
            //   this.sendApprovalButtonShow = true;
            // }
            // if (this.acceptedEstimationCount == 3) {
            //   this.sendApprovalButtonShow = true;
            // }
            _this.getTeamHeadsToEstimate();
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.getTotalEstimations = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getTotalEstimations
        // Params        : project id
        // Returns       : estimations
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          :
        this.companyService.getTotalEstimations(this.p_id).subscribe(function (data) {
            // console.log(this.teamhead_count);
            if (data == _this.teamhead_count) {
                _this.forwardButtonShow = false;
            }
            // console.log(data);
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.getEstIdtoResubmit = function (est_id, team_head_loginId) {
        // console.log(team_head_loginId);
        this.est_id = est_id;
        this.team_head_loginId = team_head_loginId;
    };
    CompanyApproveEstimationComponent.prototype.resubmit = function (est_id, head_id) {
        var _this = this;
        // console.log(this.reason);
        this.resubmitData = {
            project_id: this.p_id,
            to_id: head_id,
            reason: this.reason,
        };
        // ---------------------------------Start-------------------------------------------
        // Function      : resubmitEstimation
        // Params        : estimation id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 15-03-2018
        // Last Modified : 15-03-2018, Rinsha
        // Desc          :  
        this.companyService.resubmitEstimation(est_id, this.resubmitData).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.msg, '', {
                duration: 3000
            });
            if (data.success == true) {
                _this.sendApprovalButtonShow = false;
                _this.getTeamHeadsToEstimate();
                _this.getProjectstimations();
                _this.getTotalEstimations();
                _this.getAcceptedEstimations();
                _this.closeBtn1.nativeElement.click();
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.acceptEstimation = function (est_id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : acceptEstimation
        // Params        : estimation id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 15-03-2018
        // Last Modified : 15-03-2018, Rinsha
        // Desc          :  
        this.companyService.acceptEstimation(est_id).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.msg, '', {
                duration: 2000
            });
            if (data.success == true) {
                _this.acceptButtonHide[est_id] = true;
                _this.getProjectstimations();
                _this.getTeamHeadsToEstimate();
                _this.getTotalEstimations();
                _this.getAcceptedEstimations();
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.forward = function () {
        var _this = this;
        // console.log(this.forward_to);
        // ---------------------------------Start-------------------------------------------
        // Function      : forwardEstimationRequest
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 16-03-2018
        // Last Modified : 16-03-2018, Rinsha
        // Desc          :  
        this.companyService.forwardEstimationRequest(this.p_id, this.forward_to.tbl_user_profile.login_id).subscribe(function (data) {
            if (data.success == true) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.forwardCount = _this.forwardCount + 1;
                // if (this.forwardCount == 2) {
                //   this.forwardButtonShow = false;
                // }
                _this.closeBtn2.nativeElement.click();
                _this.routes.navigate(['/project']);
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.getTeamHeadsToEstimate = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get team heads of the project who does nt involved in estimations
        // Params        : project id
        // Returns       : team head info
        // Author        : Rinsha
        // Date          : 16-03-2018
        // Last Modified : 16-03-2018, Rinsha
        // Desc          : getTeamHeadsToEstimate
        this.companyService.getTeamHeadsToEstimate(this.p_id).subscribe(function (team_heads) {
            _this.teamheads = [];
            _this.teamhead_count = team_heads.length;
            team_heads.forEach(function (teams) {
                if (_this.current_estimation_team_ids.includes(teams.id) == false) {
                    _this.teamheads.push(teams);
                }
            });
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.sendForApproval = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : send request to admin for approval
        // Params        : project id, assignee id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : sendForApproval
        this.companyService.sendForApproval(this.p_id, this.assignee_id).subscribe(function (pro) {
            if (pro.success == true) {
                var snackBarRef = _this.snackBar.open(pro.msg, '', {
                    duration: 2000
                });
                if (_this.entity.id == _this.assignee_id) {
                    _this.routes.navigate(['/approve-project', _this.p_id]);
                }
                else {
                    _this.routes.navigate(['/project']);
                }
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.getAcceptedEstimations = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getAcceptedEstimations
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 20-03-2018
        // Last Modified : 20-03-2018, Rinsha
        // Desc          : 
        this.companyService.getAcceptedEstimations(this.p_id).subscribe(function (pro) {
            _this.acceptedEstimation = pro;
            if (pro == _this.teamhead_count) {
                _this.sendApprovalButtonShow = true;
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyApproveEstimationComponent.prototype.getforwardStatus = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : forwardStatus
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 21-03-2018
        // Last Modified : 21-03-2018, Rinsha
        // Desc          : once it is forwarded, then there is no forward button
        this.companyService.getforwardStatus(this.p_id).subscribe(function (info) {
            if (info > 0) {
                _this.forwardButtonShow = false;
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CompanyApproveEstimationComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CompanyApproveEstimationComponent.prototype, "closeBtn2", void 0);
    CompanyApproveEstimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-approve-estimation',
            template: __webpack_require__("../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-approve-estimation/company-approve-estimation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CompanyApproveEstimationComponent);
    return CompanyApproveEstimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-approve-project/company-approve-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }\r\n .no-edit {font-weight: 400 !important;}\r\n .line-breaker {\r\n    white-space: pre-line;\r\n  }\r\n\r\n\r\n  .task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\n  button, input, optgroup, select, textarea{outline:none !important;}\r\n  .taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n  .task ul li{width:auto;float:left;padding: 8px;}\r\n      a{color:#111;}\r\n  .task h5{padding-top:13px;padding-top: 6px;}\r\n  .hash{background:#f7f6f4;}\r\n  .round-button {\r\n      border-radius: 20px;\r\n      margin: 0;\r\n      float: left;\r\n      background: #f37600;\r\n      color: #fff;\r\n      padding: 7px 15px;\r\n      transition: background 2s;\r\n      margin-bottom:15px;\r\n  }\r\n  .round-button:hover {\r\n      background: #ffaa05;\r\n      color: #fff;\r\n  }\r\n  .dropdown ul.dropdown-menu:before {\r\n      content: \"\";\r\n      border-bottom: 10px solid #fff;\r\n      border-right: 10px solid transparent;\r\n      border-left: 10px solid transparent;\r\n      position: absolute;\r\n      top: -10px;\r\n      right: 16px;\r\n      z-index: 10;\r\n  }\r\n  .round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\n  button, input, optgroup, select, textarea{outline:none;}\r\n  .effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n  .effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n  .effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n  .style{width:100%;}\r\n  label{font-size:15px;\r\n    color:#4a4a4a;\r\n    font-weight:bold !important;\r\n    padding:5px 0;}\r\n  .mrg-2{margin-bottom:10px;}\r\n  .dropdown-menu > li > a {\r\n      display: block;\r\n      padding: 3px 20px;\r\n      clear: both;\r\n      font-weight: normal;\r\n      line-height: 25px;\r\n      color: #333333;\r\n      white-space: nowrap;\r\n  }\r\n  .addmodule {\r\n      padding: 20px 10px!important;\r\n      min-width: 357px;\r\n      right: 0px;\r\n      left: inherit;\r\n  }\r\n  .style{border:none;border-bottom: 1px solid #ccc;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n  }\r\n  .btn-file{padding:0;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n      margin-bottom:20px;\r\n  }\r\n  .center-bt{margin:20px auto 10px auto;float:none;}\r\n  @media only screen and (max-width : 767px) {\r\n  .mrg-2 {\r\n      margin-bottom: 37px;\r\n  }\r\n  \r\n  .task ul li{    padding: 2px;}\t\r\n  .addmodule{    min-width: 274px;}\r\n  }\r\n  .round-button{float:inherit !important;}  \r\n  .right-btn{float:right !important;margin-left: 15px;}\r\n\r\n\r\n .dwnload{ background: #f39f00;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  clear: left;\r\n  margin-right: 10px;\r\n}\r\n.mr-top{margin-top:20px;}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.modal{top:0;}\r\n.modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n  }\r\n  .modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n  \r\n  }\r\n  .modal-title{color:#fff;}\r\n  .modal-body{    padding:20px 30px;}\r\n  .modal-body input{border:none;}\r\n  .modal-body input{padding: 0;}\r\n  .pad-top{padding-top:20px;}\r\n  .wdth{width:100% !important;}\r\n  .brd{    border: none;\r\n    height: 54px;}\r\n.prepared li{float: \r\nleft;width:auto;text-align:left;    line-height: 26px;}\r\n.all-buttons{display: -ms-flexbox;display: flex;}\r\n.round-button{margin-right: 10px;}\r\n.line-under{\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-approve-project/company-approve-project.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <company-topbar></company-topbar>\n        <br>\n        <div class=\"col-md-12\">\n          <h3>Project Approval</h3>\n        </div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Code :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_code}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Assigned to :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{pm}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Total Estimation Hours :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\"><a class=\"line-under\" [routerLink]=\"['/view-project', p_id]\">{{estimation_hour}} Hr</a></label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Prepared By :</label></div>\n                <div class=\"col-md-8 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">\n                  <ul *ngFor=\"let item of team_leaders\" class=\"prepared\">\n                    <li>{{item}}</li></ul>  \n                  </label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Cost :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field>\n                    <span matPrefix>₹&nbsp;</span>\n                    <input matInput type=\"number\" min=\"1\" autofocus class=\"example-right-align\" name=\"project_cost\" [(ngModel)]=\"project_cost\"\n                      required>\n                  </mat-form-field>\n                </div>\n                <br>\n\n              </div>\n\n              <br>\n              <br>\n              <div class=\"row all-buttons\">\n                <div class=\"\">\n                  <button type=\"submit\" (click)=\"getCost(project_cost)\" data-toggle=\"modal\" data-target=\"#rejectModal\" class=\"btn round-button \">Reject</button>\n                </div>\n                <div class=\"\">\n                  <button type=\"submit\" (click)=\"acceptProject(project_cost)\" class=\"btn round-button \">Accept</button>\n                </div>\n                <div class=\"\">\n                  <button type=\"submit\" (click)=\"getCost(project_cost)\" data-toggle=\"modal\" data-target=\"#resubmitModal\" class=\"btn round-button \">{{resubmitBtn}}</button>\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- --------------------------------------------- reject modal ----------------------------------------------------------------- -->\n      <div id=\"rejectModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Reject </h4>\n            </div>\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n\n\n              <h4 class=\"textalign\">Are you sure?</h4>\n\n            </div>\n\n            <div class=\"modal-footer\" style=\"text-align:center;\">\n              <button type=\"button\" (click)=\"rejectProject(project_cost)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Reject</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- ----------------------------------------------------------------------reject modal-------------------------------------------------------- -->\n\n      <!-- --------------------------------------------- Resubmit modal ----------------------------------------------------------------- -->\n      <div id=\"resubmitModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Resubmit </h4>\n            </div>\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n\n\n              <h4 class=\"textalign\">Are you sure?</h4>\n\n            </div>\n\n            <div class=\"modal-footer\" style=\"text-align:center;\">\n              <button type=\"button\" (click)=\"resubmitProject(project_cost)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Resubmit</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- ----------------------------------------------------------------------Resubmit modal-------------------------------------------------------- -->\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-approve-project/company-approve-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyApproveProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyApproveProjectComponent = (function () {
    function CompanyApproveProjectComponent(userService, route, snackBar, companyService, routes, _formBuilder) {
        this.userService = userService;
        this.route = route;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.estimation_hour = 0;
        this.team_leaders = [];
        this.project_cost = 0;
    }
    CompanyApproveProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.disabled)
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
        });
        // -----------------------------------End------------------------------------------
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params['id'];
            // ---------------------------------Start-------------------------------------------
            // Function      : get project by id
            // Params        : id
            // Returns       : project
            // Author        : Rinsha
            // Date          : 08-03-2018
            // Last Modified : 08-03-2018, Rinsha
            // Desc          : getProject
            _this.companyService.getProject(_this.p_id).subscribe(function (res1) {
                _this.project = res1;
                _this.pro_date = _this.project.createdAt.substring(0, 10);
                _this.pm_id = _this.project.pm_id;
                _this.assignee_id = _this.project.assignee_id;
                if (_this.assignee_id == _this.pm_id) {
                    _this.resubmitBtn = "Edit Estimation";
                }
                else {
                    _this.resubmitBtn = "Resubmit";
                }
                if (_this.project.status != "Drafted" || _this.project.assignee_id != _this.entity.id) {
                    var snackBarRef = _this.snackBar.open('Unauthorized Access', '', {
                        duration: 4000
                    });
                    _this.routes.navigate(['/project']);
                }
                // ---------------------------------Start-------------------------------------------
                // Function      : get pm by id
                // Params        : login id
                // Returns       : user info
                // Author        : Rinsha
                // Date          : 13-03-2018
                // Last Modified : 13-03-2018, Rinsha
                // Desc          : getPmByLoginid
                _this.userService.getPmByLoginid(_this.pm_id).subscribe(function (res) {
                    _this.pm = res;
                });
                // ---------------------------------End-------------------------------------------
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : getProjectstimations
            // Params        : project id
            // Returns       : estimations
            // Author        : Rinsha
            // Date          : 15-03-2018
            // Last Modified : 15-03-2018, Rinsha
            // Desc          :
            _this.companyService.getProjectstimations(_this.p_id).subscribe(function (data1) {
                _this.estimation_hour = 0;
                _this.team_leaders = [];
                data1.forEach(function (element) {
                    _this.estimation_hour = _this.estimation_hour + element.estimation_hour;
                    if (element.tbl_project_estimation_team.team_id == 1) {
                        _this.team_name = "Developer";
                    }
                    else if (element.tbl_project_estimation_team.team_id == 2) {
                        _this.team_name = "Designer";
                    }
                    else if (element.tbl_project_estimation_team.team_id == 3) {
                        _this.team_name = "QC";
                    }
                    _this.team_leaders.push(_this.team_name + " Team head :" + element.tbl_project_estimation_team.tbl_user_profile.f_name + " " + element.tbl_project_estimation_team.tbl_user_profile.l_name);
                });
            });
            // ---------------------------------End-------------------------------------------
        });
    };
    CompanyApproveProjectComponent.prototype.acceptProject = function (project_cost) {
        var _this = this;
        this.project_cost = project_cost;
        if (this.project_cost == 0) {
            var snackBarRef = this.snackBar.open('Project Cost is required', '', {
                duration: 4000
            });
        }
        else {
            this.project_submit = {
                project_cost: this.project_cost,
                p_id: this.p_id,
                estimation_hour: this.estimation_hour,
                pm_id: this.pm_id
            };
            // ---------------------------------Start-------------------------------------------
            // Function      : accept project
            // Params        : cost, estimated hr, project id, pm id
            // Returns       : 
            // Author        : Rinsha
            // Date          : 20-03-2018
            // Last Modified : 20-03-2018, Rinsha
            // Desc          : acceptProject
            this.companyService.acceptProject(this.project_submit).subscribe(function (pro) {
                var snackBarRef = _this.snackBar.open(pro.msg, '', {
                    duration: 4000
                });
                if (pro.success == true) {
                    if (_this.pm_id == _this.entity.id) {
                        _this.routes.navigate(['/project-planning', _this.p_id]);
                    }
                    else {
                        _this.routes.navigate(['/project']);
                    }
                }
            });
            // ---------------------------------End-------------------------------------------
        }
    };
    CompanyApproveProjectComponent.prototype.rejectProject = function (project_cost) {
        var _this = this;
        this.project_cost = project_cost;
        if (this.project_cost == 0) {
            var snackBarRef = this.snackBar.open('Project Cost is required', '', {
                duration: 4000
            });
        }
        else {
            this.project_submit = {
                project_cost: this.project_cost,
                p_id: this.p_id,
                estimation_hour: this.estimation_hour,
                pm_id: this.pm_id
            };
            // ---------------------------------Start-------------------------------------------
            // Function      : reject project
            // Params        : cost, estimated hr, project id
            // Returns       : 
            // Author        : Rinsha
            // Date          : 20-03-2018
            // Last Modified : 20-03-2018, Rinsha
            // Desc          : rejectProject
            this.companyService.rejectProject(this.project_submit).subscribe(function (pro) {
                var snackBarRef = _this.snackBar.open(pro.msg, '', {
                    duration: 4000
                });
                if (pro.success == true) {
                    _this.routes.navigate(['/project']);
                }
            });
            // ---------------------------------End-------------------------------------------
        }
    };
    CompanyApproveProjectComponent.prototype.getCost = function (project_cost) {
        this.project_cost = project_cost;
    };
    CompanyApproveProjectComponent.prototype.resubmitProject = function (project_cost) {
        var _this = this;
        if (this.project_cost == 0) {
            var snackBarRef = this.snackBar.open('Project Cost is required', '', {
                duration: 4000
            });
        }
        else {
            this.project_submit = {
                p_id: this.p_id,
                pm_id: this.pm_id
            };
            // ---------------------------------Start-------------------------------------------
            // Function      : resubmit project
            // Params        : cost, estimated hr, project id, pm id
            // Returns       : 
            // Author        : Rinsha
            // Date          : 20-03-2018
            // Last Modified : 20-03-2018, Rinsha
            // Desc          : resubmitProject
            this.companyService.resubmitProject(this.project_submit).subscribe(function (pro) {
                var snackBarRef = _this.snackBar.open(pro.msg, '', {
                    duration: 4000
                });
                if (pro.success == true) {
                    if (_this.pm_id == _this.entity.id) {
                        _this.routes.navigate(['/approve-estimation', _this.p_id]);
                    }
                    else {
                        _this.routes.navigate(['/project']);
                    }
                }
            });
            // ---------------------------------End-------------------------------------------
        }
    };
    CompanyApproveProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-approve-project',
            template: __webpack_require__("../../../../../src/app/components/company-approve-project/company-approve-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-approve-project/company-approve-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CompanyApproveProjectComponent);
    return CompanyApproveProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-assign-project/company-assign-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }\r\n .no-edit{font-weight: 400;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-assign-project/company-assign-project.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <company-topbar></company-topbar>\n        <br>\n        <div class=\"col-md-12\"><h3>Assign Team Head</h3></div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n              <!-- <h3>Assign Team Head</h3> -->\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Code :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_code}}</label></div>\n                </div>\n                <br>\n\n                <!-- <div class=\"col-md-4 col-xs-6\"><label>Assignee</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-4 col-xs-6\"><label class=\"no-edit\">{{project?.assignee_id}}</label></div>\n                </div>\n                <br> -->\n\n                <div class=\"col-md-4 col-xs-6\"><label>Category :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{category?.category_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Priority :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.priority}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Description :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.description}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Date :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{pro_date}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-12 col-xs-12\"><label>Assigned To :</label></div>\n                <br>\n                <div class=\"col-md-11 pull-right\">\n                  <div class=\"col-md-5 col-xs-6\"><label>Developer Head :</label></div>\n                  <div class=\"col-md-6 col-xs-6\">\n                    <mat-form-field [formGroup]=\"formGroup\">\n                      <mat-select name=\"developer_id\" [(ngModel)]=\"project_assign.developer_id\" (ngModelChange)=\"changeDeveloper($event)\" required\n                        formControlName=\"developerValidation\">\n                        <mat-option value=\"\">None</mat-option>\n                        <mat-option *ngFor=\"let item of developerTeam\" [value]=\"item\">\n                          {{ item.f_name }} {{ item.l_name }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <br>\n                <div class=\"col-md-11 pull-right\">\n                  <div class=\"col-md-5 col-xs-6\"><label>Designer Head :</label></div>\n                  <div class=\"col-md-6 col-xs-6\">\n                    <mat-form-field [formGroup]=\"formGroup\">\n                      <mat-select name=\"designer_id\" [(ngModel)]=\"project_assign.designer_id\" (ngModelChange)=\"changeDesigner($event)\" required\n                        formControlName=\"designerValidation\">\n                        <mat-option value=\"\">None</mat-option>\n                        <mat-option *ngFor=\"let item of designerTeam\" [value]=\"item\">\n                          {{ item.f_name }} {{ item.l_name }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <br>\n                <div class=\"col-md-11 pull-right\">\n                  <div class=\"col-md-5 col-xs-6\"><label>QC Head :</label></div>\n                  <div class=\"col-md-6 col-xs-6\">\n                    <mat-form-field [formGroup]=\"formGroup\">\n                      <mat-select name=\"qc_id\" (ngModelChange)=\"changeQC($event)\" [(ngModel)]=\"project_assign.qc_id\" required formControlName=\"qcValidation\">\n                        <mat-option value=\"\">None</mat-option>\n                        <mat-option *ngFor=\"let item of qcTeam\" [value]=\"item\">\n                          {{ item.f_name }} {{ item.l_name }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"col-md-4 col-xs-6\"><label>Requirement Summary :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <textarea matInput [(ngModel)]=\"project_assign.requirement\" name=\"requirement\" required formControlName=\"reqValidation\"\n                      matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"6\"></textarea>\n                  </mat-form-field>\n                  <input (change)=\"displayDoc($event)\" name=\"file\"  type=\"file\" accept=\".jpeg, .png, .gif,.jar, .pdf\" />\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Forward Estimation Request :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select name=\"forward_to\" [(ngModel)]=\"project_assign.forward_to\" required formControlName=\"forwardValidation\">\n                      <mat-option *ngFor=\"let item of teamhead\" [value]=\"item\">\n                        {{ item.f_name }} {{ item.l_name }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" (click)=\"assignProject(project_assign)\" class=\"btn round-button center-bt\">Submit</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-assign-project/company-assign-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyAssignProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyAssignProjectComponent = (function () {
    function CompanyAssignProjectComponent(route, snackBar, companyService, routes, _formBuilder) {
        this.route = route;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.teamhead = [];
        this.project_assign = {
            project_id: '',
            developer_id: '',
            designer_id: '',
            qc_id: '',
            forward_to: '',
            requirement: '',
            docSrc: '',
            docFile: [],
        };
        this.isExists = false;
        this.filesToUpload = [];
    }
    CompanyAssignProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            // console.log(data);
        });
        // -----------------------------------End------------------------------------------
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params.id;
            // ---------------------------------Start-------------------------------------------
            // Function      : get project by id
            // Params        : id
            // Returns       : project
            // Author        : Rinsha
            // Date          : 08-03-2018
            // Last Modified : 08-03-2018, Rinsha
            // Desc          : getProject
            _this.companyService.getProject(_this.p_id).subscribe(function (res) {
                _this.project = res;
                if (_this.project.requirement_summary != null || _this.project.pm_id != _this.entity.id) {
                    var snackBarRef = _this.snackBar.open('Unauthorized Access', '', {
                        duration: 4000
                    });
                    _this.routes.navigate(['/project']);
                }
                _this.pro_date = _this.project.createdAt.substring(0, 10);
                _this.category_id = _this.project.category_id;
                // ---------------------------------Start-------------------------------------------
                // Function      : get category by id
                // Params        : id
                // Returns       : category
                // Author        : Rinsha
                // Date          : 08-03-2018
                // Last Modified : 08-03-2018, Rinsha
                // Desc          : getCategoryById
                _this.companyService.getCategoryById(_this.category_id).subscribe(function (res) {
                    _this.category = res;
                });
                // ---------------------------------End-------------------------------------------
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : get developer team
            // Params        : 
            // Returns       : users in developer team
            // Author        : Rinsha
            // Date          : 09-03-2018
            // Last Modified : 09-03-2018, Rinsha
            // Desc          : getDeveloperTeam
            _this.companyService.getDeveloperTeam().subscribe(function (res) {
                _this.developerTeam = res;
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : get designer team
            // Params        : 
            // Returns       : users in designer team
            // Author        : Rinsha
            // Date          : 09-03-2018
            // Last Modified : 09-03-2018, Rinsha
            // Desc          : getDesignerTeam
            _this.companyService.getDesignerTeam().subscribe(function (res) {
                _this.designerTeam = res;
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : get qc team
            // Params        : 
            // Returns       : users in qc team
            // Author        : Rinsha
            // Date          : 09-03-2018
            // Last Modified : 09-03-2018, Rinsha
            // Desc          : getQCTeam
            _this.companyService.getQCTeam().subscribe(function (res) {
                _this.qcTeam = res;
            });
            // ---------------------------------End-------------------------------------------
        });
        this.formGroup = this._formBuilder.group({
            developerValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            designerValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            qcValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            forwardValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            reqValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
    };
    CompanyAssignProjectComponent.prototype.changeQC = function (qc) {
        var _this = this;
        this.popElement = '';
        this.isExists = false;
        this.teamhead.forEach(function (element, key) {
            if (element.tbl_team_assocs[0].team_id == 3) {
                _this.isExists = true;
                _this.popElement = key;
            }
        });
        if (this.isExists == true) {
            this.teamhead.splice(this.popElement, 1);
        }
        if (this.inArray(qc, this.teamhead) == true) {
            this.project_assign.qc_id = '';
            var snackBarRef = this.snackBar.open("Team heads should be different", '', {
                duration: 2000
            });
        }
        else if (qc != '') {
            this.teamhead.push(qc);
        }
    };
    CompanyAssignProjectComponent.prototype.changeDeveloper = function (developer) {
        var _this = this;
        this.popElement = '';
        this.isExists = false;
        this.teamhead.forEach(function (element, key) {
            if (element.tbl_team_assocs[0].team_id == 1) {
                _this.isExists = true;
                _this.popElement = key;
            }
        });
        if (this.isExists == true) {
            this.teamhead.splice(this.popElement, 1);
        }
        if (this.userExists(developer.id) == true) {
            this.project_assign.developer_id = '';
            var snackBarRef = this.snackBar.open("Team heads should be different", '', {
                duration: 2000
            });
        }
        else if (developer != '') {
            this.teamhead.push(developer);
        }
    };
    CompanyAssignProjectComponent.prototype.changeDesigner = function (designer) {
        var _this = this;
        this.popElement = '';
        this.isExists = false;
        this.teamhead.forEach(function (element, key) {
            if (element.tbl_team_assocs[0].team_id == 2) {
                _this.isExists = true;
                _this.popElement = key;
            }
        });
        if (this.isExists == true) {
            this.teamhead.splice(this.popElement, 1);
        }
        if (this.userExists(designer.id) == true) {
            this.project_assign.designer_id = '';
            var snackBarRef = this.snackBar.open("Team heads should be different", '', {
                duration: 2000
            });
        }
        else if (designer != '') {
            this.teamhead.push(designer);
        }
    };
    CompanyAssignProjectComponent.prototype.assignProject = function (project) {
        var _this = this;
        this.project_assign.project_id = this.p_id;
        // console.log(project);
        // ---------------------------------Start-------------------------------------------
        // Function      : assign project
        // Params        : form data
        // Returns       : 
        // Author        : Rinsha
        // Date          : 09-03-2018
        // Last Modified : 09-03-2018, Rinsha
        // Desc          : AssignTeamHead
        this.companyService.AssignTeamHead(project).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.msg, '', {
                duration: 4000
            });
            if (data.success == true) {
                _this.routes.navigate(['/project']);
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyAssignProjectComponent.prototype.displayDoc = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        this.project_assign.docFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.project_assign.docSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyAssignProjectComponent.prototype.inArray = function (needle, haystack) {
        var count = haystack.length;
        for (var i = 0; i < count; i++) {
            if (haystack[i] === needle) {
                return true;
            }
        }
        return false;
    };
    CompanyAssignProjectComponent.prototype.userExists = function (id) {
        return this.teamhead.some(function (el) {
            return el.id === id;
        });
    };
    CompanyAssignProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-assign-project',
            template: __webpack_require__("../../../../../src/app/components/company-assign-project/company-assign-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-assign-project/company-assign-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CompanyAssignProjectComponent);
    return CompanyAssignProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-edit-project/company-edit-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-edit-project/company-edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <company-topbar></company-topbar>\n        <br>\n        <div class=\"col-md-12\"><h3>Edit Project</h3></div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n              <!-- <h3>Edit Project</h3> -->\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <input matInput [(ngModel)]=\"project.project_name\" name=\"project_name\" autofocus required formControlName=\"project_nameValidation\">\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Type :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select name=\"project_type\" [(ngModel)]=\"project.project_type\" required formControlName=\"project_typeValidation\">\n                      <mat-option value=\"Billable\">Billable</mat-option>\n                      <mat-option value=\"Non-billable\">Non-billable</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Category :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select [(ngModel)]=\"project.category_id\" name=\"category_id\" required formControlName=\"category_idValidation\">\n                      <mat-option *ngFor=\"let item of categories\" [value]=\"item.id\">\n                        {{ item.category_name }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Priority :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <mat-select name=\"priority\" [(ngModel)]=\"project.priority\" required formControlName=\"priorityValidation\">\n                      <mat-option value=\"Low\">Low</mat-option>\n                      <mat-option value=\"Medium\">Medium</mat-option>\n                      <mat-option value=\"High\">High</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Description :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field [formGroup]=\"formGroup\">\n                    <textarea matInput [(ngModel)]=\"project.description\" name=\"description\" required formControlName=\"descriptionValidation\"\n                      matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"6\"></textarea>\n                  </mat-form-field>\n                </div>\n                <br>\n\n                <div *ngIf=\"showRequirement\">\n                  <div class=\"col-md-4 col-xs-6\"><label>Requirement Summary :</label></div>\n                  <div class=\"col-md-7 col-xs-6\">\n                    <mat-form-field [formGroup]=\"formGroup\">\n                      <textarea matInput [(ngModel)]=\"project.requirement_summary\" name=\"requirement\" required formControlName=\"reqValidation\"\n                        matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"6\"></textarea>\n                    </mat-form-field>\n                    <a data-toggle=\"tooltip\" title=\"Download\" href=\"../assets/docs/{{project?.requirement_attatchment}}\" class=\"download-link\" download=\"\"> <button><i class=\"fa fa-download\"></i></button></a><br>\n                    <input (change)=\"displayDoc($event)\" name=\"file\" type=\"file\" />\n                  </div>\n                  <br>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" (click)=\"editProject(project)\" class=\"btn round-button center-bt\">Submit</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-edit-project/company-edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyEditProjectComponent = (function () {
    function CompanyEditProjectComponent(route, snackBar, companyService, routes, _formBuilder) {
        this.route = route;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.showPMlist = true;
        this.showRequirement = false;
        this.project = {
            project_id: '',
            project_name: '',
            project_type: '',
            priority: '',
            description: '',
            pm_id: '',
            category_id: '',
            requirement_summary: '',
            docSrc: '',
            docFile: [],
        };
    }
    CompanyEditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params.id;
            // ---------------------------------Start-------------------------------------------
            // Function      : get project by id
            // Params        : id
            // Returns       : project
            // Author        : Rinsha
            // Date          : 08-03-2018
            // Last Modified : 08-03-2018, Rinsha
            // Desc          : getProject
            _this.companyService.getProject(_this.p_id).subscribe(function (res) {
                _this.project = res;
                _this.pro1 = res;
                // console.log(this.pro1.is_approved);
                if (_this.pro1.is_approved == true || _this.pro1.assignee_id != _this.entity.id) {
                    var snackBarRef = _this.snackBar.open('Unauthorized Access', '', {
                        duration: 4000
                    });
                    // this.routes.navigate(['/project']);
                }
                if (_this.project.requirement_summary != '') {
                    _this.showRequirement = true;
                }
            });
            // ---------------------------------End-------------------------------------------
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            if (_this.entity.role_id == 3) {
                _this.showPMlist = false;
            }
        });
        // -----------------------------------End------------------------------------------
        this.formGroup = this._formBuilder.group({
            project_nameValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            project_typeValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            priorityValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            descriptionValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            pm_idValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            category_idValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            reqValidation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get All pm, project category in a company
        // Params        : 
        // Returns       : All pm, project category in a company
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getAllPm().subscribe(function (res) {
            _this.pm = res;
        });
        this.companyService.getAllProjectCategory().subscribe(function (res) {
            _this.categories = res;
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyEditProjectComponent.prototype.editProject = function (project) {
        var _this = this;
        this.project.project_id = this.p_id;
        // console.log(project);
        // ---------------------------------Start-------------------------------------------
        // Function      : edit project
        // Params        : data from form
        // Returns       : 
        // Author        : Rinsha
        // Date          : 09-03-2018
        // Last Modified : 09-03-2018, Rinsha
        // Desc          :  
        this.companyService.editProject(project).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.msg, '', {
                duration: 4000
            });
            if (data.success == true) {
                _this.routes.navigate(['/project']);
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyEditProjectComponent.prototype.displayDoc = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        this.project.docFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.project.docSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyEditProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-edit-project',
            template: __webpack_require__("../../../../../src/app/components/company-edit-project/company-edit-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-edit-project/company-edit-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CompanyEditProjectComponent);
    return CompanyEditProjectComponent;
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

module.exports = "<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n<head>\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\t<title>Taskit</title>\r\n\t<link rel=\"stylesheet\" href=\"css/bootstrap.css\">\r\n\t<link href=\"css/login.css\" rel=\"stylesheet\">\r\n\t<link href=\"css/responsive.css\" rel=\"stylesheet\">\r\n\t<!------ Include the above in your HEAD tag ---------->\r\n\r\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">\r\n\r\n</head>\r\n\r\n<body class=\"logn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"logn-img\">\r\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" style=\"width:100%;\" />\r\n\t\t\t\t\t<!-- <img src=\"img/login.jpg\"/> -->\r\n\t\t\t\t\t<!-- <div class=\"paragraph\">\r\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<!-- Mixins-->\r\n\t\t\t\t<!-- Pen Title-->\r\n\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"card\"></div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\r\n\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"login()\" novalidate>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" name=\"email\" [(ngModel)]=\"newLogin.email\" required/>\r\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Username</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"password\" id=\"Password\" name=\"password\" [(ngModel)]=\"newLogin.password\" required/>\r\n\t\t\t\t\t\t\t\t\t<label for=\"Password\">Password</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input-container\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"form-group\"> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"g-recaptcha\" data-sitekey=\"6LeCaEsUAAAAAO21B0h-bnp7YmIFWVFCaBxvtHAE\"></div> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"g-recaptcha\" data-sitekey=\"6LdpvDEUAAAAAMy8x0y8PS99j4BavfO2oBdVTQGZ\"></div> -->\r\n\t\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-xs-10 padd-lft\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"g-recaptcha\" data-sitekey=\"6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU\">\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"width: 304px; height: 78px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<iframe src=\"https://www.google.com/recaptcha/api2/anchor?k=6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU&amp;co=aHR0cDovL3d3dy50c3MtYWR2LmNvbTo4MA..&amp;hl=en&amp;v=v1518566665321&amp;size=normal&amp;cb=ri090lbnphd5\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t width=\"304\" height=\"78\" role=\"presentation\" frameborder=\"0\" scrolling=\"no\" sandbox=\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"></iframe>\r\n\t\t\t\t\t\t\t\t\t\t\t</div><textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\" class=\"g-recaptcha-response\" style=\"width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; \"></textarea></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t<div class=\"footer\"><a href=\"#\">Forgot your password?</a></div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Sign in</button></div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"social-login\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\r\n\t\t\t\tLogin in with facebook\r\n\t\t\t  </a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\r\n\t\t\t\tlog in with Google\r\n\t\t\t  </a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Modal -->\r\n\r\n\r\n\r\n</body>\r\n\r\n\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {GoogleRecaptchaDirective} from '../directives/googlerecaptcha.directive';
var CompanyLoginComponent = (function () {
    function CompanyLoginComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.newLogin = {
            email: '',
            password: '',
        };
    }
    CompanyLoginComponent.prototype.ngOnInit = function () {
        // this.companyService.getLoggedUSerDetails().subscribe(info => {
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
        //       // this.routes.navigate(['/additnInfo', info._id]); additional info
        //     }
        //     // this.routes.navigate(['/dashboard']); dashboard
        //   }
        //   if (info.role_id == 3 || info.role_id == 4) {
        //     if (info.delete_status == true || info.block_status == true) {
        //       // this.routes.navigate(['/404']); 404
        //     }
        //     // this.routes.navigate(['/dashboard]);  user(team leader/ team member) dashboard
        //   }
        // });
    };
    CompanyLoginComponent.prototype.login = function () {
        var _this = this;
        this.companyService.authenticateCompany(this.newLogin).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                if (data.login.status == "Expired") {
                    var json = data.login;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.login);
                    //  this.routes.navigate(['/expired']); expired
                }
                else {
                    var json = data.login;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.login);
                    //  this.routes.navigate(['/dashboard']); dashboard 
                }
            }
            else {
                _this.msg = data.msg;
                var snackBarRef = _this.snackBar.open(_this.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    CompanyLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-login',
            template: __webpack_require__("../../../../../src/app/components/company-login/company-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-login/company-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */]])
    ], CompanyLoginComponent);
    return CompanyLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-planlist/company-planlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{overflow-x:inherit;background:#fff ;}\r\n.navbar-nav > li{float:left;}\r\n.navbar-fixed-top{    background: rgba(255, 119, 0, 0.72);}\r\n.banner{ background: url(" + escape(__webpack_require__("../../../../../src/assets/images/banner.jpg")) + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n      width: 100%;\r\n    min-height: 580px;\r\n\tposition:relative;\r\n  }\r\n .navbar-brand {\r\n    float: left;\r\n    padding: 10.5px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    height: 78px;\r\n}\r\n/* ./assets/images/banner.jpg */\r\n.navbar-toggle {\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 15px;\r\n    padding: 9px 10px;\r\n    margin-top: 10.5px;\r\n    margin-bottom: 10.5px;\r\n    background-color: #d06000;\r\n    /* background-image: none; */\r\n    border: 1px solid transparent;\r\n    border-radius: 13px;\r\n}\r\n.about p{    color: #a5a0a0;    line-height: 24px;}\r\n.paddtop{padding-top:4%;}\r\n.navbar-left{      padding-top: 4%;}\r\n.nav > li{margin-left: 9px;}\r\n.btn-login{background:none;border-radius:40px;border:3px solid #fff;color:#fff;font-weight:bold;margin-left:4px;}\r\n.btn-login:hover{color:#fff;opacity:0.6;}\r\n.nav > li > a:hover{\r\n    text-decoration: none;\r\n    background-color: #fdaf00;\r\n    color: #fff;\r\n    border-radius: 40px;\r\n\tpadding-top:10px;\r\n\tpadding-bottom:10px;\r\n}\r\n.nav > li > a:focus{text-decoration: none;\r\n    background-color: #fdaf00;\r\n    color: #fff;\r\n    border-radius: 40px;\r\n\tpadding-top:10px;\r\n\tpadding-bottom:10px;\r\n}\r\n.navbar-nav > li > a {\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n}\r\n  .planz{ background: url(" + escape(__webpack_require__("../../../../../src/assets/images/bg.jpg")) + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n      width: 100%;\r\n   min-height: 327px;\r\n\tposition:relative;\r\n  }\r\n  .carry {\r\n    position: absolute;\r\n    z-index: 100;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n    max-width: 873px;\r\n    top: 46%;\r\n}\r\na {\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n}\r\n\r\n.device{max-width:806px;width:100%;background: url(" + escape(__webpack_require__("../../../../../src/assets/images/device.png")) + ") no-repeat;background-size:100%;min-height:467px;margin:0 auto;    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n       bottom: -15%;}\r\n.left-c{text-align:right;color:#fff;    padding-top: 23%;padding-right: 4%;}\r\n.left-r{text-align:left;color:#fff;    padding-top: 23%;padding-left: 6%;}\r\n.about{padding:11em 0 3em 0;}\r\n.shade {\r\n   box-shadow: 0px -2px 77px 0px rgba(0, 0, 0, 0.09);\r\n\t    padding: 20px;\r\n}\r\n.features h3{    padding-top: 17px;\r\n    font-size: 18px;\r\n    color: #6f300c;\r\n    margin-top: 0;\r\n    font-weight: bold;}\r\n.features p{    \r\n    font-size: 12px;\r\n    color: #989898;\r\n    line-height: 19px;}\r\n.plans {\r\n  width: 836px;\r\n  margin: 50px auto;\r\n  overflow: hidden;\r\n}\r\n\r\n  .plan {\r\n    float: left;\r\n    max-width: 276px;\r\n    margin: 20px 2px;\r\n    padding: 15px 0px;\r\n    text-align: center;\r\n    background: white;\r\n    background-clip: padding-box;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-shadow: 14px 26px 67px #0000002e;\r\n    -webkit-box-shadow: 14px 26px 67px #0000002e;\r\n    -moz-box-shadow: 14px 26px 67px #0000002e;\r\n    margin-right: -8px;\r\n}\r\n.banner h3{font-size: 20px;\r\n    font-weight: normal;\r\n    line-height: 27px;}\r\n.banner p{    color: #fdd3a7;}\r\n.hilight {\r\n  max-width: 309px;\r\n  padding: 28px 0px;\r\n  position: relative;\r\n  z-index: 100;\r\n  left: 0%;\r\n  top: -33px;\r\n}\r\n\r\n.features{padding:2em 0 6em 0;}\r\n.plan-title {\r\n      margin-bottom: 12px;\r\n    font-size: 22px;\r\n    color: #424242;\r\n}\r\n.mr-lft{    margin-left: -8%;}\r\n.plan-price {\r\n  margin-bottom: 20px;\r\n  line-height: 1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n    color: #f7752a;\r\n}\r\n\r\n.plan-unit {\r\n  display: block;\r\n  margin-top: 5px;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  color: #aaa;\r\n}\r\n\r\n.plan-features {\r\n  width: 100%;\r\n  margin:0 auto;\r\n  padding: 0;\r\n \r\n  text-align: left;\r\n}\r\n\r\n.plan-feature {\r\n    border-top: 1px solid #e5ded6;\r\n    text-align: center;\r\n        padding: 9px 0;\r\n\t    list-style-type: none;\r\n    \r\n}\r\n.plan-feature h4{text-align: center;\r\n    padding: 17px 0;\r\n    list-style-type: none;\r\n    font-size: 32px;\r\n    line-height: 39px;\r\n    font-weight: bold;\r\n    color: #9f9f9f;\r\n\t    padding: 0;\r\n    margin: 0;\r\n}\r\n.hilight h4{    color: #767676 !important;\r\n    font-size: 39px;\r\n    line-height: 47px;}\r\n.hilight .plan-price{font-size:48px;}\r\n\r\n.plan-feature + .plan-feature {\r\n  margin-top: 5px;\r\n}\r\n\r\n.plan-feature-unit {\r\n  margin-left: 2px;\r\n  font-size: 16px;\r\n}\r\n\r\n.plan-feature-name {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  color: #aaa;\r\n}\r\n\r\n.plan-button {\r\n  position: relative;\r\n  display: block;\r\n  line-height: 40px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\r\n  background: #fd935c;\r\n  border-bottom: 2px solid #cf7e3b;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n  border-radius: 4px;\r\n}\r\n.hilight .plan-feature-name {\r\nfont-size: 15px;}\r\n.planz h2{color:#fff;text-align:center;    padding-top: 4%;}\r\nfooter{width:100%;padding:10px 0;background:#ccc;color:#fff;text-align:left;font-size:13px;    margin-top: 28em;}\r\n\r\n\r\n@media only screen and (max-width :1024px) {\r\n.device{    max-width: 672px;bottom: -20%;}\r\n\r\n}\r\n\r\n@media only screen and (max-width : 768px) {\r\n\t.left-r{display:none;}\r\n\t.banner p{text-align:center;}\r\n\t.device{    max-width: 617px;bottom: -41%;}\r\n\t.banner h3{text-align:center;}\r\n\t.nav > li > a{padding: 10px 6px;}\r\n\t.mr-lft {\r\n    margin-left: -14%;\r\n    }\r\n\t.hilight{left: -7%;}\r\n\t\r\n}\r\n@media only screen and (max-width : 767px) {\r\n.plan { max-width: 253px;}\t\r\n.mr-lft {\r\n    margin-left: -17%;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n\r\n.img-responsive{margin:0 auto;}\r\n.features h3{text-align:center;}\r\n.features p{text-align:center;}\r\n.banner{    min-height: 415px;}\r\n.device {\r\n    max-width: 344px;\r\n    bottom: -82%;\r\n\t    min-height: 427px;\r\n}\r\n.plan{     max-width: 152px;}\r\n.left-c{    padding-top: 31%;}\r\n.mr-lft {\r\n    margin-left: -26%;\r\n}\r\n.hilight {\r\n    left: -13%;\r\n}\r\n}\r\n@media only screen and (max-width : 360px) {\r\n\t\r\n\t.mr-lft {\r\n    margin-left: -30%;\r\n    }\r\n\t.hilight {\r\n    left: -15%;\r\n}\r\n\t\r\n}\r\n\r\n/* @charset \"UTF-8\"; */\r\n\r\n/*!\r\nAnimate.css - http://daneden.me/animate\r\nLicensed under the MIT license - http://opensource.org/licenses/MIT\r\n\r\nCopyright (c) 2015 Daniel Eden\r\n*/\r\n\r\n.animated {\r\n  animation-duration: 1s;\r\n  animation-fill-mode: both;\r\n}\r\n.animated-fast {\r\n  animation-duration: .5s;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.animated.infinite {\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.animated.hinge {\r\n  animation-duration: 2s;\r\n}\r\n\r\n.animated.bounceIn,\r\n.animated.bounceOut {\r\n  animation-duration: .75s;\r\n}\r\n\r\n.animated.flipOutX,\r\n.animated.flipOutY {\r\n  animation-duration: .75s;\r\n}\r\n\r\n@keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n.bounce {\r\n  animation-name: bounce;\r\n  transform-origin: center bottom;\r\n}\r\n\r\n@keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flash {\r\n  animation-name: flash;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes pulse {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.pulse {\r\n  animation-name: pulse;\r\n}\r\n\r\n@keyframes rubberBand {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand {\r\n  animation-name: rubberBand;\r\n}\r\n\r\n@keyframes shake {\r\n  from, to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation-name: shake;\r\n}\r\n\r\n@keyframes swing {\r\n  20% {\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n.swing {\r\n  transform-origin: top center;\r\n  animation-name: swing;\r\n}\r\n\r\n@keyframes tada {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.tada {\r\n  animation-name: tada;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes wobble {\r\n  from {\r\n    transform: none;\r\n  }\r\n\r\n  15% {\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.wobble {\r\n  animation-name: wobble;\r\n}\r\n\r\n@keyframes jello {\r\n  from, 11.1%, to {\r\n    transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n.jello {\r\n  animation-name: jello;\r\n  transform-origin: center;\r\n}\r\n\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.bounceIn {\r\n  animation-name: bounceIn;\r\n}\r\n\r\n@keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInDown {\r\n  animation-name: bounceInDown;\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInLeft {\r\n  animation-name: bounceInLeft;\r\n}\r\n\r\n@keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInRight {\r\n  animation-name: bounceInRight;\r\n}\r\n\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInUp {\r\n  animation-name: bounceInUp;\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n.bounceOut {\r\n  animation-name: bounceOut;\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutDown {\r\n  animation-name: bounceOutDown;\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutLeft {\r\n  animation-name: bounceOutLeft;\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutRight {\r\n  animation-name: bounceOutRight;\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n  20% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutUp {\r\n  animation-name: bounceOutUp;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  animation-name: fadeIn;\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);*/\r\n    transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDown {\r\n  animation-name: fadeInDown;\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDownBig {\r\n  animation-name: fadeInDownBig;\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);*/\r\n    transform: translate3d(-50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeft {\r\n  animation-name: fadeInLeft;\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeftBig {\r\n  animation-name: fadeInLeftBig;\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);*/\r\n    transform: translate3d(50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRight {\r\n  animation-name: fadeInRight;\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRightBig {\r\n  animation-name: fadeInRightBig;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    /*-webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);*/\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  animation-name: fadeInUp;\r\n}\r\n\r\n@keyframes fadeInUpMenu {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    /*-webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);*/\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpMenu {\r\n  animation-name: fadeInUpMenu;\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpBig {\r\n  animation-name: fadeInUpBig;\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.fadeOut {\r\n  animation-name: fadeOut;\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDown {\r\n  animation-name: fadeOutDown;\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDownBig {\r\n  animation-name: fadeOutDownBig;\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeft {\r\n  animation-name: fadeOutLeft;\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeftBig {\r\n  animation-name: fadeOutLeftBig;\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRight {\r\n  animation-name: fadeOutRight;\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRightBig {\r\n  animation-name: fadeOutRightBig;\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUp {\r\n  animation-name: fadeOutUp;\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUpBig {\r\n  animation-name: fadeOutUpBig;\r\n}\r\n\r\n@keyframes flip {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) scale3d(.95, .95, .95);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n.animated.flip {\r\n  -webkit-backface-visibility: visible;\r\n  backface-visibility: visible;\r\n  animation-name: flip;\r\n}\r\n\r\n@keyframes flipInX {\r\n  from {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInX {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipInX;\r\n}\r\n\r\n@keyframes flipInY {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipInY;\r\n}\r\n\r\n@keyframes flipOutX {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutX {\r\n  animation-name: flipOutX;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n}\r\n\r\n@keyframes flipOutY {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipOutY;\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n  from {\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lightSpeedIn {\r\n  animation-name: lightSpeedIn;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lightSpeedOut {\r\n  animation-name: lightSpeedOut;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n@keyframes rotateIn {\r\n  from {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateIn {\r\n  animation-name: rotateIn;\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownLeft {\r\n  animation-name: rotateInDownLeft;\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownRight {\r\n  animation-name: rotateInDownRight;\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpLeft {\r\n  animation-name: rotateInUpLeft;\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpRight {\r\n  animation-name: rotateInUpRight;\r\n}\r\n\r\n@keyframes rotateOut {\r\n  from {\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOut {\r\n  animation-name: rotateOut;\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownLeft {\r\n  animation-name: rotateOutDownLeft;\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownRight {\r\n  animation-name: rotateOutDownRight;\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpLeft {\r\n  animation-name: rotateOutUpLeft;\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpRight {\r\n  animation-name: rotateOutUpRight;\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hinge {\r\n  animation-name: hinge;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.rollIn {\r\n  animation-name: rollIn;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n.rollOut {\r\n  animation-name: rollOut;\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.zoomIn {\r\n  animation-name: zoomIn;\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInDown {\r\n  animation-name: zoomInDown;\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInLeft {\r\n  animation-name: zoomInLeft;\r\n}\r\n\r\n@keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInRight {\r\n  animation-name: zoomInRight;\r\n}\r\n\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInUp {\r\n  animation-name: zoomInUp;\r\n}\r\n\r\n@keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.zoomOut {\r\n  animation-name: zoomOut;\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutDown {\r\n  animation-name: zoomOutDown;\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n.zoomOutLeft {\r\n  animation-name: zoomOutLeft;\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(2000px, 0, 0);\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n.zoomOutRight {\r\n  animation-name: zoomOutRight;\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutUp {\r\n  animation-name: zoomOutUp;\r\n}\r\n\r\n@keyframes slideInDown {\r\n  from {\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInDown {\r\n  animation-name: slideInDown;\r\n}\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInLeft {\r\n  animation-name: slideInLeft;\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInRight {\r\n  animation-name: slideInRight;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInUp {\r\n  animation-name: slideInUp;\r\n}\r\n\r\n@keyframes slideOutDown {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutDown {\r\n  animation-name: slideOutDown;\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutLeft {\r\n  animation-name: slideOutLeft;\r\n}\r\n\r\n@keyframes slideOutRight {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutRight {\r\n  animation-name: slideOutRight;\r\n}\r\n\r\n@keyframes slideOutUp {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutUp {\r\n  animation-name: slideOutUp;\r\n}\r\n\r\n.round-button{\r\n    float:none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-planlist/company-planlist.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <company-topbar></company-topbar>\n\n      <section class=\"planz\" id=\"section3\">\n        <div class=\"container\">\n          <h2>PLANS & PRICE</h2>\n          <div class=\"carry\">\n            <div class=\"plan wow fadeInRight\" data-wow-delay=\"0.2s\" *ngFor=\"let plan of plans\" [ngClass]=\"{'hilight': plan.is_best_value}\">\n              <h3 class=\"plan-title\">{{plan?.plan_name}}</h3>\n              <p class=\"plan-price\">&#8377;{{plan?.plan_price}} <span class=\"plan-unit\">per month</span></p>\n              <ul class=\"plan-features\">\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_projects}} </h4><span class=\"plan-feature-name\">Projects</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_members}} </h4><span class=\"plan-feature-name\">Members</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_modules}} </h4><span class=\"plan-feature-name\">Modules</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_tasks}} </h4><span class=\"plan-feature-name\">Tasks</span></li>\n              </ul>\n\n              <button type=\"submit\" (click)=\"upgrade(plan.id)\" class=\"btn round-button\">Upgrade</button>\n\n            </div>\n\n            <!-- <div class=\"plan hilight\">\n            <h3 class=\"plan-title\">Premium</h3>\n            <p class=\"plan-price\">&#8377;500 <span class=\"plan-unit\">per month</span></p>\n            <ul class=\"plan-features\">\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Projects</span></li>\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Members</span></li>\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Modules</span></li>\n            <li class=\"plan-feature\"><h4>100 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n            </ul>\n            \n          </div> -->\n\n            <!-- <div class=\"plan mr-lft wow fadeInLeft\" data-wow-delay=\"0.4s\">\n            <h3 class=\"plan-title\">Ultra</h3>\n            <p class=\"plan-price\">&#8377;1000 <span class=\"plan-unit\">per month</span></p>\n            <ul class=\"plan-features\">\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Projects</span></li>\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Members</span></li>\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Modules</span></li>\n            <li class=\"plan-feature\"><h4>120 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n            </ul>\n            \n          </div> -->\n          </div>\n        </div>\n      </section>\n      <br>\n      <br>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-planlist/company-planlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPlanlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyPlanlistComponent = (function () {
    function CompanyPlanlistComponent(config, adminService, routes) {
        this.config = config;
        this.adminService = adminService;
        this.routes = routes;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(config.siteUrl);
    }
    CompanyPlanlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('addPlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('bestPlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('deletePlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('updatePlan', function (data) {
            _this.getPlans();
        });
        this.getPlans();
    };
    CompanyPlanlistComponent.prototype.getPlans = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get all plans without default
        // Params        : 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 06-03-2018
        // Last Modified : 06-03-2018, Rinsha
        // Desc          : getAllplans without default
        this.adminService.getPlansWithoutDefault().subscribe(function (res) {
            // console.log(res);
            _this.plans = [];
            res.forEach(function (element) {
                // if(element.is_default_plan == false){
                _this.plans.push(element);
                // }
            });
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyPlanlistComponent.prototype.upgrade = function (id) {
        this.routes.navigate(['/upgrade', id]);
    };
    CompanyPlanlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-planlist',
            template: __webpack_require__("../../../../../src/app/components/company-planlist/company-planlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-planlist/company-planlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CompanyPlanlistComponent);
    return CompanyPlanlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project/company-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-project/company-project.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <!-- topbar-->\n        <company-topbar></company-topbar>\n\n        <!-- end topbar-->\n\n\n        <div class=\"user-dashboard\">\n\n          <div class=\"row\">\n            <!-----------------------------------------------------------------table-------------------------------------->\n\n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\">\n                  <div class=\"\">\n                    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                      width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div>\n                </div> -->\n\n\n                <div class=\"col-md-12 optionz\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"example-header\">\n                        <mat-form-field>\n                          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <div class=\"col-md-2 pull-right\">\n                      <div>\n                        <mat-form-field class=\"filter\">\n\n                          <mat-select (change)=\"getProject()\" [(value)]=\"selected\">\n                            <mat-option value=\"all\">All</mat-option>\n                            <mat-option value=\"In Progress\">In Progress</mat-option>\n                            <mat-option value=\"Drafted\">Drafted</mat-option>\n                            <mat-option value=\"Planned\">Planned</mat-option>\n                            <mat-option value=\"Completed\">Completed</mat-option>\n                            <mat-option value=\"Cancelled\">Cancelled</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"example-container mat-elevation-z8\">\n                  <mat-table [dataSource]=\"dataSource\" matSort>\n                    <ng-container matColumnDef=\"slno\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\n                      <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"project\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> PROJECT</mat-header-cell>\n                      <mat-cell *matCellDef=\"let row\"> {{row.project_name}}</mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"startdate\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTUAL/PLANNED START DATE</mat-header-cell>\n                      <!-- <mat-cell *matCellDef=\"let row\"> {{row.actual_start_date == null ? row.planned_start_date  : row.actual_start_date}}</mat-cell> -->\n                      <mat-cell *matCellDef=\"let row\"> {{row.actual_start_date == null ? row.planned_start_date == null ? '-' : row.planned_start_date ==\n                        null : row.actual_start_date}}</mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"enddate\">\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTUAL/PLANNED END DATE</mat-header-cell>\n                      <!-- <mat-cell *matCellDef=\"let row\"> {{row.actual_end_date === '' ? row.planned_end_date : row.actual_end_date}}</mat-cell> -->\n                      <mat-cell *matCellDef=\"let row\"> {{row.actual_end_date == null ? row.planned_end_date == null ? '-' : row.planned_end_date == null :\n                        row.actual_end_date}}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <mat-header-cell *matHeaderCellDef> ACTION</mat-header-cell>\n                      <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\n                        <mat-menu #menu=\"matMenu\">\n                          <button mat-menu-item  *ngIf=\"row.requirement_summary == null && row.pm_id == loggedin_id\" (click)=\"assign(row.id)\">\n                            <!-- <i class=\"fa fa-user\"></i> -->\n                            <mat-icon><i class=\"material-icons\">group</i></mat-icon>\n                            <span>Assign Team Head</span>\n                          </button>\n                          <button mat-menu-item *ngIf=\"row.requirement_summary !== null && row.is_approved == false && row.is_estimation_completed == false && row.pm_id == loggedin_id\" (click)=\"approve(row.id)\">\n                            <mat-icon><i class=\"material-icons\">assignment_turned_in</i></mat-icon>\n                            <span>Approve Estimation</span>\n                          </button>\n                          <button mat-menu-item *ngIf=\"row.requirement_summary !== null &&  row.is_approved == false && row.is_estimation_completed == true && row.project_cost == null && row.assignee_id == loggedin_id\" (click)=\"approveProject(row.id)\">\n                            <mat-icon><i class=\"material-icons\">assignment_turned_in</i></mat-icon>\n                            <span>Approve Project</span>\n                          </button>\n                          <button mat-menu-item *ngIf=\"row.requirement_summary !== null && row.is_approved == true && row.status == 'Drafted' && row.project_cost !== null && row.pm_id == loggedin_id\" (click)=\"approveProject(row.id)\">\n                            <mat-icon><i class=\"material-icons\">event_available</i></mat-icon>\n                            <span>Plan Project</span>\n                          </button>\n                          <button mat-menu-item *ngIf=\"row.is_approved == false && row.assignee_id == loggedin_id && row.status == 'Drafted' \" (click)=\"edit(row.id)\">\n                            <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\n                            <span>Edit</span>\n                          </button>\n                          <button mat-menu-item *ngIf=\"row.requirement_summary == null && row.is_approved == false && row.assignee_id == loggedin_id\" (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\"> \n                            <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\n                            <span>Delete</span>\n                          </button>\n                          <button mat-menu-item (click)=\"viewProject(row.id)\"> \n                            <mat-icon><i class=\"material-icons\">description</i></mat-icon>\n                            <span>View Project</span>\n                          </button>\n                        </mat-menu>\n                      </mat-cell>\n\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n                  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n                    <div class=\"col-md-4 col-md-offset-4\">\n                      <mat-toolbar class=\"back-color\">No item found!</mat-toolbar>\n                    </div>\n                  </div>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                </div>\n\n\n              </div>\n            </div>\n            <div class=\"add-button\">\n              <button type=\"button\" class=\"add-project\" (click)=\"open()\" data-backdrop=\"static\">+</button>\n            </div>\n\n             <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n      <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Delete </h4>\n            </div>\n            <!-- <div class=\"modal-header\"> -->\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n            <!-- </div> -->\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n\n\n              <h4 class=\"textalign\">Are you sure?</h4>\n\n            </div>\n\n            <div class=\"modal-footer\" style=\"text-align:center;\">\n              <button type=\"button\" (click)=\"deleteProject(Pid)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- ----------------------------------------------------------------------delete modal------------------------------------------------------------------\n          \n            <!-----------------------------------------------------------------end table-------------------------------------->\n          </div>\n        </div>\n\n      </div>\n      <!-- footer-->\n      <!-- <company-footer></company-footer> -->\n      <!-- end footer-->\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-project/company-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProjectComponent; });
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





var CompanyProjectComponent = (function () {
    function CompanyProjectComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'project', 'startdate', 'enddate', 'action'];
        this.notExist = false;
    }
    CompanyProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = "all";
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            _this.loggedin_id = _this.entity.id;
            // console.log(data);
        });
        // -----------------------------------End------------------------------------------
        this.getProject();
    };
    CompanyProjectComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    CompanyProjectComponent.prototype.getProject = function () {
        var _this = this;
        // console.log(this.selected);
        this.notExist = false;
        // ---------------------------------Start-------------------------------------------
        // Function      : get all projects by status
        // Params        : 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : getAllProjectByStatus 
        this.companyService.getAllProjectByStatus(this.selected).subscribe(function (data) {
            // console.log(data);
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
            // console.log(this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        // ---------------------------------End-------------------------------------------
        // // ---------------------------------Start-------------------------------------------
        // // Function      : get all projects
        // // Params        : 
        // // Returns       : 
        // // Author        : Rinsha
        // // Date          : 07-03-2018
        // // Last Modified : 07-03-2018, Rinsha
        // // Desc          : getAllProjects 
        // this.companyService.getAllProject().subscribe(data => {
        //   // console.log(data);
        //   if (data.length == 0) {
        //     this.notExist = true;
        //   }
        //   this.dataSource = new MatTableDataSource(data);
        //   // console.log(this.dataSource);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // });
        // // ---------------------------------End-------------------------------------------
    };
    CompanyProjectComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyProjectComponent.prototype.open = function () {
        this.routes.navigate(['/add-project']);
    };
    CompanyProjectComponent.prototype.assign = function (id) {
        this.routes.navigate(['/assign-project', id]);
    };
    CompanyProjectComponent.prototype.edit = function (id) {
        this.routes.navigate(['/edit-project', id]);
    };
    CompanyProjectComponent.prototype.approve = function (id) {
        this.routes.navigate(['/approve-estimation', id]);
    };
    CompanyProjectComponent.prototype.approveProject = function (id) {
        this.routes.navigate(['/approve-project', id]);
    };
    CompanyProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        console.log(id);
        // ---------------------------------Start-------------------------------------------
        // Function      : delete project
        // Params        : id 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : to delete a project
        this.companyService.deleteProject(id).subscribe(function (data2) {
            if (data2.success == true) {
                var snackBarRef = _this.snackBar.open(data2.msg, '', {
                    duration: 2000
                });
                _this.getProject();
            }
            else {
                var snackBarRef = _this.snackBar.open(data2.msg, '', {
                    duration: 2000
                });
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyProjectComponent.prototype.getId = function (id) {
        this.Pid = id;
    };
    CompanyProjectComponent.prototype.viewProject = function (id) {
        this.routes.navigate(['/view-project', id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyProjectComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyProjectComponent.prototype, "sort", void 0);
    CompanyProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-project',
            template: __webpack_require__("../../../../../src/app/components/company-project/company-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-project/company-project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyProjectComponent);
    return CompanyProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drp2 .dropdown-menu{padding:0;right:-3%;left:inherit;max-width: 297px;}\r\n.drp2 .dropdown-menu li a{padding:15px 20px;}\r\n.drp2 .navbar-content{text-align:left;}\r\n.drp2 .dropdown-menu li{width:100%;}\r\n.drp2 .dropdown-menu > li > a:hover p{color:#fff !important;}\r\n.dropdown-menu{margin-bottom:0;}\r\nheader .dropdown-menu{top: 207%;}\r\n.dropdown-menu p {\r\n    margin: 0 0 0px;\r\n}\r\n.drp2 .dropdown-menu h4{margin-bottom: 2px;\r\n    color: #000;\r\n    font-weight: 500;\r\n    font-family: arial;}\r\n.media-heading{font-size:16px;}\r\n.closbtn{\r\n    border-radius: 50%;\r\n    height: 15px;\r\n    width: 15px;\r\n    padding-top: 0; \r\n    margin-right: 12px;\r\n    line-height: 13px;\r\n    font-size: 9px;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    background: #fe6a07;\r\n    border: none;\r\n}\r\n.dropdown-menu .divider {\r\n    height: 1px;\r\n    margin: 0px 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n}\r\n.head{background: #FFFFFF;color:#fff !important;}\r\n.head>a{color:#686868 !important;}\r\n.content{\r\n    text-decoration: none;\r\n}\r\n.dropdown-menu>li>a:hover h4{color:#fff;}\r\n.drp2 .dropdown-menu > li > a{white-space:normal !important;}\r\n.drp2 .dropdown-menu{    min-width: 324px;}\r\n.drp2 p{line-height: 18px;margin-top: 10px;}\r\n.drp2 li{padding: 0px 0;}\r\n.media-heading {font-size: 15px;\r\ncolor: #8a8a8a;\r\nfont-weight: 600;    margin-top: 2px;}\r\n.drp2 li a{padding:7px 0px !important;color:#909090;}\r\n.ng-star-inserted:hover{background:#f3f3f3;}\r\n.ng-star-inserted{padding: 10px 20px;}\r\n.drp2 h4{padding: 0px 20px;    font-weight: 700 !important;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    color:#ffffff !important;\r\n    margin-top:0px;\r\n    margin-bottom:0;\r\n    background: #919aa0;\r\n    padding: 14px 20px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <header>\n\n        <div class=\"col-md-5 pull-right\">\n            <div class=\"header-rightside\">\n                <ul class=\"list-inline header-top pull-right\">\n                    <li *ngIf=\"upgradeBtnShow\" class=\"\"><a [routerLink]=\"['/planlist']\" class=\"add-project\">Upgrade</a></li>\n                    <li class=\"\"><a [routerLink]=\"['/add-project']\" class=\"add-project\">Add Project</a></li>\n\n                    <li class=\"dropdown drp2\">\n                        <a class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                            <span class=\"label label-primary\">{{count}}</span>\n\n                        </a>\n\n                        <ul class=\"dropdown-menu\">\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>New Project Notification</h4>\n                                    <div *ngFor=\"let item of project\">\n                                        <a (click)=\"closeNotif(item.id)\" [routerLink]=\"['/assign-project', item.id]\">\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif(item.id)\">x</button>\n                                            </div>\n                                            <h5 class=\"media-heading\">{{item.project_name}}</h5>\n                                            <p><a class=\"content\">You are assignd for a new project. Click here to assign team heads.</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>Estimation Approval Notification</h4>\n                                    <div *ngFor=\"let list of estimationApproval\">\n                                        <a (click)=\"closeNotif2(list.id)\" [routerLink]=\"['/approve-estimation', list.tbl_project.id]\">\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif2(list.id)\">x</button>\n                                            </div>\n                                            <h5 class=\"media-heading\">{{list.tbl_project.project_name}}</h5>\n                                            <p><a class=\"content\">Click here to approve the Estimation</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>Estimation Resubmit Notification</h4>\n                                    <div *ngFor=\"let item1 of resubmitEstimation\">\n                                        <a (click)=\"closeNotif(item1.id)\" [routerLink]=\"['/approve-estimation', item1.id]\">\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif(item1.id)\">x</button>\n                                            </div>\n                                            <h5 class=\"media-heading\">{{item1.project_name}}</h5>\n                                            <p><a class=\"content\">Click here to re-estimate the project.</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>Project Approve Notification</h4>\n                                    <div *ngFor=\"let item2 of approveProject\">\n                                        <a (click)=\"closeNotif3(item2.id)\" [routerLink]=\"['/approve-project', item2.id]\">\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif3(item2.id)\">x</button>\n                                            </div>\n                                            <h5 class=\"media-heading\">{{item2.project_name}}</h5>\n                                            <p><a class=\"content\">Click here to approve the project.</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>Project Plan Notification</h4>\n                                    <div *ngFor=\"let item3 of planProject\">\n                                        <a (click)=\"closeNotif4(item3.id)\" [routerLink]=\"['/project-planning', item3.id]\">\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif4(item3.id)\">x</button>\n                                            </div>\n                                            <h5 class=\"media-heading\">{{item3.project_name}}</h5>\n                                            <p><a class=\"content\">Click here to plan the project.</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <div *ngIf=\"count == 0\">\n                                <h5 style=\"color : red; margin-left:20px; \">No Data</h5>\n                            </div>\n                        </ul>\n\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                            <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <div class=\"navbar-content\">\n                                    <span>JS Krishna</span>\n                                    <p class=\"text-muted small\">\n                                        me@jskrishna.com\n                                    </p>\n                                    <div class=\"divider\">\n                                    </div>\n                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function CompanyTopbarComponent(config, companyService, snackBar) {
        this.config = config;
        this.companyService = companyService;
        this.snackBar = snackBar;
        this.count = 0;
        this.upgradeBtnShow = true;
        this.assignHeadCount = 0;
        this.approveEstimationCount = 0;
        this.approveProjectCount = 0;
        this.planProjectCount = 0;
        this.resubmitEstimationCount = 0;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(config.siteUrl);
    }
    CompanyTopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
            if (_this.entity.role_id == 3) {
                _this.upgradeBtnShow = false;
            }
        });
        // -----------------------------------End------------------------------------------
        this.count = 0;
        this.assignHeadNotification();
        this.socket.on('addProject', function (data) {
            _this.assignHeadNotification();
        });
        this.approveEstimationNotification();
        this.socket.on('approveEstimation', function (data) {
            _this.approveEstimationNotification();
        });
        this.approveProjectNotification();
        this.socket.on('approveProject', function (data) {
            _this.approveProjectNotification();
        });
        this.planProjectNotification();
        this.socket.on('planProject', function (data) {
            _this.planProjectNotification();
        });
        this.resubmitEstimationNotification();
        this.socket.on('reEstimateProject', function (data) {
            _this.resubmitEstimationNotification();
        });
    };
    CompanyTopbarComponent.prototype.assignHeadNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get assignHeadNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
        this.companyService.assignHeadNotification().subscribe(function (res) {
            _this.project = res;
            _this.assignHeadCount = 0;
            _this.assignHeadCount = _this.project.length;
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif = function (id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : close notification when pm sees the assign team head notification
        this.companyService.closeNotif(id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.assignHeadNotification();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.approveEstimationNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get approveEstimationNotification
        // Params        : 
        // Returns       : notification data
        // Author        : Rinsha
        // Date          : 14-03-2018
        // Last Modified : 14-03-2018, Rinsha
        // Desc          : check whether the loggedin project manager have pending estimation approval notification
        this.companyService.approveEstimationNotification().subscribe(function (res) {
            _this.estimationApproval = res;
            _this.approveEstimationCount = 0;
            _this.approveEstimationCount = _this.estimationApproval.length;
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif2 = function (notif_id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of estimation approval
        // Params        : notification id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 14-03-2018
        // Last Modified : 14-03-2018, Rinsha
        // Desc          : close notification when pm sees the estimation approval notification
        this.companyService.closeNotif2(notif_id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.approveEstimationNotification();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.approveProjectNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get apprroveProjectNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : check whether the loggedin company admin have any project to approves
        this.companyService.approveProjectNotification().subscribe(function (res) {
            // console.log(res)
            _this.approveProject = res;
            _this.approveProjectCount = 0;
            _this.approveProjectCount = _this.approveProject.length;
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif3 = function (p_id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of project approval
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : close notification when pm sees the project approval notification
        this.companyService.closeNotif3(p_id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.approveProjectNotification();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.planProjectNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get planProjectNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 20-03-2018
        // Last Modified : 20-03-2018, Rinsha
        // Desc          : check whether the loggedin pm have any project to plan
        this.companyService.planProjectNotification().subscribe(function (res) {
            // console.log(res)
            _this.planProject = res;
            _this.planProjectCount = 0;
            _this.planProjectCount = _this.planProject.length;
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif4 = function (p_id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of project plan
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : close notification when pm sees the project plan notification
        this.companyService.closeNotif4(p_id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.planProjectNotification();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.resubmitEstimationNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get resubmitEstimationNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 20-03-2018
        // Last Modified : 20-03-2018, Rinsha
        // Desc          : check whether the loggedin pm have any estimation to resubmit
        this.companyService.resubmitEstimationNotification().subscribe(function (res) {
            // console.log(res)
            _this.resubmitEstimation = res;
            _this.resubmitEstimationCount = 0;
            _this.resubmitEstimationCount = _this.resubmitEstimation.length;
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.refresh = function () {
        this.count = 0;
        this.count = this.assignHeadCount + this.approveEstimationCount + this.approveProjectCount + this.planProjectCount + this.resubmitEstimationCount;
    };
    CompanyTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-topbar',
            template: __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], CompanyTopbarComponent);
    return CompanyTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-upgrade/company-upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-upgrade/company-upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <company-topbar></company-topbar>\n      <br>\n      <br>\n      <div class=\"container\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Payment Method</div>\n          <div class=\"panel-body\">\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.cardnum\" name=\"cardnum\" autofocus placeholder=\"Card Number\" required formControlName=\"cardnumValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.cardname\" name=\"cardname\" placeholder=\"Name on Card\" required formControlName=\"cardnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input type=\"number\" matInput [(ngModel)]=\"payment.cvv\" min=\"1\" max=\"3\" name=\"cvv\" placeholder=\"CVV\" required formControlName=\"cvvValidation\">\n            </mat-form-field>\n            <br>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Billing Details</div>\n          <div class=\"panel-body\">\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.fname\" name=\"fname\" placeholder=\"First Name\" required formControlName=\"fnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.lname\" name=\"lname\" placeholder=\"Last Name\" required formControlName=\"lnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.addr\" name=\"addr\" placeholder=\"Address\" required formControlName=\"addrValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.no\" name=\"no\" placeholder=\"Phone Number\" required formControlName=\"noValidation\">\n            </mat-form-field>\n            <br>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Review and Confirm</div>\n          <div class=\"panel-body\">\n            <table>\n              <tr>\n                <td>Plan </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_name}}</b></td>\n              </tr>\n              <br>\n              <tr>\n                <td>No. of Months </td>\n                <td>:</td>\n                <td>\n                  <mat-form-field [formGroup]=\"formGroup\"><input type=\"number\" min=\"1\" matInput [(ngModel)]=\"payment.no_months\" name=\"no_months\" required formControlName=\"no_monthsValidation\">\n                  </mat-form-field>\n                </td>\n              </tr>\n              <br>\n              <tr>\n                <td>Price </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_price}}</b></td>\n              </tr>\n              <br>\n              <tr>\n                <td>Amount </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_price * payment.no_months}} </b></td>\n              </tr>\n              <br>\n            </table>\n\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button type=\"submit\" class=\"btn round-button\" (click)=\"confirm(plan?.id)\">Confirm</button>\n              \n              </div>\n            \n             \n              <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n                  <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                    <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                    />\n                  </path>\n                </svg>\n              </div> -->\n\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-upgrade/company-upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyUpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyUpgradeComponent = (function () {
    function CompanyUpgradeComponent(companyService, _formBuilder, routes, route, snackBar) {
        this.companyService = companyService;
        this._formBuilder = _formBuilder;
        this.routes = routes;
        this.route = route;
        this.snackBar = snackBar;
        this.payment = {
            cardnum: '',
            cardname: '',
            cvv: '',
            fname: '',
            lname: '',
            addr: '',
            no: '',
            no_months: ''
        };
    }
    CompanyUpgradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.plan_id = params.id;
            // ---------------------------------Start-------------------------------------------
            // Function      : get plan by id
            // Params        : id
            // Returns       : plan
            // Author        : Rinsha
            // Date          : 06-03-2018
            // Last Modified : 06-03-2018, Rinsha
            // Desc          : getplan
            _this.companyService.getPlan(_this.plan_id).subscribe(function (res) {
                _this.plan = res;
            });
            // ---------------------------------End-------------------------------------------
        });
        this.formGroup = this._formBuilder.group({
            cardnumValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            cardnameValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            cvvValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            fnameValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            lnameValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            addrValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            noValidation: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
            no_monthsValidation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
        });
    };
    CompanyUpgradeComponent.prototype.confirm = function (id) {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : upgrade
        // Params        : data from form
        // Returns       : message
        // Author        : Rinsha
        // Date          : 06-03-2018
        // Last Modified : 06-03-2018, Rinsha
        // Desc          : upgrade
        this.companyService.upgrade(id, this.payment).subscribe(function (res) {
            if (res.success == true) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
                // this.routes.navigate(['/dashboard']);
            }
            else {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyUpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-upgrade',
            template: __webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], CompanyUpgradeComponent);
    return CompanyUpgradeComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'email-verification',
            template: __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{overflow-x:inherit;background:#fff ;}\r\n.navbar-nav > li{float:left;}\r\n.navbar-fixed-top{    background: rgba(255, 119, 0, 0.72);}\r\n.banner{ background: url(" + escape(__webpack_require__("../../../../../src/assets/images/banner.jpg")) + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n      width: 100%;\r\n    min-height: 580px;\r\n\tposition:relative;\r\n  }\r\n .navbar-brand {\r\n    float: left;\r\n    padding: 10.5px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    height: 78px;\r\n}\r\n/* ./assets/images/banner.jpg */\r\n.navbar-toggle {\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 15px;\r\n    padding: 9px 10px;\r\n    margin-top: 10.5px;\r\n    margin-bottom: 10.5px;\r\n    background-color: #d06000;\r\n    /* background-image: none; */\r\n    border: 1px solid transparent;\r\n    border-radius: 13px;\r\n}\r\n.about p{    color: #a5a0a0;    line-height: 24px;}\r\n.paddtop{padding-top:4%;}\r\n.navbar-left{      padding-top: 4%;}\r\n.nav > li{margin-left: 9px;}\r\n.btn-login{background:none;border-radius:40px;border:3px solid #fff;color:#fff;font-weight:bold;margin-left:4px;}\r\n.btn-login:hover{color:#fff;opacity:0.6;}\r\n.nav > li > a:hover{\r\n    text-decoration: none;\r\n    background-color: #fdaf00;\r\n    color: #fff;\r\n    border-radius: 40px;\r\n\tpadding-top:10px;\r\n\tpadding-bottom:10px;\r\n}\r\n.nav > li > a:focus{text-decoration: none;\r\n    background-color: #fdaf00;\r\n    color: #fff;\r\n    border-radius: 40px;\r\n\tpadding-top:10px;\r\n\tpadding-bottom:10px;\r\n}\r\n.navbar-nav > li > a {\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n}\r\n  .planz{ background: url(" + escape(__webpack_require__("../../../../../src/assets/images/bg.jpg")) + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n      width: 100%;\r\n   min-height: 327px;\r\n\tposition:relative;\r\n  }\r\n  .carry {\r\n    position: absolute;\r\n    z-index: 100;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n    max-width: 873px;\r\n    top: 46%;\r\n}\r\na {\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n}\r\n\r\n.device{max-width:806px;width:100%;background: url(" + escape(__webpack_require__("../../../../../src/assets/images/device.png")) + ") no-repeat;background-size:100%;min-height:467px;margin:0 auto;    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n       bottom: -15%;}\r\n.left-c{text-align:right;color:#fff;    padding-top: 23%;padding-right: 4%;}\r\n.left-r{text-align:left;color:#fff;    padding-top: 23%;padding-left: 6%;}\r\n.about{padding:11em 0 3em 0;}\r\n.shade {\r\n   box-shadow: 0px -2px 77px 0px rgba(0, 0, 0, 0.09);\r\n\t    padding: 20px;\r\n}\r\n.features h3{    padding-top: 17px;\r\n    font-size: 18px;\r\n    color: #6f300c;\r\n    margin-top: 0;\r\n    font-weight: bold;}\r\n.features p{    \r\n    font-size: 12px;\r\n    color: #989898;\r\n    line-height: 19px;}\r\n.plans {\r\n  width: 836px;\r\n  margin: 50px auto;\r\n  overflow: hidden;\r\n}\r\n\r\n  .plan {\r\n    float: left;\r\n    max-width: 276px;\r\n    margin: 20px 2px;\r\n    padding: 15px 0px;\r\n    text-align: center;\r\n    background: white;\r\n    background-clip: padding-box;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-shadow: 14px 26px 67px #0000002e;\r\n    -webkit-box-shadow: 14px 26px 67px #0000002e;\r\n    -moz-box-shadow: 14px 26px 67px #0000002e;\r\n    margin-right: -8px;\r\n}\r\n.banner h3{font-size: 20px;\r\n    font-weight: normal;\r\n    line-height: 27px;}\r\n.banner p{    color: #fdd3a7;}\r\n.hilight {\r\n  max-width: 309px;\r\n  padding: 28px 0px;\r\n  position: relative;\r\n  z-index: 100;\r\n  left: 0%;\r\n  top: -33px;\r\n}\r\n\r\n.features{padding:2em 0 6em 0;}\r\n.plan-title {\r\n      margin-bottom: 12px;\r\n    font-size: 22px;\r\n    color: #424242;\r\n}\r\n.mr-lft{    margin-left: -8%;}\r\n.plan-price {\r\n  margin-bottom: 20px;\r\n  line-height: 1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n    color: #f7752a;\r\n}\r\n\r\n.plan-unit {\r\n  display: block;\r\n  margin-top: 5px;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  color: #aaa;\r\n}\r\n\r\n.plan-features {\r\n  width: 100%;\r\n  margin:0 auto;\r\n  padding: 0;\r\n \r\n  text-align: left;\r\n}\r\n\r\n.plan-feature {\r\n    border-top: 1px solid #e5ded6;\r\n    text-align: center;\r\n        padding: 9px 0;\r\n\t    list-style-type: none;\r\n    \r\n}\r\n.plan-feature h4{text-align: center;\r\n    padding: 17px 0;\r\n    list-style-type: none;\r\n    font-size: 32px;\r\n    line-height: 39px;\r\n    font-weight: bold;\r\n    color: #9f9f9f;\r\n\t    padding: 0;\r\n    margin: 0;\r\n}\r\n.hilight h4{    color: #767676 !important;\r\n    font-size: 39px;\r\n    line-height: 47px;}\r\n.hilight .plan-price{font-size:48px;}\r\n\r\n.plan-feature + .plan-feature {\r\n  margin-top: 5px;\r\n}\r\n\r\n.plan-feature-unit {\r\n  margin-left: 2px;\r\n  font-size: 16px;\r\n}\r\n\r\n.plan-feature-name {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  color: #aaa;\r\n}\r\n\r\n.plan-button {\r\n  position: relative;\r\n  display: block;\r\n  line-height: 40px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\r\n  background: #fd935c;\r\n  border-bottom: 2px solid #cf7e3b;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n  border-radius: 4px;\r\n}\r\n.hilight .plan-feature-name {\r\nfont-size: 15px;}\r\n.planz h2{color:#fff;text-align:center;    padding-top: 4%;}\r\nfooter{width:100%;padding:10px 0;background:#ccc;color:#fff;text-align:left;font-size:13px;    margin-top: 28em;}\r\n\r\n\r\n@media only screen and (max-width :1024px) {\r\n.device{    max-width: 672px;bottom: -20%;}\r\n\r\n}\r\n\r\n@media only screen and (max-width : 768px) {\r\n\t.left-r{display:none;}\r\n\t.banner p{text-align:center;}\r\n\t.device{    max-width: 617px;bottom: -41%;}\r\n\t.banner h3{text-align:center;}\r\n\t.nav > li > a{padding: 10px 6px;}\r\n\t.mr-lft {\r\n    margin-left: -14%;\r\n    }\r\n\t.hilight{left: -7%;}\r\n\t\r\n}\r\n@media only screen and (max-width : 767px) {\r\n.plan { max-width: 253px;}\t\r\n.mr-lft {\r\n    margin-left: -17%;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n\r\n.img-responsive{margin:0 auto;}\r\n.features h3{text-align:center;}\r\n.features p{text-align:center;}\r\n.banner{    min-height: 415px;}\r\n.device {\r\n    max-width: 344px;\r\n    bottom: -82%;\r\n\t    min-height: 427px;\r\n}\r\n.plan{     max-width: 152px;}\r\n.left-c{    padding-top: 31%;}\r\n.mr-lft {\r\n    margin-left: -26%;\r\n}\r\n.hilight {\r\n    left: -13%;\r\n}\r\n}\r\n@media only screen and (max-width : 360px) {\r\n\t\r\n\t.mr-lft {\r\n    margin-left: -30%;\r\n    }\r\n\t.hilight {\r\n    left: -15%;\r\n}\r\n\t\r\n}\r\n\r\n/* @charset \"UTF-8\"; */\r\n\r\n/*!\r\nAnimate.css - http://daneden.me/animate\r\nLicensed under the MIT license - http://opensource.org/licenses/MIT\r\n\r\nCopyright (c) 2015 Daniel Eden\r\n*/\r\n\r\n.animated {\r\n  animation-duration: 1s;\r\n  animation-fill-mode: both;\r\n}\r\n.animated-fast {\r\n  animation-duration: .5s;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.animated.infinite {\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.animated.hinge {\r\n  animation-duration: 2s;\r\n}\r\n\r\n.animated.bounceIn,\r\n.animated.bounceOut {\r\n  animation-duration: .75s;\r\n}\r\n\r\n.animated.flipOutX,\r\n.animated.flipOutY {\r\n  animation-duration: .75s;\r\n}\r\n\r\n@keyframes bounce {\r\n  from, 20%, 53%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    transform: translate3d(0,0,0);\r\n  }\r\n\r\n  40%, 43% {\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0,-4px,0);\r\n  }\r\n}\r\n\r\n.bounce {\r\n  animation-name: bounce;\r\n  transform-origin: center bottom;\r\n}\r\n\r\n@keyframes flash {\r\n  from, 50%, to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flash {\r\n  animation-name: flash;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes pulse {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.pulse {\r\n  animation-name: pulse;\r\n}\r\n\r\n@keyframes rubberBand {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    transform: scale3d(.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    transform: scale3d(1.05, .95, 1);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand {\r\n  animation-name: rubberBand;\r\n}\r\n\r\n@keyframes shake {\r\n  from, to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%, 30%, 50%, 70%, 90% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%, 40%, 60%, 80% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation-name: shake;\r\n}\r\n\r\n@keyframes swing {\r\n  20% {\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n.swing {\r\n  transform-origin: top center;\r\n  animation-name: swing;\r\n}\r\n\r\n@keyframes tada {\r\n  from {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%, 20% {\r\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%, 50%, 70%, 90% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%, 60%, 80% {\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.tada {\r\n  animation-name: tada;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes wobble {\r\n  from {\r\n    transform: none;\r\n  }\r\n\r\n  15% {\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.wobble {\r\n  animation-name: wobble;\r\n}\r\n\r\n@keyframes jello {\r\n  from, 11.1%, to {\r\n    transform: none;\r\n  }\r\n\r\n  22.2% {\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n.jello {\r\n  animation-name: jello;\r\n  transform-origin: center;\r\n}\r\n\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  20% {\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    transform: scale3d(.97, .97, .97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.bounceIn {\r\n  animation-name: bounceIn;\r\n}\r\n\r\n@keyframes bounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInDown {\r\n  animation-name: bounceInDown;\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInLeft {\r\n  animation-name: bounceInLeft;\r\n}\r\n\r\n@keyframes bounceInRight {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.bounceInRight {\r\n  animation-name: bounceInRight;\r\n}\r\n\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInUp {\r\n  animation-name: bounceInUp;\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    transform: scale3d(.9, .9, .9);\r\n  }\r\n\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n}\r\n\r\n.bounceOut {\r\n  animation-name: bounceOut;\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutDown {\r\n  animation-name: bounceOutDown;\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutLeft {\r\n  animation-name: bounceOutLeft;\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutRight {\r\n  animation-name: bounceOutRight;\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n  20% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutUp {\r\n  animation-name: bounceOutUp;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  animation-name: fadeIn;\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);*/\r\n    transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDown {\r\n  animation-name: fadeInDown;\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInDownBig {\r\n  animation-name: fadeInDownBig;\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);*/\r\n    transform: translate3d(-50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeft {\r\n  animation-name: fadeInLeft;\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInLeftBig {\r\n  animation-name: fadeInLeftBig;\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    /*-webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);*/\r\n    transform: translate3d(50px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRight {\r\n  animation-name: fadeInRight;\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInRightBig {\r\n  animation-name: fadeInRightBig;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    /*-webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);*/\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  animation-name: fadeInUp;\r\n}\r\n\r\n@keyframes fadeInUpMenu {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    /*-webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);*/\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpMenu {\r\n  animation-name: fadeInUpMenu;\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.fadeInUpBig {\r\n  animation-name: fadeInUpBig;\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.fadeOut {\r\n  animation-name: fadeOut;\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 40px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDown {\r\n  animation-name: fadeOutDown;\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDownBig {\r\n  animation-name: fadeOutDownBig;\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeft {\r\n  animation-name: fadeOutLeft;\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeftBig {\r\n  animation-name: fadeOutLeftBig;\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRight {\r\n  animation-name: fadeOutRight;\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRightBig {\r\n  animation-name: fadeOutRightBig;\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUp {\r\n  animation-name: fadeOutUp;\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUpBig {\r\n  animation-name: fadeOutUpBig;\r\n}\r\n\r\n@keyframes flip {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) scale3d(.95, .95, .95);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n.animated.flip {\r\n  -webkit-backface-visibility: visible;\r\n  backface-visibility: visible;\r\n  animation-name: flip;\r\n}\r\n\r\n@keyframes flipInX {\r\n  from {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInX {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipInX;\r\n}\r\n\r\n@keyframes flipInY {\r\n  from {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipInY;\r\n}\r\n\r\n@keyframes flipOutX {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutX {\r\n  animation-name: flipOutX;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n}\r\n\r\n@keyframes flipOutY {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  animation-name: flipOutY;\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n  from {\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lightSpeedIn {\r\n  animation-name: lightSpeedIn;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lightSpeedOut {\r\n  animation-name: lightSpeedOut;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n@keyframes rotateIn {\r\n  from {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateIn {\r\n  animation-name: rotateIn;\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownLeft {\r\n  animation-name: rotateInDownLeft;\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownRight {\r\n  animation-name: rotateInDownRight;\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpLeft {\r\n  animation-name: rotateInUpLeft;\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpRight {\r\n  animation-name: rotateInUpRight;\r\n}\r\n\r\n@keyframes rotateOut {\r\n  from {\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: center;\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOut {\r\n  animation-name: rotateOut;\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownLeft {\r\n  animation-name: rotateOutDownLeft;\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownRight {\r\n  animation-name: rotateOutDownRight;\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n  from {\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: left bottom;\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpLeft {\r\n  animation-name: rotateOutUpLeft;\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n  from {\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform-origin: right bottom;\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpRight {\r\n  animation-name: rotateOutUpRight;\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%, 60% {\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%, 80% {\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hinge {\r\n  animation-name: hinge;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.rollIn {\r\n  animation-name: rollIn;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n.rollOut {\r\n  animation-name: rollOut;\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.zoomIn {\r\n  animation-name: zoomIn;\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInDown {\r\n  animation-name: zoomInDown;\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInLeft {\r\n  animation-name: zoomInLeft;\r\n}\r\n\r\n@keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInRight {\r\n  animation-name: zoomInRight;\r\n}\r\n\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomInUp {\r\n  animation-name: zoomInUp;\r\n}\r\n\r\n@keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(.3, .3, .3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.zoomOut {\r\n  animation-name: zoomOut;\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutDown {\r\n  animation-name: zoomOutDown;\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(-2000px, 0, 0);\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n.zoomOutLeft {\r\n  animation-name: zoomOutLeft;\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale(.1) translate3d(2000px, 0, 0);\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n.zoomOutRight {\r\n  animation-name: zoomOutRight;\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\r\n    transform-origin: center bottom;\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\r\n  }\r\n}\r\n\r\n.zoomOutUp {\r\n  animation-name: zoomOutUp;\r\n}\r\n\r\n@keyframes slideInDown {\r\n  from {\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInDown {\r\n  animation-name: slideInDown;\r\n}\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInLeft {\r\n  animation-name: slideInLeft;\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInRight {\r\n  animation-name: slideInRight;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInUp {\r\n  animation-name: slideInUp;\r\n}\r\n\r\n@keyframes slideOutDown {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutDown {\r\n  animation-name: slideOutDown;\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutLeft {\r\n  animation-name: slideOutLeft;\r\n}\r\n\r\n@keyframes slideOutRight {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutRight {\r\n  animation-name: slideOutRight;\r\n}\r\n\r\n@keyframes slideOutUp {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutUp {\r\n  animation-name: slideOutUp;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <!DOCTYPE html>\n<html>\n<head>\n<title>Taskit</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n<link rel=\"stylesheet\" href=\"css/bootstrap.css\">\n\n<link href=\"css/homepage.css\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"css/animate.css\">\n<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\n<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\"> -->\n\n<!-- </head> -->\n<body class=\"home\">\n\t\t<nav class=\"navbar navbar-trans navbar-fixed-top\" role=\"navigation\">\n\t\t\t  <div class=\"container\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapsible\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t  </button>\n\t\t\t\t  <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/logo.png\"/></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"navbar-collapse collapse pull-right\" id=\"navbar-collapsible\">\n\t\t\t\t  <ul class=\"nav navbar-nav navbar-left\">\n\t\t\t\t\t<li><a href=\"#section1\">Home</a></li>\n\t\t\t\t\t<li><a href=\"#section2\">About Us</a></li>\n\t\t\t\t\t<li><a href=\"#section3\">Facilities</a></li>\n\t\t\t\t\t<li><a href=\"#section4\">Plans & Price</a></li>\n\t\t\t\t\t<li><input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\"> </li>\n\t\t\t\t\t<li><input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Signup\"> </li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</nav>\n\t\t\t\n\n\t\t\t<section class=\"banner\" id=\"section1\">\n\t\t\t\t  \n\t\t\t\t \n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3 left-c wow fadeInRight\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t\t<p><img src=\"./assets/images/logo2.png\"/></p>\n\t\t\t\t\t\t\t<h3>helps over 10 million people feel more in control of their lives</h3>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3 left-r pull-right wow fadeInLeft\" data-wow-delay=\"0.5s\">\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t    </div><!--/container-->\n\t\t\t\t<div class=\"device wow fadeInLeft\" data-wow-delay=\"0.2s\"></div>\n\t\t\t</section>\n\n\t\t\t<section class=\"about\" id=\"section2\">\n\t\t\t  <div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 wow fadeInRight\">\n\t\t\t\t\t\t<img src=\"./assets/images/about.jpg\" class=\"img-responsive\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-6 paddtop wow fadeInLeft\">\n\t\t\t\t\t\t<h2>WHAT WE DO</h2>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</section>\n\t\t\t\n\t\t\t\n\n\t\t\t<section class=\"features\" id=\"section3\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4\">\n\t\t\t\t\t\t  <div class=\"shade wow fadeInRight\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/img1.jpg\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<h3>Facilities</h3>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean </p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 wow fadeInDown\">\n\t\t\t\t\t\t  <div class=\"shade\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/img2.jpg\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<h3>Facilities</h3>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 wow fadeInLeft\">\n\t\t\t\t\t\t  <div class=\"shade\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/img3.jpg\" class=\"img-responsive\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<h3>Facilities</h3>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>  \n\t\t\t    </div>\n\t\t\t</section>\n\t\t\t\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\n\n\t\t\t<section class=\"planz\" id=\"section3\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t<h2>PLANS & PRICE</h2>\n\t\t\t\t\t<div class=\"carry\">\n\t\t\t\t\t    <div class=\"plan wow fadeInRight\" data-wow-delay=\"0.2s\" *ngFor=\"let plan of plans\" [ngClass]=\"{'hilight': plan.is_best_value}\">\n\t\t\t\t\t\t  <h3 class=\"plan-title\">{{plan?.plan_name}}</h3>\n\t\t\t\t\t\t  <p class=\"plan-price\">&#8377;{{plan?.plan_price}} <span class=\"plan-unit\">per month</span></p>\n\t\t\t\t\t\t  <ul class=\"plan-features\">\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>{{plan?.no_projects}} </h4><span class=\"plan-feature-name\">Projects</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>{{plan?.no_members}} </h4><span class=\"plan-feature-name\">Members</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>{{plan?.no_modules}} </h4><span class=\"plan-feature-name\">Modules</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>{{plan?.no_tasks}} </h4><span class=\"plan-feature-name\">Tasks</span></li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- <div class=\"plan hilight\">\n\t\t\t\t\t\t  <h3 class=\"plan-title\">Premium</h3>\n\t\t\t\t\t\t  <p class=\"plan-price\">&#8377;500 <span class=\"plan-unit\">per month</span></p>\n\t\t\t\t\t\t  <ul class=\"plan-features\">\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Projects</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Members</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Modules</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>100 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t \n\t\t\t\t\t\t<!-- <div class=\"plan mr-lft wow fadeInLeft\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t  <h3 class=\"plan-title\">Ultra</h3>\n\t\t\t\t\t\t  <p class=\"plan-price\">&#8377;1000 <span class=\"plan-unit\">per month</span></p>\n\t\t\t\t\t\t  <ul class=\"plan-features\">\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Projects</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Members</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Modules</span></li>\n\t\t\t\t\t\t\t<li class=\"plan-feature\"><h4>120 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t  </div>\n\t\t\t    </div>\n\t\t\t</section>\n<br>\n<br>\n\t\t<footer>\n\t\t\t<div class=\"container\">\n\t\t\t\tTaskit © 2018, All Rights Reserved \n\t\t\t</div>\n\t\t</footer>\n    <!-- Modal -->\n \n\t <!-- <script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\n\t<script src=\"js/bootstrap.min.js\"></script>\n\t <script src=\"js/wow.js\"></script>\n\t <script>\n\t\twow = new WOW({\n    boxClass: 'wow', // default\n    animateClass: 'animated', // default\n    offset: 0, // default\n    mobile: true, // default\n    live: true // default\n\t\t})\n\t\twow.init();\n\t</script>\n\t<script>\n\t\t$('body').scrollspy({\n\t\t  target: '#navbar-collapsible',\n\t\t  offset: 50\n\t\t});\n\n\t\t/* smooth scrolling sections */\n\t\t$('a[href*=#]:not([href=#])').click(function() {\n\t\t\tif (location.pathname.replace(/^\\//,'') == this.pathname.replace(/^\\//,'') && location.hostname == this.hostname) {\n\t\t\t  var target = $(this.hash);\n\t\t\t  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');\n\t\t\t  if (target.length) {\n\t\t\t\t$('html,body').animate({\n\t\t\t\t  scrollTop: target.offset().top - 50\n\t\t\t\t}, 1000);\n\t\t\t\treturn false;\n\t\t\t  }\n\t\t\t}\n         });\n\n\t</script> -->\n\n</body>\n\n\n<!-- </html> -->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(config, adminService, routes) {
        this.config = config;
        this.adminService = adminService;
        this.routes = routes;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(config.siteUrl);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('addPlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('bestPlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('deletePlan', function (data) {
            _this.getPlans();
        });
        this.socket.on('updatePlan', function (data) {
            _this.getPlans();
        });
        this.getPlans();
    };
    HomeComponent.prototype.getPlans = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get all plans without default
        // Params        : 
        // Returns       : 
        // Author        : Rinsha
        // Date          : 06-03-2018
        // Last Modified : 06-03-2018, Rinsha
        // Desc          : getAllplans without default
        this.adminService.getPlansWithoutDefault().subscribe(function (res) {
            console.log(res);
            _this.plans = [];
            res.forEach(function (element) {
                // if(element.is_default_plan == false){
                _this.plans.push(element);
                // }
            });
        });
        // ---------------------------------End-------------------------------------------
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reference-component',
            template: __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponentComponent);
    return ReferenceComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/test-user/test-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test-user/test-user.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n        <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n          <admin-sidebar></admin-sidebar>\n        </div>\n        <div class=\"col-md-12 col-xs-12\">\n          <user-topbar></user-topbar>\n          <br>\n          <div class=\"col-md-12\">\n            <h3>Project Estimation</h3>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n  </body>"

/***/ }),

/***/ "../../../../../src/app/components/test-user/test-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestUserComponent; });
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

var TestUserComponent = (function () {
    function TestUserComponent() {
    }
    TestUserComponent.prototype.ngOnInit = function () {
    };
    TestUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test-user',
            template: __webpack_require__("../../../../../src/app/components/test-user/test-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test-user/test-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestUserComponent);
    return TestUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-edit-profile/user-edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\r\n    width: 140px;\r\n    height: 140px;\r\n    border-radius: 50%;\r\n    background: #ccc;\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n.inputfile + label {\r\n    width: auto;\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    padding: 4px 0px;\r\n    position: absolute;\r\n    right: 36px;\r\n    bottom: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n\tbackground: #fe6c07e0;\r\n}\r\n.label2 {\r\n    color: #909090;\r\n    font-size: 15px;\r\n}\r\nlabel {\r\n    font-size: 15px;\r\n    color: #4a4a4a;\r\n    font-weight: normal;\r\n    padding: 5px 0;\r\n}\r\n.fa-camera {\r\n     padding-top: 8px;\r\n    color: #fff;\r\n    font-size: 18px !important;\r\n    text-align: center;\r\n    padding-left: 40x;\r\n    margin-left: 11px;\r\n}\r\n.relatve {\r\n    position: relative;\r\n    max-width: 180px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n}\r\n.inputfile {\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n.employ-pic .inputfile-1 + label {\r\n    color: #ffffff;\r\n    background-color: #32c5d2;\r\n}\r\n.mrg-tp {\r\n    margin-top: 15px !important;\r\n}\r\n.style2 {\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n\twidth:100%;\r\n}\r\n.center-bt {\r\n    margin: 20px auto 10px auto;\r\n    float: none;\r\n}\r\n.photo img{width:100%;}\r\n.form-group{margin-bottom:12px;overflow:hidden;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-edit-profile/user-edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <user-topbar></user-topbar>\n        <br>\n        <div class=\"user-dashboard\">\n          <!-- <h1>Hello, JS</h1> -->\n          <div class=\"row\">\n\n            <div class=\"col-md-12 col-sm-12 col-xs-12 gutter\">\n\n              <div class=\"white\">\n                <!-- img start -->\n                <div class=\"col-md-6 col-md-offset-3\">\n                  <div class=\"relatve\">\n                    <input type=\"file\" accept=\".jpeg, .jpg, .png, .gif\" (change)=\"displayPhoto($event)\" name=\"file\" id=\"file-1\" class=\"inputfile inputfile-1\" data-multiple-caption=\"{count} files selected\" multiple=\"\">\n                    <label for=\"file-1\"> <span> <i class=\"fa fa-camera\"></i></span></label>\n                    <div class=\"photo\"><img  *ngIf=\"profile.imgSrc\" [src]=\"profile.imgSrc\"></div>\n                  </div>\n                </div>\n                <!-- img end -->\n                <div class=\"col-md-8 col-md-offset-2 mrg-tp\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">First Name</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><input class=\"style\" type=\"text\" [(ngModel)]=\"profile.f_name\" name=\"f_name\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Last Name</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><input class=\"style\" type=\"text\" [(ngModel)]=\"profile.l_name\" name=\"l_name\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Email</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\" class=\"label2\">{{profile?.email}}</label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Gender</label></div>\n                      <div class=\"col-md-5 col-xs-6\">\n                        <select class=\"style2\" [(ngModel)]=\"profile.gender\" name=\"gender\">\n                          <option value=\"Male\">Male</option>\n                          <option value=\"Female\">Female</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Contact Number</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><input class=\"style\" type=\"text\" [(ngModel)]=\"profile.contact_no\" name=\"contact_no\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Designation</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\" class=\"label2\">{{profile?.tbl_designation?.designation}}</label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">User Group</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\" class=\"label2\">{{profile?.tbl_role?.role}}</label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Team</label></div>\n                      <div class=\"col-md-6 col-xs-6\">\n                        <label for=\"\" class=\"label2\">\n                        <ul *ngFor=\"let item of profile.tbl_team_assocs\">\n                          <li>{{item.tbl_team?.team_name}}</li>\n                        </ul>\n                      </label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Previous Experience</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\" class=\"label2\">{{profile?.tbl_prev_exp?.exp_range}} Years</label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Join Date</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\" class=\"label2\">{{profile?.join_date| date:'EEE, d MMM,y'}}</label></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Password</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><input class=\"style\" type=\"password\" [(ngModel)]=\"profile.password\" name=\"password\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <div class=\"col-md-6 col-xs-6\"><label for=\"\">Confirm Password</label></div>\n                      <div class=\"col-md-6 col-xs-6\"><input class=\"style\" type=\"password\" [(ngModel)]=\"profile.c_password\" name=\"c_password\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12 text-center\">\n                    <button type=\"submit\" (click)=\"updateUser(profile)\" class=\"btn round-button center-bt\">Update</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-12\">\n          <h3>Project Estimation</h3>\n        </div> -->\n        <!-- <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n              <div class=\"row\">\n                fff\n              </div>\n              </div>\n              </div>\n              </div> -->\n\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/user-edit-profile/user-edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditProfileComponent = (function () {
    function UserEditProfileComponent(userService, _formBuilder, routes, route, snackBar) {
        this.userService = userService;
        this._formBuilder = _formBuilder;
        this.routes = routes;
        this.route = route;
        this.snackBar = snackBar;
        this.profile = {
            f_name: '',
            l_name: '',
            gender: '',
            contact_no: '',
            password: '',
            c_password: '',
            imgSrc: '',
            imgFile: [],
        };
    }
    UserEditProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    UserEditProfileComponent.prototype.getProfile = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getProfile
        // Params        : 
        // Returns       : logged in user details
        // Author        : Rinsha
        // Date          : 21-03-2018
        // Last Modified : 21-03-2018, Rinsha
        // Desc          : 
        this.userService.getProfile().subscribe(function (info) {
            // console.log(info);
            _this.profile = info;
            _this.profile.c_password = '';
            _this.profile.password = '';
            _this.user_id = info.id;
            if (info.tbl_login.profile_image == '') {
                _this.profile.imgSrc = "../assets/images/dp.jpg";
            }
            else {
                _this.profile.imgSrc = "../assets/profile_upload/" + info.tbl_login.profile_image;
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    UserEditProfileComponent.prototype.updateUser = function (profile) {
        var _this = this;
        // console.log(profile)
        // ---------------------------------Start-------------------------------------------
        // Function      : updateUser
        // Params        : user data
        // Returns       : 
        // Author        : Rinsha
        // Date          : 21-03-2018
        // Last Modified : 21-03-2018, Rinsha
        // Desc          : 
        this.userService.updateUser(profile).subscribe(function (info) {
            var snackBarRef = _this.snackBar.open(info.msg, '', {
                duration: 3000
            });
            if (info.success == false) {
                // this.routes.navigate(['/project']);
            }
        });
        // ---------------------------------End-------------------------------------------
    };
    UserEditProfileComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        if (['gif', 'png', 'jpg', 'jpeg'].indexOf(ext) < 0) {
            // fileInput.target.files.remove(0);
            this.profile.imgSrc = '';
            alert('Please select a valid image [ jpg | jpeg | gif | png ]');
            return false;
        }
        //this.newUser.imgFile =ext;
        // console.log(fileInput);
        this.profile.imgFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.profile.imgSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    UserEditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-edit-profile',
            template: __webpack_require__("../../../../../src/app/components/user-edit-profile/user-edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-edit-profile/user-edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], UserEditProfileComponent);
    return UserEditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-project-estimation/user-project-estimation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\r\n    padding: 50px;\r\n}\r\n.mrg-top label{padding-top: 20px;}\r\n.round-button{\r\n    float:none !important;\r\n  }\r\n  .center-bt {\r\n      margin: 20px auto 10px auto;\r\n      float: none;\r\n  }\r\n  .no-edit{font-weight: 400 !important;}\r\n .line-breaker {\r\n    white-space: pre-line;\r\n  }\r\n  label{\r\n    font-weight: 700 !important;\r\n}\r\n\r\n  .task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\n  button, input, optgroup, select, textarea{outline:none !important;}\r\n  .taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n  .task ul li{width:auto;float:left;padding: 8px;}\r\n      a{color:#111;}\r\n  .task h5{padding-top:13px;padding-top: 6px;}\r\n  .hash{background:#f7f6f4;}\r\n  .round-button {\r\n      border-radius: 20px;\r\n      margin: 0;\r\n      float: left;\r\n      background: #f37600;\r\n      color: #fff;\r\n      padding: 7px 15px;\r\n      transition: background 2s;\r\n      margin-bottom:15px;\r\n  }\r\n  .round-button:hover {\r\n      background: #ffaa05;\r\n      color: #fff;\r\n  }\r\n  .dropdown ul.dropdown-menu:before {\r\n      content: \"\";\r\n      border-bottom: 10px solid #fff;\r\n      border-right: 10px solid transparent;\r\n      border-left: 10px solid transparent;\r\n      position: absolute;\r\n      top: -10px;\r\n      right: 16px;\r\n      z-index: 10;\r\n  }\r\n  .round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\n  button, input, optgroup, select, textarea{outline:none;}\r\n  .effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n  .effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n  .effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n  .style{width:100%;}\r\n  label{font-size:15px;color:#4a4a4a;font-weight:normal;padding:5px 0;}\r\n  .mrg-2{margin-bottom:10px;}\r\n  .dropdown-menu > li > a {\r\n      display: block;\r\n      padding: 3px 20px;\r\n      clear: both;\r\n      font-weight: normal;\r\n      line-height: 25px;\r\n      color: #333333;\r\n      white-space: nowrap;\r\n  }\r\n  .addmodule {\r\n      padding: 20px 10px!important;\r\n      min-width: 357px;\r\n      right: 0px;\r\n      left: inherit;\r\n  }\r\n  .style{border:none;border-bottom: 1px solid #ccc;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n  }\r\n  .btn-file{padding:0;}\r\n  .white {\r\n      background: #ffffff none repeat scroll 0 0;\r\n      \r\n      display: inline-block;\r\n      padding: 33px 25px;\r\n      width: 100%;\r\n      margin-bottom:20px;\r\n  }\r\n  .center-bt{margin:20px auto 10px auto;float:none;}\r\n  @media only screen and (max-width : 767px) {\r\n  .mrg-2 {\r\n      margin-bottom: 37px;\r\n  }\r\n  \r\n  .task ul li{    padding: 2px;}\t\r\n  .addmodule{    min-width: 274px;}\r\n  }\r\n  .round-button{float:inherit !important;}  \r\n  .right-btn{float:right !important;}\r\n\r\n\r\n .dwnload{ background: #f39f00;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  clear: left;\r\n  margin-right: 10px;\r\n}\r\n.mr-top{margin-top:20px;}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.modal{top:0;}\r\n.modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n  }\r\n  .modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n  \r\n  }\r\n  .modal-title{color:#fff;}\r\n  .modal-body{    padding:20px 30px;}\r\n  .modal-body input{border:none;}\r\n  .modal-body input{padding: 0;}\r\n  .pad-top{padding-top:20px;}\r\n  .wdth{width:100% !important;}\r\n  .brd{    border: none;\r\n    height: 54px;}\r\n    .pull-right{float:right !important;}\r\n.dis{display: -webkit-box;\r\npadding-left: 16px;\r\npadding-top: 12px;\r\n}\r\n.dis h5{padding-left: 10px;\r\n    padding-top: 0;\r\n    margin-top: 2px;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-project-estimation/user-project-estimation.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n        <user-topbar></user-topbar>\n        <br>\n        <div class=\"col-md-12\">\n          <h3>Project Estimation</h3>\n        </div>\n        <div class=\"col-md-5 col-xs-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body mrg-top\">\n\n              <!-- <h3>Project Estimation</h3> -->\n              <div class=\"row\">\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Name :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Project Code :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.project_code}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Assignee :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{pm}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Category :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{category?.category_name}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Priority :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.priority}}</label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Description :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">\n                      {{project?.description}}\n                      </label></div>\n                </div>\n                <br>\n\n                <div class=\"col-md-4 col-xs-6\"><label>Date :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{pro_date}}</label></div>\n                </div>\n                <br>\n                <div class=\"col-md-4 col-xs-6\"><label>Team Members :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <mat-form-field class=\"inputfileds\">\n                    <mat-select name='selected' multiple [(ngModel)]=\"team_member\">\n                      <mat-option [value]=\"members.id\" *ngFor=\"let members of team_members;\">{{members.f_name}} {{members.l_name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <br>\n\n\n                <div class=\"col-md-4 col-xs-6\"><label>Requirement Summary :</label></div>\n                <div class=\"col-md-7 col-xs-6\">\n                  <div class=\"col-md-12 col-xs-6\"><label class=\"no-edit\">{{project?.requirement_summary}}</label></div>\n                </div>\n                <br>\n\n\n                <div class=\"col-md-4 col-xs-6\"><label>Attatchment :</label></div>\n                <div class=\"col-md-7 col-xs-6 mr-top\">\n                  <a data-toggle=\"tooltip\" title=\"Download\" href=\"../assets/docs/{{project?.requirement_attatchment}}\" class=\"download-link\" download=\"\"> <button class=\"dwnload\"><i class=\"fa fa-download\"></i></button>Download</a><br>\n                </div>\n                <br>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"col-md-7 col-sm-12 col-xs-12 gutter\">\n\n\n          <div *ngFor=\"let item of previousEstimations\">\n            <div class=\"white\">\n              <div class=\"col-md-12\">\n                <div class=\"col-md-6\">\n                  <label><b>{{item.team_name}}</b></label>\n                  <div class=\"clearfix\"></div>\n                  <label>Team Lead : {{item.tbl_project_estimation_team.tbl_user_profile.f_name}} {{item.tbl_project_estimation_team.tbl_user_profile.l_name}}</label>\n                </div>\n                <div class=\"col-md-6 text-right\">\n                  Total Hours : {{item.estimation_hour}} Hrs \n                </div>\n                <br>\n                <div class=\"clearfix\"></div>\n                <br>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-md-12\"><button type=\"button\" class=\"btn round-button pull-right right-btn\" data-toggle=\"collapse\" attr.data-target=\"#demo{{item.id}}\">Click Here</button></div>\n              <div class=\"clearfix\"></div>\n              <div id=\"demo{{item.id}}\" class=\"collapse\">\n\n                <form (ngSubmit)=\"copyModule()\">\n                <div *ngFor=\"let modules of item.tbl_estimation_modules\">\n                  <div class=\"col-md-10 col-xs-12 pull-right\">\n                    <div class=\"task\">\n                      <div class=\"col-md-8 col-xs-7 dis\">\n                          <mat-checkbox name=\"copyModules_{{modules.id}}\" [value]=\"modules\" [(ngModel)]=\"copyModules[modules.id]\"></mat-checkbox>\n                          <!-- <mat-checkbox  name=\"data_{{i}}\" [(ngModel)]=\"surveyattenders[i].check\">{{data.name}}</mat-checkbox> -->\n                        <h5>{{modules.module_name}}</h5>\n                      </div>\n                      <div class=\"col-md-4 col-xs-5\">\n                        <ul class=\"taskedit\">\n                          <li>{{modules.module_time}} Hr</li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngFor=\"let tasks of modules.tbl_estimation_tasks\">\n                    <div class=\"col-md-9 col-xs-12 pull-right\">\n                      <div class=\"task hash\">\n                        <div class=\"col-md-8 col-xs-7\">\n                          <h5>{{tasks.task_name}}</h5>\n                        </div>\n                        <div class=\"col-md-4 col-xs-5\">\n                          <ul class=\"taskedit\">\n                            <li>{{tasks.planned_hour + tasks.buffer_hour}} Hr</li>\n                          </ul>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"col-md-12\"><button type=\"submit\" class=\"btn round-button pull-right\">Copy Modules</button></div>\n              </form>\n                <div class=\"clearfix\"></div>\n              </div>\n              <br>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n\n\n\n          <div class=\"white\">\n            <div class=\"col-md-8 mrg-2 pull-right\">\n              <div class=\"col-md-4\">\n                <label>Total Estimated Hours</label>\n              </div>\n              <div class=\"col-md-5 col-xs-5\">\n                <!-- <input class=\"effect-1 style\" type=\"text\" placeholder=\"44:00 Hr\"> -->\n                <label class=\"effect-1 style\">{{estimated_hour}} </label>\n                <span class=\"focus-border\"></span>\n              </div>\n              <div class=\"col-md-3 col-xs-7\" *ngIf=\"!disabled\">\n                <div class=\"row\">\n                  <button type=\"button\" class=\"btn round-button pull-right dropdown-toggle right-btn\" data-toggle=\"dropdown\">Add Module</button>\n\n                  <ul class=\"dropdown-menu addmodule\" role=\"menu\">\n                    <form class=\"form-horizontal\" (ngSubmit)=\"addModule()\" novalidate>\n                      <div class=\"col-md-8\">\n                        <input class=\"style\" required autofocus [(ngModel)]=\"module.name\" name=\"module\" type=\"text\" placeholder=\"Module Name\">\n                      </div>\n                      <div class=\"col-md-4\">\n                        <button type=\"submit\" class=\"btn round-button pull-right\">Save</button>\n                      </div>\n                    </form>\n                  </ul>\n\n                </div>\n              </div>\n              <br>\n            </div>\n\n            <div *ngFor=\"let module of modules; let i = index\">\n              <div class=\"col-md-10 col-xs-12 pull-right\">\n                <div class=\"task\">\n                  <div class=\"col-md-8 col-xs-7\">\n                    <h5 *ngIf=\"!show[i]\">{{module.name}}</h5>\n                    <div *ngIf=\"show[i]\">\n                      <form class=\"form-horizontal\" (ngSubmit)=\"editModule(i)\" novalidate>\n                        <div class=\"col-md-8\">\n                          <mat-form-field>\n                            <input matInput name=\"name\" autofocus [(ngModel)]=\"module.name\" required>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <button type=\"submit\" class=\"btn round-button pull-right\">Save</button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 col-xs-5\" *ngIf=\"!show[i]\">\n                    <ul class=\"taskedit\">\n                      <li>{{module.time}}</li>\n                      <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteModuleModal\" (click)=\"getId(i)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                      <li class=\"pull-right\"><a><i (click)=\"editModules(i)\" class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngFor=\"let task of module.tasks; let j = index\">\n                <div class=\"col-md-9 col-xs-12 pull-right\">\n                  <div class=\"task hash\">\n                    <div class=\"col-md-8 col-xs-7\">\n                      <h5>{{task.name}}</h5>\n                    </div>\n                    <div class=\"col-md-4 col-xs-5\">\n                      <ul class=\"taskedit\">\n                        <li>{{task.planned_hour + task.buffer_time}}</li>\n                        <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#deleteTaskModal\" (click)=\"getId1(i,j)\"> <i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                        <li class=\"pull-right\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#editTaskModal\" (click)=\"getId1(i,j)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li>\n                      </ul>\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"clearfix\"></div>\n              <div class=\"col-md-12\">\n                <button type=\"button\" *ngIf=\"!disabled\" (click)=\"getId(i)\" data-toggle=\"modal\" data-target=\"#addTaskModal\" class=\"btn round-button pull-right right-btn\">Add Task</button>\n              </div>\n            </div>\n            <!-- --------------------------------------------- add task modal ----------------------------------------------------------------- -->\n            <div id=\"addTaskModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                    <h4 class=\"modal-title\">Add Task </h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"addTask(index);\" novalidate>\n\n                      <div>\n                        <div class=\"example-container\">\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Task Name :</label></div>\n                          <div class=\"col-md-7 col-xs-6\">\n                            <mat-form-field>\n                              <input matInput name=\"name\" autofocus [(ngModel)]=\"task.name\" required>\n                            </mat-form-field>\n                          </div>\n                          <br>\n\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Planned Hours:</label></div>\n                          <div class=\"col-md-3 col-xs-6\">\n                            <mat-form-field class=\"wdth\">\n                              <input type=\"number\" matInput name=\"planned_hour\" min=\"0\" [(ngModel)]=\"task.planned_hour\" required>\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Buffer Time :</label></div>\n                          <div class=\"col-md-3 col-xs-6\">\n\n                            <mat-form-field class=\"wdth\">\n                              <input type=\"number\" matInput name=\"buffer_time\" min=\"0\" [(ngModel)]=\"task.buffer_time\" required>\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"clearfix\"></div>\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Description :</label></div>\n                          <div class=\"col-md-7 col-xs-6\">\n                            <mat-form-field class=\"wdth\">\n                              <!-- <mat-select name=\"description\" [(ngModel)]=\"task.description\" required>\n                                <mat-option value=\"Billable\">Billable</mat-option>\n                                <mat-option value=\"Non-billable\">Non-billable</mat-option>\n                              </mat-select> -->\n                              <textarea matInput [(ngModel)]=\"task.description\" name=\"description\" required matAutosizeMinRows=\"3\" class=\"brd\" matAutosizeMaxRows=\"6\"></textarea>\n                            </mat-form-field>\n                          </div>\n                          <br>\n\n                        </div>\n                      </div>\n                      <br>\n\n                      <div class=\"\">\n                        <div class=\"col-md-12\">\n                          <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button right-btn\">Submit</button>\n                        </div>\n                      </div>\n\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n\n\n\n\n            <!-- ----------------------------------------------------------------------add task modal------------------------------------------------------------------\n           \n              <!-- --------------------------------------------- delete module modal ----------------------------------------------------------------- -->\n            <div id=\"deleteModuleModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n\n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Delete </h4>\n                  </div>\n                  <!-- <div class=\"modal-header\"> -->\n                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                  <!-- </div> -->\n                  <div class=\"modal-body delete-popup\">\n                    <i class=\"fa fa-exclamation\"></i>\n\n\n                    <h4 class=\"textalign\">Are you sure?</h4>\n\n                  </div>\n\n                  <div class=\"modal-footer\" style=\"text-align:center;\">\n                    <button type=\"button\" (click)=\"deleteModule(index)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <!-- ----------------------------------------------------------------------delete module modal--------------------------------------------------------------------- -->\n\n            <!-- --------------------------------------------- delete task modal ----------------------------------------------------------------- -->\n            <div id=\"deleteTaskModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n\n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Delete </h4>\n                  </div>\n                  <!-- <div class=\"modal-header\"> -->\n                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                  <!-- </div> -->\n                  <div class=\"modal-body delete-popup\">\n                    <i class=\"fa fa-exclamation\"></i>\n\n\n                    <h4 class=\"textalign\">Are you sure?</h4>\n\n                  </div>\n\n                  <div class=\"modal-footer\" style=\"text-align:center;\">\n                    <button type=\"button\" (click)=\"deleteTask(i,j)\" class=\"btn round-button center-bt\" data-dismiss=\"modal\">Delete</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <!-- ----------------------------------------------------------------------delete task modal--------------------------------------------------------------------- -->\n\n            <!-- --------------------------------------------- edit task modal ----------------------------------------------------------------- -->\n            <div id=\"editTaskModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn2></button>\n                    <h4 class=\"modal-title\">Edit Task </h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"editTask(i, j);\" novalidate>\n\n                      <div>\n                        <div class=\"example-container\">\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Task Name :</label></div>\n                          <div class=\"col-md-7 col-xs-6\">\n                            <mat-form-field>\n                              <input matInput name=\"name\" autofocus [(ngModel)]=\"selectedTask.name\" required>\n                            </mat-form-field>\n                          </div>\n                          <br>\n\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Planned Hours:</label></div>\n                          <div class=\"col-md-3 col-xs-6\">\n                            <mat-form-field class=\"wdth\">\n                              <input type=\"number\" matInput name=\"planned_hour\" min=\"0\" [(ngModel)]=\"selectedTask.planned_hour\" required>\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Buffer Time :</label></div>\n                          <div class=\"col-md-3 col-xs-6\">\n\n                            <mat-form-field class=\"wdth\">\n                              <input type=\"number\" matInput name=\"buffer_time\" min=\"0\" [(ngModel)]=\"selectedTask.buffer_time\" required>\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"clearfix\"></div>\n                          <div class=\"col-md-3 col-xs-6\"><label class=\"pad-top\">Description :</label></div>\n                          <div class=\"col-md-7 col-xs-6\">\n                            <mat-form-field class=\"wdth\">\n                              <!-- <mat-select name=\"description\" [(ngModel)]=\"task.description\" required>\n                              <mat-option value=\"Billable\">Billable</mat-option>\n                              <mat-option value=\"Non-billable\">Non-billable</mat-option>\n                            </mat-select> -->\n                              <textarea matInput [(ngModel)]=\"selectedTask.description\" name=\"description\" required matAutosizeMinRows=\"3\" class=\"brd\"\n                                matAutosizeMaxRows=\"6\"></textarea>\n                            </mat-form-field>\n                          </div>\n                          <br>\n\n                        </div>\n                      </div>\n                      <br>\n\n                      <div class=\"\">\n                        <div class=\"col-md-12\">\n                          <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button right-btn\">Submit</button>\n                        </div>\n                      </div>\n\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n\n\n\n\n            <!-- ----------------------------------------------------------------------edit task modal------------------------------------------------------------------ -->\n            <br>\n            <div class=\"clearfix\"></div>\n            <div class=\"\">\n              <div class=\"col-md-12\">\n                <button type=\"submit\" *ngIf=\"!disabled\" [disabled]=\"btnDisbled\" (click)=\"estimate()\" class=\"btn round-button pull-right right-btn\">Submit</button>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/user-project-estimation/user-project-estimation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProjectEstimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProjectEstimationComponent = (function () {
    function UserProjectEstimationComponent(userService, route, snackBar, companyService, routes, _formBuilder) {
        this.userService = userService;
        this.route = route;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.routes = routes;
        this._formBuilder = _formBuilder;
        this.teamhead = [];
        this.team_member = [];
        this.modules = [];
        this.isError = false;
        this.estimated_hour = 0;
        this.module = {
            name: '',
            time: 0,
            tasks: [],
        };
        this.task = {
            name: '',
            planned_hour: 0,
            buffer_time: 0,
            description: '',
        };
        this.datafromForm = {
            project_id: '',
            team_id: '',
            modules: [],
            team_member: [],
            estimated_hour: 0,
            notif_id: '',
        };
        this.selectedTask = {
            name: '',
            planned_hour: 0,
            buffer_time: 0,
            description: '',
        };
        this.show = [];
        this.disabled = false;
        this.previousEstimations = [];
        this.selected = [];
        this.copyModules = [];
        this.copiedModules = [];
        this.filesToUpload = [];
    }
    UserProjectEstimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Get logged in entity
        // Params        : 
        // Returns       : Get logged in entity
        // Author        : Rinsha
        // Date          : 08-03-2018
        // Last Modified : 08-03-2018, Rinsha
        // Desc          :  
        this.companyService.getLoggedinEntity().subscribe(function (data) {
            _this.entity = data;
        });
        // -----------------------------------End------------------------------------------
        this.sub = this.route.params.subscribe(function (params) {
            _this.p_id = params['id1'];
            _this.notif_id = params['id2'];
            // ---------------------------------Start-------------------------------------------
            // Function      : get notif by id
            // Params        : id
            // Returns       : notification
            // Author        : Rinsha
            // Date          : 14-03-2018
            // Last Modified : 14-03-2018, Rinsha
            // Desc          : check whether the logged in member is the suitable person to estimate
            _this.userService.getNotif(_this.notif_id).subscribe(function (notif) {
                if (notif.success == false) {
                    var snackBarRef = _this.snackBar.open(notif.msg, '', {
                        duration: 2000
                    });
                    // this.routes.navigate(['/project']);
                }
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : getCurrentEstimation
            // Params        : notification id
            // Returns       : estimation
            // Author        : Rinsha
            // Date          : 15-03-2018
            // Last Modified : 15-03-2018, Rinsha
            // Desc          : get Current Estimation from notification id
            _this.userService.getCurrentEstimation(_this.notif_id).subscribe(function (est) {
                // console.log(est);
                if (est.data !== null) {
                    // then it is resubmitted estimation
                    est.data.tbl_estimation_modules.forEach(function (estimatedModule) {
                        _this.modules = [];
                        _this.module = {
                            name: '',
                            time: 0,
                            tasks: [],
                        };
                        _this.task = {
                            name: '',
                            planned_hour: 0,
                            buffer_time: 0,
                            description: '',
                        };
                        _this.module.name = estimatedModule.module_name;
                        _this.module.tasks = [];
                        estimatedModule.tbl_estimation_tasks.forEach(function (estimatedTask) {
                            _this.task = {
                                name: estimatedTask.task_name,
                                planned_hour: estimatedTask.planned_hour,
                                buffer_time: estimatedTask.buffer_hour,
                                description: estimatedTask.description,
                            };
                            _this.module.tasks.push(_this.task);
                            _this.module.time = _this.module.time + _this.task.planned_hour + _this.task.buffer_time;
                            _this.estimated_hour = _this.estimated_hour + _this.task.planned_hour + _this.task.buffer_time;
                        });
                        _this.modules.push(_this.module);
                        // console.log(estimatedModule)
                        _this.module = {
                            name: '',
                            time: 0,
                            tasks: [],
                        };
                        _this.task = {
                            name: '',
                            planned_hour: 0,
                            buffer_time: 0,
                            description: '',
                        };
                    });
                }
                else {
                    _this.modules = [];
                    _this.estimated_hour = 0;
                }
                // console.log(this.modules);
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : get project by id
            // Params        : id
            // Returns       : project
            // Author        : Rinsha
            // Date          : 08-03-2018
            // Last Modified : 08-03-2018, Rinsha
            // Desc          : getProject
            _this.companyService.getProject(_this.p_id).subscribe(function (res1) {
                _this.project = res1;
                _this.pro_date = _this.project.createdAt.substring(0, 10);
                _this.category_id = _this.project.category_id;
                _this.pm_id = _this.project.pm_id;
                // ---------------------------------Start-------------------------------------------
                // Function      : get category by id
                // Params        : id
                // Returns       : category
                // Author        : Rinsha
                // Date          : 08-03-2018
                // Last Modified : 08-03-2018, Rinsha
                // Desc          : getCategoryById
                _this.companyService.getCategoryById(_this.category_id).subscribe(function (res2) {
                    _this.category = res2;
                });
                // ---------------------------------End-------------------------------------------
                // ---------------------------------Start-------------------------------------------
                // Function      : get pm by id
                // Params        : login id
                // Returns       : user info
                // Author        : Rinsha
                // Date          : 13-03-2018
                // Last Modified : 13-03-2018, Rinsha
                // Desc          : getPmByLoginid
                _this.userService.getPmByLoginid(_this.pm_id).subscribe(function (res3) {
                    _this.pm = res3;
                });
                // ---------------------------------End-------------------------------------------
            });
            // ---------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
            // Function      : getTeamMembers
            // Params        : login id, project id
            // Returns       : team members
            // Author        : Rinsha
            // Date          : 13-03-2018
            // Last Modified : 13-03-2018, Rinsha
            // Desc          :  Find user profile id of head from tbl_user_profie using login id. Then find the team id from tbl_estimation_teams using head id. Then team members from tbl_team_assocs. 
            _this.userService.getTeamMembers(_this.p_id).subscribe(function (data1) {
                _this.team_members = data1.slice(0, data1.length - 1);
                _this.team_id = data1[data1.length - 1].team_id;
            });
            // -----------------------------------End------------------------------------------
            _this.getPreviousEstimations();
        });
    };
    UserProjectEstimationComponent.prototype.addModule = function () {
        // console.log(this.module.name);
        if (this.module.name == '') {
            var snackBarRef = this.snackBar.open("Module Name cannot be blank", '', {
                duration: 2000
            });
        }
        else {
            this.modules.push(this.module);
            this.module = {
                name: '',
                time: 0,
                tasks: [],
            };
        }
    };
    UserProjectEstimationComponent.prototype.getId = function (index) {
        // console.log(index);
        this.index = index;
    };
    UserProjectEstimationComponent.prototype.addTask = function (index) {
        // console.log(this.task);
        if (this.task.name == '' || this.task.planned_hour == 0 || this.task.description == '') {
            var snackBarRef = this.snackBar.open("All fields are required", '', {
                duration: 2000
            });
        }
        else {
            this.modules[index].tasks.push(this.task);
            this.modules[index].time = this.modules[index].time + this.task.planned_hour + this.task.buffer_time;
            this.estimated_hour = this.estimated_hour + this.task.planned_hour + this.task.buffer_time;
            // this.module_time = this.module_time + this.task.planned_hour + this.task.buffer_time;
            // console.log(index);
            // console.log("module time:"+this.modules[index].time);
            // console.log("estimated time:"+this.estimated_hour);
            this.task = {
                name: '',
                planned_hour: 0,
                buffer_time: 0,
                description: '',
            };
            this.closeBtn1.nativeElement.click();
        }
    };
    UserProjectEstimationComponent.prototype.estimate = function () {
        var _this = this;
        this.isError = false;
        if (this.team_members.length != 0 && this.team_member.length == 0) {
            this.isError = true;
            var snackBarRef = this.snackBar.open("Please select members on your team!", '', {
                duration: 2000
            });
        }
        else if (this.modules.length == 0) {
            this.isError = true;
            var snackBarRef = this.snackBar.open("Atleast one module is required!", '', {
                duration: 2000
            });
        }
        else {
            this.modules.forEach(function (element) {
                if (element.tasks.length == 0) {
                    _this.isError = true;
                    var snackBarRef = _this.snackBar.open("Each module should contain atleast one task!", '', {
                        duration: 3000
                    });
                }
            });
        }
        if (this.isError == false) {
            this.datafromForm = {
                project_id: this.p_id,
                team_id: this.team_id,
                modules: this.modules,
                team_member: this.team_member,
                estimated_hour: this.estimated_hour,
                notif_id: this.notif_id,
            };
            // console.log(this.datafromForm);
            // ---------------------------------Start-------------------------------------------
            // Function      : add estimation
            // Params        : data from form
            // Returns       : 
            // Author        : Rinsha
            // Date          : 13-03-2018
            // Last Modified : 13-03-2018, Rinsha
            // Desc          :  
            this.userService.addEstimation(this.datafromForm).subscribe(function (data) {
                // console.log(data)
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 4000
                });
                if (data.success == true) {
                    _this.routes.navigate(['/test-user']);
                }
            });
            // -----------------------------------End------------------------------------------
        }
    };
    UserProjectEstimationComponent.prototype.deleteModule = function (i) {
        this.estimated_hour = this.estimated_hour - this.modules[i].time;
        this.modules.splice(i, 1);
    };
    UserProjectEstimationComponent.prototype.getId1 = function (i, j) {
        this.i = i;
        this.j = j;
        this.selectedTask = this.modules[i].tasks[j];
        this.modules[i].time = this.modules[i].time - this.modules[i].tasks[j].planned_hour - this.modules[i].tasks[j].buffer_time;
        this.estimated_hour = this.estimated_hour - this.modules[i].tasks[j].planned_hour - this.modules[i].tasks[j].buffer_time;
    };
    UserProjectEstimationComponent.prototype.deleteTask = function (i, j) {
        this.modules[i].tasks.splice(j, 1);
    };
    UserProjectEstimationComponent.prototype.editTask = function (i, j) {
        // console.log(this.modules[i].tasks[j]);
        this.modules[i].tasks[j] = this.selectedTask;
        this.modules[i].time = this.modules[i].time + this.selectedTask.planned_hour + this.selectedTask.buffer_time;
        this.estimated_hour = this.estimated_hour + this.selectedTask.planned_hour + this.selectedTask.buffer_time;
        this.closeBtn2.nativeElement.click();
    };
    UserProjectEstimationComponent.prototype.editModules = function (i) {
        this.show[i] = true;
        this.disabled = true;
    };
    UserProjectEstimationComponent.prototype.editModule = function (i) {
        this.show[i] = false;
        this.disabled = false;
    };
    UserProjectEstimationComponent.prototype.getPreviousEstimations = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getProjectstimations
        // Params        : project id
        // Returns       : estimations
        // Author        : Rinsha
        // Date          : 15-03-2018
        // Last Modified : 15-03-2018, Rinsha
        // Desc          :
        this.companyService.getProjectstimations(this.p_id).subscribe(function (esti) {
            _this.previousEstimations = [];
            _this.previousEstimations = esti;
            _this.previousEstimations.forEach(function (element) {
                if (element.tbl_project_estimation_team.team_id == 1) {
                    _this.team_name = "Developer";
                }
                else if (element.tbl_project_estimation_team.team_id == 2) {
                    _this.team_name = "Designer";
                }
                else if (element.tbl_project_estimation_team.team_id == 3) {
                    _this.team_name = "QC";
                }
                element.team_name = _this.team_name;
                element.tbl_estimation_modules.forEach(function (modules) {
                    _this.task_time = 0;
                    modules.tbl_estimation_tasks.forEach(function (tasks) {
                        _this.task_time = _this.task_time + tasks.planned_hour + tasks.buffer_hour;
                    });
                    modules.module_time = _this.task_time;
                });
            });
        });
    };
    UserProjectEstimationComponent.prototype.copyModule = function () {
        var _this = this;
        // console.log(this.copyModules)
        this.copyModules.forEach(function (key, module_id) {
            if (key == true) {
                // console.log("value:" + module_id)
                _this.previousEstimations.forEach(function (est) {
                    est.tbl_estimation_modules.forEach(function (module) {
                        if (module.id == module_id) {
                            _this.module.time = 0;
                            // this.estimated_hour = 0;
                            _this.copiedModules = module;
                            _this.module.name = module.module_name;
                            module.tbl_estimation_tasks.forEach(function (task) {
                                _this.task = {
                                    name: task.task_name,
                                    planned_hour: task.planned_hour,
                                    buffer_time: task.buffer_hour,
                                    description: task.description,
                                };
                                _this.module.time = _this.module.time + task.planned_hour + task.buffer_hour;
                                // this.estimated_hour = this.estimated_hour + this.module.time;
                                _this.module.tasks.push(_this.task);
                                _this.task = {
                                    name: '',
                                    planned_hour: 0,
                                    buffer_time: 0,
                                    description: '',
                                };
                            });
                            _this.estimated_hour = _this.estimated_hour + _this.module.time;
                            _this.modules.push(_this.module);
                            var snackBarRef = _this.snackBar.open("Copied", '', {
                                duration: 2000
                            });
                            _this.module = {
                                name: '',
                                time: 0,
                                tasks: [],
                            };
                        }
                    });
                });
            }
        });
        this.copyModules = [];
        // console.log(this.copiedModules);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UserProjectEstimationComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UserProjectEstimationComponent.prototype, "closeBtn2", void 0);
    UserProjectEstimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-project-estimation',
            template: __webpack_require__("../../../../../src/app/components/user-project-estimation/user-project-estimation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-project-estimation/user-project-estimation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], UserProjectEstimationComponent);
    return UserProjectEstimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drp2 .dropdown-menu{padding:0;right:-3%;left:inherit;max-width: 297px;}\r\n.drp2 .dropdown-menu li a{padding:15px 20px;}\r\n.drp2 .navbar-content{text-align:left;}\r\n.drp2 .dropdown-menu li{width:100%;}\r\n.drp2 .dropdown-menu > li > a:hover p{color:#fff !important;}\r\n.dropdown-menu{margin-bottom:0;}\r\nheader .dropdown-menu{top: 207%;}\r\n.dropdown-menu p {\r\n    margin: 0 0 0px;\r\n}\r\n.drp2 .dropdown-menu h4{margin-bottom: 2px;\r\n    color: #000;\r\n    font-weight: 500;\r\n    font-family: arial;}\r\n.media-heading{font-size:16px;}\r\n.closbtn{\r\n    border-radius: 50%;\r\n    height: 15px;\r\n    width: 15px;\r\n    padding-top: 0; \r\n    margin-right: 12px;\r\n    line-height: 13px;\r\n    font-size: 9px;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    background: #fe6a07;\r\n    border: none;\r\n}\r\n.dropdown-menu .divider {\r\n    height: 1px;\r\n    margin: 0px 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n}\r\n.head{background: #FFFFFF;color:#fff !important;}\r\n.head>a{color:#686868 !important;}\r\n.content{\r\n    text-decoration: none;\r\n}\r\n.dropdown-menu>li>a:hover h4{color:#fff;}\r\n.drp2 .dropdown-menu > li > a{white-space:normal !important;}\r\n.drp2 .dropdown-menu{    min-width: 324px;}\r\n.drp2 p{line-height: 18px;margin-top: 10px;}\r\n.drp2 li{padding: 0px 0;}\r\n.media-heading {font-size: 15px;\r\ncolor: #8a8a8a;\r\nfont-weight: 600;    margin-top: 2px;}\r\n.drp2 li a{padding:7px 0px !important;color:#909090;}\r\n.ng-star-inserted:hover{background:#f3f3f3;}\r\n.ng-star-inserted{padding: 10px 20px; border-bottom: 1px solid #ececec;}\r\n.drp2 h4{padding: 0px 20px;    font-weight: 700 !important;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    color:#ffffff !important;\r\n    margin-top:0px;\r\n    margin-bottom:0;\r\n    background: #919aa0;\r\n    padding: 14px 20px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <header>\n\n        <div class=\"col-md-5 pull-right\">\n            <div class=\"header-rightside\">\n                <ul class=\"list-inline header-top pull-right\">\n\n                    <li class=\"dropdown drp2\">\n                        <a class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                          <span class=\"label label-primary\">{{count}}</span>\n\n                      </a>\n                        <ul class=\"dropdown-menu\">\n\n                            <li class=\"head\">\n                                <div class=\"navbar-content\">\n                                    <h4>Project Estimation Notification</h4>\n                                    <div *ngFor=\"let item of teamheadNotif\" class=\"ng-star-inserted\">\n                                        <a [routerLink]=\"['/estimate-project', item.tbl_project.id, item.id]\">\n                                            <div></div>\n                                            <h5 class=\"media-heading\">{{item.tbl_project.project_name}}</h5>\n                                            <p><a class=\"content\">You are assignd as team leader for project <b>{{item.tbl_project.project_name}}</b>. Click here to Estimate.</a></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </li>\n                            <div class=\"divider\"> </div>\n\n                            <div *ngIf=\"count == 0\">\n\n                                <h5 style=\"color : red; margin-left:20px; \">No Data</h5>\n                            </div>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                          <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <div class=\"navbar-content\">\n                                    <span>{{profile?.f_name}} {{profile?.l_name}}</span>\n                                    <p class=\"text-muted small\">\n                                        {{profile?.email}}\n                                    </p>\n                                    <div class=\"divider\">\n                                    </div>\n                                    <a [routerLink]=\"['/edit-profile']\" class=\"view btn-sm active\">View Profile</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserTopbarComponent = (function () {
    function UserTopbarComponent(config, userService, snackBar) {
        this.config = config;
        this.userService = userService;
        this.snackBar = snackBar;
        this.count = 0;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(config.siteUrl);
    }
    UserTopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TeamHeadNotification();
        this.socket.on('doEstimation', function (data) {
            _this.TeamHeadNotification();
        });
        this.socket.on('resubmitEstimation', function (data) {
            _this.TeamHeadNotification();
        });
        this.socket.on('approveEstimation', function (data) {
            _this.TeamHeadNotification();
        });
        this.getProfile();
        this.socket.on('updateProfile', function (data) {
            _this.getProfile();
        });
    };
    UserTopbarComponent.prototype.TeamHeadNotification = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get TeamHeadNotification
        // Params        : 
        // Returns       : notification data
        // Author        : Rinsha
        // Date          : 14-03-2018
        // Last Modified : 14-03-2018, Rinsha
        // Desc          : check whether the loggedin user assigned for a project estimation(ie .as team head).
        this.userService.TeamHeadNotification().subscribe(function (res) {
            _this.count = 0;
            _this.teamheadNotif = res;
            // console.log(res);
            // this.notif_id = this.teamheadNotif.tbl_estimation_notifications.id;
            _this.count = _this.count + _this.teamheadNotif.length;
        });
        // ---------------------------------End-------------------------------------------
    };
    UserTopbarComponent.prototype.getProfile = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : getProfile
        // Params        : 
        // Returns       : logged in user details
        // Author        : Rinsha
        // Date          : 21-03-2018
        // Last Modified : 21-03-2018, Rinsha
        // Desc          : 
        this.userService.getProfile().subscribe(function (info) {
            _this.profile = info;
            _this.user_id = info.id;
            // console.log(info)
        });
        // ---------------------------------End-------------------------------------------
    };
    UserTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-topbar',
            template: __webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], UserTopbarComponent);
    return UserTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
        this.socketURL = "http://192.168.1.117:3000";
        this.siteUrl = "http://192.168.1.117:3000";
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
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin Login
    // Params        : admin, contains username and password
    // Returns       : Token, admin id and role
    // Author        : Rinsha
    // Date            : 01-03-2018
    // Last Modified   : 01-03-2018, Rinsha
    // Desc          : Admin login
    AdminService.prototype.adminLogin = function (admin) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "login", admin, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Store User Data
    // Params        : Token, admin id and role
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-03-2018
    // Last Modified : 05-03-2018, Rinsha
    // Desc          : To locally store admin data
    AdminService.prototype.storeUserData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all plans
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-03-2018
    // Last Modified : 05-03-2018, Rinsha
    // Desc          : getAllplans
    AdminService.prototype.getAllplans = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allplans', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all plans without default
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : getAllplans without default
    AdminService.prototype.getPlansWithoutDefault = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allPlansWithoutDefault', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
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
        return this.http.post(this.serviceUrl + "/get_counts_for_dashboard", {}, { headers: h })
            .map(function (res) { return res.json(); });
    };
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : add plan
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : add plan 
    AdminService.prototype.addPlan = function (plan) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'addPlan', plan, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : best plan
    // Params        : id and value
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : to change a plan to best
    AdminService.prototype.bestPlan = function (id, value) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'bestPlan/' + id, { status: value }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : delete plan
    // Params        : id 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : to delete a plan which is'nt used by any company
    AdminService.prototype.deletePlan = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'deletePlan/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get plan by id
    // Params        : id
    // Returns       : plan
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getplan
    AdminService.prototype.getPlan = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'planById/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : update plan
    // Params        : value from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : update a plan
    AdminService.prototype.updatePlan = function (plan) {
        // console.log(plan);
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'updatePlan', plan, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
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
    // ---------------------------------Start-------------------------------------------
    // Function      : get plan by id
    // Params        : id
    // Returns       : plan
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : getplan
    CompanyService.prototype.getPlan = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'planById/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : upgrade
    // Params        : data from form
    // Returns       : message
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : upgrade
    CompanyService.prototype.upgrade = function (id, data) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'upgrade/' + id, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all projects
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getAllProjects 
    CompanyService.prototype.getAllProject = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getAllProject', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get All pm in a company
    // Params        : 
    // Returns       : All pm in a company
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllPm = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getAllPm', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get All project category in a company
    // Params        : 
    // Returns       : All project category in a company
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllProjectCategory = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getAllProjectCategory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : add project
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.addProject = function (project) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'addProject', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
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
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.getLoggedinEntity = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get project by id
    // Params        : id
    // Returns       : project
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : getProject
    CompanyService.prototype.getProject = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getProjectById/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get developer team
    // Params        : 
    // Returns       : users in developer team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getDeveloperTeam
    CompanyService.prototype.getDeveloperTeam = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getDeveloperTeam', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get designer team
    // Params        : 
    // Returns       : users in designer team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getDesignerTeam
    CompanyService.prototype.getDesignerTeam = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getDesignerTeam', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get qc team
    // Params        : 
    // Returns       : users in qc team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getQCTeam
    CompanyService.prototype.getQCTeam = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getQCTeam', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : assign project
    // Params        : form data
    // Returns       : 
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : AssignTeamHead
    CompanyService.prototype.AssignTeamHead = function (project) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'AssignTeamHead', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : edit project
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          :
    CompanyService.prototype.editProject = function (project) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'editProject', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get category by id
    // Params        : id
    // Returns       : category
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : getCategoryById
    CompanyService.prototype.getCategoryById = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getCategoryById/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : delete project
    // Params        : id 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : to delete a project
    CompanyService.prototype.deleteProject = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'deleteProject/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all projects by status
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : getAllProjectByStatus
    CompanyService.prototype.getAllProjectByStatus = function (status) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getAllProjectByStatus/' + status, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get assignHeadNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
    CompanyService.prototype.assignHeadNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'assignHeadNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : close notification when pm sees the assign team head notification
    CompanyService.prototype.closeNotif = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'closeNotif/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get approveEstimationNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager have pending estimation approval notification
    CompanyService.prototype.approveEstimationNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'approveEstimationNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of estimation approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : close notification when pm sees the estimation approval notification
    CompanyService.prototype.closeNotif2 = function (id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'closeNotif2/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getProjectstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.getProjectstimations = function (pro_id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getProjectstimations/' + pro_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : resubmitEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.resubmitEstimation = function (est_id, resubmitData) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'resubmitEstimation/' + est_id, resubmitData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : acceptEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.acceptEstimation = function (est_id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'acceptEstimation/' + est_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get team heads of the project who does nt involved in estimations
    // Params        : project id
    // Returns       : team head info
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          : getTeamHeadsToEstimate
    CompanyService.prototype.getTeamHeadsToEstimate = function (p_id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'getTeamHeadsToEstimate/' + p_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardEstimationRequest
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.forwardEstimationRequest = function (p_id, head_id) {
        var Head_id = { head_id: head_id };
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'forwardEstimationRequest/' + p_id, JSON.stringify(Head_id), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getTotalEstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          :  
    CompanyService.prototype.getTotalEstimations = function (pro_id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getTotalEstimations/' + pro_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : send request to admin for approval
    // Params        : project id, assignee id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : sendForApproval
    CompanyService.prototype.sendForApproval = function (pro_id, pm_id) {
        var PM_id = { pm_id: pm_id };
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'sendForApproval/' + pro_id, PM_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get apprroveProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : check whether the loggedin company admin have any project to approve
    CompanyService.prototype.approveProjectNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'approveProjectNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project approval
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : close notification when pm sees the project approval notification
    CompanyService.prototype.closeNotif3 = function (id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'closeNotif3/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : accept project
    // Params        : cost, estimated hr, project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : acceptProject
    CompanyService.prototype.acceptProject = function (project_submit) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'acceptProject', project_submit, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : reject project
    // Params        : cost, estimated hr, project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : rejectProject
    CompanyService.prototype.rejectProject = function (project_submit) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'rejectProject', project_submit, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : resubmit project
    // Params        : cost, estimated hr, project id, pm id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : resubmitProject
    CompanyService.prototype.resubmitProject = function (project_submit) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'resubmitProject', project_submit, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get planProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any project to plan
    CompanyService.prototype.planProjectNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'planProjectNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project plan
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : close notification when pm sees the project plan notification
    CompanyService.prototype.closeNotif4 = function (id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'closeNotif4/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get resubmitEstimationNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any estimation to resubmit
    CompanyService.prototype.resubmitEstimationNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'resubmitEstimationNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAcceptedEstimations
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getAcceptedEstimations = function (pid) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getAcceptedEstimations/' + pid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardStatus
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : check whether the estimation request forwarded to any team head is pending
    CompanyService.prototype.getforwardStatus = function (pid) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getforwardStatus/' + pid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */]])
    ], SuperAdminService);
    return SuperAdminService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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




var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/user/';
    }
    UserService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    UserService.prototype.setHeaderWithAuthorization = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    UserService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : get pm by id
    // Params        : login id
    // Returns       : user info
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          : getPmByLoginid
    UserService.prototype.getPmByLoginid = function (login_id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getPmByLoginid/' + login_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getTeamMembers
    // Params        : login id, project id
    // Returns       : team members
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          :  Find user profile id of head from tbl_user_profie using login id. Then find the team id from tbl_estimation_teams using head id. Then team members from tbl_team_assocs. 
    UserService.prototype.getTeamMembers = function (project_id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getTeamMembers/' + project_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : add estimation
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          :  
    UserService.prototype.addEstimation = function (datafromForm) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'addEstimation', datafromForm, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get TeamHeadNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin user assigned for a project estimation(ie .as team head).
    UserService.prototype.TeamHeadNotification = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getTeamHeadNotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get notif by id
    // Params        : id
    // Returns       : notification
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the logged in member is the suitable person to estimate
    UserService.prototype.getNotif = function (notif_id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getNotif/' + notif_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getCurrentEstimation
    // Params        : notification id
    // Returns       : estimation
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          : get Current Estimation from notification id
    UserService.prototype.getCurrentEstimation = function (notif_id) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getCurrentEstimation/' + notif_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getProfile
    // Params        : 
    // Returns       : logged in user details
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : 
    UserService.prototype.getProfile = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getProfile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : updateUser
    // Params        : user data
    // Returns       : 
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : 
    UserService.prototype.updateUser = function (profile) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'updateUser', profile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.eafdcb78bd30b72df477.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.3cf141ae4bc89adfb25e.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/device.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "device.84feef168ba745bdd7b5.png";

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map