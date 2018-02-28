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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_reference_component_reference_component_component__ = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin-sidebar/admin-sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'reference', component: __WEBPACK_IMPORTED_MODULE_5__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */] },
    { path: 'admin-sidebar', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_reference_component_reference_component_component__["a" /* ReferenceComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\n  <div class=\"logo\">\n      <a href=\"home.html\"><img src=\"img/logo.jpg\" alt=\"\" class=\"\">\n         \n      </a>\n  </div>\n\n<nav class=\"navbar navbar-default\">\n\n<!-- Brand and toggle get grouped for better mobile display -->\n<div class=\"navbar-header\">\n<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n<span class=\"sr-only\">Toggle navigation</span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n<span class=\"icon-bar\"></span>\n</button>\n\n</div>\n\n<!-- Collect the nav links, forms, and other content for toggling -->\n<div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\n<ul class=\"zx nav navbar-nav\">\n<li class=\"active\"><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\n<li><a href=\"#\"><i class=\"fa fa-users fa-2x text-purple\"></i> Company</a></li>\n<li><a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span class=\"\">Plan</span></a></li>\n</ul>\n\n\n</div><!-- /.navbar-collapse -->\n\n</nav>\n\n\n</div>"

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

/***/ "../../../../../src/app/components/reference-component/reference-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"home\">\r\n  <div class=\"container-fluid display-table\">\r\n      <div class=\"row display-table-row\">\r\n          <div class=\"col-md-1 col-xs-2 display-table-cell v-align box\" id=\"navigation\">\r\n              <div class=\"logo\">\r\n                  <a href=\"home.html\"><img src=\"img/logo.jpg\" alt=\"\" class=\"\">\r\n                     \r\n                  </a>\r\n              </div>\r\n      \r\n      <nav class=\"navbar navbar-default\">\r\n    \r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          </button>\r\n         \r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse navi\" id=\"bs-example-navbar-collapse-1\">\r\n          <ul class=\"zx nav navbar-nav\">\r\n            <li class=\"active\"><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span class=\"\">Dashboard</span></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-users fa-2x text-purple\"></i> Team</a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span class=\"\">Users</span></a></li>\r\n            <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i><span class=\"\">Master Settings</span></a>\r\n                        \r\n                          <ul class=\"dropdown-menu\" role=\"menu\" data-animations=\"fadeInDown fadeInRight fadeInUp fadeInLeft\">\r\n                            <li><a href=\"#\">Action</a></li>\r\n                            <li><a href=\"#\">Another action</a></li>\r\n                            <li><a href=\"#\">Something else here</a></li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a></li>\r\n                          </ul>\r\n                        \r\n            </li>\r\n            <li><a href=\"#\"><i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i><span class=\"\">Projects</span></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-stack-exchange\" aria-hidden=\"true\"></i><span class=\"\">Request Management</span></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-sticky-note\" aria-hidden=\"true\"></i><span class=\"\">Report</span></a></li>\r\n          </ul>\r\n         \r\n         \r\n        </div><!-- /.navbar-collapse -->\r\n    \r\n      </nav>\r\n            \r\n\r\n          </div>\r\n          <div class=\"col-md-12 col-xs-12\">\r\n              <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n              <div class=\"row\">\r\n                  <header>\r\n                      \r\n                      <div class=\"col-md-5 pull-right\">\r\n                          <div class=\"header-rightside\">\r\n                              <ul class=\"list-inline header-top pull-right\">\r\n                                  <li class=\"\"><a href=\"#\" class=\"add-project\">Add Project</a></li>\r\n                                  \r\n                                  <li>\r\n                                      <a href=\"#\" class=\"icon-info\">\r\n                                          <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                          <span class=\"label label-primary\">3</span>\r\n                                      </a>\r\n                                  </li>\r\n                                  <li class=\"dropdown\">\r\n                                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                                          <b class=\"caret\"></b></a>\r\n                                      <ul class=\"dropdown-menu\">\r\n                                          <li>\r\n                                              <div class=\"navbar-content\">\r\n                                                  <span>JS Krishna</span>\r\n                                                  <p class=\"text-muted small\">\r\n                                                      me@jskrishna.com\r\n                                                  </p>\r\n                                                  <div class=\"divider\">\r\n                                                  </div>\r\n                                                  <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                              </div>\r\n                                          </li>\r\n                                      </ul>\r\n                                  </li>\r\n                <li><a href=\"#\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a></li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                  </header>\r\n              </div>\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      <div class=\"user-dashboard\">\r\n                  <h1>Hello, JS</h1>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-5 col-sm-5 col-xs-12 gutter\">\r\n\r\n                          <div class=\"sales\">\r\n                              <h2>Your Sale</h2>\r\n\r\n                              <div class=\"btn-group\">\r\n                                  <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                      <span>Period:</span> Last Year\r\n                                  </button>\r\n                                  <div class=\"dropdown-menu\">\r\n                                      <a href=\"#\">2012</a>\r\n                                      <a href=\"#\">2014</a>\r\n                                      <a href=\"#\">2015</a>\r\n                                      <a href=\"#\">2016</a>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-7 col-sm-7 col-xs-12 gutter\">\r\n\r\n                          <div class=\"sales report\">\r\n                              <h2>Report</h2>\r\n                              <div class=\"btn-group\">\r\n                                  <button class=\"btn btn-secondary btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                      <span>Period:</span> Last Year\r\n                                  </button>\r\n                                  <div class=\"dropdown-menu\">\r\n                                      <a href=\"#\">2012</a>\r\n                                      <a href=\"#\">2014</a>\r\n                                      <a href=\"#\">2015</a>\r\n                                      <a href=\"#\">2016</a>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n    </div>\r\n     \r\n     \r\n      </div>\r\n    \r\n             \r\n    \r\n\r\n  </div>\r\n\r\n\r\n  <!-- Modal -->\r\n\r\n <script src=\"http://code.jquery.com/jquery-1.11.1.js\"></script>\r\n<script src=\"js/bootstrap.min.js\"></script>\r\n \r\n\r\n</body>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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