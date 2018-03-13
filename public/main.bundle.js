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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_all_companies_admin_all_companies_component__ = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_subscribed_admin_subscribed_component__ = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_trial_admin_trial_component__ = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_not_verified_admin_not_verified_component__ = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_expired_admin_expired_component__ = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_company_login_company_login_component__ = __webpack_require__("../../../../../src/app/components/company-login/company-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_compay_aditninfo_compay_aditninfo_component__ = __webpack_require__("../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_9__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
    { path: 'admin-topbar', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_topbar_admin_topbar_component__["a" /* AdminTopbarComponent */] },
    { path: 'admin-footer', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */] },
    { path: 'admin-company', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_company_admin_company_component__["a" /* AdminCompanyComponent */] },
    { path: 'admin-all-companies', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */] },
    { path: 'admin-subscribed', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */] },
    { path: 'admin-trial', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */] },
    { path: 'admin-NotVerified', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */] },
    { path: 'admin-expired', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */] },
    { path: 'company-login', component: __WEBPACK_IMPORTED_MODULE_24__components_company_login_company_login_component__["a" /* CompanyLoginComponent */] },
    { path: 'compay-aditninfo/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_compay_aditninfo_compay_aditninfo_component__["a" /* CompayAditninfoComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_27__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_18__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["F" /* MatTooltipModule */],
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
                __WEBPACK_IMPORTED_MODULE_19__components_admin_all_companies_admin_all_companies_component__["a" /* AdminAllCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_subscribed_admin_subscribed_component__["a" /* AdminSubscribedComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_trial_admin_trial_component__["a" /* AdminTrialComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_not_verified_admin_not_verified_component__["a" /* AdminNotVerifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_expired_admin_expired_component__["a" /* AdminExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_company_login_company_login_component__["a" /* CompanyLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_compay_aditninfo_compay_aditninfo_component__["a" /* CompayAditninfoComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_recaptcha__["ReCaptchaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_14__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_15__services_admin_service__["a" /* AdminService */]],
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

module.exports = "<p>\n  admin-all-companies works!\n</p>\n"

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

module.exports = "<body class=\"home\">\n    <div class=\"container-fluid display-table\">\n        <div class=\"row display-table-row\">\n      \n            <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                 <!-- sidebar-->\n               \n                 <admin-sidebar></admin-sidebar> \n                 <!-- end sidebar-->\n            </div>\n            \n            <div class=\"col-md-12 col-xs-12\">\n                <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                <!-- topbar-->\n                <admin-topbar></admin-topbar> \n                \n                    <!-- end topbar-->\n                \n                \n                <div class=\"user-dashboard\">\n                 <h1>Hello, JS</h1>\n                    <div class=\"row\">\n                        <div class=\"col-md-2 col-sm-2 col-xs-12 gutter\">\n\n                            <ul class=\"nav tabs\">\n                                <li [ngClass]=\"{'active1': viewComp == 'AllCompanies'}\"><a (click)=\"updateView('AllCompanies')\" href=\"#tab1\" data-toggle=\"tab\">All Companies</a></li>\n                                <li [ngClass]=\"{'active1': viewComp == 'Subscribed'}\"><a (click)=\"updateView('Subscribed')\" href=\"#tab2\" data-toggle=\"tab\">Subscribed</a></li> \n                                <li [ngClass]=\"{'active1': viewComp == 'Trial'}\"><a (click)=\"updateView('Trial')\" href=\"#tab3\" data-toggle=\"tab\">Trial</a></li>\n                                <li [ngClass]=\"{'active1': viewComp == 'NotVerified'}\"><a (click)=\"updateView('NotVerified')\" href=\"#tab4\" data-toggle=\"tab\">Not Verified</a></li>  \n                                <li [ngClass]=\"{'active1': viewComp == 'Expired'}\"><a (click)=\"updateView('Expired')\" href=\"#tab5\" data-toggle=\"tab\">Expired</a></li>\n                                              \n                          </ul>\n                        </div>\n                        <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\n\n                            <div *ngIf=\"viewComp == 'AllCompanies'\">\n                                <admin-all-companies></admin-all-companies>\n                              </div>\n                              <div *ngIf=\"viewComp == 'Subscribed'\">\n                                  <admin-subscribed></admin-subscribed>\n                                </div>\n                              <div *ngIf=\"viewComp == 'Trial'\">\n                                <admin-trial></admin-trial>\n                              </div>\n                              <div *ngIf=\"viewComp == 'NotVerified'\">\n                                <admin-not-verified></admin-not-verified>\n                              </div>\n                              <div *ngIf=\"viewComp == 'Expired'\">\n                                <admin-expired></admin-expired>\n                              </div>\n                            \n\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n                <!-- footer-->\n                <admin-footer></admin-footer>\n       <!-- end footer-->\n        </div>\n         </div>\n        <!-- Modal -->\n     </body>"

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

