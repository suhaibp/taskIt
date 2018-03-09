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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_reference_component_reference_component_component__ = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_topbar_admin_topbar_component__ = __webpack_require__("../../../../../src/app/components/admin-topbar/admin-topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/components/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_company_admin_company_component__ = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_company_dashboard_company_dashboard_component__ = __webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_company_task_vs_status_company_task_vs_status_component__ = __webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_company_resoure_vs_hour_company_resoure_vs_hour_component__ = __webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_company_project_vs_hour_company_project_vs_hour_component__ = __webpack_require__("../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_company_project_vs_status_company_project_vs_status_component__ = __webpack_require__("../../../../../src/app/components/company-project-vs-status/company-project-vs-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_company_progress_graph_company_progress_graph_component__ = __webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_6__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
    { path: 'admin-topbar', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */] },
    { path: 'admin-footer', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */] },
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_14__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'company-dashboard', component: __WEBPACK_IMPORTED_MODULE_19__components_company_dashboard_company_dashboard_component__["a" /* CompanyDashboardComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["E" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_company_dashboard_company_dashboard_component__["a" /* CompanyDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_company_task_vs_status_company_task_vs_status_component__["a" /* CompanyTaskVsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_company_resoure_vs_hour_company_resoure_vs_hour_component__["a" /* CompanyResoureVsHourComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_company_project_vs_hour_company_project_vs_hour_component__["a" /* CompanyProjectVsHourComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_company_project_vs_status_company_project_vs_status_component__["a" /* CompanyProjectVsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_company_progress_graph_company_progress_graph_component__["a" /* CompanyProgressGraphComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                DemoMaterialModule
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".graph-ul li{\r\n    float :left;\r\n    padding: 10px 2px;\r\n    border: 1px solid #ccc;\r\n    margin-top: 10px;\r\n    width: 300px;\r\n    display: table;\r\n   \r\n}\r\n.graph-ul{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow-x: scroll;\r\n    max-width:1170px;\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n.bg-g{background:#17a88f;color:#fff;}\r\n.bg-hash{background:#E9E9E9;}\r\n.bg-hash select{background:none;border:none;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n      <div class=\"row display-table-row\">\n    \n          <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n               <!-- sidebar-->\n             \n               <admin-sidebar></admin-sidebar> \n               <!-- end sidebar-->\n          </div>\n          \n          <div class=\"col-md-12 col-xs-12\">\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n              <!-- topbar-->\n              <admin-topbar></admin-topbar> \n              \n                  <!-- end topbar-->\n              \n              \n              <div class=\"user-dashboard\">\n                    <company-progress-graph></company-progress-graph>\n                  <div class=\"row\">\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                          <div class=\"sales\">\n                              \n                          <company-task-vs-status></company-task-vs-status>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 col-sm-6 col-xs-12 \">\n                          <div class=\"sales\">\n                          <company-resoure-vs-hour></company-resoure-vs-hour>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 col-sm-6 col-xs-12 \">\n                          <div class=\"sales\">\n                          <company-project-vs-hour></company-project-vs-hour>\n                          </div>\n                      </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                            <company-project-vs-status></company-project-vs-status>\n                            </div>\n                        </div>\n                      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n                            <div class=\"sales\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-3 bg-g\">*Select Project</div>\n                                    <div class=\"col-md-3 bg-hash\">\n                                      <select>\n                                        <option>Taskit</option>\n                                        <option>Survey</option>\n                                      </select>\n                                    </div> \n                                    <div class=\"col-md-3\">\n                                      Total 7 Milestone\n                                    </div> \n                                </div>\n                                <ul class=\"graph-ul\">\n                                    <li >\n                                        <div >Module-1</div>\n                                        <hr>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                            <company-progress-graph></company-progress-graph>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div >Module-2</div>\n                                        <hr>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                        </div>\n                                    </li>\n                                    <li >\n                                        <div >Module-3</div>\n                                        <hr>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">Planned Hour <br>100</div>\n                                            <div class=\"col-md-6\">Actual Hour<br> 20 </div>\n                                        </div>\n                                    </li>\n                                   \n                                   \n                                   \n                                </ul>\n                            </div>\n                           \n                        </div>\n                      \n                  </div>\n              </div>\n              \n          </div>\n              <!-- footer-->\n              <admin-footer></admin-footer>\n     <!-- end footer-->\n      </div>\n       </div>\n      <!-- Modal -->\n   </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-dashboard/company-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDashboardComponent; });
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

var CompanyDashboardComponent = (function () {
    function CompanyDashboardComponent() {
    }
    CompanyDashboardComponent.prototype.ngOnInit = function () {
    };
    CompanyDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-dashboard',
            template: __webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-dashboard/company-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyDashboardComponent);
    return CompanyDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-progress-graph/company-progress-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);", ""]);

// module
exports.push([module.i, "body {\r\n  background: white;\r\n}\r\n\r\n* {\r\n  font-family: \"Open Sans\";\r\n}\r\n\r\n#slider {\r\n  width: 75%;\r\n  margin: 2em auto 1em;\r\n}\r\n\r\n.svg-container {\r\n  margin: 3em auto 0;\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\nsvg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-progress-graph/company-progress-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\n    <svg id=\"candidscore\"></svg>\n  </div>"

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
        var τ = Math.PI; // http://tauday.com/tau-manifesto
        var arc = d3.svg.arc()
            .innerRadius(250)
            .outerRadius(0)
            .startAngle(0);
        // Draw the thing!
        drawBadge("#candidscore");
        updateScore(60, "#candidscore");
        // Pass DOM selector to function, set up Canvas size
        function drawBadge(svgID) {
            var width = 500, height = 500, aspect = width / height;
            // Create the SVG container, and apply a transform such that the origin is the
            // center of the canvas. This way, we don't need to position arcs individually.
            var svg = d3.select(svgID)
                .attr("preserveAspectRatio", "xMidYMid")
                .attr("viewBox", "0 0 500 500")
                .attr("width", "100%")
                .attr("height", "100%")
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            // Add the background arc, from 0 to 100% (τ).
            var background = svg.append("path")
                .datum({ endAngle: 2 * τ })
                .style("fill", "#f2f2f2")
                .attr("transform", "rotate(-90)")
                .attr("d", arc);
            // Add the top arc in orange
            var foreground_top = svg.append("path")
                .attr("id", "foreground_top")
                .datum({ endAngle: 0 * τ })
                .style("fill", "#fab923")
                .attr("d", arc)
                .attr("transform", "rotate(-90)");
            // Add bottom arc in orange
            var foreground_bottom = svg.append("path")
                .attr("id", "foreground_bottom")
                .datum({ endAngle: 0 * -τ })
                .style("fill", "#fab923")
                .attr("d", arc)
                .attr("transform", "rotate(-90)");
            var trans_circ = svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 210)
                .attr("fill", "rgba(255,255,255, .25)");
            // Create "def" element that will contain our drop shadow filter
            var defs = svg.append("defs");
            // Create our filter with an id of "#drop-shadow"
            var filter = defs.append("filter")
                .attr("id", "drop-shadow")
                .attr("height", "130%");
            // Create our Gaussian Blur with a standard deviation of 8
            filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 8)
                .attr("result", "blur");
            // Translate the output of Gaussian Blur to (0,0), and store result in var offsetBlur
            filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 0)
                .attr("dy", 0)
                .attr("result", "offsetBlur");
            // Control the opacity of the actual drop shadow with 'feComponentTransfer and SLOPE'
            var comptransf = filter.append("feComponentTransfer");
            comptransf.append("feFuncA")
                .attr("type", "linear")
                .attr("slope", .2);
            // Overlay original SourceGraphic over translated blurred opacity by using feMerge filter ***ORDER IS IMPORTANT***
            var feMerge = filter.append("feMerge");
            feMerge.append("feMergeNode");
            /*	.attr("in", "offsetBlur")*/
            feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");
            var white_circ = svg.append("circle")
                .attr("cx", 0)
                .attr("cx", 0)
                .attr("r", 180)
                .attr("id", "white_circ")
                .style("filter", "url(#drop-shadow)")
                .attr("fill", "white");
            var stroke_circ = svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 160)
                .attr("fill", "none")
                .attr("stroke", "rgba(0,0,0,.125")
                .attr("stroke-width", "1px");
            var candidlogo = svg.append("g")
                .attr("transform", "translate(-295,-285), scale(1.75)");
            candidlogo.append("path")
                .attr("d", "M134.3,233.2L134.3,233.2c0-3.3,2.6-6.2,6-6.2c2.2,0,3.6,1,4.7,2.2l-0.8,0.8c-1-1-2.2-1.9-3.9-1.9c-2.7,0-4.7,2.2-4.7,5v0c0,2.8,2.1,5.1,4.8,5.1c1.7,0,2.9-0.9,3.9-2l0.8,0.7c-1.2,1.4-2.6,2.3-4.8,2.3 C136.9,239.3,134.3,236.5,134.3,233.2z")
                .attr("fill", "#A7A8AD");
            candidlogo.append("path")
                .attr("d", "M147.3,235.6L147.3,235.6c0-2.5,2.1-3.9,5.1-3.9c1.6,0,2.8,0.2,3.9,0.5v-0.5c0-2.4-1.4-3.6-3.9-3.6 c-1.4,0-2.6,0.4-3.7,0.9l-0.4-1c1.3-0.6,2.6-1,4.2-1c1.6,0,2.8,0.4,3.7,1.3c0.8,0.8,1.2,1.9,1.2,3.3v7.3h-1.1v-2 c-0.8,1.1-2.3,2.2-4.5,2.2C149.6,239.3,147.3,238,147.3,235.6z M156.3,234.6v-1.3c-1-0.3-2.3-0.5-4-0.5c-2.5,0-3.9,1.1-3.9,2.7v0 c0,1.7,1.6,2.7,3.4,2.7C154.2,238.2,156.3,236.8,156.3,234.6z")
                .attr("fill", "#A7A8AD");
            candidlogo.append("path")
                .attr("d", "M161.4,227.3h1.1v2.2c0.8-1.4,2.1-2.5,4.2-2.5c3,0,4.7,2,4.7,4.8v7.2h-1.1v-7c0-2.4-1.4-4-3.7-4 c-2.3,0-4.1,1.7-4.1,4.2v6.8h-1.1V227.3z")
                .attr("fill", "#A7A8AD");
            candidlogo.append("path")
                .attr("d", "M174.7,233.2L174.7,233.2c0-3.9,2.9-6.2,5.7-6.2c2.3,0,3.9,1.3,4.8,2.8v-7.6h1.1V239h-1.1v-2.6 c-1,1.5-2.5,2.9-4.8,2.9C177.6,239.3,174.7,237,174.7,233.2z M185.3,233.2L185.3,233.2c0-3.1-2.3-5.1-4.8-5.1 c-2.6,0-4.6,1.9-4.6,5v0c0,3.1,2.1,5.1,4.6,5.1C183,238.2,185.3,236.2,185.3,233.2z")
                .attr("fill", "#A7A8AD");
            candidlogo.append("path")
                .attr("d", "M190.7,222.7h1.4v1.5h-1.4V222.7z M190.8,227.3h1.1V239h-1.1V227.3z")
                .attr("fill", "#A7A8AD");
            candidlogo.append("path")
                .attr("d", "M195.6,233.2L195.6,233.2c0-3.9,2.9-6.2,5.7-6.2c2.3,0,3.9,1.3,4.8,2.8v-7.6h1.1V239h-1.1v-2.6 c-1,1.5-2.5,2.9-4.8,2.9C198.5,239.3,195.6,237,195.6,233.2z M206.2,233.2L206.2,233.2c0-3.1-2.3-5.1-4.8-5.1 c-2.6,0-4.6,1.9-4.6,5v0c0,3.1,2.1,5.1,4.6,5.1C203.9,238.2,206.2,236.2,206.2,233.2z")
                .attr("fill", "#A7A8AD");
            var text_score = svg.append("text")
                .attr("id", "scorenum")
                .attr("x", 0)
                .attr("y", 60)
                .attr("font-family", "proxima nova")
                .attr("text-anchor", "middle")
                .attr("font-weight", "bold")
                .attr("font-size", 195)
                .attr("fill", "#555555");
        }
        function arcTween(transition, newAngle) {
            transition.attrTween("d", function (d) {
                var interpolate = d3.interpolate(d.endAngle, newAngle);
                return function (t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        }
        function updateScore(score, svgID) {
            console.log(score);
            var decimalized = score / 100.0;
            console.log(decimalized);
            var our_svg = d3.select(svgID);
            var foreground_top = our_svg.select("path#foreground_top");
            var scorenum = our_svg.select("text#scorenum");
            var foreground_bottom = our_svg.select("path#foreground_bottom");
            scorenum.text(score);
            foreground_top.transition()
                .duration(1500)
                .ease("elastic")
                .call(arcTween, decimalized * τ);
            foreground_bottom.transition()
                .duration(1500)
                .ease("elastic")
                .call(arcTween, decimalized * -τ);
        }
        $("#slider").slider({
            start: 50,
            min: 1,
            max: 100,
            value: 50,
            slide: function (event, ui) {
                updateScore(ui.value, "#candidscore");
            }
        });
    };
    CompanyProgressGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-progress-graph',
            template: __webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-progress-graph/company-progress-graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyProgressGraphComponent);
    return CompanyProgressGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-project-vs-hour/company-project-vs-hour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
            .ticks(10)
            .tickSize(-width)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, ".bg-g{background:#17a88f;color:#fff;}\r\n.bg-hash{background:#E9E9E9;}\r\n.bg-hash select{background:none;border:none;}\r\n.tasklabel{       background: #efefef;\r\n    padding: 25px 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin: 10px 0;\r\n    border: 1px solid #ccc;\r\n    font-weight: bold;\r\n    font-size : 12px;\r\n  }", ""]);

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, "body {\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    margin: auto;\r\n    position: relative;\r\n  }\r\n  \r\n  text {\r\n    font: 15px sans-serif;\r\n  }\r\n  \r\n  .axis path,\r\n  .axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n    shape-rendering: crispEdges;\r\n  }\r\n  \r\n  #stacked-bar-chart-container {\r\n    /* position: relative;\r\n    border: 2px solid black; */\r\n    width: 510px;\r\n  }\r\n  \r\n  form {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 20px;\r\n  }\r\n  \r\n  div.tooltip { \r\n    position: absolute;     \r\n    min-width: 60px;          \r\n    padding: 4px;       \r\n    font: 12px sans-serif;    \r\n    background: lightsteelblue; \r\n    border: 0px;    \r\n    border-radius: 8px;     \r\n    pointer-events: none;     \r\n  }\r\n  \r\n  .grid line {\r\n    stroke: white;\r\n    stroke-opacity: 0.7;\r\n    shape-rendering: crispEdges;\r\n  }\r\n  \r\n  g.grid {\r\n    stroke-opacity: 0;\r\n  }\r\n\r\n\r\n\r\n\r\n  svg {\r\n    font: 10px sans-serif;\r\n    shape-rendering: crispEdges;\r\n  }\r\n\r\n  .axis path,\r\n  .axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n  }\r\n \r\n  path.domain {\r\n    stroke: none;\r\n  }\r\n \r\n  .y .tick line {\r\n    stroke: #ddd;\r\n  }\r\n", ""]);

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
            .ticks(10)
            .tickSize(-width)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-resoure-vs-hour',
            template: __webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-resoure-vs-hour/company-resoure-vs-hour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyResoureVsHourComponent);
    return CompanyResoureVsHourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  body {\r\n    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  .bg-g{background:#17a88f;color:#fff;}\r\n  .bg-hash{background:#E9E9E9;}\r\n  .bg-hash select{background:none;border:none;}\r\n  .tasklabel{       background: #efefef;\r\n    padding: 25px 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin: 10px 0;\r\n    border: 1px solid #ccc;\r\n    font-weight: bold;\r\n    font-size : 12px;\r\n  }\r\n  .pie {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-filter: drop-shadow(0 2px 0px #333);\r\n            filter: drop-shadow(0 2px 0px #333);\r\n  }\r\n  \r\n  .data-path:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .data-text {\r\n    transition: transform .2s ease-in-out;\r\n    fill: #fff;\r\n  }\r\n  .data-text__value {\r\n    font-size: 7rem;\r\n    transform: translateY(-0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text__name {\r\n    font-size: 2rem;\r\n    transform: translateY(0.5rem);\r\n    opacity: 0;\r\n  }\r\n  .data-text--show {\r\n    transform: translateY(0);\r\n    animation: fadeGraphTextIn 0.5s forwards;\r\n  }\r\n  .data-text:hover {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .legend-text {\r\n    fill: #fff;\r\n  }\r\n  \r\n  @keyframes fadeGraphTextIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h1>Task Vs Status</h1>\n<div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n      <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"col-md-6 bg-g\">*Select Person</div>\n      <div class=\"col-md-6 bg-hash\">\n        <select>\n          <option>Asif</option>\n          <option>Manu</option>\n        </select>\n      </div> \n      <div class=\"clearfix\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          TASKS ASSIGNED\n          <br>\n          2\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n            TASKS COMPLETED\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          DUE THIS WEEK\n          <br>\n          10\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n           DUE NEXT WEEK\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tasklabel\">\n          DUE THIS MONTH\n          <br>\n          10\n        </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"tasklabel\">\n            DUE THIS YEAR\n            <br>\n            10\n           </div>\n          </div>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <div class=\"widget\">\n            <div class=\"header\">Task Vs Status</div>\n            <div id=\"chart\" class=\"chart-container\">\n        \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTaskVsStatusComponent; });
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

var CompanyTaskVsStatusComponent = (function () {
    function CompanyTaskVsStatusComponent() {
    }
    CompanyTaskVsStatusComponent.prototype.ngOnInit = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-task-vs-status',
            template: __webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-task-vs-status/company-task-vs-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyTaskVsStatusComponent);
    return CompanyTaskVsStatusComponent;
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


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map