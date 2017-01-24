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
var email_validator_1 = require('./../../../shared/validators/email.validator');
var index_1 = require('./../../../shared/services/index');
var env_config_1 = require('./../../../config/env.config');
var datatable_interface_1 = require('../../../shared/interfaces/datatable.interface');
var AllUsersComponent = (function (_super) {
    __extends(AllUsersComponent, _super);
    function AllUsersComponent(userService, renderer, router, _script, fb) {
        _super.call(this);
        this.userService = userService;
        this.renderer = renderer;
        this.router = router;
        this._script = _script;
        this.fb = fb;
        this.data = [];
        this.extension = env_config_1.Config.APP_EXTENSION;
        this.error = false;
        this.errorMessage = '';
        this.loading = false;
        this.addUserForm = this.fb.group({
            username: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            useremail: ['', forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator.format])],
            userPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            companyName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            companySubDomain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])],
            chargebeeId: [''],
            chargebeeSubsId: [''],
            plan: ['']
        });
    }
    AllUsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('datatables')
            .then(function (data) {
            _this.getAllUsers();
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            this.error = false;
            this.errorMessage = '';
        });
    };
    AllUsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.loading = true;
        var obj = {
            limit: this.current_limit,
            page: this.current_page - 1,
            searchKey: this.search
        };
        this.userService.getAllUsers(obj)
            .subscribe(function (response) {
            _this.data = response.users;
            _this.total_pages = Math.ceil(response.count / _this.current_limit);
            _this.loading = false;
        }, function (response) {
            _this.loading = false;
            console.log('all users error', response);
        });
        jQuery(document).on('click', '.editUser', function () {
            var user_id = jQuery(this).data('user-id');
            window.location.href = window.location.origin + '/admin/user/' + user_id;
        });
    };
    AllUsersComponent.prototype.addUser = function () {
        var self = this;
        jQuery('#adminAddUser').text('Please wait..').attr('disabled', true);
        var addUser = this.userService.addUserFromAdmin(this.addUserForm.value)
            .subscribe(function (success) {
            console.log('adus', success);
            jQuery('#adminAddUser').text('Add').attr('disabled', false);
            self.error = false;
            self.errorMessage = '';
            jQuery('#add-user').modal('hide');
            var url = env_config_1.Config.APP_DOMAIN + '/admin/user/' + success.user._id;
            jQuery(location).attr('href', url);
            self.getAllUsers();
        }, function (error) {
            self.error = true;
            self.errorMessage = error.error.err_message;
            jQuery('#adminAddUser').text('Add').attr('disabled', false);
            addUser.unsubscribe();
        });
    };
    AllUsersComponent.prototype.navigateUser = function (id) {
        this.router.navigate(['/admin/user/' + id]);
    };
    AllUsersComponent.prototype.dateFormat = function (date) {
        var d = new Date(date);
        return d.toString().split('GMT')[0];
    };
    AllUsersComponent.prototype.paging = function (num) {
        _super.prototype.paging.call(this, num);
        this.getAllUsers();
    };
    AllUsersComponent.prototype.limitChange = function (event) {
        _super.prototype.limitChange.call(this, event);
        this.getAllUsers();
    };
    AllUsersComponent.prototype.previous = function () {
        _super.prototype.previous.call(this);
        this.getAllUsers();
    };
    AllUsersComponent.prototype.next = function () {
        _super.prototype.next.call(this);
        this.getAllUsers();
    };
    AllUsersComponent.prototype.searchData = function () {
        _super.prototype.searchData.call(this);
        this.getAllUsers();
    };
    AllUsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-all-users',
            templateUrl: 'all-users.component.html',
            styleUrls: ['all-users.component.css', './../../ionicons.min.css'],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.UserService, core_1.Renderer, router_1.Router, index_1.Script, forms_1.FormBuilder])
    ], AllUsersComponent);
    return AllUsersComponent;
}(datatable_interface_1.Datatable));
exports.AllUsersComponent = AllUsersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi91c2Vycy9hbGwtdXNlcnMvYWxsLXVzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUQsZUFBZSxDQUFDLENBQUE7QUFDbkUsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsc0JBQTZFLGdCQUFnQixDQUFDLENBQUE7QUFDOUYsZ0NBQStCLDhDQUE4QyxDQUFDLENBQUE7QUFDOUUsc0JBQW9DLGtDQUFrQyxDQUFDLENBQUE7QUFDdkUsMkJBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsb0NBQTBCLGdEQUFnRCxDQUFDLENBQUE7QUFVM0U7SUFBdUMscUNBQVM7SUFPOUMsMkJBQ1UsV0FBd0IsRUFDeEIsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLE9BQWUsRUFDaEIsRUFBZTtRQUV0QixpQkFBTyxDQUFDO1FBTkEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNoQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBWHhCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFXLG1CQUFNLENBQUMsYUFBYSxDQUFDO1FBRXpDLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUs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QUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLDBCQUEwQixDQUFDO1lBQ2xFLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUF3QixDQUFDO1NBQzFELENBQUM7O3lCQUFBO0lBZ0lGLHdCQUFDO0FBQUQsQ0E5SEEsQUE4SEMsQ0E5SHNDLCtCQUFTLEdBOEgvQztBQTlIWSx5QkFBaUIsb0JBOEg3QixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi91c2Vycy9hbGwtdXNlcnMvYWxsLXVzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBTY3JpcHQgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9kYXRhdGFibGUuaW50ZXJmYWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1hbGwtdXNlcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWxsLXVzZXJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MnLCAnLi8uLi8uLi9pb25pY29ucy5taW4uY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxsVXNlcnNDb21wb25lbnQgZXh0ZW5kcyBEYXRhdGFibGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBkYXRhOiBPYmplY3QgPSBbXTtcclxuICBleHRlbnNpb246IHN0cmluZyA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gIGFkZFVzZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHQsXHJcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hZGRVc2VyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG4gICAgICB1c2VyZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5mb3JtYXRdKV0sXHJcbiAgICAgIHVzZXJQYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXSldLFxyXG4gICAgICBjb21wYW55TmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG4gICAgICBjb21wYW55U3ViRG9tYWluOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksIFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXSxcclxuICAgICAgY2hhcmdlYmVlSWQ6IFsnJ10sXHJcbiAgICAgIGNoYXJnZWJlZVN1YnNJZDogWycnXSxcclxuICAgICAgcGxhbjogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9zY3JpcHQubG9hZCgnZGF0YXRhYmxlcycpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxVc2VycygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdCBub3QgbG9hZGVkJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy5tb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEFsbFVzZXJzKCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxldCBvYmogPSB7XHJcbiAgICAgIGxpbWl0OiB0aGlzLmN1cnJlbnRfbGltaXQsXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlIC0gMSxcclxuICAgICAgc2VhcmNoS2V5OiB0aGlzLnNlYXJjaFxyXG4gICAgfTtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0QWxsVXNlcnMob2JqKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLnVzZXJzO1xyXG4gICAgICAgIHRoaXMudG90YWxfcGFnZXMgPSBNYXRoLmNlaWwocmVzcG9uc2UuY291bnQgLyB0aGlzLmN1cnJlbnRfbGltaXQpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgdXNlcnMgZXJyb3InLCByZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGpRdWVyeShkb2N1bWVudCkub24oJ2NsaWNrJywgJy5lZGl0VXNlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHVzZXJfaWQgPSBqUXVlcnkodGhpcykuZGF0YSgndXNlci1pZCcpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FkbWluL3VzZXIvJyArIHVzZXJfaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkVXNlcigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGpRdWVyeSgnI2FkbWluQWRkVXNlcicpLnRleHQoJ1BsZWFzZSB3YWl0Li4nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgbGV0IGFkZFVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmFkZFVzZXJGcm9tQWRtaW4odGhpcy5hZGRVc2VyRm9ybS52YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZHVzJywgc3VjY2Vzcyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYWRtaW5BZGRVc2VyJykudGV4dCgnQWRkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZi5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgalF1ZXJ5KCcjYWRkLXVzZXInKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIGxldCB1cmwgPSBDb25maWcuQVBQX0RPTUFJTiArICcvYWRtaW4vdXNlci8nICsgc3VjY2Vzcy51c2VyLl9pZDtcclxuICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCB1cmwpO1xyXG4gICAgICAgIHNlbGYuZ2V0QWxsVXNlcnMoKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBzZWxmLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICBzZWxmLmVycm9yTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgIGpRdWVyeSgnI2FkbWluQWRkVXNlcicpLnRleHQoJ0FkZCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIGFkZFVzZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVVc2VyKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3VzZXIvJyArIGlkXSk7XHJcbiAgfVxyXG5cclxuICBkYXRlRm9ybWF0KGRhdGU6IGFueSkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkLnRvU3RyaW5nKCkuc3BsaXQoJ0dNVCcpWzBdO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5nKG51bTogbnVtYmVyKSB7XHJcbiAgICBzdXBlci5wYWdpbmcobnVtKTtcclxuICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcclxuICB9XHJcblxyXG4gIGxpbWl0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHN1cGVyLmxpbWl0Q2hhbmdlKGV2ZW50KTtcclxuICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgc3VwZXIucHJldmlvdXMoKTtcclxuICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICBzdXBlci5uZXh0KCk7XHJcbiAgICB0aGlzLmdldEFsbFVzZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hEYXRhKCkge1xyXG4gICAgc3VwZXIuc2VhcmNoRGF0YSgpO1xyXG4gICAgdGhpcy5nZXRBbGxVc2VycygpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
