"use strict";
var CalcEmail = (function () {
    function CalcEmail(data) {
        this._id = '';
        this.app = '';
        this.type = 'Finish';
        this.email = 'team@videoagency.com';
        this.subject = 'Your Video Production Estimate';
        this.message = "Hello!\nThank you for using our video production cost calculator. Just so you know, your estimate came to approximately $40,000 ( and $24,000 if you go with a slightly lower production quality).\nIf you have any further questions, feel free email us :)\nThank You";
        this.sendEmail = false;
        var self = this;
        for (var prop in data) {
            self[prop] = data[prop] || self[prop];
        }
    }
    return CalcEmail;
}());
exports.CalcEmail = CalcEmail;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL21vZGVscy9jYWxjX2VtYWlsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQWFJLG1CQUFZLElBQVM7UUFYckIsUUFBRyxHQUFjLEVBQUUsQ0FBQztRQUNwQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsVUFBSyxHQUFXLHNCQUFzQixDQUFDO1FBQ3hDLFlBQU8sR0FBVyxnQ0FBZ0MsQ0FBQztRQUNsRCxZQUFPLEdBQVcseVFBR1osQ0FBQztRQUNQLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHdkIsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksaUJBQVMsWUFtQnJCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvbW9kZWxzL2NhbGNfZW1haWwubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FsY0VtYWlsIHtcclxuXHJcbiAgICBfaWQ6IHN0cmluZyA9ICAgICcnO1xyXG4gICAgYXBwOiBzdHJpbmcgPSAnJztcclxuICAgIHR5cGU6IHN0cmluZyA9ICdGaW5pc2gnO1xyXG4gICAgZW1haWw6IHN0cmluZyA9ICd0ZWFtQHZpZGVvYWdlbmN5LmNvbSc7XHJcbiAgIHN1YmplY3Q6IHN0cmluZyA9ICdZb3VyIFZpZGVvIFByb2R1Y3Rpb24gRXN0aW1hdGUnO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gYEhlbGxvIVxyXG5UaGFuayB5b3UgZm9yIHVzaW5nIG91ciB2aWRlbyBwcm9kdWN0aW9uIGNvc3QgY2FsY3VsYXRvci4gSnVzdCBzbyB5b3Uga25vdywgeW91ciBlc3RpbWF0ZSBjYW1lIHRvIGFwcHJveGltYXRlbHkgJDQwLDAwMCAoIGFuZCAkMjQsMDAwIGlmIHlvdSBnbyB3aXRoIGEgc2xpZ2h0bHkgbG93ZXIgcHJvZHVjdGlvbiBxdWFsaXR5KS5cclxuSWYgeW91IGhhdmUgYW55IGZ1cnRoZXIgcXVlc3Rpb25zLCBmZWVsIGZyZWUgZW1haWwgdXMgOilcclxuVGhhbmsgWW91YDtcclxuICAgIHNlbmRFbWFpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gZGF0YSl7XHJcbiAgICAgICAgICAgICBzZWxmW3Byb3BdID0gZGF0YVtwcm9wXSB8fCBzZWxmW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
