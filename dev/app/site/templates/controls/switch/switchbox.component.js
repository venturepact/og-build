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
var themeColor_directive_1 = require('../../components/themeColor.directive');
var index_1 = require('../../pipes/index');
var forms_1 = require('@angular/forms');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var SwitchBox = (function () {
    function SwitchBox(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.touched = false;
    }
    SwitchBox.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
                    this.data.props.currentLabel = 0;
                this.data.props.currentLabel = option.label + ',' + this.data.props.currentLabel;
            }
        }
    };
    SwitchBox.prototype.onChange = function (Itemvalue, index) {
        var _this = this;
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
            this.data.props.currentLabel = '';
        if (this.data.options[index].selected == false) {
            this.data.props.currentValue = parseInt(Itemvalue.value) + parseInt(this.data.props.currentValue);
        }
        else {
            this.data.props.currentValue = parseInt(this.data.props.currentValue) - parseInt(Itemvalue.value);
        }
        for (var switch_itemIndex in this.data.options) {
            if (switch_itemIndex == index) {
                this.data.options[switch_itemIndex].selected = !this.data.options[switch_itemIndex].selected;
            }
        }
        this.data.props.currentLabel = '';
        for (var option in this.data.options) {
            if (this.data.options[option].selected == true) {
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
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
        this.touched = true;
    };
    Object.defineProperty(SwitchBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], SwitchBox.prototype, "form", void 0);
    SwitchBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'switchbox',
            directives: [themeColor_directive_1.ThemeColor, forms_1.REACTIVE_FORM_DIRECTIVES],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'switchbox.component.html',
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], SwitchBox);
    return SwitchBox;
}());
exports.SwitchBox = SwitchBox;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zd2l0Y2gvc3dpdGNoYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStGLGVBQWUsQ0FBQyxDQUFBO0FBQy9HLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBWTdFO0lBUUUsbUJBQW9CLGdCQUFpQyxFQUFVLGlCQUE4QjtRQUF6RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBSjdGLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFNekIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDRSxHQUFHLENBQUMsQ0FBZSxVQUFpQixFQUFqQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFqQixjQUFpQixFQUFqQixJQUFpQixDQUFDO1lBQWhDLElBQUksTUFBTSxTQUFBO1lBQ2IsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBRXpDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7b0JBQzFILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBRW5D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Q0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNqRCxDQUFDLEVBQ0QsVUFBQyxLQUFVO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FDQSxDQUFDO1lBQ04sQ0FBQztRQUVILENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0JBQUksOEJBQU87YUFBWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQWxGRDtRQUFDLFlBQUssRUFBRTs7MkNBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFHUjtRQUFDLFlBQUssRUFBRTs7MkNBQUE7SUFmVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsVUFBVSxFQUFFLENBQUMsaUNBQVUsRUFBRSxnQ0FBd0IsQ0FBQztZQUNsRCxLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzs7aUJBQUE7SUF1RkYsZ0JBQUM7QUFBRCxDQXJGQSxBQXFGQyxJQUFBO0FBckZZLGlCQUFTLFlBcUZyQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zd2l0Y2gvc3dpdGNoYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aGVtZUNvbG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWMuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N3aXRjaGJveCcsXHJcbiAgZGlyZWN0aXZlczogW1RoZW1lQ29sb3IsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgcGlwZXM6IFtTYWZlSHRtbF0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJ3N3aXRjaGJveC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3dpdGNoQm94IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZGV2TW9kZTogYW55O1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBwcml2YXRlIHNhdmluZ0RhdGE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLmRlZnVhbHRzZWxlY3RlZDtcclxuICAgICAgLyogY2hlY2sgZm9yIGRlZmF1bHQgdG8gc2V0IGN1cnJlbnQgdmFsdWUgKi9cclxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPT0gJycgfHwgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID09IHVuZGVmaW5lZCB8fCB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID09ICcnIHx8IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gb3B0aW9uLmxhYmVsICsgJywnICsgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0IG9uQ2hhbmdlKEl0ZW12YWx1ZTogYW55LCBpbmRleDogYW55KSB7XHJcbiBcdFx0XHRpZiAodGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9PSAnJyB8fCB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID09IG51bGwpXHJcbiAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID09IHVuZGVmaW5lZCB8fCB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID09ICcnIHx8IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPT0gbnVsbClcclxuICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEub3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KEl0ZW12YWx1ZS52YWx1ZSkgKyBwYXJzZUludCh0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSBwYXJzZUludCh0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlKSAtIHBhcnNlSW50KEl0ZW12YWx1ZS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvciAobGV0IHN3aXRjaF9pdGVtSW5kZXggaW4gdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuICAgICAgaWYgKHN3aXRjaF9pdGVtSW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmRhdGEub3B0aW9uc1tzd2l0Y2hfaXRlbUluZGV4XS5zZWxlY3RlZCA9ICF0aGlzLmRhdGEub3B0aW9uc1tzd2l0Y2hfaXRlbUluZGV4XS5zZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKEl0ZW12YWx1ZSk7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gJyc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEub3B0aW9ucyk7XHJcbiAgICBmb3IgKGxldCBvcHRpb24gaW4gdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgKz0gdGhpcy5kYXRhLm9wdGlvbnNbb3B0aW9uXS5sYWJlbCArICcsJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwuc2xpY2UoMCwtMSk7XHJcblxyXG4gICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuc3RhdHVzID09ICdMSVZFJykge1xyXG4gICAgICAvKiBpZiBrZXkgaXMgdW5kZWZpbmVkIHRoZW4gcHVzaCBpbiBhcnJheSAqL1xyXG4gICAgICBpZiAodGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSA9PSAnJylcclxuICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvckFuc3dlcnModGhpcy5kYXRhKTtcclxuICAgICAgLyogICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvckFuc3dlcnMoKS5sZW5ndGggPD0gMSB8fCB0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpKSB7XHJcbiAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNhdmVTdGF0cyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgdGhpcy5kYXRhLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvcktleShyZXNwb25zZS5rZXkpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICdBcnJheSBVcGRhdGVkJylcclxuICAgICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2UucmVJbml0VmlzaXRvckFuc3dlcnMoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG91Y2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS52YWxpZDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
