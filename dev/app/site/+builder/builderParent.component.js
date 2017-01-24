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
var index_1 = require('./../../shared/services/index');
var BuilderParentComponent = (function () {
    function BuilderParentComponent(_cookieService, _featureAuthService) {
        this._cookieService = _cookieService;
        this._featureAuthService = _featureAuthService;
    }
    BuilderParentComponent.prototype.ngOnInit = function () {
        if (this._cookieService.readCookie('storage'))
            this._featureAuthService.getAllFeatureAccess();
    };
    BuilderParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-builder',
            template: "\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CookieService, index_1.FeatureAuthService])
    ], BuilderParentComponent);
    return BuilderParentComponent;
}());
exports.BuilderParentComponent = BuilderParentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2J1aWxkZXJQYXJlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQWlELCtCQUErQixDQUFDLENBQUE7QUFXakY7SUFDSSxnQ0FDVSxjQUE4QixFQUM5QixtQkFBd0M7UUFEeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFHbEQsQ0FBQztJQUNELHlDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBbkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsMkNBRVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOzs4QkFBQTtJQWFGLDZCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSw4QkFBc0IseUJBV2xDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvYnVpbGRlclBhcmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSwgRmVhdHVyZUF1dGhTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLWJ1aWxkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRlclBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlIDogRmVhdHVyZUF1dGhTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICBpZih0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSlcclxuICAgICAgICAgICAgdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmdldEFsbEZlYXR1cmVBY2Nlc3MoKTtcclxuICAgIH1cclxufSJdfQ==
