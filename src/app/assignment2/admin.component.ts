import{Component, OnInit} from '@angular/core';
import{IAdmin} from './admin.model';
import{AdminService} from './admin.services';

@Component({
    selector:'admin-stat',
    templateUrl:'./admin.component.html'
})

export class AdminComponent{
    info:IAdmin[];
    
    constructor(private AdminService:AdminService){}

    ngOnInit():void{
        this.info = this.AdminService.getAdminInfo();
    } 
}