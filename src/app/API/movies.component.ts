import {Component, OnInit} from '@angular/core';
import{Smovies} from './movies.model';
import{MovieService} from './movies.services';

@Component({
    selector:'movi-tab',
    templateUrl:'./movies.component.html'
})

export class MovieComponent{
    MovieDB:Smovies[];
    errorMessage:string;

    constructor(private _MovieInfo:MovieService){}

    ngOnInit(): void{
        this._MovieInfo.getMovieInfo().subscribe((data) => this.MovieDB = data, (err) => this.errorMessage = err)
    }

    load(element){
        var i;
        for (i= 0; i< this.MovieDB.length; i++){
            if (this.MovieDB[i].id == element.id){
                document.getElementById("myheader").innerHTML = this.MovieDB[i].name;
                document.getElementById("mybodyLanguage").innerHTML = this.MovieDB[i].language;
                //document.getElementById("mybodyRating").innerHTML = this.MovieDB[i].rate;
                document.getElementById("mybodyType").innerHTML = this.MovieDB[i].type;
            }
        }
        

    }

}