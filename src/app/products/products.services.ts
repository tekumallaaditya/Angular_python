import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Iproduct} from './products.model';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class ProductService{    
    
    private _productUrl = "https://ngapi4.herokuapp.com/api/getProducts";

    constructor(private _http:Http){}

    getprodInfo():Observable<Iproduct[]>{
        return this._http.get(this._productUrl).map((response) => response.json()).catch(this.handleError)

    }
    private handleError(error:Response){
        return Observable.throw(error.json().error || "server error")
    }


}