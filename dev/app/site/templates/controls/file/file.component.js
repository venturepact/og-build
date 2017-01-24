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
var File = (function () {
    function File() {
    }
    File.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], File.prototype, "data", void 0);
    File = __decorate([
        core_1.Component({
            selector: 'file',
            directives: [],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\t\t<div class=\"pull-left file-outer\">\n\t\t\t<div class=\"section-head\" >\n\t\t\t\t\t<span class=\"pull-left\">\n\t\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t\t\t<div class=\"help-outer\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" *ngIf=\"data.config.showHelp\">help_outline</i>\n\t\t\t\t\t\t\t\t\t<div class=\"help-text\">{{data.props.helpText}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</span> \n\t\t\t</div>\n\t\t\t<div class=\"file-field input-field\">\n\t\t\t\t<input type=\"file\" tabindex=\"0\">\n\t\t\t\t<div class=\"file-path-wrapper\">\n\t\t\t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"File upload\"><span class=\"input-group-addon input-icon\"><i class=\"material-icons\">cloud_upload</i></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], File);
    return File;
}());
exports.File = File;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0YsZUFBZSxDQUFDLENBQUE7QUE0Qi9HO0lBQUE7SUFPQSxDQUFDO0lBSkMsdUJBQVEsR0FBUjtJQUVBLENBQUM7SUFKRDtRQUFDLFlBQUssRUFBRTs7c0NBQUE7SUEzQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNwQyxRQUFRLEVBQUUscXhCQWtCVjtTQUNELENBQUM7O1lBQUE7SUFTRixXQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxZQUFJLE9BT2hCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlsZScsXHJcbiAgZGlyZWN0aXZlczogW10sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG5cdFx0PGRpdiBjbGFzcz1cInB1bGwtbGVmdCBmaWxlLW91dGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRcIiA+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInB1bGwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7ZGF0YS5wcm9wcy50aXRsZX19XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtb3V0ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiICpuZ0lmPVwiZGF0YS5jb25maWcuc2hvd0hlbHBcIj5oZWxwX291dGxpbmU8L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj57e2RhdGEucHJvcHMuaGVscFRleHR9fTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9zcGFuPiBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWxlLWZpZWxkIGlucHV0LWZpZWxkXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgdGFiaW5kZXg9XCIwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZpbGUtcGF0aC13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmaWxlLXBhdGggdmFsaWRhdGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlsZSB1cGxvYWRcIj48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGlucHV0LWljb25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvdWRfdXBsb2FkPC9pPjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vY29kZVxyXG4gIH1cclxuXHJcbn1cclxuIl19
