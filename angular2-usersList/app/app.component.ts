import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { UserListComponent } from './components/userlist.component';
import { CreateUserComponent } from './components/createuser.component';
import { UserDetailComponent } from './components/userDetail.component';
import { UserService } from './services/user.service';


@Component({
    selector : "my-app",
    directives: [UserListComponent, CreateUserComponent, ROUTER_DIRECTIVES, UserDetailComponent],
    providers: [UserService], 
    template : ` 
        <nav>
            <a [routerLink]="['UserList']">Users List</a> | 
            <a [routerLink]="['CreateUser']">Create User</a>
        </nav>
        <router-outlet></router-outlet>
    
    `
})
@RouteConfig([
    {path : "/userlist", component:UserListComponent, name :"UserList"},
    {path : "/create", component:CreateUserComponent, name : "CreateUser"},
    {path : "/userDetail/:id", component : UserDetailComponent, name : "UserDetail"}
])
export class AppComponent{
    
}