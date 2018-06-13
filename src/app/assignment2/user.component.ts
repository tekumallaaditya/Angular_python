import{Component} from '@angular/core';
import{AdminService} from './admin.services';
import{IAdmin} from './admin.model';

@Component({
    selector:'user-stat',
    templateUrl:'./user.component.html'
})

export class UserComponent{
    UserInfo: IAdmin[];

    constructor(private _AdminService:AdminService){}

    ngOnInit(): void{
        this.UserInfo = this._AdminService.getAdminInfo()
    }

    
}