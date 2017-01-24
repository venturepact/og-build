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
var platform_browser_1 = require('@angular/platform-browser');
var SafeHtml = (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (html) {
        var styleSanitized = this.sanitizer.bypassSecurityTrustStyle(html);
        var htmlSanitized = this.sanitizer.bypassSecurityTrustHtml(html);
        return htmlSanitized;
    };
    SafeHtml = __decorate([
        core_1.Pipe({
            name: 'safeHtml'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], SafeHtml);
    return SafeHtml;
}());
exports.SafeHtml = SafeHtml;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9waXBlcy9zYWZlSHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsaUNBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFNakU7SUFDRSxrQkFBb0IsU0FBZ0M7UUFBaEMsY0FBUyxHQUFULFNBQVMsQ0FBdUI7SUFDcEQsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxJQUFTO1FBQ2pCLElBQUksY0FBYyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxhQUFhLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFaSDtRQUFDLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7O2dCQUFBO0lBV0YsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksZ0JBQVEsV0FTcEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvcGlwZXMvc2FmZUh0bWwucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXphdGlvblNlcnZpY2V9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3NhZmVIdG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6RG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGh0bWw6IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgc3R5bGVTYW5pdGl6ZWQ6IGFueSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShodG1sKTtcclxuICAgIGxldCBodG1sU2FuaXRpemVkOiBhbnkgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcclxuICAgIHJldHVybiBodG1sU2FuaXRpemVkO1xyXG4gIH1cclxufVxyXG4iXX0=
