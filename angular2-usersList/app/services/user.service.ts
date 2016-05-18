import {Injectable} from "@angular/core" 

export class User{
    constructor(public id:number, public name:string){};    
}

@Injectable() 
export class UserService{
    getUsers(){ return UsersPromise}
    
    getUser(id:number | string){
        return UsersPromise.then(Users => Users.filter(u => u.id == +id)[0])
    } 
    
}


var UsersData = [
    new User(11, 'Mr. Nice'),
    new User(12, 'Narco'),
    new User(13, 'Bombasto'),
    new User(14, 'Celeritas'),
    new User(15, 'Magneta'),
    new User(16, 'RubberMan')
];
var UsersPromise = Promise.resolve(UsersData);