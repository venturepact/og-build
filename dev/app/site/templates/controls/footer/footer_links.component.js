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
var FooterLinksComponent = (function () {
    function FooterLinksComponent() {
    }
    FooterLinksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterLinksComponent.prototype, "data", void 0);
    FooterLinksComponent = __decorate([
        core_1.Component({
            selector: 'footer-links',
            template: "\n    <div class=\" text-left\" *ngIf=\"data.visible == true\" >\n      <ul class=\"footer-nav\">\n        <li  *ngFor=\"let item of data.options;let i=index\">\n          <a href=\"{{item.value}}\">{{ item.label }}</a>\n          <span *ngIf=\"i < data.options.length-1\">-</span>\n        </li>\n      </ul>\n    </div>\n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], FooterLinksComponent);
    return FooterLinksComponent;
}());
exports.FooterLinksComponent = FooterLinksComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9mb290ZXIvZm9vdGVyX2xpbmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBa0IxRTtJQUFBO0lBT0EsQ0FBQztJQUhDLHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBSkg7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBakJSO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSx1VUFTVjtZQUVBLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7OzRCQUFBO0lBU0YsMkJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFvQix1QkFPaEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvZm9vdGVyL2Zvb3Rlcl9saW5rcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb290ZXItbGlua3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiIHRleHQtbGVmdFwiICpuZ0lmPVwiZGF0YS52aXNpYmxlID09IHRydWVcIiA+XHJcbiAgICAgIDx1bCBjbGFzcz1cImZvb3Rlci1uYXZcIj5cclxuICAgICAgICA8bGkgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGEub3B0aW9ucztsZXQgaT1pbmRleFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cInt7aXRlbS52YWx1ZX19XCI+e3sgaXRlbS5sYWJlbCB9fTwvYT5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaSA8IGRhdGEub3B0aW9ucy5sZW5ndGgtMVwiPi08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG5cdGAsXHJcblxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbkBJbnB1dCgpIGRhdGE6IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59Il19
