import { Component, OnInit } from "@angular/core";
import{Iproduct} from './products.model';
import{ProductService} from './products.services';


@Component({
    selector:'prod-app',
    templateUrl: './products.component.html'
})


export class ProductsComponent implements OnInit{
    ProdInfo: Iproduct[];
    errorMessage:string

    constructor(private _productservice:ProductService){}

    ngOnInit():void{
        this._productservice.getprodInfo().subscribe((data) => this.ProdInfo= data,
                  (err) => this.errorMessage = err);
        console.log(this.ProdInfo)

    }




}