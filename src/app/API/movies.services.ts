import{Injectable} from '@angular/core';
import{Smovies} from './movies.model';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class MovieService{
    
    private _MoviesUrl = "https://ngmovies.herokuapp.com/api/getMovies";

    constructor(private http:Http){}

    getMovieInfo():Observable<Smovies[]>{
        return this.http.get(this._MoviesUrl).map((response) => <Smovies[]>response.json()).catch(this.handleError)
    }
    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server error");
    }
}