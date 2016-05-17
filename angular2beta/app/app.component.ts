import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core'; 
import {UserlistComponent} from "./components/userlist.component"

@Component({
    selector: 'my-app', 
    directives : [UserlistComponent],
    template: `
        <h1>Welcome to Angular2</h1> 
        <users-list></users-list>
    `
})
export class AppComponent {  
}

bootstrap(AppComponent);