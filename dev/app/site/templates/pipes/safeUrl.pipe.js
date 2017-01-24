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
var SafeUrl = (function () {
    function SafeUrl(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrl.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrl = __decorate([
        core_1.Pipe({
            name: 'safeUrl'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], SafeUrl);
    return SafeUrl;
}());
exports.SafeUrl = SafeUrl;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9waXBlcy9zYWZlVXJsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCxpQ0FBc0QsMkJBQTJCLENBQUMsQ0FBQTtBQU1sRjtJQUNFLGlCQUFvQixTQUFnQztRQUFoQyxjQUFTLEdBQVQsU0FBUyxDQUF1QjtJQUNwRCxDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLEdBQVE7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVZIO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQzs7ZUFBQTtJQVNGLGNBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGVBQU8sVUFPbkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvcGlwZXMvc2FmZVVybC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2FmZVJlc291cmNlVXJsLCBEb21TYW5pdGl6YXRpb25TZXJ2aWNlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzYWZlVXJsJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhZmVVcmwgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjpEb21TYW5pdGl6YXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odXJsOiBhbnkpOiBTYWZlUmVzb3VyY2VVcmwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1cmwpO1xyXG4gIH1cclxufVxyXG4iXX0=
