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
var index_1 = require('../../pipes/index');
var themeColor_directive_1 = require('../../components/themeColor.directive');
var forms_1 = require('@angular/forms');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var Slider = (function () {
    function Slider(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.tipShow = false;
        this.tipLeftPos = '';
    }
    Slider.prototype.ngOnInit = function () {
        if (this.data.props.defaultValue) {
            this.data.props.currentValue = this.data.props.defaultValue;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
        else {
            this.data.props.currentValue = this.data.props.minVal;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
    };
    Slider.prototype.ngAfterViewInit = function () {
        var that = this;
        var sliderJson = {
            min: this.data.props.minVal,
            max: this.data.props.maxVal,
            step: this.data.props.steps,
            grid: this.data.props.scale,
            from: this.data.props.defaultValue,
            prettify_enabled: true,
            prettify_separator: ',',
            onFinish: function (data) {
                console.log('finsish', data);
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
                that.change();
            },
            onUpdate: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
            }
        };
        if (this.data.props.postfix) {
            sliderJson["postfix"] = this.data.props.unit;
            sliderJson["prefix"] = '';
        }
        else {
            sliderJson["prefix"] = this.data.props.unit;
            sliderJson["postfix"] = '';
        }
        jQuery('#' + this.data._id).ionRangeSlider(sliderJson);
    };
    Object.defineProperty(Slider.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                if (this.form.controls[this.data._id].errors['required']) {
                    this.ValidationMessage = this.data.config.validations.required.message;
                    return false;
                }
                else {
                    if (this.form.controls[this.data._id].errors['minval']) {
                        this.ValidationMessage = 'Minimum ' + this.data.props.minVal + ' value required!';
                        return false;
                    }
                    else {
                        if (this.form.controls[this.data._id].errors['maxval']) {
                            this.ValidationMessage = "Can't Go beyond " + this.data.props.maxVal;
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.change = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            if (this._analyticService.getVisitorAnswers().length <= 1 || this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data, this.jsonBuilderHelper.getTemplateQuestionare())
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], Slider.prototype, "form", void 0);
    Slider = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slider',
            directives: [themeColor_directive_1.ThemeColor, forms_1.REACTIVE_FORM_DIRECTIVES],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'slider.component.html',
            styleUrls: [
                'css/ion.rangeSlider.css',
                'css/ion.rangeSlider.skinHTML5.css',
            ],
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], Slider);
    return Slider;
}());
exports.Slider = Slider;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlHLGVBQWUsQ0FBQyxDQUFBO0FBQ2pILHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBaUI3RTtJQVdFLGdCQUFvQixnQkFBaUMsRUFBVSxpQkFBOEI7UUFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQVA3RixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFReEIsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDNUYsSUFB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O1lBQ2xELEtBQUssRUFBRSxDQUFDLGdCQUFRLENBQUM7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QixtQ0FBbUM7YUFDcEM7U0FDRixDQUFDOztjQUFBO0lBdUlGLGFBQUM7QUFBRCxDQXRJQSxBQXNJQyxJQUFBO0FBdElZLGNBQU0sU0FzSWxCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NsaWRlcicsXHJcbiAgZGlyZWN0aXZlczogW1RoZW1lQ29sb3IsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgcGlwZXM6IFtTYWZlSHRtbF0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAnY3NzL2lvbi5yYW5nZVNsaWRlci5jc3MnLFxyXG4gICAgJ2Nzcy9pb24ucmFuZ2VTbGlkZXIuc2tpbkhUTUw1LmNzcycsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlciBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGRldk1vZGU6IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHRpcFNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aXBMZWZ0UG9zOiBzdHJpbmcgPSAnJztcclxuICBzbGlkZXJSZWY6IGFueTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgVmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHNhdmluZ0RhdGE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gdGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICBpZiAodGhpcy5kYXRhLnByb3BzLnBvc3RmaXgpXHJcbiAgICAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgKyAnICcgKyB0aGlzLmRhdGEucHJvcHMudW5pdDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSB0aGlzLmRhdGEucHJvcHMudW5pdCArICcgJyArIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gdGhpcy5kYXRhLnByb3BzLm1pblZhbDtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEucHJvcHMucG9zdGZpeClcclxuICAgICAgICAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSArICcgJyArIHRoaXMuZGF0YS5wcm9wcy51bml0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy51bml0ICsgJyAnICsgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciBzbGlkZXJKc29uOiBhbnkgPSB7XHJcbiAgICAgIG1pbjogdGhpcy5kYXRhLnByb3BzLm1pblZhbCxcclxuICAgICAgbWF4OiB0aGlzLmRhdGEucHJvcHMubWF4VmFsLFxyXG4gICAgICBzdGVwOiB0aGlzLmRhdGEucHJvcHMuc3RlcHMsXHJcbiAgICAgIGdyaWQ6IHRoaXMuZGF0YS5wcm9wcy5zY2FsZSxcclxuICAgICAgZnJvbTogdGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgcHJldHRpZnlfZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgcHJldHRpZnlfc2VwYXJhdG9yOiAnLCcsXHJcbiAgICAgIG9uRmluaXNoOiBmdW5jdGlvbiAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbnNpc2gnLCBkYXRhKTtcclxuICAgICAgICB0aGF0LmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gZGF0YS5mcm9tO1xyXG4gICAgICAgIGlmICh0aGF0LmRhdGEucHJvcHMucG9zdGZpeClcclxuICAgICAgICAgICB0aGF0LmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gZGF0YS5mcm9tICsgJyAnICsgdGhhdC5kYXRhLnByb3BzLnVuaXQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICB0aGF0LmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gdGhhdC5kYXRhLnByb3BzLnVuaXQgKyAnICcgKyBkYXRhLmZyb207XHJcbiAgICAgICAgdGhhdC5jaGFuZ2UoKTtcclxuICAgICAgfSxcclxuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGF0LmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gZGF0YS5mcm9tO1xyXG4gICAgICAgIGlmICh0aGF0LmRhdGEucHJvcHMucG9zdGZpeClcclxuICAgICAgICAgIHRoYXQuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSBkYXRhLmZyb20gKyAnICcgKyB0aGF0LmRhdGEucHJvcHMudW5pdDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgIHRoYXQuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSB0aGF0LmRhdGEucHJvcHMudW5pdCArICcgJyArIGRhdGEuZnJvbTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLmRhdGEucHJvcHMucG9zdGZpeCkge1xyXG4gICAgICBzbGlkZXJKc29uW1wicG9zdGZpeFwiXSA9IHRoaXMuZGF0YS5wcm9wcy51bml0O1xyXG4gICAgICBzbGlkZXJKc29uW1wicHJlZml4XCJdID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzbGlkZXJKc29uW1wicHJlZml4XCJdID0gdGhpcy5kYXRhLnByb3BzLnVuaXQ7XHJcbiAgICAgIHNsaWRlckpzb25bXCJwb3N0Zml4XCJdID0gJyc7XHJcbiAgICB9XHJcbiAgICBqUXVlcnkoJyMnICsgdGhpcy5kYXRhLl9pZCkuaW9uUmFuZ2VTbGlkZXIoc2xpZGVySnNvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydyZXF1aXJlZCddKSB7XHJcbiAgICAgICAgdGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuZGF0YS5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQubWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS5lcnJvcnNbJ21pbnZhbCddKSB7XHJcbiAgICAgICAgICB0aGlzLlZhbGlkYXRpb25NZXNzYWdlID0gJ01pbmltdW0gJyArIHRoaXMuZGF0YS5wcm9wcy5taW5WYWwgKyAnIHZhbHVlIHJlcXVpcmVkISc7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydtYXh2YWwnXSkge1xyXG4gICAgICAgICAgICB0aGlzLlZhbGlkYXRpb25NZXNzYWdlID0gXCJDYW4ndCBHbyBiZXlvbmQgXCIgKyB0aGlzLmRhdGEucHJvcHMubWF4VmFsO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbmdEb0NoZWNrKCkge1xyXG4gIC8vIGxldCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgLy8gICBtaW46IHRoaXMuZGF0YS5wcm9wcy5taW5WYWwsXHJcbiAgLy8gICBtYXg6IHRoaXMuZGF0YS5wcm9wcy5tYXhWYWwsXHJcbiAgLy8gICBzdGVwOiB0aGlzLmRhdGEucHJvcHMuc3RlcHMsXHJcbiAgLy8gICB2YWx1ZTogcGFyc2VJbnQodGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZSksXHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gaWYgKHRoaXMuZGF0YS5wcm9wcy5zY2FsZSA+IDEpIHtcclxuICAvLyAgIHZhciB0aWNrcyA9IFt0aGlzLmRhdGEucHJvcHMubWluVmFsXTtcclxuICAvLyAgIHZhciBzdGVwID0gdGhpcy5kYXRhLnByb3BzLm1heFZhbCAvIHRoaXMuZGF0YS5wcm9wcy5zY2FsZTtcclxuICAvLyAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5kYXRhLnByb3BzLnNjYWxlOyBpKyspIHtcclxuICAvLyAgICAgdGlja3MucHVzaCh0aWNrc1tpIC0gMV0gKyBzdGVwKTtcclxuICAvLyAgIH1cclxuICAvLyAgIG9wdGlvbnMudGlja3MgPSB0aWNrcztcclxuICAvLyB9XHJcbiAgLy8galF1ZXJ5KCcjJyArIHRoaXMuZGF0YS5faWQpLmJvb3RzdHJhcFNsaWRlcihvcHRpb25zKTtcclxuICAvL31cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuc3RhdHVzID09ICdMSVZFJykge1xyXG4gICAgICAvKiBpZiBrZXkgaXMgdW5kZWZpbmVkIHRoZW4gcHVzaCBpbiBhcnJheSAqL1xyXG4gICAgICBpZiAodGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSA9PSAnJylcclxuICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvckFuc3dlcnModGhpcy5kYXRhKTtcclxuICAgICAgLyogICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvckFuc3dlcnMoKS5sZW5ndGggPD0gMSB8fCB0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpKSB7XHJcbiAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNhdmVTdGF0cyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgdGhpcy5kYXRhLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvcktleShyZXNwb25zZS5rZXkpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICdBcnJheSBVcGRhdGVkJylcclxuICAgICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2UucmVJbml0VmlzaXRvckFuc3dlcnMoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
