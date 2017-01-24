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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var index_1 = require('./../../shared/services/index');
var datatable_interface_1 = require('../../shared/interfaces/datatable.interface');
var EmailLogsComponent = (function (_super) {
    __extends(EmailLogsComponent, _super);
    function EmailLogsComponent(_userService, _script) {
        _super.call(this);
        this._userService = _userService;
        this._script = _script;
        this.data = [];
        this.loading = false;
    }
    EmailLogsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('datatables')
            .then(function (data) {
            _this.getEmails();
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
    };
    EmailLogsComponent.prototype.getEmails = function () {
        var _this = this;
        this.loading = true;
        var obj = {
            limit: this.current_limit,
            page: this.current_page - 1,
            searchKey: this.search
        };
        this._userService.getEmailLogs(obj)
            .subscribe(function (response) {
            _this.data = response.emails;
            _this.total_pages = Math.ceil(response.count / _this.current_limit);
            _this.loading = false;
        }, function (response) {
            console.log('Email error', response);
            _this.loading = false;
        });
    };
    EmailLogsComponent.prototype.paging = function (num) {
        _super.prototype.paging.call(this, num);
        this.getEmails();
    };
    EmailLogsComponent.prototype.limitChange = function (event) {
        _super.prototype.limitChange.call(this, event);
        this.getEmails();
    };
    EmailLogsComponent.prototype.previous = function () {
        _super.prototype.previous.call(this);
        this.getEmails();
    };
    EmailLogsComponent.prototype.next = function () {
        _super.prototype.next.call(this);
        this.getEmails();
    };
    EmailLogsComponent.prototype.searchData = function () {
        _super.prototype.searchData.call(this);
        this.getEmails();
    };
    EmailLogsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-email-logs',
            templateUrl: 'email-logs.component.html',
            styleUrls: ['email-logs.component.css', './../ionicons.min.css'],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_1.Script])
    ], EmailLogsComponent);
    return EmailLogsComponent;
}(datatable_interface_1.Datatable));
exports.EmailLogsComponent = EmailLogsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9lbWFpbC1sb2dzL2VtYWlsLWxvZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBeUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMxRCxzQkFBb0MsK0JBQStCLENBQUMsQ0FBQTtBQUNwRSxvQ0FBMEIsNkNBQTZDLENBQUMsQ0FBQTtBQVl4RTtJQUF3QyxzQ0FBUztJQUdoRCw0QkFBb0IsWUFBeUIsRUFBVSxPQUFlO1FBQ3JFLGlCQUFPLENBQUM7UUFEVyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGdEUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVksS0FBSyxDQUFDO0lBR3pCLENBQUM7SUFHRCw0Q0FBZSxHQUFmO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNWLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBbUJDO1FBbEJBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHO1lBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDakMsU0FBUyxDQUNWLFVBQUMsUUFBYTtZQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM1QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUMsUUFBYTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FDQSxDQUFDO0lBQ0osQ0FBQztJQUdELG1DQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2pCLGdCQUFLLENBQUMsTUFBTSxZQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQVU7UUFDckIsZ0JBQUssQ0FBQyxXQUFXLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0MsZ0JBQUssQ0FBQyxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFJLEdBQUo7UUFDQyxnQkFBSyxDQUFDLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQ0MsZ0JBQUssQ0FBQyxVQUFVLFdBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXZFRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQztZQUNoRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBd0IsQ0FBQztTQUN6RCxDQUFDOzswQkFBQTtJQWtFRix5QkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEV1QywrQkFBUyxHQWdFaEQ7QUFoRVksMEJBQWtCLHFCQWdFOUIsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vZW1haWwtbG9ncy9lbWFpbC1sb2dzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UsIFNjcmlwdCB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgRGF0YXRhYmxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvZGF0YXRhYmxlLmludGVyZmFjZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy1lbWFpbC1sb2dzJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2VtYWlsLWxvZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydlbWFpbC1sb2dzLmNvbXBvbmVudC5jc3MnLCAnLi8uLi9pb25pY29ucy5taW4uY3NzJ10sXHJcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxMb2dzQ29tcG9uZW50IGV4dGVuZHMgRGF0YXRhYmxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0ZGF0YTogT2JqZWN0ID0gW107XHJcblx0bG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0dGhpcy5fc2NyaXB0LmxvYWQoJ2RhdGF0YWJsZXMnKVxyXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ2V0RW1haWxzKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnU2NyaXB0IG5vdCBsb2FkZWQnLCBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0RW1haWxzKCkge1xyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRcdGxldCBvYmogPSB7XHJcblx0XHRcdGxpbWl0OiB0aGlzLmN1cnJlbnRfbGltaXQsXHJcblx0XHRcdHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlIC0gMSxcclxuXHRcdFx0c2VhcmNoS2V5OiB0aGlzLnNlYXJjaFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuX3VzZXJTZXJ2aWNlLmdldEVtYWlsTG9ncyhvYmopXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5kYXRhID0gcmVzcG9uc2UuZW1haWxzO1xyXG5cdFx0XHRcdHRoaXMudG90YWxfcGFnZXMgPSBNYXRoLmNlaWwocmVzcG9uc2UuY291bnQgLyB0aGlzLmN1cnJlbnRfbGltaXQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBlcnJvcicsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdHBhZ2luZyhudW06IG51bWJlcikge1xyXG5cdFx0c3VwZXIucGFnaW5nKG51bSk7XHJcblx0XHR0aGlzLmdldEVtYWlscygpO1xyXG5cdH1cclxuXHJcblx0bGltaXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG5cdFx0c3VwZXIubGltaXRDaGFuZ2UoZXZlbnQpO1xyXG5cdFx0dGhpcy5nZXRFbWFpbHMoKTtcclxuXHR9XHJcblxyXG5cdHByZXZpb3VzKCkge1xyXG5cdFx0c3VwZXIucHJldmlvdXMoKTtcclxuXHRcdHRoaXMuZ2V0RW1haWxzKCk7XHJcblx0fVxyXG5cclxuXHRuZXh0KCkge1xyXG5cdFx0c3VwZXIubmV4dCgpO1xyXG5cdFx0dGhpcy5nZXRFbWFpbHMoKTtcclxuXHR9XHJcblxyXG5cdHNlYXJjaERhdGEoKSB7XHJcblx0XHRzdXBlci5zZWFyY2hEYXRhKCk7XHJcblx0XHR0aGlzLmdldEVtYWlscygpO1xyXG5cdH1cclxufSJdfQ==
