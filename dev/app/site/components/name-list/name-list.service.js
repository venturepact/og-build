"use strict";
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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/map');
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
        this.names = [];
    }
    NameListService.prototype.get = function () {
        var _this = this;
        if (this.names && this.names.length) {
            return Observable_1.Observable.from([this.names]);
        }
        if (!this.request) {
            this.request = this.http.get('/assets/data.json')
                .map(function (response) { return response.json(); })
                .map(function (data) {
                _this.request = null;
                return _this.names = data;
            });
        }
        return this.request;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    NameListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFNL0I7SUFtQkUseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBYjlCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFhWSxDQUFDO0lBT2xDLDZCQUFHLEdBQUg7UUFBQSxpQkFhQztRQVpDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7aUJBQzlDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUM1QyxHQUFHLENBQUMsVUFBQyxJQUFjO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFNRCw2QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQWlEYixzQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksdUJBQWUsa0JBZ0QzQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIGluaXRpYWwgbmFtZXMgcHJvdmlkZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xyXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHBlbmRpbmcgcmVxdWVzdC5cclxuICAgKiBAdHlwZSB7T2JzZXJ2YWJsZTxzdHJpbmdbXT59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXF1ZXN0OiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLiBJZiB0aGVyZSB3YXMgYSBwcmV2aW91cyBzdWNjZXNzZnVsIHJlcXVlc3RcclxuICAgKiAodGhlIGxvY2FsIG5hbWVzIGFycmF5IGlzIGRlZmluZWQgYW5kIGhhcyBlbGVtZW50cyksIHRoZSBjYWNoZWQgdmVyc2lvbiBpcyByZXR1cm5lZFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cclxuICAgKi9cclxuICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKHRoaXMubmFtZXMgJiYgdGhpcy5uYW1lcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbShbdGhpcy5uYW1lc10pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnJlcXVlc3QpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5tYXAoKGRhdGE6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubmFtZXMgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhlIGdpdmVuIG5hbWUgdG8gdGhlIGFycmF5IG9mIG5hbWVzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBuYW1lIHRvIGFkZC5cclxuICAgKi9cclxuICBhZGQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lcy5wdXNoKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
