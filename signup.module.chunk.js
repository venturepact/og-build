webpackJsonp(["signup.module"],{

/***/ "./src/app/site/components/+signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_paymentModal_paymentModal_module__ = __webpack_require__("./src/app/shared/paymentModal/paymentModal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./src/app/site/components/+signup/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SIGNUP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: ':email',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'appsumo',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'jvzoo',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'paykickstart',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'dealfuel',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'affiliates',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'appsumo_black',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'webmaster',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'ltd',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'signup-1',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'signup-2',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    },
    {
        path: 'cybermonday',
        component: __WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]
    }
];
var SignUpModule = (function () {
    function SignUpModule() {
    }
    return SignUpModule;
}());
SignUpModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__index__["b" /* SignupDetailComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__shared_paymentModal_paymentModal_module__["a" /* PaymentModalModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(SIGNUP_ROUTES)
        ],
        exports: [],
        providers: []
    })
], SignUpModule);

//# sourceMappingURL=signup.module.js.map

/***/ })

});