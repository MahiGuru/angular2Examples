import {Component} from "angular2/core"
import {UserList} from "../services/usersList.service"


@Component({
   selector : "create-user",
   templateUrl : "./app/views/createUser.html",
   providers : [UserList]    
})


export class CreateUserComponent {
    title = "Create User";
    users;
    constructor(userList : UserList) {
        this.users = userList.getUsers();
    }
}