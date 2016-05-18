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
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var user_service_1 = require("../services/user.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(router, routeParams, service) {
        this.router = router;
        this.routeParams = routeParams;
        this.service = service;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.routeParams.get("id");
        this.id = id;
        this.service.getUser(id).then(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.BacktoUsers = function () {
        this.router.navigate(["UserList"]);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: "user-detail",
            template: "\n        <h2>User Details {{id}}</h2>\n    "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, user_service_1.UserService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=userDetail.component.js.map