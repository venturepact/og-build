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
var index_1 = require('../../pipes/index');
var Header = (function () {
    function Header() {
    }
    Header.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Header.prototype, "data", void 0);
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            directives: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBYTdDO0lBQUE7SUFPQSxDQUFDO0lBSEMseUJBQVEsR0FBUjtJQUNBLENBQUM7SUFKRDtRQUFDLFlBQUssRUFBRTs7d0NBQUE7SUFaVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLEtBQUssRUFBQyxDQUFDLGdCQUFRLENBQUM7WUFDaEIsUUFBUSxFQUFFLHlHQUdWO1lBQ0EsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQzs7Y0FBQTtJQVFGLGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGNBQU0sU0FPbEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlcicsXHJcbiAgZGlyZWN0aXZlczogW10sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgcGlwZXM6W1NhZmVIdG1sXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImRhdGEucHJvcHMudGl0bGUgfCBzYWZlSHRtbFwiIFtjbGFzc109XCJkYXRhLmRlZmF1bHRDbGFzc1wiPlxyXG4gICAgPC9kaXY+ICBcclxuXHRgLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn0iXX0=
