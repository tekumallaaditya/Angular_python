import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { ProductService } from './products.services';
import { ProductDetailsComponent } from './productDetails.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import{RouterModule} from '@angular/router';

@NgModule({
    imports:[        
        FormsModule,
        CommonModule,
        RouterModule.forChild([            
            {path:'products', component:ProductsComponent},
            {path:'products/:productName', component:ProductDetailsComponent}          
            
        ])

    ],
    declarations:[
        ProductsComponent,
        ProductDetailsComponent
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{

}