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
var router_1 = require('@angular/router');
var index_1 = require('../../shared/services/index');
var date_range_picker_component_1 = require('../../site/components/+analytics/components/date_range_picker/date_range_picker.component');
var BasicComponent = (function () {
    function BasicComponent(_adminService, script) {
        this._adminService = _adminService;
        this.script = script;
        this.postData = {
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().add(1, 'day').format('YYYY-MM-DD')
        };
        this.app_count = 0;
        this.user_count = 0;
        this.company_count = 0;
        this.scriploaded = false;
        this.graphLoader = false;
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.script.load('morrisCharts', 'daterangepicker', 'moment')
            .then(function (data) {
            _this.scriploaded = true;
            _this.initializeGraph();
            _this.getGraphData();
        })
            .catch(function (error) {
            console.log('script load error', error);
        });
    };
    BasicComponent.prototype.initializeGraph = function () {
        this.overviewChart = Morris.Line({
            element: 'area-example',
            data: [{ y: '0', a: 0, b: 0, c: 0 }],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Calc Created', 'Users Created', 'Company Created'],
            fillOpacity: 0.1,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
            pointFillColors: ['#fb545b'],
            pointStrokeColors: ['#269fd8'],
            lineColors: ['#fb545b', '#269fd8', ' #2eb82e'],
        });
    };
    BasicComponent.prototype.getGraphData = function () {
        var _this = this;
        this.graphLoader = true;
        this._adminService.getBasicGraph(this.postData).subscribe(function (result) {
            console.log("graph data", result);
            _this.overviewChart.setData(result.graph);
            _this.data = result;
            _this.app_count = result.app;
            _this.user_count = result.user;
            _this.company_count = result.company;
            _this.graphLoader = false;
        }, function (error) {
            console.log("error in graph data service", error);
        });
    };
    BasicComponent.prototype.onDateSelect = function (date) {
        this.start_date = date.start_date;
        this.end_date = date.end_date;
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        this.getGraphData();
    };
    BasicComponent.prototype.mouseEnter = function (line, color) {
        jQuery('#area-example').empty();
        var mychart = Morris.Line({
            element: 'area-example',
            data: [{ y: '0', a: 0, b: 0, c: 0 }],
            xkey: 'y',
            ykeys: [line],
            labels: ['Calc Created', 'Users Created', 'Company Created'],
            fillOpacity: 0.1,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
            pointFillColors: ['#fb545b'],
            pointStrokeColors: ['#269fd8'],
            lineColors: [color],
        });
        mychart.setData(this.data.graph);
    };
    BasicComponent.prototype.mouseLeave = function (line) {
        jQuery('#area-example').empty();
        this.overviewChart = Morris.Line({
            element: 'area-example',
            data: [{ y: '0', a: 0, b: 0, c: 0 }],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Calc Created', 'Users Created', 'Company Created'],
            fillOpacity: 0.1,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
            pointFillColors: ['#fb545b'],
            pointStrokeColors: ['#269fd8'],
            lineColors: ['#fb545b', '#269fd8', ' #2eb82e'],
        });
        this.overviewChart.setData(this.data.graph);
    };
    BasicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-basic-detail',
            templateUrl: 'basic.component.html',
            styleUrls: ['basic.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, date_range_picker_component_1.DateRangePickerComponent],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [index_1.AdminService]
        }), 
        __metadata('design:paramtypes', [index_1.AdminService, index_1.Script])
    ], BasicComponent);
    return BasicComponent;
}());
exports.BasicComponent = BasicComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9iYXNpYy9iYXNpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRSxlQUFlLENBQUMsQ0FBQTtBQUNwRix1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBcUMsNkJBQTZCLENBQUMsQ0FBQTtBQUNuRSw0Q0FBeUMsMkZBQTJGLENBQUMsQ0FBQTtBQWVySTtJQWNFLHdCQUFvQixhQUEyQixFQUFVLE1BQWM7UUFBbkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHZFLGFBQVEsR0FBUTtZQUNkLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUQsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUN0RCxDQUFDO1FBQ0YsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUN2QixlQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVksQ0FBQyxDQUFDO1FBRTNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBSTdCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO2FB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QUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBNUhIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsc0RBQXdCLENBQUM7WUFDekQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQVksQ0FBQztTQUMxQixDQUFDOztzQkFBQTtJQXlIRixxQkFBQztBQUFELENBdkhBLEFBdUhDLElBQUE7QUF2SFksc0JBQWMsaUJBdUgxQixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9iYXNpYy9iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBZG1pblNlcnZpY2UsIFNjcmlwdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NpdGUvY29tcG9uZW50cy8rYW5hbHl0aWNzL2NvbXBvbmVudHMvZGF0ZV9yYW5nZV9waWNrZXIvZGF0ZV9yYW5nZV9waWNrZXIuY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6IGFueTtcclxuZGVjbGFyZSB2YXIgTW9ycmlzOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1iYXNpYy1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYmFzaWMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydiYXNpYy5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnRdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbQWRtaW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBzdGFydF9kYXRlOiBTdHJpbmc7XHJcbiAgZW5kX2RhdGU6IFN0cmluZztcclxuICBwb3N0RGF0YTogYW55ID0ge1xyXG4gICAgc3RhcnRfZGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMTAsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICBlbmRfZGF0ZTogbW9tZW50KCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gIH07XHJcbiAgYXBwX2NvdW50IDogbnVtYmVyID0gMDtcclxuICB1c2VyX2NvdW50IDogbnVtYmVyID0gMDtcclxuICBjb21wYW55X2NvdW50IDogbnVtYmVyID0gMDtcclxuICBvdmVydmlld0NoYXJ0OiBhbnk7XHJcbiAgc2NyaXBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBncmFwaExvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRhdGEgOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UsIHByaXZhdGUgc2NyaXB0OiBTY3JpcHQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNjcmlwdC5sb2FkKCdtb3JyaXNDaGFydHMnLCAnZGF0ZXJhbmdlcGlja2VyJywgJ21vbWVudCcpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY3JpcGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplR3JhcGgoKTtcclxuICAgICAgICB0aGlzLmdldEdyYXBoRGF0YSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdCBsb2FkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplR3JhcGgoKSB7XHJcbiAgICB0aGlzLm92ZXJ2aWV3Q2hhcnQgPSBNb3JyaXMuTGluZSh7XHJcbiAgICAgIGVsZW1lbnQ6ICdhcmVhLWV4YW1wbGUnLFxyXG4gICAgICBkYXRhOiBbeyB5OiAnMCcsIGE6IDAsIGI6IDAsIGM6IDAgfV0sXHJcbiAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgeWtleXM6IFsnYScsICdiJywgJ2MnXSxcclxuICAgICAgbGFiZWxzOiBbJ0NhbGMgQ3JlYXRlZCcsICdVc2VycyBDcmVhdGVkJywgJ0NvbXBhbnkgQ3JlYXRlZCddLFxyXG4gICAgICBmaWxsT3BhY2l0eTogMC4xLFxyXG4gICAgICBoaWRlSG92ZXI6ICdhdXRvJyxcclxuICAgICAgYmVoYXZlTGlrZUxpbmU6IHRydWUsXHJcbiAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgcG9pbnRGaWxsQ29sb3JzOiBbJyNmYjU0NWInXSxcclxuICAgICAgcG9pbnRTdHJva2VDb2xvcnM6IFsnIzI2OWZkOCddLFxyXG4gICAgICBsaW5lQ29sb3JzOiBbJyNmYjU0NWInLCAnIzI2OWZkOCcsJyAjMmViODJlJ10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBnZXRHcmFwaERhdGEoKSB7XHJcbiAgICB0aGlzLmdyYXBoTG9hZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2FkbWluU2VydmljZS5nZXRCYXNpY0dyYXBoKHRoaXMucG9zdERhdGEpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ3JhcGggZGF0YVwiLCByZXN1bHQpO1xyXG4gICAgICB0aGlzLm92ZXJ2aWV3Q2hhcnQuc2V0RGF0YShyZXN1bHQuZ3JhcGgpOyBcclxuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xyXG4gICAgICB0aGlzLmFwcF9jb3VudCA9IHJlc3VsdC5hcHA7XHJcbiAgICAgIHRoaXMudXNlcl9jb3VudCA9IHJlc3VsdC51c2VyO1xyXG4gICAgICB0aGlzLmNvbXBhbnlfY291bnQgPSByZXN1bHQuY29tcGFueTtcclxuICAgICAgdGhpcy5ncmFwaExvYWRlciA9IGZhbHNlO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZ3JhcGggZGF0YSBzZXJ2aWNlXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlU2VsZWN0KGRhdGU6IGFueSkge1xyXG4gICAgdGhpcy5zdGFydF9kYXRlID0gZGF0ZS5zdGFydF9kYXRlO1xyXG4gICAgdGhpcy5lbmRfZGF0ZSA9IGRhdGUuZW5kX2RhdGU7XHJcbiAgICB0aGlzLnBvc3REYXRhLnN0YXJ0X2RhdGUgPSBkYXRlLnN0YXJ0X2RhdGU7XHJcbiAgICB0aGlzLnBvc3REYXRhLmVuZF9kYXRlID0gZGF0ZS5lbmRfZGF0ZTtcclxuICAgIC8vcmVmcmVzaCBzdGF0c1xyXG4gICAgdGhpcy5nZXRHcmFwaERhdGEoKTtcclxuICB9XHJcblxyXG4gIG1vdXNlRW50ZXIobGluZSA6IHN0cmluZywgY29sb3IgOiBzdHJpbmcpe1xyXG4gICAgalF1ZXJ5KCcjYXJlYS1leGFtcGxlJykuZW1wdHkoKTtcclxuICAgIGxldCBteWNoYXJ0OmFueSA9IE1vcnJpcy5MaW5lKHtcclxuICAgICAgZWxlbWVudDogJ2FyZWEtZXhhbXBsZScsXHJcbiAgICAgIGRhdGE6IFt7IHk6ICcwJywgYTogMCwgYjogMCwgYzogMCB9XSxcclxuICAgICAgeGtleTogJ3knLFxyXG4gICAgICB5a2V5czogW2xpbmVdLFxyXG4gICAgICBsYWJlbHM6IFsnQ2FsYyBDcmVhdGVkJywgJ1VzZXJzIENyZWF0ZWQnLCAnQ29tcGFueSBDcmVhdGVkJ10sXHJcbiAgICAgIGZpbGxPcGFjaXR5OiAwLjEsXHJcbiAgICAgIGhpZGVIb3ZlcjogJ2F1dG8nLFxyXG4gICAgICBiZWhhdmVMaWtlTGluZTogdHJ1ZSxcclxuICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgICBwb2ludEZpbGxDb2xvcnM6IFsnI2ZiNTQ1YiddLFxyXG4gICAgICBwb2ludFN0cm9rZUNvbG9yczogWycjMjY5ZmQ4J10sXHJcbiAgICAgIGxpbmVDb2xvcnM6IFtjb2xvcl0sXHJcbiAgICB9KTtcclxuICAgIG15Y2hhcnQuc2V0RGF0YSh0aGlzLmRhdGEuZ3JhcGgpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VMZWF2ZShsaW5lIDogc3RyaW5nKXtcclxuICAgIGpRdWVyeSgnI2FyZWEtZXhhbXBsZScpLmVtcHR5KCk7XHJcbiAgICAgdGhpcy5vdmVydmlld0NoYXJ0ID0gTW9ycmlzLkxpbmUoe1xyXG4gICAgICBlbGVtZW50OiAnYXJlYS1leGFtcGxlJyxcclxuICAgICAgZGF0YTogW3sgeTogJzAnLCBhOiAwLCBiOiAwLCBjOiAwIH1dLFxyXG4gICAgICB4a2V5OiAneScsXHJcbiAgICAgIHlrZXlzOiBbJ2EnLCAnYicsICdjJ10sXHJcbiAgICAgIGxhYmVsczogWydDYWxjIENyZWF0ZWQnLCAnVXNlcnMgQ3JlYXRlZCcsICdDb21wYW55IENyZWF0ZWQnXSxcclxuICAgICAgZmlsbE9wYWNpdHk6IDAuMSxcclxuICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXHJcbiAgICAgIGJlaGF2ZUxpa2VMaW5lOiB0cnVlLFxyXG4gICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgIHBvaW50RmlsbENvbG9yczogWycjZmI1NDViJ10sXHJcbiAgICAgIHBvaW50U3Ryb2tlQ29sb3JzOiBbJyMyNjlmZDgnXSxcclxuICAgICAgbGluZUNvbG9yczogWycjZmI1NDViJywgJyMyNjlmZDgnLCcgIzJlYjgyZSddLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm92ZXJ2aWV3Q2hhcnQuc2V0RGF0YSh0aGlzLmRhdGEuZ3JhcGgpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59Il19
