(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-site-templates-templateAll-preview-layoutPreview-layout-preview-module"],{

/***/ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LayoutPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPreviewComponent", function() { return LayoutPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/feature-access.service */ "./src/app/shared/services/feature-access.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




// import { ViewEncapsulation } from '@angular/core';

var LayoutPreviewComponent = /** @class */ (function () {
    function LayoutPreviewComponent(_featureAuthService, cdr, _router, _activateRoute) {
        this._featureAuthService = _featureAuthService;
        this.cdr = cdr;
        this._router = _router;
        this._activateRoute = _activateRoute;
        this.className = 'desktop';
        this.urlPreview = true;
        this.calcUrl = '';
        this.templates = {
            'one-page-card-new': 'The Chicago',
            'one-page-card-oldresult': 'The Chicago',
            'one-page-card': 'The Chicago',
            'sound-cloud-new': 'The Londoner',
            'sound-cloud-v3': 'The Londoner',
            'template-seven': 'The Seattle',
            'sound-cloud': 'The Londoner',
            'inline-temp-new': 'The Greek',
            'inline-temp': 'The Greek',
            'experian': 'The Tokyo',
            'template-five': 'The Madrid',
            'template-five-oldresult': 'The Madrid',
            'template-six': 'The Stockholm',
            'template-eight': 'The Venice',
            'template-nine': 'The New York',
            'template-ten': 'The Paris'
        };
        var url = window.location.href;
        var urlParts = url.split('/');
        this.previewConfig = localStorage.getItem('previewConfig');
        this.previewConfig = this.previewConfig ? JSON.parse(this.previewConfig) : null;
        this.subdomain = urlParts[2].split('.')[0];
        if (urlParts[urlParts.length - 2] === 'layoutPreview') {
            this.calcUrl = urlParts[urlParts.length - 1];
            this.src = this.getCalUrl(this.calcUrl);
        }
        else {
            this.urlPreview = false;
            if (this.previewConfig) {
                this.previewType = this.previewConfig.new ? 'new' : 'duplicate';
                // this.src = this.previewConfig[this.previewType].url;
                var calcUrl = this.previewConfig[this.previewType].url.split('/').pop();
                this.src = this.getCalUrl(calcUrl, true);
                this.selector = this.previewConfig[this.previewType].name;
            }
            else {
                this._router.navigate(['/dashboard']);
            }
        }
    }
    LayoutPreviewComponent.prototype.getCalUrl = function (calcUrl, normal) {
        if (normal === void 0) { normal = false; }
        var routePath = window.location.href;
        !normal ? this.selector = this._activateRoute.snapshot.data.calc_details.template : '';
        if (routePath.includes('.rely.co')) {
            return "http://livec.rely.co/" + calcUrl;
        }
        if (routePath.includes('.outgrow.co')) {
            return "https://live.outgrow.us/" + calcUrl;
        }
        if (routePath.includes('.outgrow.local')) {
            return "http://livec.outgrow.local/" + calcUrl;
        }
        if (routePath.includes('.outgrow.in')) {
            return "http://livec.outgrow.in/" + calcUrl;
        }
    };
    LayoutPreviewComponent.prototype.getFeatureaccess = function () {
        if (this.selector) {
            var selector = this.selector.split('-').join('_');
            var flag = this._featureAuthService.features.templates[selector];
            return flag;
        }
        else {
            return true;
        }
    };
    LayoutPreviewComponent.prototype.useTemplate = function () {
        var selector = this.selector;
        if (this.previewType === 'new') {
            if (this._featureAuthService.features.templates[selector.split('-').join('_')]) {
                localStorage.setItem('temp_name', selector);
                if (!localStorage.getItem('changeTemplate')) {
                    localStorage.setItem('project', 'New');
                }
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].PROTOCOL + this.subdomain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APP_EXTENSION + '/builder/';
            }
            else {
                this.upgradePopup(selector, 'templates');
            }
        }
        else {
            if (this.previewConfig[this.previewType].selectCalc.active) {
                localStorage.setItem('project', 'Duplicate');
                localStorage.setItem('DuplicateId', this.previewConfig[this.previewType].selectCalc.liveApp.app);
                var duplicateURL = this.previewConfig[this.previewType].selectCalc.liveApp.url.split('/');
                localStorage.setItem('DuplicateURL', duplicateURL[duplicateURL.length - 1]);
                localStorage.setItem('temp_name', selector);
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].PROTOCOL + this.subdomain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APP_EXTENSION + '/builder/';
            }
            else {
                this.upgradePopup(selector, 'pre-madeTemplates');
            }
        }
    };
    LayoutPreviewComponent.prototype.useUrlPreviewTemplate = function () {
        if (this._featureAuthService.features.templates[this._activateRoute.snapshot.data.calc_details.template.split('-').join('_')]) {
            this._activateRoute.snapshot.data.calc_details;
            localStorage.setItem('project', 'Duplicate');
            localStorage.setItem('DuplicateURL', this.calcUrl);
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].PROTOCOL + this.subdomain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APP_EXTENSION + '/builder/';
        }
        else {
            this.upgradePopup(this._activateRoute.snapshot.data.calc_details.template, 'templates');
        }
    };
    LayoutPreviewComponent.prototype.upgradePopup = function (selector, subFeature) {
        var type = selector.split('-');
        if (type[type.length - 1] === 'new' || type[type.length - 1] === 'v3') {
            type.pop();
        }
        type = type.join('_');
        this._featureAuthService.setSelectedFeature(subFeature, type);
        jQuery('.templates').addClass('activegreen limited-label');
        jQuery('#premiumModal').modal('show');
        jQuery('.modal-backdrop').insertAfter('#premiumModal');
    };
    LayoutPreviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewOnWindowWidthBasis();
        jQuery(window).resize(function () {
            _this.viewOnWindowWidthBasis();
        });
        var interval = setInterval(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'preview' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 1000);
    };
    LayoutPreviewComponent.prototype.viewOnWindowWidthBasis = function () {
        var width = jQuery(window).width();
        if (width > 775)
            this.switchView('desktop');
        else if (width <= 775 && width > 375)
            this.switchView('tablet');
        else
            this.switchView('mobile');
        this.cdr.detectChanges();
    };
    LayoutPreviewComponent.prototype.onMouseEnter = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeIn(600);
    };
    LayoutPreviewComponent.prototype.onMouseLeave = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeOut(600);
    };
    LayoutPreviewComponent.prototype.switchView = function (className) {
        this.className = className;
        var width = 600;
        var height = 400;
        window.resizeBy(width, height);
        window.moveTo(((screen.width - width) / 2), ((screen.height - height) / 2));
    };
    LayoutPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'og-layout-preview',
            template: __webpack_require__(/*! ./layout-preview.template.html */ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.template.html"),
            styles: [__webpack_require__(/*! ./layout-preview.style.css */ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_2__["FeatureAuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LayoutPreviewComponent);
    return LayoutPreviewComponent;
}());



/***/ }),

