import {Component} from "angular2/core"
import {CreateUserComponent} from "./createUser.component"
import {UserList} from "../services/usersList.service"

@Component({
  selector : "users-list",
  directives : [CreateUserComponent],
  providers : [UserList],
  templateUrl : "./app/views/userlist.html"
    
})


export class UserlistComponent{
    title = "List Component";
    users : string[];
    constructor(userList : UserList){
      this.users = userList.getUsers(); 
    }
}
