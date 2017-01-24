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
var PoweredByComponent = (function () {
    function PoweredByComponent() {
    }
    PoweredByComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PoweredByComponent.prototype, "data", void 0);
    PoweredByComponent = __decorate([
        core_1.Component({
            selector: 'poweredby',
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"https://outgrow.co/\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"./app/site/templates/templateAll/one_page_slider/templatesHtml/assets/images/footer-logo.png\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());
exports.PoweredByComponent = PoweredByComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9mb290ZXIvcG93ZXJlZGJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBaUIxRTtJQUFBO0lBSUEsQ0FBQztJQUZDLHFDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRGI7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBaEJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwyWEFTVjtZQUNFLGFBQWEsRUFBQyx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3ZDLENBQUM7OzBCQUFBO0lBTUYseUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDBCQUFrQixxQkFJOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvZm9vdGVyL3Bvd2VyZWRieS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwb3dlcmVkYnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiIHRleHQtcmlnaHRcIiAqbmdJZj1cImRhdGEudmlzaWJsZSA9PSB0cnVlXCIgPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiIHBvd2VyZWQtYnlcIj5cclxuXHRcdFx0XHQ8c3Bhbj5Qb3dlcmVkIGJ5IDwvc3Bhbj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9vdXRncm93LmNvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL29uZV9wYWdlX3NsaWRlci90ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9pbWFnZXMvZm9vdGVyLWxvZ28ucG5nXCIgYWx0PVwiUG93ZXJlZCBCeVwiPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgLFxyXG4gICAgZW5jYXBzdWxhdGlvbjpWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG93ZXJlZEJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iXX0=
