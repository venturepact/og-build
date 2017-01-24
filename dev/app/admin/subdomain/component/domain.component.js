"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require('@angular/forms');
var env_config_1 = require('./../../../config/env.config');
var domains_1 = require('./../../../shared/models/domains');
var domains_service_1 = require('./../../../shared/services/domains.service');
var index_1 = require('./../../../shared/services/index');
var datatable_interface_1 = require('./../../../shared/interfaces/datatable.interface');
var DomainComponent = (function (_super) {
    __extends(DomainComponent, _super);
    function DomainComponent(fb, _domainService, _script) {
        _super.call(this);
        this.fb = fb;
        this._domainService = _domainService;
        this._script = _script;
        this.loading = false;
        this.subdomainExtension = '';
        this.Domains = [];
        this.error = false;
        this.errorMessage = '';
    }
    DomainComponent.prototype.ngOnInit = function () {
        console.log(this.category, "this is the category");
        this.SubDomainForm = this.fb.group({
            Subdomain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.subdomainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.error = false;
        this.errorMessage = '';
    };
    DomainComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('datatables')
            .then(function (data) {
            console.log('scripts loaded successfully');
            _this.getDomains();
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
    };
    DomainComponent.prototype.getDomains = function () {
        var _this = this;
        var self = this;
        var obj = {
            type: this.category,
            limit: this.current_limit,
            page: this.current_page - 1,
            searchKey: this.search
        };
        this.loading = true;
        var getDomains = self._domainService.getDomains(obj)
            .subscribe(function (success) {
            _this.loading = false;
            _this.Domains = [];
            _this.total_pages = Math.ceil(success.count / _this.current_limit);
            success.domains.forEach(function (domain) {
                _this.Domains.push(new domains_1.Domains(domain));
            });
        }, function (error) {
            getDomains.unsubscribe();
            _this.error = true;
            _this.errorMessage = error.error.err_message;
            _this.loading = false;
        });
    };
    DomainComponent.prototype.addSubDomain = function () {
        var _this = this;
        this.error = false;
        this.errorMessage = '';
        var self = this;
        var addSubDomain = self._domainService.addDomain(this.SubDomainForm.value.Subdomain, this.category)
            .subscribe(function (success) {
            _this.Domains.push(new domains_1.Domains(success));
            jQuery('#' + _this.category + 'SubDomainForm input').val('');
            jQuery('#' + _this.category + 'SubdomainDiv').addClass('is-empty');
        }, function (error) {
            console.log(error.error.code);
            addSubDomain.unsubscribe();
            _this.error = true;
            if (error.error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION')
                _this.errorMessage = "Domain already exist";
            else
                _this.errorMessage = error.error.err_message;
        });
    };
    DomainComponent.prototype.hideError = function () {
        this.error = false;
        this.errorMessage = '';
    };
    DomainComponent.prototype.deleteDomain = function (domain, i) {
        var _this = this;
        this.error = false;
        this.errorMessage = '';
        var self = this;
        var deleteDomain = self._domainService.deleteDomain(domain.id)
            .subscribe(function (success) {
            _this.Domains.splice(i, 1);
        }, function (error) {
            deleteDomain.unsubscribe();
            _this.error = true;
            _this.errorMessage = error.error.err_message;
        });
    };
    DomainComponent.prototype.paging = function (num) {
        _super.prototype.paging.call(this, num);
        this.getDomains();
    };
    DomainComponent.prototype.limitChange = function (event) {
        _super.prototype.limitChange.call(this, event);
        this.getDomains();
    };
    DomainComponent.prototype.previous = function () {
        _super.prototype.previous.call(this);
        this.getDomains();
    };
    DomainComponent.prototype.next = function () {
        _super.prototype.next.call(this);
        this.getDomains();
    };
    DomainComponent.prototype.searchData = function () {
        _super.prototype.searchData.call(this);
        this.getDomains();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DomainComponent.prototype, "category", void 0);
    DomainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'domain',
            templateUrl: './domain.component.html',
            styleUrls: ['domain.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [domains_service_1.DomainService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, domains_service_1.DomainService, index_1.Script])
    ], DomainComponent);
    return DomainComponent;
}(datatable_interface_1.Datatable));
exports.DomainComponent = DomainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9zdWJkb21haW4vY29tcG9uZW50L2RvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLHVCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUEyRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVGLDJCQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELHdCQUFzQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3pELGdDQUE0Qiw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ3pFLHNCQUFxQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hELG9DQUF3QixrREFBa0QsQ0FBQyxDQUFBO0FBWTNFO0lBQXFDLG1DQUFTO0lBUzdDLHlCQUFtQixFQUFjLEVBQ3pCLGNBQTRCLEVBQzNCLE9BQWU7UUFDYixpQkFBTyxDQUFDO1FBSEEsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBVnhCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBRWhDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQU92QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsa0JB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QkFBZSxrQkF3STNCLENBQUEiLCJmaWxlIjoiYXBwL2FkbWluL3N1YmRvbWFpbi9jb21wb25lbnQvZG9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsQWZ0ZXJWaWV3SW5pdCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7RG9tYWluc30gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2RvbWFpbnMnO1xyXG5pbXBvcnQge0RvbWFpblNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RvbWFpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7U2NyaXB0fSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7RGF0YXRhYmxlfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2RhdGF0YWJsZS5pbnRlcmZhY2UnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2RvbWFpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvbWFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2RvbWFpbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gIHByb3ZpZGVyczogW0RvbWFpblNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRG9tYWluQ29tcG9uZW50IGV4dGVuZHMgRGF0YXRhYmxlIGltcGxlbWVudHMgT25Jbml0ICwgQWZ0ZXJWaWV3SW5pdHtcclxuXHRsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0c3ViZG9tYWluRXh0ZW5zaW9uOiBzdHJpbmcgPSAnJztcclxuXHRTdWJEb21haW5Gb3JtOkZvcm1Hcm91cDtcclxuXHREb21haW5zOkRvbWFpbnNbXSA9IFtdO1xyXG5cdGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgY2F0ZWdvcnkgOiBzdHJpbmc7XHJcbiAgIFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBmYjpGb3JtQnVpbGRlcixcclxuXHRcdHB1YmxpYyBfZG9tYWluU2VydmljZTpEb21haW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfc2NyaXB0IDpTY3JpcHQpe1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3J5LFwidGhpcyBpcyB0aGUgY2F0ZWdvcnlcIik7XHJcblx0XHR0aGlzLlN1YkRvbWFpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuXHRcdFx0U3ViZG9tYWluOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN1YmRvbWFpbkV4dGVuc2lvbiA9ICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG5cdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHR9XHJcblxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQgICAgdGhpcy5fc2NyaXB0LmxvYWQoJ2RhdGF0YWJsZXMnKVxyXG5cdCAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0cyBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERvbWFpbnMoKTtcclxuXHQgICAgICAgIH0pXHJcblx0ICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG5cdCAgICAgICAgXHRjb25zb2xlLmxvZygnU2NyaXB0IG5vdCBsb2FkZWQnLCBlcnJvcik7XHJcblx0ICAgICAgICB9KTtcclxuICBcdH1cclxuXHJcbiAgICBnZXREb21haW5zKCl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgdHlwZSA6IHRoaXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGxpbWl0IDogdGhpcy5jdXJyZW50X2xpbWl0LFxyXG4gICAgICAgICAgICBwYWdlIDogdGhpcy5jdXJyZW50X3BhZ2UgLSAxLFxyXG5cdFx0XHRzZWFyY2hLZXkgOiB0aGlzLnNlYXJjaFxyXG4gICAgICAgIH07XHJcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0bGV0IGdldERvbWFpbnMgPSBzZWxmLl9kb21haW5TZXJ2aWNlLmdldERvbWFpbnMob2JqKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdCAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdCAgICAgICAgICB0aGlzLkRvbWFpbnMgPSBbXTtcclxuICAgICAgICAgICAgICB0aGlzLnRvdGFsX3BhZ2VzID0gTWF0aC5jZWlsKHN1Y2Nlc3MuY291bnQvdGhpcy5jdXJyZW50X2xpbWl0KTtcclxuXHQgICAgICAgICAgc3VjY2Vzcy5kb21haW5zLmZvckVhY2goKGRvbWFpbjphbnkpPT57XHJcblx0ICAgICAgICAgIFx0XHR0aGlzLkRvbWFpbnMucHVzaChuZXcgRG9tYWlucyhkb21haW4pKTtcclxuXHQgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgKGVycm9yOmFueSkgPT4ge1xyXG5cdFx0XHRcdGdldERvbWFpbnMudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICk7XHJcblx0fVxyXG5cclxuICAgIGFkZFN1YkRvbWFpbigpe1xyXG5cdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBhZGRTdWJEb21haW4gPSBzZWxmLl9kb21haW5TZXJ2aWNlLmFkZERvbWFpbih0aGlzLlN1YkRvbWFpbkZvcm0udmFsdWUuU3ViZG9tYWluLHRoaXMuY2F0ZWdvcnkpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0dGhpcy5Eb21haW5zLnB1c2gobmV3IERvbWFpbnMoc3VjY2VzcykpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjJyt0aGlzLmNhdGVnb3J5KydTdWJEb21haW5Gb3JtIGlucHV0JykudmFsKCcnKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnIycrdGhpcy5jYXRlZ29yeSsnU3ViZG9tYWluRGl2JykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IuZXJyb3IuY29kZSk7XHJcblx0XHRcdFx0XHRhZGRTdWJEb21haW4udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aWYoZXJyb3IuZXJyb3IuY29kZSA9PT0gJ0VfVU5JUVVFX1VOSURFTlRJRklFRF9WQUxJREFUSU9OJylcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBcIkRvbWFpbiBhbHJlYWR5IGV4aXN0XCI7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBoaWRlRXJyb3IoKXtcclxuXHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0fSAgXHJcblxyXG4gICAgZGVsZXRlRG9tYWluKGRvbWFpbjphbnksIGk6YW55KXtcdFxyXG5cdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBkZWxldGVEb21haW4gPSBzZWxmLl9kb21haW5TZXJ2aWNlLmRlbGV0ZURvbWFpbihkb21haW4uaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0XHR0aGlzLkRvbWFpbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdGRlbGV0ZURvbWFpbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcdFxyXG5cdH1cclxuXHJcbiAgICBwYWdpbmcobnVtIDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIucGFnaW5nKG51bSk7XHJcbiAgICAgICAgdGhpcy5nZXREb21haW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGltaXRDaGFuZ2UoZXZlbnQ6YW55KXtcclxuICAgICAgICBzdXBlci5saW1pdENoYW5nZShldmVudCk7XHJcbiAgICAgICAgdGhpcy5nZXREb21haW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKXtcclxuICAgICAgICBzdXBlci5wcmV2aW91cygpO1xyXG4gICAgICAgIHRoaXMuZ2V0RG9tYWlucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKXtcclxuICAgICAgICBzdXBlci5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5nZXREb21haW5zKCk7XHJcbiAgICB9XHJcblxyXG5cdHNlYXJjaERhdGEoKXtcclxuXHRcdHN1cGVyLnNlYXJjaERhdGEoKTtcclxuXHRcdHRoaXMuZ2V0RG9tYWlucygpO1xyXG5cdH1cclxuICBcclxuXHJcbn1cclxuXHJcbiJdfQ==
