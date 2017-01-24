"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.format = function (control) {
        var EMAIL_REGEXP = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { 'checkmail': true };
        }
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdmFsaWRhdG9ycy9lbWFpbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBQUE7SUFTQSxDQUFDO0lBUFEscUJBQU0sR0FBYixVQUFjLE9BQW9CO1FBQ2hDLElBQUksWUFBWSxHQUFHLCtDQUErQyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxxQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksc0JBQWMsaUJBUzFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVzdWx0IH0gZnJvbSAnLi92YWxpZGF0aW9uLXJlc3VsdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3Ige1xyXG5cclxuICBzdGF0aWMgZm9ybWF0KGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICB2YXIgRU1BSUxfUkVHRVhQID0gL1xcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvaTtcclxuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09ICcnICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcclxuICAgICAgICAgIHJldHVybiB7ICdjaGVja21haWwnOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==
