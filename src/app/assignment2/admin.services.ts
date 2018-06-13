import{IAdmin} from './admin.model';
import{Injectable} from '@angular/core';

@Injectable()

export class AdminService{

    getAdminInfo():IAdmin[] {
        return [
            {
                'name': 'Pluto',
                'email': 'jup@gmail.com',
                'num': 5624569
            },
            {
                'name': 'Venus',
                'email': 'venus@gmail.com',
                'num': 456985
            },
            {
                'name': 'Mars',
                'email': 'Mars@gmail.com',
                'num': 123569
            }
        ]
    }
}