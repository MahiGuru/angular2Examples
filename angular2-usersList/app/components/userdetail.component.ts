import {Component, OnInit} from "@angular/core";
import { RouteParams, Router } from '@angular/router-deprecated';

import {User, UserService} from "../services/user.service";

@Component({
    selector : "user-detail",
    template : `
        <h2>User Details {{id}}</h2>
    `
    
})


export class UserDetailComponent implements OnInit{
    user : User;
    id : number | string;
    constructor(private router:Router, private routeParams : RouteParams, private service : UserService){}
    ngOnInit(){
        let id = this.routeParams.get("id");
        this.id = id;
        this.service.getUser(id).then(user => this.user = user);
    }
    BacktoUsers(){
        this.router.navigate(["UserList"])
    }
    
}



