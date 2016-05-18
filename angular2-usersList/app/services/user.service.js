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
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    return User;
}());
exports.User = User;
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () { return UsersPromise; };
    UserService.prototype.getUser = function (id) {
        return UsersPromise.then(function (Users) { return Users.filter(function (u) { return u.id == +id; })[0]; });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
var UsersData = [
    new User(11, 'Mr. Nice'),
    new User(12, 'Narco'),
    new User(13, 'Bombasto'),
    new User(14, 'Celeritas'),
    new User(15, 'Magneta'),
    new User(16, 'RubberMan')
];
var UsersPromise = Promise.resolve(UsersData);
//# sourceMappingURL=user.service.js.map