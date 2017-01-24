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
var feature_access_service_1 = require('./../services/feature-access.service');
var AnalyticsGuard = (function () {
    function AnalyticsGuard(router, featureAuth) {
        this.router = router;
        this.featureAuth = featureAuth;
    }
    AnalyticsGuard.prototype.canActivate = function () {
        return this.featureAuth.getfeatureAccess('analytics');
    };
    AnalyticsGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, feature_access_service_1.FeatureAuthService])
    ], AnalyticsGuard);
    return AnalyticsGuard;
}());
exports.AnalyticsGuard = AnalyticsGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vYW5hbHl0aWNzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFFckQsdUNBQWlDLHNDQUFzQyxDQUFDLENBQUE7QUFFeEU7SUFFQyx3QkFBb0IsTUFBYyxFQUFVLFdBQWdDO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7SUFFNUUsQ0FBQztJQUVDLG9DQUFXLEdBQVg7UUFDRSxNQUFNLENBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBVEo7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWViLHFCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxzQkFBYyxpQkFjMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2F1dGhlbnRpY2F0aW9uL2FuYWx5dGljcy5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNMb2dnZWRpbiB9IGZyb20gJy4vaXMtbG9nZ2VkaW4nO1xyXG5pbXBvcnQge0ZlYXR1cmVBdXRoU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZmVhdHVyZUF1dGggOiBGZWF0dXJlQXV0aFNlcnZpY2UpIHtcclxuXHRcdC8vdGhpcy5nZXRBY2Nlc3MoKTtcclxuXHR9XHJcblxyXG4gIFx0Y2FuQWN0aXZhdGUoKSB7XHJcbiAgIFx0XHRyZXR1cm4gPGJvb2xlYW4+dGhpcy5mZWF0dXJlQXV0aC5nZXRmZWF0dXJlQWNjZXNzKCdhbmFseXRpY3MnKTtcclxuICBcdH1cclxuXHQgLyogY2FuQWN0aXZhdGUoKSB7XHJcbiAgcmV0dXJuIHRydWU7Ly90aGlzLmZlYXR1cmVBdXRoLmdldGZlYXR1cmVBY2Nlc3MoXCJhbmFseXRpY3NcIik7XHJcbiBcdH0qL1xyXG5cclxuXHJcbn1cclxuIl19
