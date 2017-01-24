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
var JSONElement_service_1 = require('../../../services/JSONElement.service');
var common_properties_component_1 = require('../common/common_properties.component');
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var model_1 = require('../../../models/model');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var recommendation_service_1 = require('../../../../templates/services/recommendation.service');
var EditorRecommended = (function () {
    function EditorRecommended(jsonBuilderHelper, jsonElementHandler, _builderService, _ItemTrackService, recommendationService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.recommendationService = recommendationService;
        this.selectInputs = [];
        this.loader = false;
        this.control = jsonBuilderHelper.getSelectedControl();
        this.options = this.recommendationService.getAvailableOptions();
    }
    EditorRecommended.prototype.ngOnInit = function () {
        this.currentControl = this.control;
    };
    EditorRecommended.prototype.ngAfterViewInit = function () {
        this.intializeSelectize();
        jQuery('.selectizer + .selectize-control').find('input').prop({ 'placeholder': 'Map to an outcome' });
    };
    EditorRecommended.prototype.intializeSelectize = function () {
        var self = this;
        var index = 0;
        jQuery('.selectizer').each(function () {
            jQuery(this).selectize({
                delimiter: ',',
                closeAfterSelect: true,
                plugins: ['remove_button'],
                valueField: 'value',
                labelField: 'name',
                searchField: ['value', 'name'],
                create: function (input) {
                    if (!self.recommendationService.formulaResults[input]) {
                        self.addOptionAndRefresh(input);
                        window.toastNotification('New Outcome Added');
                    }
                    return { value: input, name: input };
                },
                onItemAdd: function () {
                    jQuery('.selectizer + .selectize-control').find('input').prop({ 'placeholder': 'Map to an outcome' });
                    this.close();
                    this.blur();
                    self.removeDropdown(100);
                },
                onItemRemove: function () {
                    jQuery('.selectizer + .selectize-control').find('input').prop({ 'placeholder': 'Map to an outcome' });
                    self.removeDropdown(10);
                },
                onChange: function (value) {
                    self.control.options[this['$input'][0]['id'].split("_").pop()].value = (value) ? value.toString() : '';
                },
                onFocus: function () {
                    var id = '#' + this['$input'][0]['id'];
                    jQuery('select' + id + ' + .selectize-control').find('input').prop({ 'placeholder': 'Type new or select below' });
                },
                onBlur: function () {
                    jQuery('.selectizer + .selectize-control').find('input').prop({ 'placeholder': 'Map to an outcome' });
                }
            });
            self.selectInputs.push(jQuery(this)[0]);
            jQuery(this)[0].selectize.setValue(self.control.options[index].value.split(','));
            index++;
        });
        this.loader = false;
    };
    EditorRecommended.prototype.addOptionAndRefresh = function (input) {
        this.jsonBuilderHelper.getJSONBuilt().addformula(input, input.replace(/[^A-Z0-9]+/ig, "_"), 'https://cdn.filepicker.io/api/file/lHqm5ge9RdySNwOzKmGA', 'Outcome description will come here', 'Page title will come here', 'Button Text', 'http://outgrow.us/');
        for (var select in this.selectInputs) {
            this.selectInputs[select].selectize.addOption({ value: input.replace(/[^A-Z0-9]+/ig, "_"), name: input });
            this.selectInputs[select].selectize.refreshOptions(false);
        }
    };
    EditorRecommended.prototype.removeDropdown = function (time) {
        setTimeout(function () {
            jQuery('.selectizer .selectize-dropdown').hide();
            jQuery('.selectizer .selectize-input').removeClass('focus input-active dropdown-active');
            jQuery('.selectizer div.selectize-input > input').blur();
        }, time);
    };
    EditorRecommended.prototype.ngOnChanges = function () {
        var self = this;
        this.options = this.recommendationService.getAvailableOptions();
        if ((this.currentControl != this.control) && this.currentControl != undefined) {
            this.currentControl = this.control;
            self.loader = true;
            for (var _i = 0, _a = this.selectInputs; _i < _a.length; _i++) {
                var select = _a[_i];
                select.selectize.destroy();
            }
            this.selectInputs = [];
            setTimeout(function () {
                self.intializeSelectize();
            }, 1);
        }
    };
    EditorRecommended.prototype.seAsDefault = function (options, option) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option_1 = options_1[_i];
            if (option_1.defualtselected === true) {
                option_1.defualtselected = false;
            }
        }
        option.defualtselected = true;
    };
    EditorRecommended.prototype.add_Option_In_Dropdown = function () {
        var item = new model_1.Item;
        if (this.control.type == 'selectbox') {
            var getOption = item.getOption();
            getOption.value = (this.control.options.length + 1).toString();
            this.control.options.push(getOption);
            this.jsonBuilderHelper.updateFormGroup();
            jQuery('#' + this.control._id)[0].selectize.addOption({ value: getOption.value, text: getOption.label });
            jQuery('#' + this.control._id)[0].selectize.refreshOptions(false);
        }
        else if (this.control.type == 'radio_button' || this.control.type == 'checkbox') {
            var getOption = item.getOption();
            getOption.value = (this.control.options.length + 1).toString();
            this.control.options.push(getOption);
            this.jsonBuilderHelper.updateFormGroup();
        }
        this.reInitSelectizer();
    };
    EditorRecommended.prototype.reInitSelectizer = function () {
        this.loader = true;
        var self = this;
        for (var _i = 0, _a = this.selectInputs; _i < _a.length; _i++) {
            var select = _a[_i];
            select.selectize.destroy();
        }
        this.selectInputs = [];
        setTimeout(function () {
            self.intializeSelectize();
            jQuery('.side-scroll').animate({ scrollTop: jQuery(document).height() }, 50);
        }, 10);
    };
    EditorRecommended.prototype.delete_Option_From_Items = function (options, index) {
        if (this.control.type == 'selectbox') {
            jQuery('#' + this.control._id)[0].selectize.removeOption(options[index].value);
            jQuery('#' + this.control._id)[0].selectize.refreshOptions(false);
        }
        options.splice(index, 1);
        this.reInitSelectizer();
    };
    EditorRecommended.prototype.onChangeDescription = function () {
        this.control.config.showHelp = !this.control.config.showHelp;
        if (this.control.config.showHelp === true) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorRecommended.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorRecommended.prototype.onOptionLabelChange = function (option) {
        if (this.control.type == 'selectbox') {
            jQuery('#' + this.control._id)[0].selectize.updateOption(option.value, { value: option.value, text: option.label });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorRecommended.prototype, "control", void 0);
    EditorRecommended = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-recommendation',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_recommended.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker, recommendation_service_1.RecommendationService])
    ], EditorRecommended);
    return EditorRecommended;
}());
exports.EditorRecommended = EditorRecommended;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9yZWNvbW1lbmRlZC9lZGl0b3JfcmVjb21tZW5kZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0YsZUFBZSxDQUFDLENBQUE7QUFDdEcsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsNENBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFDbEYsdUNBQXNDLHVEQUF1RCxDQUFDLENBQUE7QUFlOUY7SUFPSSwyQkFDWSxpQkFBOEIsRUFDOUIsa0JBQStCLEVBQy9CLGVBQStCLEVBQy9CLGlCQUFrQyxFQUNsQyxxQkFBNEM7UUFKNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHhELGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRXpCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFTcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFdkMsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsa0JBQWtC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UUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN6RixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQU9ELCtDQUFtQixHQUFuQixVQUFvQixNQUFXO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN4SCxDQUFDO0lBQ0wsQ0FBQztJQWhMRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFUWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxVQUFVLEVBQUUsQ0FBQywwQ0FBWSxDQUFDO1lBQzFCLFdBQVcsRUFBRSwrQ0FBK0M7WUFDNUQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7eUJBQUE7SUFvTEYsd0JBQUM7QUFBRCxDQWxMQSxBQWtMQyxJQUFBO0FBbExZLHlCQUFpQixvQkFrTDdCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3JlY29tbWVuZGVkL2VkaXRvcl9yZWNvbW1lbmRlZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRWRpdG9yIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbl9wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2VkaXRvci1yZWNvbW1lbmRhdGlvbicsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29tbW9uRWRpdG9yXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX3JlY29tbWVuZGVkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JSZWNvbW1lbmRlZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuICAgIG9wdGlvbnM6IGFueTtcclxuICAgIHNlbGVjdElucHV0czogYW55W10gPSBbXTtcclxuICAgIGN1cnJlbnRDb250cm9sOiBhbnk7XHJcbiAgICBsb2FkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIGpzb25FbGVtZW50SGFuZGxlcjogSlNPTkVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlcixcclxuICAgICAgICBwcml2YXRlIHJlY29tbWVuZGF0aW9uU2VydmljZTogUmVjb21tZW5kYXRpb25TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnJlY29tbWVuZGF0aW9uU2VydmljZS5nZXRBdmFpbGFibGVPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbCA9IHRoaXMuY29udHJvbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW50aWFsaXplU2VsZWN0aXplKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciArIC5zZWxlY3RpemUtY29udHJvbCcpLmZpbmQoJ2lucHV0JykucHJvcCh7ICdwbGFjZWhvbGRlcic6ICdNYXAgdG8gYW4gb3V0Y29tZScgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGludGlhbGl6ZVNlbGVjdGl6ZSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBqUXVlcnkoJy5zZWxlY3RpemVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zZWxlY3RpemUoe1xyXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyOiAnLCcsXHJcbiAgICAgICAgICAgICAgICBjbG9zZUFmdGVyU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogWydyZW1vdmVfYnV0dG9uJ10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxGaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndmFsdWUnLCAnbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5yZWNvbW1lbmRhdGlvblNlcnZpY2UuZm9ybXVsYVJlc3VsdHNbaW5wdXRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkT3B0aW9uQW5kUmVmcmVzaChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignTmV3IE91dGNvbWUgQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGlucHV0LCBuYW1lOiBpbnB1dCB9O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uSXRlbUFkZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnLnNlbGVjdGl6ZXIgKyAuc2VsZWN0aXplLWNvbnRyb2wnKS5maW5kKCdpbnB1dCcpLnByb3AoeyAncGxhY2Vob2xkZXInOiAnTWFwIHRvIGFuIG91dGNvbWUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZURyb3Bkb3duKDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25JdGVtUmVtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciArIC5zZWxlY3RpemUtY29udHJvbCcpLmZpbmQoJ2lucHV0JykucHJvcCh7ICdwbGFjZWhvbGRlcic6ICdNYXAgdG8gYW4gb3V0Y29tZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVEcm9wZG93bigxMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sLm9wdGlvbnNbdGhpc1snJGlucHV0J11bMF1bJ2lkJ10uc3BsaXQoXCJfXCIpLnBvcCgpXS52YWx1ZSA9ICh2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Gb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICcjJyArIHRoaXNbJyRpbnB1dCddWzBdWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnc2VsZWN0JyArIGlkICsgJyArIC5zZWxlY3RpemUtY29udHJvbCcpLmZpbmQoJ2lucHV0JykucHJvcCh7ICdwbGFjZWhvbGRlcic6ICdUeXBlIG5ldyBvciBzZWxlY3QgYmVsb3cnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQmx1cjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnLnNlbGVjdGl6ZXIgKyAuc2VsZWN0aXplLWNvbnRyb2wnKS5maW5kKCdpbnB1dCcpLnByb3AoeyAncGxhY2Vob2xkZXInOiAnTWFwIHRvIGFuIG91dGNvbWUnIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RJbnB1dHMucHVzaChqUXVlcnkodGhpcylbMF0pO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcylbMF0uc2VsZWN0aXplLnNldFZhbHVlKHNlbGYuY29udHJvbC5vcHRpb25zW2luZGV4XS52YWx1ZS5zcGxpdCgnLCcpKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9wdGlvbkFuZFJlZnJlc2goaW5wdXQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuYWRkZm9ybXVsYShpbnB1dCwgaW5wdXQucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJfXCIpLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4uZmlsZXBpY2tlci5pby9hcGkvZmlsZS9sSHFtNWdlOVJkeVNOd096S21HQScsICdPdXRjb21lIGRlc2NyaXB0aW9uIHdpbGwgY29tZSBoZXJlJyxcclxuICAgICAgICAgICAgJ1BhZ2UgdGl0bGUgd2lsbCBjb21lIGhlcmUnLCAnQnV0dG9uIFRleHQnLCAnaHR0cDovL291dGdyb3cudXMvJyk7XHJcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0IGluIHRoaXMuc2VsZWN0SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXRzW3NlbGVjdF0uc2VsZWN0aXplLmFkZE9wdGlvbih7IHZhbHVlOiBpbnB1dC5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIl9cIiksIG5hbWU6IGlucHV0IH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0c1tzZWxlY3RdLnNlbGVjdGl6ZS5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlRHJvcGRvd24odGltZTogYW55KSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNlbGVjdGl6ZXIgLnNlbGVjdGl6ZS1kcm9wZG93bicpLmhpZGUoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciAuc2VsZWN0aXplLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2ZvY3VzIGlucHV0LWFjdGl2ZSBkcm9wZG93bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciBkaXYuc2VsZWN0aXplLWlucHV0ID4gaW5wdXQnKS5ibHVyKCk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5yZWNvbW1lbmRhdGlvblNlcnZpY2UuZ2V0QXZhaWxhYmxlT3B0aW9ucygpO1xyXG4gICAgICAgIGlmICgodGhpcy5jdXJyZW50Q29udHJvbCAhPSB0aGlzLmNvbnRyb2wpICYmIHRoaXMuY3VycmVudENvbnRyb2wgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XHJcbiAgICAgICAgICAgIHNlbGYubG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2VsZWN0IG9mIHRoaXMuc2VsZWN0SW5wdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Quc2VsZWN0aXplLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0cyA9IFtdO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuaW50aWFsaXplU2VsZWN0aXplKCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlQXNEZWZhdWx0KG9wdGlvbnM6IGFueSwgb3B0aW9uOiBhbnkpIHtcclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbi5kZWZ1YWx0c2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZF9PcHRpb25fSW5fRHJvcGRvd24oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbTtcclxuICAgICAgICBpZiAodGhpcy5jb250cm9sLnR5cGUgPT0gJ3NlbGVjdGJveCcpIHtcclxuICAgICAgICAgICAgbGV0IGdldE9wdGlvbjogYW55ID0gaXRlbS5nZXRPcHRpb24oKTtcclxuICAgICAgICAgICAgZ2V0T3B0aW9uLnZhbHVlID0gKHRoaXMuY29udHJvbC5vcHRpb25zLmxlbmd0aCArIDEpLnRvU3RyaW5nKCk7Ly90aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5vcHRpb25zLnB1c2goZ2V0T3B0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS5hZGRPcHRpb24oeyB2YWx1ZTogZ2V0T3B0aW9uLnZhbHVlLCB0ZXh0OiBnZXRPcHRpb24ubGFiZWwgfSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUucmVmcmVzaE9wdGlvbnMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAncmFkaW9fYnV0dG9uJyB8fCB0aGlzLmNvbnRyb2wudHlwZSA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgIGxldCBnZXRPcHRpb246IGFueSA9IGl0ZW0uZ2V0T3B0aW9uKCk7XHJcbiAgICAgICAgICAgIGdldE9wdGlvbi52YWx1ZSA9ICh0aGlzLmNvbnRyb2wub3B0aW9ucy5sZW5ndGggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wub3B0aW9ucy5wdXNoKGdldE9wdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVJbml0U2VsZWN0aXplcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlSW5pdFNlbGVjdGl6ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKGxldCBzZWxlY3Qgb2YgdGhpcy5zZWxlY3RJbnB1dHMpIHtcclxuICAgICAgICAgICAgc2VsZWN0LnNlbGVjdGl6ZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXRzID0gW107XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW50aWFsaXplU2VsZWN0aXplKCk7XHJcbiAgICAgICAgICAgalF1ZXJ5KCcuc2lkZS1zY3JvbGwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBqUXVlcnkoZG9jdW1lbnQpLmhlaWdodCgpIH0sIDUwKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlX09wdGlvbl9Gcm9tX0l0ZW1zKG9wdGlvbnM6IGFueSwgaW5kZXg6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAnc2VsZWN0Ym94Jykge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnJlbW92ZU9wdGlvbihvcHRpb25zW2luZGV4XS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUucmVmcmVzaE9wdGlvbnMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5yZUluaXRTZWxlY3RpemVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VEZXNjcmlwdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuY29uZmlnLnNob3dIZWxwID0gIXRoaXMuY29udHJvbC5jb25maWcuc2hvd0hlbHA7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5jb25maWcuc2hvd0hlbHAgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy50eXBlLWRldGFpbHMnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3ctY2hlY2snKS5wYXJlbnRzKCcudHlwZS1kZXRhaWxzJykuZmluZCgnLmRpdi1jaGVjaycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbk9wdGlvblZhbENoYW5nZShvcHRpb246IGFueSwgJGV2ZW50OiBhbnkpIHtcclxuICAgIC8vIFx0alF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS51cGRhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCB7IHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlLCB0ZXh0OiBvcHRpb24ubGFiZWwgfSk7XHJcbiAgICAvLyBcdG9wdGlvbi52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25PcHRpb25MYWJlbENoYW5nZShvcHRpb246IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAnc2VsZWN0Ym94Jykge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnVwZGF0ZU9wdGlvbihvcHRpb24udmFsdWUsIHsgdmFsdWU6IG9wdGlvbi52YWx1ZSwgdGV4dDogb3B0aW9uLmxhYmVsIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
