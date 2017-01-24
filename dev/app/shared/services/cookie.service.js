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
var env_config_1 = require('./../../config/env.config');
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.createCookie = function (name, value, days) {
        var expires = "";
        var domain = env_config_1.Config.APP_EXTENSION;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
    };
    CookieService.prototype.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    CookieService.prototype.eraseCookie = function (name) {
        this.createCookie(name, "", -1);
    };
    CookieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywyQkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQUduRDtJQUFBO0lBMEJBLENBQUM7SUF6Qkcsb0NBQVksR0FBWixVQUFhLElBQVcsRUFBQyxLQUFZLEVBQUMsSUFBVztRQUM3QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQUksbUJBQU0sQ0FBQyxhQUFhLENBQUM7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxPQUFPLEdBQUcsWUFBWSxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUMsR0FBRyxHQUFDLEtBQUssR0FBQyxPQUFPLEdBQUMsV0FBVyxHQUFDLE1BQU0sR0FBQyxVQUFVLENBQUM7SUFDM0UsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFXO1FBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLEdBQUc7Z0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQVc7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTFCTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBMkJiLG9CQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxxQkFBYSxnQkEwQnpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jb29raWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIHtcclxuICAgIGNyZWF0ZUNvb2tpZShuYW1lOnN0cmluZyx2YWx1ZTpzdHJpbmcsZGF5czpudW1iZXIpIHtcclxuICAgICAgICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGRvbWFpbiAgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBpZiAoZGF5cykge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUrXCI9XCIrdmFsdWUrZXhwaXJlcytcIjsgZG9tYWluPVwiK2RvbWFpbitcIjsgcGF0aD0vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZENvb2tpZShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIGxldCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgICAgICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBlcmFzZUNvb2tpZShuYW1lOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29va2llKG5hbWUsXCJcIiwtMSk7XHJcbiAgICB9XHJcbn1cclxuIl19
