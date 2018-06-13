import{Injectable} from '@angular/core';
import{IMusic} from './music.model';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class MusicServices{
    private _MusicUrl = "https://ngmusicdb.herokuapp.com/api/getMusic";

    constructor(private http:Http){}

    getMusicInfo():Observable<IMusic[]>{
        return this.http.get(this._MusicUrl).map((response) => <IMusic[]>response.json()).catch(this.handleError)
    }
    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server error");
    }
}