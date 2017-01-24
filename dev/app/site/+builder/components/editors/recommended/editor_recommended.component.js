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
                    return { value: input.replace(/[^A-Z0-9]+/ig, "_"), name: input };
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
                    value = value.map(function (formula) {
                        formula = formula.replace(/[^A-Z0-9]+/ig, "_");
                        return formula;
                    });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9yZWNvbW1lbmRlZC9lZGl0b3JfcmVjb21tZW5kZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0YsZUFBZSxDQUFDLENBQUE7QUFDdEcsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsNENBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFDbEYsdUNBQXNDLHVEQUF1RCxDQUFDLENBQUE7QUFlOUY7SUFPSSwyQkFDWSxpQkFBOEIsRUFDOUIsa0JBQStCLEVBQy9CLGVBQStCLEVBQy9CLGlCQUFrQyxFQUNsQyxxQkFBNEM7UUFKNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHhELGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRXpCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFTcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFdkMsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUUxRyxDQUFDO0lBRUQsOENBQWtCLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxVQUFVLEtBQVU7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2xELENBQUM7b0JBQ0QsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDdEUsQ0FBQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7b0JBQ3RHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7b0JBQ3RHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLFVBQVUsS0FBVTtvQkFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQ2IsVUFBQyxPQUFZO3dCQUNULE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDbkIsQ0FBQyxDQUNKLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQzNHLENBQUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7Z0JBQ3RILENBQUM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQ3RGLHlEQUF5RCxFQUFFLG9DQUFvQyxFQUMvRiwyQkFBMkIsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDMUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7SUFDTCxDQUFDO0lBQ0QsMENBQWMsR0FBZCxVQUFlLElBQVM7UUFDcEIsVUFBVSxDQUFDO1lBQ1AsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsV0FBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDekYsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELHVDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsR0FBRyxDQUFDLENBQWUsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsWUFBWSxFQUFqQixjQUFpQixFQUFqQixJQUFpQixDQUFDO2dCQUFoQyxJQUFJLE1BQU0sU0FBQTtnQkFDWCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBQ0QsdUNBQVcsR0FBWCxVQUFZLE9BQVksRUFBRSxNQUFXO1FBQ2pDLEdBQUcsQ0FBQyxDQUFlLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxDQUFDO1lBQXRCLElBQUksUUFBTSxnQkFBQTtZQUNYLEVBQUUsQ0FBQyxDQUFDLFFBQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsUUFBTSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELGtEQUFzQixHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxTQUFTLEdBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6RyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLGNBQWMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksU0FBUyxHQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQWUsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsWUFBWSxFQUFqQixjQUFpQixFQUFqQixJQUFpQixDQUFDO1lBQWhDLElBQUksTUFBTSxTQUFBO1lBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG9EQUF3QixHQUF4QixVQUF5QixPQUFZLEVBQUUsS0FBVTtRQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELCtDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckYsQ0FBQztRQUFDLElBQUk7WUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELG9DQUFRLEdBQVIsVUFBUyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBT0QsK0NBQW1CLEdBQW5CLFVBQW9CLE1BQVc7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hILENBQUM7SUFDTCxDQUFDO0lBdExEO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQVRaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBDQUFZLENBQUM7WUFDMUIsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDOzt5QkFBQTtJQTBMRix3QkFBQztBQUFELENBeExBLEFBd0xDLElBQUE7QUF4TFkseUJBQWlCLG9CQXdMN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvcmVjb21tZW5kZWQvZWRpdG9yX3JlY29tbWVuZGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09ORWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05FbGVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25FZGl0b3IgfSBmcm9tICcuLi9jb21tb24vY29tbW9uX3Byb3BlcnRpZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkl0ZW1UcmFja2VyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi90ZW1wbGF0ZXMvc2VydmljZXMvcmVjb21tZW5kYXRpb24uc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yLXJlY29tbWVuZGF0aW9uJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb21tb25FZGl0b3JdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfcmVjb21tZW5kZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvclJlY29tbWVuZGVkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY29udHJvbDogYW55O1xyXG4gICAgb3B0aW9uczogYW55O1xyXG4gICAgc2VsZWN0SW5wdXRzOiBhbnlbXSA9IFtdO1xyXG4gICAgY3VycmVudENvbnRyb2w6IGFueTtcclxuICAgIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUganNvbkVsZW1lbnRIYW5kbGVyOiBKU09ORWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyLFxyXG4gICAgICAgIHByaXZhdGUgcmVjb21tZW5kYXRpb25TZXJ2aWNlOiBSZWNvbW1lbmRhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMucmVjb21tZW5kYXRpb25TZXJ2aWNlLmdldEF2YWlsYWJsZU9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sID0gdGhpcy5jb250cm9sO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRpYWxpemVTZWxlY3RpemUoKTtcclxuICAgICAgICBqUXVlcnkoJy5zZWxlY3RpemVyICsgLnNlbGVjdGl6ZS1jb250cm9sJykuZmluZCgnaW5wdXQnKS5wcm9wKHsgJ3BsYWNlaG9sZGVyJzogJ01hcCB0byBhbiBvdXRjb21lJyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW50aWFsaXplU2VsZWN0aXplKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGpRdWVyeSgnLnNlbGVjdGl6ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnNlbGVjdGl6ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6ICcsJyxcclxuICAgICAgICAgICAgICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbJ3JlbW92ZV9idXR0b24nXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbEZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hGaWVsZDogWyd2YWx1ZScsICduYW1lJ10sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnJlY29tbWVuZGF0aW9uU2VydmljZS5mb3JtdWxhUmVzdWx0c1tpbnB1dF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRPcHRpb25BbmRSZWZyZXNoKGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdOZXcgT3V0Y29tZSBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogaW5wdXQucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJfXCIpLCBuYW1lOiBpbnB1dCB9O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uSXRlbUFkZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnLnNlbGVjdGl6ZXIgKyAuc2VsZWN0aXplLWNvbnRyb2wnKS5maW5kKCdpbnB1dCcpLnByb3AoeyAncGxhY2Vob2xkZXInOiAnTWFwIHRvIGFuIG91dGNvbWUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZURyb3Bkb3duKDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25JdGVtUmVtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciArIC5zZWxlY3RpemUtY29udHJvbCcpLmZpbmQoJ2lucHV0JykucHJvcCh7ICdwbGFjZWhvbGRlcic6ICdNYXAgdG8gYW4gb3V0Y29tZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVEcm9wZG93bigxMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtdWxhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGEgPSBmb3JtdWxhLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiX1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtdWxhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2wub3B0aW9uc1t0aGlzWyckaW5wdXQnXVswXVsnaWQnXS5zcGxpdChcIl9cIikucG9wKCldLnZhbHVlID0gKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gJyMnICsgdGhpc1snJGlucHV0J11bMF1bJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCdzZWxlY3QnICsgaWQgKyAnICsgLnNlbGVjdGl6ZS1jb250cm9sJykuZmluZCgnaW5wdXQnKS5wcm9wKHsgJ3BsYWNlaG9sZGVyJzogJ1R5cGUgbmV3IG9yIHNlbGVjdCBiZWxvdycgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25CbHVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciArIC5zZWxlY3RpemUtY29udHJvbCcpLmZpbmQoJ2lucHV0JykucHJvcCh7ICdwbGFjZWhvbGRlcic6ICdNYXAgdG8gYW4gb3V0Y29tZScgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdElucHV0cy5wdXNoKGpRdWVyeSh0aGlzKVswXSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKVswXS5zZWxlY3RpemUuc2V0VmFsdWUoc2VsZi5jb250cm9sLm9wdGlvbnNbaW5kZXhdLnZhbHVlLnNwbGl0KCcsJykpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3B0aW9uQW5kUmVmcmVzaChpbnB1dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5hZGRmb3JtdWxhKGlucHV0LCBpbnB1dC5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIl9cIiksXHJcbiAgICAgICAgICAgICdodHRwczovL2Nkbi5maWxlcGlja2VyLmlvL2FwaS9maWxlL2xIcW01Z2U5UmR5U053T3pLbUdBJywgJ091dGNvbWUgZGVzY3JpcHRpb24gd2lsbCBjb21lIGhlcmUnLFxyXG4gICAgICAgICAgICAnUGFnZSB0aXRsZSB3aWxsIGNvbWUgaGVyZScsICdCdXR0b24gVGV4dCcsICdodHRwOi8vb3V0Z3Jvdy51cy8nKTtcclxuICAgICAgICBmb3IgKGxldCBzZWxlY3QgaW4gdGhpcy5zZWxlY3RJbnB1dHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dHNbc2VsZWN0XS5zZWxlY3RpemUuYWRkT3B0aW9uKHsgdmFsdWU6IGlucHV0LnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiX1wiKSwgbmFtZTogaW5wdXQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXRzW3NlbGVjdF0uc2VsZWN0aXplLnJlZnJlc2hPcHRpb25zKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVEcm9wZG93bih0aW1lOiBhbnkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2VsZWN0aXplciAuc2VsZWN0aXplLWRyb3Bkb3duJykuaGlkZSgpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zZWxlY3RpemVyIC5zZWxlY3RpemUtaW5wdXQnKS5yZW1vdmVDbGFzcygnZm9jdXMgaW5wdXQtYWN0aXZlIGRyb3Bkb3duLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zZWxlY3RpemVyIGRpdi5zZWxlY3RpemUtaW5wdXQgPiBpbnB1dCcpLmJsdXIoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH1cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnJlY29tbWVuZGF0aW9uU2VydmljZS5nZXRBdmFpbGFibGVPcHRpb25zKCk7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRDb250cm9sICE9IHRoaXMuY29udHJvbCkgJiYgdGhpcy5jdXJyZW50Q29udHJvbCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbCA9IHRoaXMuY29udHJvbDtcclxuICAgICAgICAgICAgc2VsZi5sb2FkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzZWxlY3Qgb2YgdGhpcy5zZWxlY3RJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdC5zZWxlY3RpemUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXRzID0gW107XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbnRpYWxpemVTZWxlY3RpemUoKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VBc0RlZmF1bHQob3B0aW9uczogYW55LCBvcHRpb246IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGVmdWFsdHNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uZGVmdWFsdHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkX09wdGlvbl9Jbl9Ecm9wZG93bigpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAnc2VsZWN0Ym94Jykge1xyXG4gICAgICAgICAgICBsZXQgZ2V0T3B0aW9uOiBhbnkgPSBpdGVtLmdldE9wdGlvbigpO1xyXG4gICAgICAgICAgICBnZXRPcHRpb24udmFsdWUgPSAodGhpcy5jb250cm9sLm9wdGlvbnMubGVuZ3RoICsgMSkudG9TdHJpbmcoKTsvL3RoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVswXS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sLm9wdGlvbnMucHVzaChnZXRPcHRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnVwZGF0ZUZvcm1Hcm91cCgpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLmFkZE9wdGlvbih7IHZhbHVlOiBnZXRPcHRpb24udmFsdWUsIHRleHQ6IGdldE9wdGlvbi5sYWJlbCB9KTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udHJvbC50eXBlID09ICdyYWRpb19idXR0b24nIHx8IHRoaXMuY29udHJvbC50eXBlID09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgbGV0IGdldE9wdGlvbjogYW55ID0gaXRlbS5nZXRPcHRpb24oKTtcclxuICAgICAgICAgICAgZ2V0T3B0aW9uLnZhbHVlID0gKHRoaXMuY29udHJvbC5vcHRpb25zLmxlbmd0aCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5vcHRpb25zLnB1c2goZ2V0T3B0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZUluaXRTZWxlY3RpemVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVJbml0U2VsZWN0aXplcigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAobGV0IHNlbGVjdCBvZiB0aGlzLnNlbGVjdElucHV0cykge1xyXG4gICAgICAgICAgICBzZWxlY3Quc2VsZWN0aXplLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dHMgPSBbXTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnRpYWxpemVTZWxlY3RpemUoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2lkZS1zY3JvbGwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBqUXVlcnkoZG9jdW1lbnQpLmhlaWdodCgpIH0sIDUwKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlX09wdGlvbl9Gcm9tX0l0ZW1zKG9wdGlvbnM6IGFueSwgaW5kZXg6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAnc2VsZWN0Ym94Jykge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnJlbW92ZU9wdGlvbihvcHRpb25zW2luZGV4XS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUucmVmcmVzaE9wdGlvbnMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5yZUluaXRTZWxlY3RpemVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VEZXNjcmlwdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuY29uZmlnLnNob3dIZWxwID0gIXRoaXMuY29udHJvbC5jb25maWcuc2hvd0hlbHA7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5jb25maWcuc2hvd0hlbHAgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy50eXBlLWRldGFpbHMnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3ctY2hlY2snKS5wYXJlbnRzKCcudHlwZS1kZXRhaWxzJykuZmluZCgnLmRpdi1jaGVjaycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbk9wdGlvblZhbENoYW5nZShvcHRpb246IGFueSwgJGV2ZW50OiBhbnkpIHtcclxuICAgIC8vIFx0alF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS51cGRhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCB7IHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlLCB0ZXh0OiBvcHRpb24ubGFiZWwgfSk7XHJcbiAgICAvLyBcdG9wdGlvbi52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25PcHRpb25MYWJlbENoYW5nZShvcHRpb246IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wudHlwZSA9PSAnc2VsZWN0Ym94Jykge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnVwZGF0ZU9wdGlvbihvcHRpb24udmFsdWUsIHsgdmFsdWU6IG9wdGlvbi52YWx1ZSwgdGV4dDogb3B0aW9uLmxhYmVsIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
