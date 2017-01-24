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
var JSONBuilder_service_1 = require('../services/JSONBuilder.service');
var JSONElement_service_1 = require('../services/JSONElement.service');
var itemNames_store_1 = require('../models/itemNames.store');
var Switch = (function () {
    function Switch(jsonElementHandler, jsonBuilderHelper) {
        this.jsonElementHandler = jsonElementHandler;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controls = [];
        var switchItems = (jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') ? itemNames_store_1.RECOMMENDED_ITEMS : itemNames_store_1.ITEMS;
        for (var property in switchItems) {
            if (switchItems.hasOwnProperty(property)) {
                this.controls.push({
                    value: property,
                    name: switchItems[property]
                });
            }
        }
    }
    Switch.prototype.onChange = function ($event) {
        var control = $event.target.value;
        this.jsonBuilderHelper.changeControl(control);
    };
    Switch = __decorate([
        core_1.Component({
            selector: 'switch',
            providers: [JSONElement_service_1.JSONElement],
            template: "\n\t\t\t\t<select \n\t\t\t\t\tclass=\"select-default\" \n\t\t\t\t\t(change)=\"onChange($event)\" \n\t\t\t\t\tdata-width=\"fit\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t>\n\t\t\t        <option *ngFor=\"let control of controls\" value=\"{{control.value}}\" \n\t\t\t\t\t\t[selected]=\"jsonBuilderHelper.getSelectedControl().type==control.value\">{{control.name}}\n\t\t\t\t\t</option>\n\t\t\t    </select>\n\t",
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement, JSONBuilder_service_1.JSONBuilder])
    ], Switch);
    return Switch;
}());
exports.Switch = Switch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLG9DQUE0QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzlELG9DQUE0QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzlELGdDQUF3QywyQkFBMkIsQ0FBQyxDQUFBO0FBc0JwRTtJQUdDLGdCQUFvQixrQkFBK0IsRUFBVSxpQkFBK0I7UUFBeEUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFjO1FBRHpGLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFHckIsSUFBSyxXQUFXLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLElBQUksZ0JBQWdCLENBQUMsR0FBQyxtQ0FBaUIsR0FBQyx1QkFBSyxDQUFDO1FBQy9HLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixLQUFLLEVBQUMsUUFBUTtvQkFDZCxJQUFJLEVBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBS0QseUJBQVEsR0FBUixVQUFTLE1BQVU7UUFDbEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBM0NGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLGlDQUFXLENBQUM7WUFDeEIsUUFBUSxFQUFFLDJaQVdUO1NBRUQsQ0FBQzs7Y0FBQTtJQTRCRixhQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxjQUFNLFNBdUJsQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05FbGVtZW50IH0gZnJvbSAnLi4vc2VydmljZXMvSlNPTkVsZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IElURU1TLFJFQ09NTUVOREVEX0lURU1TIH0gZnJvbSAnLi4vbW9kZWxzL2l0ZW1OYW1lcy5zdG9yZSc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3dpdGNoJyxcclxuXHRwcm92aWRlcnM6IFtKU09ORWxlbWVudF0sXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdFx0XHQ8c2VsZWN0IFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJzZWxlY3QtZGVmYXVsdFwiIFxyXG5cdFx0XHRcdFx0KGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgXHJcblx0XHRcdFx0XHRkYXRhLXdpZHRoPVwiZml0XCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdCAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBjb250cm9sc1wiIHZhbHVlPVwie3tjb250cm9sLnZhbHVlfX1cIiBcclxuXHRcdFx0XHRcdFx0W3NlbGVjdGVkXT1cImpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpLnR5cGU9PWNvbnRyb2wudmFsdWVcIj57e2NvbnRyb2wubmFtZX19XHJcblx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0ICAgIDwvc2VsZWN0PlxyXG5cdGAsXHJcblx0Ly9zdHlsZXM6IFsnLmRpc3BsYXl7ZGlzcGxheTpibG9ja30nXVxyXG59KVxyXG5cdC8vPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cImRpc3BsYXlcIj5cclxuXHQvLyBcdDxvcHRpb24gKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgY29udHJvbHNcIiB2YWx1ZT1cInt7Y29udHJvbH19XCJcclxuXHQvLyBbc2VsZWN0ZWRdPVwianNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCkudHlwZT09Y29udHJvbFwiPnt7Y29udHJvbH19PC9vcHRpb24+XHJcblx0Ly8gPC9zZWxlY3Q+XHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2gge1xyXG5cclxuICAgIGNvbnRyb2xzOiBhbnlbXT1bXTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25FbGVtZW50SGFuZGxlcjogSlNPTkVsZW1lbnQgLHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXIgOiBKU09OQnVpbGRlciApIHtcclxuXHRcdC8vdGhpcy5jb250cm9scyA9IElURU1TO1xyXG5cdFx0bGV0ICBzd2l0Y2hJdGVtcyA9IChqc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJyk/UkVDT01NRU5ERURfSVRFTVM6SVRFTVM7XHJcblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBzd2l0Y2hJdGVtcykge1xyXG5cdFx0XHRpZiAoc3dpdGNoSXRlbXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcblx0XHRcdFx0dGhpcy5jb250cm9scy5wdXNoKHtcclxuXHRcdFx0XHRcdHZhbHVlOnByb3BlcnR5LFxyXG5cdFx0XHRcdFx0bmFtZTpzd2l0Y2hJdGVtc1twcm9wZXJ0eV1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypcclxuXHRcdC0tIENoYW5nZSBldmVudCBmdW5jdGlvbiBldmVudCBmb3Igc2VsZWN0XHJcblx0ICovXHJcblx0b25DaGFuZ2UoJGV2ZW50OmFueSkge1xyXG5cdFx0bGV0IGNvbnRyb2wgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci5jaGFuZ2VDb250cm9sKGNvbnRyb2wpO1xyXG5cdH1cclxufVxyXG4iXX0=
