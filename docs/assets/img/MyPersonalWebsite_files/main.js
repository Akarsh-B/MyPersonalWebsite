(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'MyPersonalWebsite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var ng_scroll_spy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-scroll-spy */ "./node_modules/ng-scroll-spy/__ivy_ngcc__/fesm2015/ng-scroll-spy.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__["NgxPageScrollModule"],
            ng_scroll_spy__WEBPACK_IMPORTED_MODULE_8__["ScrollSpyModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__["NgxPageScrollModule"],
        ng_scroll_spy__WEBPACK_IMPORTED_MODULE_8__["ScrollSpyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_7__["NgxPageScrollModule"],
                    ng_scroll_spy__WEBPACK_IMPORTED_MODULE_8__["ScrollSpyModule"],
                ],
                providers: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class FooterComponent {
    constructor() {
        // Social Media Icons
        this.faTwitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFaceBookIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faLinkedInIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedinIn"];
        this.faGithubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faKaggleIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faKaggle"];
        this.mapMarkerAltIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"];
        this.mailIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelopeOpenText"];
        this.mobileIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMobileAlt"];
        // Social Media URL's
        this.twitterURL = 'https://twitter.com/iamakarshb';
        this.faceBookURl = 'https://www.facebook.com/Akarsh.Balasubramanyam';
        this.linkedInURL = 'https://www.linkedin.com/in/akarsh-b/';
        this.gitHubURL = 'https://github.com/Akarsh-B';
        this.kaggleURL = 'https://www.kaggle.com/akarshb';
        // Contact Details
        this.personalEmail = 'akarshbalu@gmail.com';
        this.uicEmail = 'abalas26@uic.edu';
        this.contactNumber = '+1 (773) 744-4763';
        this.addressLine1 = '914 #1 South Oakley Boulevard';
        this.cityState = 'Chicago - IL';
        this.country = 'United States of America';
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 19, consts: [["id", "contact", 1, "contact-section", "bg-black"], [1, "container"], [1, "row"], [1, "col-md-4", "mb-3", "mb-md-0"], [1, "card", "py-4", "h-100"], [1, "card-body", "text-center"], ["size", "md", 1, "mb-2", "text-contact", 3, "icon"], [1, "text-uppercase", "m-0"], [1, "my-4"], [1, "small", "text-black-50"], ["href", "mailto:akarshbalu@gmail.com"], ["href", "mailto:abalas26@uic.edu"], [1, "social", "d-flex", "justify-content-center"], ["target", "_blank", 1, "mx-2", 3, "href"], ["size", "lg", 3, "icon"], [1, "footer", "bg-black", "small", "text-center", "text-white-50"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Copyright \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.mapMarkerAltIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.addressLine1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cityState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.mailIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.uicEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.mobileIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.faceBookURl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFaceBookIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedInURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedInIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.gitHubURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithubIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.kaggleURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faKaggleIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".contact-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%), url('bg-contact.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n  padding-top: 5rem;\n}\n\n.text-contact[_ngcontent-%COMP%] {\n  color: #368bff !important;\n}\n\n.contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 0.25rem solid #368bff;\n}\n\n.contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-family: \"Varela Round\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  text-transform: uppercase;\n  letter-spacing: 0.15rem;\n}\n\n.contact-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #368bff;\n  border-width: 0.25rem;\n  width: 3rem;\n}\n\n.contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n\n.contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 3rem;\n  width: 3rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  line-height: 3rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.contact-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n\n.bg-black[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2Fyc2hiL0RvY3VtZW50cy9NeVByb2plY3RzL015UGVyc29uYWxXZWJzaXRlL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRHQUFBO0VBSUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxxTUFBQTtFQUdBLHlCQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDSkY7O0FET0E7RUFDRSwrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSA3NSUpLFxuICAgIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmctY29udGFjdC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xufVxuXG4udGV4dC1jb250YWN0IHtcbiAgY29sb3I6ICMzNjhiZmYgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjMzY4YmZmO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIGg0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBociB7XG4gIGJvcmRlci1jb2xvcjogIzM2OGJmZjtcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xuICB3aWR0aDogM3JlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5jb250YWN0LXNlY3Rpb24gLnNvY2lhbCBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiA1cmVtIDA7XG59XG5cbi5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cbiIsIi5jb250YWN0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSA3NSUpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLWNvbnRhY3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cblxuLnRleHQtY29udGFjdCB7XG4gIGNvbG9yOiAjMzY4YmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0LXNlY3Rpb24gLmNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzM2OGJmZjtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBociB7XG4gIGJvcmRlci1jb2xvcjogIzM2OGJmZjtcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xuICB3aWR0aDogM3JlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5jb250YWN0LXNlY3Rpb24gLnNvY2lhbCBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiA1cmVtIDA7XG59XG5cbi5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class IntroductionComponent {
    constructor(footer) {
        this.footer = footer;
        this.fileIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileDownload"];
        this.handDownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandPointDown"];
        // Social Media Icons
        this.faTwitterIcon = this.footer.faTwitterIcon;
        this.faFaceBookIcon = this.footer.faFaceBookIcon;
        this.faLinkedInIcon = this.footer.faLinkedInIcon;
        this.faGithubIcon = this.footer.faGithubIcon;
        this.faKaggleIcon = this.footer.faKaggleIcon;
        // Social Media URL's
        this.twitterURL = this.footer.twitterURL;
        this.faceBookURl = this.footer.faceBookURl;
        this.linkedInURL = this.footer.linkedInURL;
        this.gitHubURL = this.footer.gitHubURL;
        this.kaggleURL = this.footer.kaggleURL;
    }
    ngOnInit() { }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 27, vars: 12, consts: [["id", "introduction", 1, "masthead"], [1, "container", "d-flex", "h-100", "align-items-center"], [1, "mx-auto", "text-center"], ["src", "../../assets/img/profile.jpg", "alt", "", 1, "img-thumbnail", "rounded-circle", "mx-auto", "d-block"], [1, "mx-auto", "my-0"], [1, "mx-auto", "my-0", "pb-5"], ["href", "#about", 1, "btn", "btn-primary", "js-scroll-trigger", "mr-5", "btn-lg"], [1, "pr-2"], ["size", "2x", 3, "icon"], ["href", "#about", 1, "btn", "btn-primary", "btn-lg", "js-scroll-trigger"], [1, "social", "d-flex", "justify-content-center", "pt-4"], ["target", "_blank", 1, "mx-2", 3, "href"], ["size", "lg", 3, "icon"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Akarsh Balasubramanyam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I'm a Student, Programmer and Data Science Enthusiast.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fileIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.handDownIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.faceBookURl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFaceBookIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedInURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedInIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.gitHubURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithubIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.kaggleURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faKaggleIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".img-thumbnail {\n  height: 200px;\n  background-color: #368bff;\n  opacity: 0.7;\n}\n\n.pr-2[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n\n.masthead[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  min-height: 35rem;\n  padding: 15rem 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%), url('bg-masthead.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n\n.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 2.5rem !important;\n  letter-spacing: 0.2rem !important;\n  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n\n.masthead[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-family: \"Varela Round\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1.5rem !important;\n  line-height: 2.5rem !important;\n  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text !important;\n}\n\n@media (min-width: 768px) {\n  .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    line-height: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n  .masthead[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0;\n  }\n\n  .masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6.5rem;\n    letter-spacing: 0.8rem;\n  }\n\n  .masthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 30rem;\n    font-size: 1.25rem;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #368bff;\n  border-color: #368bff;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #368bdd;\n  border-color: #368bdd;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #368bcc;\n  border-color: #368bcc;\n  box-shadow: 0 0 0 0.2rem rgba(54, 139, 204, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2Fyc2hiL0RvY3VtZW50cy9NeVByb2plY3RzL015UGVyc29uYWxXZWJzaXRlL3NyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkhBQUE7RUFLQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UscU1BQUE7RUFHQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EscU1BQUE7RUFZQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNoQkY7O0FEbUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VDakJGOztFRG9CQTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQ2pCRjs7RURvQkE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VDakJGO0FBQ0Y7O0FEb0JBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNsQkY7O0FEcUJBOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5pbWctdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2OGJmZjtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucHItMiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uc29jaWFsIGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uc29jaWFsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXN0aGVhZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMzVyZW07XG4gIHBhZGRpbmc6IDE1cmVtIDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNSkgNzUlLFxuICAgICAgIzAwMDAwMCAxMDAlKSxcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLW1hc3RoZWFkLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hc3RoZWFkIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuICAgIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLm1hc3RoZWFkIGgzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCIsXG4gICAgLWFwcGxlLXN5c3RlbSxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLFxuICAgIFJvYm90byxcbiAgICBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgQXJpYWwsXG4gICAgc2Fucy1zZXJpZixcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG4gICAgXCJTZWdvZSBVSSBFbW9qaVwiLFxuICAgIFwiU2Vnb2UgVUkgU3ltYm9sXCIsXG4gICAgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1hc3RoZWFkIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tYXN0aGVhZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm1hc3RoZWFkIGgxIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNi41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhyZW07XG4gIH1cblxuICAubWFzdGhlYWQgaDIge1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4YmZmO1xuICBib3JkZXItY29sb3I6ICMzNjhiZmY7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4YmRkO1xuICBib3JkZXItY29sb3I6ICMzNjhiZGQ7XG59XG5cbi5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeS5mb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY4YmNjO1xuICBib3JkZXItY29sb3I6ICMzNjhiY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDU0LCAxMzksIDIwNCwgMC41KTtcbn1cbiIsIjo6bmctZGVlcCAuaW1nLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjhiZmY7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnByLTIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLnNvY2lhbCBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnNvY2lhbCBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnNvY2lhbCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFzdGhlYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDM1cmVtO1xuICBwYWRkaW5nOiAxNXJlbSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSA3NSUsICMwMDAwMDAgMTAwJSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmctbWFzdGhlYWQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFzdGhlYWQgaDEge1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5tYXN0aGVhZCBoMyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1hc3RoZWFkIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWFzdGhlYWQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5tYXN0aGVhZCBoMSB7XG4gICAgZm9udC1zaXplOiA2LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDYuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xuICB9XG5cbiAgLm1hc3RoZWFkIGgyIHtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjhiZmY7XG4gIGJvcmRlci1jb2xvcjogIzM2OGJmZjtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjhiZGQ7XG4gIGJvcmRlci1jb2xvcjogIzM2OGJkZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjhiY2M7XG4gIGJvcmRlci1jb2xvcjogIzM2OGJjYztcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTQsIDEzOSwgMjA0LCAwLjUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.scss'],
            }]
    }], function () { return [{ type: _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
/* harmony import */ var ng_scroll_spy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-scroll-spy */ "./node_modules/ng-scroll-spy/__ivy_ngcc__/fesm2015/ng-scroll-spy.js");





const _c0 = function (a0) { return { "navbar-shrink": a0 }; };
class NavbarComponent {
    constructor() {
        this.fullName = 'Akarsh Balasubramanyam';
        this.Scrolled = false;
    }
    scrollEvent() {
        window.pageYOffset >= 100
            ? (this.Scrolled = true)
            : (this.Scrolled = false);
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 15, vars: 4, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container"], ["pageScroll", "", "href", "#introduction", 1, "navbar-brand", "js-scroll-trigger"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], ["scroll-spy", "", 1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["pageScroll", "", "href", "#about", 1, "nav-link", "js-scroll-trigger"], ["pageScroll", "", "href", "#projects", 1, "nav-link", "js-scroll-trigger"], ["pageScroll", "", "href", "#contact", 1, "nav-link", "js-scroll-trigger"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.Scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fullName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxPageScrollDirective"], ng_scroll_spy__WEBPACK_IMPORTED_MODULE_3__["ScrollSpyDirective"]], styles: ["#mainNav[_ngcontent-%COMP%] {\n  min-height: 3.5rem;\n  background-color: #fff;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  font-size: 80%;\n  padding: 0.75rem;\n  color: #368bff;\n  border: 1px solid #368bff;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 700;\n  padding: 0.9rem 0;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  color: fade(#fff, 80%);\n  outline: none;\n  background-color: transparent;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: transparent;\n}\n\n@media (min-width: 992px) {\n  #mainNav[_ngcontent-%COMP%] {\n    padding-top: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n    background-color: transparent;\n    transition: background-color 0.3s ease-in-out;\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    transition: none;\n    padding: 2rem 1.5rem;\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.75);\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n    color: #fff;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%] {\n    background-color: #fff;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: #000000;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #000000;\n    padding: 1.5rem 1.5rem 1.25rem;\n    border-bottom: 0.25rem solid transparent;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #368bff;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n    color: #368bff;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n    color: #368bff;\n    outline: none;\n    border-bottom: 0.25rem solid #368bff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2Fyc2hiL0RvY3VtZW50cy9NeVByb2plY3RzL015UGVyc29uYWxXZWJzaXRlL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7SUFDQSw2Q0FBQTtFQ0NGOztFREVBO0lBQ0UsaUJBQUE7SUFDQSwrQkFBQTtFQ0NGOztFREVBO0lBQ0UsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLCtCQUFBO0VDQ0Y7O0VERUE7SUFDRSxnQ0FBQTtFQ0NGOztFREVBO0lBQ0UsV0FBQTtFQ0NGOztFREVBO0lBQ0Usc0JBQUE7RUNDRjs7RURFQTtJQUNFLGNBQUE7RUNDRjs7RURFQTtJQUNFLGNBQUE7SUFDQSw4QkFBQTtJQUNBLHdDQUFBO0VDQ0Y7O0VERUE7SUFDRSxjQUFBO0VDQ0Y7O0VERUE7SUFDRSxjQUFBO0VDQ0Y7O0VERUE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLG9DQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbk5hdiB7XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGNvbG9yOiAjMzY4YmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzY4YmZmO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuOXJlbSAwO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogZmFkZSgjZmZmLCA4MCUpO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSxcbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXYtbGluayB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG5cbiAgI21haW5OYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXYtbGluazphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluayB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMzNjhiZmY7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazphY3RpdmUge1xuICAgIGNvbG9yOiAjMzY4YmZmO1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzM2OGJmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzM2OGJmZjtcbiAgfVxufVxuIiwiI21haW5OYXYge1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBjb2xvcjogIzM2OGJmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM2OGJmZjtcbn1cblxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjlyZW0gMDtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGZhZGUoI2ZmZiwgODAlKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTphY3RpdmUsXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNtYWluTmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cblxuICAjbWFpbk5hdiAubmF2LWxpbmsge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIH1cblxuICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMS4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMzY4YmZmO1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6YWN0aXZlIHtcbiAgICBjb2xvcjogIzM2OGJmZjtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMzNjhiZmY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkICMzNjhiZmY7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return []; }, { scrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/akarshb/Documents/MyProjects/MyPersonalWebsite/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/akarshb/Documents/MyProjects/MyPersonalWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map