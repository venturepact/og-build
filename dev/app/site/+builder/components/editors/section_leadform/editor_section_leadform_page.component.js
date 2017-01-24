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
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var selectize_component_1 = require('./component/selectize.component');
var model_1 = require('../../../models/model');
var EditorSectionLeadformPage = (function () {
    function EditorSectionLeadformPage(_JSONBuilder, _builderService, _ItemTrackService) {
        this._JSONBuilder = _JSONBuilder;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.editorControl = {
            click_button: {},
            leadform: {}
        };
    }
    EditorSectionLeadformPage.prototype.ngOnInit = function () {
        for (var section in this.page.sections) {
            if (this.page.sections[section].type === 'LeadForm') {
                this.leadSection = this.page.sections[section];
            }
            for (var item in this.page.sections[section].items) {
                for (var prop in this.editorControl) {
                    if (prop === this.page.sections[section].items[item].type)
                        this.editorControl[prop] = this.page.sections[section].items[item];
                }
            }
        }
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
    };
    EditorSectionLeadformPage.prototype.onChange = function ($event) {
        jQuery('[ng-reflect-ng-switch= sound-cloud]').addClass('template2');
        var data = [];
        data = this._JSONBuilder.hideOtherLeadForm($event.target.value, $event.target.selectedIndex);
        this.editorControl = data[1];
        this.leadSection = data[0];
    };
    EditorSectionLeadformPage.prototype.toggleLeadform = function (event) {
        this.editorControl.leadform.visible = !this.editorControl.leadform.visible;
        if (this.editorControl.leadform.visible) {
            this._JSONBuilder.hideOtherLeadForm1();
        }
        else {
            this._JSONBuilder.setSelectedModel('Page');
        }
        this.editorControl.click_button.visible
            ? this.editorControl.leadform.props.title = this.editorControl.click_button.props.title
            : this.editorControl.click_button.props.title = this.editorControl.leadform.props.title;
        if (this.editorControl.click_button)
            this.editorControl.click_button.visible = !this.editorControl.click_button.visible;
    };
    EditorSectionLeadformPage.prototype.scrollIt = function (bindingClass1) {
        if (jQuery(bindingClass1).length) {
            var templateHeight = 0;
            if (jQuery('[ng-reflect-ng-switch= sound-cloud]')) {
                templateHeight = jQuery('.template2').height();
                if (bindingClass1 == 'page_0') {
                    templateHeight = 0;
                }
            }
            else {
                templateHeight = 0;
            }
            jQuery('[ng-reflect-ng-switch= sound-cloud]').addClass('template2');
            var zoomFactor = jQuery('temp').css('zoom');
            var position = jQuery(bindingClass1).position().top - (jQuery("temp").position().top) + templateHeight;
        }
    };
    EditorSectionLeadformPage.prototype.add_Field_In_LeadForm = function () {
        var item = new model_1.Item;
        this.editorControl.leadform.fields.push(item.getField());
    };
    EditorSectionLeadformPage.prototype.delete_Field_From_LeadForm = function (index) {
        this.editorControl.leadform.fields.splice(index, 1);
    };
    EditorSectionLeadformPage.prototype.toggleRequired = function (field) {
        field.validations.required.status = !field.validations.required.status;
    };
    EditorSectionLeadformPage.prototype.onChangeDescription = function (leadSection) {
        leadSection.showDesc = !leadSection.showDesc;
    };
    EditorSectionLeadformPage.prototype.callGA = function (str, leadSection) {
        if (leadSection === void 0) { leadSection = {}; }
        switch (str) {
            case "HELPTEXT":
                if (leadSection.showDesc) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOn');
                    _kmq.push(['record', 'Builder Lead Gen HelpText Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOff');
                    _kmq.push(['record', 'Builder Lead Gen HelpText Toggle Off']);
                }
                break;
            case "SETMANDATE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Set Leadgen Field Mandatory Click');
                _kmq.push(['record', 'Builder Leadgen field Set Mandatory Click']);
                break;
            case "UNSETMANDATE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Unset Leadgen Field Mandatory Click');
                _kmq.push(['record', 'Builder Leadgen field Unset Mandatory Click']);
                break;
            case "ADDLEADFIELD":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Add Leadgen Field Click');
                _kmq.push(['record', 'Builder Add Leadgen field Click']);
                break;
            case "SHOWLAST":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Show Leadgen Form in Last Click');
                _kmq.push(['record', 'Builder Show Leadgen Form in Last Click']);
                break;
        }
    };
    EditorSectionLeadformPage.prototype.ngAfterViewInit = function () {
    };
    EditorSectionLeadformPage.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSectionLeadformPage.prototype, "page", void 0);
    EditorSectionLeadformPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-section-leadform-page',
            directives: [selectize_component_1.Selectize],
            templateUrl: 'assets/html/editor_section_leadform_page.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorSectionLeadformPage);
    return EditorSectionLeadformPage;
}());
exports.EditorSectionLeadformPage = EditorSectionLeadformPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uX2xlYWRmb3JtL2VkaXRvcl9zZWN0aW9uX2xlYWRmb3JtX3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUYsZUFBZSxDQUFDLENBQUE7QUFDckcsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFDbEYsb0NBQTBCLGlDQUFpQyxDQUFDLENBQUE7QUFDNUQsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFhN0M7SUFRQyxtQ0FDUyxZQUF5QixFQUN6QixlQUErQixFQUMvQixpQkFBa0M7UUFGbEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFQM0Msa0JBQWEsR0FBUTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztJQU9MLENBQUM7SUFDRCw0Q0FBUSxHQUFSO1FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDUSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFL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QU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxLQUFLLENBQUM7WUFDUCxLQUFLLFVBQVU7Z0JBQ2QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlDQUFpQyxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUseUNBQXlDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUNKLG1EQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsK0NBQVcsR0FBWDtJQUVHLENBQUM7SUExSUo7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBVFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsVUFBVSxFQUFFLENBQUMsK0JBQVMsQ0FBQztZQUN2QixXQUFXLEVBQUUseURBQXlEO1lBQ3RFLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3JDLENBQUM7O2lDQUFBO0lBK0lGLGdDQUFDO0FBQUQsQ0E3SUEsQUE2SUMsSUFBQTtBQTdJWSxpQ0FBeUIsNEJBNklyQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uX2xlYWRmb3JtL2VkaXRvcl9zZWN0aW9uX2xlYWRmb3JtX3BhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlbGVjdGl6ZSB9IGZyb20gJy4vY29tcG9uZW50L3NlbGVjdGl6ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL21vZGVsJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdlZGl0b3Itc2VjdGlvbi1sZWFkZm9ybS1wYWdlJyxcclxuXHRkaXJlY3RpdmVzOiBbU2VsZWN0aXplXSxcclxuXHR0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvcl9zZWN0aW9uX2xlYWRmb3JtX3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JTZWN0aW9uTGVhZGZvcm1QYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHBhZ2U6IGFueTtcclxuXHRsZWFkU2VjdGlvbjogYW55O1xyXG5cdFNlY3Rpb25pbmRleDogbnVtYmVyO1xyXG5cdGVkaXRvckNvbnRyb2w6IGFueSA9IHtcclxuICAgICAgICBjbGlja19idXR0b246IHt9LFxyXG4gICAgICAgIGxlYWRmb3JtOiB7fVxyXG4gICAgfTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX0pTT05CdWlsZGVyOiBKU09OQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuXHRcdHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlclxyXG5cdCkge1xyXG4gICAgICAgIC8vXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Zm9yIChsZXQgc2VjdGlvbiBpbiB0aGlzLnBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm0nKSB7XHJcblx0XHRcdFx0dGhpcy5sZWFkU2VjdGlvbiA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmVkaXRvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zW2l0ZW1dLnR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbFtwcm9wXSA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtc1tpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLlNlY3Rpb25pbmRleCA9IGpRdWVyeS5pbkFycmF5KHRoaXMubGVhZFNlY3Rpb24sIHRoaXMucGFnZS5zZWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcblx0XHR0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRQYWdlKHRoaXMucGFnZSk7XHJcblx0fVxyXG4gICAgb25DaGFuZ2UoJGV2ZW50OiBhbnkpIHtcclxuXHRcdCBqUXVlcnkoJ1tuZy1yZWZsZWN0LW5nLXN3aXRjaD0gc291bmQtY2xvdWRdJykuYWRkQ2xhc3MoJ3RlbXBsYXRlMicpO1xyXG5cdFx0Ly8gaWYgKCRldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleCA9PT0gMSkge1xyXG5cdFx0Ly8gXHR0aGlzLnNjcm9sbEl0KCcucGFnZV8xJyk7XHJcblx0XHQvLyB9IGVsc2UgaWYgKCRldmVudC50YXJnZXQuc2VsZWN0ZWRJbmRleCA9PT0gMikge1xyXG5cdFx0Ly8gXHRsZXQgbGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuX0pTT05CdWlsZGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zLmxlbmd0aDtcclxuXHRcdC8vIFx0dGhpcy5zY3JvbGxJdCgnLnNlY18nICsgKGxhc3RTZWN0aW9uSW5kZXggLSAxKSApO1xyXG5cdFx0Ly8gfSBlbHNlIGlmKCRldmVudC50YXJnZXQudmFsdWUgPT09ICdMYW5kaW5nJykge1xyXG5cdFx0Ly8gXHR0aGlzLnNjcm9sbEl0KCcucGFnZV8wJyk7XHJcblx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0Ly8gXHR0aGlzLnNjcm9sbEl0KCcucGFnZV8yJyk7XHJcblx0XHQvLyB9XHJcblx0XHRsZXQgZGF0YTogYW55W10gPSBbXTtcclxuICAgICAgICBkYXRhID0gdGhpcy5fSlNPTkJ1aWxkZXIuaGlkZU90aGVyTGVhZEZvcm0oJGV2ZW50LnRhcmdldC52YWx1ZSwgJGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4KTtcclxuXHRcdHRoaXMuZWRpdG9yQ29udHJvbCA9IGRhdGFbMV07XHJcblx0XHR0aGlzLmxlYWRTZWN0aW9uID0gZGF0YVswXTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMZWFkZm9ybShldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNMZWFkQWNjZXNzaWJsZSkge1xyXG5cdFx0dGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtLnZpc2libGU7XHJcblx0XHRpZiAodGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtLnZpc2libGUpIHtcclxuXHRcdFx0dGhpcy5fSlNPTkJ1aWxkZXIuaGlkZU90aGVyTGVhZEZvcm0xKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9KU09OQnVpbGRlci5zZXRTZWxlY3RlZE1vZGVsKCdQYWdlJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmVkaXRvckNvbnRyb2wuY2xpY2tfYnV0dG9uLnZpc2libGVcclxuXHRcdFx0PyB0aGlzLmVkaXRvckNvbnRyb2wubGVhZGZvcm0ucHJvcHMudGl0bGUgPSB0aGlzLmVkaXRvckNvbnRyb2wuY2xpY2tfYnV0dG9uLnByb3BzLnRpdGxlXHJcblx0XHRcdDogdGhpcy5lZGl0b3JDb250cm9sLmNsaWNrX2J1dHRvbi5wcm9wcy50aXRsZSA9IHRoaXMuZWRpdG9yQ29udHJvbC5sZWFkZm9ybS5wcm9wcy50aXRsZTtcclxuXHRcdGlmICh0aGlzLmVkaXRvckNvbnRyb2wuY2xpY2tfYnV0dG9uKVxyXG5cdFx0XHR0aGlzLmVkaXRvckNvbnRyb2wuY2xpY2tfYnV0dG9uLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLmNsaWNrX2J1dHRvbi52aXNpYmxlO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGVhZGZvcm0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRyb2wuY2xpY2tfYnV0dG9uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHRzY3JvbGxJdChiaW5kaW5nQ2xhc3MxOiBzdHJpbmcpIHtcclxuXHJcblx0XHRpZiAoalF1ZXJ5KGJpbmRpbmdDbGFzczEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBpZihqUXVlcnkoJ1tuZy1yZWZsZWN0LW5nLXN3aXRjaD0gc291bmQtY2xvdWRdJykpe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSBqUXVlcnkoJy50ZW1wbGF0ZTInKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGlmKGJpbmRpbmdDbGFzczEgPT0gJ3BhZ2VfMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeSgnW25nLXJlZmxlY3Qtbmctc3dpdGNoPSBzb3VuZC1jbG91ZF0nKS5hZGRDbGFzcygndGVtcGxhdGUyJyk7XHJcbiAgICAgICAgICAgIHZhciB6b29tRmFjdG9yID0galF1ZXJ5KCd0ZW1wJykuY3NzKCd6b29tJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5wb3NpdGlvbigpLnRvcCAtIChqUXVlcnkoXCJ0ZW1wXCIpLnBvc2l0aW9uKCkudG9wICkgKyB0ZW1wbGF0ZUhlaWdodDtcclxuICAgICAgICAgICAgLy8galF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikubUN1c3RvbVNjcm9sbGJhcihcInNjcm9sbFRvXCIsIFstKHBvc2l0aW9uKiB6b29tRmFjdG9yKSwgXCItPTBcIl0sIHtcclxuICAgICAgICAgICAgLy8gICAgIHNjcm9sbEVhc2luZzogXCJlYXNlT3V0XCJcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRhZGRfRmllbGRfSW5fTGVhZEZvcm0oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbTtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wubGVhZGZvcm0uZmllbGRzLnB1c2goaXRlbS5nZXRGaWVsZCgpKTtcclxuICAgIH1cclxuXHRkZWxldGVfRmllbGRfRnJvbV9MZWFkRm9ybShpbmRleDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtLmZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlUmVxdWlyZWQoZmllbGQ6IGFueSkge1xyXG4gICAgICAgIGZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFmaWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZURlc2NyaXB0aW9uKGxlYWRTZWN0aW9uOiBhbnkpIHtcclxuXHRcdGxlYWRTZWN0aW9uLnNob3dEZXNjID0gIWxlYWRTZWN0aW9uLnNob3dEZXNjO1xyXG5cdH1cclxuICAgIGNhbGxHQShzdHI6IHN0cmluZywgbGVhZFNlY3Rpb246IGFueSA9IHt9KSB7XHJcblx0XHRzd2l0Y2ggKHN0cikge1xyXG5cdFx0XHRjYXNlIFwiSEVMUFRFWFRcIjpcclxuXHRcdFx0XHRpZiAobGVhZFNlY3Rpb24uc2hvd0Rlc2MpIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIExlYWQgR2VuIEhlbHBUZXh0IFRvZ2dsZSBPbiddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9mZicpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTGVhZCBHZW4gSGVscFRleHQgVG9nZ2xlIE9mZiddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTRVRNQU5EQVRFXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdTZXQgTGVhZGdlbiBGaWVsZCBNYW5kYXRvcnkgQ2xpY2snKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBMZWFkZ2VuIGZpZWxkIFNldCBNYW5kYXRvcnkgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJVTlNFVE1BTkRBVEVcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ1Vuc2V0IExlYWRnZW4gRmllbGQgTWFuZGF0b3J5IENsaWNrJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTGVhZGdlbiBmaWVsZCBVbnNldCBNYW5kYXRvcnkgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRERMRUFERklFTERcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0FkZCBMZWFkZ2VuIEZpZWxkIENsaWNrJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIExlYWRnZW4gZmllbGQgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTSE9XTEFTVFwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1Nob3cgTGVhZGdlbiBGb3JtIGluIExhc3QgQ2xpY2snKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTaG93IExlYWRnZW4gRm9ybSBpbiBMYXN0IENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vYWZ0ZXIgZWRpdG9yIGluaXRpYWxpemVkLi5cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly9cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19
