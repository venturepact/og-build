"use strict";
var item_model_1 = require('./item.model');
var Section = (function () {
    function Section(title, defaultClass, description) {
        this._id = '';
        this.title = 'Title';
        this.description = '';
        this.showDesc = true;
        this.buttonTitle = 'Next';
        this.previousIcons = [];
        this.icon = '';
        this.showIcon = true;
        this.defaultClass = '';
        this.fullWidth = false;
        this.order = '';
        this.visible = true;
        this.type = '';
        this.items = [];
        this._id = 's_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        this.type = title;
        if (title === 'LeadForm' || title === 'LeadFormQ') {
            this.title = 'How can we get in touch?';
        }
        else {
            this.title = title;
        }
        this.defaultClass = defaultClass;
        this.description = description;
    }
    Section.prototype.addItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        for (var item in items) {
            items[item].order = this.items.length + 1;
            this.items.push(items[item]);
        }
    };
    Section.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Section.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var item in input[prop]) {
                    self.items.push(new item_model_1.Item().deserialize(input[prop][item]));
                }
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Section;
}());
exports.Section = Section;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9zZWN0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQkFBbUIsY0FBYyxDQUFDLENBQUE7QUFHbEM7SUFpQkMsaUJBQVksS0FBYyxFQUFHLFlBQXFCLEVBQUUsV0FBb0I7UUFoQnhFLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVUsTUFBTSxDQUFDO1FBQzVCLGtCQUFhLEdBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFLbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxVQUFVLElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLDBCQUFRLEdBQWY7UUFBZ0IsZUFBYzthQUFkLFdBQWMsQ0FBZCxzQkFBYyxDQUFkLElBQWM7WUFBZCw4QkFBYzs7UUFDN0IsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0YsQ0FBQztJQUNRLCtCQUFhLEdBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDSiw2QkFBVyxHQUFYLFVBQVksS0FBVTtRQUNyQixJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUEsQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztZQUNGLENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUM7UUFDRixDQUFDO1FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsY0FBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksZUFBTyxVQXVEbkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9tb2RlbHMvc2VjdGlvbi5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VyaWFsaXphYmxlfSBmcm9tICcuL3NlcmlhbGl6ZWFibGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtJdGVtfSBmcm9tICcuL2l0ZW0ubW9kZWwnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIGltcGxlbWVudHMgU2VyaWFsaXphYmxlPFNlY3Rpb24+IHtcclxuXHRfaWQ6IHN0cmluZyA9ICcnO1xyXG5cdHRpdGxlOiBzdHJpbmcgPSAnVGl0bGUnO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuXHRzaG93RGVzYzpib29sZWFuID0gdHJ1ZTtcclxuXHRidXR0b25UaXRsZTpzdHJpbmcgPSAnTmV4dCc7XHJcblx0cHJldmlvdXNJY29uczpzdHJpbmdbXSA9IFtdO1xyXG5cdGljb246c3RyaW5nID0gJyc7XHJcblx0c2hvd0ljb246Ym9vbGVhbiA9IHRydWU7XHJcblx0ZGVmYXVsdENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHRmdWxsV2lkdGg6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdG9yZGVyOiBzdHJpbmcgPSAnJztcclxuXHR2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHR0eXBlOiBzdHJpbmcgPSAnJztcclxuXHRpdGVtczogSXRlbVtdID0gW107XHJcblxyXG5cclxuXHRjb25zdHJ1Y3Rvcih0aXRsZT86IHN0cmluZyAsIGRlZmF1bHRDbGFzcz86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpIHtcclxuXHRcdC8vZ2VuZXJhdGUgdW5pcXVlIGlkIG9uIGNyZWF0aW9uXHJcblx0XHR0aGlzLl9pZCA9ICdzXycrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAwMCAtIDIgKyAxKSkgKyAyO1xyXG5cdFx0Ly9kbyByZXN0IG9mIHRoZSBzdHVmZlxyXG5cdFx0dGhpcy50eXBlID0gdGl0bGU7XHJcblx0XHRpZih0aXRsZSA9PT0gJ0xlYWRGb3JtJyB8fCB0aXRsZSA9PT0gJ0xlYWRGb3JtUScpIHtcclxuXHRcdFx0dGhpcy50aXRsZSA9ICdIb3cgY2FuIHdlIGdldCBpbiB0b3VjaD8nO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdFx0fVxyXG4gICAgXHRcclxuXHRcdHRoaXMuZGVmYXVsdENsYXNzID0gZGVmYXVsdENsYXNzO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvblx0PVx0ZGVzY3JpcHRpb247XHJcblx0fVxyXG5cdC8vYWRkIGl0ZW1zIHRvIHBhZ2VcclxuXHRwdWJsaWMgYWRkSXRlbXMoLi4uaXRlbXM6YW55W10pIHtcclxuXHRcdGZvcihsZXQgaXRlbSBpbiBpdGVtcykge1xyXG5cdFx0XHRpdGVtc1tpdGVtXS5vcmRlclx0PVx0dGhpcy5pdGVtcy5sZW5ndGgrMTtcclxuXHRcdFx0dGhpcy5pdGVtcy5wdXNoKGl0ZW1zW2l0ZW1dKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ICBwdWJsaWMgc2V0VmlzaWJpbGl0eSh2aXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICBcdHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcblx0ZGVzZXJpYWxpemUoaW5wdXQ6IGFueSk6IFNlY3Rpb24ge1xyXG5cdFx0bGV0IHNlbGY6IGFueSA9IHRoaXM7XHJcblx0XHRmb3IobGV0IHByb3AgaW4gaW5wdXQpIHtcclxuXHRcdFx0aWYodHlwZW9mIGlucHV0W3Byb3BdID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdGZvcihsZXQgaXRlbSBpbiBpbnB1dFtwcm9wXSkge1xyXG5cdFx0XHRcdFx0c2VsZi5pdGVtcy5wdXNoKG5ldyBJdGVtKCkuZGVzZXJpYWxpemUoaW5wdXRbcHJvcF1baXRlbV0pKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRzZWxmW3Byb3BdID0gaW5wdXRbcHJvcF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
