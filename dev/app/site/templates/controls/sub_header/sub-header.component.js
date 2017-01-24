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
var SubHeader = (function () {
    function SubHeader() {
    }
    SubHeader.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubHeader.prototype, "data", void 0);
    SubHeader = __decorate([
        core_1.Component({
            selector: 'sub_header',
            directives: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SubHeader);
    return SubHeader;
}());
exports.SubHeader = SubHeader;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zdWJfaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkQsZUFBZSxDQUFDLENBQUE7QUFDM0Usc0JBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFhN0M7SUFBQTtJQU9BLENBQUM7SUFIQyw0QkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUpEO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQVpWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFFLEVBQUU7WUFDakIsS0FBSyxFQUFDLENBQUMsZ0JBQVEsQ0FBQztZQUNoQixRQUFRLEVBQUUseUdBR1Y7WUFDQSxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDOztpQkFBQTtJQVFGLGdCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxpQkFBUyxZQU9yQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zdWJfaGVhZGVyL3N1Yi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWJfaGVhZGVyJyxcclxuICBkaXJlY3RpdmVzOiBbXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICBwaXBlczpbU2FmZUh0bWxdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtpbm5lckh0bWxdPVwiZGF0YS5wcm9wcy50aXRsZSB8IHNhZmVIdG1sXCIgW2NsYXNzXT1cImRhdGEuZGVmYXVsdENsYXNzXCI+XHJcbiAgICA8L2Rpdj4gIFxyXG5cdGAsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViSGVhZGVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufSJdfQ==
