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
var controls_1 = require('./controls');
var forms_1 = require('@angular/forms');
var Control = (function () {
    function Control() {
        this.controlOutput = new core_1.EventEmitter();
    }
    Control.prototype.ngOnInit = function () {
    };
    Control.prototype.onControlOutput = function (value) {
        this.controlOutput.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Control.prototype, "page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Control.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], Control.prototype, "form", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Control.prototype, "devMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Control.prototype, "controlOutput", void 0);
    Control = __decorate([
        core_1.Component({
            selector: 'control',
            directives: [controls_1.CONTROLS],
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\" [devMode]=\"devMode\" ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></radio-button>\n          <header *ngIf=\"data.type=='header'\" [data]=\"data\" ></header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" [devMode]=\"devMode\"></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></slider>\n          <date-picker *ngIf=\"data.type=='date-picker'\" [data]=\"data\" ></date-picker>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" [devMode]=\"devMode\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" [devMode]=\"devMode\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" [devMode]=\"devMode\"></switchbox>\n          <counter *ngIf=\"data.type=='counter'\" [data]=\"data\" [devMode]=\"devMode\"></counter>\n\t\t      <file *ngIf=\"data.type=='file'\" [data]=\"data\" ></file>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\" [devMode]=\"devMode\" [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_summary *ngIf=\"data.type=='result_summary'\" [data]=\"data\"></result_summary>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
}());
exports.Control = Control;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBQy9FLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQUNwQyxzQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQXdDM0M7SUFBQTtRQUtZLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFVL0MsQ0FBQztJQVBDLDBCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsaUNBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFiRDtRQUFDLFlBQUssRUFBRTs7eUNBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eUNBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eUNBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7a0RBQUE7SUExQ1g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsVUFBVSxFQUFFLENBQUMsbUJBQVEsQ0FBQztZQUN0QixRQUFRLEVBQUUsd21GQTRCTDtTQUNOLENBQUM7O2VBQUE7SUFvQkYsY0FBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksZUFBTyxVQWVuQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT05UUk9MU30gZnJvbSAnLi9jb250cm9scyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb250cm9sJyxcclxuICBkaXJlY3RpdmVzOiBbQ09OVFJPTFNdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICA8dGV4dGZpZWxkICpuZ0lmPVwiZGF0YS50eXBlPT0ndGV4dGZpZWxkJ1wiIFtkYXRhXT1cImRhdGFcIiBbZm9ybV09XCJmb3JtXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiPjwvdGV4dGZpZWxkPlxyXG4gICAgICAgICAgPHRleHRfYXJlYSAqbmdJZj1cImRhdGEudHlwZT09J3RleHQtYXJlYSdcIiBbZGF0YV09XCJkYXRhXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiID48L3RleHRfYXJlYT5cclxuICAgICAgICAgIDxzZWxlY3Rib3ggKm5nSWY9XCJkYXRhLnR5cGU9PSdzZWxlY3Rib3gnXCIgW2RhdGFdPVwiZGF0YVwiIFtmb3JtXT1cImZvcm1cIiBbZGV2TW9kZV09XCJkZXZNb2RlXCI+PC9zZWxlY3Rib3g+XHJcbiAgICAgICAgICA8cmFkaW8tYnV0dG9uICpuZ0lmPVwiZGF0YS50eXBlPT0ncmFkaW9fYnV0dG9uJ1wiIFtkYXRhXT1cImRhdGFcIiBbZm9ybV09XCJmb3JtXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiPjwvcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgPGhlYWRlciAqbmdJZj1cImRhdGEudHlwZT09J2hlYWRlcidcIiBbZGF0YV09XCJkYXRhXCIgPjwvaGVhZGVyPlxyXG4gICAgICAgICAgPHN1Yl9oZWFkZXIgKm5nSWY9XCJkYXRhLnR5cGU9PSdzdWJfaGVhZGVyJ1wiIFtkYXRhXT1cImRhdGFcIiA+PC9zdWJfaGVhZGVyPlxyXG4gICAgICAgICAgPGNsaWNrLWJ1dHRvbiAqbmdJZj1cImRhdGEudHlwZT09J2NsaWNrX2J1dHRvbidcIiBbZGF0YV09XCJkYXRhXCJcclxuICAgICAgICAgICAgKGNvbnRyb2xPdXRwdXQpPVwib25Db250cm9sT3V0cHV0KCRldmVudClcIiBbZGV2TW9kZV09XCJkZXZNb2RlXCI+PC9jbGljay1idXR0b24+XHJcbiAgICAgIFx0XHQ8bG9nbyAqbmdJZj1cImRhdGEudHlwZT09J2xvZ28nXCIgW2RhdGFdPVwiZGF0YVwiID48L2xvZ28+XHJcbiAgICAgICAgICA8c2xpZGVyICpuZ0lmPVwiZGF0YS50eXBlPT0nc2xpZGVyJ1wiIFtkYXRhXT1cImRhdGFcIiBbZm9ybV09XCJmb3JtXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiPjwvc2xpZGVyPlxyXG4gICAgICAgICAgPGRhdGUtcGlja2VyICpuZ0lmPVwiZGF0YS50eXBlPT0nZGF0ZS1waWNrZXInXCIgW2RhdGFdPVwiZGF0YVwiID48L2RhdGUtcGlja2VyPlxyXG4gICAgICAgICAgPGxlYWRmb3JtX3F1ZXN0aW9uICpuZ0lmPVwiZGF0YS50eXBlPT0nbGVhZGZvcm1fcXVlc3Rpb24nXCIgW2RhdGFdPVwiZGF0YVwiXHJcbiAgICAgICAgICAgIChjb250cm9sT3V0cHV0KT1cIm9uQ29udHJvbE91dHB1dCgkZXZlbnQpXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiID48L2xlYWRmb3JtX3F1ZXN0aW9uPlxyXG4gICAgICAgICAgPGxlYWRmb3JtICpuZ0lmPVwiZGF0YS50eXBlPT0nbGVhZGZvcm0nXCIgW2RhdGFdPVwiZGF0YVwiIFtwYWdlXT1cInBhZ2VcIlxyXG4gICAgICAgICAgIChjb250cm9sT3V0cHV0KT1cIm9uQ29udHJvbE91dHB1dCgkZXZlbnQpXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiID48L2xlYWRmb3JtPlxyXG4gICAgICAgICAgPHBvd2VyZWRieSAqbmdJZj1cImRhdGEudHlwZT09J3Bvd2VyZWRieSdcIiAgW2RhdGFdPVwiZGF0YVwiID48L3Bvd2VyZWRieT5cclxuICAgICAgICAgIDxmb290ZXItbGlua3MgKm5nSWY9XCJkYXRhLnR5cGU9PSdmb290ZXJfbGlua3MnXCIgIFtkYXRhXT1cImRhdGFcIiA+PC9mb290ZXItbGlua3M+XHJcbiAgICAgICAgICA8Y2hlY2tib3ggKm5nSWY9XCJkYXRhLnR5cGU9PSdjaGVja2JveCdcIiBbZGF0YV09XCJkYXRhXCIgW2Zvcm1dPVwiZm9ybVwiIFtkZXZNb2RlXT1cImRldk1vZGVcIj48L2NoZWNrYm94PlxyXG4gICAgICAgICAgPHN3aXRjaGJveCAqbmdJZj1cImRhdGEudHlwZT09J3N3aXRjaGJveCdcIiBbZGF0YV09XCJkYXRhXCIgW2Zvcm1dPVwiZm9ybVwiIFtkZXZNb2RlXT1cImRldk1vZGVcIj48L3N3aXRjaGJveD5cclxuICAgICAgICAgIDxjb3VudGVyICpuZ0lmPVwiZGF0YS50eXBlPT0nY291bnRlcidcIiBbZGF0YV09XCJkYXRhXCIgW2Rldk1vZGVdPVwiZGV2TW9kZVwiPjwvY291bnRlcj5cclxuXHRcdCAgICAgIDxmaWxlICpuZ0lmPVwiZGF0YS50eXBlPT0nZmlsZSdcIiBbZGF0YV09XCJkYXRhXCIgPjwvZmlsZT5cclxuICAgICAgICAgIDxyZXN1bHRfb3V0cHV0ICpuZ0lmPVwiZGF0YS50eXBlPT0ncmVzdWx0X291dHB1dCdcIiBbZGF0YV09XCJkYXRhXCIgPjwvcmVzdWx0X291dHB1dD5cclxuICAgICAgICAgIDxyZXN1bHRfaGVhZGVyICpuZ0lmPVwiZGF0YS50eXBlPT0ncmVzdWx0X2hlYWRlcidcIiBbZGF0YV09XCJkYXRhXCIgPjwvcmVzdWx0X2hlYWRlcj5cclxuICAgICAgICAgIDxzaGFyZV9saW5rcyAqbmdJZj1cImRhdGEudHlwZT09J3NoYXJlX2xpbmtzJ1wiIFtkZXZNb2RlXT1cImRldk1vZGVcIiBbZGF0YV09XCJkYXRhXCIgPjwvc2hhcmVfbGlua3M+XHJcbiAgICAgICAgICA8cmVzdWx0X2Rpc2NsYWltZXIgKm5nSWY9XCJkYXRhLnR5cGU9PSdyZXN1bHRfZGlzY2xhaW1lcidcIiBbZGF0YV09XCJkYXRhXCIgPjwvcmVzdWx0X2Rpc2NsYWltZXI+XHJcbiAgICAgICAgICA8cmVzdWx0X3N1bW1hcnkgKm5nSWY9XCJkYXRhLnR5cGU9PSdyZXN1bHRfc3VtbWFyeSdcIiBbZGF0YV09XCJkYXRhXCI+PC9yZXN1bHRfc3VtbWFyeT5cclxuICAgICAgICAgIDxyZXN1bHRfcmVkbyAqbmdJZj1cImRhdGEudHlwZT09J3Jlc3VsdF9yZWRvJ1wiIFtkYXRhXT1cImRhdGFcIiA+PC9yZXN1bHRfcmVkbz5cclxuICAgICAgYCxcclxufSlcclxuLy8gPG5nMi1zZWxlY3QgKm5nSWY9XCJkYXRhLnR5cGU9PSdkcm9wZG93bidcIiBbZGF0YV09XCJkYXRhXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbmcyLXNlbGVjdD5cclxuLy8gPG51bWVyaWNmaWVsZCAqbmdJZj1cImRhdGEudHlwZT09J251bWVyaWN0ZXh0ZmllbGQnXCIgW2RhdGFdPVwiZGF0YVwiIFtmb3JtXT1cImZvcm1cIj48L251bWVyaWNmaWVsZD5cclxuLy8gPGVtYWlsZmllbGQgKm5nSWY9XCJkYXRhLnR5cGU9PSdlbWFpbGZpZWxkJ1wiIFtkYXRhXT1cImRhdGFcIiBbZm9ybV09XCJmb3JtXCI+PC9lbWFpbGZpZWxkPlxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHBhZ2U6YW55O1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgZGV2TW9kZTogYW55O1xyXG4gIEBPdXRwdXQoKSBjb250cm9sT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInBhZzAwMDAwMDAwMDAwMDAwMDAwMGVcIix0aGlzLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgb25Db250cm9sT3V0cHV0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuY29udHJvbE91dHB1dC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19
