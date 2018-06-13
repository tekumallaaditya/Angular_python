import{Component, OnInit} from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'detail-prod',
    templateUrl:'./productDetails.component.html'
})

export class ProductDetailsComponent implements OnInit{
    namedet:string = "Product Details";
    productCodedet:string;
    releaseDatedet:string;
    descriptiondet:string;
    pricedet:number;
    starRatingdet:number;
    imageUrldet:string;
    constructor(private _route:ActivatedRoute,
                private _router:Router){}
    

    ngOnInit():void{
        let par = this._route.snapshot.params["productName"];
        this.namedet = `Product Details->${par}`;
        
        this._route.queryParams.subscribe((params) =>{
            this.namedet = params['name'];
            this.productCodedet = params['code'];
            this.releaseDatedet = params['date'];
            this.descriptiondet = params['desc'];
            this.pricedet = params['price'];
            this.starRatingdet = params['rate'];
            this.imageUrldet = params['img'];
        })
    }
    goback(): void{
        this._router.navigate(['/products']);
    }    

}