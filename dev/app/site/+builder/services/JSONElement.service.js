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
var JSONElement = (function () {
    function JSONElement() {
        this.jsonPalletes = [
            {
                template: 'one-page-slider',
                pallete: [
                    {
                        themeClass: 'cp1',
                        name: 'Default',
                        components: '#f3d455',
                        backGround: '#012435',
                        text: '#f7da64',
                    },
                    {
                        themeClass: 'cp2',
                        name: 'Theme 1',
                        components: '#EF2158',
                        backGround: '#404948',
                        text: '#fff',
                    },
                    {
                        themeClass: 'cp3',
                        name: 'Theme 2',
                        components: '#0079c1',
                        backGround: '#012535',
                        text: '#fff',
                    }
                ]
            },
            {
                template: 'sound-cloud',
                pallete: [
                    {
                        themeClass: 'cp1',
                        name: 'Default',
                        components: '#ff6600',
                        backGround: '#2a2826',
                        text: '#fff',
                    },
                    {
                        themeClass: 'cp2',
                        name: 'Theme 1',
                        components: '#00CC10',
                        backGround: '#2a2826',
                        text: '#fff',
                    },
                    {
                        themeClass: 'cp3',
                        name: 'Theme 2',
                        components: '#EF2158',
                        backGround: '#2a2826',
                        text: '#fff',
                    }
                ]
            },
            {
                template: 'home_loan_calculator',
                pallete: [
                    {
                        themeClass: 'cp1',
                        name: 'Default',
                        components: '#ff6600',
                        backGround: '#ff6600',
                        text: '#fff',
                    },
                    {
                        themeClass: 'cp2',
                        name: 'Theme 1',
                        components: '#00CC10',
                        backGround: '#00CC10',
                        text: '#fff',
                    },
                    {
                        themeClass: 'cp3',
                        name: 'Theme 2',
                        components: '#EF2158',
                        backGround: '#EF2158',
                        text: '#fff',
                    }
                ]
            }
        ];
    }
    JSONElement.prototype.gettemplatePalettes = function (themeName) {
        for (var _i = 0, _a = this.jsonPalletes; _i < _a.length; _i++) {
            var Pallete = _a[_i];
            if (Pallete.template == themeName)
                return Pallete;
        }
    };
    JSONElement = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONElement);
    return JSONElement;
}());
exports.JSONElement = JSONElement;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL0pTT05FbGVtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQztJQUFBO1FBQ0MsaUJBQVksR0FBUTtZQUNuQjtnQkFDQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixPQUFPLEVBQUU7b0JBQ1I7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLFNBQVM7cUJBQ2Y7b0JBQ0Q7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ1o7b0JBQ0Q7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ1o7aUJBQ0Q7YUFDRDtZQUVEO2dCQUNDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixPQUFPLEVBQUU7b0JBQ1I7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ1o7b0JBQ0Q7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ1o7b0JBQ0Q7d0JBQ0MsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLE1BQU07cUJBQ1o7aUJBQ0Q7YUFDRDtZQUNEO2dCQUNDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDUjt3QkFDQyxVQUFVLEVBQUUsS0FBSzt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixJQUFJLEVBQUUsTUFBTTtxQkFDWjtvQkFDRDt3QkFDQyxVQUFVLEVBQUUsS0FBSzt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixJQUFJLEVBQUUsTUFBTTtxQkFDWjtvQkFDRDt3QkFDQyxVQUFVLEVBQUUsS0FBSzt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLFVBQVUsRUFBRSxTQUFTO3dCQUNyQixJQUFJLEVBQUUsTUFBTTtxQkFDWjtpQkFDRDthQUNEO1NBQ0QsQ0FBQztJQVNILENBQUM7SUFQQSx5Q0FBbUIsR0FBbkIsVUFBb0IsU0FBaUI7UUFDcEMsR0FBRyxDQUFDLENBQWdCLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLFlBQVksRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsQ0FBQztZQUFqQyxJQUFJLE9BQU8sU0FBQTtZQUNmLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQztJQXpGRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBMkZiLGtCQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSxtQkFBVyxjQTBGdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKU09ORWxlbWVudCB7XHJcblx0anNvblBhbGxldGVzOiBhbnkgPSBbXHJcblx0XHR7XHJcblx0XHRcdHRlbXBsYXRlOiAnb25lLXBhZ2Utc2xpZGVyJyxcclxuXHRcdFx0cGFsbGV0ZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoZW1lQ2xhc3M6ICdjcDEnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0RlZmF1bHQnLFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50czogJyNmM2Q0NTUnLFxyXG5cdFx0XHRcdFx0YmFja0dyb3VuZDogJyMwMTI0MzUnLFxyXG5cdFx0XHRcdFx0dGV4dDogJyNmN2RhNjQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhlbWVDbGFzczogJ2NwMicsXHJcblx0XHRcdFx0XHRuYW1lOiAnVGhlbWUgMScsXHJcblx0XHRcdFx0XHRjb21wb25lbnRzOiAnI0VGMjE1OCcsXHJcblx0XHRcdFx0XHRiYWNrR3JvdW5kOiAnIzQwNDk0OCcsXHJcblx0XHRcdFx0XHR0ZXh0OiAnI2ZmZicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGVtZUNsYXNzOiAnY3AzJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdUaGVtZSAyJyxcclxuXHRcdFx0XHRcdGNvbXBvbmVudHM6ICcjMDA3OWMxJyxcclxuXHRcdFx0XHRcdGJhY2tHcm91bmQ6ICcjMDEyNTM1JyxcclxuXHRcdFx0XHRcdHRleHQ6ICcjZmZmJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHRcdCxcclxuXHRcdHtcclxuXHRcdFx0dGVtcGxhdGU6ICdzb3VuZC1jbG91ZCcsXHJcblx0XHRcdHBhbGxldGU6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGVtZUNsYXNzOiAnY3AxJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRcdFx0XHRcdGNvbXBvbmVudHM6ICcjZmY2NjAwJyxcclxuXHRcdFx0XHRcdGJhY2tHcm91bmQ6ICcjMmEyODI2JyxcclxuXHRcdFx0XHRcdHRleHQ6ICcjZmZmJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoZW1lQ2xhc3M6ICdjcDInLFxyXG5cdFx0XHRcdFx0bmFtZTogJ1RoZW1lIDEnLFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50czogJyMwMENDMTAnLFxyXG5cdFx0XHRcdFx0YmFja0dyb3VuZDogJyMyYTI4MjYnLFxyXG5cdFx0XHRcdFx0dGV4dDogJyNmZmYnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhlbWVDbGFzczogJ2NwMycsXHJcblx0XHRcdFx0XHRuYW1lOiAnVGhlbWUgMicsXHJcblx0XHRcdFx0XHRjb21wb25lbnRzOiAnI0VGMjE1OCcsXHJcblx0XHRcdFx0XHRiYWNrR3JvdW5kOiAnIzJhMjgyNicsXHJcblx0XHRcdFx0XHR0ZXh0OiAnI2ZmZicsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZW1wbGF0ZTogJ2hvbWVfbG9hbl9jYWxjdWxhdG9yJyxcclxuXHRcdFx0cGFsbGV0ZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoZW1lQ2xhc3M6ICdjcDEnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0RlZmF1bHQnLFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50czogJyNmZjY2MDAnLFxyXG5cdFx0XHRcdFx0YmFja0dyb3VuZDogJyNmZjY2MDAnLFxyXG5cdFx0XHRcdFx0dGV4dDogJyNmZmYnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhlbWVDbGFzczogJ2NwMicsXHJcblx0XHRcdFx0XHRuYW1lOiAnVGhlbWUgMScsXHJcblx0XHRcdFx0XHRjb21wb25lbnRzOiAnIzAwQ0MxMCcsXHJcblx0XHRcdFx0XHRiYWNrR3JvdW5kOiAnIzAwQ0MxMCcsXHJcblx0XHRcdFx0XHR0ZXh0OiAnI2ZmZicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGVtZUNsYXNzOiAnY3AzJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdUaGVtZSAyJyxcclxuXHRcdFx0XHRcdGNvbXBvbmVudHM6ICcjRUYyMTU4JyxcclxuXHRcdFx0XHRcdGJhY2tHcm91bmQ6ICcjRUYyMTU4JyxcclxuXHRcdFx0XHRcdHRleHQ6ICcjZmZmJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHRdO1xyXG5cclxuXHRnZXR0ZW1wbGF0ZVBhbGV0dGVzKHRoZW1lTmFtZTogc3RyaW5nKSB7XHJcblx0XHRmb3IgKGxldCBQYWxsZXRlIG9mIHRoaXMuanNvblBhbGxldGVzKSB7XHJcblx0XHRcdGlmIChQYWxsZXRlLnRlbXBsYXRlID09IHRoZW1lTmFtZSlcclxuXHRcdFx0XHRyZXR1cm4gUGFsbGV0ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59Il19
