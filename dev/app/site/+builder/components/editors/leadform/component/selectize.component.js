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
var Selectize = (function () {
    function Selectize() {
        this.displayTypes = [];
    }
    Selectize.prototype.changed = function (event) {
    };
    Selectize.prototype.ngOnInit = function () {
        var self = this;
        for (var type in this.types) {
            if (this.types[type] == 'tel')
                this.displayTypes.push('Phone Number');
            else if (this.types[type] == 'lastName')
                this.displayTypes.push('Others');
            else if (this.types[type] == 'firstName')
                this.displayTypes.push('Name');
            else if (this.types[type] == 'email')
                this.displayTypes.push('Email');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Selectize.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Selectize.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Selectize.prototype, "types", void 0);
    Selectize = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selectize',
            template: "\n         <div class=\"input-group\">\n            <span class=\"no-padding option-label\">\n                <span class=\"astrik-label\" *ngIf=\"field.validations.required.status\">*</span>\n                <span class=\"astrik-label not-man\" *ngIf=\"!field.validations.required.status\">*</span>\n            </span>\n          <div class=\"col-md-10 col-xs-10 no-padding\">\n            <select class=\"select-default\"  [(ngModel)]=\"field.type\" (change)=\"changed($event)\">\n              <option *ngFor=\"let type of types;let i=index\" [value]=\"type\">\n              {{displayTypes[i]}}</option>\n            </select> \n          </div>\n          <div class=\"col-md-12\" style=\"padding-right: 0px;\">\n            <label class=\"check-value\">PLACEHOLDER</label>\n            <input type=\"text\" class=\"form-control form-text value-text \"  [(ngModel)] = \"field.placeholder\">\n          </div>\n          \n        </div>\n      \n    ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Selectize);
    return Selectize;
}());
exports.Selectize = Selectize;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9sZWFkZm9ybS9jb21wb25lbnQvc2VsZWN0aXplLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBNEI1RTtJQUtJO1FBREEsaUJBQVksR0FBUSxFQUFFLENBQUM7SUFHdkIsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxLQUFTO0lBRWpCLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQXRCRDtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUE1Qlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSw4N0JBbUJUO1lBQ0QsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7aUJBQUE7SUF5QkYsZ0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGlCQUFTLFlBd0JyQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9sZWFkZm9ybS9jb21wb25lbnQvc2VsZWN0aXplLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdGl6ZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuby1wYWRkaW5nIG9wdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhc3RyaWstbGFiZWxcIiAqbmdJZj1cImZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1c1wiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFzdHJpay1sYWJlbCBub3QtbWFuXCIgKm5nSWY9XCIhZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBjb2wteHMtMTAgbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0LWRlZmF1bHRcIiAgWyhuZ01vZGVsKV09XCJmaWVsZC50eXBlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB0eXBlIG9mIHR5cGVzO2xldCBpPWluZGV4XCIgW3ZhbHVlXT1cInR5cGVcIj5cclxuICAgICAgICAgICAgICB7e2Rpc3BsYXlUeXBlc1tpXX19PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMHB4O1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVjay12YWx1ZVwiPlBMQUNFSE9MREVSPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS10ZXh0IHZhbHVlLXRleHQgXCIgIFsobmdNb2RlbCldID0gXCJmaWVsZC5wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICBgLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aXplIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGZpZWxkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBpbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgdHlwZXM6IGFueTtcclxuICAgIGRpc3BsYXlUeXBlczogYW55ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL3RoaXMuY29udHJvbCA9IGpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlZChldmVudDphbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygna2FhYScsZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChsZXQgdHlwZSBpbiB0aGlzLnR5cGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVzW3R5cGVdID09ICd0ZWwnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VHlwZXMucHVzaCgnUGhvbmUgTnVtYmVyJyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZXNbdHlwZV0gPT0gJ2xhc3ROYW1lJylcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVR5cGVzLnB1c2goJ090aGVycycpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVzW3R5cGVdID09ICdmaXJzdE5hbWUnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VHlwZXMucHVzaCgnTmFtZScpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVzW3R5cGVdID09ICdlbWFpbCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUeXBlcy5wdXNoKCdFbWFpbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
