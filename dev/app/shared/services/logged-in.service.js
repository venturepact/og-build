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
var LoggedInService = (function (_super) {
    __extends(LoggedInService, _super);
    function LoggedInService() {
        _super.call(this);
        this.loggedIn = { isLoggedIn: false };
        var storage = JSON.parse(this.readCookie('storage'));
        var url = window.location.hostname;
        var sub_domain = url.split('.')[0];
        if (this.readCookie('storage') !== null) {
            if (storage.user.role === 'ADMIN') {
                this.loggedIn.isLoggedIn = true;
            }
            else if (storage.companyList && storage.companyList.includes(sub_domain)) {
                this.loggedIn.isLoggedIn = true;
            }
        }
    }
    LoggedInService.prototype.login = function () {
        if (this.readCookie('storage'))
            this.loggedIn.isLoggedIn = true;
    };
    LoggedInService.prototype.logout = function () {
        this.loggedIn.isLoggedIn = false;
    };
    LoggedInService.prototype.checkSubDomain = function (url) {
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
    LoggedInService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggedInService);
    return LoggedInService;
}(index_1.BaseService));
exports.LoggedInService = LoggedInService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbG9nZ2VkLWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHNCQUE0QixTQUFTLENBQUMsQ0FBQTtBQUd0QztJQUFxQyxtQ0FBVztJQUc1QztRQUNJLGlCQUFPLENBQUM7UUFIWixhQUFRLEdBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFJdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDcEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNuRSxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEdBQVc7UUFFMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUc5QixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHOUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBR2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBdERIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUF1RGIsc0JBQUM7QUFBRCxDQXREQSxBQXNEQyxDQXREb0MsbUJBQVcsR0FzRC9DO0FBdERZLHVCQUFlLGtCQXNEM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2xvZ2dlZC1pbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dnZWRJbiB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9sb2dnZWQtaW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlZEluU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIGxvZ2dlZEluOiBMb2dnZWRJbiA9IHsgaXNMb2dnZWRJbjogZmFsc2UgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgICAgICBsZXQgc3ViX2RvbWFpbiA9IHVybC5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgIGlmKHRoaXMucmVhZENvb2tpZSgnc3RvcmFnZScpICE9PSBudWxsKXtcclxuICAgICAgICAgICAgaWYoc3RvcmFnZS51c2VyLnJvbGUgPT09ICdBRE1JTicpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbi5pc0xvZ2dlZEluID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHN0b3JhZ2UuY29tcGFueUxpc3QgJiYgc3RvcmFnZS5jb21wYW55TGlzdC5pbmNsdWRlcyhzdWJfZG9tYWluKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4uaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5yZWFkQ29va2llKCdzdG9yYWdlJykpIHRoaXMubG9nZ2VkSW4uaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW4uaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3ViRG9tYWluKHVybDogU3RyaW5nKSB7XHJcbiAgICAvLyB0cmltIHNwYWNlc1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL15cXHMrLywgJycpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xccyskLywgJycpO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYmFjayBzbGFzaCB0byBmb3J3YXJkIHNsYXNoXHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xyXG5cclxuICAgIC8vIHJlbW92ZSAnaHR0cDovLycsICdodHRwczovLycgb3IgJ2Z0cDovLydcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9eaHR0cFxcOlxcL1xcL3xeaHR0cHNcXDpcXC9cXC98XmZ0cFxcOlxcL1xcLy9pLCAnJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlICd3d3cuJyBpZiBleGlzdFxyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL153d3dcXC4vaSwgJycpO1xyXG4gICAgaWYgKHVybC5zcGxpdCgnLicpLmxlbmd0aCA9PT0gMyAmJiB1cmwuc3BsaXQoJy4nKVswXSA9PT0gJ2FwcCcpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyByZW1vdmUgcGF0aCBhZnRlciBkb21haW5cclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC8oLiopLywgJycpO1xyXG5cclxuICAgIC8vIHJlbW92ZSB0bGQnc1xyXG4gICAgaWYgKHVybC5tYXRjaCgvXFwuW2Etel17MiwzfVxcLlthLXpdezJ9JC9pKSkge1xyXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuW2Etel17MiwzfVxcLlthLXpdezJ9JC9pLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHVybC5tYXRjaCgvXFwuW2Etel17Miw1fSQvaSkpIHtcclxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLlthLXpdezIsNX0kL2ksICcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHVybC5tYXRjaCgvXFwuL2cpKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19
