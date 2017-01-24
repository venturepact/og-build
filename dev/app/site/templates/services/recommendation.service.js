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
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var model_1 = require('../../+builder/models/model');
var analytic_service_1 = require('./analytic.service');
var RecommendationService = (function () {
    function RecommendationService(_jsonBuilderHelper, _analyticService) {
        this._jsonBuilderHelper = _jsonBuilderHelper;
        this._analyticService = _analyticService;
        this.recommendedResult = { resultItem: model_1.Item, count: 0, resultObj: {} };
        this.formulaResults = {};
    }
    RecommendationService.prototype.getRecomendedResult = function () {
        var recommendedObj = {};
        var max = 0;
        var result = [];
        var self = this;
        this._jsonBuilderHelper.getJSONBuilt().formula.forEach(function (formula) {
            if (!self.formulaResults.hasOwnProperty(formula.value)) {
                self.formulaResults[formula.value] = formula;
            }
        });
        this._jsonBuilderHelper.getTemplateQuestionare().forEach(function (item) {
            if (item.type == 'selectbox' || item.type == 'radio_button' || item.type == 'checkbox') {
                item.options.forEach(function (option) {
                    var type = option.value;
                    if (type && type != '' && isNaN(type)) {
                        var typeArray = type.split(',');
                        typeArray.forEach(function (obj) {
                            type = obj.trim();
                            if (option.selected) {
                                recommendedObj[type] = (recommendedObj[type] || 0) + (1);
                                if (recommendedObj[type] > max) {
                                    max = recommendedObj[type];
                                    result = [type];
                                    return;
                                }
                                if (recommendedObj[type] == max) {
                                    var arrayIndex = result.indexOf(type);
                                    if (arrayIndex != (-1)) {
                                        result.splice(arrayIndex, 1);
                                    }
                                    result.push(type);
                                }
                            }
                            else {
                                recommendedObj[type] = (recommendedObj[type] || 0);
                            }
                        });
                    }
                });
            }
        });
        this.recommendedResult.resultItem = this.formulaResults[result[result.length - 1]];
        this.recommendedResult.count = max;
        this.recommendedResult.resultObj = result;
        console.log('max: ' + max);
        console.log('key/s with max count: ' + JSON.stringify(result));
        console.log('result', this.recommendedResult.resultItem);
        console.log('this.formulaResults', this.formulaResults);
        if (result.length > 0) {
            if (this._jsonBuilderHelper.getSelectedFormula() != this.recommendedResult.resultItem) {
                this._jsonBuilderHelper.setSelectedFormula(this.recommendedResult.resultItem);
                if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                    if (this.sub)
                        this.sub.unsubscribe();
                    this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                        .subscribe(function (response) {
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
        else {
            this._jsonBuilderHelper.setSelectedFormula(this._jsonBuilderHelper.getJSONBuilt().formula[0]);
            if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                    .subscribe(function (response) {
                }, function (error) {
                    console.log(error);
                });
            }
        }
        console.log('this.formulaResults', recommendedObj);
        return this.recommendedResult;
    };
    RecommendationService.prototype.getAvailableOptions = function () {
        var optionArray = [];
        this._jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) { optionArray.push({ name: formula.name, value: formula.value }); });
        return optionArray;
    };
    RecommendationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService])
    ], RecommendationService);
    return RecommendationService;
}());
exports.RecommendationService = RecommendationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy9yZWNvbW1lbmRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0Msb0NBQTRCLDZDQUE2QyxDQUFDLENBQUE7QUFDMUUsc0JBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFDdkUsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFFckQ7SUFJSSwrQkFBb0Isa0JBQStCLEVBQVUsZ0JBQWlDO1FBQTFFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFGOUYsc0JBQWlCLEdBQVEsRUFBRSxVQUFVLEVBQUUsWUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZFLG1CQUFjLEdBQVEsRUFBRSxDQUFDO0lBTXpCLENBQUM7SUFHRCxtREFBbUIsR0FBbkI7UUFDSSxJQUFJLGNBQWMsR0FBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFZO1lBQ3pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ2pELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9B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bGF0ZXMvc2VydmljZXMvcmVjb21tZW5kYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcCwgSXRlbSwgU2VjdGlvbiwgUGFnZSB9IGZyb20gJy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4vYW5hbHl0aWMuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlY29tbWVuZGF0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcmVjb21tZW5kZWRSZXN1bHQ6IGFueSA9IHsgcmVzdWx0SXRlbTogSXRlbSwgY291bnQ6IDAsIHJlc3VsdE9iajoge30gfTtcclxuICAgIGZvcm11bGFSZXN1bHRzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2pzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlciwgcHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbWF4OiAnICsgbWF4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5L3Mgd2l0aCBtYXggY291bnQ6ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWNjb21lbmRlZE9iaik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFJlY29tZW5kZWRSZXN1bHQoKTogYW55IHtcclxuICAgICAgICBsZXQgcmVjb21tZW5kZWRPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGxldCBtYXg6IGFueSA9IDA7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtdWxhOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmZvcm11bGFSZXN1bHRzLmhhc093blByb3BlcnR5KGZvcm11bGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZvcm11bGFSZXN1bHRzW2Zvcm11bGEudmFsdWVdID0gZm9ybXVsYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbTogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3NlbGVjdGJveCcgfHwgaXRlbS50eXBlID09ICdyYWRpb19idXR0b24nIHx8IGl0ZW0udHlwZSA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogYW55ID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlICYmIHR5cGUgIT0gJycgJiYgaXNOYU4odHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVBcnJheSA9IHR5cGUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKG9iajogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gb2JqLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE9ialt0eXBlXSA9IChyZWNvbW1lbmRlZE9ialt0eXBlXSB8fCAwKSArICgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb21tZW5kZWRPYmpbdHlwZV0gPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0gcmVjb21tZW5kZWRPYmpbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFt0eXBlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb21tZW5kZWRPYmpbdHlwZV0gPT0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheUluZGV4ID0gcmVzdWx0LmluZGV4T2YodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUluZGV4ICE9ICgtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zcGxpY2UoYXJyYXlJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkT2JqW3R5cGVdID0gKHJlY29tbWVuZGVkT2JqW3R5cGVdIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlY29tbWVuZGVkUmVzdWx0LnJlc3VsdEl0ZW0gPSB0aGlzLmZvcm11bGFSZXN1bHRzW3Jlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV1dO1xyXG4gICAgICAgIHRoaXMucmVjb21tZW5kZWRSZXN1bHQuY291bnQgPSBtYXg7XHJcbiAgICAgICAgdGhpcy5yZWNvbW1lbmRlZFJlc3VsdC5yZXN1bHRPYmogPSByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXg6ICcgKyBtYXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXkvcyB3aXRoIG1heCBjb3VudDogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCB0aGlzLnJlY29tbWVuZGVkUmVzdWx0LnJlc3VsdEl0ZW0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZvcm11bGFSZXN1bHRzJywgdGhpcy5mb3JtdWxhUmVzdWx0cyk7XHJcblxyXG4gICAgICAgIC8qIGZybyBsaXZlIGNhbGNzICovXHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkgIT0gdGhpcy5yZWNvbW1lbmRlZFJlc3VsdC5yZXN1bHRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZEZvcm11bGEodGhpcy5yZWNvbW1lbmRlZFJlc3VsdC5yZXN1bHRJdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiogc2F2ZSBvdXRjb21lICovXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuc3RhdHVzID09ICdMSVZFJyAmJiB0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ViKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX2FuYWx5dGljU2VydmljZS5zYXZlT3V0Q29tZSh0aGlzLl9qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsIHRoaXMuX2pzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRGb3JtdWxhKHRoaXMuX2pzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbMF0pO1xyXG4gICAgICAgICAgICAvKiogc2F2ZSBvdXRjb21lICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnICYmIHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNhdmVPdXRDb21lKHRoaXMuX2pzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgdGhpcy5fanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZm9ybXVsYVJlc3VsdHMnLCByZWNvbW1lbmRlZE9iaik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb21tZW5kZWRSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlT3B0aW9ucygpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbkFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2pzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubWFwKFxyXG4gICAgICAgICAgICAoZm9ybXVsYTogYW55KSA9PiB7IG9wdGlvbkFycmF5LnB1c2goeyBuYW1lOiBmb3JtdWxhLm5hbWUsIHZhbHVlOiBmb3JtdWxhLnZhbHVlIH0pOyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9uQXJyYXk7XHJcbiAgICB9XHJcbn0iXX0=
