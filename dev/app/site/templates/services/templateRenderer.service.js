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
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var TemplateRendererService = (function () {
    function TemplateRendererService(_jsonBuilderHelper) {
        this._jsonBuilderHelper = _jsonBuilderHelper;
        this.staticControls = {};
        this.setStaticControls();
    }
    TemplateRendererService.prototype.setStaticControls = function () {
        var self = this;
        self._jsonBuilderHelper.getJSONBuilt().pages.forEach(function (page) {
            if (page.type != 'Questionnaire') {
                self.staticControls[page.type] = {};
                page.sections.forEach(function (section) {
                    section.items.forEach(function (item) {
                        if (section.title === 'Result') {
                            self.staticControls[page.type][section.title] = section;
                        }
                        else {
                            if (self.staticControls[page.type].hasOwnProperty(item.type)) {
                                var itemObj = void 0;
                                var i = 1;
                                while (itemObj == undefined) {
                                    if ((self.staticControls[page.type][item.type + '_' + i]))
                                        i++;
                                    else {
                                        self.staticControls[page.type][item.type + '_' + i] = item;
                                        itemObj = item;
                                    }
                                }
                            }
                            else {
                                self.staticControls[page.type][item.type] = item;
                            }
                        }
                    });
                });
            }
        });
        console.log('page oBj for separate logic ', this.staticControls);
    };
    TemplateRendererService.prototype.getStaticControls = function () {
        return this.staticControls;
    };
    TemplateRendererService.prototype.getBackground = function (what) {
        var landingPage = this._jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Landing'; });
        if (landingPage) {
            if (what == 'img')
                return landingPage[0].bgImage && landingPage[0].bgImageVisible ? ('url(' + landingPage[0].bgImage + ')') : '';
            else
                return landingPage[0].bgColor ? landingPage[0].bgColor : '';
        }
        else
            return '';
    };
    TemplateRendererService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], TemplateRendererService);
    return TemplateRendererService;
}());
exports.TemplateRendererService = TemplateRendererService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy90ZW1wbGF0ZVJlbmRlcmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxvQ0FBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUUxRTtJQUVJLGlDQUFvQixrQkFBK0I7UUFBL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBRG5ELG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBR3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtREFBaUIsR0FBakI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQy9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87b0JBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTt3QkFFaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO3dCQUM1RCxDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUMzRCxJQUFJLE9BQU8sU0FBSyxDQUFDO2dDQUNqQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7Z0NBQ2xCLE9BQU8sT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO29DQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ3RELENBQUMsRUFBRSxDQUFDO29DQUNSLElBQUksQ0FBQyxDQUFDO3dDQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3Q0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29DQUMvRSxDQUFDO2dDQUNMLENBQUM7NEJBQ0wsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDSixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUNyRCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELCtDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUM3RyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQztnQkFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFDLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1lBQzlHLElBQUk7Z0JBQ0EsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7UUFFbkUsQ0FBQztRQUFDLElBQUk7WUFDQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUF4REw7UUFBQyxpQkFBVSxFQUFFOzsrQkFBQTtJQXlEYiw4QkFBQztBQUFELENBeERBLEFBd0RDLElBQUE7QUF4RFksK0JBQXVCLDBCQXdEbkMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvc2VydmljZXMvdGVtcGxhdGVSZW5kZXJlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVuZGVyZXJTZXJ2aWNlIHtcclxuICAgIHN0YXRpY0NvbnRyb2xzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2pzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG4gICAgICAgIC8vY29kZVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGljQ29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0aWNDb250cm9scygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2VsZi5fanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXMnLHNlbGYuX2pzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKTtcclxuICAgICAgICBzZWxmLl9qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlLnR5cGUgIT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRpY0NvbnRyb2xzW3BhZ2UudHlwZV0gPSB7fTtcclxuICAgICAgICAgICAgICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgcmVzdWx0IG91dHB1dHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24udGl0bGUgPT09ICdSZXN1bHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXRpY0NvbnRyb2xzW3BhZ2UudHlwZV1bc2VjdGlvbi50aXRsZV0gPSBzZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGljQ29udHJvbHNbcGFnZS50eXBlXS5oYXNPd25Qcm9wZXJ0eShpdGVtLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1PYmo6IGFueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaXRlbU9iaiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLnN0YXRpY0NvbnRyb2xzW3BhZ2UudHlwZV1baXRlbS50eXBlICsgJ18nICsgaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdGljQ29udHJvbHNbcGFnZS50eXBlXVtpdGVtLnR5cGUgKyAnXycgKyBpXSA9IGl0ZW07IGl0ZW1PYmogPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXRpY0NvbnRyb2xzW3BhZ2UudHlwZV1baXRlbS50eXBlXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2Ugb0JqIGZvciBzZXBhcmF0ZSBsb2dpYyAnLCB0aGlzLnN0YXRpY0NvbnRyb2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0aWNDb250cm9scygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpY0NvbnRyb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmQod2hhdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgbGFuZGluZ1BhZ2UgPSB0aGlzLl9qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlcy5maWx0ZXIoKHBhZ2U6IGFueSkgPT4gcGFnZS50eXBlID09ICdMYW5kaW5nJyk7XHJcbiAgICAgICAgaWYgKGxhbmRpbmdQYWdlKSB7XHJcbiAgICAgICAgICAgIGlmICh3aGF0ID09ICdpbWcnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmRpbmdQYWdlWzBdLmJnSW1hZ2UgJiYgbGFuZGluZ1BhZ2VbMF0uYmdJbWFnZVZpc2libGU/KCd1cmwoJyArIGxhbmRpbmdQYWdlWzBdLmJnSW1hZ2UgKyAnKScpOicnO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZGluZ1BhZ2VbMF0uYmdDb2xvcj9sYW5kaW5nUGFnZVswXS5iZ0NvbG9yOicnO1xyXG4gICAgICAgXHJcbiAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufSJdfQ==
