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
var editor_1 = require('./editor');
var JSONBuilder_service_1 = require('../../services/JSONBuilder.service');
var switch_component_1 = require('../switch.component');
var Editor = (function () {
    function Editor(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    Editor.prototype.ngAfterViewInit = function () {
        var self = this;
        windowScroll();
        jQuery(window).on("resize", function () {
            windowScroll();
        });
        function windowScroll() {
            var rightPanelHeight = jQuery(window).height() - 60;
            jQuery('.sidebar-layout').css('height', rightPanelHeight);
        }
    };
    Editor.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getSelectedModel() === 'Page') {
            this.title = this.jsonBuilderHelper.getSelectedPage().type;
        }
        else {
            if (this.jsonBuilderHelper.getSelectedModel() === 'Control') {
                this.title = this.jsonBuilderHelper.getSelectedControl().type;
            }
        }
    };
    Editor = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor',
            directives: [editor_1.EDITORS, switch_component_1.Switch],
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: [
                './assets/css/bootstrap.colorpickersliders.style.css',
                './assets/css/selectize.default.css',
                './assets/css/editor.custome.css',
                './assets/css/editor.style.css'
            ],
            templateUrl: 'assets/html/editor.component.html',
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0UsZUFBZSxDQUFDLENBQUE7QUFDcEYsdUJBQXdCLFVBQVUsQ0FBQyxDQUFBO0FBQ25DLG9DQUE0QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ2pFLGlDQUF1QixxQkFBcUIsQ0FBQyxDQUFBO0FBZ0I3QztJQUlJLGdCQUFvQixpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBQ2xELENBQUM7SUFDRCxnQ0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFlBQVksRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFeEIsWUFBWSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSDtZQUNJLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNwRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFJOUQsQ0FBQztJQUNMLENBQUM7SUFDRCx5QkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDL0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDbEUsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBM0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsQ0FBQyxnQkFBTyxFQUFFLHlCQUFNLENBQUM7WUFDN0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsU0FBUyxFQUFFO2dCQUNQLHFEQUFxRDtnQkFDckQsb0NBQW9DO2dCQUNwQyxpQ0FBaUM7Z0JBQ2pDLCtCQUErQjthQUNsQztZQUNELFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzs7Y0FBQTtJQWlDRixhQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSxjQUFNLFNBZ0NsQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVESVRPUlMgfSBmcm9tICcuL2VkaXRvcic7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJy4uL3N3aXRjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZmVhdHVyZS1hY2Nlc3Muc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2VkaXRvcicsXHJcbiAgICBkaXJlY3RpdmVzOiBbRURJVE9SUywgU3dpdGNoXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jb2xvcnBpY2tlcnNsaWRlcnMuc3R5bGUuY3NzJyxcclxuICAgICAgICAnLi9hc3NldHMvY3NzL3NlbGVjdGl6ZS5kZWZhdWx0LmNzcycsXHJcbiAgICAgICAgJy4vYXNzZXRzL2Nzcy9lZGl0b3IuY3VzdG9tZS5jc3MnLFxyXG4gICAgICAgICcuL2Fzc2V0cy9jc3MvZWRpdG9yLnN0eWxlLmNzcydcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3IgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgdGl0bGU6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLypTY3JvbGxlciBmb3IgcmlnaHQgcGFuZWwgYW5kIGxlZnQgcGFuZWwgKi9cclxuICAgICAgICB3aW5kb3dTY3JvbGwoKTtcclxuICAgICAgICBqUXVlcnkod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGpRdWVyeSgnLnNpZGUtc2Nyb2xsJykubUN1c3RvbVNjcm9sbGJhcigndXBkYXRlJyk7XHJcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd1Njcm9sbCgpIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0UGFuZWxIZWlnaHQgPSBqUXVlcnkod2luZG93KS5oZWlnaHQoKSAtIDYwO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaWRlYmFyLWxheW91dCcpLmNzcygnaGVpZ2h0JywgcmlnaHRQYW5lbEhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGpRdWVyeSgnLnNpZGUtc2Nyb2xsJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGVtZTogJ2RhcmstMydcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRNb2RlbCgpID09PSAnUGFnZScpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRQYWdlKCkudHlwZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZE1vZGVsKCkgPT09ICdDb250cm9sJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCkudHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
