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
var SafeStyle = (function () {
    function SafeStyle(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStyle.prototype.transform = function (style) {
        var styleSanitized = this.sanitizer.bypassSecurityTrustStyle(style);
        return styleSanitized;
    };
    SafeStyle = __decorate([
        core_1.Pipe({
            name: 'safeStyle'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], SafeStyle);
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9waXBlcy9zYWZlU3R5bGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELGlDQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBTWpFO0lBQ0UsbUJBQW9CLFNBQWdDO1FBQWhDLGNBQVMsR0FBVCxTQUFTLENBQXVCO0lBQ3BELENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixJQUFJLGNBQWMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQVhIO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFdBQVc7U0FDcEIsQ0FBQzs7aUJBQUE7SUFVRixnQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksaUJBQVMsWUFRckIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvcGlwZXMvc2FmZVN0eWxlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6YXRpb25TZXJ2aWNlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzYWZlU3R5bGUnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2FmZVN0eWxlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6RG9tU2FuaXRpemF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHN0eWxlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN0eWxlU2FuaXRpemVkOiBhbnkgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gICAgcmV0dXJuIHN0eWxlU2FuaXRpemVkO1xyXG4gIH1cclxufVxyXG4iXX0=
