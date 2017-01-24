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
var CalculatorService = (function (_super) {
    __extends(CalculatorService, _super);
    function CalculatorService(_http) {
        _super.call(this);
        this._http = _http;
    }
    CalculatorService.prototype.getApp = function (url) {
        var URL = this._url + '/builder/get_calculator/' + url;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorService.prototype.getAppResult = function (url) {
        var URL = this._url + '/builder/get_calculator_result/' + url;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CalculatorService);
    return CalculatorService;
}(base_service_1.BaseService));
exports.CalculatorService = CalculatorService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUVyQyw2QkFBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUdwRTtJQUF1QyxxQ0FBVztJQUU5QywyQkFBb0IsS0FBVztRQUMzQixpQkFBTyxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUUvQixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixHQUFHLEdBQUcsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBaUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5CTDtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBb0JiLHdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsQ0FuQnNDLDBCQUFXLEdBbUJqRDtBQW5CWSx5QkFBaUIsb0JBbUI3QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBwLCBJdGVtLCBTZWN0aW9uLCBQYWdlfSBmcm9tICcuLi8uLi8rYnVpbGRlci9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvclNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwKHVybDogU3RyaW5nKTogT2JzZXJ2YWJsZTxBcHA+IHtcclxuICAgICAgICBsZXQgVVJMID0gdGhpcy5fdXJsICsgJy9idWlsZGVyL2dldF9jYWxjdWxhdG9yLycgKyB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFVSTCwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcHBSZXN1bHQodXJsOiBTdHJpbmcpOiBPYnNlcnZhYmxlPEFwcD4ge1xyXG4gICAgICAgIGxldCBVUkwgPSB0aGlzLl91cmwgKyAnL2J1aWxkZXIvZ2V0X2NhbGN1bGF0b3JfcmVzdWx0LycgKyB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFVSTCwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxufSJdfQ==
