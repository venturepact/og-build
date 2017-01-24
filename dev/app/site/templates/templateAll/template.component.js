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
var router_1 = require('@angular/router');
var templates_1 = require('./templates');
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var model_1 = require('../../+builder/models/model');
var analytic_service_1 = require('../../templates/services/analytic.service');
var templateHttp_service_1 = require('../services/templateHttp.service');
var templateRenderer_service_1 = require('../services/templateRenderer.service');
var recommendation_service_1 = require('../services/recommendation.service');
var index_1 = require('../../../shared/services/index');
var Template = (function () {
    function Template(route, router, jsonBuilderHelper, _script) {
        this.route = route;
        this.router = router;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._script = _script;
        this.devMode = false;
    }
    Template.prototype.ngOnInit = function () {
        var _this = this;
        window.Intercom('update', { hide_default_launcher: true });
        if (!this.JSON_Template) {
            var template = localStorage.getItem('template');
            if (template) {
                this.oldRealTime = JSON.parse(template).realTime;
                this.JSON_Template = new model_1.App().deserialize(JSON.parse(template));
                this.JSON_Template.realTime = this.oldRealTime;
            }
        }
        else {
            this.oldRealTime = this.JSON_Template.realTime;
            this.JSON_Template = new model_1.App().deserialize(this.JSON_Template);
            this.JSON_Template.realTime = this.oldRealTime;
        }
        this.jsonBuilderHelper.setTemplate(this.JSON_Template);
        this._script.load('rangeSlider', 'math')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            _this.Temp_name = _this.JSON_Template.template;
        })
            .catch(function (error) {
        });
    };
    Template.prototype.ngAfterViewInit = function () {
        jQuery('meta[name=description]').attr('content', this.JSON_Template.description);
        document.title = this.JSON_Template.title;
        jQuery('#favicon').attr('href', this.JSON_Template.favicon);
    };
    Template.prototype.ngOnDestroy = function () {
        window.Intercom('update', { hide_default_launcher: false });
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template.prototype, "JSON_Template", void 0);
    Template = __decorate([
        core_1.Component({
            selector: "Temp",
            directives: [templates_1.TEMPLATES],
            providers: [JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService, templateHttp_service_1.TemplateHttpService, templateRenderer_service_1.TemplateRendererService, recommendation_service_1.RecommendationService],
            template: "\n        <div [ngSwitch]=\"Temp_name\">\n            <one-page-slider *ngSwitchCase=\"'one-page-slider'\"\n            [JSON_Template]=\"JSON_Template\"\n            class=\"main-body {{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            [devMode]=\"devMode\"\n            >\n            </one-page-slider>\n            <sound-cloud *ngSwitchCase=\"'sound-cloud'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </sound-cloud>\n            <home_loan_calculator *ngSwitchCase=\"'home_loan_calculator'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </home_loan_calculator>\n\n        </div>\n\n      ",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, JSONBuilder_service_1.JSONBuilder, index_1.Script])
    ], Template);
    return Template;
}());
exports.Template = Template;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC90ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRSxlQUFlLENBQUMsQ0FBQTtBQUNuRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCwwQkFBMEIsYUFBYSxDQUFDLENBQUE7QUFDeEMsb0NBQTRCLDZDQUE2QyxDQUFDLENBQUE7QUFDMUUsc0JBQW9CLDZCQUE2QixDQUFDLENBQUE7QUFDbEQsaUNBQWdDLDJDQUEyQyxDQUFDLENBQUE7QUFDNUUscUNBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFDdkUseUNBQXdDLHNDQUFzQyxDQUFDLENBQUE7QUFDL0UsdUNBQXNDLG9DQUFvQyxDQUFDLENBQUE7QUFDM0Usc0JBQXVCLGdDQUFnQyxDQUFDLENBQUE7QUFvQ3hEO0lBT0ksa0JBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGlCQUE4QixFQUM3RixPQUFlO1FBRFAsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzdGLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFIM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQU16QixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbkQsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuRCxDQUFDO1FBR0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2pELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7UUFFYixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFqREQ7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBaENaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLHFCQUFTLENBQUM7WUFDdkIsU0FBUyxFQUFFLENBQUMsaUNBQVcsRUFBRSxrQ0FBZSxFQUFFLDBDQUFtQixFQUFFLGtEQUF1QixFQUFFLDhDQUFxQixDQUFDO1lBQzlHLFFBQVEsRUFBRSxpM0JBdUJQO1NBQ04sQ0FBQzs7Z0JBQUE7SUFzREYsZUFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksZ0JBQVEsV0FvRHBCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL3RlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBURU1QTEFURVMgfSBmcm9tICcuL3RlbXBsYXRlcyc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVtcGxhdGVIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RlbXBsYXRlSHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVtcGxhdGVSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZW1wbGF0ZVJlbmRlcmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWNvbW1lbmRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2NyaXB0IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVGVtcFwiLFxyXG4gICAgZGlyZWN0aXZlczogW1RFTVBMQVRFU10sXHJcbiAgICBwcm92aWRlcnM6IFtKU09OQnVpbGRlciwgQW5hbHl0aWNTZXJ2aWNlLCBUZW1wbGF0ZUh0dHBTZXJ2aWNlLCBUZW1wbGF0ZVJlbmRlcmVyU2VydmljZSwgUmVjb21tZW5kYXRpb25TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiVGVtcF9uYW1lXCI+XHJcbiAgICAgICAgICAgIDxvbmUtcGFnZS1zbGlkZXIgKm5nU3dpdGNoQ2FzZT1cIidvbmUtcGFnZS1zbGlkZXInXCJcclxuICAgICAgICAgICAgW0pTT05fVGVtcGxhdGVdPVwiSlNPTl9UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1ib2R5IHt7anNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGhlbWVDb2xvcn19XCJcclxuICAgICAgICAgICAgW2Rldk1vZGVdPVwiZGV2TW9kZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9vbmUtcGFnZS1zbGlkZXI+XHJcbiAgICAgICAgICAgIDxzb3VuZC1jbG91ZCAqbmdTd2l0Y2hDYXNlPVwiJ3NvdW5kLWNsb3VkJ1wiXHJcbiAgICAgICAgICAgIFtKU09OX1RlbXBsYXRlXT1cIkpTT05fVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICBbZGV2TW9kZV09XCJkZXZNb2RlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ7e2pzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRoZW1lQ29sb3J9fVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9zb3VuZC1jbG91ZD5cclxuICAgICAgICAgICAgPGhvbWVfbG9hbl9jYWxjdWxhdG9yICpuZ1N3aXRjaENhc2U9XCInaG9tZV9sb2FuX2NhbGN1bGF0b3InXCJcclxuICAgICAgICAgICAgW0pTT05fVGVtcGxhdGVdPVwiSlNPTl9UZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgIFtkZXZNb2RlXT1cImRldk1vZGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInt7anNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGhlbWVDb2xvcn19XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2hvbWVfbG9hbl9jYWxjdWxhdG9yPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBUZW1wX25hbWU6IFN0cmluZztcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgSlNPTl9UZW1wbGF0ZTogYW55O1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIG9sZFJlYWxUaW1lOiBib29sZWFuO1xyXG4gICAgZGV2TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9zY3JpcHQ6IFNjcmlwdFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyBoaWRlX2RlZmF1bHRfbGF1bmNoZXI6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLkpTT05fVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRSZWFsVGltZSA9IEpTT04ucGFyc2UodGVtcGxhdGUpLnJlYWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5KU09OX1RlbXBsYXRlID0gbmV3IEFwcCgpLmRlc2VyaWFsaXplKEpTT04ucGFyc2UodGVtcGxhdGUpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSlNPTl9UZW1wbGF0ZS5yZWFsVGltZSA9IHRoaXMub2xkUmVhbFRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2xkUmVhbFRpbWUgPSB0aGlzLkpTT05fVGVtcGxhdGUucmVhbFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTl9UZW1wbGF0ZSA9IG5ldyBBcHAoKS5kZXNlcmlhbGl6ZSh0aGlzLkpTT05fVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT05fVGVtcGxhdGUucmVhbFRpbWUgPSB0aGlzLm9sZFJlYWxUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0VGVtcGxhdGUodGhpcy5KU09OX1RlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2NyaXB0LmxvYWQoJ3JhbmdlU2xpZGVyJywgJ21hdGgnKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdHMgTG9hZGVkJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRlbXBfbmFtZSA9IHRoaXMuSlNPTl9UZW1wbGF0ZS50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9hbnkgZXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGpRdWVyeSgnbWV0YVtuYW1lPWRlc2NyaXB0aW9uXScpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLkpTT05fVGVtcGxhdGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy5KU09OX1RlbXBsYXRlLnRpdGxlO1xyXG4gICAgICAgIGpRdWVyeSgnI2Zhdmljb24nKS5hdHRyKCdocmVmJywgdGhpcy5KU09OX1RlbXBsYXRlLmZhdmljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyBoaWRlX2RlZmF1bHRfbGF1bmNoZXI6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
