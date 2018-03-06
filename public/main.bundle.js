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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_company_admin_company_component__ = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_plan_admin_plan_component__ = __webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_company_upgrade_company_upgrade_component__ = __webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_company_planlist_company_planlist_component__ = __webpack_require__("../../../../../src/app/components/company-planlist/company-planlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
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
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'admin-plan', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_plan_admin_plan_component__["a" /* AdminPlanComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_22__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'planlist', component: __WEBPACK_IMPORTED_MODULE_24__components_company_planlist_company_planlist_component__["a" /* CompanyPlanlistComponent */] },
    { path: 'upgrade/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_company_upgrade_company_upgrade_component__["a" /* CompanyUpgradeComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_28__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["H" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_plan_admin_plan_component__["a" /* AdminPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_company_planlist_company_planlist_component__["a" /* CompanyPlanlistComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_company_upgrade_company_upgrade_component__["a" /* CompanyUpgradeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                DemoMaterialModule
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_25__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_26__services_company_service__["a" /* CompanyService */]],
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

module.exports = "\n<body class=\"logn\">\n    <div class=\"row\">\n\t   <div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"logn-img\">\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\"/>\n\t\t\t\t\t<div class=\"paragraph\">\n\t\t\t\t\t\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t   </div>\n\t   <div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t<!-- Mixins-->\n\t\t\t<!-- Pen Title-->\n\t\t\t\n\t\t\t<div class=\"container admin-logn\">\n\t\t\t  <div class=\"card\"></div>\n\t\t\t  <div class=\"card\">\n        <h1 class=\"title\">Login</h1>\n        \n\t\t\t\t<form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n\t\t\t\t  <div class=\"input-container\">\n\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t<input type=\"text\" id=\"Username\" [(ngModel)]=\"newLogin.email\" name=\"email\" #email=\"ngModel\"/>\n\t\t\t\t\t<label for=\"Username\">Username</label>\n\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"clearfix\"></div>\n\t\t\t\t  <div class=\"input-container\">\n\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t<input type=\"password\" id=\"Password\" [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\n\t\t\t\t\t<label for=\"Password\">Password</label>\n\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <!-- <div class=\"input-container\">\n\t\t\t\t\t \n\t\t\t\t\t  <div class=\"col-xs-10 padd-lft\">\n\t\t\t\t\t  <div class=\"g-recaptcha\" data-sitekey=\"6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU\"><div style=\"width: 304px; height: 78px;\"><div><iframe src=\"https://www.google.com/recaptcha/api2/anchor?k=6LdZBxoUAAAAABdVce0Btdcb5H9Ade6Zoxd-dDNU&amp;co=aHR0cDovL3d3dy50c3MtYWR2LmNvbTo4MA..&amp;hl=en&amp;v=v1518566665321&amp;size=normal&amp;cb=ri090lbnphd5\" width=\"304\" height=\"78\" role=\"presentation\" frameborder=\"0\" scrolling=\"no\" sandbox=\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"></iframe></div><textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\" class=\"g-recaptcha-response\" style=\"width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; \"></textarea></div></div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div> -->\n\t\t\t\t  <div class=\"clearfix\"></div>\n\t\t\t\t  <!-- <div class=\"footer\"><a href=\"#\">Forgot your password?</a></div> -->\n\t\t\t\t  <div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Sign up</button></div>\n\t\t\t\t   <div *ngIf= \"showError\">\n\t\t\t\t\t\t <label>{{Error}}</label>\n\t\t\t\t\t </div>\n\t\t\t\t  \n\t\t\t\t</form>\n\t\t\t  </div>\n\t\t\t \n\t\t\t</div>\n\t\t\t\n\t\t   </div>\n<!-- \t\t\t\n\t\t  <div class=\"social-login\">\n\t\t\t  <a href=\"#\">\n\t\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\n\t\t\t\tLogin in with facebook\n\t\t\t  </a>\n\t\t\t  <a href=\"#\">\n\t\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\n\t\t\t\tlog in with Google\n\t\t\t  </a>\n\t\t\t</div> -->\n\t   </div>\n   </div>\n\n    <!-- Modal -->\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {MatSnackBar} from '@angular/material';
var AdminLoginComponent = (function () {
    function AdminLoginComponent(adminService, routes
        // ,public snackBar: MatSnackBar
    ) {
        this.adminService = adminService;
        this.routes = routes;
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
        console.log(this.newLogin);
        this.adminService.adminLogin(this.newLogin).subscribe(function (data) {
            // console.log(data);
            if (data.success == false) {
                //  this.showSpinner =false;
                _this.showError = true;
                _this.Error = data.msg;
                //    let snackBarRef =  this.snackBar.open('* User Not Found...!', '', {
                //      duration: 2000
                //  });
            }
            if (data.success) {
                //  this.showSpinner =false
                _this.showError = false;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]
            // ,public snackBar: MatSnackBar
        ])
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
exports.push([module.i, ".example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n \r\n  .mat-form-field {\r\n    /* font-size: 14px; */\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n  }\r\n  .modal{top:0;}\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  .add-project{\r\n    float: right;\r\n    margin-right: 50px;\r\n    margin-top: 50px;\r\n    border: none;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    font-size: 28px;\r\n    line-height: 42px;\r\n    box-shadow: 4px 7px 31px #ffbb8e;\r\n  }\r\n  .modal-header {\r\n    padding: 10px 30px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #fe6a07;\r\n}\r\n.modal-content{\r\n  box-shadow:none;\r\n  border-radius: 9px;\r\n  overflow: hidden;\r\n\r\n}\r\n.modal-title{color:#fff;}\r\n.modal-body{    padding:20px 30px;}\r\n.modal-body input{border:none;}\r\n.modal-body input{padding: 0;}\r\n.mat-form-field-infix {\r\n  display: block;\r\n  position: relative;\r\n  -ms-flex: auto;\r\n      flex: auto;\r\n  min-width: 0;\r\n  width: 180px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field-infix {\r\n  padding-top: 0px;\r\n}\r\n/* .mat-select-panel:not{z-index:10000000000000 !important;} */\r\n\r\n\r\nbody { \r\n  font-family: Roboto, Arial, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.basic-container {\r\n  padding: 5px;\r\n}\r\n\r\n.version-info {\r\n  font-size: 8pt;\r\n  float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-plan/admin-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n        <!-- <nav class=\"nav-sidebar\">\n                      <ul class=\"nav tabs buttonleft\"> -->\n        <!-- <li > -->\n\n        <!-- </li> -->\n\n\n        <!-- <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \n                            <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\n                            <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>   -->\n\n        <!-- </ul>\n                    </nav> -->\n      </div>\n      <admin-topbar></admin-topbar>\n\n      <div class=\"col-md-12 col-xs-9\">\n        <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n        <div class=\"row\">\n\n\n\n          <div class=\"example-container mat-elevation-z8\">\n            <div class=\"example-header\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n            </div>\n            <mat-table [dataSource]=\"dataSource\" matSort>\n              <ng-container matColumnDef=\"slno\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\n                <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"planname\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> PLAN NAME</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.plan_name}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"price\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> PRICE</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.plan_price}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"bestvalue\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> BEST VALUE</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n\n                  <mat-slide-toggle class=\"example-margin\" name=\"best\" [(ngModel)]=\"row.is_best_value\" (change)=\"onChange(row._id,row.is_best_value)\"\n                    [checked]=\"row.is_best_value\">\n\n                  </mat-slide-toggle>\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"action\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <!-- <button mat-menu-item disabled *ngIf=\"row.status==false\" (click)=\"getEditId(row._id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\n                                                                <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\n                                                                <span>Edit</span>\n                                                                </button> -->\n                    <button mat-menu-item (click)=\"getEditId(row._id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\n                                                            <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\n                                                            <span>Edit</span>\n                                                            </button>\n\n\n                    <button mat-menu-item (click)=\"getId(row._id)\" data-toggle=\"modal\" data-target=\"#deleteModal\"> \n                                                            <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\n                                                            <span>Delete</span>\n                                                        </button>\n                  </mat-menu>\n                </mat-cell>\n\n              </ng-container>\n\n\n\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n              </mat-row>\n            </mat-table>\n            <!-- <div class=\"col-md-15 \"> -->\n            <!-- <div *ngIf=\"showSpinnerDelete\" class=\"deletespinner\">\n                          <mat-spinner></mat-spinner>\n                       </div> -->\n\n            <!-- </div> -->\n\n            <div class=\"col-md-12 noItemFound\" *ngIf=\"notExist\">\n              <div class=\"col-md-4 col-md-offset-4\">\n                <mat-toolbar class=\"back-color\">No item found!</mat-toolbar>\n              </div>\n            </div>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          </div>\n        </div>\n      </div>\n      <div class=\"add-button\">\n        <button type=\"button\" class=\"add-project\" data-toggle=\"modal\" data-target=\"#addModal\" data-backdrop=\"static\">+</button>\n      </div>\n      <!-- -------------------------Modal -add plan------------------------------ -->\n\n      <div id=\"addModal\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n              <h4 class=\"modal-title\">Add New Plan</h4>\n            </div>\n            <div class=\"modal-body\">\n\n              <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"addPlan(newPlan);\" novalidate>\n\n                <div>\n                  <div class=\"example-container\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Plan Name\" name=\"planname\" [(ngModel)]=\"newPlan.planname\" required>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <span matPrefix>₹&nbsp;</span>\n                      <input matInput placeholder=\"Price\" type=\"number\" min=\"1\" class=\"example-right-align\" name=\"planprice\" [(ngModel)]=\"newPlan.planprice\"\n                        required>\n\n                      <!-- <span matSuffix>.00</span> -->\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n\n                      <mat-select placeholder=\"No of projects\" name=\"surveyno\" [(ngModel)]=\"newPlan.surveyno\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n\n\n                    <mat-form-field *ngIf=\"newPlan.surveyno == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value1\" [(ngModel)]=\"newPlan.value1\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Members\" name=\"surveyqtno\" [(ngModel)]=\"newPlan.surveyqtno\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.surveyqtno == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value2\" [(ngModel)]=\"newPlan.value2\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Modules\" name=\"surveyattno\" [(ngModel)]=\"newPlan.surveyattno\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.surveyattno == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value3\" [(ngModel)]=\"newPlan.value3\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field>\n                      <mat-select placeholder=\"No of Tasks\" name=\"surveyattno\" [(ngModel)]=\"newPlan.surveyattno\" required>\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <br>\n                    <mat-form-field *ngIf=\"newPlan.surveyattno == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value4\" [(ngModel)]=\"newPlan.value4\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n\n                  </div>\n\n                </div>\n                <br>\n                <!-- <div *ngIf=\"showSpinner\">\n                                    <mat-spinner></mat-spinner>\n                                   </div> -->\n\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" [disabled]=\"btnDisbled\" class=\"btn round-button\">Submit</button>\n\n                  </div>\n                  <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                    <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                      xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div> -->\n\n                </div>\n\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\n      <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Delete </h4>\n            </div>\n            <!-- <div class=\"modal-header\"> -->\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n            <!-- </div> -->\n            <div class=\"modal-body\">\n              <h4 class=\"textalign\">Are you sure to delete?</h4>\n\n            </div>\n\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" (click)=\"deletePlan(id)\" class=\"btn btn-danger\" data-dismiss=\"modal\">Delete</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n      <!-- ----------------------------------------------------------------------Edit modal-------------------------------------------------------------------------- -->\n      <div id=\"myModal2\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n              <h4 class=\"modal-title\">update plan</h4>\n            </div>\n            <div class=\"modal-body\">\n\n              <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updatePlan(plan);\" novalidate>\n\n                <div class=\"form-group\">\n                  <div class=\"example-container\">\n\n                    <mat-form-field>\n                      <input matInput placeholder=\"Plan Name\" name=\"plan_name\" [(ngModel)]=\"plan.plan_name\" required>\n                    </mat-form-field>\n                    <div *ngIf=\"!disablePrice\">\n                      <mat-form-field class=\"inputfileds\">\n\n                        <input matInput placeholder=\"Price\" type=\"number\" min=\"1\" class=\"example-right-align\" name=\"plan_price\" [(ngModel)]=\"plan.plan_price\"\n                          required>\n                        <span matPrefix>₹&nbsp;</span>\n                        <!-- <span matSuffix>.00</span> -->\n\n                      </mat-form-field>\n                    </div>\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of survey\" name=\"no_survey\" [(ngModel)]=\"plan.numofsurvey\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.numofsurvey == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value1\" [(ngModel)]=\"plan.no_survey\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of survey Question\" name=\"no_question\" [(ngModel)]=\"plan.numofqtn\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.numofqtn == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value2\" [(ngModel)]=\"plan.no_question\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputfileds\">\n                      <mat-select placeholder=\"No of Survey Attenders\" name=\"no_survey_attenders\" [(ngModel)]=\"plan.numofsurveyattn\" required>\n\n                        <mat-option value=\"Unlimited\">Unlimited</mat-option>\n                        <mat-option value=\"limited\">limited</mat-option>\n\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"plan.numofsurveyattn == 'limited'\">\n                      <input matInput placeholder=\"value\" type=\"number\" name=\"value3\" [(ngModel)]=\"plan.no_survey_attenders\" min=\"1\" oninput=\"validity.valid||(value='');\">\n                    </mat-form-field>\n\n                    <section class=\"example-section\">\n                      Excel import\n                      <mat-slide-toggle class=\"example-margin\" name=\"eximport\" [(ngModel)]=\"plan.excel_import\" [checked]=\"plan.excel_import\"></mat-slide-toggle>\n\n\n\n                    </section>\n                    <section class=\"example-section\">\n                      Survey Logic\n                      <mat-slide-toggle class=\"example-margin\" name=\"skip\" [(ngModel)]=\"plan.survey_logic\" [checked]=\"plan.survey_logic\">\n\n                      </mat-slide-toggle>\n                    </section>\n\n                  </div>\n                </div>\n                <!-- <div *ngIf=\"showSpinner\">\n            <mat-spinner></mat-spinner>\n           </div> -->\n                <br>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-danger ourbutton\">Update</button>\n\n                  </div>\n                  <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                    <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\"\n                      xml:space=\"preserve\">\n                      <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                        />\n                      </path>\n                    </svg>\n                  </div>\n\n                </div>\n\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <footer></footer>  -->\n\n</body>"

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
    function AdminPlanComponent(adminService, routes) {
        this.adminService = adminService;
        this.routes = routes;
        this.displayedColumns = ['slno', 'planname', 'price', 'bestvalue', 'action'];
        this.notExist = false;
        this.disablePrice = false;
        this.showSpinner = false;
        this.showSpinnerDelete = false;
        this.plan = {
            plan_name: '',
            plan_price: '',
            no_survey: '',
            numofsurvey: '',
            no_question: '',
            numofqtn: '',
            no_survey_attenders: '',
            numofsurveyattn: '',
            excel_import: '',
            survey_logic: ''
        };
        this.newPlan = {
            planname: '',
            planprice: '',
            surveyno: '',
            surveyqtno: '',
            surveyattno: '',
            value1: '',
            value2: '',
            value3: '',
            skip: false,
            eximport: false
        };
    }
    AdminPlanComponent.prototype.ngOnInit = function () {
        this.getPlan();
    };
    AdminPlanComponent.prototype.getPlan = function () {
        var _this = this;
        var users = [];
        this.adminService.getAllplans().subscribe(function (data) {
            _this.showSpinnerDelete = false;
            console.log(data);
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], AdminPlanComponent.prototype, "sort", void 0);
    AdminPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-plan',
            template: __webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-plan/admin-plan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
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

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <admin-topbar></admin-topbar>\n\n      <section class=\"planz\" id=\"section3\">\n        <div class=\"container\">\n          <h2>PLANS & PRICE</h2>\n          <div class=\"carry\">\n            <div class=\"plan wow fadeInRight\" data-wow-delay=\"0.2s\" *ngFor=\"let plan of plans\" [ngClass]=\"{'hilight': plan.is_best_value}\">\n              <h3 class=\"plan-title\">{{plan?.plan_name}}</h3>\n              <p class=\"plan-price\">&#8377;{{plan?.plan_price}} <span class=\"plan-unit\">per month</span></p>\n              <ul class=\"plan-features\">\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_projects}} </h4><span class=\"plan-feature-name\">Projects</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_members}} </h4><span class=\"plan-feature-name\">Members</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_modules}} </h4><span class=\"plan-feature-name\">Modules</span></li>\n                <li class=\"plan-feature\">\n                  <h4>{{plan?.no_tasks}} </h4><span class=\"plan-feature-name\">Tasks</span></li>\n              </ul>\n\n              <button type=\"submit\" (click)=\"upgrade(plan.id)\" class=\"btn round-button\">Upgrade</button>\n\n            </div>\n\n            <!-- <div class=\"plan hilight\">\n            <h3 class=\"plan-title\">Premium</h3>\n            <p class=\"plan-price\">&#8377;500 <span class=\"plan-unit\">per month</span></p>\n            <ul class=\"plan-features\">\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Projects</span></li>\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Members</span></li>\n            <li class=\"plan-feature\"><h4>50 </h4><span class=\"plan-feature-name\">Modules</span></li>\n            <li class=\"plan-feature\"><h4>100 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n            </ul>\n            \n          </div> -->\n\n            <!-- <div class=\"plan mr-lft wow fadeInLeft\" data-wow-delay=\"0.4s\">\n            <h3 class=\"plan-title\">Ultra</h3>\n            <p class=\"plan-price\">&#8377;1000 <span class=\"plan-unit\">per month</span></p>\n            <ul class=\"plan-features\">\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Projects</span></li>\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Members</span></li>\n            <li class=\"plan-feature\"><h4>70 </h4><span class=\"plan-feature-name\">Modules</span></li>\n            <li class=\"plan-feature\"><h4>120 </h4><span class=\"plan-feature-name\">Tasks</span></li>\n            </ul>\n            \n          </div> -->\n          </div>\n        </div>\n      </section>\n      <br>\n      <br>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-planlist/company-planlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPlanlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function CompanyPlanlistComponent(adminService, routes) {
        this.adminService = adminService;
        this.routes = routes;
    }
    CompanyPlanlistComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CompanyPlanlistComponent);
    return CompanyPlanlistComponent;
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

module.exports = "<body class=\"home\">\n  <div class=\"container-fluid display-table\">\n    <div class=\"row display-table-row\">\n      <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n        <admin-sidebar></admin-sidebar>\n      </div>\n      <admin-topbar></admin-topbar>\n      <br>\n      <br>\n      <div class=\"container\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Payment Method</div>\n          <div class=\"panel-body\">\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.cardnum\" name=\"cardnum\" autofocus placeholder=\"Card Number\" required formControlName=\"cardnumValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.cardname\" name=\"cardname\" placeholder=\"Name on Card\" required formControlName=\"cardnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input type=\"number\" matInput [(ngModel)]=\"payment.cvv\" name=\"cvv\" placeholder=\"CVV\" required formControlName=\"cvvValidation\">\n            </mat-form-field>\n            <br>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Billing Details</div>\n          <div class=\"panel-body\">\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.fname\" name=\"fname\" placeholder=\"First Name\" required formControlName=\"fnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.lname\" name=\"lname\" placeholder=\"Last Name\" required formControlName=\"lnameValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.addr\" name=\"addr\" placeholder=\"Address\" required formControlName=\"addrValidation\">\n            </mat-form-field>\n            <br>\n            <mat-form-field [formGroup]=\"formGroup\">\n              <input matInput [(ngModel)]=\"payment.no\" name=\"no\" placeholder=\"Phone Number\" required formControlName=\"noValidation\">\n            </mat-form-field>\n            <br>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Review and Confirm</div>\n          <div class=\"panel-body\">\n            <table>\n              <tr>\n                <td>Plan </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_name}}</b></td>\n              </tr>\n              <br>\n              <tr>\n                <td>No. of Months </td>\n                <td>:</td>\n                <td>\n                  <mat-form-field [formGroup]=\"formGroup\"><input type=\"number\" min=\"1\" matInput [(ngModel)]=\"payment.no_months\" name=\"no_months\" required formControlName=\"no_monthsValidation\">\n                  </mat-form-field>\n                </td>\n              </tr>\n              <br>\n              <tr>\n                <td>Price </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_price}}</b></td>\n              </tr>\n              <br>\n              <tr>\n                <td>Amount </td>\n                <td>:</td>\n                <td><b>{{plan?.plan_price * payment.no_months}} </b></td>\n              </tr>\n              <br>\n            </table>\n\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button type=\"submit\" class=\"btn round-button\" (click)=\"confirm(selectedId)\">Confirm</button>\n              </div>\n              <!-- <div class=\"col-md-8\" *ngIf=\"showSpinner\">\n                <svg class=\"svgclass\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n                  <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n                    <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n                    />\n                  </path>\n                </svg>\n              </div> -->\n\n            </div>\n\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/company-upgrade/company-upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyUpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__("../../../../../src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
    function CompanyUpgradeComponent(companyService, _formBuilder, routes, route) {
        this.companyService = companyService;
        this._formBuilder = _formBuilder;
        this.routes = routes;
        this.route = route;
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
            // Params        : 
            // Returns       : 
            // Author        : Rinsha
            // Date          : 06-03-2018
            // Last Modified : 06-03-2018, Rinsha
            // Desc          : getplan
            _this.companyService.getPlan(_this.plan_id).subscribe(function (res) {
                console.log(res);
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
    CompanyUpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-upgrade',
            template: __webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-upgrade/company-upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CompanyUpgradeComponent);
    return CompanyUpgradeComponent;
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
    function HomeComponent(adminService, routes) {
        this.adminService = adminService;
        this.routes = routes;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
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
        console.log("here");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allPlansWithoutDefault', { headers: headers })
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
    // ---------------------------------Start-------------------------------------------
    // Function      : get plan by id
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : getplan
    CompanyService.prototype.getPlan = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'planById/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], CompanyService);
    return CompanyService;
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


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map