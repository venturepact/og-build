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
var AnalyticService = (function (_super) {
    __extends(AnalyticService, _super);
    function AnalyticService(_http) {
        _super.call(this);
        this._http = _http;
        this.visitorAnswers = [];
    }
    AnalyticService.prototype.reInitVisitorAnswers = function () {
        this.visitorAnswers = [];
    };
    AnalyticService.prototype.setVisitorAnswers = function (item) {
        this.visitorAnswers.push(item);
    };
    AnalyticService.prototype.getVisitorAnswers = function () {
        return this.visitorAnswers;
    };
    AnalyticService.prototype.setVisitorKey = function (key) {
        if (!this.visitorKey)
            ga('devteam.send', 'pageview', '/' + key);
        this.visitorKey = key;
    };
    AnalyticService.prototype.getVisitorKey = function () {
        return (this.visitorKey == undefined || this.visitorKey == '') ? '' : this.visitorKey;
    };
    AnalyticService.prototype.saveStats = function (appId, item, questions) {
        return this._http.post(this._url + '/analytic/save_stats', {
            appId: appId,
            item: item,
            key: this.getVisitorKey(),
            questions: questions,
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveLead = function (appId, lead, questions) {
        return this._http.post(this._url + '/analytic/save_lead', {
            appId: appId,
            lead: lead,
            key: this.getVisitorKey(),
            questions: questions,
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveResult = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_result', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveOutCome = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_outcome', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveSectionResult = function (sectionId) {
        return this._http.post(this._url + '/analytic/save_section_result', {
            sectionId: sectionId,
            key: this.getVisitorKey(),
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnalyticService);
    return AnalyticService;
}(base_service_1.BaseService));
exports.AnalyticService = AnalyticService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsNkJBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFHcEU7SUFBcUMsbUNBQVc7SUFLNUMseUJBQW9CLEtBQVc7UUFDM0IsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQU07UUFIdkIsbUJBQWMsR0FBVSxFQUFFLENBQUM7SUFLbkMsQ0FBQztJQUVELDhDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQ0FBaUIsR0FBakIsVUFBa0IsSUFBUztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQixFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFGLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsS0FBYSxFQUFFLElBQVUsRUFBRSxTQUFp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aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FwcCwgSXRlbSwgU2VjdGlvbiwgUGFnZX0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYmFzZS5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgZ2E6IEZ1bmN0aW9uO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmFseXRpY1NlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHZpc2l0b3JLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgdmlzaXRvckFuc3dlcnM6IGFueVtdID0gW107XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZUluaXRWaXNpdG9yQW5zd2VycygpIHtcclxuICAgICAgICB0aGlzLnZpc2l0b3JBbnN3ZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmlzaXRvckFuc3dlcnMoaXRlbTogYW55KSB7XHJcbiAgICAgICAgdGhpcy52aXNpdG9yQW5zd2Vycy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2l0b3JBbnN3ZXJzKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdG9yQW5zd2VycztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaXNpdG9yS2V5KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpc2l0b3JLZXkpXHJcbiAgICAgICAgICAgIGdhKCdkZXZ0ZWFtLnNlbmQnLCAncGFnZXZpZXcnLCAnLycgKyBrZXkpO1xyXG4gICAgICAgIHRoaXMudmlzaXRvcktleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaXNpdG9yS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZpc2l0b3JLZXkgPT0gdW5kZWZpbmVkIHx8IHRoaXMudmlzaXRvcktleSA9PSAnJykgPyAnJyA6IHRoaXMudmlzaXRvcktleTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RhdHMoYXBwSWQ6IHN0cmluZywgaXRlbTogSXRlbSwgcXVlc3Rpb25zOiBJdGVtW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHRoaXMuX3VybCArICcvYW5hbHl0aWMvc2F2ZV9zdGF0cycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZ2V0VmlzaXRvcktleSgpLFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zOiBxdWVzdGlvbnMsXHJcbiAgICAgICAgICAgICAgICB1bnNhdmVkQXJyYXk6IHRoaXMuZ2V0VmlzaXRvckFuc3dlcnMoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnBvc3Rfb3B0aW9ucygpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlTGVhZChhcHBJZDogc3RyaW5nLCBsZWFkOiBhbnksIHF1ZXN0aW9uczogSXRlbVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxyXG4gICAgICAgICAgICB0aGlzLl91cmwgKyAnL2FuYWx5dGljL3NhdmVfbGVhZCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICAgICAgICAgIGxlYWQ6IGxlYWQsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZ2V0VmlzaXRvcktleSgpLFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zOiBxdWVzdGlvbnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucG9zdF9vcHRpb25zKClcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVSZXN1bHQoYXBwSWQ6IHN0cmluZywgZm9ybXVsYTogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHRoaXMuX3VybCArICcvYW5hbHl0aWMvc2F2ZV9yZXN1bHQnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhOiBmb3JtdWxhLFxyXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmdldFZpc2l0b3JLZXkoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5wb3N0X29wdGlvbnMoKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU91dENvbWUoYXBwSWQ6IHN0cmluZywgZm9ybXVsYTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxyXG4gICAgICAgICAgICB0aGlzLl91cmwgKyAnL2FuYWx5dGljL3NhdmVfb3V0Y29tZScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICAgICAgICAgIGZvcm11bGE6IGZvcm11bGEsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZ2V0VmlzaXRvcktleSgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnBvc3Rfb3B0aW9ucygpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU2VjdGlvblJlc3VsdChzZWN0aW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcclxuICAgICAgICAgICAgdGhpcy5fdXJsICsgJy9hbmFseXRpYy9zYXZlX3NlY3Rpb25fcmVzdWx0JyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbklkOiBzZWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZ2V0VmlzaXRvcktleSgpLFxyXG4gICAgICAgICAgICAgICAgdW5zYXZlZEFycmF5OiB0aGlzLmdldFZpc2l0b3JBbnN3ZXJzKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5wb3N0X29wdGlvbnMoKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl19
