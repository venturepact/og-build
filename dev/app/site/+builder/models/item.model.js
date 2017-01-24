"use strict";
var itemNames_store_1 = require('./itemNames.store');
var Item = (function () {
    function Item(type, title, helpText, placeholder, defaultClass, minVal, maxVal) {
        this._id = '';
        this.order = 0;
        this.type = '';
        this.name = '';
        this.visible = true;
        this.isIconPresent = false;
        this.defaultClass = '';
        this.formulaIndex = '';
        this.props = {
            title: '',
            postTitle: '',
            currentValue: '',
            currentLabel: '',
            defaultValue: '',
            helpText: '',
            minVal: 10,
            maxVal: 500,
            steps: 1,
            scale: false,
            unit: '',
            postfix: false
        };
        this.config = {
            type: 'text',
            showHelp: false,
            showControl: '',
            attr: {
                class: '',
                style: '',
                width: '',
                height: '',
            },
            validations: {
                required: {
                    status: false,
                    message: 'This question is mandatory'
                },
                minLength: {
                    status: false
                },
                maxLength: {
                    status: false
                }
            },
            maxSelections: '',
            direction: '',
            placeholder: 'Default Placeholder'
        };
        this.options = [
            {
                type: '',
                label: 'Option',
                value: 0,
                selected: false,
                defualtselected: false,
                icon: '',
                previousIcons: [],
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        this.fields = [
            {
                type: 'firstName',
                name: 'Your Name',
                placeholder: 'Name',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            },
            {
                type: 'email',
                name: 'Your Email',
                placeholder: 'Email Address',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        this._id = 'q_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        this.type = type;
        this.props.title = title || '';
        this.props.helpText = helpText || '';
        this.config.placeholder = placeholder || this.config.placeholder;
        this.defaultClass = defaultClass || this.defaultClass;
        this.order = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
        this.props.minVal = minVal || 10;
        this.props.maxVal = maxVal || 500;
        this.name = itemNames_store_1.ITEMS[type];
    }
    Item.prototype.setItemType = function (type) {
        this.type = type;
    };
    Item.prototype.setFormulaIndex = function (index) {
        this.formulaIndex = index;
    };
    Item.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Item.prototype.setTitle = function (title) {
        this.props.title = title;
    };
    Item.prototype.setPostTitle = function (postTitle) {
        this.props.postTitle = postTitle;
    };
    Item.prototype.setHelptext = function (helpText) {
        this.props.helpText = helpText;
    };
    Item.prototype.setPlaceHolder = function (placeholder) {
        this.config.placeholder = placeholder;
    };
    Item.prototype.setOptions = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i - 0] = arguments[_i];
        }
        for (var option in options)
            this.options.push(options[option]);
    };
    Item.prototype.getField = function () {
        return JSON.parse(JSON.stringify(this.fields[0]));
    };
    Item.prototype.getOption = function () {
        return this.options[0];
    };
    Item.prototype.addFieldToCheckbox = function (addOptions) {
        var defaultOption = this.options[0];
        this.options = [];
        for (var option in addOptions) {
            defaultOption.label = addOptions[option].label;
            defaultOption.icon = addOptions[option].icon;
            defaultOption.value = addOptions[option]['value'] ? addOptions[option].value : Number(option) + 1;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.addLinksToFooter = function (addLinks) {
        var defaultOption = this.options[0];
        this.options = [];
        for (var option in addLinks) {
            defaultOption.label = addLinks[option].label;
            defaultOption.value = addLinks[option].value;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                if (prop === 'options' && input[prop].length < 1) {
                    self[prop].splice(0, 1);
                }
                if (prop === 'fields' && input[prop].length < 2) {
                    self[prop].splice(0, 2);
                }
                jQuery.extend(true, self[prop], input[prop]);
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Item;
}());
exports.Item = Item;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUUxQztJQW1IRSxjQUFZLElBQWEsRUFBRSxLQUFjLEVBQUUsUUFBaUIsRUFBRSxXQUFvQixFQUFFLFlBQXFCLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFqSDNJLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixVQUFLLEdBQVE7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsV0FBTSxHQUFRO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLFdBQVcsRUFBRSxFQUFFO1lBQ2YsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBRVg7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFO29CQUNS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TixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FyTkEsQUFxTkMsSUFBQTtBQXJOWSxZQUFJLE9BcU5oQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9pdGVtLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi9zZXJpYWxpemVhYmxlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElURU1TIH0gZnJvbSAnLi9pdGVtTmFtZXMuc3RvcmUnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZXhwb3J0IGNsYXNzIEl0ZW0gaW1wbGVtZW50cyBTZXJpYWxpemFibGU8SXRlbT4ge1xyXG5cclxuICBfaWQ6IHN0cmluZyA9ICcnO1xyXG4gIG9yZGVyOiBudW1iZXIgPSAwO1xyXG4gIHR5cGU6IHN0cmluZyA9ICcnO1xyXG4gIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzSWNvblByZXNlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBkZWZhdWx0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIGZvcm11bGFJbmRleDogc3RyaW5nID0gJyc7XHJcbiAgcHJvcHM6IGFueSA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHBvc3RUaXRsZTogJycsXHJcbiAgICBjdXJyZW50VmFsdWU6ICcnLFxyXG4gICAgY3VycmVudExhYmVsOiAnJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogJycsXHJcbiAgICBoZWxwVGV4dDogJycsXHJcbiAgICBtaW5WYWw6IDEwLFxyXG4gICAgbWF4VmFsOiA1MDAsXHJcbiAgICBzdGVwczogMSxcclxuICAgIHNjYWxlOiBmYWxzZSxcclxuICAgIHVuaXQ6ICcnLFxyXG4gICAgcG9zdGZpeDogZmFsc2VcclxuICB9O1xyXG4gIGNvbmZpZzogYW55ID0ge1xyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgc2hvd0hlbHA6IGZhbHNlLFxyXG4gICAgc2hvd0NvbnRyb2w6ICcnLFxyXG4gICAgYXR0cjoge1xyXG4gICAgICBjbGFzczogJycsXHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgd2lkdGg6ICcnLFxyXG4gICAgICBoZWlnaHQ6ICcnLFxyXG5cclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uczoge1xyXG4gICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ1RoaXMgcXVlc3Rpb24gaXMgbWFuZGF0b3J5J1xyXG4gICAgICB9LFxyXG4gICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICBzdGF0dXM6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1heExlbmd0aDoge1xyXG4gICAgICAgIHN0YXR1czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1heFNlbGVjdGlvbnM6ICcnLFxyXG4gICAgZGlyZWN0aW9uOiAnJyxcclxuICAgIHBsYWNlaG9sZGVyOiAnRGVmYXVsdCBQbGFjZWhvbGRlcidcclxuICB9O1xyXG4gIG9wdGlvbnM6IGFueSA9IFtcclxuICAgIHtcclxuICAgICAgdHlwZTogJycsXHJcbiAgICAgIGxhYmVsOiAnT3B0aW9uJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgZGVmdWFsdHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgaWNvbjogJycsXHJcbiAgICAgIHByZXZpb3VzSWNvbnM6IFtdLFxyXG4gICAgICBhdHRyOiB7XHJcbiAgICAgICAgY2xhc3M6ICcnLFxyXG4gICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF07XHJcbiAgZmllbGRzOiBhbnkgPSBbXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdmaXJzdE5hbWUnLFxyXG4gICAgICBuYW1lOiAnWW91ciBOYW1lJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICB2YWxpZGF0aW9uczoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnRmllbGQgaXMgUmVxdWlyZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICAgIHN0YXR1czogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heExlbmd0aDoge1xyXG4gICAgICAgICAgc3RhdHVzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaWNvbjogJycsXHJcbiAgICAgIGF0dHI6IHtcclxuICAgICAgICBjbGFzczogJycsXHJcbiAgICAgICAgc3R5bGU6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICBuYW1lOiAnWW91ciBFbWFpbCcsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwgQWRkcmVzcycsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgdmFsaWRhdGlvbnM6IHtcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgbWVzc2FnZTogJ0ZpZWxkIGlzIFJlcXVpcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiB7XHJcbiAgICAgICAgICBzdGF0dXM6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhMZW5ndGg6IHtcclxuICAgICAgICAgIHN0YXR1czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGljb246ICcnLFxyXG4gICAgICBhdHRyOiB7XHJcbiAgICAgICAgY2xhc3M6ICcnLFxyXG4gICAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGU/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBoZWxwVGV4dD86IHN0cmluZywgcGxhY2Vob2xkZXI/OiBzdHJpbmcsIGRlZmF1bHRDbGFzcz86IHN0cmluZywgbWluVmFsPzogbnVtYmVyLCBtYXhWYWw/OiBudW1iZXIpIHtcclxuICAgIC8vZ2VuZXJhdGUgdW5pcXVlIGlkIG9uIGNyZWF0aW9uXHJcbiAgICB0aGlzLl9pZCA9ICdxXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMDAwIC0gMiArIDEpKSArIDI7XHJcbiAgICAvL2RvIHJlc3Qgc3R1ZmZcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnByb3BzLnRpdGxlID0gdGl0bGUgfHwgJyc7XHJcbiAgICB0aGlzLnByb3BzLmhlbHBUZXh0ID0gaGVscFRleHQgfHwgJyc7XHJcbiAgICB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyIHx8IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyO1xyXG4gICAgdGhpcy5kZWZhdWx0Q2xhc3MgPSBkZWZhdWx0Q2xhc3MgfHwgdGhpcy5kZWZhdWx0Q2xhc3M7XHJcbiAgICB0aGlzLm9yZGVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxMCArIDEpKSArIDEwO1xyXG4gICAgdGhpcy5wcm9wcy5taW5WYWwgPSBtaW5WYWwgfHwgMTA7XHJcbiAgICB0aGlzLnByb3BzLm1heFZhbCA9IG1heFZhbCB8fCA1MDA7XHJcbiAgICAvL2F1dG8gYXNzaWduIG5hbWVzIG9uIGl0ZW0gY3JlYXRpb24gYmFzZWQgb29uIHR5cGVcclxuICAgIHRoaXMubmFtZSA9IElURU1TW3R5cGVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEl0ZW1UeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb3JtdWxhSW5kZXgoaW5kZXg6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtdWxhSW5kZXggPSBpbmRleDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRWaXNpYmlsaXR5KHZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9wcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvc3RUaXRsZShwb3N0VGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9wcy5wb3N0VGl0bGUgPSBwb3N0VGl0bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGVscHRleHQoaGVscFRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9wcy5oZWxwVGV4dCA9IGhlbHBUZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBsYWNlSG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3B0aW9ucyguLi5vcHRpb25zOiBhbnlbXSkge1xyXG4gICAgZm9yIChsZXQgb3B0aW9uIGluIG9wdGlvbnMpXHJcbiAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbnNbb3B0aW9uXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGQoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkc1swXSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9wdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkRmllbGRUb0NoZWNrYm94KGFkZE9wdGlvbnM6IGFueVtdKSB7XHJcbiAgICBsZXQgZGVmYXVsdE9wdGlvbiA9IHRoaXMub3B0aW9uc1swXTtcclxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uIGluIGFkZE9wdGlvbnMpIHtcclxuICAgICAgZGVmYXVsdE9wdGlvbi5sYWJlbCA9IGFkZE9wdGlvbnNbb3B0aW9uXS5sYWJlbDtcclxuICAgICAgZGVmYXVsdE9wdGlvbi5pY29uID0gYWRkT3B0aW9uc1tvcHRpb25dLmljb247XHJcbiAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSBhZGRPcHRpb25zW29wdGlvbl1bJ3ZhbHVlJ10gPyBhZGRPcHRpb25zW29wdGlvbl0udmFsdWUgOiBOdW1iZXIob3B0aW9uKSArIDE7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb24pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRMaW5rc1RvRm9vdGVyKGFkZExpbmtzOiBhbnlbXSkge1xyXG4gICAgbGV0IGRlZmF1bHRPcHRpb24gPSB0aGlzLm9wdGlvbnNbMF07XHJcbiAgICAvLyBsZXQgZGVmYXVsdE9wdGlvbiA9IHRoaXMub3B0aW9uc1swXTtcclxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uIGluIGFkZExpbmtzKSB7XHJcbiAgICAgIGRlZmF1bHRPcHRpb24ubGFiZWwgPSBhZGRMaW5rc1tvcHRpb25dLmxhYmVsO1xyXG4gICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gYWRkTGlua3Nbb3B0aW9uXS52YWx1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzZXJpYWxpemUoaW5wdXQ6IGFueSk6IEl0ZW0ge1xyXG4gICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIGlucHV0KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XHJcblxyXG4gICAgICAgIGlmIChwcm9wID09PSAnb3B0aW9ucycgJiYgaW5wdXRbcHJvcF0ubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2VsZltwcm9wXS5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wID09PSAnZmllbGRzJyAmJiBpbnB1dFtwcm9wXS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICBzZWxmW3Byb3BdLnNwbGljZSgwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5LmV4dGVuZCh0cnVlLCBzZWxmW3Byb3BdLCBpbnB1dFtwcm9wXSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGZbcHJvcF0gPSBpbnB1dFtwcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGY7XHJcbiAgfVxyXG59Il19
