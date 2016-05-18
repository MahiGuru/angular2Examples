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
var router_deprecated_1 = require('@angular/router-deprecated');
var userlist_component_1 = require('./components/userlist.component');
var createuser_component_1 = require('./components/createuser.component');
var userDetail_component_1 = require('./components/userDetail.component');
var user_service_1 = require('./services/user.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [userlist_component_1.UserListComponent, createuser_component_1.CreateUserComponent, router_deprecated_1.ROUTER_DIRECTIVES, userDetail_component_1.UserDetailComponent],
            providers: [user_service_1.UserService],
            template: " \n        <nav>\n            <a [routerLink]=\"['UserList']\">Users List</a> | \n            <a [routerLink]=\"['CreateUser']\">Create User</a>\n        </nav>\n        <router-outlet></router-outlet>\n    \n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: "/userlist", component: userlist_component_1.UserListComponent, name: "UserList" },
            { path: "/create", component: createuser_component_1.CreateUserComponent, name: "CreateUser" },
            { path: "/userDetail/:id", component: userDetail_component_1.UserDetailComponent, name: "UserDetail" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map