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
var Logo = (function () {
    function Logo() {
    }
    Logo.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Logo.prototype, "data", void 0);
    Logo = __decorate([
        core_1.Component({
            selector: 'logo',
            directives: [],
            viewProviders: [],
            template: "\n      <header class=\"landing-page-header\" *ngIf=\"data.visible\" >\n        <div class=\" logo\">\n          <a href=\"javascript:void(0);\">\n            <img src=\"{{data.props.title}}\" alt=\"{{data.config.placeholder}}\">\n          </a>\n        </div>\n      </header>\n  ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Logo);
    return Logo;
}());
exports.Logo = Logo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9sb2dvL2xvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUYsZUFBZSxDQUFDLENBQUE7QUFpQmpHO0lBQUE7SUFNQSxDQUFDO0lBRkMsdUJBQVEsR0FBUixjQUFZLENBQUM7SUFIYjtRQUFDLFlBQUssRUFBRTs7c0NBQUE7SUFoQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixRQUFRLEVBQUUsNFJBUVQ7WUFDQSxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN2QyxDQUFDOztZQUFBO0lBT0YsV0FBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksWUFBSSxPQU1oQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9sb2dvL2xvZ28uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dvJyxcclxuICBkaXJlY3RpdmVzOiBbXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8aGVhZGVyIGNsYXNzPVwibGFuZGluZy1wYWdlLWhlYWRlclwiICpuZ0lmPVwiZGF0YS52aXNpYmxlXCIgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCIgbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2RhdGEucHJvcHMudGl0bGV9fVwiIGFsdD1cInt7ZGF0YS5jb25maWcucGxhY2Vob2xkZXJ9fVwiPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICBgLFxyXG4gICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iXX0=
