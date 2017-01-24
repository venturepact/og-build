"use strict";
var User = (function () {
    function User(name, emails, role, companyname, domain, isLoggedIn, password) {
        this.name = name;
        this.emails = emails;
        this.role = role;
        this.companyname = companyname;
        this.domain = domain;
        this.isLoggedIn = isLoggedIn;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var Email = (function () {
    function Email(email, is_primary) {
        this.email = email;
        this.is_primary = is_primary;
    }
    return Email;
}());
exports.Email = Email;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK3NpZ251cC9zaWdudXAtZmxvdy0xL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0UsY0FDUyxJQUFnQixFQUNoQixNQUFtQixFQUNuQixJQUFvQixFQUNwQixXQUFxQixFQUNyQixNQUFxQixFQUNyQixVQUFxQixFQUNyQixRQUFtQjtRQU5uQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDdkIsQ0FBQztJQUNSLFdBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLFlBQUksT0FVaEIsQ0FBQTtBQUNEO0lBQ0UsZUFDUyxLQUFhLEVBQ2IsVUFBbUI7UUFEbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVM7SUFDMUIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLGFBQUssUUFLakIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLytzaWdudXAvc2lnbnVwLWZsb3ctMS9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG5hbWUgICAgOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZW1haWxzICAgICAgOiBFbWFpbCxcclxuICAgIHB1YmxpYyByb2xlICAgICAgICA6IFN0cmluZyxcclxuICAgIHB1YmxpYyBjb21wYW55bmFtZSAgOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZG9tYWluICAgICAgIDogc3RyaW5nLFxyXG4gICAgcHVibGljIGlzTG9nZ2VkSW4gIDogQm9vbGVhbixcclxuICAgIHB1YmxpYyBwYXNzd29yZCAgIDogc3RyaW5nXHJcbiAgKSB7ICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVtYWlse1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaXNfcHJpbWFyeTogYm9vbGVhblxyXG4gICl7fVxyXG59XHJcbiJdfQ==
