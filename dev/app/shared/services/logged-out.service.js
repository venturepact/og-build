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
var LoggedOutService = (function () {
    function LoggedOutService() {
        this.is_sub_domain_url = false;
    }
    LoggedOutService.prototype.checkSubDomain = function (url) {
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
    LoggedOutService.prototype.logout = function () {
        this.is_sub_domain_url = this.checkSubDomain(window.location.hostname);
        localStorage.removeItem('storage');
        localStorage.removeItem('company');
        window.location.reload();
    };
    LoggedOutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggedOutService);
    return LoggedOutService;
}());
exports.LoggedOutService = LoggedOutService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbG9nZ2VkLW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFJM0M7SUFBQTtRQUNZLHNCQUFpQixHQUFXLEtBQUssQ0FBQztJQXFDOUMsQ0FBQztJQXBDRyx5Q0FBYyxHQUFkLFVBQWUsR0FBVztRQUV0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztRQUc3QixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUc5RCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFHakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXZDTDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBd0NiLHVCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSx3QkFBZ0IsbUJBc0M1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvbG9nZ2VkLW91dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlZE91dFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBpc19zdWJfZG9tYWluX3VybCA6Qm9vbGVhbiA9ZmFsc2U7XHJcbiAgICBjaGVja1N1YkRvbWFpbih1cmw6IFN0cmluZykge1xyXG4gICAgICAgIC8vIHRyaW0gc3BhY2VzXHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL15cXHMrLywgJycpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXHMrJC8sICcnKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCBiYWNrIHNsYXNoIHRvIGZvcndhcmQgc2xhc2hcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFxcXC9nLCcvJyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSAnaHR0cDovLycsICdodHRwczovLycgb3IgJ2Z0cDovLydcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBcXDpcXC9cXC98Xmh0dHBzXFw6XFwvXFwvfF5mdHBcXDpcXC9cXC8vaSwgJycpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgJ3d3dy4nIGlmIGV4aXN0XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL153d3dcXC4vaSwgJycpO1xyXG5cclxuICAgICAgICBpZih1cmwuc3BsaXQoJy4nKS5sZW5ndGggPT09IDMgJiYgdXJsLnNwbGl0KCcuJylbMF0gPT09ICdhcHAnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBwYXRoIGFmdGVyIGRvbWFpblxyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC8oLiopLywgJycpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGxkJ3NcclxuICAgICAgICBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDN9XFwuW2Etel17Mn0kL2kpKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLlthLXpdezIsM31cXC5bYS16XXsyfSQvaSwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDV9JC9pKSkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC5bYS16XXsyLDV9JC9pLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHVybC5tYXRjaCgvXFwuL2cpKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc19zdWJfZG9tYWluX3VybCA9IHRoaXMuY2hlY2tTdWJEb21haW4od2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmFnZScpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb21wYW55Jyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
