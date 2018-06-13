import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'SortInfo'
})

export class LineStatusSortPipe implements PipeTransform{
    

    transform(value:string, slot:number){
        var i;
        var ret = new Array(); 
        ret = value.split(";");
        /*       
        for(i=0; i<value.length; i++)
        {
            ret[i] = value[i].split(";");       

        } */
        return ret[slot];
    }
}