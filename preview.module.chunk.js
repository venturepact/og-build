webpackJsonp(["preview.module"],{

/***/ "./src/app/site/templates/templateAll/preview.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModule", function() { return PreviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__("./src/app/site/templates/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_component__ = __webpack_require__("./src/app/site/templates/templateAll/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_module__ = __webpack_require__("./src/app/site/templates/templateAll/template.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_routes_builder_routes__ = __webpack_require__("./src/app/config/routes/builder.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__builder_services_builder_service__ = __webpack_require__("./src/app/site/+builder/services/builder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PreviewModule = (function () {
    function PreviewModule() {
    }
    return PreviewModule;
}());
PreviewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__config_routes_builder_routes__["b" /* PREVIEW_ROUTES */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_4__template_module__["a" /* TemplateModule */]],
        exports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__preview_component__["a" /* PreviewComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__builder_services_builder_service__["a" /* BuilderService */]]
    })
], PreviewModule);

//# sourceMappingURL=preview.module.js.map

/***/ })

});