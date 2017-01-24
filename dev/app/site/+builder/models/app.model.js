"use strict";
var page_model_1 = require('./page.model');
var App = (function () {
    function App() {
        this._id = '';
        this.company = '';
        this.name = '';
        this.templateType = 'Numerical';
        this.title = 'Outgrow';
        this.ga = '';
        this.favicon = '';
        this.description = 'Default Meta Description';
        this.public = true;
        this.visible = true;
        this.poweredby = true;
        this.realTime = false;
        this.themeColor = 'cp1';
        this.template = '';
        this.formula = [];
        this.url = '';
        this.navigate_Url = 'http://outgrow.co';
        this.mode = 'PRIVATE';
        this.status = 'DEV';
        this.changed = true;
        this.liveApp = '';
        this.pages = [];
    }
    App.prototype.addPages = function () {
        var pages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pages[_i - 0] = arguments[_i];
        }
        for (var page in pages)
            this.pages.push(pages[page]);
    };
    App.prototype.setThemeColor = function (color) {
        this.themeColor = color;
    };
    App.prototype.setUrl = function (url) {
        this.url = url;
    };
    App.prototype.setName = function (appName) {
        this.name = appName;
    };
    App.prototype.setTemplateName = function (tempName) {
        this.template = tempName;
    };
    App.prototype.setTemplateType = function (temp_type) {
        this.templateType = temp_type;
    };
    App.prototype.setNavigateUrl = function (nav_url) {
        this.navigate_Url = nav_url;
    };
    App.prototype.setCompany = function (id) {
        this.company = id;
    };
    App.prototype.addformula = function (name, value, result, html, heading, textCTA, href, range) {
        var formula_name = (name) ? name : '';
        var formula_value = (value) ? value : '';
        var formula_result = (result) ? result : '';
        var formula_html = (html) ? html : '';
        var formula_decimal = (heading) ? heading : '0';
        var formula_pre = (textCTA) ? textCTA : '';
        var formula_post = (href) ? href : '%';
        var rangeStatus = (range) ? true : false;
        this.formula.push({
            name: formula_name,
            html: formula_html,
            result: formula_result,
            decimal: formula_decimal,
            isValid: true,
            value: formula_value,
            units: {
                prefix: true,
                preValue: formula_pre,
                postfix: true,
                postValue: formula_post
            },
            range: {
                status: rangeStatus,
                lower: {
                    type: 'Number',
                    value: 0.0
                },
                higher: {
                    type: 'Number',
                    value: 0.0
                }
            }
        });
        return this.formula.length - 1;
    };
    App.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (prop === 'pages') {
                for (var page in input[prop]) {
                    self.pages.push(new page_model_1.Page().deserialize(input[prop][page]));
                }
            }
            else
                self[prop] = input[prop];
        }
        return self;
    };
    return App;
}());
exports.App = App;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9hcHAubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJCQUFxQixjQUFjLENBQUMsQ0FBQTtBQUVwQztJQXdCQztRQXZCQSxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFXLFdBQVcsQ0FBQztRQUNuQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFXLDBCQUEwQixDQUFDO1FBQ2pELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsUUFBRyxHQUFRLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQVEsbUJBQW1CLENBQUM7UUFDeEMsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBVyxFQUFFLENBQUM7SUFJMUIsQ0FBQztJQUVNLHNCQUFRLEdBQWY7UUFBZ0IsZUFBZTthQUFmLFdBQWUsQ0FBZixzQkFBZSxDQUFmLElBQWU7WUFBZiw4QkFBZTs7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lB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QUFDO2dCQUN0QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztZQUNGLENBQUM7WUFBQyxJQUFJO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsVUFBQztBQUFELENBOUhBLEFBOEhDLElBQUE7QUE5SFksV0FBRyxNQThIZixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9hcHAubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6ZWFibGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGltcGxlbWVudHMgU2VyaWFsaXphYmxlPEFwcD4ge1xyXG5cdF9pZDogc3RyaW5nID0gJyc7XHJcblx0Y29tcGFueTogU3RyaW5nID0gJyc7XHJcblx0bmFtZTogc3RyaW5nID0gJyc7XHJcblx0dGVtcGxhdGVUeXBlOiBzdHJpbmcgPSAnTnVtZXJpY2FsJztcclxuXHR0aXRsZTogc3RyaW5nID0gJ091dGdyb3cnO1xyXG5cdGdhOiBzdHJpbmcgPSAnJztcclxuXHRmYXZpY29uOiBzdHJpbmcgPSAnJztcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nID0gJ0RlZmF1bHQgTWV0YSBEZXNjcmlwdGlvbic7XHJcblx0cHVibGljOiBib29sZWFuID0gdHJ1ZTtcclxuXHR2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRwb3dlcmVkYnk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHJlYWxUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcblx0dGhlbWVDb2xvcjogc3RyaW5nID0gJ2NwMSc7XHJcblx0dGVtcGxhdGU6IHN0cmluZyA9ICcnO1xyXG5cdGZvcm11bGE6IGFueSA9IFtdO1xyXG5cdHVybDogYW55ID0gJyc7XHJcblx0bmF2aWdhdGVfVXJsOiBhbnkgPSAnaHR0cDovL291dGdyb3cuY28nO1xyXG5cdG1vZGU6IHN0cmluZyA9ICdQUklWQVRFJztcclxuXHRzdGF0dXM6IHN0cmluZyA9ICdERVYnO1xyXG5cdGNoYW5nZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdGxpdmVBcHA6IHN0cmluZyA9ICcnO1xyXG5cdHB1YmxpYyBwYWdlczogUGFnZVtdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly8gY29kZVxyXG5cdH1cclxuXHQvL2FkZCBhIHBhZ2VcclxuXHRwdWJsaWMgYWRkUGFnZXMoLi4ucGFnZXM6IGFueVtdKSB7XHJcblx0XHRmb3IgKGxldCBwYWdlIGluIHBhZ2VzKVxyXG5cdFx0XHR0aGlzLnBhZ2VzLnB1c2gocGFnZXNbcGFnZV0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFRoZW1lQ29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy50aGVtZUNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0VXJsKHVybDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXROYW1lKGFwcE5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5uYW1lID0gYXBwTmFtZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRUZW1wbGF0ZU5hbWUodGVtcE5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBOYW1lO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0VGVtcGxhdGVUeXBlKHRlbXBfdHlwZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRlbXBsYXRlVHlwZSA9IHRlbXBfdHlwZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXROYXZpZ2F0ZVVybChuYXZfdXJsOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMubmF2aWdhdGVfVXJsID0gbmF2X3VybDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRDb21wYW55KGlkOiBTdHJpbmcpIHtcclxuXHRcdHRoaXMuY29tcGFueSA9IGlkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZGZvcm11bGEobmFtZT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcsIHJlc3VsdD86IHN0cmluZywgaHRtbD86IHN0cmluZyxcclxuXHRcdGhlYWRpbmc/OiBzdHJpbmcsIHRleHRDVEE/OiBzdHJpbmcsIGhyZWY/OiBzdHJpbmcsIHJhbmdlPzogc3RyaW5nXHJcblx0KSB7XHJcblx0XHQvKiAgLS0gSW4gcmVjb21lbmRlZCBjYWxjIC0tLVxyXG5cdFx0XHRuYW1lIC0+IHN1YmhlYWRpbmdcclxuXHRcdFx0dmFsdWUgLT4gdmFsdWUgXHJcblx0XHRcdHJlc3VsdCAtPiBpbWFnZXBhdGhcclxuXHRcdFx0aHRtbCAtPiBkZXNjcmlwdGlvblxyXG5cdFx0XHRkZWNpbWFsIC0+IEhlYWRpbmdcclxuXHRcdFx0dW5pdC1wcmV2YWx1ZSAtPiBDVEEgaHRtbFxyXG5cdFx0XHR1bml0LXBvc3R2YWx1ZSAtPiBDVEEgaHJlZlxyXG5cdFx0XHRyYW5nZS1zdGF0dXMgLT4gaW1nIHNob3cgb3IgaGlkZVxyXG5cdFx0Ki9cclxuXHRcdGxldCBmb3JtdWxhX25hbWUgPSAobmFtZSkgPyBuYW1lIDogJyc7XHJcblx0XHRsZXQgZm9ybXVsYV92YWx1ZSA9ICh2YWx1ZSkgPyB2YWx1ZSA6ICcnO1xyXG5cdFx0bGV0IGZvcm11bGFfcmVzdWx0ID0gKHJlc3VsdCkgPyByZXN1bHQgOiAnJztcclxuXHRcdGxldCBmb3JtdWxhX2h0bWwgPSAoaHRtbCkgPyBodG1sIDogJyc7XHJcblx0XHRsZXQgZm9ybXVsYV9kZWNpbWFsID0gKGhlYWRpbmcpID8gaGVhZGluZyA6ICcwJztcclxuXHRcdGxldCBmb3JtdWxhX3ByZSA9ICh0ZXh0Q1RBKSA/IHRleHRDVEEgOiAnJztcclxuXHRcdGxldCBmb3JtdWxhX3Bvc3QgPSAoaHJlZikgPyBocmVmIDogJyUnO1xyXG5cdFx0bGV0IHJhbmdlU3RhdHVzID0gKHJhbmdlKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmZvcm11bGEucHVzaCh7XHJcblx0XHRcdG5hbWU6IGZvcm11bGFfbmFtZSxcclxuXHRcdFx0aHRtbDogZm9ybXVsYV9odG1sLFxyXG5cdFx0XHRyZXN1bHQ6IGZvcm11bGFfcmVzdWx0LFxyXG5cdFx0XHRkZWNpbWFsOiBmb3JtdWxhX2RlY2ltYWwsXHJcblx0XHRcdGlzVmFsaWQ6IHRydWUsXHJcblx0XHRcdHZhbHVlOiBmb3JtdWxhX3ZhbHVlLFxyXG5cdFx0XHR1bml0czoge1xyXG5cdFx0XHRcdHByZWZpeDogdHJ1ZSxcclxuXHRcdFx0XHRwcmVWYWx1ZTogZm9ybXVsYV9wcmUsXHJcblx0XHRcdFx0cG9zdGZpeDogdHJ1ZSxcclxuXHRcdFx0XHRwb3N0VmFsdWU6IGZvcm11bGFfcG9zdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdHN0YXR1czogcmFuZ2VTdGF0dXMsIC8vZml4ZWQgLT5mYWxzZSByYW5nZSAtPnRydWVcclxuXHRcdFx0XHRsb3dlcjoge1xyXG5cdFx0XHRcdFx0dHlwZTogJ051bWJlcicsIC8vIE51bWJlciBQZXJcclxuXHRcdFx0XHRcdHZhbHVlOiAwLjBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGhpZ2hlcjoge1xyXG5cdFx0XHRcdFx0dHlwZTogJ051bWJlcicsXHJcblx0XHRcdFx0XHR2YWx1ZTogMC4wXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIGxldCBodG1sOiBzdHJpbmcgPSB0aGlzLmZvcm11bGFbdGhpcy5mb3JtdWxhLmxlbmd0aCAtIDFdLmh0bWw7XHJcblx0XHQvLyB0aGlzLmZvcm11bGFbdGhpcy5mb3JtdWxhLmxlbmd0aCAtIDFdLmh0bWwgPSBodG1sLnJlcGxhY2UoJy97UlswLTldfS9naScsICd7UicgKyAodGhpcy5mb3JtdWxhLmxlbmd0aCAtIDEpICsgJ30nKTtcclxuXHRcdHJldHVybiB0aGlzLmZvcm11bGEubGVuZ3RoIC0gMTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0ZGVzZXJpYWxpemUoaW5wdXQ6IGFueSk6IEFwcCB7XHJcblx0XHR2YXIgc2VsZjogYW55ID0gdGhpcztcclxuXHRcdGZvciAobGV0IHByb3AgaW4gaW5wdXQpIHtcclxuXHRcdFx0aWYgKHByb3AgPT09ICdwYWdlcycpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBwYWdlIGluIGlucHV0W3Byb3BdKSB7XHJcblx0XHRcdFx0XHRzZWxmLnBhZ2VzLnB1c2gobmV3IFBhZ2UoKS5kZXNlcmlhbGl6ZShpbnB1dFtwcm9wXVtwYWdlXSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0c2VsZltwcm9wXSA9IGlucHV0W3Byb3BdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHNlbGY7XHJcblx0fVxyXG59XHJcblxyXG4iXX0=
