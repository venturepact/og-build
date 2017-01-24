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
var BuilderService = (function (_super) {
    __extends(BuilderService, _super);
    function BuilderService(_http) {
        _super.call(this);
        this._http = _http;
    }
    BuilderService.prototype.createApp = function (app) {
        return this._http.post(this._url + '/builder/create_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.publishApp = function (app) {
        return this._http.post(this._url + '/builder/publish_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.getProject = function (data) {
        return this._http.post(this._url + '/builder/get_project', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.changeTemplate = function (projectId, templateName) {
        return this._http.post(this._url + '/builder/change_template', { projectId: projectId, templateName: templateName }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.remove = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/remove', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.deleteItem = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/delete_item', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.checkUniqueUrl = function (id, url) {
        return this._http.post(this._url + '/builder/check_unique_url', {
            id: id,
            url: this.sanitizeUrl(url)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateName = function (id, name) {
        return this._http.post(this._url + '/builder/update_name', {
            id: id,
            name: name,
            url: this.sanitizeUrl(name)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addItem = function (sectionId, item, index) {
        return this._http.post(this._url + '/builder/add_item', { item: item, sectionId: sectionId, index: index }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addSection = function (section, item, pageId) {
        return this._http.post(this._url + '/builder/add_section', { item: item, section: section, pageId: pageId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.removeSection = function (sectionId) {
        return this._http.post(this._url + '/builder/remove_section', { sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateInterSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intersection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateIntraSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intrasection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateChanges = function (unSavedData) {
        return this._http.post(this._url + '/builder/update_changes', unSavedData, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.sanitizeUrl = function (url) {
        url = url.toString().trim().replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s\s+/g, ' ').toString().split(' ').join('-');
        if (url.charAt(0) === '-')
            url = url.substring(1);
        if (url.charAt(url.length - 1) === '-')
            url = url.substring(0, url.length - 1);
        return url;
    };
    BuilderService.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this;
            var later = function () {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    BuilderService.prototype.saveAppSetting = function (app) {
        return this._http.post(this._url + '/builder/save_app_setting', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.saveCalcEmail = function (data) {
        return this._http.post(this._url + '/builder/save_calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.calcEmail = function (data) {
        return this._http.post(this._url + '/builder/calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuilderService);
    return BuilderService;
}(base_service_1.BaseService));
exports.BuilderService = BuilderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLDZCQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBRXBFO0lBQW9DLGtDQUFXO0lBRTNDLHdCQUFvQixLQUFXO1FBQzNCLGlCQUFPLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBRS9CLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsR0FBUTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDOUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEdBQVE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFTO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDaEYsR0FBRyxDQUFDLElBQUksQ0FB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LElBQVM7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTFJTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBMkliLHFCQUFDO0FBQUQsQ0ExSUEsQUEwSUMsQ0ExSW1DLDBCQUFXLEdBMEk5QztBQTFJWSxzQkFBYyxpQkEwSTFCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FwcCwgSXRlbSwgU2VjdGlvbiwgUGFnZSwgQ2FsY0VtYWlsfSBmcm9tICcuLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Jhc2Uuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFwcChhcHA6IEFwcCk6IE9ic2VydmFibGU8QXBwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvY3JlYXRlX2FwcCcsIGFwcCwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGlzaEFwcChhcHA6IGFueSk6IE9ic2VydmFibGU8QXBwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvcHVibGlzaF9hcHAnLCBhcHAsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBcHA+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvYnVpbGRlci9nZXRfcHJvamVjdCcsIGRhdGEsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVGVtcGxhdGUocHJvamVjdElkOiBhbnksIHRlbXBsYXRlTmFtZTogYW55KTogT2JzZXJ2YWJsZTxBcHA+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvYnVpbGRlci9jaGFuZ2VfdGVtcGxhdGUnLCB7IHByb2plY3RJZDogcHJvamVjdElkLCB0ZW1wbGF0ZU5hbWU6IHRlbXBsYXRlTmFtZSB9LCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtSWQ6IGFueSwgc2VjdGlvbklkOiBhbnkpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvYnVpbGRlci9yZW1vdmUnLCB7IGl0ZW1JZDogaXRlbUlkLCBzZWN0aW9uSWQ6IHNlY3Rpb25JZCB9LCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJdGVtKGl0ZW1JZDogYW55LCBzZWN0aW9uSWQ6IGFueSk6IE9ic2VydmFibGU8SXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL2RlbGV0ZV9pdGVtJywgeyBpdGVtSWQ6IGl0ZW1JZCwgc2VjdGlvbklkOiBzZWN0aW9uSWQgfSwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmlxdWVVcmwoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL2NoZWNrX3VuaXF1ZV91cmwnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuc2FuaXRpemVVcmwodXJsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVOYW1lKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvdXBkYXRlX25hbWUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnNhbml0aXplVXJsKG5hbWUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oc2VjdGlvbklkOiBzdHJpbmcsIGl0ZW06IEl0ZW0sIGluZGV4OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL2FkZF9pdGVtJywgeyBpdGVtOiBpdGVtLCBzZWN0aW9uSWQ6IHNlY3Rpb25JZCwgaW5kZXg6IGluZGV4IH0sIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNlY3Rpb24oc2VjdGlvbjogU2VjdGlvbiwgaXRlbTogSXRlbSwgcGFnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL2FkZF9zZWN0aW9uJywgeyBpdGVtOiBpdGVtLCBzZWN0aW9uOiBzZWN0aW9uLCBwYWdlSWQ6IHBhZ2VJZCB9LCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWN0aW9uKHNlY3Rpb25JZDogYW55KTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvcmVtb3ZlX3NlY3Rpb24nLCB7IHNlY3Rpb25JZDogc2VjdGlvbklkIH0sIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUludGVyU2VjdGlvbk9yZGVyKGl0ZW1zOiBJdGVtW10sIHNlY3Rpb25JZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvYnVpbGRlci91cGRhdGVfaW50ZXJzZWN0aW9uJywgeyBpdGVtczogaXRlbXMsIHNlY3Rpb25JZDogc2VjdGlvbklkIH0sIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUludHJhU2VjdGlvbk9yZGVyKGl0ZW1zOiBJdGVtW10sIHNlY3Rpb25JZDogYW55KTogT2JzZXJ2YWJsZTxTZWN0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvdXBkYXRlX2ludHJhc2VjdGlvbicsIHsgaXRlbXM6IGl0ZW1zLCBzZWN0aW9uSWQ6IHNlY3Rpb25JZCB9LCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogdXBkYXRlIHVuc2F2ZWQgY2hhbmdlcyAqKi9cclxuICAgIHVwZGF0ZUNoYW5nZXModW5TYXZlZERhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvdXBkYXRlX2NoYW5nZXMnLCB1blNhdmVkRGF0YSwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICAvL3V0aWxpdHkgZnVuY3Rpb25zXHJcbiAgICBzYW5pdGl6ZVVybCh1cmw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnRvU3RyaW5nKCkudHJpbSgpLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudG9TdHJpbmcoKS5zcGxpdCgnICcpLmpvaW4oJy0nKTtcclxuICAgICAgICBpZiAodXJsLmNoYXJBdCgwKSA9PT0gJy0nKSB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGlmICh1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKSA9PT0gJy0nKSB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWJvdW5jZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHZhciB0aW1lb3V0OiBhbnk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFwcFNldHRpbmcoYXBwOiBBcHApOiBPYnNlcnZhYmxlPEFwcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL3NhdmVfYXBwX3NldHRpbmcnLCBhcHAsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDYWxjRW1haWwoZGF0YTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2J1aWxkZXIvc2F2ZV9jYWxjX2VtYWlsJywgZGF0YSwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY0VtYWlsKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9idWlsZGVyL2NhbGNfZW1haWwnLCBkYXRhLCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=
