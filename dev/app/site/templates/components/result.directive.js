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
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var Result = (function () {
    function Result(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.ele = el.nativeElement;
    }
    Result.prototype.ngOnInit = function () {
        var _this = this;
        var dataText = this.result.props.title;
        dataText = this.result.props.title.replace(/({Q[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{Q}]/)[2]);
            return _this.result.stats[qIndex - 1].value || match;
        });
        dataText = this.result.props.title.replace(/({R[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{R}]/)[2]);
            var resultObj = _this.result.result[qIndex - 1];
            var resultValue = (resultObj.postfix == 'false') ? (resultObj.unit + '' + resultObj.value) : (resultObj.value + '' + resultObj.unit);
            return resultValue || match;
        });
        this.ele.innerHTML = dataText;
    };
    __decorate([
        core_1.Input('result'), 
        __metadata('design:type', Object)
    ], Result.prototype, "result", void 0);
    Result = __decorate([
        core_1.Directive({
            selector: '[result]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, JSONBuilder_service_1.JSONBuilder])
    ], Result);
    return Result;
}());
exports.Result = Result;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL3Jlc3VsdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixvQ0FBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQVMxRTtJQUtFLGdCQUFZLEVBQWMsRUFBVSxpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBTUQseUJBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFHdkMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBVTtZQUNuRSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQVU7WUFDbkUsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxXQUFXLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JJLE1BQU0sQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBRTlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUE3QkQ7UUFBQyxZQUFLLENBQUMsUUFBUSxDQUFDOzswQ0FBQTtJQU5sQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDOztjQUFBO0lBbUNGLGFBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLGNBQU0sU0FpQ2xCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbXBvbmVudHMvcmVzdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgbWF0aDogYW55O1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcmVzdWx0XScsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCdyZXN1bHQnKSByZXN1bHQ6IGFueTtcclxuICBwcml2YXRlIGVsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG4gICAgdGhpcy5lbGUgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gbmdEb0NoZWNrKCkge1xyXG4gIC8vICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gdGhpcy5mb3JtdWxhU2VydmljZS5mb3JtdWxhRnVuY3Rpb24odGhpcy5mb3JtdWxhSW5kZXgpO1xyXG4gIC8vIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgZGF0YVRleHQgPSB0aGlzLnJlc3VsdC5wcm9wcy50aXRsZTtcclxuICAgIC8vdGhpcy5mb3JtdWxhU2VydmljZS5mb3JtdWxhRnVuY3Rpb24odGhpcy5yZXN1bHQpO1xyXG4gICAgLyogcGFyc2UgUSB2YWx1ZXMgLyovXHJcbiAgICBkYXRhVGV4dCA9IHRoaXMucmVzdWx0LnByb3BzLnRpdGxlLnJlcGxhY2UoLyh7UVtcXGRdK30pL2csIChtYXRjaDogYW55KSA9PiB7XHJcbiAgICAgIGxldCBxSW5kZXggPSBOdW1iZXIobWF0Y2guc3BsaXQoL1t7UX1dLylbMl0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHQuc3RhdHNbcUluZGV4IC0gMV0udmFsdWUgfHwgbWF0Y2g7XHJcbiAgICB9KTtcclxuICAgIC8qIHBhcnNlIFIgdmFsdWVzICovXHJcbiAgICBkYXRhVGV4dCA9IHRoaXMucmVzdWx0LnByb3BzLnRpdGxlLnJlcGxhY2UoLyh7UltcXGRdK30pL2csIChtYXRjaDogYW55KSA9PiB7XHJcbiAgICAgIGxldCBxSW5kZXggPSBOdW1iZXIobWF0Y2guc3BsaXQoL1t7Un1dLylbMl0pO1xyXG4gICAgICBsZXQgcmVzdWx0T2JqID0gdGhpcy5yZXN1bHQucmVzdWx0W3FJbmRleCAtIDFdO1xyXG4gICAgICBsZXQgcmVzdWx0VmFsdWUgPSAocmVzdWx0T2JqLnBvc3RmaXggPT0gJ2ZhbHNlJykgPyAocmVzdWx0T2JqLnVuaXQgKyAnJyArIHJlc3VsdE9iai52YWx1ZSkgOiAocmVzdWx0T2JqLnZhbHVlICsgJycgKyByZXN1bHRPYmoudW5pdCk7XHJcbiAgICAgIHJldHVybiByZXN1bHRWYWx1ZSB8fCBtYXRjaDtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBkYXRhVGV4dDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