module.exports = "<p>\n  admin-expired works!\n</p>\n"

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

module.exports = "<footer class=\"container-fluid text-center bg-lightgray\">\n    \n                            <div class=\"copyrights\" style=\"margin-top:25px;\">\n                                <p>Taskit © 2018, All Rights Reserved\n                                    <br>\n                                    \n                                \n                            </div>\n                    </footer> "

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-not-verified works!\n</p>\n"

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

module.exports = "<div class=\"logo\">\n    <a href=\"\"><img src=\"./assets/images/logo.jpg\" alt=\"\" class=\"\">\n   \n</a>\n</div>\n\n<nav class=\"navbar navbar-default\">\n\n<!-- Brand and toggle get grouped for better mobile display -->\n<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n \n</div>\n\n<!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"zx nav navbar-nav\">\n        <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"/admin-dashboard\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"/admin-company\"><i class=\"fa fa-building-o\"></i> Company</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a routerLink=\"\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i><span class=\"\">Plan</span></a></li>\n    </ul>\n \n \n</div><!-- /.navbar-collapse -->\n\n</nav>"

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

module.exports = "<p>\n  admin-subscribed works!\n</p>\n"

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

module.exports = "<div class=\"row\">\n        <header>\n            \n            <div class=\"col-md-5 pull-right\">\n                <div class=\"header-rightside\">\n                    <ul class=\"list-inline header-top pull-right\">\n                        <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\n                        \n                        <li>\n                            <a href=\"#\" class=\"icon-info\">\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                <span class=\"label label-primary\">3</span>\n                            </a>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                                <b class=\"caret\"></b></a>\n                            <ul class=\"dropdown-menu\">\n                                <li>\n                                    <div class=\"navbar-content\">\n                                        <span>JS Krishna</span>\n                                        <p class=\"text-muted small\">\n                                            me@jskrishna.com\n                                        </p>\n                                        <div class=\"divider\">\n                                        </div>\n                                        <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\n                                    </div>\n                                </li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </header>\n    </div>"

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

module.exports = "<p>\n  admin-trial works!\n</p>\n"

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

