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
var RedoComponent = (function () {
    function RedoComponent() {
    }
    RedoComponent.prototype.redoFun = function () {
        window.location.reload(true);
    };
    RedoComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RedoComponent.prototype, "data", void 0);
    RedoComponent = __decorate([
        core_1.Component({
            selector: 'result_redo',
            directives: [],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <div class=\"redo-link\">\n\t\t<ul>\n\t\t    <li><span>|</span></li>\n\t\t\t<li><a  id=\"refresh-button\" (click)=\"redoFun()\"><i class=\"material-icons\">replay</i></a></li>\t\n        </ul>\n\t</div>\n\t\t\t\n"
        }), 
        __metadata('design:paramtypes', [])
    ], RedoComponent);
    return RedoComponent;
}());
exports.RedoComponent = RedoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZXN1bHRyZWRvL3JlZG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUUsZUFBZSxDQUFDLENBQUE7QUFrQmpGO0lBQUE7SUFXQSxDQUFDO0lBUkcsK0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCx1Q0FBZSxHQUFmO0lBSUEsQ0FBQztJQVREO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQWhCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFFBQVEsRUFBRSw0TkFRYjtTQUNBLENBQUM7O3FCQUFBO0lBWUYsb0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZXN1bHRyZWRvL3JlZG8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Jlc3VsdF9yZWRvJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJyZWRvLWxpbmtcIj5cclxuXHRcdDx1bD5cclxuXHRcdCAgICA8bGk+PHNwYW4+fDwvc3Bhbj48L2xpPlxyXG5cdFx0XHQ8bGk+PGEgIGlkPVwicmVmcmVzaC1idXR0b25cIiAoY2xpY2spPVwicmVkb0Z1bigpXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnJlcGxheTwvaT48L2E+PC9saT5cdFxyXG4gICAgICAgIDwvdWw+XHJcblx0PC9kaXY+XHJcblx0XHRcdFxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWRvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVkb0Z1bigpe1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8galF1ZXJ5KCcjcmVmcmVzaC1idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
