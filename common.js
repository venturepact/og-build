(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/webhook.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/webhook.service.ts ***!
  \****************************************************/
/*! exports provided: WebhookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebhookService", function() { return WebhookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var WebhookService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebhookService, _super);
    function WebhookService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        return _this;
    }
    WebhookService.prototype.testWebhook = function (data) {
        if (data.events.length === 0 || data.events.length > 1) {
            data['event'] = 'LEADS';
        }
        else if (data.events.length === 1) {
            data['event'] = data.events[0];
        }
        return this._http.post(this._url + '/calc/webhook/test', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.saveWebhook = function (data) {
        return this._http.post(this._url + '/calc/webhook/save', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.getAllWebhook = function (company) {
        return this._http.get(this._url + '/comp/webhook/' + company, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.getCalcWebhook = function (calcId) {
        return this._http.get(this._url + '/calc/webhook/' + calcId, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.activateWebhook = function (calcId, status) {
        return this._http.put(this._url + '/calc/webhook/' + calcId, { status: status }, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.activateGlobalWebhook = function (gwebhook) {
        return this._http.put(this._url + '/global/webhook/status', gwebhook, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.getCalcWebhookLeadlog = function (calcId, webhookLogsOffset, startDate, endDate) {
        var data = {
            webhookLogsOffset: webhookLogsOffset,
            startDate: startDate,
            endDate: endDate
        };
        return this._http.put(this._url + '/webhook/leadlog/' + calcId, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.getGlobalWebhookLeadlog = function (whId, webhookLogsOffset, startDate, endDate) {
        var data = {
            webhookLogsOffset: webhookLogsOffset,
            startDate: startDate,
            endDate: endDate
        };
        return this._http.post(this._url + '/gwebhook/leadlog/' + whId, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.saveGlobalWebhook = function (data) {
        return this._http.post(this._url + '/global/webhook/save', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.getCompanyWebhook = function (subdomain) {
        return this._http.get(this._url + '/global/webhook/' + subdomain, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService.prototype.deleteGlobalWebhook = function (whid) {
        return this._http.put(this._url + '/global/webhook/remove/' + whid, {}, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebhookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], WebhookService);
    return WebhookService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["HttpBaseService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map