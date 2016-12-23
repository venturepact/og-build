webpackJsonp([9,12],{

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(exports, "SignUpModule", function() { return SignUpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SIGNUP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__index__["a" /* SignupDetailComponent */]
    }
];
var SignUpModule = (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* SignupDetailComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(SIGNUP_ROUTES)
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SignUpModule);
    return SignUpModule;
}());


/***/ }

});
//# sourceMappingURL=9.map