import{Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template:`<div>
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <a class="navbar-brand">Edureka</a>
                      <ul class="nav navbar-nav">
                        <li><a [routerLink]= "['/movies']">Movies</a></li>
                        <li><a [routerLink]= "['/music']">Music</a></li>
                        <li><a [routerLink]= "['/admin']">Admin</a></li>
                        <li><a [routerLink]= "['/line']">Line</a></li>
                        <li><a [routerLink]= "['/test']">Test</a></li>
                        <li><a [routerLink]= "['/products']">Products</a></li>
                      </ul>
                  </div>
                </nav>
                <div>
                  <router-outlet></router-outlet>
                </div>             
                      
             </div>`
})

export class AppComponent{
    
}