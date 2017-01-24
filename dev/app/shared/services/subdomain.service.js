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
var index_1 = require('./index');
var SubDomainService = (function (_super) {
    __extends(SubDomainService, _super);
    function SubDomainService(_companyService) {
        _super.call(this);
        this._companyService = _companyService;
        this.subDomain = {
            exists: false,
            is_sub_domain_url: false,
            sub_domain: '',
            company_id: '',
            user_id: '',
            name: ''
        };
        this.subDomain.exists = false;
        var url = window.location.hostname;
        this.subDomain.is_sub_domain_url = this.checkSubDomain(url);
        if (this.subDomain.is_sub_domain_url) {
            this.subDomain.sub_domain = url.split('.')[0];
            _companyService.isSubDomainExist(this.subDomain.sub_domain)
                .subscribe(function (result) {
                localStorage.setItem('company', result._id);
            }, function (err) { });
        }
    }
    SubDomainService.prototype.subDomainExists = function () {
        var _this = this;
        if (this.subDomain.is_sub_domain_url) {
            var self_1 = this;
            this._companyService.isSubDomainExist(this.subDomain.sub_domain)
                .subscribe(function (result) {
                self_1.subDomain.exists = true;
                self_1.subDomain.company_id = result._id;
                self_1.subDomain.name = result.name;
                localStorage.setItem('lodashAuthToken', JSON.stringify(result));
                localStorage.setItem('company', result._id);
                if (self_1.readCookie('storage')) {
                    var storage = JSON.parse(self_1.readCookie('storage'));
                    self_1.subDomain.user_id = storage.user._id;
                }
            }, function (err) {
                if (err.error.code === 'E_COMPANY_NOT_FOUND') {
                    var url = window.location.href;
                    var routeObject = url.split('/');
                    if (routeObject[3] !== 'Error')
                        window.location.href = window.location.origin + '/Error';
                    if (_this.readCookie('storage')) {
                        var storage = JSON.parse(_this.readCookie('storage'));
                        if (storage.company.sub_domain === _this.subDomain.sub_domain)
                            _this.createCookie('storage', '', -1);
                    }
                }
            });
        }
    };
    SubDomainService.prototype.checkCompanyMembership = function () {
        this._companyService.isCompanyMember(this.subDomain.company_id, this.subDomain.user_id)
            .subscribe(function (data) { }, function (response) {
            localStorage.setItem('hasAccess', 'false');
        });
    };
    SubDomainService.prototype.checkSubDomain = function (url) {
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        url = url.replace(/\\/g, '/');
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        url = url.replace(/\/(.*)/, '');
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    SubDomainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.CompanyService])
    ], SubDomainService);
    return SubDomainService;
}(index_1.BaseService));
exports.SubDomainService = SubDomainService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvc3ViZG9tYWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHNCQUEyQyxTQUFTLENBQUMsQ0FBQTtBQUdyRDtJQUFzQyxvQ0FBVztJQVcvQywwQkFDVSxlQUErQjtRQUV2QyxpQkFBTyxDQUFDO1FBRkEsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBVnpDLGNBQVMsR0FBYztZQUNyQixNQUFNLEVBQUUsS0FBSztZQUNiLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFDLEVBQUU7U0FDUixDQUFDO1FBTUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztpQkFDdEQsU0FBUyxDQUNWLFVBQUMsTUFBVztnQkFDVixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUNELFVBQUMsR0FBRyxJQUFNLENBQUMsQ0FDVixDQUFD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Q0EzR0EsQUEyR0MsQ0EzR3FDLG1CQUFXLEdBMkdoRDtBQTNHWSx3QkFBZ0IsbUJBMkc1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvc3ViZG9tYWluLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YkRvbWFpbiB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9zdWJkb21haW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UsIEJhc2VTZXJ2aWNlfSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1YkRvbWFpblNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZXtcclxuICBDcm9zc0RvbWFpblN0b3JhZ2U6IFN0cmluZztcclxuICBzdWJEb21haW46IFN1YkRvbWFpbiA9IHtcclxuICAgIGV4aXN0czogZmFsc2UsXHJcbiAgICBpc19zdWJfZG9tYWluX3VybDogZmFsc2UsXHJcbiAgICBzdWJfZG9tYWluOiAnJyxcclxuICAgIGNvbXBhbnlfaWQ6ICcnLFxyXG4gICAgdXNlcl9pZDogJycsXHJcbiAgICBuYW1lOicnXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN1YkRvbWFpbi5leGlzdHMgPSBmYWxzZTtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB0aGlzLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCA9IHRoaXMuY2hlY2tTdWJEb21haW4odXJsKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgdGhpcy5zdWJEb21haW4uc3ViX2RvbWFpbiA9IHVybC5zcGxpdCgnLicpWzBdO1xyXG4gICAgX2NvbXBhbnlTZXJ2aWNlLmlzU3ViRG9tYWluRXhpc3QodGhpcy5zdWJEb21haW4uc3ViX2RvbWFpbilcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBhbnknLCByZXN1bHQuX2lkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHt9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzdWJEb21haW5FeGlzdHMoKSB7XHJcbiAgICBpZiAodGhpcy5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICB0aGlzLl9jb21wYW55U2VydmljZS5pc1N1YkRvbWFpbkV4aXN0KHRoaXMuc3ViRG9tYWluLnN1Yl9kb21haW4pXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgIHNlbGYuc3ViRG9tYWluLmV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICBzZWxmLnN1YkRvbWFpbi5jb21wYW55X2lkID0gcmVzdWx0Ll9pZDtcclxuICAgICAgICAgIHNlbGYuc3ViRG9tYWluLm5hbWUgPSByZXN1bHQubmFtZTtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9kYXNoQXV0aFRva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFueScsIHJlc3VsdC5faWQpO1xyXG4gICAgICAgICAgaWYgKHNlbGYucmVhZENvb2tpZSgnc3RvcmFnZScpKSB7XHJcbiAgICAgICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShzZWxmLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgIHNlbGYuc3ViRG9tYWluLnVzZXJfaWQgPSBzdG9yYWdlLnVzZXIuX2lkO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNoZWNrQ29tcGFueU1lbWJlcnNoaXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgIGlmIChlcnIuZXJyb3IuY29kZSA9PT0gJ0VfQ09NUEFOWV9OT1RfRk9VTkQnKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgbGV0IHJvdXRlT2JqZWN0ID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGlmKHJvdXRlT2JqZWN0WzNdICE9PSAnRXJyb3InKVxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbisnL0Vycm9yJztcclxuICAgICAgICAgICAgaWYodGhpcy5yZWFkQ29va2llKCdzdG9yYWdlJykpe1xyXG4gICAgICAgICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgICAgaWYoc3RvcmFnZS5jb21wYW55LnN1Yl9kb21haW4gPT09IHRoaXMuc3ViRG9tYWluLnN1Yl9kb21haW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsJycsLTEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb21wYW55TWVtYmVyc2hpcCgpe1xyXG4gICAgdGhpcy5fY29tcGFueVNlcnZpY2UuaXNDb21wYW55TWVtYmVyKHRoaXMuc3ViRG9tYWluLmNvbXBhbnlfaWQsIHRoaXMuc3ViRG9tYWluLnVzZXJfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge30sXHJcbiAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhc0FjY2VzcycsJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdWJEb21haW4odXJsOiBTdHJpbmcpIHtcclxuICAgIC8vIHRyaW0gc3BhY2VzXHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXlxccysvLCAnJyk7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFxzKyQvLCAnJyk7XHJcblxyXG4gICAgLy8gY29udmVydCBiYWNrIHNsYXNoIHRvIGZvcndhcmQgc2xhc2hcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlICdodHRwOi8vJywgJ2h0dHBzOi8vJyBvciAnZnRwOi8vJ1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwXFw6XFwvXFwvfF5odHRwc1xcOlxcL1xcL3xeZnRwXFw6XFwvXFwvL2ksICcnKTtcclxuXHJcbiAgICAvLyByZW1vdmUgJ3d3dy4nIGlmIGV4aXN0XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXnd3d1xcLi9pLCAnJyk7XHJcbiAgICBpZiAodXJsLnNwbGl0KCcuJykubGVuZ3RoID09PSAzICYmIHVybC5zcGxpdCgnLicpWzBdID09PSAnYXBwJylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIHJlbW92ZSBwYXRoIGFmdGVyIGRvbWFpblxyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLyguKikvLCAnJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIHRsZCdzXHJcbiAgICBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDN9XFwuW2Etel17Mn0kL2kpKSB7XHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC5bYS16XXsyLDN9XFwuW2Etel17Mn0kL2ksICcnKTtcclxuICAgIH0gZWxzZSBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDV9JC9pKSkge1xyXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuW2Etel17Miw1fSQvaSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodXJsLm1hdGNoKC9cXC4vZykpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