module.exports = "<!DOCTYPE html>\n\n<html>\n\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\t<title>Taskit</title>\n\t<link rel=\"stylesheet\" href=\"css/bootstrap.css\">\n\t<link href=\"css/login.css\" rel=\"stylesheet\">\n\t<link href=\"css/responsive.css\" rel=\"stylesheet\">\n\t<!------ Include the above in your HEAD tag ---------->\n\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">\n\n</head>\n\n<body class=\"logn\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"logn-img\">\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" style=\"width:100%;\" />\n\t\t\t\t\t<!-- <img src=\"img/login.jpg\"/> -->\n\t\t\t\t\t<!-- <div class=\"paragraph\">\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Mixins-->\n\t\t\t\t<!-- Pen Title-->\n\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"card\"></div>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\n\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"login(newLogin)\" novalidate>\n\t\t\t\t\t\t\t<div class=\"input-container\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" name=\"email\" [(ngModel)]=\"newLogin.email\" required/>\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Username</label>\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<div class=\"input-container\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"password\" id=\"Password\" name=\"password\" [(ngModel)]=\"newLogin.password\" required/>\n\t\t\t\t\t\t\t\t\t<label for=\"Password\">Password</label>\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"input-container\" *ngIf=\"showCaptcha\">\n\t\t\t\t\t\t\t\t\t<re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LdWoEsUAAAAALf4IQwncQqV0HZPduSL0Ab4QC11\" ></re-captcha>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"footer\"><a [routerLink]=\"['/forgot-password']\">Forgot your password?</a></div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Sign in</button></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\t\t\t\t width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\" xml:space=\"preserve\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"social-login\">\n\t\t\t\t<a href=\"/auth/facebook\">\n\t\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\n\t\t\t\tLogin in with facebook\n\t\t\t  </a>\n\n\n\n\t\t\t  <!-- <div class=\"col-xs-12 col-sm-12\">\n\t\t\t\t<a href=\"/auth/google\" class=\"btn btn-lg btn-block omb_btn-google\" style=\"color:#fff;\">\n\t\t\t<i class=\"fa fa-google-plus visible-xs\"></i>\n\t\t\t<span class=\"hidden-xs\">Sign In With Google+</span>\n\t\t</a>\n\t\t\t</div> -->\n\n\t\t\t\t<a href=\"/auth/google\">\n\t\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\n\t\t\t\tlog in with Google+\n\t\t\t  </a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Modal -->\n\n\t<script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\n\t<script src=\"js/bootstrap.min.js\"></script>\n\n\n</body>\n\n\n</html>"

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
                    _this.routes.navigate(['/company-dashboard']);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], CompanyLoginComponent);
    return CompanyLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, select{outline:none;}\r\n.logn{height:100%;overflow-x:hidden;background:#fff;}\r\n.logn-img{height:100%;width:100%;position:relative;overflow:hidden;}\r\n.paragraph{    width: 56%;\r\n    left: 22%;\r\n    bottom: 10%;\r\n    z-index: 100;\r\n    min-height: 20px;\r\n    color: #fff;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    line-height: 22px;}\r\n.social-login{\r\n  position:relative;\r\n  float: none;\r\n  margin:0 auto;\r\n  height:auto;\r\n  padding: 10px 0 15px 0;\r\n  border-bottom: 1px solid #eee;\r\n  display: table;\r\n      width: 79%;\r\n}\r\n\r\n.social-login a{\r\n     position: relative;\r\n    float: left;\r\n    width: 48%;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid rgba(0,0,0,0.05);\r\n    padding: 7px 12px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n   \r\n        margin: 0px 1%;\r\n    text-align: center;\r\n}\r\n.social-login a i{\r\n  position: relative;\r\n  float: left;\r\n  width: 20px;\r\n  top: 2px;\r\n}\r\n.social-login a:first-child{\r\n  background-color: #49639F;\r\n}\r\n.social-login a:last-child{\r\n  background-color: #DF4A32;\r\n}\r\n.email-login,.email-signup{\r\n  position:relative;\r\n  float: left;\r\n  width: 100%;\r\n  height:auto;\r\n  margin-top: 20px;\r\n  text-align:center;\r\n}\r\nbody {\r\n  background: #e9e9e9;\r\n  color: #666666;\r\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\r\n  font-size: 14px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* Pen Title */\r\n.pen-title {\r\n  padding: 20px 0;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n  margin: 0 0 20px;\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n.pen-title span {\r\n  font-size: 12px;\r\n}\r\n.pen-title span .fa {\r\n  color: #ed2553;\r\n}\r\n.pen-title span a {\r\n  color: #ed2553;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Rerun */\r\n.rerun {\r\n  margin: 0 0 30px;\r\n  text-align: center;\r\n}\r\n.rerun a {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: #ed2553;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  padding: 10px 20px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  transition: 0.3s ease;\r\n}\r\n.rerun a:hover {\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  background: #ec2652;\r\n  width: 56px;\r\n  height: 56px;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s ease;\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\n#codepen i, #portfolio i {\r\n  line-height: 56px;\r\n}\r\n#codepen:hover, #portfolio:hover {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n/* CodePen */\r\n#portfolio {\r\n  bottom: 96px;\r\n  right: 36px;\r\n  background: #ec2652;\r\n  width: 44px;\r\n  height: 44px;\r\n  animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i {\r\n  line-height: 44px;\r\n}\r\n\r\n/* Container */\r\n.container {\r\n  position: relative;\r\n  max-width: 460px;\r\n  width: 100%;\r\n  margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n  background: #f2f2f2;\r\n  margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) {\r\n  background: #fafafa;\r\n  margin: 0 10px;\r\n}\r\n.container.active .card.alt {\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  padding: 60px 0 40px;\r\n  overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: -70px;\r\n  box-shadow: none;\r\n  transform: scale(15);\r\n  transition: transform .5s ease;\r\n}\r\n.container.active .card.alt .toggle:before {\r\n  content: '';\r\n}\r\n.container.active .card.alt .title,\r\n.container.active .card.alt .input-container,\r\n.container.active .card.alt .button-container {\r\n  left: 0;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s ease;\r\n}\r\n.container.active .card.alt .title {\r\n  transition-delay: .3s;\r\n}\r\n.container.active .card.alt .input-container {\r\n  transition-delay: .4s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(2) {\r\n  transition-delay: .5s;\r\n}\r\n.container.active .card.alt .input-container:nth-child(3) {\r\n  transition-delay: .6s;\r\n}\r\n.container.active .card.alt .button-container {\r\n  transition-delay: .7s;\r\n}\r\n\r\n\r\n/* Keyframes */\r\n@keyframes buttonFadeInUp {\r\n  0% {\r\n    bottom: 30px;\r\n    opacity: 0;\r\n  }\r\n}\r\n.g-recaptcha {\r\n    transform:scale(0.89);\r\n    transform-origin:0 0;\r\n}\r\n.round-button{border-radius:20px;margin:0 auto;float:none;background:#f37600;color:#fff;    padding: 10px 32px; /* Safari */\r\n    transition: background 2s;}\r\n.round-button:hover{background:#ffaa05;color:#fff;}\r\n.padd-lft{padding-left:20px;}\r\n\r\n\r\n\r\n@media only screen and (max-width : 768px) {\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width : 480px)  { \r\n.card .input-container{    margin: 12px;}\r\n.logn-img{display:none;}\r\nform{text-align:center;}\r\n.logn-img {\r\n    height: 72%;\r\n    width: 98%;\r\n\tmax-height:300px;\r\n}\r\n.logn-img img{width:100%;}\r\n}\r\n@media only screen and (max-width : 320px) { \r\n\t.card .input-container{    width: 74%;\r\n        margin: 24px auto;\r\n    float: none;}\r\n\t.card .input-container .bar{left: 3%;}\r\n\t.container{max-width:100%;}\r\n\tform{text-align:center;}\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compay-aditninfo/compay-aditninfo.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"logn\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"logn-img\">\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" class=\"img-responsive\" />\n\t\t\t\t\t<div class=\"paragraph\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align:center;\">\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi\n\t\t\t\t\t\t\ttristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 bgz\">\n\t\t\t<h3>Registration</h3>\n\t\t\t<section>\n\t\t\t\t<form id=\"theForm\" class=\"simform\" autocomplete=\"off\">\n\t\t\t\t\t<div class=\"simform-inner\">\n\n\t\t\t\t\t\t<div *ngFor=\"let item of questions;let i=index;\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"counter == i\">\n\t\t\t\t\t\t\t\t<label>{{item.question}}</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"item.type == 'text' else password\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\n\t\t\t\t\t\t\t\t<ng-template #password>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" *ngIf=\"item.type == 'password' else multiple\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\n\t\t\t\t\t\t\t\t\t<ng-template #multiple>\n\t\t\t\t\t\t\t\t\t\t<select class=\"inp\" [(ngModel)]=\"item.ans\" name=\"item.ans\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"i == 2 else size\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let c of industry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{c.industry}}\">{{c.industry}}</option>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #size>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let s of cmpSize\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"{{s.size_range}}\">{{s.size_range}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option>Select Company Size</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-10</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>1-20</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<!-- <button *ngIf=\"counter != 5\" class=\"\" type=\"submit\" (click)=\"validate()\">next</button> -->\n\t\t\t\t\t\t\t\t<button *ngIf=\"counter != 5\" class=\"btn-nxt\" type=\"submit\" (click)=\"validate(i)\" [ngClass]=\"{'inp-top': counter==6}\"><i class=\"la la-arrow-right\"></i></button>\n\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"progressBarWidth\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">70% Complete</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"\">{{errMessage}}</span>\n\n\t\t\t\t\t\t<!-- <button *ngIf=\"counter == 5\" class=\"submit-form\" type=\"submit\" (click)=\"register()\">GO</button> -->\n\n\t\t\t\t\t\t<button *ngIf=\"counter == 5\" class=\"submit-form\" type=\"submit\" (click)=\"register()\"><i class=\"la la-arrow-right\"></i></button>\n\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t\t\t\t\t\t\t\t x=\"0px\" y=\"0px\" width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\"\n\t\t\t\t\t\t\t\t xml:space=\"preserve\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /simform-inner -->\n\t\t\t\t\t<span class=\"final-message\"></span>\n\t\t\t\t</form>\n\t\t\t\t<!-- /simform -->\n\t\t\t</section>\n\n\n\n\t\t</div>\n\n\n\n\t</div>\n\n\t<!-- Modal -->\n\n\t<script>\n\n\t</script>\n\n</body>"

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
    function CompayAditninfoComponent(adminService, snackBar, routes, companyService) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.routes = routes;
        this.companyService = companyService;
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
            },
        ];
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
        this.companyService.getLoggedUSerDetails().subscribe(function (info) {
            console.log("additional info                " + info);
            console.log("additional indfor");
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
            // 	this.routes.navigate(['/additnInfo', info._id]);
            //   }
            // }
        });
        console.log(this.questions);
        this.getIndustries();
        this.getCompanySize();
    };
    CompayAditninfoComponent.prototype.register = function () {
        var _this = this;
        this.companyService.registerCompanyFromadtninfo(this.questions).subscribe(function (resData) {
            _this.spinner = true;
            console.log(resData);
            _this.industry = resData;
            if (resData.success == true) {
                _this.spinner = false;
                var snackBarRef = _this.snackBar.open('Redirecting into your account.', '', {
                    duration: 2000
                });
                _this.routes.navigate(['/dashboard']);
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
        this.adminService.getIndustries().subscribe(function (resData) {
            // console.log(resData)
            _this.industry = resData;
            console.log(_this.industry);
        });
    };
    CompayAditninfoComponent.prototype.getCompanySize = function () {
        var _this = this;
        this.adminService.getCompanySize().subscribe(function (resData) {
            // console.log(resData)
            _this.cmpSize = resData;
        });
    };
    CompayAditninfoComponent.prototype.addCounter = function () {
        this.counter = this.counter + 1;
        this.progressBarWidth = (this.counter / 8) * 100;
        console.log(this.progressBarWidth);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]])
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

module.exports = "<p>\n\n</p>\n"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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

module.exports = "<!DOCTYPE html>\n\n<html>\n\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\t<title>Taskit</title>\n\t<link rel=\"stylesheet\" href=\"css/bootstrap.css\">\n\t<link href=\"css/login.css\" rel=\"stylesheet\">\n\t<link href=\"css/responsive.css\" rel=\"stylesheet\">\n\t<!------ Include the above in your HEAD tag ---------->\n\n\t<link rel=\"stylesheet\" href=\"css/font-awesome.min.css\">\n\t<link rel=\"stylesheet\" href=\"css/line-awesome-font-awesome.min.css\">\n\n</head>\n\n<body class=\"logn\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"logn-img\">\n\t\t\t\t\t<img src=\"./assets/images/login.jpg\" style=\"width:100%;\" />\n\t\t\t\t\t<!-- <img src=\"img/login.jpg\"/> -->\n\t\t\t\t\t<!-- <div class=\"paragraph\">\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt bibendum malesuada. Fusce tincidunt nibh quis nisi tristique, sed ultrices lorem aliquam. Nam facilisis posuere vehicula. Integer tempus rhoncus volutpat.\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Mixins-->\n\t\t\t\t<!-- Pen Title-->\n\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"card\"></div>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<h1 class=\"title\">Login</h1>\n\t\t\t\t\t\t<form role=\"form\" (ngSubmit)=\"reset(newPassword)\" novalidate>\n\t\t\t\t\t\t\t<div class=\"input-container\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"Username\" name=\"email\" [(ngModel)]=\"newPassword.email\" required/>\n\t\t\t\t\t\t\t\t\t<label for=\"Username\">Email</label>\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"input-container\" >\n\t\t\t\t\t\t\t\t\t<re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LdWoEsUAAAAALf4IQwncQqV0HZPduSL0Ab4QC11\" ></re-captcha>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\n              <div class=\"col-md-12\" style=\"text-align:center;\"><button type=\"submit\" class=\"btn round-button\">Reset password</button></div>\n              <div class=\"clearfix\"></div>\n            </form>\n            <br>\n            <div class=\"footer\"><a [routerLink]=\"['/company-login']\">Return to login</a></div>\n\t\t\t\t\t\t<div *ngIf=\"spinner\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<svg class=\"svg\" version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\t\t\t\t width=\"50%\" height=\"59px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50; margin-left:25%;\" xml:space=\"preserve\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n\t\t\t\t\t\t\t\t\t\t<animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\n\t\t</div>\n\t</div>\n\n\t<!-- Modal -->\n\n\t<script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\n\t<script src=\"js/bootstrap.min.js\"></script>\n\n\n</body>\n\n\n</html>"

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
            }
            else {
                var snackBarRef = _this.snackBar.open(data.msg, '', {
                    duration: 2000
                });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home {\n    background: #f6f7fa;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\n        <div class=\"container-fluid display-table\">\n            <div class=\"row display-table-row\">\n          \n                <div class=\"col-md-1 col-xs-12 display-table-cell v-align box\" id=\"navigation\">\n                     <!-- sidebar-->\n                   \n                     <admin-sidebar></admin-sidebar> \n                     <!-- end sidebar-->\n                </div>\n                \n                <div class=\"col-md-12 col-xs-12\">\n                    <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\n                    <!-- topbar-->\n                    <admin-topbar></admin-topbar> \n                    \n                        <!-- end topbar-->\n                    \n                    \n                    <div class=\"user-dashboard\">\n                        <h1>Hello, JS</h1>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 col-sm-5 col-xs-12 gutter\">\n    \n                                <div class=\"sales\">\n                                    <h2>Your Sale</h2>\n    \n                                    <div class=\"btn-group\">\n                                        <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Period:</span> Last Year\n                                        </button>\n                                        <div class=\"dropdown-menu\">\n                                            <a href=\"#\">2012</a>\n                                            <a href=\"#\">2014</a>\n                                            <a href=\"#\">2015</a>\n                                            <a href=\"#\">2016</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\n    \n                                <div class=\"sales report\">\n                                    <h2>Report</h2>\n                                    <div class=\"btn-group\">\n                                        <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Period:</span> Last Year\n                                        </button>\n                                        <div class=\"dropdown-menu\">\n                                            <a href=\"#\">2012</a>\n                                            <a href=\"#\">2014</a>\n                                            <a href=\"#\">2015</a>\n                                            <a href=\"#\">2016</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n                    <!-- footer-->\n                    <admin-footer></admin-footer>\n           <!-- end footer-->\n            </div>\n             </div>\n            <!-- Modal -->\n         </body>"

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
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getBarDataforAdminDashboard
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data
    AdminService.prototype.getIndustries = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get_industries", { headers: h })
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
    AdminService.prototype.getCompanySize = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/get_cmp_size", { headers: h })
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
        return this.http.post(this.serviceUrl + "/register_company", details, { headers: h })
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
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]])
    ], CompanyService);
    return CompanyService;
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