/***/ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PREVIEW_ROUTES, LayoutPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_ROUTES", function() { return PREVIEW_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPreviewModule", function() { return LayoutPreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../components/toolbar/toolbar.module */ "./src/app/site/components/toolbar/toolbar.module.ts");
/* harmony import */ var _builder_services_builder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../+builder/services/builder.service */ "./src/app/site/+builder/services/builder.service.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../pipes/pipes.module */ "./src/app/site/templates/pipes/pipes.module.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-preview.component */ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.component.ts");








var PREVIEW_ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _layout_preview_component__WEBPACK_IMPORTED_MODULE_7__["LayoutPreviewComponent"]
            }
        ]
    }
];
var LayoutPreviewModule = /** @class */ (function () {
    function LayoutPreviewModule() {
    }
    LayoutPreviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(PREVIEW_ROUTES), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _components_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_1__["ToolbarModule"]],
            exports: [],
            declarations: [_layout_preview_component__WEBPACK_IMPORTED_MODULE_7__["LayoutPreviewComponent"]],
            providers: [_builder_services_builder_service__WEBPACK_IMPORTED_MODULE_2__["BuilderService"]]
        })
    ], LayoutPreviewModule);
    return LayoutPreviewModule;
}());



/***/ }),

/***/ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.style.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.style.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive-menu {background: #fff;width: 100%;float: left;text-align: center;padding: 6px 25px;position: absolute;z-index: 999;font-size: 13px;border-bottom: 1px solid #c7c7c7;color: #666;box-shadow: 0px 3px 15px 5px rgba(0,0,0,0.18);display: flex !important;align-items: center;justify-content: space-between;opacity:1 !important;}\n.responsive-menu a {padding: 0 5px;float: left;}\n.responsive-menu a span {margin-top: -20px;margin-left: 15px;float: right;margin-top: 3px;color: rgba(0, 0, 0, 0.31);}\niframe {width: 100%;height: 100%;position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;top: 0px;border: none;}\n.responsive-menu span.title {margin-right: 26px;float: left;margin-top: 7px;margin-left: 26px;font-family: 'montserratregular';}\n.responsive-menu div {float: left;}\n.desktop {width: 100%;height: 100%;}\n.mobile {width: 375px;height: 570px;margin: 1% auto;height:570px;border: 1px solid #dcdddf;}\n.tablet {width: 775px;height: 100%;margin: 0 auto;border: 1px solid #dcdddf;}\n.responsive-menu i{ font-size:22px;color: #62676b;}\n.responsive-menu a.active-view i {color: #1483b7 !important;}\n.responsive-menu a:hover i {color: #1483b7 !important;}\nspan.preview-temp-type {font-size: 16px; font-family: montserratregular;}\nspan.preview-temp-type span{font-family: montserratlight;padding-left: 5px;}\n.useTemplate button {border-radius: 0;color: #fff;background: #fb5f66;font-size: 11px;font-family: montserratbold;text-transform: uppercase;padding: 5px 20px;line-height: 18px;transition:all 0.5s ease}\n.useTemplate button:hover{background: #fdb6b9 !important;color: #fb5f66 !important;}\n#main-profile iframe {height: calc(100% - 43px);top: 43px;margin: 0 auto;}\n#main-profile iframe.mobile{height: 580px !important;}\n.responsive-menu .useTemplate .btn-red i {\n    color: #fff !important;\n    font-size: 16px;\n    margin: 0;\n    position: relative;\n    top: 2px;\n    left: -3px;\n}\n.responsive-menu .useTemplate .btn-red:hover i {\n    color: #fb5f66 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS90ZW1wbGF0ZXMvdGVtcGxhdGVBbGwvcHJldmlldy9sYXlvdXRQcmV2aWV3L2xheW91dC1wcmV2aWV3LnN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyw2Q0FBNkMsQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxvQkFBb0IsQ0FBQztBQUM1VSxvQkFBb0IsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUMvQyx5QkFBeUIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQztBQUNySCxRQUFRLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO0FBQ2hJLDZCQUE2QixrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdDQUFnQyxDQUFDO0FBQy9ILHNCQUFzQixXQUFXLENBQUM7QUFDbEMsVUFBVSxXQUFXLENBQUMsWUFBWSxDQUFDO0FBQ25DLFNBQVMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDO0FBQzNGLFNBQVMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUM7QUFDNUUsb0JBQW9CLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDbEQsa0NBQWtDLHlCQUF5QixDQUFDO0FBQzVELDRCQUE0Qix5QkFBeUIsQ0FBQztBQUN0RCx3QkFBd0IsZUFBZSxFQUFFLDhCQUE4QixDQUFDO0FBQ3hFLDRCQUE0Qiw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRSxxQkFBcUIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0I7QUFDeE0sMEJBQTBCLDhCQUE4QixDQUFDLHlCQUF5QixDQUFDO0FBQ25GLHNCQUFzQix5QkFBeUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ3pFLDRCQUE0Qix3QkFBd0IsQ0FBQztBQUNyRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9wcmV2aWV3L2xheW91dFByZXZpZXcvbGF5b3V0LXByZXZpZXcuc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3BvbnNpdmUtbWVudSB7YmFja2dyb3VuZDogI2ZmZjt3aWR0aDogMTAwJTtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogNnB4IDI1cHg7cG9zaXRpb246IGFic29sdXRlO3otaW5kZXg6IDk5OTtmb250LXNpemU6IDEzcHg7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2M3Yzc7Y29sb3I6ICM2NjY7Ym94LXNoYWRvdzogMHB4IDNweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuMTgpO2Rpc3BsYXk6IGZsZXggIWltcG9ydGFudDthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtvcGFjaXR5OjEgIWltcG9ydGFudDt9XG4ucmVzcG9uc2l2ZS1tZW51IGEge3BhZGRpbmc6IDAgNXB4O2Zsb2F0OiBsZWZ0O31cbi5yZXNwb25zaXZlLW1lbnUgYSBzcGFuIHttYXJnaW4tdG9wOiAtMjBweDttYXJnaW4tbGVmdDogMTVweDtmbG9hdDogcmlnaHQ7bWFyZ2luLXRvcDogM3B4O2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO31cbmlmcmFtZSB7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTttYXJnaW4tbGVmdDogYXV0bzttYXJnaW4tcmlnaHQ6IGF1dG87bGVmdDogMDtyaWdodDogMDt0b3A6IDBweDtib3JkZXI6IG5vbmU7fVxuLnJlc3BvbnNpdmUtbWVudSBzcGFuLnRpdGxlIHttYXJnaW4tcmlnaHQ6IDI2cHg7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXRvcDogN3B4O21hcmdpbi1sZWZ0OiAyNnB4O2ZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdHJlZ3VsYXInO31cbi5yZXNwb25zaXZlLW1lbnUgZGl2IHtmbG9hdDogbGVmdDt9XG4uZGVza3RvcCB7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cbi5tb2JpbGUge3dpZHRoOiAzNzVweDtoZWlnaHQ6IDU3MHB4O21hcmdpbjogMSUgYXV0bztoZWlnaHQ6NTcwcHg7Ym9yZGVyOiAxcHggc29saWQgI2RjZGRkZjt9XG4udGFibGV0IHt3aWR0aDogNzc1cHg7aGVpZ2h0OiAxMDAlO21hcmdpbjogMCBhdXRvO2JvcmRlcjogMXB4IHNvbGlkICNkY2RkZGY7fVxuLnJlc3BvbnNpdmUtbWVudSBpeyBmb250LXNpemU6MjJweDtjb2xvcjogIzYyNjc2Yjt9XG4ucmVzcG9uc2l2ZS1tZW51IGEuYWN0aXZlLXZpZXcgaSB7Y29sb3I6ICMxNDgzYjcgIWltcG9ydGFudDt9XG4ucmVzcG9uc2l2ZS1tZW51IGE6aG92ZXIgaSB7Y29sb3I6ICMxNDgzYjcgIWltcG9ydGFudDt9XG5zcGFuLnByZXZpZXctdGVtcC10eXBlIHtmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjt9XG5zcGFuLnByZXZpZXctdGVtcC10eXBlIHNwYW57Zm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtwYWRkaW5nLWxlZnQ6IDVweDt9XG4udXNlVGVtcGxhdGUgYnV0dG9uIHtib3JkZXItcmFkaXVzOiAwO2NvbG9yOiAjZmZmO2JhY2tncm91bmQ6ICNmYjVmNjY7Zm9udC1zaXplOiAxMXB4O2ZvbnQtZmFtaWx5OiBtb250c2VycmF0Ym9sZDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO3BhZGRpbmc6IDVweCAyMHB4O2xpbmUtaGVpZ2h0OiAxOHB4O3RyYW5zaXRpb246YWxsIDAuNXMgZWFzZX1cbi51c2VUZW1wbGF0ZSBidXR0b246aG92ZXJ7YmFja2dyb3VuZDogI2ZkYjZiOSAhaW1wb3J0YW50O2NvbG9yOiAjZmI1ZjY2ICFpbXBvcnRhbnQ7fVxuI21haW4tcHJvZmlsZSBpZnJhbWUge2hlaWdodDogY2FsYygxMDAlIC0gNDNweCk7dG9wOiA0M3B4O21hcmdpbjogMCBhdXRvO31cbiNtYWluLXByb2ZpbGUgaWZyYW1lLm1vYmlsZXtoZWlnaHQ6IDU4MHB4ICFpbXBvcnRhbnQ7fVxuLnJlc3BvbnNpdmUtbWVudSAudXNlVGVtcGxhdGUgLmJ0bi1yZWQgaSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgICBsZWZ0OiAtM3B4O1xufVxuLnJlc3BvbnNpdmUtbWVudSAudXNlVGVtcGxhdGUgLmJ0bi1yZWQ6aG92ZXIgaSB7XG4gICAgY29sb3I6ICNmYjVmNjYgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.template.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/site/templates/templateAll/preview/layoutPreview/layout-preview.template.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<og-premium-modal></og-premium-modal>\n<div class=\"responsive-menu\" (mouseenter)=\"onMouseEnter()\">\n  <span class=\"preview-temp-type\">Preview: <span>{{templates[selector]}}</span></span>\n  <!--<span class=\"title\">Resize Template: </span>-->\n  <div class=\"icon-block\">\n    <a href=\"javascript:void(0);\" (click)=\"switchView('desktop')\" [class.active-view]=\"className==='desktop'\">\n      <i class=\"material-icons\">desktop_mac</i>\n      <span>|</span>\n    </a>\n    <a href=\"javascript:void(0);\" (click)=\"switchView('tablet')\" [class.active-view]=\"className==='tablet'\">\n      <i class=\"material-icons\">tablet_mac</i>\n      <span>|</span>\n    </a>\n    <a href=\"javascript:void(0);\" (click)=\"switchView('mobile')\" [class.active-view]=\"className==='mobile'\">\n      <i class=\"material-icons\">smartphone</i>\n    </a>\n  </div>\n  <div class=\"useTemplate\" *ngIf=\"!urlPreview\">\n    <button type=\"button\" (click)=\"useTemplate()\" class=\"btn btn-red btn-hover rs-hide\">\n      <i class=\"material-icons\" *ngIf=\"!getFeatureaccess()\">lock_outline</i> Use Layout</button>\n  </div>\n\n  <div class=\"useTemplate\" *ngIf=\"urlPreview\">\n    <button type=\"button\" (click)=\"useUrlPreviewTemplate()\" class=\"btn btn-red btn-hover rs-hide\">\n      <i class=\"material-icons\" *ngIf=\"!getFeatureaccess()\">lock_outline</i> \n      Use Layout</button>\n  </div>\n  \n</div>\n<div id=\"main-profile\">\n  <iframe (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\" id=\"mobile-iframe\" [ngClass]=\"{\n            desktop: className==='desktop', \n            tablet: className==='tablet',\n            mobile: className==='mobile'\n        }\" [src]=\"src | safeUrl\" align=\"middle\">\n  </iframe>\n</div>\n"

/***/ })

}]);
//# sourceMappingURL=app-site-templates-templateAll-preview-layoutPreview-layout-preview-module.js.map