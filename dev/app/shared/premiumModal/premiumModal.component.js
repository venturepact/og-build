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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var index_1 = require('./../services/index');
var PremiumModalComponent = (function () {
    function PremiumModalComponent(_cookieService) {
        this._cookieService = _cookieService;
    }
    PremiumModalComponent.prototype.callGA = function (str) {
        switch (str) {
            case "UPGRADE":
                ga('markettingteam.send', 'event', 'UpgradeNow', 'Click', 'Upgradepopup');
                _kmq.push(['record', 'Upgrade popup click']);
                break;
            case "LATER":
                this.updateStorage();
                ga('markettingteam.send', 'event', 'UpgradeLater', 'Click', 'Upgradepopup');
                _kmq.push(['record', 'Upgrade later link click']);
                break;
        }
    };
    PremiumModalComponent.prototype.updateStorage = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.showUpgradeModal) {
            storage.showUpgradeModal = false;
            this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
        }
    };
    PremiumModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-premium-modal',
            templateUrl: 'premiumModal.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CookieService])
    ], PremiumModalComponent);
    return PremiumModalComponent;
}());
exports.PremiumModalComponent = PremiumModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcHJlbWl1bU1vZGFsL3ByZW1pdW1Nb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBOEIscUJBQXFCLENBQUMsQ0FBQTtBQWNwRDtJQUNFLCtCQUNVLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUd4QyxDQUFDO0lBRUQsc0NBQU0sR0FBTixVQUFPLEdBQU87UUFDWixNQUFNLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxTQUFTO2dCQUNaLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLEtBQUssQ0FBQztZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRUQsNkNBQWEsR0FBYjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNILENBQUM7SUFsQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN2QyxDQUFDOzs2QkFBQTtJQThCRiw0QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksNkJBQXFCLHdCQTRCakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3ByZW1pdW1Nb2RhbC9wcmVtaXVtTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuZGVjbGFyZSB2YXIgZ2E6YW55O1xyXG5kZWNsYXJlIHZhciBfa21xOmFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1wcmVtaXVtLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3ByZW1pdW1Nb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVtaXVtTW9kYWxDb21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZVxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG4gIGNhbGxHQShzdHI6YW55KSB7XHJcbiAgICBzd2l0Y2goc3RyKSB7XHJcbiAgICAgIGNhc2UgXCJVUEdSQURFXCI6XHJcbiAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnVXBncmFkZU5vdycsICdDbGljaycsICdVcGdyYWRlcG9wdXAnKTtcclxuICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnVXBncmFkZSBwb3B1cCBjbGljayddKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkxBVEVSXCI6XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnVXBncmFkZUxhdGVyJywgJ0NsaWNrJywgJ1VwZ3JhZGVwb3B1cCcpO1xyXG4gICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdVcGdyYWRlIGxhdGVyIGxpbmsgY2xpY2snXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdG9yYWdlKCkge1xyXG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgIGlmKHN0b3JhZ2Uuc2hvd1VwZ3JhZGVNb2RhbCkge1xyXG4gICAgICBzdG9yYWdlLnNob3dVcGdyYWRlTW9kYWwgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwgMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
