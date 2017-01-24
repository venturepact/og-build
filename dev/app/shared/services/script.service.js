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
var script_store_1 = require('./script.store');
var Script = (function () {
    function Script() {
        var _this = this;
        this.scripts = {};
        script_store_1.ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    Script.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i - 0] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    Script.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    Script = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Script);
    return Script;
}());
exports.Script = Script;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvc2NyaXB0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUs3QztJQXlDSTtRQXpDSixpQkFpREM7UUFoRFcsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQXlDdEIsMEJBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFXO1lBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFDO2dCQUN0QixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7YUFDbEIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdDRCxxQkFBSSxHQUFKO1FBQUEsaUJBSUM7UUFKSSxpQkFBb0I7YUFBcEIsV0FBb0IsQ0FBcEIsc0JBQW9CLENBQXBCLElBQW9CO1lBQXBCLGdDQUFvQjs7UUFDckIsSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUcsT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsSUFBWTtRQUF2QixpQkE2QkM7UUE1QkUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFFL0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBRUEsSUFBSSxRQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsUUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEMsUUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsRUFBRSxDQUFBLENBQUMsUUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLFFBQU0sQ0FBQyxrQkFBa0IsR0FBRzt3QkFDeEIsRUFBRSxDQUFDLENBQUUsUUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksUUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUN2RSxRQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDOzRCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ2pDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQzt3QkFDekQsQ0FBQztvQkFDTCxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixRQUFNLENBQUMsTUFBTSxHQUFHO3dCQUNaLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxRQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDO2dCQUN2RixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQU0sQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUF2Q0w7UUFBQyxpQkFBVSxFQUFFOztjQUFBO0lBa0RiLGFBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLGNBQU0sU0FpRGxCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2NyaXB0U3RvcmUgfSBmcm9tICcuL3NjcmlwdC5zdG9yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBkb2N1bWVudDogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NyaXB0IHtcclxuICAgIHByaXZhdGUgc2NyaXB0czogYW55ID0ge307XHJcblxyXG4gICAgbG9hZCguLi5zY3JpcHRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHZhciBwcm9taXNlczogYW55W10gPSBbXTtcclxuICAgICAgICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCk9PnByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTY3JpcHQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgIC8vcmVzb2x2ZSBpZiBhbHJlYWR5IGxvYWRlZFxyXG4gICAgICAgICAgIGlmICh0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgIHJlc29sdmUoe3NjcmlwdDpuYW1lLCBsb2FkZWQ6dHJ1ZSwgc3RhdHVzOidBbHJlYWR5IExvYWRlZCd9KTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgLy9sb2FkIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLnNjcmlwdHNbbmFtZV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgaWYoc2NyaXB0LnJlYWR5U3RhdGUpIHsgIC8vSUVcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImxvYWRlZFwiIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tuYW1lXS5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7c2NyaXB0Om5hbWUsIGxvYWRlZDp0cnVlLCBzdGF0dXM6J0xvYWRlZCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgLy9PdGhlcnNcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7c2NyaXB0Om5hbWUsIGxvYWRlZDp0cnVlLCBzdGF0dXM6J0xvYWRlZCd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoZXJyb3I6IGFueSkgPT4gcmVzb2x2ZSh7c2NyaXB0Om5hbWUsIGxvYWRlZDpmYWxzZSwgc3RhdHVzOidMb2FkZWQnfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFNjcmlwdFN0b3JlLmZvckVhY2goKHNjcmlwdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tzY3JpcHQubmFtZV09e1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNyYzogc2NyaXB0LnNyY1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
