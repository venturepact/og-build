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
var EditorSectionLeadform = (function () {
    function EditorSectionLeadform(_JSONBuilder, _builderService, _ItemTrackService) {
        this._JSONBuilder = _JSONBuilder;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.editorControl = {
            leadform_question: {}
        };
        this.page = this._JSONBuilder.getSelectedPage();
    }
    EditorSectionLeadform.prototype.ngOnInit = function () {
        for (var section in this.page.sections) {
            if (this.page.sections[section].type === 'LeadFormQ') {
                this.leadSection = this.page.sections[section];
            }
            for (var item in this.page.sections[section].items) {
                for (var prop in this.editorControl) {
                    if (prop === this.page.sections[section].items[item].type)
                        this.editorControl[prop] = this.page.sections[section].items[item];
                }
            }
        }
        this.Sectionindex = jQuery.inArray(this.leadSection, this.page.sections);
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
    };
    EditorSectionLeadform.prototype.onChange = function ($event) {
        jQuery('[ng-reflect-ng-switch= sound-cloud]').addClass('template2');
        this._JSONBuilder.hideOtherLeadForm($event.target.value, $event.target.selectedIndex);
    };
    EditorSectionLeadform.prototype.toggleLeadform = function (event) {
        this.editorControl.leadform_question.visible = !this.editorControl.leadform_question.visible;
        this.leadSection.visible = !this.leadSection.visible;
        if (this.leadSection.visible && this.editorControl.leadform_question.visible) {
            this._JSONBuilder.hideOtherLeadForm1();
        }
        else {
            this._JSONBuilder.setSelectedModel('Page');
        }
    };
    EditorSectionLeadform.prototype.scrollIt = function (bindingClass1) {
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
    EditorSectionLeadform.prototype.add_Field_In_LeadForm = function () {
        var item = new model_1.Item;
        this.editorControl.leadform_question.fields.push(item.getField());
    };
    EditorSectionLeadform.prototype.delete_Field_From_LeadForm = function (index) {
        this.editorControl.leadform_question.fields.splice(index, 1);
    };
    EditorSectionLeadform.prototype.toggleRequired = function (field) {
        field.validations.required.status = !field.validations.required.status;
    };
    EditorSectionLeadform.prototype.onChangeDescription = function (leadSection) {
        leadSection.showDesc = !leadSection.showDesc;
    };
    EditorSectionLeadform.prototype.callGA = function (str, leadSection) {
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
    EditorSectionLeadform.prototype.ngAfterViewInit = function () {
    };
    EditorSectionLeadform.prototype.ngOnDestroy = function () {
    };
    EditorSectionLeadform = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-section-leadform',
            directives: [selectize_component_1.Selectize],
            templateUrl: 'assets/html/editor_section_leadform.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorSectionLeadform);
    return EditorSectionLeadform;
}());
exports.EditorSectionLeadform = EditorSectionLeadform;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uX2xlYWRmb3JtL2VkaXRvcl9zZWN0aW9uX2xlYWRmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFGLGVBQWUsQ0FBQyxDQUFBO0FBQ3JHLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDhDQUFnQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ2xGLG9DQUEwQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzVELHNCQUFxQix1QkFBdUIsQ0FBQyxDQUFBO0FBYTdDO0lBT0MsK0JBQ1MsWUFBeUIsRUFDekIsZUFBK0IsRUFDL0IsaUJBQWtDO1FBRmxDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBTjNDLGtCQUFhLEdBQVE7WUFDZCxpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCLENBQUM7UUFNSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNRLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJ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QUNqRSxLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0MsQ0FBQztJQUNKLCtDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsMkNBQVcsR0FBWDtJQUVHLENBQUM7SUF0SUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsVUFBVSxFQUFFLENBQUMsK0JBQVMsQ0FBQztZQUN2QixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3JDLENBQUM7OzZCQUFBO0lBa0lGLDRCQUFDO0FBQUQsQ0FoSUEsQUFnSUMsSUFBQTtBQWhJWSw2QkFBcUIsd0JBZ0lqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uX2xlYWRmb3JtL2VkaXRvcl9zZWN0aW9uX2xlYWRmb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkl0ZW1UcmFja2VyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWxlY3RpemUgfSBmcm9tICcuL2NvbXBvbmVudC9zZWxlY3RpemUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXNlY3Rpb24tbGVhZGZvcm0nLFxyXG5cdGRpcmVjdGl2ZXM6IFtTZWxlY3RpemVdLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX3NlY3Rpb25fbGVhZGZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JTZWN0aW9uTGVhZGZvcm0gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblx0cGFnZTogYW55O1xyXG5cdGxlYWRTZWN0aW9uOiBhbnk7XHJcblx0U2VjdGlvbmluZGV4OiBudW1iZXI7XHJcblx0ZWRpdG9yQ29udHJvbDogYW55ID0ge1xyXG4gICAgICAgIGxlYWRmb3JtX3F1ZXN0aW9uOiB7fVxyXG4gICAgfTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX0pTT05CdWlsZGVyOiBKU09OQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuXHRcdHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlclxyXG5cdCkge1xyXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5fSlNPTkJ1aWxkZXIuZ2V0U2VsZWN0ZWRQYWdlKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Zm9yIChsZXQgc2VjdGlvbiBpbiB0aGlzLnBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG5cdFx0XHRcdHRoaXMubGVhZFNlY3Rpb24gPSB0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl07XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiB0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0uaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5lZGl0b3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtc1tpdGVtXS50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2xbcHJvcF0gPSB0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0uaXRlbXNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZWN0aW9uaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLmxlYWRTZWN0aW9uLCB0aGlzLnBhZ2Uuc2VjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG5cdFx0dGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkUGFnZSh0aGlzLnBhZ2UpO1xyXG5cdH1cclxuICBcclxuXHRvbkNoYW5nZSgkZXZlbnQ6IGFueSkge1xyXG5cdFx0IGpRdWVyeSgnW25nLXJlZmxlY3Qtbmctc3dpdGNoPSBzb3VuZC1jbG91ZF0nKS5hZGRDbGFzcygndGVtcGxhdGUyJyk7XHJcblx0XHQvLyBpZiAoJGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4ID09PSAxKSB7XHJcblx0XHQvLyBcdHRoaXMuc2Nyb2xsSXQoJy5wYWdlXzEnKTtcclxuXHRcdC8vIH0gZWxzZSBpZiAoJGV2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4ID09PSAyKSB7XHJcblx0XHQvLyBcdGxldCBsYXN0U2VjdGlvbkluZGV4ID0gdGhpcy5fSlNPTkJ1aWxkZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnMubGVuZ3RoO1xyXG5cdFx0Ly8gXHR0aGlzLnNjcm9sbEl0KCcuc2VjXycgKyAobGFzdFNlY3Rpb25JbmRleCAtIDEpICk7XHJcblx0XHQvLyB9IGVsc2UgaWYoJGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ0xhbmRpbmcnKSB7XHJcblx0XHQvLyBcdHRoaXMuc2Nyb2xsSXQoJy5wYWdlXzAnKTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHRoaXMuc2Nyb2xsSXQoJy5wYWdlXzInKTtcclxuXHRcdC8vIH1cclxuICAgICAgICB0aGlzLl9KU09OQnVpbGRlci5oaWRlT3RoZXJMZWFkRm9ybSgkZXZlbnQudGFyZ2V0LnZhbHVlLCAkZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXgpO1xyXG5cdFx0Ly8gbGV0IGJjbGFzc3MgPSBcIiNcIiArIHRoaXMubGVhZFNlY3Rpb24uX2lkO1xyXG5cdFx0Ly8galF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykubUN1c3RvbVNjcm9sbGJhcihcInNjcm9sbFRvXCIsIGJjbGFzc3MpO1xyXG4gICAgfVxyXG5cdHRvZ2dsZUxlYWRmb3JtKGV2ZW50OiBhbnkpIHtcclxuXHRcdHRoaXMuZWRpdG9yQ29udHJvbC5sZWFkZm9ybV9xdWVzdGlvbi52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5sZWFkZm9ybV9xdWVzdGlvbi52aXNpYmxlO1xyXG5cdFx0dGhpcy5sZWFkU2VjdGlvbi52aXNpYmxlID0gIXRoaXMubGVhZFNlY3Rpb24udmlzaWJsZTtcclxuXHRcdGlmICh0aGlzLmxlYWRTZWN0aW9uLnZpc2libGUgJiYgdGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtX3F1ZXN0aW9uLnZpc2libGUpIHtcclxuXHRcdFx0dGhpcy5fSlNPTkJ1aWxkZXIuaGlkZU90aGVyTGVhZEZvcm0xKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9KU09OQnVpbGRlci5zZXRTZWxlY3RlZE1vZGVsKCdQYWdlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHNjcm9sbEl0KGJpbmRpbmdDbGFzczE6IHN0cmluZykge1xyXG5cdFxyXG5cdFx0XHRpZiAoalF1ZXJ5KGJpbmRpbmdDbGFzczEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBpZihqUXVlcnkoJ1tuZy1yZWZsZWN0LW5nLXN3aXRjaD0gc291bmQtY2xvdWRdJykpe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSBqUXVlcnkoJy50ZW1wbGF0ZTInKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGlmKGJpbmRpbmdDbGFzczEgPT0gJ3BhZ2VfMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeSgnW25nLXJlZmxlY3Qtbmctc3dpdGNoPSBzb3VuZC1jbG91ZF0nKS5hZGRDbGFzcygndGVtcGxhdGUyJyk7XHJcbiAgICAgICAgICAgIHZhciB6b29tRmFjdG9yID0galF1ZXJ5KCd0ZW1wJykuY3NzKCd6b29tJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5wb3NpdGlvbigpLnRvcCAtIChqUXVlcnkoXCJ0ZW1wXCIpLnBvc2l0aW9uKCkudG9wICkgKyB0ZW1wbGF0ZUhlaWdodDtcclxuICAgICAgICAgICAgLy8galF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikubUN1c3RvbVNjcm9sbGJhcihcInNjcm9sbFRvXCIsIFstKHBvc2l0aW9uKiB6b29tRmFjdG9yKSwgXCItPTBcIl0sIHtcclxuICAgICAgICAgICAgLy8gICAgIHNjcm9sbEVhc2luZzogXCJlYXNlT3V0XCJcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRhZGRfRmllbGRfSW5fTGVhZEZvcm0oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbTtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wubGVhZGZvcm1fcXVlc3Rpb24uZmllbGRzLnB1c2goaXRlbS5nZXRGaWVsZCgpKTtcclxuICAgIH1cclxuXHRkZWxldGVfRmllbGRfRnJvbV9MZWFkRm9ybShpbmRleDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLmxlYWRmb3JtX3F1ZXN0aW9uLmZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlUmVxdWlyZWQoZmllbGQ6IGFueSkge1xyXG4gICAgICAgIGZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFmaWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZURlc2NyaXB0aW9uKGxlYWRTZWN0aW9uOiBhbnkpIHtcclxuXHRcdGxlYWRTZWN0aW9uLnNob3dEZXNjID0gIWxlYWRTZWN0aW9uLnNob3dEZXNjO1xyXG5cdH1cclxuICAgIGNhbGxHQShzdHI6IHN0cmluZywgbGVhZFNlY3Rpb246IGFueSA9IHt9KSB7XHJcblx0XHRzd2l0Y2ggKHN0cikge1xyXG5cdFx0XHRjYXNlIFwiSEVMUFRFWFRcIjpcclxuXHRcdFx0XHRpZiAobGVhZFNlY3Rpb24uc2hvd0Rlc2MpIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIExlYWQgR2VuIEhlbHBUZXh0IFRvZ2dsZSBPbiddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9mZicpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTGVhZCBHZW4gSGVscFRleHQgVG9nZ2xlIE9mZiddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTRVRNQU5EQVRFXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdTZXQgTGVhZGdlbiBGaWVsZCBNYW5kYXRvcnkgQ2xpY2snKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBMZWFkZ2VuIGZpZWxkIFNldCBNYW5kYXRvcnkgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJVTlNFVE1BTkRBVEVcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ1Vuc2V0IExlYWRnZW4gRmllbGQgTWFuZGF0b3J5IENsaWNrJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTGVhZGdlbiBmaWVsZCBVbnNldCBNYW5kYXRvcnkgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRERMRUFERklFTERcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0FkZCBMZWFkZ2VuIEZpZWxkIENsaWNrJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIExlYWRnZW4gZmllbGQgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTSE9XTEFTVFwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1Nob3cgTGVhZGdlbiBGb3JtIGluIExhc3QgQ2xpY2snKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTaG93IExlYWRnZW4gRm9ybSBpbiBMYXN0IENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vYWZ0ZXIgZWRpdG9yIGluaXRpYWxpemVkLi5cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly9cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19
