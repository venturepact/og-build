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
var preview_component_1 = require('../../templates/templateAll/preview.component');
var DefaultJSON_service_1 = require('../../templates/services/DefaultJSON.service');
var TemplatesComponent = (function () {
    function TemplatesComponent(subDomainService, companyService, _router, _defaultJson) {
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._router = _router;
        this._defaultJson = _defaultJson;
        this.templates = [];
        this.loader = 0;
        this.subDomain = subDomainService.subDomain;
        this.company_id = this.subDomain.company_id;
    }
    TemplatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.companyService.getTemplates()
            .subscribe(function (response) {
            _this.templates = response;
            _this.loader = 1;
            setTimeout(function () { _this.animation(); }, 500);
        }, function (error) {
            console.log(error);
        });
    };
    TemplatesComponent.prototype.animation = function () {
        var animations = ['leftFade', 'topFade', 'rightFade', 'bottomFade'];
        var total_anim = animations.length;
        var easeType = 'swing';
        var animSpeed = 1000;
        var hs_container = jQuery('.hs_container');
        var hs_areas = hs_container.find('.hs_area');
        var hs_images = hs_container.find('img');
        var total_images = hs_images.length;
        var cnt = 0;
        hs_images.each(function () {
            var that = jQuery(this);
            jQuery('<img/>').load(function () {
                ++cnt;
                if (cnt === total_images) {
                    hs_areas.each(function () {
                        var area = jQuery(this);
                        var onImage = false;
                        area.data('over', true).bind('mouseenter', function () {
                            onImage = true;
                            if (area.data('over')) {
                                area.data('over', false);
                                var total = area.children().length;
                                var current = area.find('img:visible');
                                var idx_current = current.index();
                                var next = (idx_current === total - 1) ? area.children(':first') : current.next();
                                next.show();
                                var anim = animations.shift();
                                animations.push(anim);
                                switch (anim) {
                                    case 'rightFade':
                                        current.animate({
                                            'left': current.width() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'leftFade':
                                        current.animate({
                                            'left': -current.width() + 'px', 'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'topFade':
                                        current.animate({
                                            'top': -current.height() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'top': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'bottomFade':
                                        current.animate({
                                            'top': current.height() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'top': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    default:
                                        current.animate({
                                            'left': -current.width() + 'px'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                }
                            }
                        });
                        area.bind('mouseleave', function () {
                            onImage = false;
                        });
                    });
                }
            }).attr('src', that.attr('src'));
        });
    };
    TemplatesComponent.prototype.ngOnInit = function () {
    };
    TemplatesComponent.prototype.selectTemplate = function (selector, $event) {
        var button = jQuery($event.target);
        button.html('Initializing');
        button.addClass('loading');
        button.attr('disabled', true);
        localStorage.setItem('temp_name', selector);
        this._router.navigate(['/builder']);
        ga('markettingteam.send', 'event', 'Builder', 'Click', 'UseTemplate');
        _kmq.push(['record', 'Builder Use Template Click', { 'Template': selector }]);
    };
    TemplatesComponent.prototype.onPreview = function (template) {
        this.tempname = template;
        var app = this._defaultJson.getJSON(template);
        app.setTemplateName(template);
        this.appJson = app;
        localStorage.setItem('template', JSON.stringify(this.appJson));
        ga('markettingteam.send', 'event', 'Builder', 'Click', 'PreviewTemplate');
        _kmq.push(['record', 'Builder Preview Template Click', { 'Template': template }]);
    };
    TemplatesComponent.prototype.getAvailableTemplates = function () {
        return this.templates.filter(function (template) { return template.available; });
    };
    TemplatesComponent.prototype.getNotAvailableTemplates = function () {
        return this.templates.filter(function (template) { return !template.available; });
    };
    TemplatesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-templates',
            directives: [preview_component_1.PreviewComponent],
            templateUrl: 'templates.component.html',
            styleUrls: ['templates.component.css'],
            providers: [DefaultJSON_service_1.DefaultJSON]
        }), 
        __metadata('design:paramtypes', [index_1.SubDomainService, index_1.CompanyService, router_1.Router, DefaultJSON_service_1.DefaultJSON])
    ], TemplatesComponent);
    return TemplatesComponent;
}());
exports.TemplatesComponent = TemplatesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK3RlbXBsYXRlcy90ZW1wbGF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFFL0Qsc0JBQStDLGdDQUFnQyxDQUFDLENBQUE7QUFDaEYsdUJBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFFM0Qsa0NBQWlDLCtDQUErQyxDQUFDLENBQUE7QUFDakYsb0NBQTRCLDhDQUE4QyxDQUFDLENBQUE7QUFnQjNFO0lBVUUsNEJBQW9CLGdCQUFrQyxFQUM5QyxjQUE4QixFQUMvQixPQUFjLEVBQ2IsWUFBeUI7UUFIYixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzlDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFQakMsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBT2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFBQSxpQkFZQztRQVhELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO2FBQy9CLFNBQVMsQ0FDTixVQUFDLFFBQWU7WUFDWixLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixVQUFVLENBQUMsY0FBTSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUM7UUFDL0MsQ0FBQyxFQUNELFVBQUMsS0FBVTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7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O0lBQ3JFLENBQUM7SUFyTkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQzlCLFdBQVcsRUFBRSwwQkFBMEI7WUFDeEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDckMsU0FBUyxFQUFDLENBQUMsaUNBQVcsQ0FBQztTQUN4QixDQUFDOzswQkFBQTtJQStNRix5QkFBQztBQUFELENBN01BLEFBNk1DLElBQUE7QUE3TVksMEJBQWtCLHFCQTZNOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLyt0ZW1wbGF0ZXMvdGVtcGxhdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJEb21haW4gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9zdWJkb21haW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSxDb21wYW55U2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlQWxsL3ByZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdEpTT04gfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvc2VydmljZXMvRGVmYXVsdEpTT04uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBnYTphbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLXRlbXBsYXRlcycsXHJcbiAgZGlyZWN0aXZlczogW1ByZXZpZXdDb21wb25lbnRdLFxyXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsndGVtcGxhdGVzLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6W0RlZmF1bHRKU09OXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgc3ViRG9tYWluOiBTdWJEb21haW47XHJcbiAgY29tcGFueV9pZDogU3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBTdHJpbmc7XHJcbiAgdGVtcG5hbWU6c3RyaW5nO1xyXG4gIGFwcHMgOiBhbnk7XHJcbiAgdGVtcGxhdGVzOiBhbnlbXSA9IFtdO1xyXG4gIGxvYWRlcjogTnVtYmVyID0gMDtcclxuICBhcHBKc29uOiBBcHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICBwcml2YXRlIGNvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSxcclxuICBwdWJsaWMgX3JvdXRlcjpSb3V0ZXIsXHJcbiAgcHJpdmF0ZSBfZGVmYXVsdEpzb246IERlZmF1bHRKU09OKSB7XHJcbiAgICB0aGlzLnN1YkRvbWFpbiA9IHN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluO1xyXG4gICAgdGhpcy5jb21wYW55X2lkID0gdGhpcy5zdWJEb21haW4uY29tcGFueV9pZDsgICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgdGhpcy5jb21wYW55U2VydmljZS5nZXRUZW1wbGF0ZXMoKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgICAocmVzcG9uc2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gMTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHt0aGlzLmFuaW1hdGlvbigpO30sIDUwMCApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGFuaW1hdGlvbigpe1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zICAgID0gWydsZWZ0RmFkZScsICd0b3BGYWRlJywgJ3JpZ2h0RmFkZScsICdib3R0b21GYWRlJ107XHJcbiAgICAgICAgdmFyIHRvdGFsX2FuaW0gICAgPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgICAgICB2YXIgZWFzZVR5cGUgICAgICA9ICdzd2luZyc7XHJcbiAgICAgICAgdmFyIGFuaW1TcGVlZCAgICAgPSAxMDAwO1xyXG4gICAgICAgIHZhciBoc19jb250YWluZXIgID0galF1ZXJ5KCcuaHNfY29udGFpbmVyJyk7XHJcbiAgICAgICAgdmFyIGhzX2FyZWFzICAgICAgPSBoc19jb250YWluZXIuZmluZCgnLmhzX2FyZWEnKTtcclxuICAgICAgICB2YXIgaHNfaW1hZ2VzICAgICA9IGhzX2NvbnRhaW5lci5maW5kKCdpbWcnKTtcclxuICAgICAgICB2YXIgdG90YWxfaW1hZ2VzICA9IGhzX2ltYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNudCAgICAgICAgICAgPSAwO1xyXG4gICAgICAgIGhzX2ltYWdlcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgdGhhdCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICAgIGpRdWVyeSgnPGltZy8+JykubG9hZChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICArK2NudDtcclxuICAgICAgICAgICAgaWYoY250ID09PSB0b3RhbF9pbWFnZXMpIHtcclxuICAgICAgICAgICAgICBoc19hcmVhcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJlYSAgICAgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb25JbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXJlYS5kYXRhKCdvdmVyJyx0cnVlKS5iaW5kKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICBvbkltYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYoYXJlYS5kYXRhKCdvdmVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmVhLmRhdGEoJ292ZXInLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgICAgPSBhcmVhLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ICAgPSBhcmVhLmZpbmQoJ2ltZzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeF9jdXJyZW50ID0gY3VycmVudC5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ICAgID0gKGlkeF9jdXJyZW50ID09PSB0b3RhbC0xKSA/IGFyZWEuY2hpbGRyZW4oJzpmaXJzdCcpIDogY3VycmVudC5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW0gICAgPSBhbmltYXRpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodEZhZGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0JzpjdXJyZW50LndpZHRoKCkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6JzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1TcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5oaWRlKCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JyAgOiAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCcgICAgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JyAgOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNzcygnei1pbmRleCcsJzknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLmRhdGEoJ292ZXInLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWEudHJpZ2dlcignbW91c2VlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGVmdEZhZGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0JzotY3VycmVudC53aWR0aCgpKydweCcsJ29wYWNpdHknOicwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltU3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaGlkZSgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCcgIDogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnICAgIDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eScgIDogJzEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5jc3MoJ3otaW5kZXgnLCc5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS5kYXRhKCdvdmVyJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvbkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcEZhZGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOi1jdXJyZW50LmhlaWdodCgpKydweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOicwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltU3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaGlkZSgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCcgIDogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCcgICAgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JyAgOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNzcygnei1pbmRleCcsJzknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLmRhdGEoJ292ZXInLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWEudHJpZ2dlcignbW91c2VlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tRmFkZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6Y3VycmVudC5oZWlnaHQoKSsncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzonMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmhpZGUoKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnICA6ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnICAgIDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eScgIDogJzEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5jc3MoJ3otaW5kZXgnLCc5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS5kYXRhKCdvdmVyJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvbkltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOi1jdXJyZW50LndpZHRoKCkrJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltU3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaGlkZSgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCcgIDogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnICAgIDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNzcygnei1pbmRleCcsJzknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLmRhdGEoJ292ZXInLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWEudHJpZ2dlcignbW91c2VlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcmVhLmJpbmQoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICBvbkltYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuYXR0cignc3JjJyx0aGF0LmF0dHIoJ3NyYycpKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgLy9cclxuICB9XHJcblxyXG4gIHNlbGVjdFRlbXBsYXRlKHNlbGVjdG9yOiBhbnksICRldmVudDogYW55KSB7XHJcbiAgICB2YXIgYnV0dG9uID0galF1ZXJ5KCRldmVudC50YXJnZXQpO1xyXG4gICAgYnV0dG9uLmh0bWwoJ0luaXRpYWxpemluZycpO1xyXG4gICAgYnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZW1wX25hbWUnLCBzZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYnVpbGRlciddKTtcclxuICAgIC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnVXNlVGVtcGxhdGUnKTtcclxuICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFVzZSBUZW1wbGF0ZSBDbGljaycsIHsnVGVtcGxhdGUnOnNlbGVjdG9yfV0pO1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIH1cclxuXHJcbiAgb25QcmV2aWV3KHRlbXBsYXRlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGVtcG5hbWUgPSB0ZW1wbGF0ZTtcclxuICAgIGxldCBhcHAgPSB0aGlzLl9kZWZhdWx0SnNvbi5nZXRKU09OKHRlbXBsYXRlKTtcclxuICAgIGFwcC5zZXRUZW1wbGF0ZU5hbWUodGVtcGxhdGUpO1xyXG4gICAgdGhpcy5hcHBKc29uID0gYXBwO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJyxKU09OLnN0cmluZ2lmeSh0aGlzLmFwcEpzb24pKTtcclxuICAgIC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnUHJldmlld1RlbXBsYXRlJyk7XHJcbiAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBQcmV2aWV3IFRlbXBsYXRlIENsaWNrJywgeydUZW1wbGF0ZSc6dGVtcGxhdGV9XSk7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFibGVUZW1wbGF0ZXMoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVzLmZpbHRlcigodGVtcGxhdGU6IGFueSk9PnRlbXBsYXRlLmF2YWlsYWJsZSk7XHJcbiAgfVxyXG5cclxuICBnZXROb3RBdmFpbGFibGVUZW1wbGF0ZXMoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVzLmZpbHRlcigodGVtcGxhdGU6IGFueSk9PiF0ZW1wbGF0ZS5hdmFpbGFibGUpO1xyXG4gIH1cclxufVxyXG4iXX0=
