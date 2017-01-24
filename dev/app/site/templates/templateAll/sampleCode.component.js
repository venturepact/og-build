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
var index_1 = require('../../../shared/services/index');
var router_1 = require('@angular/router');
var index_2 = require('../pipes/index');
var env_config_1 = require('../../../config/env.config');
var SampleCodeComponent = (function () {
    function SampleCodeComponent(subDomainService, route) {
        this.subDomainService = subDomainService;
        this.route = route;
        this.pageType = 'full-page';
    }
    SampleCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var type = params['type'];
            if (type)
                _this.pageType = type;
        });
        this.src = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/preview/previewFrame';
        var template = localStorage.getItem('template');
        if (template) {
            var app = JSON.parse(template);
            jQuery('meta[name=description]').attr('content', app.description);
            window.parent.document.title = app.title;
            jQuery('#favicon').attr('href', app.favicon);
        }
    };
    SampleCodeComponent = __decorate([
        core_1.Component({
            selector: 'og-sample-code',
            directives: [],
            providers: [],
            pipes: [index_2.SafeUrl],
            template: "\n    <div id=\"main-profile\">\n        <iframe\n        [class.full-page]=\"pageType==='full-page'\"\n        [class.small-page]=\"pageType==='small-page'\"\n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb545b;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [index_1.SubDomainService, router_1.ActivatedRoute])
    ], SampleCodeComponent);
    return SampleCodeComponent;
}());
exports.SampleCodeComponent = SampleCodeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9zYW1wbGVDb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2xFLHVCQUF5RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNFLHNCQUF3QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBeUZwRDtJQUlJLDZCQUFvQixnQkFBa0MsRUFBVSxLQUFxQjtRQUFqRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGckYsYUFBUSxHQUFXLFdBQVcsQ0FBQztJQUcvQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FBRyx1QkFBdUIsQ0FBQztRQUMvSCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQztJQTNHTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7WUFDYixLQUFLLEVBQUUsQ0FBQyxlQUFPLENBQUM7WUFDaEIsUUFBUSxFQUFFLGtQQU9IO1lBQ1AsTUFBTSxFQUFFLENBQUMsMDRDQXFFWixDQUFDO1NBQ0QsQ0FBQzs7MkJBQUE7SUF5QkYsMEJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLDJCQUFtQixzQkF1Qi9CLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL3NhbXBsZUNvZGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU2FmZVVybCB9IGZyb20gJy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb2ctc2FtcGxlLWNvZGUnLFxyXG4gICAgZGlyZWN0aXZlczogW10sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgcGlwZXM6IFtTYWZlVXJsXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1wcm9maWxlXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgIFtjbGFzcy5mdWxsLXBhZ2VdPVwicGFnZVR5cGU9PT0nZnVsbC1wYWdlJ1wiXHJcbiAgICAgICAgW2NsYXNzLnNtYWxsLXBhZ2VdPVwicGFnZVR5cGU9PT0nc21hbGwtcGFnZSdcIlxyXG4gICAgICAgIFtzcmNdPVwic3JjIHwgc2FmZVVybFwiIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgLnJlc3BvbnNpdmUtbWVudSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogLTNweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlLW1lbnUgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlLW1lbnUgYSBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlLXZpZXcgaXtcclxuICAgICAgICBjb2xvcjogI2ZiNTQ1YjtcclxuICAgIH1cclxuICAgIC5yZXNwb25zaXZlLW1lbnUgc3Bhbi50aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVzcG9uc2l2ZS1tZW51IGRpdiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mdWxsLXBhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc21hbGwtcGFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RkZGY7XHJcbiAgICB9XHJcbmBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIHBhZ2VUeXBlOiBzdHJpbmcgPSAnZnVsbC1wYWdlJztcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBwYXJhbXNbJ3R5cGUnXTtcclxuICAgICAgICAgICAgaWYgKHR5cGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUeXBlID0gdHlwZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zcmMgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvcHJldmlldy9wcmV2aWV3RnJhbWUnO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgYXBwID0gSlNPTi5wYXJzZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnbWV0YVtuYW1lPWRlc2NyaXB0aW9uXScpLmF0dHIoJ2NvbnRlbnQnLCBhcHAuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LmRvY3VtZW50LnRpdGxlID0gYXBwLnRpdGxlO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNmYXZpY29uJykuYXR0cignaHJlZicsIGFwcC5mYXZpY29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
