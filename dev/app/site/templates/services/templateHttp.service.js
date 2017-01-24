"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var base_service_1 = require('../../../shared/services/base.service');
var TemplateHttpService = (function (_super) {
    __extends(TemplateHttpService, _super);
    function TemplateHttpService(_http) {
        _super.call(this);
        this._http = _http;
    }
    TemplateHttpService.prototype.sendEmail = function (data) {
        var URL = this._url + '/builder/sendMail';
        return this._http.post(URL, data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TemplateHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TemplateHttpService);
    return TemplateHttpService;
}(base_service_1.BaseService));
exports.TemplateHttpService = TemplateHttpService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy90ZW1wbGF0ZUh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLDZCQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBS3BFO0lBQXlDLHVDQUFXO0lBQ2hELDZCQUFvQixLQUFXO1FBQzNCLGlCQUFPLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBRS9CLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsSUFBUztRQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBWEw7UUFBQyxpQkFBVSxFQUFFOzsyQkFBQTtJQVliLDBCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWHdDLDBCQUFXLEdBV25EO0FBWFksMkJBQW1CLHNCQVcvQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy90ZW1wbGF0ZUh0dHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYWxjRW1haWx9IGZyb20gJy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVIdHRwU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRFbWFpbChkYXRhIDphbnkpOiBPYnNlcnZhYmxlPENhbGNFbWFpbD4ge1xyXG4gICAgICAgIGxldCBVUkwgPSB0aGlzLl91cmwgKyAnL2J1aWxkZXIvc2VuZE1haWwnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoVVJMLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=
