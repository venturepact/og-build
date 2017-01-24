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
var router_1 = require('@angular/router');
var index_1 = require('./../services/index');
var router_2 = require('@angular/router');
var env_config_1 = require('./../../config/env.config');
var NotFoundComponent = (function () {
    function NotFoundComponent(_cookieService, _router) {
        this._cookieService = _cookieService;
        this._router = _router;
        this.isLoggedin = false;
    }
    ;
    NotFoundComponent.prototype.ngOnInit = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            this.isLoggedin = true;
        }
    };
    NotFoundComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    NotFoundComponent.prototype.pricing = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/pricing.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.features = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/features.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.whyCalculators = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/why_calculators.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.examples = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/examples.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-not-found',
            templateUrl: 'notfound.component.html',
            styleUrls: ['notfound.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [index_1.CookieService, router_2.Router])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQTRCLHFCQUFxQixDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFZbkQ7SUFJSSwyQkFDb0IsY0FBNEIsRUFDNUIsT0FBYztRQURkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFKbEMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUtmLENBQUM7O0lBRWQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUUsbUJBQU0sQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO0lBQ0MsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNGLG1DQUFPLEdBQVA7UUFDSyxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFNLENBQUMsYUFBYSxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLG1CQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsZUFBZSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQU0sQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsbUJBQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxnQkFBZ0IsQ0FBQztRQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFNLENBQUMsYUFBYSxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLG1CQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsdUJBQXVCLENBQUM7UUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFFQSxvQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBTSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxtQkFBTSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLGdCQUFnQixDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBMURMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUMseUJBQXlCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2xDLENBQUM7O3lCQUFBO0lBcURELHdCQUFDO0FBQUQsQ0FuREQsQUFtREUsSUFBQTtBQW5EVyx5QkFBaUIsb0JBbUQ1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnb2ctbm90LWZvdW5kJyxcclxuICAgIHRlbXBsYXRlVXJsOidub3Rmb3VuZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnbm90Zm91bmQuY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIGlzTG9nZ2VkaW4gOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxpbmsgOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCAgXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKVxyXG4gICAgICAgICAgICAgICAge307XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5saW5rPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBsZXQgc3RvcmFnZSA6IGFueSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcblx0XHRcdHRoaXMuaXNMb2dnZWRpbiA9IHRydWU7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG4gICBwcmljaW5nKCl7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsrJy9wcmljaW5nLmh0bWwnO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicscHJvdG9jb2wgKyB1cmwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmZWF0dXJlcygpe1xyXG4gICAgICAgIHRoaXMubGluayA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gICAgICAgIGxldCBwcm90b2NvbCA9IENvbmZpZy5QUk9UT0NPTDtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5saW5rKycvZmVhdHVyZXMuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxwcm90b2NvbCArIHVybCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHdoeUNhbGN1bGF0b3JzKCl7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsrJy93aHlfY2FsY3VsYXRvcnMuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxwcm90b2NvbCArIHVybCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICBleGFtcGxlcygpe1xyXG4gICAgICAgIHRoaXMubGluayA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gICAgICAgIGxldCBwcm90b2NvbCA9IENvbmZpZy5QUk9UT0NPTDtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5saW5rKycvZXhhbXBsZXMuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxwcm90b2NvbCArIHVybCk7XHJcblxyXG4gICAgfVxyXG4gfVxyXG4iXX0=
