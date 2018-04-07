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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__ = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_topbar_admin_topbar_component__ = __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_company_admin_company_component__ = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_company_topbar_company_topbar_component__ = __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_company_footer_company_footer_component__ = __webpack_require__("../../../../../src/app/components/company-footer/company-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_company_sidebar_company_sidebar_component__ = __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_company_users_company_users_component__ = __webpack_require__("../../../../../src/app/components/company-users/company-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_company_project_category_company_project_category_component__ = __webpack_require__("../../../../../src/app/components/company-project-category/company-project-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_company_employee_leaves_company_employee_leaves_component__ = __webpack_require__("../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_company_request_management_company_request_management_component__ = __webpack_require__("../../../../../src/app/components/company-request-management/company-request-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_company_time_extension_request_company_time_extension_request_component__ = __webpack_require__("../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_company_activity_log_company_activity_log_component__ = __webpack_require__("../../../../../src/app/components/company-activity-log/company-activity-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_company_leave_request_list_company_leave_request_list_component__ = __webpack_require__("../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_company_user_leave_request_company_user_leave_request_component__ = __webpack_require__("../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_topbar_user_topbar_component__ = __webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_user_sidebar_user_sidebar_component__ = __webpack_require__("../../../../../src/app/components/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_user_footer_user_footer_component__ = __webpack_require__("../../../../../src/app/components/user-footer/user-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_user_dashboard_bar_user_dashboard_bar_component__ = __webpack_require__("../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_user_activity_log_user_activity_log_component__ = __webpack_require__("../../../../../src/app/components/user-activity-log/user-activity-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_user_leave_request_user_leave_request_component__ = __webpack_require__("../../../../../src/app/components/user-leave-request/user-leave-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_user_my_request_user_my_request_component__ = __webpack_require__("../../../../../src/app/components/user-my-request/user-my-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_user_my_request_mytask_user_my_request_mytask_component__ = __webpack_require__("../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_user_task_vs_status_user_task_vs_status_component__ = __webpack_require__("../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_user_progress_graph_user_progress_graph_component__ = __webpack_require__("../../../../../src/app/components/user-progress-graph/user-progress-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_user_bar_graph_user_bar_graph_component__ = __webpack_require__("../../../../../src/app/components/user-bar-graph/user-bar-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_user_status_graph_user_status_graph_component__ = __webpack_require__("../../../../../src/app/components/user-status-graph/user-status-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
    { path: 'admin-topbar', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */] },
    { path: 'admin-footer', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */] },
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'company-sidebar', component: __WEBPACK_IMPORTED_MODULE_27__components_company_sidebar_company_sidebar_component__["a" /* CompanySidebarComponent */] },
    { path: 'company-topbar', component: __WEBPACK_IMPORTED_MODULE_25__components_company_topbar_company_topbar_component__["a" /* CompanyTopbarComponent */] },
    { path: 'company-footer', component: __WEBPACK_IMPORTED_MODULE_26__components_company_footer_company_footer_component__["a" /* CompanyFooterComponent */] },
    { path: 'company-users', component: __WEBPACK_IMPORTED_MODULE_28__components_company_users_company_users_component__["a" /* CompanyUsersComponent */] },
    { path: 'company-project-category', component: __WEBPACK_IMPORTED_MODULE_29__components_company_project_category_company_project_category_component__["a" /* CompanyProjectCategoryComponent */] },
    { path: 'company-employee-leaves', component: __WEBPACK_IMPORTED_MODULE_30__components_company_employee_leaves_company_employee_leaves_component__["a" /* CompanyEmployeeLeavesComponent */] },
    { path: 'company-request-management', component: __WEBPACK_IMPORTED_MODULE_31__components_company_request_management_company_request_management_component__["a" /* CompanyRequestManagementComponent */] },
    { path: 'company-time-extension-request/:id1/:id2', component: __WEBPACK_IMPORTED_MODULE_32__components_company_time_extension_request_company_time_extension_request_component__["a" /* CompanyTimeExtensionRequestComponent */] },
    { path: 'user-topbar', component: __WEBPACK_IMPORTED_MODULE_36__components_user_topbar_user_topbar_component__["a" /* UserTopbarComponent */] },
    { path: 'user-sidebar', component: __WEBPACK_IMPORTED_MODULE_37__components_user_sidebar_user_sidebar_component__["a" /* UserSidebarComponent */] },
    { path: 'user-footer', component: __WEBPACK_IMPORTED_MODULE_38__components_user_footer_user_footer_component__["a" /* UserFooterComponent */] },
    { path: 'user-dashboard', component: __WEBPACK_IMPORTED_MODULE_39__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] },
    { path: 'user-activity-log', component: __WEBPACK_IMPORTED_MODULE_41__components_user_activity_log_user_activity_log_component__["a" /* UserActivityLogComponent */] },
    { path: 'user-leave-request', component: __WEBPACK_IMPORTED_MODULE_42__components_user_leave_request_user_leave_request_component__["a" /* UserLeaveRequestComponent */] },
    { path: 'company-activity-log', component: __WEBPACK_IMPORTED_MODULE_33__components_company_activity_log_company_activity_log_component__["a" /* CompanyActivityLogComponent */] },
    { path: 'user-my-request', component: __WEBPACK_IMPORTED_MODULE_43__components_user_my_request_user_my_request_component__["a" /* UserMyRequestComponent */] },
    { path: 'user-dashboard-bar', component: __WEBPACK_IMPORTED_MODULE_40__components_user_dashboard_bar_user_dashboard_bar_component__["a" /* UserDashboardBarComponent */] },
    { path: 'user-task-vs-status', component: __WEBPACK_IMPORTED_MODULE_40__components_user_dashboard_bar_user_dashboard_bar_component__["a" /* UserDashboardBarComponent */] },
    { path: 'user-progress-graph', component: __WEBPACK_IMPORTED_MODULE_46__components_user_progress_graph_user_progress_graph_component__["a" /* UserProgressGraphComponent */] },
    { path: 'user-bar-graph', component: __WEBPACK_IMPORTED_MODULE_47__components_user_bar_graph_user_bar_graph_component__["a" /* UserBarGraphComponent */] },
    { path: 'user-status-graph', component: __WEBPACK_IMPORTED_MODULE_48__components_user_status_graph_user_status_graph_component__["a" /* UserStatusGraphComponent */] },
    { path: 'company-leave-request-list', component: __WEBPACK_IMPORTED_MODULE_34__components_company_leave_request_list_company_leave_request_list_component__["a" /* CompanyLeaveRequestListComponent */] },
    { path: 'company-user-leave-request/:id', component: __WEBPACK_IMPORTED_MODULE_35__components_company_user_leave_request_company_user_leave_request_component__["a" /* CompanyUserLeaveRequestComponent */] },
    { path: 'user-my-request-mytask', component: __WEBPACK_IMPORTED_MODULE_44__components_user_my_request_mytask_user_my_request_mytask_component__["a" /* UserMyRequestMytaskComponent */] }
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_50__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material__["I" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_company_topbar_company_topbar_component__["a" /* CompanyTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_company_footer_company_footer_component__["a" /* CompanyFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_company_sidebar_company_sidebar_component__["a" /* CompanySidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_company_users_company_users_component__["a" /* CompanyUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_company_project_category_company_project_category_component__["a" /* CompanyProjectCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_company_employee_leaves_company_employee_leaves_component__["a" /* CompanyEmployeeLeavesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_company_request_management_company_request_management_component__["a" /* CompanyRequestManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_company_time_extension_request_company_time_extension_request_component__["a" /* CompanyTimeExtensionRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_company_activity_log_company_activity_log_component__["a" /* CompanyActivityLogComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_user_topbar_user_topbar_component__["a" /* UserTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_user_sidebar_user_sidebar_component__["a" /* UserSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_user_footer_user_footer_component__["a" /* UserFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_user_activity_log_user_activity_log_component__["a" /* UserActivityLogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_user_leave_request_user_leave_request_component__["a" /* UserLeaveRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_user_my_request_user_my_request_component__["a" /* UserMyRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_user_dashboard_bar_user_dashboard_bar_component__["a" /* UserDashboardBarComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_user_task_vs_status_user_task_vs_status_component__["a" /* UserTaskVsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_user_progress_graph_user_progress_graph_component__["a" /* UserProgressGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_user_bar_graph_user_bar_graph_component__["a" /* UserBarGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_user_status_graph_user_status_graph_component__["a" /* UserStatusGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_company_leave_request_list_company_leave_request_list_component__["a" /* CompanyLeaveRequestListComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_company_user_leave_request_company_user_leave_request_component__["a" /* CompanyUserLeaveRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_user_my_request_mytask_user_my_request_mytask_component__["a" /* UserMyRequestMytaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_daterangepicker__["Daterangepicker"],
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_12__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_13__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */]],
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
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\r\n        <div class=\"\"  >\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 25 25\"\r\n            to=\"360 25 25\"\r\n            dur=\"0.6s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    </div> -->\r\n    \r\n\r\n    <div class=\"col-md-12 optionz\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"example-header\">\r\n                  <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-2 pull-right\">\r\n              <div *ngIf=\"all_value\">\r\n              <mat-form-field class=\"filter\"> \r\n                  \r\n                    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n                      <!-- <mat-option>None</mat-option> -->\r\n                      <mat-option value=\"all\">All</mat-option>\r\n                      <mat-option value=\"Active\">Active</mat-option>\r\n                      <mat-option value=\"Block\">Block</mat-option>\r\n                      <mat-option value=\"Delete\">Delete </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--    \r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div> -->\r\n       \r\n    <div class=\"example-container mat-elevation-z8 \">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"slno\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"companyname\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"email\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.email}} </mat-cell>\r\n</ng-container>\r\n  \r\n   <!-- Progress Column -->\r\n   <ng-container matColumnDef=\"contactnumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"companystatus\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.cmp_status}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\r\n        <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\"> Blocked</div>\r\n        <div *ngIf=\" row.tbl_login.delete_status==true\"> Deleted</div>\r\n      </mat-cell>\r\n    </ng-container>\r\n  <ng-container matColumnDef=\"action\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\r\n                <i class=\"material-icons\">delete</i>\r\n              <span>Delete</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\r\n              <i class=\"material-icons\">delete_forever</i>\r\n            <span>Deleted</span>\r\n          </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Block</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Unblock</span>\r\n            </button>\r\n          </mat-menu>\r\n       \r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n  <div class=\"col-md-15 \">\r\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n          <mat-spinner></mat-spinner>\r\n         </div> -->\r\n  </div>\r\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n      <div class=\"col-md-4 col-md-offset-4\">\r\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n      </div>\r\n    </div>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n\r\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Delete </h4>\r\n        </div>\r\n        <!-- <div class=\"modal-header\"> -->\r\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body delete-popup\">\r\n          <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n          <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAllCompaniesComponent; });
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




var AdminAllCompaniesComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : All users
    function AdminAllCompaniesComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
    }
    AdminAllCompaniesComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        //  console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllcompanies().subscribe(function (data) {
                console.log(data);
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllblockedcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAlldeletedcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    AdminAllCompaniesComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminAllCompaniesComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminAllCompaniesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminAllCompaniesComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    AdminAllCompaniesComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.showSpinner = true;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    AdminAllCompaniesComponent.prototype.blockCompany = function (id) {
        var _this = this;
        console.log(id);
        this.adminService.blockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    AdminAllCompaniesComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminAllCompaniesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminAllCompaniesComponent.prototype, "sort", void 0);
    AdminAllCompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-all-companies',
            template: __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], AdminAllCompaniesComponent);
    return AdminAllCompaniesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n      \r\n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n                 <!-- sidebar-->\r\n               \r\n                 <admin-sidebar></admin-sidebar> \r\n                 <!-- end sidebar-->\r\n            </div>\r\n            \r\n            <div class=\"col-md-12 col-xs-12\">\r\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n                <!-- topbar-->\r\n                <admin-topbar></admin-topbar> \r\n                \r\n                    <!-- end topbar-->\r\n                \r\n                \r\n                <div class=\"user-dashboard\">\r\n                        <h2>COMPANY</h2>\r\n                        <ul class=\"breadcrumb\">\r\n                          <li><a href=\"#\">company</a></li>\r\n                          \r\n                          \r\n                          <li>{{viewComp}}</li>\r\n                        </ul>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2 col-sm-2 col-xs-12 gutter\">\r\n\r\n                            <ul class=\"nav tabs side-bar-menu\">\r\n                                <li [ngClass]=\"{'active1': viewComp == 'AllCompanies'}\"><a (click)=\"updateView('AllCompanies')\" href=\"#tab1\" data-toggle=\"tab\">All Companies</a></li>\r\n                                <li [ngClass]=\"{'active1': viewComp == 'Subscribed'}\"><a (click)=\"updateView('Subscribed')\" href=\"#tab2\" data-toggle=\"tab\">Subscribed</a></li> \r\n                                <li [ngClass]=\"{'active1': viewComp == 'Trial'}\"><a (click)=\"updateView('Trial')\" href=\"#tab3\" data-toggle=\"tab\">Trial</a></li>\r\n                                <li [ngClass]=\"{'active1': viewComp == 'NotVerified'}\"><a (click)=\"updateView('NotVerified')\" href=\"#tab4\" data-toggle=\"tab\">Not Verified</a></li>  \r\n                                <li [ngClass]=\"{'active1': viewComp == 'Expired'}\"><a (click)=\"updateView('Expired')\" href=\"#tab5\" data-toggle=\"tab\">Expired</a></li>\r\n                                              \r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"col-md-10 col-sm-10 col-xs-12 gutter\">\r\n\r\n                            <div *ngIf=\"viewComp == 'AllCompanies'\">\r\n                                <admin-all-companies></admin-all-companies>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'Subscribed'\">\r\n                                  <admin-subscribed></admin-subscribed>\r\n                                </div>\r\n                              <div *ngIf=\"viewComp == 'Trial'\">\r\n                                <admin-trial></admin-trial>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'NotVerified'\">\r\n                                <admin-not-verified></admin-not-verified>\r\n                              </div>\r\n                              <div *ngIf=\"viewComp == 'Expired'\">\r\n                                <admin-expired></admin-expired>\r\n                              </div>\r\n                            \r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n                <!-- footer-->\r\n                <admin-footer></admin-footer>\r\n       <!-- end footer-->\r\n        </div>\r\n         </div>\r\n        <!-- Modal -->\r\n     </body>"

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

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n    <div class=\"container-fluid display-table\">\r\n        <div class=\"row display-table-row\">\r\n      \r\n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\r\n                 <!-- sidebar-->\r\n               \r\n                 <admin-sidebar></admin-sidebar> \r\n                 <!-- end sidebar-->\r\n            </div>\r\n            \r\n            <div class=\"col-md-12 col-xs-12\">\r\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n                <!-- topbar-->\r\n                <admin-topbar></admin-topbar> \r\n                \r\n                    <!-- end topbar-->\r\n                \r\n                \r\n                <div class=\"user-dashboard\">\r\n                    <h1>Hello, JS</h1>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5 col-sm-5 col-xs-12 gutter\">\r\n\r\n                            <div class=\"sales\">\r\n                                <h2>Your Sale</h2>\r\n\r\n                                <div class=\"btn-group\">\r\n                                    <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <span>Period:</span> Last Year\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a href=\"#\">2012</a>\r\n                                        <a href=\"#\">2014</a>\r\n                                        <a href=\"#\">2015</a>\r\n                                        <a href=\"#\">2016</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\r\n\r\n                            <div class=\"sales report\">\r\n                                <h2>Report</h2>\r\n                                <div class=\"btn-group\">\r\n                                    <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <span>Period:</span> Last Year\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a href=\"#\">2012</a>\r\n                                        <a href=\"#\">2014</a>\r\n                                        <a href=\"#\">2015</a>\r\n                                        <a href=\"#\">2016</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n                <!-- footer-->\r\n                <admin-footer></admin-footer>\r\n       <!-- end footer-->\r\n        </div>\r\n         </div>\r\n        <!-- Modal -->\r\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
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

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\r\n        <div class=\"\"  >\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 25 25\"\r\n            to=\"360 25 25\"\r\n            dur=\"0.6s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    </div> -->\r\n    \r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n              <div class=\"example-header\">\r\n                  <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              <div *ngIf=\"all_value\">\r\n              <mat-form-field class=\"filter\"> \r\n                  \r\n                    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n                      <!-- <mat-option>None</mat-option> -->\r\n                      <mat-option value=\"all\">All</mat-option>\r\n                      <mat-option value=\"Active\">Active</mat-option>\r\n                      <mat-option value=\"Block\">Block</mat-option>\r\n                      <mat-option value=\"Delete\">Delete </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--    \r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div> -->\r\n       \r\n    <div class=\"example-container mat-elevation-z8 \">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"slno\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"companyname\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"email\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.email}} </mat-cell>\r\n</ng-container>\r\n  \r\n   <!-- Progress Column -->\r\n   <ng-container matColumnDef=\"contactnumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"companystatus\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.cmp_status}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\r\n        <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\"> Blocked</div>\r\n        <div *ngIf=\" row.tbl_login.delete_status==true\"> Deleted</div>\r\n      </mat-cell>\r\n    </ng-container>\r\n  <ng-container matColumnDef=\"action\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\r\n                <i class=\"material-icons\">delete</i>\r\n              <span>Delete</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\r\n              <i class=\"material-icons\">delete_forever</i>\r\n            <span>Deleted</span>\r\n          </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Block</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Unblock</span>\r\n            </button>\r\n          </mat-menu>\r\n       \r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n  <div class=\"col-md-15 \">\r\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n          <mat-spinner></mat-spinner>\r\n         </div> -->\r\n  </div>\r\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n      <div class=\"col-md-4 col-md-offset-4\">\r\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n      </div>\r\n    </div>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n\r\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Delete </h4>\r\n        </div>\r\n        <!-- <div class=\"modal-header\"> -->\r\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body delete-popup\">\r\n          <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n          <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminExpiredComponent; });
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




var AdminExpiredComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin admin management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified :
    // Desc          : Allexpiredcompanies
    function AdminExpiredComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
    }
    AdminExpiredComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllexpiredcompanies().subscribe(function (data) {
                console.log(data);
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllexpiredactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllexpiredblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllexpireddeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    AdminExpiredComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminExpiredComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminExpiredComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminExpiredComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    AdminExpiredComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.showSpinner = true;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    AdminExpiredComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    AdminExpiredComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminExpiredComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminExpiredComponent.prototype, "sort", void 0);
    AdminExpiredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-expired',
            template: __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
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
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\r\n        <div class=\"\"  >\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 25 25\"\r\n            to=\"360 25 25\"\r\n            dur=\"0.6s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    </div> -->\r\n    \r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n              <div class=\"example-header\">\r\n                  <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              <div *ngIf=\"all_value\">\r\n              <mat-form-field class=\"filter\"> \r\n                  \r\n                    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n                      <!-- <mat-option>None</mat-option> -->\r\n                      <mat-option value=\"all\">All</mat-option>\r\n                      <mat-option value=\"Active\">Active</mat-option>\r\n                      <mat-option value=\"Block\">Block</mat-option>\r\n                      <mat-option value=\"Delete\">Delete </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--    \r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div> -->\r\n       \r\n    <div class=\"example-container mat-elevation-z8 \">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"slno\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"companyname\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"email\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.email}} </mat-cell>\r\n</ng-container>\r\n  \r\n   <!-- Progress Column -->\r\n   <ng-container matColumnDef=\"contactnumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"companystatus\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.cmp_status}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\r\n        <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\"> Blocked</div>\r\n        <div *ngIf=\" row.tbl_login.delete_status==true\"> Deleted</div>\r\n      </mat-cell>\r\n    </ng-container>\r\n  <ng-container matColumnDef=\"action\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\r\n                <i class=\"material-icons\">delete</i>\r\n              <span>Delete</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\r\n              <i class=\"material-icons\">delete_forever</i>\r\n            <span>Deleted</span>\r\n          </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Block</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Unblock</span>\r\n            </button>\r\n          </mat-menu>\r\n       \r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n  <div class=\"col-md-15 \">\r\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n          <mat-spinner></mat-spinner>\r\n         </div> -->\r\n  </div>\r\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n      <div class=\"col-md-4 col-md-offset-4\">\r\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n      </div>\r\n    </div>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n\r\n\r\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Delete </h4>\r\n        </div>\r\n        <!-- <div class=\"modal-header\"> -->\r\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body delete-popup\">\r\n          <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n          <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNotVerifiedComponent; });
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




var AdminNotVerifiedComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : All users
    function AdminNotVerifiedComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
    }
    AdminNotVerifiedComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllnotverficompanies().subscribe(function (data) {
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllnotverfiactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllnotverfiblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllnotverfideletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    AdminNotVerifiedComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminNotVerifiedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminNotVerifiedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminNotVerifiedComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    AdminNotVerifiedComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.showSpinner = true;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    AdminNotVerifiedComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    AdminNotVerifiedComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminNotVerifiedComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminNotVerifiedComponent.prototype, "sort", void 0);
    AdminNotVerifiedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-not-verified',
            template: __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
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
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n\r\n\r\n\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\r\n        <div class=\"\"  >\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 25 25\"\r\n            to=\"360 25 25\"\r\n            dur=\"0.6s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    </div> -->\r\n    \r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n              <div class=\"example-header\">\r\n                  <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              <div *ngIf=\"all_value\">\r\n              <mat-form-field class=\"filter\"> \r\n                  \r\n                    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n                      <!-- <mat-option>None</mat-option> -->\r\n                      <mat-option value=\"all\">All</mat-option>\r\n                      <mat-option value=\"Active\">Active</mat-option>\r\n                      <mat-option value=\"Block\">Block</mat-option>\r\n                      <mat-option value=\"Delete\">Delete </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--    \r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div> -->\r\n       \r\n    <div class=\"example-container mat-elevation-z8 \">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"slno\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"companyname\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"email\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.email}} </mat-cell>\r\n</ng-container>\r\n  \r\n   <!-- Progress Column -->\r\n   <ng-container matColumnDef=\"contactnumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"companystatus\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.cmp_status}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\r\n        <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\"> Blocked</div>\r\n        <div *ngIf=\" row.tbl_login.delete_status==true\"> Deleted</div>\r\n      </mat-cell>\r\n    </ng-container>\r\n  <ng-container matColumnDef=\"action\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\r\n                <i class=\"material-icons\">delete</i>\r\n              <span>Delete</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\r\n              <i class=\"material-icons\">delete_forever</i>\r\n            <span>Deleted</span>\r\n          </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Block</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Unblock</span>\r\n            </button>\r\n            \r\n          </mat-menu>\r\n       \r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n  <div class=\"col-md-15 \">\r\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n          <mat-spinner></mat-spinner>\r\n         </div> -->\r\n  </div>\r\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n      <div class=\"col-md-4 col-md-offset-4\">\r\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n      </div>\r\n    </div>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n\r\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Delete </h4>\r\n        </div>\r\n        <!-- <div class=\"modal-header\"> -->\r\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body delete-popup\">\r\n          <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n          <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSubscribedComponent; });
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




var AdminSubscribedComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017 
    // Last Modified : 03-01-2018
    // Desc          : All users
    function AdminSubscribedComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
    }
    AdminSubscribedComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllsubcompanies().subscribe(function (data) {
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllsubactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllsubblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllsubdeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    AdminSubscribedComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminSubscribedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminSubscribedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminSubscribedComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    AdminSubscribedComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.showSpinner = true;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    AdminSubscribedComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    AdminSubscribedComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminSubscribedComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminSubscribedComponent.prototype, "sort", void 0);
    AdminSubscribedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-subscribed',
            template: __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], AdminSubscribedComponent);
    return AdminSubscribedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drp2 .dropdown-menu{padding:0;right:0;left:inherit;}\r\n.drp2 .dropdown-menu li a{padding:10px 20px;}\r\n.drp2 .navbar-content{text-align:left;}\r\n.drp2 .dropdown-menu li{width:100%;}\r\n.drp2 .dropdown-menu > li > a:hover p{color:#fff !important;}\r\n.dropdown-menu{margin-bottom:0;}\r\nheader .dropdown-menu{top: 261%;}\r\n.dropdown-menu p {\r\n    margin: 0 0 0px;\r\n}\r\n.media-heading{font-size:14px;}\r\n.closbtn{\r\n    border-radius: 50%;\r\n    height: 15px;\r\n    width: 15px;\r\n    /* padding-top: 0; */\r\n    margin-right: 12px;\r\n    line-height: 13px;\r\n    font-size: 9px;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: 0;\r\n    background: #fe6a07;\r\n    border: none;\r\n}\r\n.dropdown-menu .divider {\r\n    height: 1px;\r\n    margin: 0px 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n}\r\n.head{background: #fe6a07;color:#fff !important;}\r\n.head>a{color:#fff !important;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <header>\r\n            \r\n            <div class=\"col-md-5 pull-right\">\r\n                <div class=\"header-rightside\">\r\n                    <ul class=\"list-inline header-top pull-right\">\r\n                        <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\r\n                        \r\n                        <li class=\"dropdown drp2\">\r\n                            <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                <span class=\"label label-primary\">{{count}}</span>\r\n \r\n                            </a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li class=\"head\">\r\n                                    <a href=\"#\"><div class=\"navbar-content\">\r\n                                        <span>New Company Register</span>\r\n                                        <!-- <p class=\"text-muted\">\r\n                                            Project Name\r\n                                        </p>\r\n                                        <div class=\"alert\">\r\n                                                <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" title=\"close\">×</a>\r\n                                            <strong>Success!</strong> Indicates a successful or positive action.\r\n                                        </div> -->\r\n                 \r\n                                    </div></a>\r\n                                </li>\r\n                                 <div class=\"divider\"> </div>\r\n                                 <div *ngFor=\"let item of notif\">\r\n                                 <li>\r\n                                        <div class=\"media\" >\r\n                                                \r\n                                        <div class=\"media-body\" >\r\n                                            <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' id='1'(click)=\"viewstatus(item.id)\" >x</button>\r\n                                             </div>\r\n                                                <h4 class=\"media-heading\"  >{{item.cmp_name}}</h4><p>Registered newely</p>\r\n                                               \r\n                                        </div>\r\n                                    </div>\r\n                                   \r\n                                 </li>\r\n                                 <hr>\r\n                                </div> \r\n                                <div *ngIf=\"count == 0\">\r\n                                        \r\n                                             <h5 style=\"color : red; margin-left:20px; \">No Data</h5>\r\n                                             </div>    \r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                                <b class=\"caret\"></b></a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li>\r\n                                    <div class=\"navbar-content\">\r\n                                        <span>JS Krishna</span>\r\n                                        <p class=\"text-muted small\">\r\n                                            me@jskrishna.com\r\n                                        </p>\r\n                                        <div class=\"divider\">\r\n                                        </div>\r\n                                        <a href=\"#\" class=\"view btn-sm active\">View Profile</a> \r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-topbar/admin-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
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
    function AdminTopbarComponent(adminService, router, config) {
        this.adminService = adminService;
        this.router = router;
        this.config = config;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.siteUrl);
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin  management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018 
    // Last Modified : 
    // Desc          : Adminnotification
    AdminTopbarComponent.prototype.refresh = function () {
        var _this = this;
        this.adminService.getAdminnotification().subscribe(function (data) {
            _this.notif = data;
            _this.count = data.length;
            console.log(_this.notif);
        });
    };
    AdminTopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('new company', function (data) {
            _this.refresh();
        });
    };
    // viewstatus admin
    AdminTopbarComponent.prototype.viewstatus = function (id) {
        var _this = this;
        console.log("asf" + id);
        this.adminService.viewstatusadmin(id).subscribe(function (data) {
            //console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    AdminTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-topbar',
            template: __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */]])
    ], AdminTopbarComponent);
    return AdminTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n\r\n\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\r\n        <div class=\"\"  >\r\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\r\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 25 25\"\r\n            to=\"360 25 25\"\r\n            dur=\"0.6s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    </div> -->\r\n    \r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n              <div class=\"example-header\">\r\n                  <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              <div *ngIf=\"all_value\">\r\n              <mat-form-field class=\"filter\"> \r\n                  \r\n                    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n                      <!-- <mat-option>None</mat-option> -->\r\n                      <mat-option value=\"all\">All</mat-option>\r\n                      <mat-option value=\"Active\">Active</mat-option>\r\n                      <mat-option value=\"Block\">Block</mat-option>\r\n                      <mat-option value=\"Delete\">Delete </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<!--    \r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div> -->\r\n       \r\n    <div class=\"example-container mat-elevation-z8 \">\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"slno\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"companyname\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n <!-- Name Column -->\r\n <ng-container matColumnDef=\"email\">\r\n  <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n  <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.email}} </mat-cell>\r\n</ng-container>\r\n  \r\n   <!-- Progress Column -->\r\n   <ng-container matColumnDef=\"contactnumber\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"companystatus\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.tbl_login.cmp_status}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\r\n        <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\"> Blocked</div>\r\n        <div *ngIf=\" row.tbl_login.delete_status==true\"> Deleted</div>\r\n      </mat-cell>\r\n    </ng-container>\r\n  <ng-container matColumnDef=\"action\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\r\n                <i class=\"material-icons\">delete</i>\r\n              <span>Delete</span>\r\n            </button>\r\n            <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n              <i class=\"material-icons\">delete_forever</i>\r\n            <span>Deleted</span>\r\n          </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Block</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\r\n                <i class=\"material-icons\">block</i>\r\n              <span>Unblock</span>\r\n            </button>\r\n            <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n          </mat-menu>\r\n       \r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n  <div class=\"col-md-15 \">\r\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\r\n          <mat-spinner></mat-spinner>\r\n         </div> -->\r\n  </div>\r\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\r\n      <div class=\"col-md-4 col-md-offset-4\">\r\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\r\n      </div>\r\n    </div>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n\r\n\r\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Delete </h4>\r\n        </div>\r\n        <!-- <div class=\"modal-header\"> -->\r\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body delete-popup\">\r\n          <i class=\"fa fa-exclamation\"></i>\r\n\r\n\r\n          <h4 class=\"textalign\">Are you sure?</h4>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTrialComponent; });
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




var AdminTrialComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : All users
    function AdminTrialComponent(adminService, routes, snackBar) {
        this.adminService = adminService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
    }
    AdminTrialComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAlltrialcompanies().subscribe(function (data) {
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAlltrialactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAlltrialblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAlltrialdeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    AdminTrialComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminTrialComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminTrialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminTrialComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    AdminTrialComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.showSpinner = true;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    AdminTrialComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    AdminTrialComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AdminTrialComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], AdminTrialComponent.prototype, "sort", void 0);
    AdminTrialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-trial',
            template: __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], AdminTrialComponent);
    return AdminTrialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-activity-log/company-activity-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n.form-control2{border:none;border-bottom:1px solid #ccc;border-radius:0;box-shadow:none;    margin-top: 12px;}\r\n.mr-top{     padding-top: 20px;\r\n  font-weight: 500;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-activity-log/company-activity-log.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                    <div class=\"user-dashboard\">\n                        <h2>Reports </h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">Reports</a></li>\n                          \n                          \n                          <li>Activity Log</li>\n                        </ul>\n                    <div class=\"row\">\n  <!-----------------------------------------------------------------table-------------------------------------->\n   \n  \n\n\n  <div class=\"col-md-12\">\n      <div class=\"row\">\n      <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div> -->\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-5\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div> \n            \n           \n                <div class=\"col-md-5 col-xs-5 col-md-push-3\">\n                    <div class=\"row\">\n                          <div class=\"col-md-3 col-xs-4\">\n                            <label class=\"mr-top\">Date Range Filter</label>\n                          </div>\n                          <div class=\"col-md-5 col-xs-8\">\n                            <input type=\"text\" class=\"form-control form-control2\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedStartDate($event, daterange)\" />\n                          </div>\n                    </div>\n              \n           \n               </div>\n               <div class=\"col-md-2 col-xs-2 pull-right\">\n                  <div  class=\"col-md-11 pull-right\">\n                  <mat-form-field class=\"filter\"> \n                      \n                        <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\n                        \n                          <mat-option value=\"all\">All</mat-option>\n                 \n                          <mat-option  *ngFor=\"let item of users\"  value={{item.id}} >{{item.f_name}}</mat-option>\n                         \n                        </mat-select>\n                      </mat-form-field>\n              </div>\n            </div>\n        </div>\n        \n      </div>\n  \n  \n\n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"slno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n    </ng-container>\n          <!-- Name Column -->\n      <ng-container matColumnDef=\"user\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>NAME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.tbl_user_profile.f_name}}</mat-cell>\n      </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>DATE </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.createdAt | date:'EEE, d MMM,y'}}</mat-cell>\n      </ng-container>\n           <!-- Name Column -->\n      <ng-container matColumnDef=\"time\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>TIME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.createdAt | date:'shortTime'}} </mat-cell>\n      </ng-container>\n           <!-- Name Column -->\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>ACTION </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.action}} </mat-cell>\n      </ng-container>\n  \n  \n\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n    \n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  \n  \n        \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-activity-log/company-activity-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyActivityLogComponent; });
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




var CompanyActivityLogComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : UserActivitylog
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified : 
    // Desc          : UserActivitylog
    function CompanyActivityLogComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'user', 'date', 'time', 'action'];
        this.notExist = false;
        this.selected = 'all';
        // all_value =false;
        // startDate:any='';
        // endDate:any='';
        this.endFrom = '';
        this.endUpto = '';
        this.showSpinner = false;
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
    }
    CompanyActivityLogComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        var data = { startDate: this.endFrom._d, endDate: this.endUpto._d, user_id: this.selected };
        console.log(data);
        this.companyService.getDatefilterforlog(data).subscribe(function (data) {
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    CompanyActivityLogComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyActivityLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getAllusers().subscribe(function (res) {
            _this.users = res;
        });
        this.refresh();
    };
    CompanyActivityLogComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyActivityLogComponent.prototype.selectedStartDate = function (value, datepicker) {
        var _this = this;
        this.endFrom = value.start;
        this.endUpto = value.end;
        var data = { startDate: this.endFrom, endDate: this.endUpto, user_id: this.selected };
        this.companyService.getDatefilterforlog(data).subscribe(function (res) {
            //  console.log(res);
            _this.loadToDataTable(res);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyActivityLogComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyActivityLogComponent.prototype, "sort", void 0);
    CompanyActivityLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-activity-log',
            template: __webpack_require__("../../../../../src/app/components/company-activity-log/company-activity-log.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-activity-log/company-activity-log.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyActivityLogComponent);
    return CompanyActivityLogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.modal-dialog{max-width:900px !important;width:100%;}\r\n.user{width:280px;height:280px;border-radius:50%;margin:0 auto;float:none;overflow:hidden; background: #d45d0e;margin-top: 20%;\r\n    margin-bottom: 20%;text-align:center;}\r\n    .user:hover{opacity:0.6;cursor:pointer;}\r\n.user img{width:120%;max-width: 287px;min-width: 287px;}\r\n\r\n.brdr-left{    width: 1px;\r\n    height: 155px;\r\n    float: left;\r\n    margin-top: 36%;\r\n    display: inherit;\r\n    background: #efecec;\r\n    margin-right: 21px;}\r\n  .user .fa-camera{color:#fff;font-size:50px;text-align:center;background: #d45d0e;padding-top:204%;}\r\n.disply{width:auto; display: -webkit-inline-box;}\r\nlabel{font-weight: 500;}\r\n.paddtop{padding-top:17px;}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                        <h2>Master Settings</h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">Master Settings</a></li>\n                          \n                          \n                          <li>Employee Leave List </li>\n                        </ul>\n                    <div class=\"row\">\n                      <!-----------------------------------------------------------------table-------------------------------------->\n                            \n  \n  <!-- <p>You selected: {{selected}} </p> -->\n  \n  <div class=\"col-md-12\">\n        <div class=\"row\">\n        <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n            <div class=\"\"  >\n                <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n            <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n              <animateTransform attributeType=\"xml\"\n                attributeName=\"transform\"\n                type=\"rotate\"\n                from=\"0 25 25\"\n                to=\"360 25 25\"\n                dur=\"0.6s\"\n                repeatCount=\"indefinite\"/>\n              </path>\n            </svg>\n        </div>\n        </div> -->\n        \n    \n        <div class=\"col-md-12 optionz\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"example-header\">\n                      <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                      </mat-form-field>\n                    </div>\n              </div>\n             \n          </div>\n        </div>\n    \n    \n    <!--    \n              <div class=\"example-header\" >\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n              </div> -->\n           \n        <div class=\"example-container mat-elevation-z8 \">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n     <!-- Name Column -->\n     <ng-container matColumnDef=\"slno\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n      </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> NAME </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.tbl_user_profile.f_name}} </mat-cell>\n        </ng-container>\n                <!-- Name Column -->\n        <ng-container matColumnDef=\"leave_start_date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Leave Start Date </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.start_date}} </mat-cell>\n        </ng-container>\n              <!-- Name Column -->\n        <ng-container matColumnDef=\"start_available_hrs\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Start Available hrs </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.start_available_hrs}} </mat-cell>\n        </ng-container>  \n                <!-- Name Column -->\n        <ng-container matColumnDef=\"leave_end_date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> leave_end_date </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.end_date}} </mat-cell>\n        </ng-container>\n                <!-- Name Column -->\n        <ng-container matColumnDef=\"end_available_hrs\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> end_available_hrs </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.end_available_hrs}} </mat-cell>\n        </ng-container>\n    \n     \n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button  (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\n                    <i class=\"material-icons\">delete</i>\n                  <span>Delete</span>\n                </button>\n                <button  (click)=\"getEditId(row.id)\" data-toggle=\"modal\" data-target=\"#editModal\" mat-menu-item >\n                        <i class=\"material-icons\">mode_edit</i>\n                      <span>Edit</span>\n                    </button>\n               \n            \n              </mat-menu>\n           \n          </mat-cell>\n      </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n      <div class=\"col-md-15 \">\n          <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n              <mat-spinner></mat-spinner>\n             </div> -->\n      </div>\n      <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n          <div class=\"col-md-4 col-md-offset-4\">\n              <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n          </div>\n        </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n    \n    \n    </div>\n    </div>\n    <div class=\"add-button\">\n        <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" (click)=\"addNewEmpleave()\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n      </div>\n    <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n    \n    <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Delete </h4>\n            </div>\n            <!-- <div class=\"modal-header\"> -->\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n            <!-- </div> -->\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n    \n    \n              <h4 class=\"textalign\">Are you sure?</h4>\n    \n            </div>\n    \n            <div class=\"modal-footer\">\n              <button type=\"button\" (click)=\"deleteEmpleave(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n      <!-----------------------------------------------------------------delete modal-------------------------------------->\n       <!-----------------------------------------------------------------add modal-------------------------------------->\n       <div id=\"addModal\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n  \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n              <h4 class=\"modal-title\">Add Employee Leave</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"addEmpleave(newEmpleave);\" novalidate>\n              <div class=\"col-md-11\">\n             \n                        \n                  <div class=\"form-group\" >\n                      \n                        <div class=\"col-md-3 paddtop\">\n                          <label>Leave Start Date</label>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker1\" name =\"startdate\" [(ngModel)]=\"newEmpleave.startdate\" placeholder=\"Choose a date\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                              </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 paddtop\">\n                            <label>Available hrs(HH:MM)</label>\n                         </div>\n                         <div class=\"col-md-3\">\n                           <div class=\"row\">\n                              <ngb-timepicker  name=\"startavlhr\" [(ngModel)]=\"newEmpleave.startavlhr\"  required></ngb-timepicker>\n                             \n                                <!-- <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.startavlhr.hour}}</div>\n                                <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n                                  <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n                                  <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n                                  <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n                                </div> -->\n                             \n                            </div>\n                          \n                         </div>\n                         <div class=\"clearfix\"></div>\n                         <div class=\"col-md-12\">\n                            <hr>\n\n                        </div>\n\n                         <div class=\"col-md-3 paddtop\">\n                            <label>Leave End Date</label>\n                          </div>\n                          <div class=\"col-md-3\">\n                            \n                              <mat-form-field class=\"example-full-width\">\n                                  <input matInput [matDatepickerFilter]=\"myFilter\"  [matDatepicker]=\"picker2\" name =\"enddate\" [(ngModel)]=\"newEmpleave.enddate\" placeholder=\"Choose a date\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker2></mat-datepicker>\n                                </mat-form-field>\n                          </div>\n                          <div class=\"col-md-2 paddtop\">\n                              <label>Available hrs(HH:MM)</label>\n                           </div>\n                           <div class=\"col-md-3\">\n                              <div class=\"row\">\n                                  <ngb-timepicker  name=\"endavlhr\" [(ngModel)]=\"newEmpleave.endavlhr\"  required></ngb-timepicker>\n                                 \n                              <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                              <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                                <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                                <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                                <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                              </div> -->\n                             \n                            </div>\n                          </div>\n                          \n                           <div class=\"clearfix\"></div>\n                          <div class=\"col-md-12\">\n                              <hr>\n\n                          </div>\n                           <div class=\"col-md-12\">\n                              <div class=\"col-md-3 paddtop\">\n                                  <label>Employee</label>\n                               </div>\n                               <div class=\"col-md-3\">\n                                  <mat-form-field>\n                                      \n                                      <mat-select placeholder=\"Select employee \"  name=\"emp_id\"  [(ngModel)]=\"newEmpleave.emp_id\" required>\n                                      \n                                          <mat-option  *ngFor=\"let item of companyemployee\"  [value]=\"item.id\" >{{item.f_name}}</mat-option>\n                                                                      \n                                       </mat-select>\n                                  </mat-form-field>   \n                               </div>\n                               \n                           </div>\n                           \n                           <!-- <div class=\"col-md-12\">\n                              <div class=\"col-md-3 paddtop\">\n                                  <label>Leave Hour</label> \n                               </div>\n                               <div class=\"col-md-3 paddtop\">\n                                  <label>10</label> \n                               </div>\n                               \n                           </div> -->\n                           \n                          \n                    </div>\n                    \n                <br>\n      \n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n  \n                  </div>\n                  <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                    <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                      xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div> -->\n  \n                </div>\n  \n             \n              </div>\n             \n            \n            </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n  \n        </div>\n      </div>\n       <!----------------------------------------addModal------------------------------>\n         <!-- --------------------------------------------- edit modal ----------------------------------------------------------------- -->\n    \n  \n      <div id=\"editModal\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n  \n          <!-- Modal content-->\n          <div class=\"modal-content\"> \n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n              <h4 class=\"modal-title\">Update Employee Leave</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"updateEmployeeleave(updateleave);\" novalidate>\n                \n                        <div class=\"col-md-11\">\n                       \n                                  \n                            <div class=\"form-group\" >\n                                \n                                  <div class=\"col-md-3 paddtop\">\n                                    <label>Leave Start Date</label>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                      <mat-form-field class=\"example-full-width\">\n                                          <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker3\" name =\"startdate\" [(ngModel)]=\"updateleave.start_date\" placeholder=\"Choose a date\">\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                                          <mat-datepicker #picker3></mat-datepicker>\n                                        </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-2 paddtop\">\n                                      <label>Available hrs(HH:MM)</label>\n                                   </div>\n                                   <div class=\"col-md-3\">\n                                      <div class=\"row\">\n                                          <ngb-timepicker  name=\"startavlhr\" [(ngModel)]=\"updateleave.startavlhr\"  required></ngb-timepicker>\n                                         \n                                      <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                                      <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                                        <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                                        <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                                        <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                                      </div> -->\n                                     \n                                    </div>\n                                  </div>\n                                  \n                                   <div class=\"clearfix\"></div>\n                                  <div class=\"col-md-12\">\n                                      <hr>\n        \n                                  </div>\n          \n          \n                                   <div class=\"col-md-3 paddtop\">\n                                      <label>Leave End Date</label>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [matDatepickerFilter]=\"myFilter\"  [matDatepicker]=\"picker4\" name =\"enddate\" [(ngModel)]=\"updateleave.end_date\" placeholder=\"Choose a date\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker4></mat-datepicker>\n                                          </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 paddtop\">\n                                        <label>Available hrs(HH:MM)</label>\n                                     </div>\n                                     <div class=\"col-md-3\">\n                                        <div class=\"row\">\n                                            <ngb-timepicker  name=\"endavlhr\" [(ngModel)]=\"updateleave.endavlhr\"  required></ngb-timepicker>\n                                           \n                                        <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                                        <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                                          <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                                          <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                                          <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                                        </div> -->\n                                       \n                                      </div>\n                                    </div>\n                                    \n                                     <div class=\"clearfix\"></div>\n                                    <div class=\"col-md-12\">\n                                        <hr>\n          \n                                    </div>\n          \n                                     <div class=\"col-md-12\">\n                                        <div class=\"col-md-3 paddtop\">\n                                            <label>Employee</label>\n                                         </div>\n                                         <div class=\"col-md-3\">\n                                            <mat-form-field>\n                                                \n                                                <mat-select placeholder=\"Select employee \"  name=\"emp_id\"  [(ngModel)]=\"updateleave.user_profile_id\" required>\n                                                \n                                                    <mat-option  *ngFor=\"let item of companyemployee\"  [value]=\"item.id\" >{{item.f_name}}</mat-option>\n                                                                                \n                                                 </mat-select>\n                                            </mat-form-field>   \n                                         </div>\n                                         \n                                     </div>\n                                     <!-- <div class=\"col-md-12\">\n                                        <div class=\"col-md-3 paddtop\">\n                                            <label>Leave Hour</label> \n                                         </div>\n                                         <div class=\"col-md-3 paddtop\">\n                                            <label>10</label> \n                                         </div>\n                                         \n                                     </div> -->\n                                     \n                                    \n                              </div>\n                              \n                          <br>\n                \n                          <div class=\"row\">\n                            <div class=\"col-md-4\">\n                              <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n            \n                            </div>\n                            <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                              <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                                xml:space=\"preserve\">\n                                <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                                  <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                                  />\n                                </path>\n                              </svg>\n                            </div> -->\n            \n                          </div>\n            \n                       \n                        </div>\n                       \n                      \n                   \n            </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n  \n        </div>\n      </div>\n    <!-----------------------------------------------------------------edit modal-------------------------------------->\n        \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     \n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEmployeeLeavesComponent; });
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



//import {FormControl} from '@angular/forms';

var CompanyEmployeeLeavesComponent = (function () {
    // myFilter = (d: Date): boolean => {
    //   const day = d.getDay();
    //   // Prevent Saturday and Sunday from being selected.
    //   return day !== 0 && day !== 6;
    // }
    // ---------------------------------Start-------------------------------------------
    // Function      : project category master setting
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : All category
    function CompanyEmployeeLeavesComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'name', 'leave_start_date', 'start_available_hrs', 'leave_end_date', 'end_available_hrs', 'action'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
        this.updateleave = { start_date: '',
            id: '',
            startavlhr: '',
            end_date: '',
            endavlhr: '',
            user_profile_id: '',
            leave_hrs: ''
        };
        this.newEmpleave = { startdate: '',
            startavlhr: '',
            enddate: '',
            endavlhr: '',
            emp_id: '',
            leave_hr: ''
        };
        this.time = { hour: 13, minute: 30 };
    }
    CompanyEmployeeLeavesComponent.prototype.refresh = function () {
        var _this = this;
        // console.log("hj");
        this.showSpinner = true;
        //  console.log(this.selected);
        var company = [];
        this.companyService.getAllemployeeleaves().subscribe(function (data) {
            console.log(data);
            // console.log(data[0].tbl_user_profile.f_name);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    CompanyEmployeeLeavesComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyEmployeeLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.companyService.getAllcompanyemployee().subscribe(function (res) {
            _this.companyemployee = res;
        });
    };
    CompanyEmployeeLeavesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //tme validation
    // ctrl = new FormControl('', (control: FormControl) => {
    //   const value = control.value;
    //   if (!value) {
    //     return null;
    //   }
    //   if (value.hour < 12) {
    //     return {tooEarly: true};
    //   }
    //   if (value.hour > 13) {
    //     return {tooLate: true};
    //   }
    //   return null;
    // });
    // ctrl1 = new FormControl('', (control: FormControl) => {
    //   const value1 = control.value;
    //   if (!value1) {
    //     return null;
    //   }
    //   if (value1.hour < 12) {
    //     return {tooEarly: true};
    //   }
    //   if (value1.hour > 13) {
    //     return {tooLate: true};
    //   }
    //   // console.log(value1.hour);
    //   return null;
    // });
    //add empleave
    CompanyEmployeeLeavesComponent.prototype.addNewEmpleave = function () {
        //this.showSpinner =false;
        //this.showSpinnerDelete =false;
        this.newEmpleave = { startdate: '',
            startavlhr: '',
            enddate: '',
            endavlhr: '',
            emp_id: '',
            leave_hr: ''
        };
    };
    CompanyEmployeeLeavesComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete Employee leave
    CompanyEmployeeLeavesComponent.prototype.deleteEmpleave = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.companyService.deleteEmpleave(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    CompanyEmployeeLeavesComponent.prototype.addEmpleave = function (newEmpleave) {
        var _this = this;
        console.log(newEmpleave);
        this.showSpinner = true;
        // console.log(newCategory);
        this.companyService.addnewEmpleave(newEmpleave).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn.nativeElement.click();
                _this.refresh();
            }
        });
    };
    CompanyEmployeeLeavesComponent.prototype.getEditId = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = false;
        this.companyService.getSingleempleave(id).subscribe(function (data) {
            // console.log( data);
            _this.updateleave = data;
            console.log(_this.updateleave);
            var start = data.start_available_hrs.split(':');
            var end = data.end_available_hrs.split(':');
            //  console.log(start[0]);
            console.log(data.start_available_hrs);
            data.startavlhr = { hour: start[0], minute: start[1], second: start[2] };
            data.endavlhr = { hour: end[0], minute: end[1], second: end[2] };
            //this.id = data.id;
            console.log(_this.updateleave);
            if (data.success == false) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
            }
        });
    };
    CompanyEmployeeLeavesComponent.prototype.updateEmployeeleave = function (updateleave) {
        var _this = this;
        console.log(updateleave);
        this.showSpinner = true;
        this.companyService.updateEmpleave(this.updateleave).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn1.nativeElement.click();
                _this.refresh();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyEmployeeLeavesComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyEmployeeLeavesComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyEmployeeLeavesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyEmployeeLeavesComponent.prototype, "sort", void 0);
    CompanyEmployeeLeavesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-employee-leaves',
            template: __webpack_require__("../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-employee-leaves/company-employee-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyEmployeeLeavesComponent);
    return CompanyEmployeeLeavesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-footer/company-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-footer/company-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center bg-lightgray\">\n    \n                            <div class=\"copyrights\" style=\"margin-top:25px;\">\n                                <p>Taskit © 2018, All Rights Reserved\n                                    <br>\n                                    \n                                \n                            </div>\n                    </footer> "

/***/ }),

/***/ "../../../../../src/app/components/company-footer/company-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFooterComponent; });
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

var CompanyFooterComponent = (function () {
    function CompanyFooterComponent() {
    }
    CompanyFooterComponent.prototype.ngOnInit = function () {
    };
    CompanyFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-footer',
            template: __webpack_require__("../../../../../src/app/components/company-footer/company-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-footer/company-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyFooterComponent);
    return CompanyFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.modal-dialog{max-width:900px !important;width:100%;}\r\n.user{width:280px;height:280px;border-radius:50%;margin:0 auto;float:none;overflow:hidden; background: #d45d0e;margin-top: 20%;\r\n    margin-bottom: 20%;text-align:center;}\r\n    .user:hover{opacity:0.6;cursor:pointer;}\r\n.user img{width:120%;max-width: 287px;min-width: 287px;}\r\n\r\n.brdr-left{    width: 1px;\r\n    height: 155px;\r\n    float: left;\r\n    margin-top: 36%;\r\n    display: inherit;\r\n    background: #efecec;\r\n    margin-right: 21px;}\r\n  .user .fa-camera{color:#fff;font-size:50px;text-align:center;background: #d45d0e;padding-top:204%;}\r\n.disply{width:auto; display: -webkit-inline-box;}\r\nlabel{font-weight: 500;}\r\n.paddtop{padding-top:17px;}\r\n.bt{border-radius:30px;padding:3px 13px;   font-size: 12px;\r\n    margin-top: 9px;color: white;\r\n      background-color: #fe6a07;}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                        <h2>Request Management</h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">Leave Request Management</a></li>\n                                                 \n                          <li>Leave Request Management List </li>\n                        </ul>\n                    <div class=\"row\">\n                      <!-----------------------------------------------------------------table-------------------------------------->\n                            \n  \n  <!-- <p>You selected: {{selected}} </p> -->\n  \n  <div class=\"col-md-12\">\n        <div class=\"row\">\n        <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n            <div class=\"\"  >\n                <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n            <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n              <animateTransform attributeType=\"xml\"\n                attributeName=\"transform\"\n                type=\"rotate\"\n                from=\"0 25 25\"\n                to=\"360 25 25\"\n                dur=\"0.6s\"\n                repeatCount=\"indefinite\"/>\n              </path>\n            </svg>\n        </div>\n        </div> -->\n        \n    \n        <div class=\"col-md-12 optionz\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"example-header\">\n                      <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                      </mat-form-field>\n                    </div>\n              </div>\n             \n          </div>\n        </div>\n    \n    \n    <!--    \n              <div class=\"example-header\" >\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n              </div> -->\n           \n        <div class=\"example-container mat-elevation-z8 \">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n     <!-- Name Column -->\n     <ng-container matColumnDef=\"slno\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n      </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> NAME </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.tbl_user_profile.f_name}} </mat-cell>\n        </ng-container>\n                <!-- Name Column -->\n        <ng-container matColumnDef=\"leave_start_date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Leave Start Date </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.start_date}} </mat-cell>\n        </ng-container>\n              <!-- Name Column -->\n        <ng-container matColumnDef=\"start_available_hrs\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Start Available hrs </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.start_available_hrs}} </mat-cell>\n        </ng-container>  \n                <!-- Name Column -->\n        <ng-container matColumnDef=\"leave_end_date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Leave end date </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.end_date}} </mat-cell>\n        </ng-container>\n                <!-- Name Column -->\n        <ng-container matColumnDef=\"end_available_hrs\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> End available hrs </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.end_available_hrs}} </mat-cell>\n        </ng-container>\n             <!-- Name Column reject_reason-->\n             <ng-container matColumnDef=\"status\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" > {{row.request_status}} </mat-cell>\n               \n              </ng-container>\n        <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <a  routerLink=\"/company-user-leave-request/{{row.id}}\" ><button class=\"bt\">view</button></a>\n              </mat-cell>\n          </ng-container>\n\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n      <div class=\"col-md-15 \">\n          <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n              <mat-spinner></mat-spinner>\n             </div> -->\n      </div>\n      <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n          <div class=\"col-md-4 col-md-offset-4\">\n              <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n          </div>\n        </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n    \n    \n    </div>\n    </div>\n  \n   \n      \n\n        \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     \n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyLeaveRequestListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyLeaveRequestListComponent = (function () {
    // myFilter = (d: Date): boolean => {
    //   const day = d.getDay();
    //   // Prevent Saturday and Sunday from being selected.
    //   return day !== 0 && day !== 6;
    // }
    // ---------------------------------Start-------------------------------------------
    // Function      : project category master setting
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : All category
    function CompanyLeaveRequestListComponent(companyService, config, routes, snackBar) {
        this.companyService = companyService;
        this.config = config;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'name', 'leave_start_date', 'start_available_hrs', 'leave_end_date', 'end_available_hrs', 'status', 'action'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(config.siteUrl);
    }
    CompanyLeaveRequestListComponent.prototype.refresh = function () {
        var _this = this;
        // console.log("hj");
        this.showSpinner = true;
        //  console.log(this.selected);
        var company = [];
        this.companyService.getAllemppendingleaves().subscribe(function (data) {
            console.log(data);
            // console.log(data[0].tbl_user_profile.f_name);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    CompanyLeaveRequestListComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyLeaveRequestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('Leaveaddeduser', function (data) {
            _this.refresh();
        });
        this.socket.on('deleteLeaveuser', function (data) {
            _this.refresh();
        });
        this.socket.on('Rejectedleave', function (data) {
            _this.refresh();
        });
        this.socket.on('Acceptedleave', function (data) {
            _this.refresh();
        });
    };
    CompanyLeaveRequestListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyLeaveRequestListComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyLeaveRequestListComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyLeaveRequestListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyLeaveRequestListComponent.prototype, "sort", void 0);
    CompanyLeaveRequestListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-leave-request-list',
            template: __webpack_require__("../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-leave-request-list/company-leave-request-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyLeaveRequestListComponent);
    return CompanyLeaveRequestListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project-category/company-project-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.modal-dialog{max-width:900px !important;width:100%;}\r\n.user{width:280px;height:280px;border-radius:50%;margin:0 auto;float:none;overflow:hidden; background: #d45d0e;margin-top: 20%;\r\n    margin-bottom: 20%;text-align:center;}\r\n    .user:hover{opacity:0.6;cursor:pointer;}\r\n.user img{width:120%;max-width: 287px;min-width: 287px;}\r\n\r\n.brdr-left{    width: 1px;\r\n    height: 155px;\r\n    float: left;\r\n    margin-top: 36%;\r\n    display: inherit;\r\n    background: #efecec;\r\n    margin-right: 21px;}\r\n  .user .fa-camera{color:#fff;font-size:50px;text-align:center;background: #d45d0e;padding-top:204%;}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-project-category/company-project-category.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n    \n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n               <!-- sidebar-->\n             \n               <company-sidebar></company-sidebar> \n               <!-- end sidebar-->\n          </div>\n          \n          <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n              <!-- topbar-->\n              <company-topbar></company-topbar> \n              \n                  <!-- end topbar-->\n              \n              \n              <div class=\"user-dashboard\">\n                      <h2>Master Settings</h2>\n                      <ul class=\"breadcrumb\">\n                        <li><a href=\"#\">Master Settings</a></li>\n                        \n                        \n                        <li>Project Category </li>\n                      </ul>\n                  <div class=\"row\">\n                    <!-----------------------------------------------------------------table-------------------------------------->\n                          \n\n<!-- <p>You selected: {{selected}} </p> -->\n\n<div class=\"col-md-12\">\n      <div class=\"row\">\n      <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div> -->\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div>\n           \n        </div>\n      </div>\n  \n  \n  <!--    \n            <div class=\"example-header\" >\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                </mat-form-field>\n            </div> -->\n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"slno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n    </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>CATEGORY NAME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.category_name}} </mat-cell>\n      </ng-container>\n  \n   \n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button  (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\n                  <i class=\"material-icons\">delete</i>\n                <span>Delete</span>\n              </button>\n              <button  (click)=\"getEditId(row.id)\" data-toggle=\"modal\" data-target=\"#editModal\" mat-menu-item >\n                      <i class=\"material-icons\">mode_edit</i>\n                    <span>Edit</span>\n                  </button>\n             \n          \n            </mat-menu>\n         \n        </mat-cell>\n    </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n        <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  <div class=\"add-button\">\n      <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" (click)=\"addNewCategory()\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n    </div>\n  <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n  \n  <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n  \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Delete </h4>\n          </div>\n          <!-- <div class=\"modal-header\"> -->\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n          <!-- </div> -->\n          <div class=\"modal-body delete-popup\">\n            <i class=\"fa fa-exclamation\"></i>\n  \n  \n            <h4 class=\"textalign\">Are you sure?</h4>\n  \n          </div>\n  \n          <div class=\"modal-footer\">\n            <button type=\"button\" (click)=\"deleteCategory(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n    <!-----------------------------------------------------------------delete modal-------------------------------------->\n     <!-----------------------------------------------------------------add modal-------------------------------------->\n     <div id=\"addModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n            <h4 class=\"modal-title\">Add New Category</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"addCategory(newCategory);\" novalidate>\n            <div class=\"col-md-7\">\n           \n                      \n                <div class=\"form-group\" >\n                    <div class=\"example-container\">\n                      <mat-form-field>\n                          <input matInput placeholder=\"Category Name\" name =\"name\" [(ngModel)]=\"newCategory\"  required>\n                          \n                       </mat-form-field>\n                     \n                \n                \n                    </div>\n                        \n                  </div>\n              <br>\n    \n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n\n                </div>\n                <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                  <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                    xml:space=\"preserve\">\n                    <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                      />\n                    </path>\n                  </svg>\n                </div> -->\n\n              </div>\n\n           \n            </div>\n           \n          \n          </form>\n          </div>\n          <div class=\"modal-footer\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n     <!----------------------------------------addModal------------------------------>\n       <!-- --------------------------------------------- edit modal ----------------------------------------------------------------- -->\n  \n\n    <div id=\"editModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n            <h4 class=\"modal-title\">Update Category</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"updateCategory(category);\" novalidate>\n            <div class=\"col-md-7\">\n           \n                      \n                <div class=\"form-group\" >\n                    <div class=\"example-container\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"category Name\"  name =\"category\" [(ngModel)]=\"category.category_name\"  required>\n                      </mat-form-field>\n                     \n                \n                \n                    </div>\n                        \n                  </div>\n              <br>\n    \n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Update</button>\n\n                </div>\n                <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                  <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                    xml:space=\"preserve\">\n                    <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                      />\n                    </path>\n                  </svg>\n                </div> -->\n\n              </div>\n\n           \n            </div>\n           \n          \n          </form>\n          </div>\n          <div class=\"modal-footer\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n  <!-----------------------------------------------------------------edit modal-------------------------------------->\n      \n     <!-----------------------------------------------------------------end table-------------------------------------->\n                  </div>\n              </div>\n              \n          </div>\n              <!-- footer-->\n              <company-footer></company-footer>\n     <!-- end footer-->\n      </div>\n       </div>\n      <!-- Modal -->\n   </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-project-category/company-project-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProjectCategoryComponent; });
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




var CompanyProjectCategoryComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : project category master setting
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : All category
    function CompanyProjectCategoryComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'name', 'action'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
        this.category = { category_name: '', id: '' };
    }
    CompanyProjectCategoryComponent.prototype.refresh = function () {
        var _this = this;
        // console.log("hj");
        this.showSpinner = true;
        //  console.log(this.selected);
        // const company = [];
        this.companyService.getAllprojectcategory().subscribe(function (data) {
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    CompanyProjectCategoryComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyProjectCategoryComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    CompanyProjectCategoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyProjectCategoryComponent.prototype.addNewCategory = function () {
        //this.showSpinner =false;
        //this.showSpinnerDelete =false;
        this.newCategory = '';
    };
    CompanyProjectCategoryComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete Category
    CompanyProjectCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.companyService.deleteCategory(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    CompanyProjectCategoryComponent.prototype.addCategory = function (newCategory) {
        //console.log(newCategory);
        var _this = this;
        this.showSpinner = true;
        // console.log(newCategory);
        this.companyService.addCategory(newCategory).subscribe(function (addCategory) {
            if (!addCategory.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(addCategory.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else if (addCategory.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(addCategory.msg, '', {
                    duration: 2000
                });
                _this.closeBtn.nativeElement.click();
                _this.refresh();
            }
        });
    };
    CompanyProjectCategoryComponent.prototype.getEditId = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = false;
        this.companyService.getSinglecategory(id).subscribe(function (data) {
            console.log(data);
            _this.category = data;
            //this.id = data.id;
            if (data.success == false) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
            }
        });
    };
    CompanyProjectCategoryComponent.prototype.updateCategory = function (category) {
        var _this = this;
        //  console.log(category);
        this.showSpinner = true;
        this.companyService.updateCategory(this.category).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn1.nativeElement.click();
                _this.refresh();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyProjectCategoryComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyProjectCategoryComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyProjectCategoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyProjectCategoryComponent.prototype, "sort", void 0);
    CompanyProjectCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-project-category',
            template: __webpack_require__("../../../../../src/app/components/company-project-category/company-project-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-project-category/company-project-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyProjectCategoryComponent);
    return CompanyProjectCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-request-management/company-request-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n.user{\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 50%;\r\n  margin:10px 0;\r\n  float: left;\r\n  overflow: hidden;\r\n  background: #d45d0e;\r\n\r\n  text-align: center;\r\n}\r\n.user .fa-user{padding-top: 14px;color:#fff;font-size: 21px;}\r\n.bt{border-radius:30px;padding:3px 13px;   font-size: 12px;\r\n  margin-top: 9px;color: white;\r\n    background-color: #fe6a07;} \r\n    .user img{width:100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-request-management/company-request-management.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                        <h2>Request Management</h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a routerLink=\"company-request-management\">Request Management</a></li>\n                          \n                          \n                          <li>Time Extension Request list </li>\n                        </ul>\n                    <div class=\"row\">\n                      <!-----------------------------------------------------------------table-------------------------------------->\n   \n  \n  <!-- <p>You selected: {{selected}} </p> -->\n\n  <div class=\"col-md-12\">\n      <div class=\"row\">\n      <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div> -->\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div>\n            <!-- <div class=\"col-md-2 pull-right\">\n                <div *ngIf=\"all_value\">\n                <mat-form-field class=\"filter\"> \n                    \n                      <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\n                    \n                        <mat-option value=\"all\">All</mat-option>\n                        <mat-option value=\"Active\">Active</mat-option>\n                        <mat-option value=\"Block\">Block</mat-option>\n                        <mat-option value=\"Delete\">Delete </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n            </div>\n          </div> -->\n        </div>\n      </div>\n  \n  \n  <!--    \n            <div class=\"example-header\" >\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                </mat-form-field>\n            </div> -->\n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"profile\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <div class=\"user\" *ngIf=\"row.tbl_project_task.tbl_user_profile.tbl_login.profile_image == ''\"><i class=\"fa fa-user\"></i></div>\n        <div class=\"user\" *ngIf=\"row.tbl_project_task.tbl_user_profile.tbl_login.profile_image != ''\"><img src=\"../assets/profile_upload/{{row.tbl_project_task.tbl_user_profile.tbl_login.profile_image}}\"></div>\n      </mat-cell>\n    </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>NAME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tbl_project_task.tbl_user_profile.f_name}} </mat-cell>\n      </ng-container>\n  \n   <!-- Name Column -->\n   <ng-container matColumnDef=\"projectname\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> PROJECT NAME </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.tbl_project_task.tbl_project_module.tbl_project.project_name}} </mat-cell>\n  </ng-container>\n    \n     <!-- Progress Column -->\n     <ng-container matColumnDef=\"taskname\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> TASK NAME </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.tbl_project_task.task_name}}</mat-cell>\n    </ng-container>\n       <!-- Progress Column -->\n       <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.req_status}}</mat-cell>\n        </ng-container>\n   \n\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <a  routerLink=\"/company-time-extension-request/{{row.id}}/{{row.tbl_project_task.tbl_project_module.tbl_project.id}}\" ><button class=\"bt\">view</button></a>\n          <!-- <button class=\"bt\">Basic</button> -->\n          <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button *ngIf=\"row.tbl_login.delete_status==false\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\n                  <i class=\"material-icons\">delete</i>\n                <span>Delete</span>\n              </button>\n              <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\n                <i class=\"material-icons\">delete_forever</i>\n              <span>Deleted</span>\n            </button>\n              <button *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\" (click)=\"blockCompany(row.tbl_login.id)\" mat-menu-item>\n                  <i class=\"material-icons\">block</i>\n                <span>Block</span>\n              </button>\n              <button *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockCompany(row.tbl_login.id)\" mat-menu-item>\n                  <i class=\"material-icons\">block</i>\n                <span>Unblock</span>\n              </button>\n            </mat-menu>  -->\n         \n        </mat-cell>\n    </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n        <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  \n  <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n  \n  <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n  \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Delete </h4>\n          </div>\n          <!-- <div class=\"modal-header\"> -->\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n          <!-- </div> -->\n          <div class=\"modal-body delete-popup\">\n            <i class=\"fa fa-exclamation\"></i>\n  \n  \n            <h4 class=\"textalign\">Are you sure?</h4>\n  \n          </div>\n  \n          <div class=\"modal-footer\">\n            <button type=\"button\" (click)=\"deleteCompany(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n        \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-request-management/company-request-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRequestManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyRequestManagementComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : All users
    function CompanyRequestManagementComponent(companyService, config, routes, snackBar) {
        this.companyService = companyService;
        this.config = config;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['profile', 'name', 'projectname', 'taskname', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
        this.all_value = false;
        this.showSpinner = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.siteUrl);
    }
    CompanyRequestManagementComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        var company = [];
        this.companyService.getAlltimeextensionrequest().subscribe(function (data) {
            console.log(data);
            if (data.length != 0) {
                _this.all_value = true;
            }
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    CompanyRequestManagementComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyRequestManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('timeextention', function (data) {
            _this.refresh();
        });
        this.socket.on('Rejectedtimeext', function (data) {
            _this.refresh();
        });
        this.socket.on('sendtoadmin', function (data) {
            _this.refresh();
        });
    };
    CompanyRequestManagementComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyRequestManagementComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyRequestManagementComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyRequestManagementComponent.prototype, "sort", void 0);
    CompanyRequestManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-request-management',
            template: __webpack_require__("../../../../../src/app/components/company-request-management/company-request-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-request-management/company-request-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyRequestManagementComponent);
    return CompanyRequestManagementComponent;
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

module.exports = "<div class=\"logo\">\n    <a href=\"\"><img src=\"./assets/images/logo.jpg\" alt=\"\" class=\"\">\n   \n</a>\n</div>\n\n<nav class=\"navbar navbar-default\">\n\n<!-- Brand and toggle get grouped for better mobile display -->\n<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n \n</div>\n\n<!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"zx nav navbar-nav\">\n        <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"\"><i class=\"fa fa-users fa-2x text-purple\"></i> Team</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"/company-users\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span class=\"\">Users</span></a></li>\n          <li class=\"dropdown\"><a routerLink=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i><span class=\"\">Master Settings</span></a>\n            \n              <ul class=\"dropdown-menu\" role=\"menu\" data-animations=\"fadeInDown fadeInRight fadeInUp fadeInLeft\">\n                <li><a  routerLink=\"/company-project-category\">Project Category</a></li>\n                <li><a routerLink=\"/company-employee-leaves\">Employee Leaves</a></li>\n                \n              </ul>\n            \n          </li>\n\n          <li class=\"dropdown\"><a routerLink=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i><span class=\"\">Request Management</span></a>\n            \n              <ul class=\"dropdown-menu\" role=\"menu\" data-animations=\"fadeInDown fadeInRight fadeInUp fadeInLeft\">\n                <li><a  routerLink=\"/\">New Task Requests</a></li>\n                <li><a routerLink=\"/company-request-management\">Time Extension Requests</a></li>\n                <li><a routerLink=\"/company-leave-request-list\">Leave Requests</a></li>\n              </ul>\n            \n          </li>\n       \n          <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a routerLink=\"/company-request-management\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span class=\"\">Request Management</span></a></li> \n           -->\n              \n            <li class=\"dropdown\"><a routerLink=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-leanpub\" aria-hidden=\"true\"></i><span class=\"\">Reports</span></a>\n            \n              <ul class=\"dropdown-menu\" role=\"menu\" data-animations=\"fadeInDown fadeInRight fadeInUp fadeInLeft\">\n                <li><a  routerLink=\"\">Estimation Report</a></li>\n                <li><a routerLink=\"\">Project Report</a></li>\n                <li><a routerLink=\"/company-activity-log\">Activity Log</a></li>\n               \n              </ul>\n            \n          </li>     \n    </ul>\n \n \n</div><!-- /.navbar-collapse -->\n\n</nav>"

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
            selector: 'company-sidebar',
            template: __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanySidebarComponent);
    return CompanySidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\nbutton, input, optgroup, select, textarea{outline:none !important;}\r\n.taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n.task ul li{width:auto;float:left;padding: 8px;}\r\n\ta{color:#111;}\r\n.task h5{padding-top:13px;padding-top: 6px;}\r\n.hash{background:#f7f6f4;}\r\n.round-button {\r\n    border-radius: 20px;\r\n    margin: 0;\r\n    float: left;\r\n    background: #f37600;\r\n    color: #fff;\r\n    padding: 7px 15px;\r\n    transition: background 2s;\r\n\tmargin-bottom:15px;\r\n}\r\n.round-button:hover {\r\n    background: #ffaa05;\r\n    color: #fff;\r\n}\r\n.dropdown ul.dropdown-menu:before {\r\n    content: \"\";\r\n    border-bottom: 10px solid #fff;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 16px;\r\n    z-index: 10;\r\n}\r\n.round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\nbutton, input, optgroup, select, textarea{outline:none;}\r\n.effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n.effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n.effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n.style{width:100%;}\r\nlabel{font-size:15px;color:#4a4a4a;font-weight:normal;padding:5px 0;}\r\n.mrg-2{margin-bottom:10px;}\r\n.dropdown-menu > li > a {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: normal;\r\n    line-height: 25px;\r\n    color: #333333;\r\n    white-space: nowrap;\r\n}\r\n.addmodule {\r\n    padding: 20px 10px!important;\r\n    min-width: 357px;\r\n    right: 0px;\r\n    left: inherit;\r\n}\r\n.style{border:none;border-bottom: 1px solid #ccc;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n}\r\n.btn-file{padding:0;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n\tmargin-bottom:20px;\r\n}\r\n.center-bt{margin:20px auto 10px auto;float:none;}\r\n@media only screen and (max-width : 767px) {\r\n.mrg-2 {\r\n    margin-bottom: 37px;\r\n}\r\n\r\n.task ul li{    padding: 2px;}\t\r\n.addmodule{    min-width: 274px;}\r\n}\r\n.highlight{    background: rgb(247, 247, 247);\r\n    box-shadow: -4px 4px 35px #eaeaea;\r\n    border: 2px solid #f1ab7d;}\r\n\r\n\r\n    ul.breadcrumb {\r\n        padding: 10px 0;\r\n        list-style: none;\r\n    \r\n        text-align: left;\r\n        color: #d68956;\r\n    }\r\n    ul.breadcrumb li {\r\n        display: inline;\r\n        font-size: 15px;\r\n    }\r\n    ul.breadcrumb li+li:before {\r\n        padding: 8px;\r\n        color: black;\r\n        content: \"/\\A0\";\r\n    }\r\n    ul.breadcrumb li a {\r\n        color: #bbbbbb;\r\n        text-decoration: none;\r\n    }\r\n    ul.breadcrumb li a:hover {\r\n        color: #d68956;\r\n        text-decoration: none;\r\n    \r\n    }\r\n    .breadcrumb{    background-color: #f6f7fa;}    \r\n    mat-chip {\r\n        max-width: 150px;\r\n      }\r\n      .example-button-row {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n      }\r\n.bt{border-radius:30px;padding:3px 13px;border:1px solid #f37600;background:none;    font-size: 12px;\r\n    margin-top: 9px;}      \r\n    .modal-content{border-radius:0;box-shadow:none;}\r\n    .modal-header {\r\n        padding: 7px 15px;\r\n        border-bottom: 1px solid #e5e5e5;\r\n        background: #f37600;\r\n    }\r\n    .modal-title {\r\n        margin: 0;\r\n        line-height: 26px;\r\n        font-size: 15px;\r\n        color: #fff;\r\n    }\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                    <h2>Request Management</h2>\n                    <ul class=\"breadcrumb\">\n                      <li><a routerLink=\"/\">Request Management</a></li>\n                      <li><a routerLink=\"/company-request-management\">Time Extension Request List</a></li>\n                      \n                      <li>Time Extension Request View</li>\n                    </ul>\n                   \n                    <div class=\"row\">\n                        \n              <div class=\"col-md-5 col-sm-12 col-xs-12 gutter \">\n               <div class=\"white\">\n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Project Name</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{project?.project_name}}</label></div>\n                 </div>\n                 \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Project Code</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{project?.project_code}}</label></div>\n                 </div>\n                 \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Project Start Date</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{project?.planned_start_date | date:'EEE, d MMM,y'}}</label></div>\n                 </div>\n                \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Team Members</label></div>\n                 \n                  \n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\" *ngFor=\"let name of teammembers; \">{{name}}, </label></div>\n          \n                </div>\n       \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Remark</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{reqdetails?.remarks}}</label></div>\n                 </div>\n\n                 \n               </div>\n              </div>\n                <div class=\"col-md-7 col-sm-12 col-xs-12 gutter\">\n \n                             <div class=\"white\">\n                 <div class=\"col-md-12 mrg-2\">\n                   <div class=\"col-md-4\">\n                     <label>\n                       Total Hours\n                     </label>\n                   </div>\n                   <div class=\"col-md-4 col-xs-5\">\n                     <!-- <input class=\"effect-1 style\" type=\"text\" placeholder=\"44:00 Hr\"> -->\n                     <span class=\"focus-border\">{{sum}} Hr</span>\n                   </div>\n\n                 </div>\n                 <div *ngFor=\"let task of myTasks; let i = index \">\n                    <div class=\"col-md-12 col-xs-12 pull-right\">\n                   <div class=\"task\">\n                     <div class=\"col-md-8 col-xs-7\">\n                       <h5>{{task.module_name}}</h5>\n                     </div>\n                     <div class=\"col-md-4 col-xs-5\">\n                       <ul class=\"taskedit\">\n                         <li>{{task.ttlModHour}}Hr</li>\n                        \n                       </ul>\n                     </div>\n                   </div>\n                 </div>\n                 <!---task end-->\n                 <div *ngFor=\"let task1 of myTasks[i].tbl_project_tasks; let y = index\">\n                 <div class=\"col-md-11 col-xs-12 pull-right\">\n                    <div *ngIf=\"task1?.id != reqdetails?.task_id\">\n                   <div class=\"task hash\">\n                     <div class=\"col-md-3 col-xs-7\">\n                       <h5>{{task1.task_name}}</h5>\n                     </div>\n                     <div class=\"col-md-9 col-xs-5\">\n                       <ul class=\"pull-right\">\n                         <li>{{task1?.tbl_user_profile.f_name}}</li>\n                         <li>{{task1?.planned_hour + task1?.buffer_hour}} hrs</li>\n                         <li>{{task1?.planned_start_date_time | date:'EEE, d MMM,y'}}</li>\n                         <li>{{task1?.planned_end_date_time | date:'EEE, d MMM,y'}}</li>\n                        \n                         \n                       </ul>\n                     </div>\n                     \n                     <div class=\"clearfix\"></div>\n                     \n                   </div>\n\n                  </div>\n                  <div *ngIf=\"task1?.id == reqdetails?.task_id && (reqdetails?.req_status=='Pending' || (reqdetails?.req_status=='Approval' && role_id==1))  \">\n                  <div class=\"task highlight\">\n                      <div class=\"col-md-3 col-xs-7\">\n                        <h5>{{task1.task_name}}</h5>\n                      </div>\n                      <div class=\"col-md-9 col-xs-5\">\n                          <ul>\n                              <li>{{task1?.tbl_user_profile.f_name}}{{task1?.tbl_user_profile.id}}</li>\n                              <li>{{reqdetails?.additional_hours}} hrs</li>\n                          </ul>\n                          <div class=\"pull-right\">\n                            <button class=\"bt\"  (click)=\"getEditId(reqdetails?.id,reqdetails?.additional_hours,reqdetails?.task_id,task1?.tbl_user_profile.id,task1?.tbl_user_profile.cmp_id)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit</button>\n                            <button class=\"bt\"  (click)=\"getId(reqdetails?.id)\" data-toggle=\"modal\" data-target=\"#approvedModal\">Approve</button>\n                            <button class=\"bt\"  (click)=\"getId(reqdetails?.id)\" data-toggle=\"modal\" data-target=\"#rejectModal\">Reject</button>\n                            <button *ngIf=\"role_id == 3\" class=\"bt\" (click)=\"getId(reqdetails?.id)\" data-toggle=\"modal\" data-target=\"#sendtoadminModal\">Send to admin</button>\n                            \n                          </div>  \n                        </div>\n                      <div class=\"clearfix\"></div>\n                      \n                    </div>\n\n                   </div>\n                 </div>\n                </div>\n              </div>\n                 <!---task end-->\n          \n                 <div class=\"clearfix\"></div> \n                \n                                 \n                             </div>\n                         </div>\n\n\n<!-- --------------------------------------------- edit modal ----------------------------------------------------------------- -->\n    \n  \n<div id=\"editModal\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n          <h4 class=\"modal-title\">Edit Requested Time</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"updateReqtime(reqtime);\" novalidate>\n            \n                    <div class=\"col-md-11\">\n                   \n                              \n                        <div class=\"form-group\" >\n                            \n                   \n                              <div class=\"col-md-5 paddtop\">\n                                  <label>Old Time</label>\n                               </div> \n                               <div class=\"col-md-6\">\n                             \n                                    <label>{{oldtasktime}} hrs</label>\n                          \n                               </div>\n                               <div class=\"clearfix\"></div>\n      \n                                <div class=\"col-md-5 paddtop\">\n                                    <label>Requested Time</label>\n                                 </div>\n                                 <div class=\"col-md-6\">\n                                    <mat-form-field>\n                                        <input matInput  name =\"additional_hr\" [(ngModel)]=\"reqtime.additional_hr\"  required>\n                                        \n                                     </mat-form-field>\n                                 </div>\n                                 <div class=\"clearfix\"></div>\n                           \n                                 \n                                \n                          </div>\n                          \n                      <br>\n            \n                      <div class=\"row\">\n                        <div class=\"col-md-4\">\n                          <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n        \n                        </div>\n                        <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                          <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                            x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                            xml:space=\"preserve\">\n                            <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                              <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                              />\n                            </path>\n                          </svg>\n                        </div> -->\n        \n                      </div>\n        \n                   \n                    </div>\n                   \n                  \n               \n        </form>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n<!-----------------------------------------------------------------edit modal-------------------------------------->\n\n  <!-------------------reject modal---------------------------------->\n<div id=\"rejectModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  #closeBtn>&times;</button>\n          <h4 class=\"modal-title\">Reject Modal </h4>\n        </div>\n        <!-- <div class=\"modal-header\"> -->\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n        <!-- </div> -->\n        <div class=\"modal-body delete-popup\">\n          <!-- <i class=\"fa fa-exclamation\"></i> -->\n\n\n          <h4 class=\"textalign\">Do you whish to continue?</h4>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"rejecttimeextreq(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-------------------reject modal---------------------------------->\n    <!-------------------sendtoadminModal---------------------------------->\n<div id=\"sendtoadminModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn2>&times;</button>\n          <h4 class=\"modal-title\">Send to Admin </h4>\n        </div>\n        <!-- <div class=\"modal-header\"> -->\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n        <!-- </div> -->\n        <div class=\"modal-body delete-popup\">\n          <!-- <i class=\"fa fa-exclamation\"></i> -->\n\n\n          <h4 class=\"textalign\">Do you whish to continue?</h4>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"sendtoadmin(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-------------------sendtoadminModal---------------------------------->\n      <!-------------------sendtoadminModal---------------------------------->\n<div id=\"approveModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn3>&times;</button>\n          <h4 class=\"modal-title\">Approved </h4>\n        </div>\n        <!-- <div class=\"modal-header\"> -->\n        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n        <!-- </div> -->\n        <div class=\"modal-body delete-popup\">\n          <!-- <i class=\"fa fa-exclamation\"></i> -->\n\n\n          <h4 class=\"textalign\">Do you whish to continue?</h4>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"approved(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-------------------sendtoadminModal---------------------------------->\n    </div>\n\n      </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTimeExtensionRequestComponent; });
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




var CompanyTimeExtensionRequestComponent = (function () {
    function CompanyTimeExtensionRequestComponent(_activatedRoute, companyService, routes, snackBar) {
        this._activatedRoute = _activatedRoute;
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.role_id = 3;
        this.arr1 = [];
        this.reqtime = { additional_hr: '', req_id: '', task_id: '', userid: '', cmp_id: '' };
        this.showSpinner = false;
    }
    CompanyTimeExtensionRequestComponent.prototype.ngOnInit = function () {
        this.getUserid();
    };
    CompanyTimeExtensionRequestComponent.prototype.getUserid = function () {
        //   this.sub = this.route.params.subscribe(params => {
        //     this.surveyId = params['id2'];
        //     this.userId = params['id1'];
        //  });
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.reqId = params['id1'];
            _this.projId = params['id2'];
            // console.log( this.reqId, this.projId)
        });
        this.companyService.gettimerequest(this.reqId, this.projId).subscribe(function (res) {
            console.log(res);
            _this.project = res.project;
            _this.reqdetails = res.reqdetails;
            _this.teammembers = res.teammembers;
            _this.myTasks = res.myTasks;
            _this.additional_hours = _this.reqdetails.additional_hours;
            _this.myTasks.forEach(function (element, key) {
                _this.module_time = 0;
                _this.totalhr = 0;
                element.tbl_project_tasks.forEach(function (elm_tasks) {
                    if (elm_tasks.id == _this.reqdetails.task_id) {
                        _this.oldtasktime = (elm_tasks.planned_hour + elm_tasks.buffer_hour);
                        _this.module_time = _this.module_time + _this.reqdetails.additional_hours;
                    }
                    else {
                        _this.module_time = _this.module_time + elm_tasks.planned_hour + elm_tasks.buffer_hour;
                    }
                });
                _this.myTasks[key].ttlModHour = _this.module_time;
                _this.arr1.push(_this.module_time);
                _this.sum = _this.arr1.reduce(function (a, b) { return a + b; }, 0);
            });
        });
    };
    CompanyTimeExtensionRequestComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //rejecttimeextreq
    CompanyTimeExtensionRequestComponent.prototype.rejecttimeextreq = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.companyService.Rejecttimeextreq(id).subscribe(function (data) {
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.routes.navigate(['/company-request-management']);
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //sendtoadminModal
    CompanyTimeExtensionRequestComponent.prototype.sendtoadmin = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.companyService.Sendtoadmin(id).subscribe(function (data) {
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.routes.navigate(['/company-request-management']);
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //approved    
    CompanyTimeExtensionRequestComponent.prototype.approved = function (id) {
        console.log(id);
        // this.showSpinner =true
        //   this.companyService.ApprovedTimeextension(id).subscribe(data=>{
        //     if(data.success){
        //       this.showSpinner =false
        //       let snackBarRef =  this.snackBar.open(data.msg, '', {
        //         duration: 2000
        //       });
        //       this.routes.navigate(['/company-request-management']); 
        //          }
        //          else{
        //           this.showSpinner =false
        //           let snackBarRef =  this.snackBar.open(data.msg, '', {
        //             duration: 2000
        //           });
        //         }
        //   });
    };
    CompanyTimeExtensionRequestComponent.prototype.getEditId = function (id1, id2, id3, id4, id5) {
        this.reqtime.req_id = id1;
        this.reqtime.additional_hr = id2;
        this.reqtime.task_id = id3;
        this.reqtime.userid = id4;
        this.reqtime.cmp_id = id5;
    };
    CompanyTimeExtensionRequestComponent.prototype.updateReqtime = function (reqtime) {
        console.log(reqtime);
        this.showSpinner = true;
        this.companyService.getUserleavedata(reqtime.userid).subscribe(function (data) {
            console.log(data);
            // this.companyService.getCmppublicholidaydata(reqtime.cmp_id).subscribe(data1=>{
            //   console.log(data1)
            // });
            //     if(!data.success){
            //       this.showSpinner =false;
            //       let snackBarRef =  this.snackBar.open(data.msg, '', {
            //         duration: 2000
            //     });
            //   }
            //   else if(data.success){
            //     this.showSpinner =false;
            //     let snackBarRef =  this.snackBar.open(data.msg, '', {
            //       duration: 2000
            //   });
            //   this.closeBtn1.nativeElement.click();
            //   this.getUserid();
            //  }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyTimeExtensionRequestComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyTimeExtensionRequestComponent.prototype, "closeBtn1", void 0);
    CompanyTimeExtensionRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-time-extension-request',
            template: __webpack_require__("../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-time-extension-request/company-time-extension-request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyTimeExtensionRequestComponent);
    return CompanyTimeExtensionRequestComponent;
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

module.exports = "<div class=\"row\">\n        <header>\n    \n            <div class=\"col-md-5 pull-right\">\n                <div class=\"header-rightside\">\n                    <ul class=\"list-inline header-top pull-right\">\n                        <li *ngIf=\"upgradeBtnShow\" class=\"\"><a [routerLink]=\"['/planlist']\" class=\"add-project\">Upgrade</a></li>\n                        <li class=\"\"><a [routerLink]=\"['/add-project']\" class=\"add-project\">Add Project</a></li>\n    \n                        <li class=\"dropdown drp2\">\n                            <a class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                <span class=\"label label-primary\">{{count}}</span>\n    \n                            </a>\n    \n                            <ul class=\"dropdown-menu\">\n    \n                                <li class=\"head\">\n                                    <div class=\"navbar-content\">\n                                        <h4>New Project Notification</h4>\n                                        <div *ngFor=\"let item of project\">\n                                            <a (click)=\"closeNotif(item.id)\" [routerLink]=\"['/assign-project', item.id]\">\n                                                <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif(item.id)\">x</button>\n                                                </div>\n                                                <h5 class=\"media-heading\">{{item.project_name}}</h5>\n                                                <p><a class=\"content\">You are assignd for a new project. Click here to assign team heads.</a></p>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </li>\n                                <div class=\"divider\"> </div>\n    \n                                <li class=\"head\">\n                                    <div class=\"navbar-content\">\n                                        <h4>Estimation Approval Notification</h4>\n                                        <div *ngFor=\"let list of estimationApproval\">\n                                            <a (click)=\"closeNotif2(list.id)\" [routerLink]=\"['/approve-estimation', list.tbl_project.id]\">\n                                                <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif2(list.id)\">x</button>\n                                                </div>\n                                                <h5 class=\"media-heading\">{{list.tbl_project.project_name}}</h5>\n                                                <p><a class=\"content\">Click here to approve the Estimation</a></p>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </li>\n                                <div class=\"divider\"> </div>\n    \n                                <li class=\"head\">\n                                    <div class=\"navbar-content\">\n                                        <h4>Estimation Resubmit Notification</h4>\n                                        <div *ngFor=\"let item1 of resubmitEstimation\">\n                                            <a (click)=\"closeNotif(item1.id)\" [routerLink]=\"['/approve-estimation', item1.id]\">\n                                                <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif(item1.id)\">x</button>\n                                                </div>\n                                                <h5 class=\"media-heading\">{{item1.project_name}}</h5>\n                                                <p><a class=\"content\">Click here to re-estimate the project.</a></p>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </li>\n                                <div class=\"divider\"> </div>\n    \n                                <li class=\"head\">\n                                    <div class=\"navbar-content\">\n                                        <h4>Project Approve Notification</h4>\n                                        <div *ngFor=\"let item2 of approveProject\">\n                                            <a (click)=\"closeNotif3(item2.id)\" [routerLink]=\"['/approve-project', item2.id]\">\n                                                <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif3(item2.id)\">x</button>\n                                                </div>\n                                                <h5 class=\"media-heading\">{{item2.project_name}}</h5>\n                                                <p><a class=\"content\">Click here to approve the project.</a></p>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </li>\n                                <div class=\"divider\"> </div>\n    \n                                <li class=\"head\">\n                                    <div class=\"navbar-content\">\n                                        <h4>Project Plan Notification</h4>\n                                        <div *ngFor=\"let item3 of planProject\">\n                                            <a (click)=\"closeNotif4(item3.id)\" [routerLink]=\"['/project-planning', item3.id]\">\n                                                <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif4(item3.id)\">x</button>\n                                                </div>\n                                                <h5 class=\"media-heading\">{{item3.project_name}}</h5>\n                                                <p><a class=\"content\">Click here to plan the project.</a></p>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </li>\n                                <div class=\"divider\"> </div>\n                                <li class=\"head\">\n                                        <div class=\"navbar-content\">\n                                            <h4>Leave Request</h4>\n                                            <div *ngFor=\"let item5 of userpendingdata\">\n                                                <a (click)=\"closeNotif5(item5.id)\" [routerLink]=\"['/company-user-leave-request', item5.id]\">\n                                                    <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif5(item5.id)\">x</button>\n                                                    </div>\n                                                    <h5 class=\"media-heading\">{{item5.tbl_user_profile.f_name}}</h5>\n                                                    <p><a class=\"content\">Click here to view leave details.</a></p>\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <div class=\"divider\"> </div>\n                                    <li class=\"head\">\n                                            <div class=\"navbar-content\">\n                                                <h4>Time Extension Approval</h4>\n                                                <div *ngFor=\"let item6 of adminnotifdata\">\n                                                    <a (click)=\"closeNotif6(item6.id)\" [routerLink]=\"['/company-time-extension-request', item6.request_id,item6.xt.tbl_project_task.tbl_project_module.project_id]\">\n                                                        <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' (click)=\"closeNotif6(item6.id)\">x</button>\n                                                        </div>\n                                                        <h5 class=\"media-heading\">{{item6.xt.tbl_project_task.tbl_user_profile.f_name}}</h5>\n                                                        <p><a class=\"content\">Click here to view leave details.</a></p>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <div class=\"divider\"> </div>\n    \n                                <div *ngIf=\"count == 0\">\n                                    <h5 style=\"color : red; margin-left:20px; \">No Data</h5>\n                                </div>\n                            </ul>\n    \n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                                <b class=\"caret\"></b></a>\n                            <ul class=\"dropdown-menu\">\n                                <li>\n                                    <div class=\"navbar-content\">\n                                        <span>JS Krishna</span>\n                                        <p class=\"text-muted small\">\n                                            me@jskrishna.com\n                                        </p>\n                                        <div class=\"divider\">\n                                        </div>\n                                        <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </header>\n    </div>"

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
        this.userpendingdata = [];
        this.upgradeBtnShow = true;
        this.assignHeadCount = 0;
        this.approveEstimationCount = 0;
        this.approveProjectCount = 0;
        this.planProjectCount = 0;
        this.resubmitEstimationCount = 0;
        this.userpendingdataCount = 0;
        this.adminnotifdataCount = 0;
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
        // this.companyService.getLoggedinEntity().subscribe(data => {
        //   this.entity = data;
        //   if (this.entity.role_id == 3) {
        //     this.upgradeBtnShow = false;
        //   }
        // });
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
        this.getAllemppendingleavesnotifi();
        this.socket.on('Leaveaddeduser', function (data) {
            _this.getAllemppendingleavesnotifi();
        });
        this.socket.on('userstatuschange', function (data) {
            _this.getAllemppendingleavesnotifi();
        });
        this.getAllSendtoadminnotif();
        this.socket.on('adminviewstatuschange', function (data) {
            _this.getAllSendtoadminnotif();
        });
        this.socket.on('sendtoadmin', function (data) {
            _this.getAllSendtoadminnotif();
        });
    };
    CompanyTopbarComponent.prototype.assignHeadNotification = function () {
        // ---------------------------------Start-------------------------------------------
        // Function      : get assignHeadNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
        // this.companyService.assignHeadNotification().subscribe(res => {
        //   this.project = res;
        //   this.assignHeadCount = 0;
        //   this.assignHeadCount = this.project.length;
        //   this.refresh();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif = function (id) {
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 12-03-2018
        // Last Modified : 12-03-2018, Rinsha
        // Desc          : close notification when pm sees the assign team head notification
        // this.companyService.closeNotif(id).subscribe(res => {
        //   if (res.success == false) {
        //     let snackBarRef = this.snackBar.open(res.msg, '', {
        //       duration: 3000
        //     });
        //   }
        //   this.assignHeadNotification();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.approveEstimationNotification = function () {
        // ---------------------------------Start-------------------------------------------
        // Function      : get approveEstimationNotification
        // Params        : 
        // Returns       : notification data
        // Author        : Rinsha
        // Date          : 14-03-2018
        // Last Modified : 14-03-2018, Rinsha
        // Desc          : check whether the loggedin project manager have pending estimation approval notification
        // this.companyService.approveEstimationNotification().subscribe(res => {
        //   this.estimationApproval = res;
        //   this.approveEstimationCount = 0;
        //   this.approveEstimationCount = this.estimationApproval.length;
        //   this.refresh();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif2 = function (notif_id) {
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of estimation approval
        // Params        : notification id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 14-03-2018
        // Last Modified : 14-03-2018, Rinsha
        // Desc          : close notification when pm sees the estimation approval notification
        // this.companyService.closeNotif2(notif_id).subscribe(res => {
        //   if (res.success == false) {
        //     let snackBarRef = this.snackBar.open(res.msg, '', {
        //       duration: 3000
        //     });
        //   }
        //   this.approveEstimationNotification();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.approveProjectNotification = function () {
        // ---------------------------------Start-------------------------------------------
        // Function      : get apprroveProjectNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : check whether the loggedin company admin have any project to approves
        // this.companyService.approveProjectNotification().subscribe(res => {
        //   // console.log(res)
        //   this.approveProject = res;
        //   this.approveProjectCount = 0;
        //   this.approveProjectCount = this.approveProject.length;
        //   this.refresh();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif3 = function (p_id) {
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of project approval
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : close notification when pm sees the project approval notification
        // this.companyService.closeNotif3(p_id).subscribe(res => {
        //   if (res.success == false) {
        //     let snackBarRef = this.snackBar.open(res.msg, '', {
        //       duration: 3000
        //     });
        //   }
        //   this.approveProjectNotification();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.planProjectNotification = function () {
        // ---------------------------------Start-------------------------------------------
        // Function      : get planProjectNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 20-03-2018
        // Last Modified : 20-03-2018, Rinsha
        // Desc          : check whether the loggedin pm have any project to plan
        // this.companyService.planProjectNotification().subscribe(res => {
        //   // console.log(res)
        //   this.planProject = res;
        //   this.planProjectCount = 0;
        //   this.planProjectCount = this.planProject.length;
        //   this.refresh();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif4 = function (p_id) {
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of project plan
        // Params        : project id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 19-03-2018
        // Last Modified : 19-03-2018, Rinsha
        // Desc          : close notification when pm sees the project plan notification
        // this.companyService.closeNotif4(p_id).subscribe(res => {
        //   if (res.success == false) {
        //     let snackBarRef = this.snackBar.open(res.msg, '', {
        //       duration: 3000
        //     });
        //   }
        //   this.planProjectNotification();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.resubmitEstimationNotification = function () {
        // ---------------------------------Start-------------------------------------------
        // Function      : get resubmitEstimationNotification
        // Params        : 
        // Returns       : project data
        // Author        : Rinsha
        // Date          : 20-03-2018
        // Last Modified : 20-03-2018, Rinsha
        // Desc          : check whether the loggedin pm have any estimation to resubmit
        // this.companyService.resubmitEstimationNotification().subscribe(res => {
        //   // console.log(res)
        //   this.resubmitEstimation = res;
        //   this.resubmitEstimationCount = 0;
        //   this.resubmitEstimationCount = this.resubmitEstimation.length;
        //   this.refresh();
        // });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.getAllemppendingleavesnotifi = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      :  getAllemppendingleavesnotifi
        // Params        : 
        // Returns       : notification data
        // Author        : sudha
        // Date          : 29-03-2018
        // Last Modified : 
        // Desc          : check user leave request
        this.companyService.getAllemppendingleavesnotifi().subscribe(function (res) {
            console.log(res);
            _this.userpendingdata = res;
            _this.userpendingdataCount = 0;
            _this.userpendingdataCount = _this.userpendingdata.length;
            // console.log( this.userpendingdata);
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif5 = function (notif_id) {
        var _this = this;
        console.log(notif_id);
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of estimation approval
        // Params        : notification id
        // Returns       : 
        // Author        : sudha
        // Date          : 29-03-2018
        // Last Modified : 
        // Desc          : close notification user leave request
        this.companyService.closeNotif5(notif_id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.getAllemppendingleavesnotifi();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.getAllSendtoadminnotif = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      :  getAllSendtoadminnotif
        // Params        : 
        // Returns       : notification data
        // Author        : sudha
        // Date          : 06-03-2018
        // Last Modified : 
        // Desc          : admin approval for time extension
        this.companyService.getAllSendtoadminnotif().subscribe(function (res) {
            console.log(res);
            _this.adminnotifdata = res;
            _this.adminnotifdataCount = 0;
            _this.adminnotifdataCount = _this.adminnotifdata.length;
            // console.log( this.adminnotifdata);
            _this.refresh();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.closeNotif6 = function (notif_id) {
        var _this = this;
        console.log(notif_id);
        // ---------------------------------Start-------------------------------------------
        // Function      : close notification of estimation approval
        // Params        : notification id
        // Returns       : 
        // Author        : sudha
        // Date          : 29-03-2018
        // Last Modified : 
        // Desc          : close notification user leave request
        this.companyService.closeNotif6(notif_id).subscribe(function (res) {
            if (res.success == false) {
                var snackBarRef = _this.snackBar.open(res.msg, '', {
                    duration: 3000
                });
            }
            _this.getAllSendtoadminnotif();
        });
        // ---------------------------------End-------------------------------------------
    };
    CompanyTopbarComponent.prototype.refresh = function () {
        this.count = 0;
        this.count = this.assignHeadCount + this.approveEstimationCount + this.approveProjectCount +
            this.planProjectCount + this.resubmitEstimationCount + this.userpendingdataCount +
            this.adminnotifdataCount;
    };
    CompanyTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-topbar',
            template: __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], CompanyTopbarComponent);
    return CompanyTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task{background:#fbf6f1;width:100%;padding:6px 0;display: inline-block;margin-bottom:6px;}\r\nbutton, input, optgroup, select, textarea{outline:none !important;}\r\n.taskedit{border-left:1px solid #ccc;    display: inline-block;width:100%;margin-top: 5px;}\r\n.task ul li{width:auto;float:left;padding: 8px;}\r\n\ta{color:#111;}\r\n.task h5{padding-top:13px;padding-top: 6px;}\r\n.hash{background:#f7f6f4;}\r\n.round-button {\r\n    border-radius: 20px;\r\n    margin: 0;\r\n    float: left;\r\n    background: #f37600;\r\n    color: #fff;\r\n    padding: 7px 15px;\r\n    transition: background 2s;\r\n\tmargin-bottom:15px;\r\n}\r\n.round-button:hover {\r\n    background: #ffaa05;\r\n    color: #fff;\r\n}\r\n.dropdown ul.dropdown-menu:before {\r\n    content: \"\";\r\n    border-bottom: 10px solid #fff;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 16px;\r\n    z-index: 10;\r\n}\r\n.round-button:hover, .round-button:focus, .round-button.focus{color:#fff;}\r\nbutton, input, optgroup, select, textarea{outline:none;}\r\n.effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 15px; width: 0; height: 2px;background-color: #bba28b; transition: 0.4s;right:15px;}\r\n.effect-1:focus ~ .focus-border{width: 95%; transition: 0.4s;}\r\n.effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;width:100%;}\r\n.style{width:100%;}\r\nlabel{font-size:15px;color:#4a4a4a;font-weight:normal;padding:5px 0;}\r\n.mrg-2{margin-bottom:10px;}\r\n.dropdown-menu > li > a {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: normal;\r\n    line-height: 25px;\r\n    color: #333333;\r\n    white-space: nowrap;\r\n}\r\n.addmodule {\r\n    padding: 20px 10px!important;\r\n    min-width: 357px;\r\n    right: 0px;\r\n    left: inherit;\r\n}\r\n.style{border:none;border-bottom: 1px solid #ccc;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n}\r\n.btn-file{padding:0;}\r\n.white {\r\n    background: #ffffff none repeat scroll 0 0;\r\n    \r\n    display: inline-block;\r\n    padding: 33px 25px;\r\n    width: 100%;\r\n\tmargin-bottom:20px;\r\n}\r\n.center-bt{margin:20px auto 10px auto;float:none;}\r\n@media only screen and (max-width : 767px) {\r\n.mrg-2 {\r\n    margin-bottom: 37px;\r\n}\r\n\r\n.task ul li{    padding: 2px;}\t\r\n.addmodule{    min-width: 274px;}\r\n}\r\n.highlight{    background: rgb(247, 247, 247);\r\n    box-shadow: -4px 4px 35px #eaeaea;\r\n    border: 2px solid #f1ab7d;}\r\n\r\n\r\n    ul.breadcrumb {\r\n        padding: 10px 0;\r\n        list-style: none;\r\n    \r\n        text-align: left;\r\n        color: #d68956;\r\n    }\r\n    ul.breadcrumb li {\r\n        display: inline;\r\n        font-size: 15px;\r\n    }\r\n    ul.breadcrumb li+li:before {\r\n        padding: 8px;\r\n        color: black;\r\n        content: \"/\\A0\";\r\n    }\r\n    ul.breadcrumb li a {\r\n        color: #bbbbbb;\r\n        text-decoration: none;\r\n    }\r\n    ul.breadcrumb li a:hover {\r\n        color: #d68956;\r\n        text-decoration: none;\r\n    \r\n    }\r\n    .breadcrumb{    background-color: #f6f7fa;}    \r\n    mat-chip {\r\n        max-width: 150px;\r\n      }\r\n      .example-button-row {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n      }\r\n.bt{border-radius:30px;padding:3px 13px;border:1px solid #f37600;background:none;    font-size: 12px;\r\n    margin-top: 9px;}      \r\n    .modal-content{border-radius:0;box-shadow:none;}\r\n    .modal-header {\r\n        padding: 7px 15px;\r\n        border-bottom: 1px solid #e5e5e5;\r\n        background: #f37600;\r\n    }\r\n    .modal-title {\r\n        margin: 0;\r\n        line-height: 26px;\r\n        font-size: 15px;\r\n        color: #fff;\r\n    }\r\n    .photo{width:120px;height:120px;border-radius:50%;overflow:hidden;\r\n        float:left;background:#ccc;margin-bottom: 20px;\r\n       }\r\n    .round-button{margin-right:5px;}\r\n    .photo img{width:100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                    <h2>Request Management</h2>\n                    <ul class=\"breadcrumb\">\n                      <li><a routerLink=\"/\">Leave Request Management</a></li>\n                      <li><a routerLink=\"/company-leave-request-list\">Leave Request Management List</a></li>\n                      \n                      <li>Leave Request User View</li>\n                    </ul>\n                   \n                    <div class=\"row\">\n                    <!-- <div *ngFor=\"let myTask of myTasks; let i = index\">            -->\n              <div class=\"col-md-5 col-sm-12 col-xs-12 gutter \">\n               <div  class=\"white\" >\n            \n                 <div class=\"photo\">\n                   <img *ngIf=\"leavedata?.tbl_user_profile.tbl_login.profile_image == ''\" src=\"./assets/images/user1.png\">\n                   <img *ngIf=\"leavedata?.tbl_user_profile.tbl_login.profile_image != ''\"  src=\"../assets/profile_upload/{{leavedata?.tbl_user_profile.tbl_login.profile_image}}\">\n                 </div>\n                 <div class=\"clearfix\"></div>\n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Name</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{leavedata?.tbl_user_profile?.f_name}}</label></div>\n                 </div>\n                \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Leave Start Date</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{leavedata?.start_date}}</label></div>\n                 </div>\n                 \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Leave End Date</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{leavedata?.end_date}}</label></div>\n                 </div>\n                 \n                 <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Leave Hour</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{leavedata?.leave_hrs}}</label></div>\n                 </div>\n              <div *ngIf=\"leavedata?.request_status == 'Rejected'\">\n                <div class=\"form-group\">\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Reject Reason</label></div>\n                   <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">{{leavedata?.reject_reason}}</label></div>\n                 </div>\n                </div>\n                <div *ngIf=\"leavedata?.request_status == 'Accepted'\">\n                    <div class=\"form-group\">\n                       <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\">Status</label></div>\n                       <div class=\"col-md-6 col-sm-6 col-xs-6\"><label for=\"\" class=\"label2\">Accepted</label></div>\n                     </div>\n                    </div>\n                 <div class=\"col-md-4\">\n                    <button *ngIf=\"leavedata?.request_status == 'Pending'\" class=\"btn round-button\"  (click)=\"getacceptId(leavedata.id)\" data-toggle=\"modal\" data-target=\"#acceptModal\" type=\"submit\">Accept</button>\n                 \n                    <button *ngIf=\"leavedata?.request_status == 'Pending'\" class=\"btn round-button\" (click)=\"getrejectId(leavedata.id)\" data-toggle=\"modal\" data-target=\"#rejectModal\" type=\"submit\">Reject</button>\n                  </div>\n  \n              </div>\n              </div>\n                         <div class=\"col-md-7 col-sm-12 col-xs-12 gutter\">\n                          <div *ngFor=\"let myTask of myTasks; let i = index\">    \n                    <div class=\"white\">\n                 <div class=\"col-md-12 mrg-2\">\n                   <div class=\"col-md-4\">\n                     <label>\n                       Project Name\n                     </label>\n                   </div>\n                   <div class=\"col-md-4 col-xs-5\">\n                     <!-- <input class=\"effect-1 style\" type=\"text\" placeholder=\"44:00 Hr\"> -->\n                     <span class=\"focus-border\">{{myTask?.project_name}}</span>\n                   </div>\n\n                 </div>\n                 <div class=\"col-md-12 mrg-2\">\n                  <div class=\"col-md-4\">\n                    <label>\n                      Total Hours\n                    </label>\n                  </div>\n                  <div class=\"col-md-4 col-xs-5\">\n                    <!-- <input class=\"effect-1 style\" type=\"text\" placeholder=\"44:00 Hr\"> -->\n                    <span class=\"focus-border\">{{sum}}</span>\n                  </div>\n\n                </div>\n                <div *ngFor=\"let task of myTasks[i].tbl_project_modules; let j = index \">\n                  \n                    <!-- <div *ngFor=\"let task1 of task; \"> -->\n                    <div class=\"col-md-12 col-xs-12 pull-right\">\n                   <div class=\"task\">\n                     <div class=\"col-md-8 col-xs-7\">\n                       <h5>{{task?.module_name}}</h5>\n                     </div>\n                     <div class=\"col-md-4 col-xs-5\">\n                       <ul class=\"taskedit\">\n                          <li>{{task?.ttlModHour}}</li>\n                         <!-- <li>{{getHours(myTask.tbl_project_tasks)}}</li> -->\n                         <!-- <li class=\"pull-right\"><a href=\"\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                         <li class=\"pull-right\"><a href=\"\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li> -->\n                         \n                       </ul>\n                     </div>\n                   </div>\n                 </div><!---task end-->\n                 <div *ngFor=\"let task1 of myTasks[i].tbl_project_modules[j].tbl_project_tasks; let y = index\">\n                 <div class=\"col-md-11 col-xs-12 pull-right\">\n                    <!-- <div *ngFor=\"let task of myTasks[i].tbl_project_modules; \"> -->\n                        <!-- <div ngFor=\"let task1 of myTasks[i].tbl_project_tasks[j].tbl_task_status_assocs; let y = index\"> -->\n                   <div class=\"task hash\">\n                     \n                     <div class=\"col-md-9 col-xs-5\">\n                       <ul class=\"\">\n                          <li>{{task1?.task_name}}</li>\n                         <!-- <li>assign person</li> -->\n                         <li>{{task1?.planned_hour + task1?.buffer_hour}} hrs</li>\n                         <li>{{task1?.planned_start_date_time | date:'EEE, d MMM,y'}}</li>\n                         <li>{{task1?.planned_end_date_time | date:'EEE, d MMM,y'}}</li>\n                          <!-- <li class=\"pull-right\"><a href=\"\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i></a></li>\n                         <li class=\"pull-right\"><a href=\"\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></li>  -->\n                         \n                       </ul>\n                     </div>\n                \n                     \n \n                     <div class=\"clearfix\"></div>\n                    </div>\n                  </div>\n                   </div>\n                 <!-- </div> -->\n\n\n                </div>\n                                 \n                             </div>\n\n                            </div>\n\n\n                         </div>\n\n\n\n                     </div>\n\n                </div>\n                \n            </div>\n<!-- --------------------------------------------- rejectModal ----------------------------------------------------------------- -->\n    \n    <div id=\"rejectModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  #closeBtn>&times;</button>\n              <h4 class=\"modal-title\">Reject Reason </h4>\n            </div>\n            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"Reject(reason);\" novalidate>\n            <div class=\"modal-body delete-popup\">\n              \n                  <textarea matInput placeholder=\"Reject reason\" name =\"reason\" [(ngModel)]=\"reason.reject_reason\"  required></textarea>\n            \n    \n            </div>\n    \n            <div class=\"modal-footer\">\n                <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Reject</button>\n            </div>\n          </form>\n          </div>\n    \n        </div>\n      </div>\n      <!-----------------------------------------------------------------rejectModal-------------------------------------->\n      <!-- --------------------------------------------- acceptModal ----------------------------------------------------------------- -->\n    \n    <div id=\"acceptModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  #closeBtn1>&times;</button>\n              <h4 class=\"modal-title\">Accept Leave </h4>\n            </div>\n            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"Accept(accept);\" novalidate>\n                <div class=\"modal-body delete-popup\">\n                    <!-- <i class=\"fa fa-exclamation\"></i> -->\n          \n          \n                    <h4 class=\"textalign\">Are you sure?</h4>\n          \n                  </div>\n    \n            <div class=\"modal-footer\">\n                <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Accept</button>\n            </div>\n          </form>\n          </div>\n    \n        </div>\n      </div>\n      <!-----------------------------------------------------------------acceptModal-------------------------------------->\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyUserLeaveRequestComponent; });
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




var CompanyUserLeaveRequestComponent = (function () {
    // data = {"start_date":'',"end_date":'',"leave_hrs":'',
    //   "tbl_user_profile":{"f_name":''},
    //   "tbl_user_profile": {"tbl_login": {"profile_image":''}},
    // };
    function CompanyUserLeaveRequestComponent(_activatedRoute, companyService, routes, snackBar) {
        this._activatedRoute = _activatedRoute;
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.reason = { reject_reason: '', id: '' };
        this.accept = { id: '' };
        this.arr1 = [];
        this.showSpinner = false;
    }
    CompanyUserLeaveRequestComponent.prototype.ngOnInit = function () {
        this.getUserid();
    };
    CompanyUserLeaveRequestComponent.prototype.getUserid = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.companyService.getuserleave(this.userId).subscribe(function (user) {
            // console.log(user);
            _this.leavedata = user.leave;
            _this.myTasks = user.mytask;
            _this.myTasks.forEach(function (element, key) {
                // console.log(element.)
                _this.module_time = 0;
                _this.totalhr = 0;
                element.tbl_project_modules.forEach(function (elm_tasks, key1) {
                    _this.module_time = 0;
                    elm_tasks.tbl_project_tasks.forEach(function (elm_tasks1) {
                        console.log(elm_tasks1);
                        _this.module_time = _this.module_time + elm_tasks1.planned_hour + elm_tasks1.buffer_hour;
                        // console.log(this.module_time);
                    });
                    _this.myTasks[key].tbl_project_modules[key1].ttlModHour = _this.module_time;
                    _this.arr1.push(_this.module_time);
                });
                _this.sum = _this.arr1.reduce(function (a, b) { return a + b; }, 0);
            });
            console.log(_this.myTasks);
        });
    };
    CompanyUserLeaveRequestComponent.prototype.getrejectId = function (id) {
        // console.log(id);
        this.reason.id = id;
    };
    CompanyUserLeaveRequestComponent.prototype.getacceptId = function (id) {
        // console.log(id);
        this.accept.id = id;
    };
    CompanyUserLeaveRequestComponent.prototype.Reject = function (reason) {
        var _this = this;
        //   console.log(reason);
        this.showSpinner = true;
        this.companyService.addReason(this.reason).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn.nativeElement.click();
                _this.routes.navigate(['/company-leave-request-list']);
                // this.getUserid();
            }
        });
    };
    CompanyUserLeaveRequestComponent.prototype.Accept = function (accept) {
        var _this = this;
        //  console.log(accept);
        this.showSpinner = true;
        this.companyService.addaccept(this.accept).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn1.nativeElement.click();
                _this.routes.navigate(['/company-leave-request-list']);
                //  this.getUserid();
            }
        });
    };
    CompanyUserLeaveRequestComponent.prototype.getHours = function (tasks) {
        var time = 0;
        tasks.forEach(function (element) {
            time = time + element.planned_hour + element.buffer_hour;
        });
        return time;
    };
    CompanyUserLeaveRequestComponent.prototype.getTotalHours = function (total) {
        // console.log(total)
        //   let totalhr = 0;
        //   total.forEach(element => {
        //     // console.log("K"+element)
        //     element.forEach(element1 => {
        //       element1.forEach(element2 => {
        //     totalhr = totalhr+element2.planned_hour+element2.buffer_hour
        //   });
        //   });
        // });
        //   return totalhr
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyUserLeaveRequestComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyUserLeaveRequestComponent.prototype, "closeBtn1", void 0);
    CompanyUserLeaveRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-user-leave-request',
            template: __webpack_require__("../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-user-leave-request/company-user-leave-request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyUserLeaveRequestComponent);
    return CompanyUserLeaveRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.modal-dialog{max-width:900px !important;width:100%;}\r\n.user{width:280px;height:280px;border-radius:50%;margin:0 auto;float:none;overflow:hidden; background: #d45d0e;margin-top: 20%;\r\n    margin-bottom: 20%;text-align:center;}\r\n    .user:hover{opacity:0.6;cursor:pointer;}\r\n.user img{width:120%;max-width: 287px;min-width: 287px;}\r\n\r\n.brdr-left{    width: 1px;\r\n    height: 155px;\r\n    float: left;\r\n    margin-top: 36%;\r\n    display: inherit;\r\n    background: #efecec;\r\n    margin-right: 21px;}\r\n  .user .fa-camera{color:#fff;font-size:50px;text-align:center;background: #d45d0e;padding-top:204%;}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <company-sidebar></company-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <company-topbar></company-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                        <h2>Users</h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">users</a></li>\n                          \n                          \n                          <li>userslist</li>\n                        </ul>\n                    <div class=\"row\">\n                      <!-----------------------------------------------------------------table-------------------------------------->\n                            \n  \n  <!-- <p>You selected: {{selected}} </p> -->\n\n  <div class=\"col-md-12\">\n        <div class=\"row\">\n        <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n            <div class=\"\"  >\n                <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n            <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n              <animateTransform attributeType=\"xml\"\n                attributeName=\"transform\"\n                type=\"rotate\"\n                from=\"0 25 25\"\n                to=\"360 25 25\"\n                dur=\"0.6s\"\n                repeatCount=\"indefinite\"/>\n              </path>\n            </svg>\n        </div>\n        </div> -->\n        \n    \n        <div class=\"col-md-12 optionz\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"example-header\">\n                      <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                      </mat-form-field>\n                    </div>\n              </div>\n              <div class=\"col-md-2 pull-right\">\n                  <div *ngIf=\"all_value\">\n                  <mat-form-field class=\"filter\"> \n                      \n                        <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\n                          <!-- <mat-option>None</mat-option> -->\n                          <mat-option value=\"All\">All</mat-option>\n                          <mat-option value=\"Active\">Active</mat-option>\n                          <mat-option value=\"Block\">Block</mat-option>\n                          <mat-option value=\"Deleted\">Deleted</mat-option>\n                          <!-- <mat-option value=\"Delete\">Delete </mat-option> -->\n                        </mat-select>\n                      </mat-form-field>\n              </div>\n            </div>\n          </div>\n        </div>\n    \n    \n    <!--    \n              <div class=\"example-header\" >\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n              </div> -->\n           \n        <div class=\"example-container mat-elevation-z8 \">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n     <!-- Name Column -->\n     <ng-container matColumnDef=\"slno\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n      </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>NAME </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.f_name}} </mat-cell>\n        </ng-container>\n    \n     <!-- Name Column -->\n     <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\n    </ng-container>\n      \n       <!-- Progress Column -->\n       <ng-container matColumnDef=\"contactnumber\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.contact_no}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"> Active</div>\n            <div *ngIf=\"row.tbl_login.block_status==true && row.tbl_login.delete_status==false \"> Blocked</div>\n            <div *ngIf=\"row.tbl_login.delete_status==true \"> Deleted</div>\n           \n          </mat-cell>\n        </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button *ngIf=\"row.tbl_login.delete_status==false && (row.tbl_login.block_status==false  || row.tbl_login.block_status==true)\" (click)=\"getId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\n                    <i class=\"material-icons\">delete</i>\n                  <span>Delete</span>\n                </button>\n                <button *ngIf=\"row.tbl_login.is_verified==false && row.tbl_login.delete_status==false\" (click)=\"getEditId(row.tbl_login.id)\" data-toggle=\"modal\" data-target=\"#editModal\" mat-menu-item >\n                        <i class=\"material-icons\">mode_edit</i>\n                      <span>Edit</span>\n                    </button>\n               \n                <button *ngIf=\"row.tbl_login.is_verified==true && row.tbl_login.block_status==false && row.tbl_login.delete_status==false\"  (click)=\"blockUser(row.tbl_login.id)\" mat-menu-item>\n                    <i class=\"material-icons\">block</i>\n                  <span>Block</span>\n                </button>\n                <button *ngIf=\"row.tbl_login.is_verified==true && row.tbl_login.block_status==true && row.tbl_login.delete_status==false\" (click)=\"unblockUser(row.tbl_login.id)\" mat-menu-item>\n                    <i class=\"material-icons\">block</i>\n                  <span>Unblock</span>\n                </button>\n                <button *ngIf=\"row.tbl_login.delete_status==true\" mat-menu-item disabled>\n                    <i class=\"material-icons\">delete_forever</i>\n                  <span>Deleted</span>\n                </button>\n              </mat-menu>\n           \n          </mat-cell>\n      </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n      <div class=\"col-md-15 \">\n          <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n              <mat-spinner></mat-spinner>\n             </div> -->\n      </div>\n      <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n          <div class=\"col-md-4 col-md-offset-4\">\n              <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n          </div>\n        </div>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n    \n    \n    </div>\n    </div>\n    <div class=\"add-button\">\n        <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" (click)=\"addNewUser()\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n      </div>\n    <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n    \n    <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Delete </h4>\n            </div>\n            <!-- <div class=\"modal-header\"> -->\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n            <!-- </div> -->\n            <div class=\"modal-body delete-popup\">\n              <i class=\"fa fa-exclamation\"></i>\n    \n    \n              <h4 class=\"textalign\">Are you sure?</h4>\n    \n            </div>\n    \n            <div class=\"modal-footer\">\n              <button type=\"button\" (click)=\"deleteUser(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n      <!-----------------------------------------------------------------delete modal-------------------------------------->\n      <!-----------------------------------------------------------------add modal-------------------------------------->\n      <div id=\"addModal\" class=\"modal fade\">\n          <div class=\"modal-dialog\">\n  \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n                <h4 class=\"modal-title\">Add New User</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"addUser(newUser);\" novalidate>\n                <div class=\"col-md-7\">\n               \n                          \n                    <div class=\"form-group\" >\n                        <div class=\"example-container\">\n                          <mat-form-field>\n                              <input matInput placeholder=\"Email\" [formControl]=\"email\" name =\"email\" [(ngModel)]=\"newUser.email\"  required>\n                              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n                           </mat-form-field>\n                          <mat-form-field>\n                            <input matInput placeholder=\"First Name\"  name =\"f_name\" [(ngModel)]=\"newUser.f_name\"  pattern=\"[A-Za-z]\" required >\n                          </mat-form-field>\n                          <mat-form-field>\n                              <input matInput placeholder=\"Last Name\"  name =\"l_name\" [(ngModel)]=\"newUser.l_name\" pattern=\"[A-Za-z]\"  required>\n                            </mat-form-field>\n                            <mat-form-field>\n\n                            <mat-select placeholder=\"Gender\"  name=\"gender\"  [(ngModel)]=\"newUser.gender\" required>\n\n                              <mat-option value=\"Male\">Male</mat-option>\n                              <mat-option value=\"Female\">Female</mat-option>\n                            \n                            </mat-select>\n                          </mat-form-field>    \n                          <mat-form-field>\n                              <input matInput placeholder=\"Phone Number\"   name =\"contact_no\" [(ngModel)]=\"newUser.contact_no\"  min=\"10\" required>\n                        \n                             \n                            </mat-form-field> \n                        \n                          <mat-form-field>\n                              \n                              <mat-select placeholder=\"Designation\"  name=\"design\"  [(ngModel)]=\"newUser.design\" required>\n                              \n                                  <mat-option  *ngFor=\"let item of designation\"  [value]=\"item.id\" >{{item.designation}}</mat-option>\n                                                              \n                               </mat-select>\n                          </mat-form-field>   \n                          <mat-form-field>\n                              \n                              <mat-select placeholder=\"Previous Experience\"  name=\"pre_exp\"  [(ngModel)]=\"newUser.pre_exp\" required>\n                              \n                                  <mat-option  *ngFor=\"let item of prevexp\"  [value]=\"item.id\" >{{item.exp_range}}</mat-option>\n                                                              \n                               </mat-select>\n                          </mat-form-field>  \n                          <mat-form-field>\n                              \n                              <mat-select placeholder=\"User Group\"  name=\"user_group\"  [(ngModel)]=\"newUser.user_group\" required>\n                              \n                                <mat-option  *ngFor=\"let item of usergroup\"  [value]=\"item.id\" >{{item.role}}</mat-option>\n                                                          \n                               </mat-select>\n                          </mat-form-field>   \n                      \n                              <mat-form-field *ngIf=\"newUser.user_group == 4\" >\n                                <mat-select placeholder=\"Team\" name='team' #group=\"ngModel\" [(ngModel)]=\"newUser.team\" multiple>\n                                  <mat-option [value]=\"item.id\" *ngFor=\"let item of team;\">{{item.team_name}}</mat-option>\n                                </mat-select>\n                              </mat-form-field>\n                              <mat-form-field>\n                                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Join date\" name =\"join_date\" [(ngModel)]=\"newUser.join_date\" >\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                  <mat-datepicker #picker></mat-datepicker>\n                                </mat-form-field>\n                          \n                    \n                        </div>\n                            \n                      </div>\n                  <br>\n                  <!-- <div *ngIf=\"showSpinner\">\n                                      <mat-spinner></mat-spinner>\n                                     </div> -->\n  \n  \n  \n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n  \n                    </div>\n                    <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                      <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                        x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                        xml:space=\"preserve\">\n                        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                          <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                          />\n                        </path>\n                      </svg>\n                    </div> -->\n  \n                  </div>\n  \n               \n                </div>\n                <div class=\"col-md-5\">\n                    <div class=\"brdr-left\"></div>\n                  \n                    \n                    <div class=\"user\">\n                        <label for=\"file-input\">\n                      <!-- <img *ngIf=\"!newUser.photoSrc\" src=\"./assets/images/user.png\"/>\n                      <img *ngIf=\"newUser.photoSrc\" [src]=\"newUser.photoSrc\"/> -->\n                      <img  *ngIf=\"newUser.photoSrc\" [src]=\"newUser.photoSrc\">\n                      <i *ngIf=\"!newUser.photoSrc\" class=\"fa fa-camera\"></i>\n                      </label>\n                      \n                    </div>\n                    <input style=\"display: none;\" (change)=\"displayPhoto($event)\" accept=\".png,.jpeg,.jpg,.bmp,.gif\" id=\"file-input\"  name=\"file\"   type=\"file\"/>\n\n                </div>\n              \n              </form>\n              </div>\n              <div class=\"modal-footer\">\n              </div>\n            </div>\n  \n          </div>\n        </div>\n         <!----------------------------------------addModal------------------------------>\n\n\n\n\n\n   <!-----------------------------------------------------------------Edit modal-------------------------------------->\n   <div id=\"editModal\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n          <h4 class=\"modal-title\">Update User</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\" updateUser(user) && f.form.valid;\" novalidate>\n          <div class=\"col-md-7\">\n         \n                    \n              <div class=\"form-group\" >\n                  <div class=\"example-container\"> \n                \n                        <label>{{user.email}} </label>\n                        \n                    \n                    <mat-form-field>\n                      <input matInput placeholder=\"First Name\"  name =\"f_name\" [(ngModel)]=\"user.f_name\"  pattern=\"[A-Za-z]\" required >\n                    </mat-form-field>\n                   <mat-form-field>\n                        <input matInput placeholder=\"Last Name\"  name =\"l_name\" [(ngModel)]=\"user.l_name\" pattern=\"[A-Za-z]\"  required>\n                      </mat-form-field>\n                      <mat-form-field>\n\n                      <mat-select placeholder=\"Gender\"  name=\"gender\"  [(ngModel)]=\"user.gender\" required>\n\n                        <mat-option value=\"Male\">Male</mat-option>\n                        <mat-option value=\"Female\">Female</mat-option>\n                      \n                      </mat-select>\n                    </mat-form-field>    \n                     <mat-form-field>\n                        <input matInput placeholder=\"Phone Number\"   name =\"contact_no\" [(ngModel)]=\"user.contact_no\"  min=\"10\" required>\n                  \n                       \n                      </mat-form-field> \n                  \n                   <mat-form-field>\n                        \n                        <mat-select placeholder=\"Designation\"  name=\"design\"  [(ngModel)]=\"user.designation_id\" required>\n                        \n                            <mat-option  *ngFor=\"let item of designation\"  [value]=\"item.id\" >{{item.designation}}</mat-option>\n                                                        \n                         </mat-select>\n                    </mat-form-field>    \n                     <mat-form-field>\n                        \n                        <mat-select placeholder=\"Previous Experience\"  name=\"pre_exp\"  [(ngModel)]=\"user.prev_exp_id\" required>\n                        \n                            <mat-option  *ngFor=\"let item of prevexp\"  [value]=\"item.id\" >{{item.exp_range}}</mat-option>\n                                                        \n                         </mat-select>\n                    </mat-form-field>  \n                    <mat-form-field>\n                        \n                        <mat-select placeholder=\"User Group\"  name=\"user_group\"  [(ngModel)]=\"user.role_id\" required>\n                        \n                          <mat-option  *ngFor=\"let item of usergroup\"  [value]=\"item.id\" >{{item.role}}</mat-option>\n                                                    \n                         </mat-select>\n                    </mat-form-field>   \n                \n                        <mat-form-field *ngIf=\"user.role_id == 4\" >\n                          <mat-select placeholder=\"Team\" name='team' #group=\"ngModel\" [(ngModel)]=\"user.team\" multiple>\n                            <mat-option [value]=\"item.id\" *ngFor=\"let item of team;\">{{item.team_name}}</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Join date\" name =\"join_date\" [(ngModel)]=\"user.join_date\" >\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                          </mat-form-field>\n                     \n              \n                  </div>\n                      \n                </div>\n            <br>\n            <!-- <div *ngIf=\"showSpinner\">\n                                <mat-spinner></mat-spinner>\n                               </div> -->\n\n\n\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Update</button>\n\n              </div>\n              <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                  xml:space=\"preserve\">\n                  <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                    <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                    />\n                  </path>\n                </svg>\n              </div> -->\n\n            </div>\n\n         \n          </div>\n          <div class=\"col-md-5\">\n              <div class=\"brdr-left\"></div>\n            \n              \n              <div class=\"user\">\n                  <label for=\"file-input1\">\n               <!-- <img src=\"../assets/profile_upload/1521016755851_846408.jpeg\"> -->\n                <img  *ngIf=\"user.editPhotoSrc\" [src]=\"user.editPhotoSrc\">\n                <img  *ngIf=\"user.photoSrc && user.editPhotoSrc != ''\" src=\"../assets/profile_upload/{{user.photoSrc}}\">\n                <i *ngIf=\"!user.photoSrc && user.editPhotoSrc != ''\" class=\"fa fa-camera\"></i>\n                </label>\n                \n              </div>\n              <input style=\"display: none;\" (change)=\"displayEditPhoto($event)\" accept=\".png,.jpeg,.jpg,.bmp,.gif\" id=\"file-input1\"  name=\"file\"   type=\"file\"/>\n\n          </div>\n        \n        </form>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n   <!----------------------------------------addModal------------------------------>         \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <company-footer></company-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
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





var CompanyUsersComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : All users
    function CompanyUsersComponent(companyService, routes, snackBar) {
        this.companyService = companyService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'name', 'email', 'contactnumber', 'status', 'action'];
        this.notExist = false;
        this.selected = 'All';
        this.all_value = false;
        this.showSpinner = false;
        this.user = {
            //email: '',
            f_name: '',
            l_name: '',
            gender: '',
            contact_no: '',
            design: '',
            pre_exp: '',
            user_group: '',
            team: [],
            join_date: '',
            photoSrc: '',
            imgFile: [],
            editPhotoSrc: ''
        };
        this.newUser = { email: '',
            f_name: '',
            l_name: '',
            gender: '',
            contact_no: '',
            design: '',
            pre_exp: '',
            user_group: '',
            team: [],
            join_date: '',
            photoSrc: '',
            imgFile: [] };
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]);
    }
    CompanyUsersComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    CompanyUsersComponent.prototype.refresh = function () {
        var _this = this;
        // console.log("hj");
        this.showSpinner = true;
        //  console.log(this.selected);
        var company = [];
        if (this.selected == 'All') {
            this.companyService.getAllusers().subscribe(function (data) {
                if (data.length != 0) {
                    _this.all_value = true;
                }
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Active') {
            this.companyService.getAllactiveusers().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Block') {
            this.companyService.getAllblockedusers().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
        if (this.selected == 'Deleted') {
            this.companyService.getAlldeleteusers().subscribe(function (data) {
                _this.loadToDataTable(data);
                _this.showSpinner = false;
            });
        }
    };
    CompanyUsersComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompanyUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.companyService.getAllusergroup().subscribe(function (res) {
            _this.usergroup = res;
        });
        this.companyService.getAllDesignation().subscribe(function (res) {
            _this.designation = res;
        });
        this.companyService.getAllPrevexp().subscribe(function (res) {
            _this.prevexp = res;
        });
        this.companyService.getAllTeam().subscribe(function (res) {
            _this.team = res;
        });
    };
    CompanyUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyUsersComponent.prototype.addNewUser = function () {
        //this.showSpinner =false;
        //this.showSpinnerDelete =false;
        this.newUser = { email: '',
            f_name: '',
            l_name: '',
            gender: '',
            contact_no: '',
            design: '',
            pre_exp: '',
            user_group: '',
            team: [],
            join_date: '',
            photoSrc: '',
            imgFile: []
        };
    };
    CompanyUsersComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete company
    CompanyUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.companyService.deleteUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //block company
    CompanyUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        //console.log(id);
        this.companyService.blockUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    //unblock company
    CompanyUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.companyService.unblockUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    CompanyUsersComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        if (['gif', 'png', 'jpg', 'jpeg'].indexOf(ext) < 0) {
            // fileInput.target.files.remove(0);
            this.newUser.photoSrc = '';
            alert('Please select a valid image [ jpg | jpeg | gif | png ]');
            return false;
        }
        //this.newUser.imgFile =ext;
        console.log(fileInput);
        this.newUser.imgFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.newUser.photoSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyUsersComponent.prototype.displayEditPhoto = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        if (['gif', 'png', 'jpg', 'jpeg'].indexOf(ext) < 0) {
            // fileInput.target.files.remove(0);
            this.user.editPhotoSrc = '';
            alert('Please select a valid image [ jpg | jpeg | gif | png ]');
            return false;
        }
        //this.newUser.imgFile =ext;
        console.log(fileInput);
        this.user.imgFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.user.editPhotoSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyUsersComponent.prototype.addUser = function (newUser) {
        var _this = this;
        console.log(newUser);
        this.showSpinner = true;
        // console.log(newUser);
        this.companyService.addUser(this.newUser).subscribe(function (addUser) {
            if (!addUser.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(addUser.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else if (addUser.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(addUser.msg, '', {
                    duration: 2000
                });
                _this.closeBtn.nativeElement.click();
                _this.refresh();
            }
        });
    };
    CompanyUsersComponent.prototype.getEditId = function (id) {
        var _this = this;
        //  console.log(id);
        this.showSpinner = false;
        this.companyService.getSingleuser(id).subscribe(function (data) {
            _this.user = data;
            // console.log(data);
            var teams = [];
            data.tbl_team_assocs.forEach(function (element) {
                teams.push(element.team_id);
            });
            _this.user.team = teams;
            _this.user.photoSrc = data.tbl_login.profile_image;
            // this.user.editPhotoSrc ='';
            //this.user.join_date = this.user.join_date.substring(0, 10);
            // console.log(data.tbl_login.profile_image);
            if (data.success == false) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
            }
            _this.user = data;
            // console.log(this.user.design);
        });
    };
    CompanyUsersComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user);
        this.showSpinner = true;
        this.companyService.updateUser(this.user).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn1.nativeElement.click();
                _this.refresh();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyUsersComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CompanyUsersComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], CompanyUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], CompanyUsersComponent.prototype, "sort", void 0);
    CompanyUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-users',
            template: __webpack_require__("../../../../../src/app/components/company-users/company-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-users/company-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], CompanyUsersComponent);
    return CompanyUsersComponent;
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

/***/ "../../../../../src/app/components/user-activity-log/user-activity-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n.form-control2{border:none;border-bottom:1px solid #ccc;border-radius:0;box-shadow:none;    margin-top: 12px;}\r\n.mr-top{     padding-top: 20px;\r\n  font-weight: 500;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-activity-log/user-activity-log.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <user-sidebar></user-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <user-topbar></user-topbar> \n                \n                    <!-- end topbar-->\n                    <div class=\"user-dashboard\">\n                        <h2>Activity Log </h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">Activity Log</a></li>\n                          \n                          \n                          <li>Activity Log list </li>\n                        </ul>\n                    <div class=\"row\">\n                      <!-----------------------------------------------------------------table-------------------------------------->\n   \n  \n\n\n  <div class=\"col-md-12\">\n      <div class=\"row\">\n      <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div>\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div> \n            \n           \n                <div class=\"col-md-5 col-xs-6 col-md-push-2\">\n                    <div class=\"row\">\n                          <div class=\"col-md-3 col-xs-4\">\n                            <label class=\"mr-top\">Date Range Filter</label>\n                          </div>\n                          <div class=\"col-md-5 col-xs-8\">\n                            <input type=\"text\" class=\"form-control form-control2\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedStartDate($event, daterange)\" />\n                          </div>\n                    </div>\n              \n           \n               </div>\n        </div>\n      </div>\n  \n  \n\n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"slno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n    </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>DATE </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{row.createdAt | date:'EEE, d MMM,y'}}</mat-cell>\n      </ng-container>\n           <!-- Name Column -->\n      <ng-container matColumnDef=\"time\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>TIME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.createdAt | date:'shortTime'}} </mat-cell>\n      </ng-container>\n           <!-- Name Column -->\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>ACTION </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.action}} </mat-cell>\n      </ng-container>\n  \n  \n\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n    \n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  \n  \n        \n       <!-----------------------------------------------------------------end table-------------------------------------->\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <user-footer></user-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/user-activity-log/user-activity-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActivityLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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




var UserActivityLogComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : UserActivitylog
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified : 
    // Desc          : UserActivitylog
    function UserActivityLogComponent(userService, routes, snackBar) {
        this.userService = userService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'date', 'time', 'action'];
        this.notExist = false;
        this.showSpinner = false;
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
    }
    UserActivityLogComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        this.userService.getSingleUserActivitylog().subscribe(function (data) {
            console.log(data);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    UserActivityLogComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserActivityLogComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    UserActivityLogComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UserActivityLogComponent.prototype.selectedStartDate = function (value, datepicker) {
        var _this = this;
        this.startDate = value.start;
        this.endDate = value.end;
        var data = { startDate: this.startDate, endDate: this.endDate };
        this.userService.getDatefilterforlog(data).subscribe(function (res) {
            console.log(res);
            _this.loadToDataTable(res);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], UserActivityLogComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], UserActivityLogComponent.prototype, "sort", void 0);
    UserActivityLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-activity-log',
            template: __webpack_require__("../../../../../src/app/components/user-activity-log/user-activity-log.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-activity-log/user-activity-log.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], UserActivityLogComponent);
    return UserActivityLogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-bar-graph/user-bar-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-bar-graph/user-bar-graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/user-bar-graph/user-bar-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBarGraphComponent; });
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

var UserBarGraphComponent = (function () {
    function UserBarGraphComponent() {
        this.containerId = '';
        this.actual = '';
        this.planning = '';
    }
    UserBarGraphComponent.prototype.ngOnInit = function () {
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
    UserBarGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-bar-graph',
            template: __webpack_require__("../../../../../src/app/components/user-bar-graph/user-bar-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-bar-graph/user-bar-graph.component.css")],
            inputs: ['containerId', 'actual', 'planning']
        }),
        __metadata("design:paramtypes", [])
    ], UserBarGraphComponent);
    return UserBarGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bar {\r\n    fill: #FE6896;\r\n  }\r\n  \r\n  .bar:hover {\r\n    fill: #FE4980;\r\n  }\r\n  \r\n  .axis-title {\r\n    fill: none;\r\n    stroke: rgb(30, 18, 190);\r\n    stroke-width: 0.5px;\r\n  }\r\n  .no-g-data{\r\n    text-align: center;\r\n    /* min-height: 550px;\r\n    padding: 72px 0 55px 0; */\r\n  }\r\n  .no-g-data h4{\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    color: #4F657D\r\n  }\r\n  .no-g-data img{\r\n  \r\n    width: 62px;\r\n    margin: 100px 0 0 0;\r\n  }\r\n  .bg-g{background:#17a88f;color:#fff; padding: 10px;margin-bottom:10px;}\r\n  .bg-hash{background:#E9E9E9;padding: 10px;margin-bottom:10px;}\r\n  .bg-hash select{background:none;border:none;width:100%;}\r\n  h1{text-align:center;}\r\n  .sales{margin-bottom: 25px;}\r\n    .legend-text {\r\n      fill: #fff;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2>{{title}}</h2> -->\n\n        <!-- <span>Project:</span>\n   <mat-form-field class=\"filter\"> \n        \n          <mat-select  (change)=\"refresh()\" [(value)]=\"selected\"> \n         \n            <mat-option value=\"Select Project\">*Select Project</mat-option>\n            <mat-option value=\"Active\">Active</mat-option>\n            <mat-option value=\"Block\">Block</mat-option>\n            <mat-option value=\"Delete\">Delete </mat-option>\n\n          </mat-select>\n        </mat-form-field> -->\n        <h1>Task Vs Status</h1>\n         <div class=\"col-md-4 bg-g\">*Select Person</div>\n          <div class=\"col-md-4 bg-hash\">\n            <select>\n                <option value=\"\">sd</option>\n                <!-- <option *ngFor=\"let usr of users\" value=\"{{usr.id}}\">{{usr.f_name}} {{usr.l_name}}</option> -->\n            </select>\n          </div> \n\n<div   class=\"no-g-data\">\n    <!-- <svg  width=\"960\" height=\"500\"></svg> -->\n    <div id=\"bchart\"></div> \n\n</div>\n    \n<ng-template #empty>\n    <div class=\"col-md-12 no-g-data\">\n        <img src=\"assets/images/sad.png\" alt=\"sad\">\n        <h4>No Data Available!</h4>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDashboardBarComponent = (function () {
    function UserDashboardBarComponent(adminService, routes, config) {
        this.adminService = adminService;
        this.routes = routes;
        this.config = config;
        this.title = 'No of task vs Status';
        this.selected = 'Select Project';
        // subtitle = 'Bar Chart';
        this.barchart = [];
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
        this.graphData = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.siteUrl);
    }
    UserDashboardBarComponent.prototype.refresh = function () {
        //this.adminService.getchartbar().subscribe(data=>{
        // if(data.length <= 0){
        //   this.graphData = true;
        // }
        // console.log(this.graphData)
        // this.barchart= [];
        // data.forEach(elm =>{
        // console.log(elm);
        // if (elm.count != 0){
        this.barchart.push({ company: 'a', count: 2 });
        this.barchart.push({ company: 'b', count: 2 });
        this.barchart.push({ company: 'a', count: 2 });
        this.barchart.push({ company: 'b', count: 2 });
        // this.initSvg();
        // this.initAxis();
        // this.drawAxis();
        // this.drawBars();
        this.drawBar();
        // }
        //});
        //  console.log(data);
        //});
    };
    /*_____________________________________BAR CHART____________________________________*/
    UserDashboardBarComponent.prototype.drawBar = function () {
        // var mydata = 
        // [
        //   {
        //     "State":"Alaska",
        //     "Population":735132
        //   },
        //   {
        //     "State":"Arizona",
        //     "Population":6626624
        //   }
        // ]
        // d3.select("#pieChart2").selectAll("svg").remove();
        d3.select("#bchart").selectAll("svg").remove();
        var mydata = this.barchart;
        var dataMax = d3.max(mydata, function (d) { return d.count; });
        var margin = { top: 15, right: 30, bottom: 85, left: 45 };
        var width = 600 - margin.left - margin.right, height = 290 - margin.top - margin.bottom, barWidth = 10;
        var tempColor; //for mouseover effect
        var yScale = d3.scale.linear()
            .domain([0, dataMax])
            .range([0, height]);
        var xScale = d3.scale.ordinal()
            .domain(d3.range(0, mydata.length))
            .rangeBands([0, width], .2);
        var vGuideScale = d3.scale.linear()
            .domain([0, dataMax]) //guide numbering will be in the millions
            .range([height, 0]);
        var vAxis = d3.svg.axis()
            .scale(vGuideScale)
            .orient('left')
            .ticks(10);
        var hAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom');
        var tooltip = d3.select('body').append('div')
            .style('position', 'absolute')
            .style('padding', '0 10px')
            .style('background', '#333')
            .style('opacity', '.7')
            .style('color', '#fff')
            .style('border-radius', '3px');
        ////CHART////
        this.chart = d3.select('#bchart').append('svg')
            .style('background', '#fff')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
        // chart.exit().remove()
        var bars = this.chart.selectAll('rect')
            .data(mydata).enter()
            .append('rect')
            .style('fill', '#3EAE9A')
            .attr('width', xScale.rangeBand())
            .attr('x', function (d, i) { return xScale(i); })
            .attr('height', 0)
            .attr('y', height)
            .attr('class', 'barhvr')
            .on('mouseover', function (d) {
            tempColor = this.style.fill;
            d3.select(this)
                .attr('cursor', 'pointer');
            tooltip.html("Company: " + d.company)
                .style('left', (d3.event.pageX + 10) + 'px')
                .style('top', (d3.event.pageY - 20) + 'px');
            tooltip
                .style('opacity', .9);
        })
            .on('mouseout', function (d) {
            d3.select(this);
            // .attr('fill', tempColor)
            // .attr('opacity', 1)
            tooltip.style('opacity', 0)
                .style('left', '0px')
                .style('top', '0px');
        });
        // .on("click", this.mouseclick)  
        // .on('click', (d, i) => {
        //       // this.svg.remove();
        //       this.piechart = []
        //       this.quest[i].ans.forEach((val) => {
        //         // console.log("****************");
        //         // console.log(this.quest[i]);
        //         // console.log("****************");
        //       if (val.count != 0) {
        //           this.piechart.push({ name: val.value, percent: val.count,answeredUser:val.answeredUser, ans_type : this.quest[i].ans_type });
        //       }
        //   });
        //   this.setgraph();
        // });
        var vGuide = d3.select('svg').append('g');
        vAxis(vGuide);
        vGuide.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        vGuide.selectAll('path')
            .style({ fill: 'none', stroke: '#000' });
        vGuide.selectAll('line')
            .style({ stroke: '#000' });
        vGuide.selectAll('text')
            .attr('font-size', '.8em');
        var hGuide = d3.select('svg').append('g');
        hAxis(hGuide);
        hGuide.attr('transform', 'translate(' + margin.left + ',' + (height + margin.top) + ')');
        hGuide.selectAll('path')
            .style({ fill: 'none', stroke: '#000' });
        hGuide.selectAll('line')
            .style({ stroke: '#000' });
        hGuide.selectAll('text')
            .attr('transform', 'translate(12,5) rotate(55)')
            .attr('font-size', '12px')
            .style('text-anchor', 'start')
            .text(function (d) {
            return mydata[d].company;
        });
        //Label on left of Y axis
        d3.select('svg').append('text')
            .text('No. of Tasks')
            .style('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .attr('transform', 'translate(12,' + ((height + margin.top + margin.bottom) * .45) + ') rotate(-90)')
            .attr('font-size', '12px').attr('letter-spacing', "4");
        //chart animation
        bars.transition()
            .attr('height', function (d) {
            return yScale(d.count);
        })
            .attr('y', function (d) {
            return height - yScale(d.count);
        })
            .delay(function (d, i) {
            return i * 10;
        })
            .duration(800)
            .ease('cubic-out');
        // d3.select('#bchart').append('div').append('p')
        //   .html('* Data from 2013')
        //   .style('font-size', '.6em')
    };
    /*______________________________________________BAR CHART ENDS____________________________________________*/
    UserDashboardBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get logged user details
        // Params        : 
        // Returns       : user details
        // Author        : Rinsha
        // Date          : 16-1-2018
        // Last Modified : 16-1-2018, Rinsha
        // Desc          :
        // this.adminService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info == null || info == ''){
        //     this.routes.navigate(['/admin-login']); 
        //   }
        //   if(info.role == "user"){
        //     if(info.delete_status == true || info.block_status == true){
        //       this.routes.navigate(['/404']); 
        //     }
        //     this.routes.navigate(['/survey', info.surveyId]); 
        //   }
        //   if(info.role == "company"){
        //     if(info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified"){
        //       this.routes.navigate(['/clogin']); 
        //     }
        //     if(info.cmp_status == "Expired"){
        //       this.routes.navigate(['/expired']);
        //     }
        //     if(info.is_profile_completed == false){
        //       this.routes.navigate(['/additnInfo', info._id]);
        //     }
        //     this.routes.navigate(['/dashboard']);
        //   }
        // });
        // ---------------------------------End-------------------------------------------
        this.refresh();
        this.socket.on('new survey created', function (data) {
            _this.refresh();
        });
        // this.initSvg();
        // this.initAxis();
        // this.drawAxis();
        // this.drawBars();
    };
    UserDashboardBarComponent.prototype.initSvg = function () {
        // this.svg = d3.select("svg");
        // this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
        // this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
        // this.g = this.svg.append("g")
        //                  .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    UserDashboardBarComponent.prototype.initAxis = function () {
        // this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        // this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        // this.x.domain(this.barchart.map((d) => d.company));
        // this.y.domain([0, d3Array.max(this.barchart, (d) => d.count)]);
    };
    UserDashboardBarComponent.prototype.drawAxis = function () {
        // this.g.append("g")
        //       .attr("class", "axis axis--x")
        //       .attr("transform", "translate(0," + this.height + ")")
        //       .call(d3Axis.axisBottom(this.x));
        // this.g.append("g")
        //       .attr("class", "axis axis--y")
        //       .call(d3Axis.axisLeft(this.y))
        //       .append("text")
        //       .attr("class", "axis-title")
        //       .attr("transform", "rotate(-90)")
        //       .attr("y", 6)
        //       .attr("dy", "0.71em")
        //       .attr("text-anchor", "end")
        //       .text("count");
    };
    UserDashboardBarComponent.prototype.drawBars = function () {
        // this.g.selectAll(".bar")
        //       .data(this.barchart)
        //       .enter().append("rect")
        //       .attr("class", "bar")
        //       .attr("x", (d) => this.x(d.company) )
        //       .attr("y", (d) => this.y(d.count) )
        //       .attr("width", this.x.bandwidth())
        //       .attr("height", (d) => this.height - this.y(d.count) );
    };
    UserDashboardBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-dashboard-bar',
            template: __webpack_require__("../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-dashboard-bar/user-dashboard-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */]])
    ], UserDashboardBarComponent);
    return UserDashboardBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".graph-ul li{\r\n    float :left;\r\n    padding: 10px 2px;\r\n    border: 1px solid #ddd;\r\n    margin-top: 10px;\r\n    width: 300px;\r\n    display: table;\r\n    overflow:hidden;\r\n    padding-top: 0px;\r\n   \r\n}\r\n.graph-ul li .divModule{\r\n    background:#ccc;\r\n    padding: 20px 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.graph-ul{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow-x: scroll;\r\n    max-width:1170px;\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n.bg-g{background:#17a88f;color:#fff; padding: 10px;}\r\n.bg-hash{background:#E9E9E9;padding: 10px;}\r\n.bg-hash select{background:none;border:none;width:100%;}\r\n.total{font-weight:700;padding-top: 20px; line-height: 36px;}\r\n.sales{margin-bottom: 25px;border:none;    box-shadow: 4px 7px 31px #e8e8e8;}\r\n.label-bg{background:#ccc;padding:20px;position:relative;margin-bottom: 15px;}\r\n.label-bg .number{width:50px;height:50px;border-radius:50%;background:#fff;left:0;right:0;position:absolute;z-index:10;margin:0 auto;text-align:center;    top: -4px;\r\n    box-shadow: 10px 4px 18px #b1b1b1;\r\n    border: 1px solid #b5b3b3;    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #05b8cc;\r\n    padding-top: 15px;}\r\n\r\n    .graph-ul-hour li .divModule{\r\n        background:#ccc;\r\n        padding: 20px 5px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .graph-ul-hour{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        overflow-x: scroll;\r\n        max-width:1170px;\r\n        float: none;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .firstColumn{\r\n        background: #e4e4e4;\r\n        padding:0 40px;\r\n    }\r\n\r\n    .firstRow{\r\n        \r\n        font-weight:bold;\r\n        font-weight: bold;\r\n        min-height: 135px;\r\n        border-bottom: 1px solid #ccc;\r\n        text-transform:uppercase;\r\n        padding-top: 35%;\r\n    }\r\n    .secondRow{\r\n       \r\n        font-weight:bold;\r\n        min-height: 330px;\r\n        border-bottom: 1px solid #ccc;\r\n        text-transform:uppercase;\r\n        padding-top: 64%;\r\n    }\r\n    .ThirdRow{\r\n        \r\n        font-weight:bold;\r\n        min-height: 224px;\r\n        text-align:uppercase;\r\n        padding-top: 43%;\r\n    }\r\n    .prjtitle1{\r\n        background: #237cbe;\r\n        padding: 10px;\r\n        color:#fff;\r\n    }\r\n    .prjtitle2{\r\n       \r\n        padding: 10px;\r\n    }\r\n    .hash{    background: #f3f3f3;}\r\n    .datelabel{font-weight:bold;padding-bottom: 10px;}\r\n    .user-dashboard h1{text-align:center;}\r\n    .mr-top{margin-top: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <user-sidebar></user-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <user-topbar></user-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                    <h1></h1>\n                    <div class=\"row\">\n                        <div class=\"col-md-5 col-sm-5 col-xs-12 gutter\">\n\n                            <div class=\"sales\">\n                         \n                                    <user-dashboard-bar></user-dashboard-bar> \n                        \n                            </div>\n                        </div>\n                        <div class=\"col-md-7  col-xs-12 gutter\">\n\n                            <div class=\"sales\">\n                         \n                                <user-task-vs-status></user-task-vs-status>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                \n                            <user-task-vs-status></user-task-vs-status>\n                            </div>\n                    </div> -->\n\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                <h1>Percentage of Projects</h1>\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-md-push-1\">\n                                        <div class=\"col-md-3 bg-g\">*Select Project</div>\n                                        <div class=\"col-md-3 bg-hash\">\n                                        <select>\n                                            <option>Taskit</option>\n                                            <option>Survey</option>\n                                        </select>\n                                        </div> \n                                        <div class=\"col-md-3\">\n                                            <span class=\"total\">Total 7 Milestone</span>\n                                        </div>\n                                    </div> \n                                </div>\n                                <ul class=\"graph-ul\">\n                                    <li >\n                                        <div class=\"divModule\" >Module-1</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-1-progress\"></div>\n                                            <user-progress-graph [containerId]=\"'module-1-progress'\" [progper]=\"92\"></user-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">10</div>\n                                            </div>\n                                            <div id=\"module-1-status\"></div>\n                                            <user-status-graph [containerId]=\"'module-1-status'\"></user-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\">Module-2</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-2-progress\"></div>\n                                            <user-progress-graph [containerId]=\"'module-2-progress'\" [progper]=\"60\"></user-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">7</div>\n                                            </div>\n                                            <div id=\"module-2-status\"></div>\n                                            <user-status-graph [containerId]=\"'module-2-status'\"></user-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\" >Module-3</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-3-progress\"></div>\n                                            <user-progress-graph [containerId]=\"'module-3-progress'\" [progper]=\"55\"></user-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">9</div>\n                                            </div>\n                                            <div id=\"module-3-status\"></div>\n                                            <user-status-graph [containerId]=\"'module-3-status'\"></user-status-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div class=\"divModule\" >Module-4</div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <div id=\"module-4-progress\"></div>\n                                            <user-progress-graph [containerId]=\"'module-4-progress'\" [progper]=\"55\"></user-progress-graph>\n                                            <div class=\"clearfix\"></div>\n                                            <div class=\"col-md-12 label-bg\">\n                                                <div class=\"number\">9</div>\n                                            </div>\n                                            <div id=\"module-4-status\"></div>\n                                            <user-status-graph [containerId]=\"'module-4-status'\"></user-status-graph>\n                                        </div>\n                                    </li>\n                                   \n                                   \n                                   \n                                </ul>\n                            </div>\n                           \n                        </div>   \n\n\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                    <h1>Project Vs Status</h1>\n\n                                    <ul class=\"graph-ul-hour\">\n                                            <li>\n                                                <div class=\"firstRow firstColumn\">PROJECTS</div>\n                                                <div class=\"secondRow firstColumn\">Progress</div>\n                                                <div class=\"ThirdRow firstColumn\">Planned <br>vs<br> Actual Hours</div>\n                                            </li>\n                                            <li >\n                                                <div class=\"prjtitle1\">Taskit</div>\n                                                <div class=\"col-md-8 mr-top\">\n                                                <div class=\"datelabel\">Start <span class=\"pull-right\">24-03-2018</span></div>\n                                                <div class=\"datelabel\">End <span class=\"pull-right\">29-03-2018</span></div>\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                                <!-- <div style=\"clear: both;\"></div> -->\n                                                <hr>\n                                                <div id=\"projct-1-progress\"></div>\n                                                <user-progress-graph [containerId]=\"'projct-1-progress'\" [progper]=\"55\"></user-progress-graph>\n                                                <label>0/36 In Progress</label>\n                                                <hr>\n                                                <div id=\"projct-1-bar\"></div>\n                                                <user-bar-graph [containerId]=\"'projct-1-bar'\" [actual]=\"5\" [planning]=\"8\"></user-bar-graph>\n                                            </li>\n                                            <li class=\"hash\">\n                                                <div class=\"prjtitle2 bg-g\">Taskit</div>\n                                                <div class=\"col-md-8 mr-top\">\n                                                        <div class=\"datelabel\">Start <span class=\"pull-right\">24-03-2018</span></div>\n                                                        <div class=\"datelabel\">End <span class=\"pull-right\">29-03-2018</span></div>\n                                                 </div>\n                                                 <div class=\"clearfix\"></div>\n                                                <hr>\n                                                <div id=\"projct-2-progress\"></div>\n                                                <user-progress-graph [containerId]=\"'projct-2-progress'\" [progper]=\"45\"></user-progress-graph>\n                                                <label>2/23 In Progress</label>\n                                                <hr>\n                                                <div id=\"projct-2-bar\"></div>\n                                                <user-bar-graph [containerId]=\"'projct-2-bar'\" [actual]=\"10\" [planning]=\"4\"></user-bar-graph>\n                                            </li>\n                                    </ul>       \n                            </div>\n            </div>   \n            \n            \n \n                        \n                </div>\n                \n            </div>\n                <!-- footer-->\n                <!-- <user-footer></user-footer> -->\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
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

var UserDashboardComponent = (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-dashboard',
            template: __webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-footer/user-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-footer/user-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center bg-lightgray\">\n    \n                            <div class=\"copyrights\" style=\"margin-top:25px;\">\n                                <p>Taskit © 2018, All Rights Reserved\n                                    <br>\n                                    \n                                \n                            </div>\n                    </footer> "

/***/ }),

/***/ "../../../../../src/app/components/user-footer/user-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFooterComponent; });
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

var UserFooterComponent = (function () {
    function UserFooterComponent() {
    }
    UserFooterComponent.prototype.ngOnInit = function () {
    };
    UserFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-footer',
            template: __webpack_require__("../../../../../src/app/components/user-footer/user-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-footer/user-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFooterComponent);
    return UserFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-leave-request/user-leave-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar-menu{background:#fff;}\r\n.side-bar-menu li{    border-bottom: 1px solid #e4e4e4;}\r\n.side-bar-menu li a{color:#111;text-align:left;padding: 20px 23px;}\r\n.side-bar-menu li a:hover{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:focus{background-color: #fe6a07;color:#fff;}\r\n.side-bar-menu li>a:active{background-color: #fe6a07;color:#fff;}\r\n\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}\r\n\r\n\r\n.example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\n.modal-dialog{max-width:900px !important;width:100%;}\r\n.user{width:280px;height:280px;border-radius:50%;margin:0 auto;float:none;overflow:hidden; background: #d45d0e;margin-top: 20%;\r\n    margin-bottom: 20%;text-align:center;}\r\n    .user:hover{opacity:0.6;cursor:pointer;}\r\n.user img{width:120%;max-width: 287px;min-width: 287px;}\r\n\r\n.brdr-left{    width: 1px;\r\n    height: 155px;\r\n    float: left;\r\n    margin-top: 36%;\r\n    display: inherit;\r\n    background: #efecec;\r\n    margin-right: 21px;}\r\n  .user .fa-camera{color:#fff;font-size:50px;text-align:center;background: #d45d0e;padding-top:204%;}\r\n.disply{width:auto; display: -webkit-inline-box;}\r\nlabel{font-weight: 500;}\r\n.paddtop{padding-top:17px;}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-leave-request/user-leave-request.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n    \n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n               <!-- sidebar-->\n             \n               <user-sidebar></user-sidebar> \n               <!-- end sidebar-->\n          </div>\n          \n          <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n              <!-- topbar-->\n              <user-topbar></user-topbar> \n              \n                  <!-- end topbar-->\n              \n              \n              <div class=\"user-dashboard\">\n                      <h2>Leave Request</h2>\n                      <ul class=\"breadcrumb\">\n                        <li><a href=\"#\">Leave Request</a></li>\n                        \n                        \n                        <li>Leave Request List </li>\n                      </ul>\n                  <div class=\"row\">\n                    <!-----------------------------------------------------------------table-------------------------------------->\n                          \n\n<!-- <p>You selected: {{selected}} </p> -->\n\n<div class=\"col-md-12\">\n      <div class=\"row\">\n      <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div> -->\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div>\n           \n        </div>\n      </div>\n  \n  \n  <!--    \n            <div class=\"example-header\" >\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                </mat-form-field>\n            </div> -->\n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"slno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n    </ng-container>\n      <!-- Name Column -->\n      <!-- <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> NAME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.tbl_user_profile.f_name}} </mat-cell>\n      </ng-container> -->\n              <!-- Name Column -->\n      <ng-container matColumnDef=\"leave_start_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Leave Start Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.start_date}} </mat-cell>\n      </ng-container>\n            <!-- Name Column -->\n      <ng-container matColumnDef=\"start_available_hrs\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Start Available hrs </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.start_available_hrs}} </mat-cell>\n      </ng-container>  \n              <!-- Name Column -->\n      <ng-container matColumnDef=\"leave_end_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> leave end date </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.end_date}} </mat-cell>\n      </ng-container>\n               <!-- Name Column -->\n      <ng-container matColumnDef=\"end_available_hrs\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> end available hrs </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.end_available_hrs}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> status </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.request_status}} </mat-cell>\n      </ng-container>\n     \n  \n   \n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n                <button *ngIf=\"row.request_status=='Accepted' || row.request_status=='Rejected'\" mat-menu-item disabled>\n                    <i class=\"material-icons\">error</i>\n                  <span>No Action</span>\n                </button>\n              <button *ngIf=\"row.request_status=='Pending'\" (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\" mat-menu-item >\n                  <i class=\"material-icons\">delete</i>\n                <span>Delete</span>\n              </button>\n              <button *ngIf=\"row.request_status=='Pending'\" (click)=\"getEditId(row.id)\" data-toggle=\"modal\" data-target=\"#editModal\" mat-menu-item >\n                      <i class=\"material-icons\">mode_edit</i>\n                    <span>Edit</span>\n                  </button>\n             \n          \n            </mat-menu>\n         \n        </mat-cell>\n    </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n        <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  <div class=\"add-button\">\n      <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" (click)=\"addNewUserleave()\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n    </div>\n  <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n  \n  <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n  \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Delete </h4>\n          </div>\n          <!-- <div class=\"modal-header\"> -->\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n          <!-- </div> -->\n          <div class=\"modal-body delete-popup\">\n            <i class=\"fa fa-exclamation\"></i>\n  \n  \n            <h4 class=\"textalign\">Are you sure?</h4>\n  \n          </div>\n  \n          <div class=\"modal-footer\">\n            <button type=\"button\" (click)=\"deleteuserleave(id)\" class=\"btn round-button\" data-dismiss=\"modal\">Delete</button>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n    <!-----------------------------------------------------------------delete modal-------------------------------------->\n     <!-----------------------------------------------------------------add modal-------------------------------------->\n     <div id=\"addModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n            <h4 class=\"modal-title\">Add  Leave</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"addUserleave(newUserleave);\" novalidate>\n            <div class=\"col-md-11\">\n           \n                      \n                <div class=\"form-group\" >\n                    \n                      <div class=\"col-md-3 paddtop\">\n                        <label>Leave Start Date</label>\n                      </div>\n                      <div class=\"col-md-3\">\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker1\" name =\"startdate\" [(ngModel)]=\"newUserleave.startdate\" placeholder=\"Choose a date\">\n                              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                              <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                      </div>\n                      <div class=\"col-md-2 paddtop\">\n                          <label>Available hrs(HH:MM)</label>\n                       </div>\n                       <div class=\"col-md-3\">\n                         <div class=\"row\">\n                            <ngb-timepicker  name=\"startavlhr\" [(ngModel)]=\"newUserleave.startavlhr\"  required></ngb-timepicker>\n                           \n                              <!-- <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.startavlhr.hour}}</div>\n                              <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n                                <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n                                <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n                                <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n                              </div> -->\n                           \n                          </div>\n                        \n                       </div>\n                       <div class=\"clearfix\"></div>\n                       <div class=\"col-md-12\">\n                          <hr>\n\n                      </div>\n\n                       <div class=\"col-md-3 paddtop\">\n                          <label>Leave End Date</label>\n                        </div>\n                        <div class=\"col-md-3\">\n                          \n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput [matDatepickerFilter]=\"myFilter\"  [matDatepicker]=\"picker2\" name =\"enddate\" [(ngModel)]=\"newUserleave.enddate\" placeholder=\"Choose a date\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker2></mat-datepicker>\n                              </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 paddtop\">\n                            <label>Available hrs(HH:MM)</label>\n                         </div>\n                         <div class=\"col-md-3\">\n                            <div class=\"row\">\n                                <ngb-timepicker  name=\"endavlhr\" [(ngModel)]=\"newUserleave.endavlhr\"  required></ngb-timepicker>\n                               \n                            <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                            <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                              <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                              <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                              <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                            </div> -->\n                           \n                          </div>\n                        </div>\n                        \n                         <div class=\"clearfix\"></div>\n                        <div class=\"col-md-12\">\n                            <hr>\n\n                        </div>\n                         <!-- <div class=\"col-md-12\">\n                            <div class=\"col-md-3 paddtop\">\n                                <label>Employee</label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <mat-form-field>\n                                    \n                                    <mat-select placeholder=\"Select employee \"  name=\"emp_id\"  [(ngModel)]=\"newEmpleave.emp_id\" required>\n                                    \n                                        <mat-option  *ngFor=\"let item of companyemployee\"  [value]=\"item.id\" >{{item.f_name}}</mat-option>\n                                                                    \n                                     </mat-select>\n                                </mat-form-field>   \n                             </div>\n                             \n                         </div> -->\n                         \n                         <!-- <div class=\"col-md-12\">\n                            <div class=\"col-md-3 paddtop\">\n                                <label>Leave Hour</label> \n                             </div>\n                             <div class=\"col-md-3 paddtop\">\n                                <label>10</label> \n                             </div>\n                             \n                         </div> -->\n                         \n                        \n                  </div>\n                  \n              <br>\n    \n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n\n                </div>\n                <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                  <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                    xml:space=\"preserve\">\n                    <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                      />\n                    </path>\n                  </svg>\n                </div> -->\n\n              </div>\n\n           \n            </div>\n           \n          \n          </form>\n          </div>\n          <div class=\"modal-footer\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n     <!----------------------------------------addModal------------------------------>\n       <!-- --------------------------------------------- edit modal ----------------------------------------------------------------- -->\n  \n\n    <div id=\"editModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\"> \n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n            <h4 class=\"modal-title\">Update Leave</h4>\n          </div>\n          <div class=\"modal-body\">\n              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"updateUserleave(updateleave);\" novalidate>\n              \n                      <div class=\"col-md-11\">\n                     \n                                \n                          <div class=\"form-group\" >\n                              \n                                <div class=\"col-md-3 paddtop\">\n                                  <label>Leave Start Date</label>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker3\" name =\"startdate\" [(ngModel)]=\"updateleave.start_date\" placeholder=\"Choose a date\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker3></mat-datepicker>\n                                      </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 paddtop\">\n                                    <label>Available hrs(HH:MM)</label>\n                                 </div>\n                                 <div class=\"col-md-3\">\n                                    <div class=\"row\">\n                                        <ngb-timepicker  name=\"startavlhr\" [(ngModel)]=\"updateleave.startavlhr\"  required></ngb-timepicker>\n                                       \n                                    <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                                    <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                                      <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                                      <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                                      <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                                    </div> -->\n                                   \n                                  </div>\n                                </div>\n                                \n                                 <div class=\"clearfix\"></div>\n                                <div class=\"col-md-12\">\n                                    <hr>\n      \n                                </div>\n        \n        \n                                 <div class=\"col-md-3 paddtop\">\n                                    <label>Leave End Date</label>\n                                  </div>\n                                  <div class=\"col-md-3\">\n                                      <mat-form-field class=\"example-full-width\">\n                                          <input matInput [matDatepickerFilter]=\"myFilter\"  [matDatepicker]=\"picker4\" name =\"enddate\" [(ngModel)]=\"updateleave.end_date\" placeholder=\"Choose a date\">\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                                          <mat-datepicker #picker4></mat-datepicker>\n                                        </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-2 paddtop\">\n                                      <label>Available hrs(HH:MM)</label>\n                                   </div>\n                                   <div class=\"col-md-3\">\n                                      <div class=\"row\">\n                                          <ngb-timepicker  name=\"endavlhr\" [(ngModel)]=\"updateleave.endavlhr\"  required></ngb-timepicker>\n                                         \n                                      <!-- <div *ngIf=\"ctrl1.valid\" class=\"small form-text text-success\">Great choice{{newEmpleave.endavlhr.hour}}</div>\n                                      <div class=\"small form-text text-danger\" *ngIf=\"!ctrl1.valid\">\n                                        <div *ngIf=\"ctrl1.errors['required']\">Select some time during lunchtime</div>\n                                        <div *ngIf=\"ctrl1.errors['tooLate']\">Oh no, it's way too late</div>\n                                        <div *ngIf=\"ctrl1.errors['tooEarly']\">It's a bit too early</div>\n                                      </div> -->\n                                     \n                                    </div>\n                                  </div>\n                                  \n                                   <div class=\"clearfix\"></div>\n                                  <div class=\"col-md-12\">\n                                      <hr>\n        \n                                  </div>\n        \n                                   <!-- <div class=\"col-md-12\">\n                                      <div class=\"col-md-3 paddtop\">\n                                          <label>Employee</label>\n                                       </div>\n                                       <div class=\"col-md-3\">\n                                          <mat-form-field>\n                                              \n                                              <mat-select placeholder=\"Select employee \"  name=\"emp_id\"  [(ngModel)]=\"updateleave.user_profile_id\" required>\n                                              \n                                                  <mat-option  *ngFor=\"let item of companyemployee\"  [value]=\"item.id\" >{{item.f_name}}</mat-option>\n                                                                              \n                                               </mat-select>\n                                          </mat-form-field>   \n                                       </div>\n                                       \n                                   </div> -->\n                                   <!-- <div class=\"col-md-12\">\n                                      <div class=\"col-md-3 paddtop\">\n                                          <label>Leave Hour</label> \n                                       </div>\n                                       <div class=\"col-md-3 paddtop\">\n                                          <label>10</label> \n                                       </div>\n                                       \n                                   </div> -->\n                                   \n                                  \n                            </div>\n                            \n                        <br>\n              \n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                            <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n          \n                          </div>\n                          <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                            <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                              x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                              xml:space=\"preserve\">\n                              <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                                <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                                />\n                              </path>\n                            </svg>\n                          </div> -->\n          \n                        </div>\n          \n                     \n                      </div>\n                     \n                    \n                 \n          </form>\n          </div>\n          <div class=\"modal-footer\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n  <!-----------------------------------------------------------------edit modal-------------------------------------->\n      \n     <!-----------------------------------------------------------------end table-------------------------------------->\n                  </div>\n              </div>\n              \n          </div>\n              <!-- footer-->\n              <user-footer></user-footer>\n     <!-- end footer-->\n      </div>\n       </div>\n      <!-- Modal -->\n   \n   </body>"

/***/ }),

/***/ "../../../../../src/app/components/user-leave-request/user-leave-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLeaveRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLeaveRequestComponent = (function () {
    // myFilter = (d: Date): boolean => {
    //   const day = d.getDay();
    //   // Prevent Saturday and Sunday from being selected.
    //   return day !== 0 && day !== 6;
    // }
    // ---------------------------------Start-------------------------------------------
    // Function      : project category master setting
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : All category
    function UserLeaveRequestComponent(userService, routes, snackBar) {
        this.userService = userService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'leave_start_date', 'start_available_hrs', 'leave_end_date', 'end_available_hrs', 'status', 'action'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
        this.updateleave = { start_date: '',
            id: '',
            startavlhr: '',
            end_date: '',
            endavlhr: '',
            // user_profile_id: '',
            leave_hrs: ''
        };
        this.newUserleave = { startdate: '',
            startavlhr: '',
            enddate: '',
            endavlhr: '',
            //  emp_id: '',
            leave_hr: ''
        };
        this.time = { hour: 13, minute: 30 };
    }
    UserLeaveRequestComponent.prototype.refresh = function () {
        var _this = this;
        // console.log("hj");
        this.showSpinner = true;
        //  console.log(this.selected);
        var company = [];
        this.userService.getSingleUserallleaves().subscribe(function (data) {
            console.log(data);
            // console.log(data[0].tbl_user_profile.f_name);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    UserLeaveRequestComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserLeaveRequestComponent.prototype.ngOnInit = function () {
        this.refresh();
        // this.userService.getAllcompanyemployee().subscribe(res => {
        //   this.companyemployee = res;
        //  });
    };
    UserLeaveRequestComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //tme validation
    // ctrl = new FormControl('', (control: FormControl) => {
    //   const value = control.value;
    //   if (!value) {
    //     return null;
    //   }
    //   if (value.hour < 12) {
    //     return {tooEarly: true};
    //   }
    //   if (value.hour > 13) {
    //     return {tooLate: true};
    //   }
    //   return null;
    // });
    // ctrl1 = new FormControl('', (control: FormControl) => {
    //   const value1 = control.value;
    //   if (!value1) {
    //     return null;
    //   }
    //   if (value1.hour < 12) {
    //     return {tooEarly: true};
    //   }
    //   if (value1.hour > 13) {
    //     return {tooLate: true};
    //   }
    //   // console.log(value1.hour);
    //   return null;
    // });
    //add empleave
    UserLeaveRequestComponent.prototype.addNewUserleave = function () {
        //this.showSpinner =false;
        //this.showSpinnerDelete =false;
        this.newUserleave = { startdate: '',
            startavlhr: '',
            enddate: '',
            endavlhr: '',
            // emp_id: '',
            leave_hr: ''
        };
    };
    UserLeaveRequestComponent.prototype.getId = function (id) {
        // this.showSpinner =false
        // this.showSpinnerDelete =false
        this.id = id;
        //  console.log(this.id)
    };
    //delete Employee leave
    UserLeaveRequestComponent.prototype.deleteuserleave = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = true;
        this.userService.deleteuserleave(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
        });
    };
    UserLeaveRequestComponent.prototype.addUserleave = function (newUserleave) {
        var _this = this;
        console.log(newUserleave);
        this.showSpinner = true;
        // console.log(newCategory);
        this.userService.addUserleave(newUserleave).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn.nativeElement.click();
                _this.refresh();
            }
        });
    };
    UserLeaveRequestComponent.prototype.getEditId = function (id) {
        var _this = this;
        console.log(id);
        this.showSpinner = false;
        this.userService.getSingleuserleave(id).subscribe(function (data) {
            // console.log( data);
            _this.updateleave = data;
            console.log(_this.updateleave);
            var start = data.start_available_hrs.split(':');
            var end = data.end_available_hrs.split(':');
            //  console.log(start[0]);
            console.log(data.start_available_hrs);
            data.startavlhr = { hour: start[0], minute: start[1], second: start[2] };
            data.endavlhr = { hour: end[0], minute: end[1], second: end[2] };
            //this.id = data.id;
            console.log(_this.updateleave);
            if (data.success == false) {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.refresh();
            }
            else {
            }
        });
    };
    UserLeaveRequestComponent.prototype.updateUserleave = function (updateleave) {
        var _this = this;
        console.log(updateleave);
        this.showSpinner = true;
        this.userService.updateUserleave(this.updateleave).subscribe(function (data) {
            if (!data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
            }
            else if (data.success) {
                _this.showSpinner = false;
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
                _this.closeBtn1.nativeElement.click();
                _this.refresh();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UserLeaveRequestComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UserLeaveRequestComponent.prototype, "closeBtn1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], UserLeaveRequestComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], UserLeaveRequestComponent.prototype, "sort", void 0);
    UserLeaveRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-leave-request',
            template: __webpack_require__("../../../../../src/app/components/user-leave-request/user-leave-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-leave-request/user-leave-request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], UserLeaveRequestComponent);
    return UserLeaveRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <user-sidebar></user-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <user-topbar></user-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                        <h2>My Request</h2>\n                        <ul class=\"breadcrumb\">\n                          <li><a href=\"#\">My Request</a></li>\n                          \n                          \n                          <li>My New Task Request list </li>\n                        </ul>\n                    <div class=\"row\">\n     <!-----------------------------------------------------------------table-------------------------------------->\n   \n  \n   \n  \n  <div class=\"col-md-12\">\n      <div class=\"row\">\n      <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n          <div class=\"\"  >\n              <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n          <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n            <animateTransform attributeType=\"xml\"\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 25 25\"\n              to=\"360 25 25\"\n              dur=\"0.6s\"\n              repeatCount=\"indefinite\"/>\n            </path>\n          </svg>\n      </div>\n      </div> -->\n      \n  \n      <div class=\"col-md-12 optionz\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                    </mat-form-field>\n                  </div>\n            </div>\n   \n        </div>\n      </div>\n  \n  \n  \n         \n      <div class=\"example-container mat-elevation-z8 \">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n   <!-- Name Column -->\n   <ng-container matColumnDef=\"slno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n    </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"taskname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>TASK NAME </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">  {{row.task_name}}</mat-cell>\n      </ng-container>\n  \n     <!-- Progress Column -->\n     <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> DATE </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.createdAt | date:'EEE, d MMM,y'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"time\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> REQUESTED TIME </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.planned_hours+row.buffer_hours}} Hr</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.request_status}}  </mat-cell>\n      </ng-container>\n  \n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"col-md-15 \">\n        <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n    </div>\n    <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n        </div>\n      </div>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  \n  \n  </div>\n  </div>\n  \n  \n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <user-footer></user-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

/***/ }),

/***/ "../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMyRequestMytaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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




var UserMyRequestMytaskComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      :  MY REQUEST
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : my request status
    function UserMyRequestMytaskComponent(userService, routes, snackBar) {
        this.userService = userService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'taskname', 'date', 'time', 'status'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
    }
    UserMyRequestMytaskComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        this.userService.getAllMyNewTaskrequest().subscribe(function (data) {
            console.log(data);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    UserMyRequestMytaskComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserMyRequestMytaskComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    UserMyRequestMytaskComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], UserMyRequestMytaskComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], UserMyRequestMytaskComponent.prototype, "sort", void 0);
    UserMyRequestMytaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-my-request-mytask',
            template: __webpack_require__("../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-my-request-mytask/user-my-request-mytask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], UserMyRequestMytaskComponent);
    return UserMyRequestMytaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-my-request/user-my-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    /* width: 5%; */\r\n    /* float: right;\r\n    clear: left; */\r\n    /* padding-bottom: 25px; */\r\n    margin-top: 10px;\r\n   \r\n  }\r\n  /* h4{\r\n    text-align: center;\r\n} */\r\n.noItemFound{\r\n  text-align: center;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid lightgray;\r\n\r\n}\r\n.back-color{\r\n  color: #757575;\r\n  background-color: #ffffff;\r\n}\r\nsvg path,\r\nsvg rect{\r\n  fill: #EC0C0C;\r\n}\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\n.optionz{background:#fff;}\r\n.mat-select-panel{margin-top:39px;}\r\n\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  /* font-size: 14px; */\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.example-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.modal{top:0;}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.add-project{\r\n  float: right;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font-size: 28px;\r\n  line-height: 42px;\r\n  box-shadow: 4px 7px 31px #ffbb8e;\r\n}\r\n.modal-header {\r\n  padding: 10px 30px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fe6a07;\r\n}\r\n.modal-content{\r\nbox-shadow:none;\r\nborder-radius: 9px;\r\noverflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\ndisplay: block;\r\nposition: relative;\r\n-ms-flex: auto;\r\n    flex: auto;\r\nmin-width: 0;\r\nwidth: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\npadding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\nfont-family: Roboto, Arial, sans-serif;\r\nmargin: 0;\r\n}\r\n\r\n.basic-container {\r\npadding: 5px;\r\n}\r\n\r\n.version-info {\r\nfont-size: 8pt;\r\nfloat: right;\r\n}\r\n.round-button{\r\nfloat:none !important;\r\n}\r\n.center-bt {\r\n  margin: 20px auto 10px auto;\r\n  float: none;\r\n}\r\n.round-button {\r\n  border-radius: 20px;\r\n  margin: 0;\r\n  float: left;\r\n  background: #f37600;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  transition: background 2s;\r\n  margin-bottom: 15px;\r\n}\r\n.round-button:hover {\r\n  background: #ffaa05;\r\n  color: #fff;}\r\n  .fa-exclamation {\r\n    text-align: center;\r\n    font-size: 36px !important;\r\n    color: #d9534f;\r\n    border-radius: 50%;\r\n    border: 3px solid;\r\n    margin-top: 23px;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-top: 10px;\r\n}\r\nul.breadcrumb {\r\n    padding: 10px 0;\r\n    list-style: none;\r\n\r\n    text-align: left;\r\n    color: #d68956;\r\n}\r\nul.breadcrumb li {\r\n    display: inline;\r\n    font-size: 15px;\r\n}\r\nul.breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: \"/\\A0\";\r\n}\r\nul.breadcrumb li a {\r\n    color: #bbbbbb;\r\n    text-decoration: none;\r\n}\r\nul.breadcrumb li a:hover {\r\n    color: #d68956;\r\n    text-decoration: none;\r\n\r\n}\r\n.breadcrumb{    background-color: #f6f7fa;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-my-request/user-my-request.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n    \n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n               <!-- sidebar-->\n             \n               <user-sidebar></user-sidebar> \n               <!-- end sidebar-->\n          </div>\n          \n          <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n              <!-- topbar-->\n              <user-topbar></user-topbar> \n              \n                  <!-- end topbar-->\n              \n              \n              <div class=\"user-dashboard\">\n                      <h2>My Request</h2>\n                      <ul class=\"breadcrumb\">\n                        <li><a href=\"#\">My Request</a></li>\n                        \n                        \n                        <li>Time extension Request list </li>\n                      </ul>\n                  <div class=\"row\">\n                    <!-----------------------------------------------------------------table-------------------------------------->\n \n\n \n\n<div class=\"col-md-12\">\n    <div class=\"row\">\n    <!-- <div class=\"col-md-12 preloader2\" *ngIf=\"showSpinner\" >\n        <div class=\"\"  >\n            <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n        <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n          <animateTransform attributeType=\"xml\"\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 25 25\"\n            to=\"360 25 25\"\n            dur=\"0.6s\"\n            repeatCount=\"indefinite\"/>\n          </path>\n        </svg>\n    </div>\n    </div> -->\n    \n\n    <div class=\"col-md-12 optionz\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n              <div class=\"example-header\">\n                  <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                  </mat-form-field>\n                </div>\n          </div>\n \n      </div>\n    </div>\n\n\n\n       \n    <div class=\"example-container mat-elevation-z8 \">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n <!-- Name Column -->\n <ng-container matColumnDef=\"slno\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n    <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n  </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"taskname\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>TASK NAME </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">  {{row.tbl_project_task.task_name}}</mat-cell>\n    </ng-container>\n\n   <!-- Progress Column -->\n   <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> DATE </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\"> {{row.createdAt | date:'EEE, d MMM,y'}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"time\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> REQUESTED TIME </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">{{row.additional_hours}} Hr</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.req_status}}  </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n  <div class=\"col-md-15 \">\n      <!-- <div *ngIf=\"showSpinner\" class=\"deletespinner\">\n          <mat-spinner></mat-spinner>\n         </div> -->\n  </div>\n  <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n      <div class=\"col-md-4 col-md-offset-4\">\n          <mat-toolbar   class=\"back-color\">No item found!</mat-toolbar>\n      </div>\n    </div>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n\n\n</div>\n</div>\n\n\n                  </div>\n              </div>\n              \n          </div>\n              <!-- footer-->\n              <user-footer></user-footer>\n     <!-- end footer-->\n      </div>\n       </div>\n      <!-- Modal -->\n   </body>"

/***/ }),

/***/ "../../../../../src/app/components/user-my-request/user-my-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMyRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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




var UserMyRequestComponent = (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      :  MY REQUEST
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : my request status
    function UserMyRequestComponent(userService, routes, snackBar) {
        this.userService = userService;
        this.routes = routes;
        this.snackBar = snackBar;
        this.displayedColumns = ['slno', 'taskname', 'date', 'time', 'status'];
        this.notExist = false;
        this.all_value = false;
        this.showSpinner = false;
    }
    UserMyRequestComponent.prototype.refresh = function () {
        var _this = this;
        this.showSpinner = true;
        this.userService.getAllMyTimeextensionrequest().subscribe(function (data) {
            console.log(data);
            _this.loadToDataTable(data);
            _this.showSpinner = false;
        });
    };
    UserMyRequestComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](data);
        // console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserMyRequestComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    UserMyRequestComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], UserMyRequestComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], UserMyRequestComponent.prototype, "sort", void 0);
    UserMyRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-my-request',
            template: __webpack_require__("../../../../../src/app/components/user-my-request/user-my-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-my-request/user-my-request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], UserMyRequestComponent);
    return UserMyRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-progress-graph/user-progress-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);", ""]);

// module
exports.push([module.i, "body {\r\n  background: white;\r\n}\r\n\r\n* {\r\n  font-family: \"Open Sans\";\r\n}\r\n\r\n#slider {\r\n  width: 75%;\r\n  margin: 2em auto 1em;\r\n}\r\n\r\n.svg-container {\r\n  margin: 3em auto 0;\r\n  width: 250px;\r\n  /* height: 250px; */\r\n}\r\n\r\nsvg {\r\n  width: 100%;\r\n  height: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-progress-graph/user-progress-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/user-progress-graph/user-progress-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProgressGraphComponent; });
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

var UserProgressGraphComponent = (function () {
    function UserProgressGraphComponent() {
    }
    UserProgressGraphComponent.prototype.ngOnInit = function () {
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
    UserProgressGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-progress-graph',
            template: __webpack_require__("../../../../../src/app/components/user-progress-graph/user-progress-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-progress-graph/user-progress-graph.component.css")],
            inputs: ['containerId', 'progper']
        }),
        __metadata("design:paramtypes", [])
    ], UserProgressGraphComponent);
    return UserProgressGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-sidebar/user-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-sidebar/user-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"\"><img src=\"./assets/images/logo.jpg\" alt=\"\" class=\"\">\n   \n</a>\n</div>\n\n<nav class=\"navbar navbar-default\">\n\n<!-- Brand and toggle get grouped for better mobile display -->\n<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n \n</div>\n\n<!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"zx nav navbar-nav\">\n        <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"/user-dashboard\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\n       \n         <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a routerLink=\"/user-leave-request\"><i class=\"fa fa-bed\"></i> Leave Request</a></li>\n\n          <li class=\"dropdown\"><a routerLink=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i><span class=\"\">My Request</span></a>\n            \n              <ul class=\"dropdown-menu\" role=\"menu\" data-animations=\"fadeInDown fadeInRight fadeInUp fadeInLeft\">\n              \n                <li><a routerLink=\"/user-my-request\">Time Extension Requests</a></li>\n                <li><a routerLink=\"/user-my-request-mytask\">New Task Requests</a></li>\n              </ul>\n            \n          </li>      \n     \n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n             <a routerLink=\"/user-activity-log\"><i class=\"fa fa-list-alt\"></i> Activity Log</a></li>     \n       \n    </ul>\n \n \n</div><!-- /.navbar-collapse -->\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/user-sidebar/user-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSidebarComponent; });
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

var UserSidebarComponent = (function () {
    function UserSidebarComponent() {
    }
    UserSidebarComponent.prototype.ngOnInit = function () {
    };
    UserSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-sidebar',
            template: __webpack_require__("../../../../../src/app/components/user-sidebar/user-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-sidebar/user-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSidebarComponent);
    return UserSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-status-graph/user-status-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-status-graph/user-status-graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/user-status-graph/user-status-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatusGraphComponent; });
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

var UserStatusGraphComponent = (function () {
    function UserStatusGraphComponent() {
        this.containerId = '';
    }
    UserStatusGraphComponent.prototype.ngOnInit = function () {
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
    UserStatusGraphComponent.prototype.bakeDonut = function (d) {
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
    UserStatusGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-status-graph',
            template: __webpack_require__("../../../../../src/app/components/user-status-graph/user-status-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-status-graph/user-status-graph.component.css")],
            inputs: ['containerId']
        }),
        __metadata("design:paramtypes", [])
    ], UserStatusGraphComponent);
    return UserStatusGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  body {\r\n    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  .bg-g{background:#17a88f;color:#fff; padding: 10px;margin-bottom:10px;}\r\n  .bg-hash{background:#E9E9E9;padding: 10px;margin-bottom:10px;}\r\n  .bg-hash select{background:none;border:none;width:100%;}\r\n  .total{font-weight:700;padding-top: 20px; line-height: 36px;}\r\n  .widget{margin-top:9%;}\r\n  .tasklabel{       background: #efefef;\r\n    padding: 25px 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin: 10px 0;\r\n    border: 1px solid #ccc;\r\n    font-weight: bold;\r\n    font-size : 12px;\r\n  }\r\n  .pie {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-filter: drop-shadow(0 2px 0px #333);\r\n            filter: drop-shadow(0 2px 0px #333);\r\n  }\r\n  \r\n  .data-path:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .data-text {\r\n    transition: transform .2s ease-in-out;\r\n    fill: #fff;\r\n  }\r\n  .data-text__value {\r\n    font-size: 7rem;\r\n    transform: translateY(-0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text__name {\r\n    font-size: 2rem;\r\n    transform: translateY(0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text--show {\r\n    transform: translateY(0);\r\n    animation: fadeGraphTextIn 0.5s forwards;\r\n  }\r\n  .data-text:hover {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\nh1{text-align:center;}\r\n.sales{margin-bottom: 25px;}\r\n  .legend-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  @keyframes fadeGraphTextIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .sales{    margin-bottom: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Task Vs Status</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n          <div class=\"col-md-8 col-md-offset-2\">\n          <div class=\"col-md-6 bg-g\">*Select Project</div>\n          <div class=\"col-md-6 bg-hash\">\n            <select>\n              <option *ngFor=\"let prj of projects\" value=\"{{prj.id}}\">{{prj.project_name}}</option>\n            </select>\n          </div> \n          <br>\n          <br>\n          <!-- <div class=\"col-md-6 bg-g\">*Select Person</div>\n          <div class=\"col-md-6 bg-hash\">\n            <select>\n                <option *ngFor=\"let usr of users\" value=\"{{usr.id}}\">{{usr.f_name}} {{usr.l_name}}</option>\n            </select>\n          </div>  -->\n          <div class=\"clearfix\"></div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              START DATE\n              <br>\n              12/10/2017\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n                 END DATE\n                <br>\n                12/10/2017\n               </div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              NO OF TASKS\n              <br>\n              10\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n               TASK COMPLETED\n                <br>\n                10\n               </div>\n              </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"tasklabel\">\n              DUE THIS MONTH\n              <br>\n              10\n            </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"tasklabel\">\n                DUE THIS YEAR\n                <br>\n                10\n               </div>\n              </div>\n          </div> -->\n        </div>\n        </div>\n    \n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"widget\">\n               \n                <div id=\"taskstatus\" class=\"chart-container\">\n            \n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTaskVsStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserTaskVsStatusComponent = (function () {
    function UserTaskVsStatusComponent(userService) {
        this.userService = userService;
        this.projects = [];
        this.users = [];
    }
    UserTaskVsStatusComponent.prototype.ngOnInit = function () {
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
    UserTaskVsStatusComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.userService.getAllProject().subscribe(function (data) {
            console.log(data);
            _this.projects = data;
            // if(this.projects.length == 0){
            //   this.users = [];
            // }else{
            //   this.getUsers(this.projects[0].id);
            // }
        });
    };
    // getUsers(projId){
    //   this.companyService.getUsers(projId).subscribe(data=>{
    //     this.users = data;
    //   });
    // }
    UserTaskVsStatusComponent.prototype.bakeDonut = function (d) {
        var activeSegment;
        var data = d.sort(function (a, b) { return b['value'] - a['value']; }), viewWidth = 500, viewHeight = 300, svgWidth = viewHeight, svgHeight = viewHeight, thickness = 40, colorArray = data.map(function (k) { return k.color; }), el = d3.select('#taskstatus'), radius = Math.min(svgWidth, svgHeight) / 2, color = d3.scaleOrdinal()
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
                var dataTexts = d3.selectAll('#taskstatus .data-text')
                    .classed('data-text--show', false);
                var paths = d3.selectAll('#taskstatus .data-path')
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
    UserTaskVsStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-task-vs-status',
            template: __webpack_require__("../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-task-vs-status/user-task-vs-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UserTaskVsStatusComponent);
    return UserTaskVsStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <header>\n        \n        <div class=\"col-md-5 pull-right\">\n            <div class=\"header-rightside\">\n                <ul class=\"list-inline header-top pull-right\">\n                    <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\n                    \n                    <li class=\"dropdown drp2\">\n                        <a href=\"#\" class=\"icon-info dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                            <span class=\"label label-primary\">3</span>\n\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"head\">\n                                <a href=\"#\"><div class=\"navbar-content\">\n                                    <span>New Company Register</span>\n                                    <!-- <p class=\"text-muted\">\n                                        Project Name\n                                    </p>\n                                    <div class=\"alert\">\n                                            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" title=\"close\">×</a>\n                                        <strong>Success!</strong> Indicates a successful or positive action.\n                                    </div> -->\n             \n                                </div></a>\n                            </li>\n                             <div class=\"divider\"> </div>\n                             <div *ngFor=\"let item of notif\">\n                             <li>\n                                    <div class=\"media\" >\n                                            \n                                    <div class=\"media-body\" >\n                                        <div class='exclusaoNotificacao pull-right'><button class='btn btn-danger btn-xs button_exclusao closbtn' id='1'(click)=\"viewstatus(item.id)\" >x</button>\n                                         </div>\n                                            <h4 class=\"media-heading\"  >symptots</h4>\n                                           \n                                    </div>\n                                </div>\n                               \n                             </li>\n                             <hr>\n                            </div> \n                             \n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                            <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <div class=\"navbar-content\">\n                                    <span>JS Krishna</span>\n                                    <p class=\"text-muted small\">\n                                        me@jskrishna.com\n                                    </p>\n                                    <div class=\"divider\">\n                                    </div>\n                                    <a href=\"#\" class=\"view btn-sm active\">View Profile</a> \n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-topbar/user-topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTopbarComponent; });
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

var UserTopbarComponent = (function () {
    function UserTopbarComponent() {
    }
    UserTopbarComponent.prototype.ngOnInit = function () {
    };
    UserTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-topbar',
            template: __webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-topbar/user-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
        this.socketURL = "http://192.168.1.116:3000";
        this.siteUrl = "http://192.168.1.116:3000";
    }
    return Config;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all companieslist
    AdminService.prototype.getAllcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : Allactivecompanies
    AdminService.prototype.getAllactivecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  05-03-2018
    // Last Modified : 
    // Desc          : all blocked companies
    //all blocked companies
    AdminService.prototype.getAllblockedcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allblockedcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  05-03-2018
    // Last Modified : 
    // Desc          : all deleted companies
    //all deleted companies
    AdminService.prototype.getAlldeletedcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alldeletedcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : delete company
    //delete company
    AdminService.prototype.deleteCompany = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'deletecompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : block company
    //block company
    AdminService.prototype.blockCompany = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'blockcompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : unblock company
    //unblock company
    AdminService.prototype.unblockCompany = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'unblockcompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all subscribedcompanies
    //all subscribedcompanies
    AdminService.prototype.getAllsubcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all subscribedactivecompanies
    AdminService.prototype.getAllsubactivecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :06-03-2018
    // Last Modified : 
    // Desc          : all subscribedblockcompanies
    AdminService.prototype.getAllsubblockcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all subscribeddeletecompanies
    AdminService.prototype.getAllsubdeletecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubdeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all trailcompanies
    AdminService.prototype.getAlltrialcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all trialactivecompanies
    AdminService.prototype.getAlltrialactivecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all trialblockcompanies
    AdminService.prototype.getAlltrialblockcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all trialdeletecompanies
    AdminService.prototype.getAlltrialdeletecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialdeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all notverifiedcompanies
    //all not verified companies
    AdminService.prototype.getAllnotverficompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverficompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all notverfiactivecompanies
    AdminService.prototype.getAllnotverfiactivecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfiactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all notverfiblockcompanies
    AdminService.prototype.getAllnotverfiblockcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfiblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all notverfideletecompanies
    AdminService.prototype.getAllnotverfideletecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfideletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all expired companies
    //all expired companies
    AdminService.prototype.getAllexpiredcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all expiredactivecompanies
    AdminService.prototype.getAllexpiredactivecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all expiredblockcompanies
    AdminService.prototype.getAllexpiredblockcompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : all expireddeletecompanies
    AdminService.prototype.getAllexpireddeletecompanies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpireddeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin notification management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          :  06-03-2018
    // Last Modified : 
    // Desc          : notification
    AdminService.prototype.getAdminnotification = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'adminnotification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user notification management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : view status user notifcation
    AdminService.prototype.viewstatusadmin = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'viewstatusadmin/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* Config */]])
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
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllusers
    // Params        : 
    // Returns       : list of users
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : all users 
    CompanyService.prototype.getAllusers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :  company User management
    // Params        : User id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : delete User
    //delete User
    CompanyService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'deleteuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :  company User management
    // Params        : User id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : block User
    //block User
    CompanyService.prototype.blockUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'blockuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin User management
    // Params        : User id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : unblock User
    //unblock User
    CompanyService.prototype.unblockUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'unblockuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllactiveusers
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : list of active users
    CompanyService.prototype.getAllactiveusers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allactiveusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllblockedusers
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : list of block users
    CompanyService.prototype.getAllblockedusers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allblockedusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAlldeleteusers
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : list of all delete users
    CompanyService.prototype.getAlldeleteusers = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'alldeleteusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : adduser
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          :08-03-2018
    // Last Modified : 
    // Desc          : adduser
    CompanyService.prototype.addUser = function (data) {
        // console.log(data)
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'adduser', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllusergroup
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : list of usergroup
    CompanyService.prototype.getAllusergroup = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allusergroup', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllPrevexp
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : list of Prevexp
    CompanyService.prototype.getAllPrevexp = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allprevexp', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllTeam
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : list of Team
    CompanyService.prototype.getAllTeam = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allteam', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllDesignation
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : list of Designation
    CompanyService.prototype.getAllDesignation = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'alldesignation', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getSingleuser
    // Params        : User id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : Singleuser
    //unblock User
    CompanyService.prototype.getSingleuser = function (id) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'singleuser', { id: id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateuser
    // Params        : user
    // Returns       : 
    // Author        : sudha
    // Date          : 29-01-2018
    // Last Modified :
    // Desc          : to updateuser 
    CompanyService.prototype.updateUser = function (user) {
        // console.log(plan);
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'updateuser', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    // ---------------------------------Start-------------------------------------------
    // Function      : allprojectcategory
    // Params        : 
    // Returns       : allprojectcategory
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : allprojectcategory
    CompanyService.prototype.getAllprojectcategory = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allprojectcategory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteCategory
    // Params        : Category id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : deleteCategory
    //deleteCategory
    CompanyService.prototype.deleteCategory = function (id) {
        var headers = this.setHeader();
        return this.http.put(this.serviceUrl + 'deletecategory/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addCategory
    // Params        : Category name
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : addCategory
    //addCategory
    CompanyService.prototype.addCategory = function (name) {
        // console.log("er"+name);
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'addcategory/', { name: name }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : updateCategory
    // Params        : Category name
    // Returns       : 
    // Author        : sudha
    // Date          : 13-03-2018
    // Last Modified : 
    // Desc          : updateCategory
    //updateCategory
    CompanyService.prototype.updateCategory = function (category) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'updatecategory/', category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : singlecategory
    // Params        : category id
    // Returns       : 
    // Author        : sudha
    // Date          : 13-03-2018
    // Last Modified : 
    // Desc          : singlecategory
    //unblock User
    CompanyService.prototype.getSinglecategory = function (project_id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "singlecategory/" + project_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllemployeeleaves
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          : list of Allemployeeleaves
    CompanyService.prototype.getAllemployeeleaves = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allempleaves', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllcompanyemployee
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          : list of Allcompanyemployee
    CompanyService.prototype.getAllcompanyemployee = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allcompanyemployee', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteEmpleave
    // Params        : Empleave id
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          : deleteEmpleaveeCategory
    //deleteEmpleave
    CompanyService.prototype.deleteEmpleave = function (id) {
        var headers = this.setHeader();
        return this.http.put(this.serviceUrl + 'deleteempleave/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : singleempleave
    // Params        : empleave id
    // Returns       : 
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 
    // Desc          : singleempleave
    //unblock User
    CompanyService.prototype.getSingleempleave = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "singleempleave/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addEmpleave
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 
    // Desc          : addEmpleave
    CompanyService.prototype.addnewEmpleave = function (data) {
        // console.log(data)
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'addEmpleave', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateEmpleave
    // Params        : Empleaveid
    // Returns       : 
    // Author        : sudha
    // Date          : 15-01-2018
    // Last Modified :
    // Desc          : to updateEmpleave 
    CompanyService.prototype.updateEmpleave = function (Empleave) {
        // console.log(Empleave);
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'updateempleave', Empleave, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getDatefilterforlog
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          :16-03-2018
    // Last Modified : 
    // Desc          : datefilterforlog
    CompanyService.prototype.getDatefilterforlog = function (data) {
        // console.log(data)
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'datefilterforlog', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllemppendingleaves
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : list of getAllemppendingleaves
    CompanyService.prototype.getAllemppendingleaves = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allemppendingleaves', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : userleave
    // Params        : userleave id
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : userleave
    //userleave
    CompanyService.prototype.getuserleave = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "userleave/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addReason
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : add reject reason
    //updateCategory
    CompanyService.prototype.addReason = function (reason) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'addrejectleave/', reason, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addaccept
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : add accept reason
    //addaccept
    CompanyService.prototype.addaccept = function (accept) {
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'addacceptleave/', accept, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : allemppendingleavesnotifi
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : list of get All emp pending leaves notification
    CompanyService.prototype.getAllemppendingleavesnotifi = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'allemppendingleavesnotifi', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : closeNotif5
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : close Notif for leave request
    //closeNotif5
    CompanyService.prototype.closeNotif5 = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'leavenotifclose/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAlltimeextensionrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 04-04-2018
    // Last Modified : 
    // Desc          : list of Altime extension request
    CompanyService.prototype.getAlltimeextensionrequest = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'alltimeextension', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : gettimerequest
    // Params        : gettimerequest id
    // Returns       : 
    // Author        : sudha
    // Date          : 04-04-2018
    // Last Modified : 
    // Desc          : get time request details
    //userleave
    CompanyService.prototype.gettimerequest = function (reqid, projid) {
        var data = { reqid: reqid, projid: projid };
        var headers = this.setHeader();
        // console.log("a"+data)
        return this.http.post(this.serviceUrl + "timerequest", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Rejecttimeextreq
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : Reject time ext req to pm
    //Rejecttimeextreq
    CompanyService.prototype.Rejecttimeextreq = function (id) {
        var headers = this.setHeader();
        return this.http.put(this.serviceUrl + 'rejecttimeextreq/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getUserleavedata
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-04-2018
    // Last Modified : 
    // Desc          : get User leave data(time extension request)
    //unblock User
    CompanyService.prototype.getUserleavedata = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "userleavedata/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Sendtoadmin
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : Send to admin (time ext req )
    //Sendtoadmin
    CompanyService.prototype.Sendtoadmin = function (id) {
        var headers = this.setHeader();
        return this.http.put(this.serviceUrl + 'sendtoadmin/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllSendtoadminnotif
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : send to admin notif(time extension approval)
    CompanyService.prototype.getAllSendtoadminnotif = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'sendtoadminnotif', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : closeNotif6
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          :  06-04-2018
    // Last Modified : 
    // Desc          : close Notif for time extension approval
    //closeNotif6
    CompanyService.prototype.closeNotif6 = function (id) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'admintimeextnotifclose/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], CompanyService);
    return CompanyService;
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
    // ---------------------------------Start-------------------------------------------
    // Function      : singleuserlog
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified : 
    // Desc          :user all activity log list
    UserService.prototype.getSingleUserActivitylog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'singleuserlog', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getDatefilterforlog
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          :16-03-2018
    // Last Modified : 
    // Desc          : datefilterforlog
    UserService.prototype.getDatefilterforlog = function (data) {
        // console.log(data)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + 'datefilterforlog', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getSingleUserallleaves
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 
    // Desc          :get Single User all leaves
    UserService.prototype.getSingleUserallleaves = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'singleuserallleave', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteEmpleave
    // Params        : user id
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : deleteuser leave
    //deleteuser leave
    UserService.prototype.deleteuserleave = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'deleteuserleave/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addUserleave
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : add USER leave
    UserService.prototype.addUserleave = function (data) {
        // console.log(data)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + 'adduserleave', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : singleuserleave
    // Params        : user leave id
    // Returns       : 
    // Author        : sudha
    // Date          :  28-03-2018
    // Last Modified : 
    // Desc          : single user leave
    //unblock User
    UserService.prototype.getSingleuserleave = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + "singleuserleave/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateUserleave
    // Params        : userleaveid
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified :
    // Desc          : to updateUserleave 
    UserService.prototype.updateUserleave = function (userleave) {
        // console.log(Empleave);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serviceUrl + 'updateuserleave', userleave, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    // ---------------------------------Start-------------------------------------------
    // Function      : getMyallrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 
    // Desc          :get My all request
    UserService.prototype.getMyallrequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allmyrequest', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getMyallTimeextnrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 
    // Desc          :get my time extension request
    UserService.prototype.getMyallTimeextnrequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'mytimeextrequest', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getMyallnewtaskrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 
    // Desc          :get my all new task request
    UserService.prototype.getMyallnewtaskrequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'mynewtaskrequest', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getAllProject
    // Params        : 
    // Returns       : all projects
    // Author        : sudha  
    // Date          : 21-03-2018
    // Last Modified :
    // Desc          : 
    UserService.prototype.getAllProject = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + "allProjects", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getAllMyTimeextensionrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha  
    // Date          : 29-03-2018
    // Last Modified :
    // Desc          : 
    UserService.prototype.getAllMyTimeextensionrequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + "allmytimeextrequest", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : getAllMyNewTaskrequest
    // Params        : 
    // Returns       : 
    // Author        : sudha  
    // Date          : 29-03-2018
    // Last Modified :
    // Desc          : 
    UserService.prototype.getAllMyNewTaskrequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + "allmynewtaskrequest", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], UserService);
    return UserService;
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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

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