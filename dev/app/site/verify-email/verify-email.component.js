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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./../../shared/services/index');
var index_2 = require('./../../shared/services/index');
var env_config_1 = require('./../../config/env.config');
var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, _userService, _router, loggedInService, _companyService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this._router = _router;
        this.loggedInService = loggedInService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this.authToken = 'access_token';
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        this.isTokenVerified();
    };
    VerifyEmailComponent.prototype.isTokenVerified = function () {
        var _this = this;
        var url = window.location.pathname;
        this.tokenHash = url.split('/')[2];
        var verification = this._userService.verfiyEmail(this.tokenHash)
            .subscribe(function (response) {
            _this.generateToken(response._id);
        }, function (error) {
            jQuery('#token-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            verification.unsubscribe();
        });
    };
    VerifyEmailComponent.prototype.generateToken = function (data, action) {
        var _this = this;
        if (action === void 0) { action = null; }
        var approval = this._userService.generateToken(data)
            .subscribe(function (response) {
            if (response.token) {
                response.companyList.push(_this.company);
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company_id': _this.company,
                    'company': response.company,
                    'companyList': response.companyList
                };
                if (_this._cookieService.readCookie('storage') !== null) {
                    _this._cookieService.eraseCookie('storage');
                }
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                _this.loggedInService.login();
                _this.redirectToFirstCompany(response.company);
            }
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    VerifyEmailComponent.prototype.redirectToFirstCompany = function (company) {
        var url = company.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
        jQuery(location).attr('href', env_config_1.Config.PROTOCOL + url);
    };
    VerifyEmailComponent.prototype.home = function () {
        this._router.navigate(['/']);
    };
    VerifyEmailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'verify-email',
            templateUrl: 'verify-email.component.html',
            styleUrls: ['verify-email.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, router_1.Router, index_1.LoggedInService, index_2.CompanyService, index_1.CookieService])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());
exports.VerifyEmailComponent = VerifyEmailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBaUUsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRixxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQTZELCtCQUErQixDQUFDLENBQUE7QUFDN0Ysc0JBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsMkJBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFTbkQ7SUFNRSw4QkFBb0IsRUFBZSxFQUFTLFlBQXlCLEVBQzNELE9BQWdCLEVBQVMsZUFBZ0MsRUFDekQsZUFBZ0MsRUFDaEMsY0FBOEI7UUFIcEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzNELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDekQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU54QyxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBT2hDLENBQUM7SUFFSix1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUV6QixDQUFDO0lBRUEsOENBQWUsR0FBZjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxHQUFHLEdBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDNUQsU0FBUyxDQUNSLFVBQUMsUUFBYTtZQUNaLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDVixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDeEMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FDTixDQUFDO0lBQ0gsQ0FBQztJQUVGLDRDQUFhLEdBQWIsVUFBYyxJQUFRLEVBQUUsTUFBb0I7UUFBNUMsaUJBK0JDO1FBL0J1QixzQkFBb0IsR0FBcEIsYUFBb0I7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2FBQ2pELFNBQVMsQ0FDUixVQUFDLFFBQWE7WUFDWixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV4QyxJQUFJLE9BQU8sR0FBRztvQkFDWixPQUFPLEVBQUksUUFBUSxDQUFDLEtBQUs7b0JBQ3pCLE1BQU0sRUFBSyxRQUFRLENBQUMsSUFBSTtvQkFDeEIsWUFBWSxFQUFFLEtBQUksQ0FBQyxPQUFPO29CQUMxQixTQUFTLEVBQUMsUUFBUSxDQUFDLE9BQU87b0JBQzFCLGFBQWEsRUFBRSxRQUFRLENBQUMsV0FBVztpQkFDcEMsQ0FBQztnQkFDRixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFJN0IsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBVTtZQUNULE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCxxREFBc0IsR0FBdEIsVUFBdUIsT0FBVztRQUNoQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxtQkFBTSxDQUFDLGFBQWEsR0FBQyxZQUFZLENBQUM7UUFDbkUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsbUJBQU0sQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVBLG1DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQW5GSjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN2QyxDQUFDOzs0QkFBQTtJQThFRiwyQkFBQztBQUFELENBN0VBLEFBNkVDLElBQUE7QUE3RVksNEJBQW9CLHVCQTZFaEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UsIExvZ2dlZEluU2VydmljZSwgQ29va2llU2VydmljZSB9ICBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAndmVyaWZ5LWVtYWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFZlcmlmeUVtYWlsQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2V0UGFzc3dvcmRGb3JtIDogRm9ybUdyb3VwO1xyXG4gIHRva2VuSGFzaCA6IHN0cmluZyA7XHJcbiAgYXV0aFRva2VuIDogc3RyaW5nID0nYWNjZXNzX3Rva2VuJztcclxuICBlcnJvck1zZyA6IHN0cmluZyA7XHJcbiAgY29tcGFueTphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIscHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyIDogUm91dGVyLHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb21wYW55U2VydmljZSA6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIGxpbmsgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB0aGlzLmNvbXBhbnkgPSBsaW5rLnNwbGl0KCcuJylbMF07XHJcbiAgICB0aGlzLmlzVG9rZW5WZXJpZmllZCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1ZFUlJSSUlJSUZGRkZZWVlZWSBFRUVNQUlMTExMTCcpO1xyXG4gIH1cclxuXHJcbiAgIGlzVG9rZW5WZXJpZmllZCgpIHtcclxuICAgICB2YXIgdXJsICAgICAgICA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICB0aGlzLnRva2VuSGFzaCA9IHVybC5zcGxpdCgnLycpWzJdO1xyXG4gICAgIGxldCB2ZXJpZmljYXRpb24gPSB0aGlzLl91c2VyU2VydmljZS52ZXJmaXlFbWFpbCh0aGlzLnRva2VuSGFzaClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVRva2VuKHJlc3BvbnNlLl9pZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcmJiYmJiYmJiYmJiYmJicscmVzcG9uc2UpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvciA6YW55ICkgPT4gIHtcclxuICAgICAgICAgICBqUXVlcnkoJyN0b2tlbi1lcnJvcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgIHZlcmlmaWNhdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgKTtcclxuICAgfVxyXG5cclxuICBnZW5lcmF0ZVRva2VuKGRhdGE6YW55LCBhY3Rpb246c3RyaW5nID0gbnVsbCkge1xyXG4gICAgbGV0IGFwcHJvdmFsID0gdGhpcy5fdXNlclNlcnZpY2UuZ2VuZXJhdGVUb2tlbihkYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS50b2tlbikge1xyXG4gICAgICAgICAgICByZXNwb25zZS5jb21wYW55TGlzdC5wdXNoKHRoaXMuY29tcGFueSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuY29tcGFueUxpc3QpO1xyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IHtcclxuICAgICAgICAgICAgICAndG9rZW4nICA6IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICd1c2VyJyAgIDogcmVzcG9uc2UudXNlcixcclxuICAgICAgICAgICAgICAnY29tcGFueV9pZCc6IHRoaXMuY29tcGFueSxcclxuICAgICAgICAgICAgICAnY29tcGFueSc6cmVzcG9uc2UuY29tcGFueSxcclxuICAgICAgICAgICAgICAnY29tcGFueUxpc3QnOiByZXNwb25zZS5jb21wYW55TGlzdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZih0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdzdG9yYWdlJyxKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRJblNlcnZpY2UubG9naW4oKTtcclxuICAgICAgICAgICAgLy8gbGV0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgICAgIC8vIGxldCBkYXNoYm9hcmQgPSBsaW5rLnNwbGl0KCcvJylbMF0rJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgICAgICAvLyBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCBkYXNoYm9hcmQgKTtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvRmlyc3RDb21wYW55KHJlc3BvbnNlLmNvbXBhbnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yIDphbnkgKSA9PiAge1xyXG4gICAgICAgICAgalF1ZXJ5KCcjYXBwcm92YWwtZXJyb3InKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgYXBwcm92YWwudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdFRvRmlyc3RDb21wYW55KGNvbXBhbnk6YW55KSB7XHJcbiAgICBsZXQgdXJsID0gY29tcGFueS5zdWJfZG9tYWluKycuJytDb25maWcuQVBQX0VYVEVOU0lPTisnL2Rhc2hib2FyZCc7XHJcbiAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLENvbmZpZy5QUk9UT0NPTCt1cmwpO1xyXG4gIH1cclxuXHJcbiAgIGhvbWUoKSB7XHJcbiAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgfVxyXG59XHJcbiJdfQ==
