import {Component, OnInit} from "@angular/core" 
import {Router} from "@angular/router-deprecated"
import { User, UserService } from '../services/user.service';

@Component({
    selector : "user-list",
    template : `<h2>User List Page</h2>
        <ul>
            <li *ngFor="let user of users" (click)="onSelect(user)">
                <span class="badge">{{user.id}}</span> {{user.name}}
            </li>
        </ul>
     `
})

export class UserListComponent implements OnInit{
    users : User[];
    
    constructor(public router : Router, private service :UserService){
        
    }
    
    ngOnInit(){
        this.service.getUsers().then(users => this.users = users)
    }
    onSelect(user:User){
        this.router.navigate(['UserDetail', {id : user.id}])
    }
    
}