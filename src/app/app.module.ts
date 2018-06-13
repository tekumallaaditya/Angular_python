import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{RouterModule} from '@angular/router';

import{AppComponent} from './app.component'
import{DreamComponent} from './dream.component'
import { LineComponent } from './LineStatus/line.component';
import { LineStatusSortPipe } from './LineStatus/sort.component';
import { AdminComponent } from './assignment2/Admin.component';
import { UserComponent } from './assignment2/User.component';
import { AdminService } from './assignment2/admin.services';
import { MovieComponent } from './API/movies.component';
import { MovieService } from './API/movies.services';
import { MusicComponent } from './Music/music.component';
import { MusicServices } from './Music/music.services';
import { Testcomponent } from './test/test.component';
import { NotfoundComponent } from './test/notfound.component';
import { ProductModule } from './products/products.module';


@NgModule({
    //All modules should be mentioned here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'movies', component:MovieComponent},
            {path:'music', component:MusicComponent},
            {path:'admin', component:AdminComponent},
            {path:'line', component:LineComponent},
            {path:'test', component:Testcomponent},                       
            {path:'', redirectTo:'admin', pathMatch:'full'},
            {path:'**',component:NotfoundComponent }
        ])
    ],
    //All components below
    declarations:[
        AppComponent,
        DreamComponent,       
        LineComponent,
        LineStatusSortPipe,
        AdminComponent,
        UserComponent,
        MovieComponent,
        MusicComponent,
        Testcomponent,
        NotfoundComponent
        
        
        
    ],
    //Only the main component
    bootstrap:[
        AppComponent
    ],
    //Services to go here
    providers:[
        AdminService,
        MovieService,
        MusicServices
        
    ]
})

export class AppModule{

}