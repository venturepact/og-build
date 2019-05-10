(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-site-templates-templateAll-sampleCode-module"],{

/***/ "./src/app/site/templates/templateAll/sampleCode.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/site/templates/templateAll/sampleCode.module.ts ***!
  \*****************************************************************/
/*! exports provided: SampleCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleCodeModule", function() { return SampleCodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/site/templates/pipes/pipes.module.ts");
/* harmony import */ var _template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.module */ "./src/app/site/templates/templateAll/template.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_routes_builder_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/routes/builder.routes */ "./src/app/config/routes/builder.routes.ts");
/* harmony import */ var _sampleCode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sampleCode.component */ "./src/app/site/templates/templateAll/sampleCode.component.ts");








var SampleCodeModule = /** @class */ (function () {
    function SampleCodeModule() {
    }
    SampleCodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_config_routes_builder_routes__WEBPACK_IMPORTED_MODULE_6__["SAMPLE_ROUTES"]), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"]],
            exports: [],
            declarations: [_sampleCode_component__WEBPACK_IMPORTED_MODULE_7__["SampleCodeComponent"]],
            providers: []
        })
    ], SampleCodeModule);
    return SampleCodeModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-site-templates-templateAll-sampleCode-module.js.map