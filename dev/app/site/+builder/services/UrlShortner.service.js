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
var UrlShortner = (function (_super) {
    __extends(UrlShortner, _super);
    function UrlShortner(_http) {
        _super.call(this);
        this._http = _http;
        this.shortUrl = '';
    }
    UrlShortner.prototype.googleShortner = function (longUrl) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var body = { longUrl: longUrl };
        this._http.post('https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyAyEiPl1ZWGqIjhCb4hPz34HgwLS_G9zZk', body, headers)
            .map(function (res) { return res.json(); })
            .subscribe(function (body) { _this.shortUrl = body.id; });
        return this.shortUrl;
    };
    UrlShortner = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UrlShortner);
    return UrlShortner;
}(base_service_1.BaseService));
exports.UrlShortner = UrlShortner;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL1VybFNob3J0bmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3RSxlQUFlLENBQUMsQ0FBQTtBQUN4Riw2QkFBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUdwRTtJQUFpQywrQkFBVztJQUd4QyxxQkFBb0IsS0FBVztRQUMzQixpQkFBTyxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUYvQixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBSXRCLENBQUM7SUFFTSxvQ0FBYyxHQUFyQixVQUFzQixPQUFZO1FBQWxDLGlCQVNDO1FBUkcsSUFBSSxPQUFPLEdBQVEsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdIQUF3SCxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7YUFDbkosR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxTQUFTLENBQ1YsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNuQyxDQUFDO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQWpCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBa0JiLGtCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQmdDLDBCQUFXLEdBaUIzQztBQWpCWSxtQkFBVyxjQWlCdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9zZXJ2aWNlcy9VcmxTaG9ydG5lci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUywgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcmxTaG9ydG5lciBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIHNob3J0VXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29vZ2xlU2hvcnRuZXIobG9uZ1VybDogYW55KSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM6IGFueSA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgYm9keSA9IHsgbG9uZ1VybDogbG9uZ1VybCB9O1xyXG4gICAgICAgIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXJsc2hvcnRlbmVyL3YxL3VybD9zaG9ydFVybD1odHRwOi8vZ29vLmdsL2Zic1Mma2V5PUFJemFTeUF5RWlQbDFaV0dxSWpoQ2I0aFB6MzRIZ3dMU19HOXpaaycsIGJvZHksIGhlYWRlcnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGJvZHkgPT4geyB0aGlzLnNob3J0VXJsID0gYm9keS5pZDsgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3J0VXJsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
