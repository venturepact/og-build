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
var ThemeColor = (function () {
    function ThemeColor(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.colors = ['#61bd6d', '#1abc9c', '#54acd2', '#2c82c9', '#9365b8', '#475577', '#cccccc',
            '#41a85f', '#00a885', '#3d8eb9', '#2969b0', '#553982', '#28324e', '#000000', '#f7da64', '#fba026',
            '#eb6b56', '#e25041', '#a38f84', '#efefef', '#ffffff', '#fac51c', '#f37934', '#d14841', '#b8312f',
            '#7c706b', '#d1d5d8', '#00aea5'];
        this.ele = el.nativeElement;
    }
    ThemeColor.prototype.ngOnInit = function () {
        this.ngDoCheck();
    };
    ThemeColor.prototype.ngDoCheck = function () {
        var color = this.jsonBuilderHelper.getJSONBuilt().themeColor;
        for (var _i = 0, _a = this.themeColor; _i < _a.length; _i++) {
            var atrribute = _a[_i];
            switch (atrribute) {
                case 'background':
                    this.ele.style.backgroundColor = color;
                    break;
                case 'border':
                    this.ele.style.borderColor = color;
                    break;
                case 'colorClass':
                    this.addColorClass(color);
                    break;
                default:
                    this.ele.style.color = color;
                    break;
            }
        }
    };
    ThemeColor.prototype.addColorClass = function (color) {
        var colorIndex = (this.colors.indexOf(color) + 1);
        var element = jQuery(this.ele);
        var colorClass = 'tc' + colorIndex;
        if ((colorIndex !== 0 && this.colorClass != colorClass) || element.hasClass('w100')) {
            element
                .removeClass(function (index, css) {
                return (css.match(/(^|\s)tc\S+/g) || []).join(' ');
            })
                .addClass(colorClass);
            this.colorClass = colorClass;
        }
    };
    __decorate([
        core_1.Input('themeColor'), 
        __metadata('design:type', Object)
    ], ThemeColor.prototype, "themeColor", void 0);
    ThemeColor = __decorate([
        core_1.Directive({
            selector: '[themeColor]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, JSONBuilder_service_1.JSONBuilder])
    ], ThemeColor);
    return ThemeColor;
}());
exports.ThemeColor = ThemeColor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkQsZUFBZSxDQUFDLENBQUE7QUFDN0Usb0NBQTRCLDZDQUE2QyxDQUFDLENBQUE7QUFRMUU7SUFVSSxvQkFBWSxFQUFjLEVBQVMsaUJBQThCO1FBQTlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQU56RCxXQUFNLEdBQVcsQ0FBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO1lBQy9GLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztZQUMxRixTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLFNBQVM7WUFDM0YsU0FBUyxFQUFFLFNBQVMsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUkzQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzdELEdBQUcsQ0FBQSxDQUFrQixVQUFlLEVBQWYsS0FBQSxJQUFJLENBQUMsVUFBVSxFQUFmLGNBQWUsRUFBZixJQUFlLENBQUM7WUFBakMsSUFBSSxTQUFTLFNBQUE7WUFDYixNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLFlBQVk7b0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDdkMsS0FBSyxDQUFDO2dCQUNWLEtBQUssUUFBUTtvQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNuQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxZQUFZO29CQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLEtBQUssQ0FBQztnQkFDVjtvQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUM3QixLQUFLLENBQUM7WUFDZCxDQUFDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsa0NBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksR0FBQyxVQUFVLENBQUM7UUFDakMsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUUsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsT0FBTztpQkFDTixXQUFXLENBQUMsVUFBQyxLQUFVLEVBQUUsR0FBUTtnQkFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkQsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQWhERDtRQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O2tEQUFBO0lBTnhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7O2tCQUFBO0lBcURGLGlCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSxrQkFBVSxhQW1EdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29tcG9uZW50cy90aGVtZUNvbG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgRG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3RoZW1lQ29sb3JdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRoZW1lQ29sb3IgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICAgIEBJbnB1dCgndGhlbWVDb2xvcicpIHRoZW1lQ29sb3I6IGFueTtcclxuICAgIHByaXZhdGUgZWxlOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29sb3JzOiBzdHJpbmdbXT1bJyM2MWJkNmQnLCcjMWFiYzljJywnIzU0YWNkMicsJyMyYzgyYzknLCcjOTM2NWI4JywnIzQ3NTU3NycsJyNjY2NjY2MnLFxyXG4gICAgJyM0MWE4NWYnLCcjMDBhODg1JywnIzNkOGViOScsJyMyOTY5YjAnLCAnIzU1Mzk4MicsJyMyODMyNGUnLCcjMDAwMDAwJywnI2Y3ZGE2NCcsJyNmYmEwMjYnLFxyXG4gICAgJyNlYjZiNTYnLCcjZTI1MDQxJywnI2EzOGY4NCcsJyNlZmVmZWYnLCcjZmZmZmZmJywnI2ZhYzUxYycsICcjZjM3OTM0JywgJyNkMTQ4NDEnLCcjYjgzMTJmJyxcclxuICAgICcjN2M3MDZiJywgJyNkMWQ1ZDgnLCcjMDBhZWE1J107XHJcbiAgICBjb2xvckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYscHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHtcclxuICAgICAgICAgdGhpcy5lbGUgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubmdEb0NoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGhlbWVDb2xvcjtcclxuICAgICAgICBmb3IobGV0IGF0cnJpYnV0ZSBvZiB0aGlzLnRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChhdHJyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JhY2tncm91bmQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9yZGVyJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZS5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29sb3JDbGFzcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb2xvckNsYXNzKGNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRDb2xvckNsYXNzKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29sb3JJbmRleCA9ICh0aGlzLmNvbG9ycy5pbmRleE9mKGNvbG9yKSsxKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9ICBqUXVlcnkodGhpcy5lbGUpO1xyXG4gICAgICAgIGxldCBjb2xvckNsYXNzID0gJ3RjJytjb2xvckluZGV4O1xyXG4gICAgICAgIGlmKChjb2xvckluZGV4ICE9PSAwICYmIHRoaXMuY29sb3JDbGFzcyE9Y29sb3JDbGFzcykgfHwgZWxlbWVudC5oYXNDbGFzcygndzEwMCcpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKChpbmRleDogYW55LCBjc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjc3MubWF0Y2ggKC8oXnxcXHMpdGNcXFMrL2cpIHx8IFtdKS5qb2luKCcgJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKGNvbG9yQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSBjb2xvckNsYXNzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
