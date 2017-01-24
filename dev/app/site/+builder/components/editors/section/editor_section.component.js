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
var EditorSection = (function () {
    function EditorSection(_JSONBuilder, _builderService, _ItemTrackService) {
        this._JSONBuilder = _JSONBuilder;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.iconArray = ['android', 'devices', 'desktop_mac', 'tablet', 'business', 'call', 'call_end',
            'chat', 'chat_bubble', 'comment', 'contact_mail', 'contact_phone', 'forum',
            'import_contacts', 'import_export', 'invert_colors_off', 'live_help',
            'location_off', 'location_on', 'no_sim', 'phonelink_erase', 'phonelink_lock',
            'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all',
            'ring_volume', 'rss_feed', 'screen_share', 'speaker_phone', 'stay_current_landscape',
            'stay_current_portrait', 'swap_calls', 'textsms', 'add_circle', 'archive', 'clear',
            'content_copy', 'content_cut', 'content_paste', 'create', 'delete_sweep', 'drafts',
            'filter_list', 'flag', 'font_download', 'forward', 'gesture', 'inbox', 'link', 'low_priority',
            'mail', 'move_to_inbox', 'weekend', 'access_alarm', 'devices', 'airplanemode_active',
            'airplanemode_inactive', 'battery_alert', 'battery_charging_full', 'bluetooth',
            'brightness_auto', 'brightness_medium', 'sd_storage', 'settings_system_daydream',
            'storage', 'attach_file', 'attach_money', 'border_color', 'bubble_chart'
        ];
    }
    EditorSection.prototype.ngAfterViewInit = function () {
        jQuery('.option-icons .btn').on('click', function () {
            jQuery(this).parent().addClass('open');
        });
        jQuery('body').on('click', function (e) {
            if (!jQuery('.option-icons.open').is(e.target)
                && jQuery('.option-icons.open .btn').has(e.target).length === 0
                && jQuery('.open').has(e.target).length === 0) {
                jQuery('.option-icons').removeClass('open');
            }
        });
        jQuery('.choose-icon').on('click', function () {
            jQuery(this).parent().addClass('open');
        });
        jQuery('body').on('click', function (e) {
            if (!jQuery('.choose.open').is(e.target)
                && jQuery('.choose.open .material-icon-dropdown').has(e.target).length === 0
                && jQuery('.choose.open').has(e.target).length === 0) {
                jQuery('.choose').removeClass('open');
            }
        });
    };
    EditorSection.prototype.onChangeDescription = function (section) {
        section.showDesc = !section.showDesc;
    };
    EditorSection.prototype.onChangeShowIcon = function (section) {
        section.showIcon = !section.showIcon;
    };
    EditorSection.prototype.changeIcon = function (section, event) {
        section.icon = event.target.value;
        if (section.previousIcons.indexOf(event.target.value) === -1) {
            if (event.target.value !== '') {
                if (section.previousIcons.length > 2) {
                    section.previousIcons.splice(0, 1);
                    section.previousIcons.push(event.target.value);
                }
                else {
                    section.previousIcons.push(event.target.value);
                }
            }
        }
    };
    EditorSection.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedSections(this.section);
    };
    EditorSection.prototype.callGA = function (str, section) {
        if (section === void 0) { section = {}; }
        switch (str) {
            case "HELPTEXT":
                if (section.showDesc) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOn');
                    _kmq.push(['record', 'Builder Toggle Help Text On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOff');
                    _kmq.push(['record', 'Builder Toggle Help Text Off']);
                }
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSection.prototype, "section", void 0);
    EditorSection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-section',
            directives: [],
            templateUrl: 'assets/html/editor_section.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorSection);
    return EditorSection;
}());
exports.EditorSection = EditorSection;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uL2VkaXRvcl9zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZFLGVBQWUsQ0FBQyxDQUFBO0FBQzdGLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDhDQUFnQyxpREFBaUQsQ0FBQyxDQUFBO0FBY2xGO0lBaUJDLHVCQUNTLFlBQXlCLEVBQ3pCLGVBQStCLEVBQy9CLGlCQUFrQztRQUZsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQWxCM0MsY0FBUyxHQUFhLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVTtZQUM3RixNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE9BQU87WUFDMUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFdBQVc7WUFDcEUsY0FBYyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO1lBQzVFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQjtZQUMxRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsd0JBQXdCO1lBQ3BGLHVCQUF1QixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxPQUFPO1lBQ2xGLGNBQWMsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUTtZQUNsRixhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFT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QUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELEtBQUssQ0FBQztRQUNSLENBQUM7SUFDQyxDQUFDO0lBNUZKO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQVRUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLDJDQUEyQztZQUN4RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUNyQyxDQUFDOztxQkFBQTtJQWdHRixvQkFBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUE5RlkscUJBQWEsZ0JBOEZ6QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uL2VkaXRvcl9zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXNlY3Rpb24nLFxyXG5cdGRpcmVjdGl2ZXM6IFtdLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX3NlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JTZWN0aW9uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHRASW5wdXQoKSBzZWN0aW9uOiBhbnk7XHJcblx0aWNvbkFycmF5OiBzdHJpbmdbXSA9IFsnYW5kcm9pZCcsICdkZXZpY2VzJywgJ2Rlc2t0b3BfbWFjJywgJ3RhYmxldCcsICdidXNpbmVzcycsICdjYWxsJywgJ2NhbGxfZW5kJyxcclxuXHQgXHRcdFx0XHRcdFx0J2NoYXQnLCAnY2hhdF9idWJibGUnLCAnY29tbWVudCcsICdjb250YWN0X21haWwnLCAnY29udGFjdF9waG9uZScsICdmb3J1bScsXHJcblx0XHRcdFx0XHRcdFx0ICdpbXBvcnRfY29udGFjdHMnLCAnaW1wb3J0X2V4cG9ydCcsICdpbnZlcnRfY29sb3JzX29mZicsICdsaXZlX2hlbHAnLFxyXG5cdFx0XHRcdFx0XHRcdCAnbG9jYXRpb25fb2ZmJywgJ2xvY2F0aW9uX29uJywgJ25vX3NpbScsICdwaG9uZWxpbmtfZXJhc2UnLCAncGhvbmVsaW5rX2xvY2snLFxyXG5cdFx0XHRcdFx0XHRcdCAncGhvbmVsaW5rX3JpbmcnLCAncGhvbmVsaW5rX3NldHVwJywgJ3BvcnRhYmxlX3dpZmlfb2ZmJywgJ3ByZXNlbnRfdG9fYWxsJyxcclxuXHRcdFx0XHRcdFx0XHQgJ3Jpbmdfdm9sdW1lJywgJ3Jzc19mZWVkJywgJ3NjcmVlbl9zaGFyZScsICdzcGVha2VyX3Bob25lJywgJ3N0YXlfY3VycmVudF9sYW5kc2NhcGUnLFxyXG5cdFx0XHRcdFx0XHRcdCAnc3RheV9jdXJyZW50X3BvcnRyYWl0JywgJ3N3YXBfY2FsbHMnLCAndGV4dHNtcycsICdhZGRfY2lyY2xlJywgJ2FyY2hpdmUnLCAnY2xlYXInLFxyXG5cdFx0XHRcdFx0XHRcdCAnY29udGVudF9jb3B5JywgJ2NvbnRlbnRfY3V0JywgJ2NvbnRlbnRfcGFzdGUnLCAnY3JlYXRlJywgJ2RlbGV0ZV9zd2VlcCcsICdkcmFmdHMnLFxyXG5cdFx0XHRcdFx0XHRcdCAnZmlsdGVyX2xpc3QnLCAnZmxhZycsICdmb250X2Rvd25sb2FkJywgJ2ZvcndhcmQnLCAnZ2VzdHVyZScsICdpbmJveCcsICdsaW5rJywgJ2xvd19wcmlvcml0eScsXHJcblx0XHRcdFx0XHRcdFx0ICdtYWlsJywgJ21vdmVfdG9faW5ib3gnLCAnd2Vla2VuZCcsICdhY2Nlc3NfYWxhcm0nLCAnZGV2aWNlcycsICdhaXJwbGFuZW1vZGVfYWN0aXZlJyxcclxuXHRcdFx0XHRcdFx0XHQgJ2FpcnBsYW5lbW9kZV9pbmFjdGl2ZScsICdiYXR0ZXJ5X2FsZXJ0JywgJ2JhdHRlcnlfY2hhcmdpbmdfZnVsbCcsICdibHVldG9vdGgnLFxyXG5cdFx0XHRcdFx0XHRcdCAnYnJpZ2h0bmVzc19hdXRvJywgJ2JyaWdodG5lc3NfbWVkaXVtJywgJ3NkX3N0b3JhZ2UnLCAnc2V0dGluZ3Nfc3lzdGVtX2RheWRyZWFtJyxcclxuXHRcdFx0XHRcdFx0XHQgJ3N0b3JhZ2UnLCAnYXR0YWNoX2ZpbGUnLCAnYXR0YWNoX21vbmV5JywgJ2JvcmRlcl9jb2xvcicsICdidWJibGVfY2hhcnQnXHJcblx0XTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9KU09OQnVpbGRlcjogSlNPTkJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXJcclxuXHQpIHtcclxuXHRcdC8vXHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvL2FmdGVyIGVkaXRvciBpbml0aWFsaXplZC4uXHJcblx0XHRqUXVlcnkoJy5vcHRpb24taWNvbnMgLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0alF1ZXJ5KHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcblx0XHRcdGlmICghalF1ZXJ5KCcub3B0aW9uLWljb25zLm9wZW4nKS5pcyhlLnRhcmdldClcclxuXHRcdFx0XHQmJiBqUXVlcnkoJy5vcHRpb24taWNvbnMub3BlbiAuYnRuJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcclxuXHJcblx0XHRcdFx0JiYgalF1ZXJ5KCcub3BlbicpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGpRdWVyeSgnLm9wdGlvbi1pY29ucycpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0alF1ZXJ5KCcuY2hvb3NlLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0XHRqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcblx0XHRcdGlmICghalF1ZXJ5KCcuY2hvb3NlLm9wZW4nKS5pcyhlLnRhcmdldClcclxuXHRcdFx0XHQmJiBqUXVlcnkoJy5jaG9vc2Uub3BlbiAubWF0ZXJpYWwtaWNvbi1kcm9wZG93bicpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcblx0XHRcdFx0JiYgalF1ZXJ5KCcuY2hvb3NlLm9wZW4nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRqUXVlcnkoJy5jaG9vc2UnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0b25DaGFuZ2VEZXNjcmlwdGlvbihzZWN0aW9uOiBhbnkpIHtcclxuXHRcdHNlY3Rpb24uc2hvd0Rlc2MgPSAhc2VjdGlvbi5zaG93RGVzYztcclxuXHR9XHJcblx0b25DaGFuZ2VTaG93SWNvbihzZWN0aW9uOiBhbnkpIHtcclxuXHRcdHNlY3Rpb24uc2hvd0ljb24gPSAhc2VjdGlvbi5zaG93SWNvbjtcclxuXHR9XHJcblx0Y2hhbmdlSWNvbihzZWN0aW9uOiBhbnksIGV2ZW50OiBhbnkpIHtcclxuXHRcdHNlY3Rpb24uaWNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdC8vc3RvcmUgcHJldmlvdXNseSBzZWxlY3RlZCBJY29uc1xyXG5cdFx0Ly9vcHRpb24ucHJldmlvdXNJY29ucy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRpZiAoc2VjdGlvbi5wcmV2aW91c0ljb25zLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSA9PT0gLTEpIHtcclxuXHJcblx0XHRcdGlmIChldmVudC50YXJnZXQudmFsdWUgIT09ICcnKSB7XHJcblx0XHRcdFx0aWYgKHNlY3Rpb24ucHJldmlvdXNJY29ucy5sZW5ndGggPiAyKSB7XHJcblx0XHRcdFx0XHRzZWN0aW9uLnByZXZpb3VzSWNvbnMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHRcdFx0c2VjdGlvbi5wcmV2aW91c0ljb25zLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2VjdGlvbi5wcmV2aW91c0ljb25zLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0dGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcblx0XHR0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRTZWN0aW9ucyh0aGlzLnNlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHQShzdHI6IHN0cmluZywgc2VjdGlvbjogYW55ID0ge30pIHtcclxuXHRcdHN3aXRjaCAoc3RyKSB7XHJcblx0XHRcdGNhc2UgXCJIRUxQVEVYVFwiOlxyXG5cdFx0XHRcdGlmIChzZWN0aW9uLnNob3dEZXNjKSB7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9uJyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBUb2dnbGUgSGVscCBUZXh0IE9uJ10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T2ZmJyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBUb2dnbGUgSGVscCBUZXh0IE9mZiddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19
