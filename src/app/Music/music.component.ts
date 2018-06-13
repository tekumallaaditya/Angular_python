import{Component} from '@angular/core';
import{IMusic, Ifinal} from './music.model';
import{MusicServices} from './music.services';
import{Iactual} from './music.model';

@Component({
    selector:'music-info',
    templateUrl:'./music.component.html'
})

export class MusicComponent{
    MusicInfo:IMusic[];

    errorMessage:string;

    constructor(private _MovieInfo:MusicServices){}

    ngOnInit(): void{
        this._MovieInfo.getMusicInfo().subscribe((data) => this.MusicInfo = data, (err) => this.errorMessage = err)
    }
    load(element, id):void{
        console.log('button clicked', element.albums.length);
        var i; 
        var table:string = '';        
        for(i = 0; i< element.albums.length; i++)
        {
            
            table = table + '<tr><td>' + element.albums[i].albumId + '</td>';
            table = table + '<td>' + element.albums[i].title + '</td>';
            table = table + '<td>' + element.albums[i].year + '</td>';
            table = table + '<td>' + element.albums[i].cover + '</td>';
            table = table + '<td>' + element.albums[i].price + '</td></tr>';
            console.log(table);         
        }
        document.getElementById('push').innerHTML = table;
        
    }
    
    
}