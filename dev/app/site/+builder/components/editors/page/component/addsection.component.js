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
var editor_wysiwyg_component_1 = require('../../../editors/wysiwyg/editor_wysiwyg.component');
var AddSection = (function () {
    function AddSection() {
    }
    AddSection.prototype.toggleSection = function () {
        this.control.visible = !this.control.visible;
    };
    AddSection.prototype.callGA = function (opt) {
        switch (opt) {
            case "TOGGLERESULTDESC":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Result Description Toggle');
                _kmq.push(['record', 'Builder Result Description Toggle']);
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddSection.prototype, "control", void 0);
    AddSection = __decorate([
        core_1.Component({
            moduleId: module.id,
            directives: [editor_wysiwyg_component_1.EditorWysiwyg],
            selector: 'add_section',
            template: "\n            <div class=\"form-label\" [class.no-margin]=\"!control.visible\">DESCRIPTION:</div>\n            <div class=\"switch\">\n                <label>\n                    <input type=\"checkbox\" class=\"show-check\" [checked]=\"control.visible\" (change)=\"toggleSection($event);callGA('TOGGLERESULTDESC')\">\n                    <span class=\"lever\"></span>\n                </label>\n            </div>\n            <div class=\"div-check\" [class.hide]=\"!control.visible\">\n                <editor-wysiwyg [controls]=\"control\"></editor-wysiwyg>\n            </div>\n    ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], AddSection);
    return AddSection;
}());
exports.AddSection = AddSection;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2NvbXBvbmVudC9hZGRzZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9ELGVBQWUsQ0FBQyxDQUFBO0FBQ3BFLHlDQUE4QixtREFBbUQsQ0FBQyxDQUFBO0FBd0JsRjtJQUFBO0lBZUEsQ0FBQztJQVpHLGtDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sR0FBVztRQUNkLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLGtCQUFrQjtnQkFDbkIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQWJEO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQXBCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsVUFBVSxFQUFFLENBQUMsd0NBQWEsQ0FBQztZQUMzQixRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsOGtCQVdUO1lBQ0QsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7a0JBQUE7SUFpQkYsaUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGtCQUFVLGFBZXRCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3BhZ2UvY29tcG9uZW50L2FkZHNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdG9yV3lzaXd5ZyB9IGZyb20gJy4uLy4uLy4uL2VkaXRvcnMvd3lzaXd5Zy9lZGl0b3Jfd3lzaXd5Zy5jb21wb25lbnQnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOmFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIGRpcmVjdGl2ZXM6IFtFZGl0b3JXeXNpd3lnXSxcclxuICAgIHNlbGVjdG9yOiAnYWRkX3NlY3Rpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIiBbY2xhc3Mubm8tbWFyZ2luXT1cIiFjb250cm9sLnZpc2libGVcIj5ERVNDUklQVElPTjo8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNob3ctY2hlY2tcIiBbY2hlY2tlZF09XCJjb250cm9sLnZpc2libGVcIiAoY2hhbmdlKT1cInRvZ2dsZVNlY3Rpb24oJGV2ZW50KTtjYWxsR0EoJ1RPR0dMRVJFU1VMVERFU0MnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGV2ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdi1jaGVja1wiIFtjbGFzcy5oaWRlXT1cIiFjb250cm9sLnZpc2libGVcIj5cclxuICAgICAgICAgICAgICAgIDxlZGl0b3Itd3lzaXd5ZyBbY29udHJvbHNdPVwiY29udHJvbFwiPjwvZWRpdG9yLXd5c2l3eWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRTZWN0aW9uIHtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuXHJcbiAgICB0b2dnbGVTZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC52aXNpYmxlID0gIXRoaXMuY29udHJvbC52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAob3B0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJUT0dHTEVSRVNVTFRERVNDXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdSZXN1bHQgRGVzY3JpcHRpb24gVG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZXN1bHQgRGVzY3JpcHRpb24gVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
