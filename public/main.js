(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/guard/auth.guard */ "./src/app/guard/auth.guard.ts");







var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '404',
        component: _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Authguard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/component/not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");











var configFactory = function (config) {
    return function () { return config.checkToken(); };
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: configFactory,
                    deps: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/not-found/not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notfound-main\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h3>Oops! Page not found</h3>\n      <h1><span>4</span><span>0</span><span>4</span></h1>\n    </div>\n    <h2>we are sorry, but the page you requested was not found</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notfound-main {\n  position: relative;\n  height: 100vh; }\n  .notfound-main .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    max-width: 520px;\n    width: 100%;\n    line-height: 1.4;\n    text-align: center; }\n  .notfound-main .notfound .notfound-404 {\n      position: relative;\n      height: 240px; }\n  .notfound-main .notfound .notfound-404 h3 {\n        position: relative;\n        font-size: 16px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: #262626;\n        margin: 0;\n        letter-spacing: 3px;\n        padding-left: 6px; }\n  .notfound-main .notfound .notfound-404 h1 {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        font-size: 252px;\n        font-weight: 900;\n        margin: 0;\n        color: #262626;\n        text-transform: uppercase;\n        letter-spacing: -40px;\n        margin-left: -20px; }\n  .notfound-main .notfound .notfound-404 h1 span {\n          text-shadow: -8px 0 0 #fff; }\n  .notfound-main .notfound .notfound-404 h2 {\n        font-family: cabin, sans-serif;\n        font-size: 20px;\n        font-weight: 400;\n        text-transform: uppercase;\n        color: #000;\n        margin-top: 0;\n        margin-bottom: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2hhbi93b3JrL3ByaXZhdGUvdGFwLWluLWludGVybnNoYWxhL2FuZ3VsYXItYXV0aGd1YXJkL3NyYy9hcHAvY29tcG9uZW50L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBRmY7SUFLSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBWnRCO01BZU0sa0JBQWtCO01BQ2xCLGFBQWEsRUFBQTtFQWhCbkI7UUFtQlEsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLGlCQUFpQixFQUFBO0VBMUJ6QjtRQThCUSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFFBQVE7UUFDUix3Q0FBZ0M7Z0JBQWhDLGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixrQkFBa0IsRUFBQTtFQXhDMUI7VUEyQ1UsMEJBQTBCLEVBQUE7RUEzQ3BDO1FBZ0RRLDhCQUE4QjtRQUM5QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90Zm91bmQtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAubm90Zm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5ub3Rmb3VuZC00MDQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAyNDBweDtcblxuICAgICAgaDMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgZm9udC1zaXplOiAyNTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC00MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC04cHggMCAwICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogY2FiaW4sIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/component/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/component/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"main-nav\">\n    <ul>\n      <li>\n        <ul>\n          <li><a class=\"active\">about</a></li>\n          <li><a>works</a></li>\n          <li><a>Contact</a></li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</header>\n<section id=\"video\" class=\"home\">\n  <h1>Home Page</h1>\n  <h2>Can only be accessed after logging in</h2>\n</section>\n<section id=\"main-content\">\n  <div class=\"text-intro\">\n    <h2>Hire me?</h2>\n    <h2>I know</h2>\n\n  </div>\n  <div class=\"columns features\">\n    <div class=\"one-third first\">\n      <h3>Angular</h3>\n      <p>Bacon ipsum dolor sit amet cow ham beef, ground round t-bone meatloaf fatback sirloin pork chop swine pig.\n        Venison shoulder prosciutto turkey tri-tip kielbasa andouille ham hock beef ribs. Meatloaf meatball doner filet\n        mignon shankle.</p>\n    </div>\n    <div class=\"one-third\">\n      <h3>HTML5/CSS3</h3>\n      <p>Chuck venison short ribs, pork loin strip steak turducken chicken boudin doner tail cow pork chop spare ribs.</p>\n    </div>\n    <div class=\"one-third\">\n      <h3>Node.js</h3>\n      <p>Capicola prosciutto shankle frankfurter ham hock. Beef ribs t-bone rump, short ribs jerky turkey ham capicola\n        pancetta filet mignon turducken boudin biltong venison shank.</p>\n    </div>\n  </div>\n</section>\n<p class=\"bottom-text\">This is just a placeholder page. Couldn't leave empty for no reason. Reach me at\n  <a href=\"mailto:jsbhullar96@gmail.com?Subject=InternShala%20Tap%20In\" target=\"_top\"> Mail</a>\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);\n.bottom-text {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0; }\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\nfieldset,\nimg {\n  border: 0; }\naddress,\ncaption,\ncite,\ndfn,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal; }\ncaption,\nth {\n  text-align: left; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\nq:before,\nq:after {\n  content: \"\"; }\nabbr,\nacronym {\n  border: 0; }\n::-moz-selection {\n  color: #e00966; }\n::selection {\n  color: #e00966; }\n::-moz-selection {\n  color: #e00966; }\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  line-height: 22px;\n  color: #444444;\n  padding: 0; }\na,\na:link {\n  color: #e00966;\n  text-decoration: none; }\na:hover {\n  color: #000; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-bottom: 10px; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 300; }\nh1 {\n  font-size: 30px;\n  line-height: 1.7em; }\nh2 {\n  line-height: 1.3em; }\nh3 {\n  font-size: 22px;\n  line-height: 1.3em; }\nimg {\n  max-width: 100%; }\n.more {\n  background: url('arrow.gif') no-repeat right 50%;\n  padding-right: 20px; }\n#main-content,\nfooter {\n  margin: 0 auto;\n  max-width: 950px; }\nheader {\n  margin-top: 0;\n  width: 100%;\n  height: 45px;\n  margin-bottom: 40px;\n  background: #1D1D1D;\n  position: fixed;\n  z-index: 999; }\nheader .main-nav {\n  margin-top: 10px;\n  float: right; }\nheader .main-nav li {\n  display: inline-block;\n  margin-right: 40px;\n  list-style: none; }\nheader .main-nav li a {\n  color: #FFF;\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 2px; }\nheader .main-nav li a:hover,\nheader .main-nav li a.active {\n  color: #666; }\n#main-content .text-intro {\n  border-bottom: 1px solid #e5e4e4;\n  float: left;\n  width: 100%;\n  padding: 25px 0;\n  margin-bottom: 40px; }\n#main-content .text-intro h2 {\n  font-size: 40px;\n  color: #606060;\n  text-align: center; }\ndiv.columns {\n  height: 1%; }\ndiv.one-half {\n  width: 48.5%; }\ndiv.one-third {\n  width: 31.3%; }\ndiv.two-third {\n  width: 65.64%; }\ndiv.one-fourth {\n  width: 22.7%; }\ndiv.three-fourth {\n  width: 74.23%; }\ndiv.one-half,\ndiv.one-third,\ndiv.two-third,\ndiv.three-fourth,\ndiv.one-fourth {\n  position: relative;\n  margin-left: 3%;\n  float: left;\n  margin-bottom: 1.55em; }\ndiv.one-half:first-child,\ndiv.one-third:first-child,\ndiv.two-third:first-child,\ndiv.three-fourth:first-child,\ndiv.one-fourth:first-child,\n.first {\n  margin-left: 0 !important;\n  clear: left; }\ndiv.img-first {\n  float: left;\n  opacity: 0.7; }\ndiv.img-second {\n  float: right;\n  opacity: 0.7; }\ndiv.img-first,\ndiv.img-second {\n  transition: all 1s ease-in-out;\n  padding-bottom: 30px; }\ndiv.img-first:hover,\ndiv.img-second:hover {\n  opacity: 1; }\n#main-content .features,\n#main-content .portfolio {\n  clear: both;\n  float: left;\n  margin-bottom: 50px; }\nfooter {\n  clear: both;\n  border-top: 1px solid #e5e4e4;\n  padding: 20px 0; }\nfooter .copyright {\n  float: left;\n  margin-bottom: 30px; }\nfooter .copyright a {\n  color: #444444;\n  font-weight: bold; }\nfooter .copyright a:hover {\n  color: #e00966; }\n#home-head {\n  content: \"\";\n  display: block;\n  min-height: 200px;\n  width: 100%;\n  text-align: center;\n  box-shadow: inset 0 -1px 5px rgba(0, 0, 0, 0.6); }\n#home-head h1 {\n  font-size: 34px;\n  color: #fff;\n  line-height: 0.879em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  text-transform: uppercase;\n  padding-top: 100px; }\n#home-head h1 span {\n  color: #fff;\n  display: block; }\n#video {\n  content: \"\";\n  display: block;\n  min-height: 300px;\n  width: 100%;\n  text-align: center;\n  box-shadow: inset 0 -1px 5px rgba(0, 0, 0, 0.6); }\n#video h1 {\n  font-size: 64px;\n  color: #fff;\n  line-height: 0.879em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  text-transform: uppercase;\n  padding-bottom: 20px;\n  padding-top: 120px; }\n#video h2 {\n  font-size: 13px;\n  color: #FFF;\n  line-height: 1em;\n  letter-spacing: 2px;\n  text-transform: uppercase; }\n#contact-form {\n  padding: 0;\n  overflow: hidden;\n  width: 95%;\n  margin: 0 auto;\n  position: relative; }\n#contact-form textarea {\n  font-weight: 400;\n  font-size: 14px;\n  resize: none;\n  color: #4f4f4f;\n  float: left;\n  margin-top: 0;\n  width: 400px;\n  height: 115px;\n  margin-bottom: 10px;\n  padding: 19px 13px 14px 50px;\n  border: 1px solid #f1f1f1;\n  font-family: \"Open Sans\", sans-serif; }\n#contact-form #message {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }\n#contact-form .text-input {\n  font-weight: 400;\n  font-size: 14px;\n  float: right;\n  display: block;\n  width: 355px;\n  height: 19px;\n  color: #4f4f4f;\n  padding: 13px 13px 13px 51px;\n  margin-bottom: 20px;\n  border: 1px solid #f1f1f1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  font-family: \"Open Sans\", sans-serif; }\n#contact-form .btn-input {\n  float: right;\n  display: block;\n  width: 420px;\n  height: 82px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: hand;\n  font-size: 20px;\n  color: #FFF;\n  background-color: #e00966;\n  font-family: \"Open Sans\", sans-serif;\n  transition: all 0.5s ease-in-out; }\n#contact-form .btn-input:hover {\n  background-color: #e187ae;\n  color: #FFF; }\n#contact-form .crayonico {\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  background-image: url('crayon.png');\n  background-repeat: no-repeat;\n  width: 23px;\n  height: 23px; }\n#contact-form .emailico {\n  position: absolute;\n  left: 495px;\n  top: 15px;\n  background-image: url('email.png');\n  background-repeat: no-repeat;\n  width: 22px;\n  height: 16px; }\n.work,\n.home,\n.contact {\n  background: url('bgwork.jpg');\n  background-size: cover; }\n@media handheld and (max-width: 480px), screen and (max-device-width: 480px), screen and (max-width: 767px) {\n  body {\n    padding: 0; } }\n@media handheld and (max-width: 479px), screen and (max-device-width: 479px), screen and (max-width: 479px) {\n  #contact-form .text-input {\n    float: left; }\n  header {\n    border-bottom: none;\n    position: relative; }\n  #home-head {\n    min-height: 250px; }\n  header .main-nav {\n    width: 100%;\n    margin-left: 0; }\n  header .main-nav ul {\n    width: 100%; }\n  header .main-nav ul li,\n  header .main-nav ul > li.last {\n    display: block;\n    float: none;\n    text-align: center;\n    width: 100%; }\n  header .main-nav ul li a {\n    padding: 4px 0;\n    background: #e4e4e4;\n    display: block;\n    margin-bottom: 4px; }\n  div.columns {\n    width: 100%; }\n  div.one-half,\n  div.one-third,\n  div.two-third,\n  div.three-fourth,\n  div.one-fourth {\n    margin-left: 0;\n    width: 100%; }\n  div.one-third,\n  div.one-fourth,\n  .copyright {\n    width: 95%;\n    float: none;\n    padding: 0 0 0 10px; }\n  .copyright {\n    text-align: center; }\n  #main-content .text-intro h2 {\n    font-size: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2hhbi93b3JrL3ByaXZhdGUvdGFwLWluLWludGVybnNoYWxhL2FuZ3VsYXItYXV0aGd1YXJkL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsNkVBQVk7QUFQWjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtBQUtsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEVFLFNBQVM7RUFDVCxVQUNGLEVBQUE7QUFFQTs7Ozs7Ozs7Ozs7RUFXRSxjQUNGLEVBQUE7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFDRixFQUFBO0FBRUE7O0VBRUUsU0FDRixFQUFBO0FBRUE7Ozs7OztFQU1FLGtCQUFrQjtFQUNsQixtQkFDRixFQUFBO0FBRUE7O0VBRUUsZ0JBQ0YsRUFBQTtBQUVBOzs7Ozs7RUFNRSxlQUFlO0VBQ2YsbUJBQ0YsRUFBQTtBQUVBOztFQUVFLFdBQ0YsRUFBQTtBQUVBOztFQUVFLFNBQ0YsRUFBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBRGhCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVUsRUFBQTtBQUdaOztFQUVFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLFdBQVcsRUFBQTtBQUdiOzs7Ozs7O0VBT0UsbUJBQW1CLEVBQUE7QUFHckI7Ozs7OztFQU1FLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxnREFBdUU7RUFDdkUsbUJBQW1CLEVBQUE7QUFHckI7O0VBRUUsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWSxFQUFBO0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3JCOztFQUVFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxhQUFhLEVBQUE7QUFHZjs7Ozs7RUFLRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTtBQUd2Qjs7Ozs7O0VBTUUseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdkOztFQUVFLDhCQUE4QjtFQUM5QixvQkFBb0IsRUFBQTtBQUd0Qjs7RUFFRSxVQUFVLEVBQUE7QUFHWjs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7QUFHakI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLCtDQUErQyxFQUFBO0FBR2pEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFdBQVc7RUFDWCxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLCtDQUErQyxFQUFBO0FBR2pEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLG9DQUFvQyxFQUFBO0FBR3RDO0VBQ0Usd0NBQXdDLEVBQUE7QUFHMUM7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLG9DQUFvQyxFQUFBO0FBR3RDO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQ0FBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGtDQUF5RDtFQUN6RCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkOzs7RUFHRSw2QkFBb0Q7RUFDcEQsc0JBQXNCLEVBQUE7QUFHeEI7RUFHRTtJQUNFLFVBQVUsRUFBQSxFQUNYO0FBR0g7RUFHRTtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxXQUFXO0lBQ1gsY0FBYyxFQUFBO0VBR2hCO0lBQ0UsV0FBVyxFQUFBO0VBR2I7O0lBRUUsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBR2I7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLFdBQVcsRUFBQTtFQUdiOzs7OztJQUtFLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFHYjs7O0lBR0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNjAwLDcwMCk7XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMFxufVxuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2tcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMFxufVxuXG5maWVsZHNldCxcbmltZyB7XG4gIGJvcmRlcjogMFxufVxuXG5hZGRyZXNzLFxuY2FwdGlvbixcbmNpdGUsXG5kZm4sXG50aCxcbnZhciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbFxufVxuXG5jYXB0aW9uLFxudGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbFxufVxuXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiXG59XG5cbmFiYnIsXG5hY3JvbnltIHtcbiAgYm9yZGVyOiAwXG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNlMDA5NjY7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogI2UwMDk2Njtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgcGFkZGluZzogMDtcbn1cblxuYSxcbmE6bGluayB7XG4gIGNvbG9yOiAjZTAwOTY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS43ZW07XG59XG5cbmgyIHtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5tb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy5naWZcIikgbm8tcmVwZWF0IHJpZ2h0IDUwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI21haW4tY29udGVudCxcbmZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDk1MHB4O1xufVxuXG5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMUQxRDFEO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuaGVhZGVyIC5tYWluLW5hdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaGVhZGVyIC5tYWluLW5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oZWFkZXIgLm1haW4tbmF2IGxpIGEge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5oZWFkZXIgLm1haW4tbmF2IGxpIGE6aG92ZXIsXG5oZWFkZXIgLm1haW4tbmF2IGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbiNtYWluLWNvbnRlbnQgLnRleHQtaW50cm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTRlNDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbiNtYWluLWNvbnRlbnQgLnRleHQtaW50cm8gaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNjA2MDYwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi5jb2x1bW5zIHtcbiAgaGVpZ2h0OiAxJTtcbn1cblxuZGl2Lm9uZS1oYWxmIHtcbiAgd2lkdGg6IDQ4LjUlO1xufVxuXG5kaXYub25lLXRoaXJkIHtcbiAgd2lkdGg6IDMxLjMlO1xufVxuXG5kaXYudHdvLXRoaXJkIHtcbiAgd2lkdGg6IDY1LjY0JTtcbn1cblxuZGl2Lm9uZS1mb3VydGgge1xuICB3aWR0aDogMjIuNyU7XG59XG5cbmRpdi50aHJlZS1mb3VydGgge1xuICB3aWR0aDogNzQuMjMlO1xufVxuXG5kaXYub25lLWhhbGYsXG5kaXYub25lLXRoaXJkLFxuZGl2LnR3by10aGlyZCxcbmRpdi50aHJlZS1mb3VydGgsXG5kaXYub25lLWZvdXJ0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMS41NWVtO1xufVxuXG5kaXYub25lLWhhbGY6Zmlyc3QtY2hpbGQsXG5kaXYub25lLXRoaXJkOmZpcnN0LWNoaWxkLFxuZGl2LnR3by10aGlyZDpmaXJzdC1jaGlsZCxcbmRpdi50aHJlZS1mb3VydGg6Zmlyc3QtY2hpbGQsXG5kaXYub25lLWZvdXJ0aDpmaXJzdC1jaGlsZCxcbi5maXJzdCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGNsZWFyOiBsZWZ0O1xufVxuXG5kaXYuaW1nLWZpcnN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuZGl2LmltZy1zZWNvbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuZGl2LmltZy1maXJzdCxcbmRpdi5pbWctc2Vjb25kIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuZGl2LmltZy1maXJzdDpob3ZlcixcbmRpdi5pbWctc2Vjb25kOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI21haW4tY29udGVudCAuZmVhdHVyZXMsXG4jbWFpbi1jb250ZW50IC5wb3J0Zm9saW8ge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmZvb3RlciB7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTRlNDtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5mb290ZXIgLmNvcHlyaWdodCBhIHtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb290ZXIgLmNvcHlyaWdodCBhOmhvdmVyIHtcbiAgY29sb3I6ICNlMDA5NjY7XG59XG5cbiNob21lLWhlYWQge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4jaG9tZS1oZWFkIGgxIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDAuODc5ZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbiNob21lLWhlYWQgaDEgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3ZpZGVvIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuI3ZpZGVvIGgxIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDAuODc5ZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xufVxuXG4jdmlkZW8gaDIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jY29udGFjdC1mb3JtIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcmVzaXplOiBub25lO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTlweCAxM3B4IDE0cHggNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWN0LWZvcm0gI21lc3NhZ2Uge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4jY29udGFjdC1mb3JtIC50ZXh0LWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzU1cHg7XG4gIGhlaWdodDogMTlweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIHBhZGRpbmc6IDEzcHggMTNweCAxM3B4IDUxcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jY29udGFjdC1mb3JtIC5idG4taW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogODJweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMDk2NjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jY29udGFjdC1mb3JtIC5idG4taW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE4N2FlO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuI2NvbnRhY3QtZm9ybSAuY3JheW9uaWNvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3JheW9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuI2NvbnRhY3QtZm9ybSAuZW1haWxpY28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ5NXB4O1xuICB0b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZW1haWwucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4ud29yayxcbi5ob21lLFxuLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jnd29yay5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBoYW5kaGVsZCBhbmQgKG1heC13aWR0aDo0ODBweCksXG5zY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOjQ4MHB4KSxcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbkBtZWRpYSBoYW5kaGVsZCBhbmQgKG1heC13aWR0aDo0NzlweCksXG5zY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOjQ3OXB4KSxcbnNjcmVlbiBhbmQgKG1heC13aWR0aDo0NzlweCkge1xuICAjY29udGFjdC1mb3JtIC50ZXh0LWlucHV0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjaG9tZS1oZWFkIHtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIGhlYWRlciAubWFpbi1uYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgaGVhZGVyIC5tYWluLW5hdiB1bCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBoZWFkZXIgLm1haW4tbmF2IHVsIGxpLFxuICBoZWFkZXIgLm1haW4tbmF2IHVsPmxpLmxhc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGhlYWRlciAubWFpbi1uYXYgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cblxuICBkaXYuY29sdW1ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBkaXYub25lLWhhbGYsXG4gIGRpdi5vbmUtdGhpcmQsXG4gIGRpdi50d28tdGhpcmQsXG4gIGRpdi50aHJlZS1mb3VydGgsXG4gIGRpdi5vbmUtZm91cnRoIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGRpdi5vbmUtdGhpcmQsXG4gIGRpdi5vbmUtZm91cnRoLFxuICAuY29weXJpZ2h0IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIH1cblxuICAuY29weXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjbWFpbi1jb250ZW50IC50ZXh0LWludHJvIGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header-main\">\n    <h1>Classy Login Form</h1>\n    <div class=\"header-left-bottom agileinfo\">\n      <!-- The form -->\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required />\n        <input type=\"password\" value=\"Password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\n          required />\n        <div class=\"remember\">\n          <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" [(ngModel)]=\"user.rememberMe\">\n            <i> </i>\n            Remember me</label>\n          <div class=\"forgot\">\n            <h6>\n              <a>Forgot Password?</a>\n            </h6>\n          </div>\n          <div class=\"clear\"> </div>\n        </div>\n        <input type=\"submit\" [ngClass]=\"loginForm.invalid ? 'disabled': ''\" value=\"Login\">\n        <!-- Error messages -->\n        <span [hidden]=\"!loginForm.dirty\">\n          <span [hidden]=\"!loginForm.invalid\">\n            <span [hidden]=\"!(loginForm.controls.name?.dirty && loginForm.controls.name?.invalid)\">\n              Credentials required. Use 'admin' for username.\n            </span>\n            <span [hidden]=\"!(loginForm.controls.password?.dirty && loginForm.controls.password?.invalid)\">\n              Use 'password' for password\n            </span>\n          </span>\n        </span>\n      </form>\n      <!-- The social logins. That do nothing -->\n      <div class=\"sign-up\">\n        <h2>or</h2>\n      </div>\n      <div class=\"header-social wthree\">\n        <a class=\"face\">\n          <h5>Facebook</h5>\n        </a>\n        <a class=\"twitt\">\n          <h5>Twitter</h5>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright\">\n    <p>© 2016 Classy Login Form. All rights reserved | Design by <a href=\"http://w3layouts.com/\" target=\"_blank\">\n        W3layouts </a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled {\n  pointer-events: none;\n  opacity: 0.5; }\n\n.header {\n  background: url('banner1.jpg') no-repeat;\n  height: 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n  color: #fff; }\n\n.header .header-main {\n    width: 35%;\n    margin: 0 auto;\n    padding-top: 30px; }\n\n.header .header-main h1 {\n      font-size: 64px;\n      color: #ffffff;\n      text-align: center;\n      padding-bottom: 0.8em; }\n\n.header .header-main .header-left-bottom input[type='text'] {\n      background: url('m.png') no-repeat 0px 5px;\n      outline: none;\n      font-size: 15px;\n      font-weight: 400;\n      color: #fff;\n      padding: 12px 13px 20px 44px;\n      border: none;\n      border-bottom: 1px solid #fff;\n      width: 87%;\n      margin: 0 0 20px;\n      display: inline-block; }\n\n.header .header-main .header-left-bottom input[type='password'] {\n      background: url('l.png') no-repeat 0px 5px;\n      outline: none;\n      font-size: 15px;\n      font-weight: 400;\n      color: #fff;\n      border: none;\n      border-bottom: 1px solid #fff;\n      padding: 12px 13px 20px 44px;\n      width: 87%;\n      margin: 0 0 20px;\n      display: inline-block; }\n\n.header .header-main .header-left-bottom input[type='submit'] {\n      background: #ff3366;\n      color: #fff;\n      font-size: 26px;\n      padding: 0.3em 1.2em;\n      width: 100%;\n      font-weight: 500;\n      transition: 0.5s all;\n      display: inline-block;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      border-radius: 3px;\n      font-family: 'Roboto Condensed', sans-serif; }\n\n.header .header-main .header-left-bottom input[type='submit']:hover {\n        background: #b5183f;\n        transition: 0.5s all; }\n\n.header .header-main .header-left-bottom .remember {\n      margin: 1em 0em; }\n\n.header .header-main .header-left-bottom .remember .checkbox {\n        position: relative;\n        display: block;\n        float: left;\n        margin-bottom: 4px;\n        font-size: 1.2em;\n        line-height: 27px;\n        cursor: pointer;\n        position: relative;\n        font-size: 0.95em;\n        font-weight: normal;\n        color: #efe8e8;\n        padding: 0em 0.5em 0em 2.5em; }\n\n.header .header-main .header-left-bottom .remember .checkbox i {\n          font-size: 20px;\n          font-weight: 400;\n          color: #999;\n          font-style: normal;\n          position: absolute;\n          bottom: 5px;\n          left: 2px;\n          display: block;\n          width: 18px;\n          height: 18px;\n          outline: none;\n          background: #fff;\n          border: 1px solid #6a67ce; }\n\n.header .header-main .header-left-bottom .remember .checkbox input {\n          position: absolute;\n          left: -9999px; }\n\n.header .header-main .header-left-bottom .remember .checkbox input + i:after {\n            content: '';\n            background: url('tick.png') no-repeat 5px 5px;\n            top: -1px;\n            left: -1px;\n            width: 15px;\n            height: 15px;\n            font: normal 12px/16px FontAwesome;\n            text-align: center;\n            position: absolute;\n            opacity: 0;\n            transition: opacity 0.1s; }\n\n.header .header-main .header-left-bottom .remember .checkbox input:checked + i:after {\n            opacity: 1; }\n\n.header .header-main .header-left-bottom .remember .forgot {\n        float: right; }\n\n.header .header-main .header-left-bottom .remember .forgot h6 {\n          font-size: 1em;\n          margin-top: 0.2em; }\n\n.header .header-main .header-left-bottom .remember .forgot h6 a {\n            color: #efe8e8; }\n\n.header .header-main .header-left-bottom .remember .forgot h6 a:hover {\n              color: #ff3366; }\n\n.header .header-main .header-left-bottom .sign-up {\n      margin: 2em 0; }\n\n.header .header-main .header-left-bottom .sign-up h2 {\n        font-size: 22px;\n        color: #fff;\n        font-family: 'Roboto Condensed', sans-serif;\n        text-align: center;\n        background: #ff3366;\n        width: 40px;\n        height: 40px;\n        line-height: 1.7em;\n        border-radius: 50%;\n        margin: 0 auto; }\n\n.header .header-main .header-left-bottom .header-social {\n      text-align: center;\n      display: flex;\n      justify-content: center; }\n\n.header .header-main .header-left-bottom .header-social a.face {\n        background: url('fac.png') no-repeat 12px 9px #3b62a3;\n        color: #fff;\n        font-size: 16px;\n        font-weight: 400;\n        padding: 0 2em;\n        width: 34%;\n        text-align: left;\n        margin-right: 4%;\n        transition: 0.5s all;\n        display: inline-block;\n        border-radius: 3px;\n        font-family: 'Roboto Condensed', sans-serif; }\n\n.header .header-main .header-left-bottom .header-social a.face:hover {\n          background: url('fac.png') no-repeat 12px 9px #0e387c;\n          transition: 0.5s all; }\n\n.header .header-main .header-left-bottom .header-social a.twitt {\n        background: url('twitter.png') no-repeat 12px 9px #19b0e7;\n        color: #fff;\n        font-size: 16px;\n        font-weight: 400;\n        padding: 0 2.5em;\n        width: 30%;\n        text-align: left;\n        transition: 0.5s all;\n        display: inline-block;\n        cursor: pointer;\n        outline: none;\n        border-radius: 3px;\n        font-family: 'Roboto Condensed', sans-serif; }\n\n.header .header-main .header-left-bottom .header-social a.twitt:hover {\n          background: url('twitter.png') no-repeat 12px 9px #0192c7;\n          transition: 0.5s all; }\n\n.header h5 {\n    border-left: 1px dotted #c3c3c3;\n    padding: 0.5em; }\n\n.header .copyright {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center; }\n\n@media (max-width: 1024px) {\n  .header .header-main {\n    width: 48%; } }\n\n@media (max-width: 768px) {\n  .header .header-main {\n    width: 75%;\n    padding: 60px 0px 12px; }\n    .header .header-main h1 {\n      font-size: 42px; }\n    .header .header-main .header-left-bottom input[type='text'], .header .header-main .header-left-bottom input[type='password'] {\n      width: 80%; }\n    .header .header-main .header-left-bottom .header-social a.twitt {\n      width: 21%; }\n    .header .header-main .header-left-bottom .header-social a.face {\n      width: 27%; }\n    .header .header-main .header-left-bottom .sign-up {\n      margin: 1em 0; }\n    .header .header-main .header-left-bottom .header-left-bottom input[type='submit'] {\n      font-size: 20px; }\n    .header .header-main .header-left-bottom .sign-up h2 {\n      font-size: 18px;\n      width: 36px;\n      height: 36px;\n      line-height: 1.9em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2hhbi93b3JrL3ByaXZhdGUvdGFwLWluLWludGVybnNoYWxhL2FuZ3VsYXItYXV0aGd1YXJkL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBSWQ7RUFDRSx3Q0FBK0Q7RUFDL0QsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFOYjtJQVNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7O0FBWHJCO01BY00sZUFBZTtNQUNmLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUE7O0FBakIzQjtNQXVCVSwwQ0FBaUU7TUFDakUsYUFBYTtNQUNiLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLDRCQUE0QjtNQUM1QixZQUFZO01BQ1osNkJBQTZCO01BQzdCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7O0FBakMvQjtNQXFDVSwwQ0FBaUU7TUFDakUsYUFBYTtNQUNiLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVk7TUFDWiw2QkFBNkI7TUFDN0IsNEJBQTRCO01BQzVCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7O0FBL0MvQjtNQW1EVSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixhQUFhO01BQ2IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwyQ0FBMkMsRUFBQTs7QUEvRHJEO1FBa0VZLG1CQUFtQjtRQUNuQixvQkFBb0IsRUFBQTs7QUFuRWhDO01BeUVRLGVBQWUsRUFBQTs7QUF6RXZCO1FBNEVVLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsNEJBQTRCLEVBQUE7O0FBdkZ0QztVQTBGWSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxTQUFTO1VBQ1QsY0FBYztVQUNkLFdBQVc7VUFDWCxZQUFZO1VBQ1osYUFBYTtVQUNiLGdCQUFnQjtVQUNoQix5QkFBeUIsRUFBQTs7QUF0R3JDO1VBd0hZLGtCQUFrQjtVQUNsQixhQUFhLEVBQUE7O0FBekh6QjtZQTJHYyxXQUFXO1lBQ1gsNkNBQW9FO1lBQ3BFLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixrQ0FBa0M7WUFDbEMsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1Ysd0JBQXdCLEVBQUE7O0FBckh0QztZQTRIYyxVQUFVLEVBQUE7O0FBNUh4QjtRQWtJVSxZQUFZLEVBQUE7O0FBbEl0QjtVQXFJWSxjQUFjO1VBQ2QsaUJBQWlCLEVBQUE7O0FBdEk3QjtZQXlJYyxjQUFjLEVBQUE7O0FBekk1QjtjQTRJZ0IsY0FBYyxFQUFBOztBQTVJOUI7TUFvSlEsYUFBYSxFQUFBOztBQXBKckI7UUF1SlUsZUFBZTtRQUNmLFdBQVc7UUFDWCwyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYyxFQUFBOztBQWhLeEI7TUFxS1Esa0JBQWtCO01BQ2xCLGFBQWE7TUFDYix1QkFBdUIsRUFBQTs7QUF2Sy9CO1FBMktZLHFEQUE0RTtRQUM1RSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsMkNBQTJDLEVBQUE7O0FBdEx2RDtVQXlMYyxxREFBNEU7VUFDNUUsb0JBQW9CLEVBQUE7O0FBMUxsQztRQStMWSx5REFBZ0Y7UUFDaEYsV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQiwyQ0FBMkMsRUFBQTs7QUEzTXZEO1VBOE1jLHlEQUFnRjtVQUNoRixvQkFBb0IsRUFBQTs7QUEvTWxDO0lBeU5JLCtCQUErQjtJQUMvQixjQUFjLEVBQUE7O0FBMU5sQjtJQThOSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0U7SUFFSSxVQUFVLEVBQUEsRUFDWDs7QUFJTDtFQUNFO0lBRUksVUFBVTtJQUNWLHNCQUFzQixFQUFBO0lBSDFCO01BTU0sZUFBZSxFQUFBO0lBTnJCO01BZ0JVLFVBQVUsRUFBQTtJQWhCcEI7TUFzQlUsVUFBVSxFQUFBO0lBdEJwQjtNQTBCVSxVQUFVLEVBQUE7SUExQnBCO01BK0JRLGFBQWEsRUFBQTtJQS9CckI7TUFtQ1EsZUFBZSxFQUFBO0lBbkN2QjtNQXVDUSxlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5qcGcnKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcblxuICAuaGVhZGVyLW1haW4ge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWxlZnQtYm90dG9tIHtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgJlt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tLnBuZycpIG5vLXJlcGVhdCAwcHggNXB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxM3B4IDIwcHggNDRweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDg3JTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgICZbdHlwZT0ncGFzc3dvcmQnXSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2wucG5nJykgbm8tcmVwZWF0IDBweCA1cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxM3B4IDIwcHggNDRweDtcbiAgICAgICAgICB3aWR0aDogODclO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmMzM2NjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgcGFkZGluZzogMC4zZW0gMS4yZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjUxODNmO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZW1lbWJlciB7XG4gICAgICAgIG1hcmdpbjogMWVtIDBlbTtcblxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNlZmU4ZTg7XG4gICAgICAgICAgcGFkZGluZzogMGVtIDAuNWVtIDBlbSAyLjVlbTtcblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmE2N2NlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICtpOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90aWNrLnBuZycpIG5vLXJlcGVhdCA1cHggNXB4O1xuICAgICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCAxMnB4LzE2cHggRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IC05OTk5cHg7XG5cbiAgICAgICAgICAgICY6Y2hlY2tlZCtpOmFmdGVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZ290IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMmVtO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZmU4ZTg7XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjMzNjY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNpZ24tdXAge1xuICAgICAgICBtYXJnaW46IDJlbSAwO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmMzM2NjtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLXNvY2lhbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgJi5mYWNlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWMucG5nJykgbm8tcmVwZWF0IDEycHggOXB4ICMzYjYyYTM7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWMucG5nJykgbm8tcmVwZWF0IDEycHggOXB4ICMwZTM4N2M7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYudHdpdHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nJykgbm8tcmVwZWF0IDEycHggOXB4ICMxOWIwZTc7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIuNWVtO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nJykgbm8tcmVwZWF0IDEycHggOXB4ICMwMTkyYzc7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZvciBzb2NpYWwgaWNvbnNcbiAgaDUge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNjM2MzYzM7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cblxuICAuY29weXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyIHtcbiAgICAuaGVhZGVyLW1haW4ge1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIC5oZWFkZXItbWFpbiB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgICAgcGFkZGluZzogNjBweCAwcHggMTJweDtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICB9XG5cblxuICAgICAgLmhlYWRlci1sZWZ0LWJvdHRvbSB7XG5cbiAgICAgICAgaW5wdXQge1xuXG4gICAgICAgICAgJlt0eXBlPSd0ZXh0J10sXG4gICAgICAgICAgJlt0eXBlPSdwYXNzd29yZCddIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci1zb2NpYWwgYSB7XG4gICAgICAgICAgJi50d2l0dCB7XG4gICAgICAgICAgICB3aWR0aDogMjElO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZmFjZSB7XG4gICAgICAgICAgICB3aWR0aDogMjclO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWduLXVwIHtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci1sZWZ0LWJvdHRvbSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZ24tdXAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOWVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/authentication.service */ "./src/app/services/authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = {};
        if (this.authService.checkToken) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.error(form);
        if (form.invalid) {
            return;
        }
        // this.authService.checkToken().then(value => console.error(value));
        this.authService
            .login(this.user)
            .then(function (value) {
            if (value.status) {
                _this.router.navigate(['/']);
            }
            else {
                // Set error message
                alert('Invalid credentials');
            }
        })
            .catch(function (err) { return alert('Error occurred'); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var token = this.authenticationService.getToken;
        if (token) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/login']);
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AUTH_TOKEN = 'auth-token';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthenticationService.prototype, "getToken", {
        get: function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .post('api/login', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user))
                .toPromise()
                .then(function (res) {
                var success = res.success, message = res.message, token = res.token;
                if (success) {
                    _this.token = token;
                    localStorage.setItem(AUTH_TOKEN, token);
                    resolve({ status: true });
                }
                else {
                    resolve({ status: false, message: message });
                    _this.logout();
                }
            })
                .catch(function (err) {
                reject({ status: false, message: 'Invalid credentials. Use "admin" and "password" ' });
                _this.logout();
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(AUTH_TOKEN);
        this.token = null;
    };
    AuthenticationService.prototype.checkToken = function () {
        var _this = this;
        var token = localStorage.getItem(AUTH_TOKEN);
        if (!token) {
            return Promise.resolve(false);
        }
        return new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: "Bearer " + token
            });
            _this.http
                .get('api/checkToken', {
                headers: headers
            })
                .toPromise()
                .then(function (res) {
                var success = res.success;
                if (success) {
                    _this.token = token;
                    resolve(true);
                }
                else {
                    resolve(false);
                    _this.logout();
                }
            })
                .catch(function (err) { return reject('Some error occured'); });
        });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jashan/work/private/tap-in-internshala/angular-authguard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map