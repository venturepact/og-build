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
var RemoveTags = (function () {
    function RemoveTags() {
    }
    RemoveTags.prototype.transform = function (body) {
        var regex = /(<([^>]+)>)/ig;
        var html = body.replace(regex, "");
        return html;
    };
    RemoveTags = __decorate([
        core_1.Pipe({
            name: 'removeTags'
        }), 
        __metadata('design:paramtypes', [])
    ], RemoveTags);
    return RemoveTags;
}());
exports.RemoveTags = RemoveTags;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9waXBlcy9SZW1vdmVUYWdzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQU9uRDtJQUVFO0lBRUEsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxJQUFTO1FBQ2pCLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWRIO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQzs7a0JBQUE7SUFhRixpQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0JBQVUsYUFXdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvcGlwZXMvUmVtb3ZlVGFncy5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3JlbW92ZVRhZ3MnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlVGFncyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vY29kZVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGJvZHk6IGFueSk6IHN0cmluZyB7XHJcbiAgICB2YXIgcmVnZXggPSAvKDwoW14+XSspPikvaWc7XHJcbiAgICB2YXIgaHRtbCA9IGJvZHkucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcbn1cclxuIl19
