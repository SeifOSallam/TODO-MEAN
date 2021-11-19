import { Injectable } from '@angular/core';
import { User } from './user.module';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  


  constructor(private webReqService: WebRequestService) { }

  getUsers() {
    return this.webReqService.get('api/users');
  }


  addUser(user: User) {
    return this.webReqService.post('api/users',
     { email: user.email,
       password: user.password
     });

  }
  
  deleteUser(user: User) {
    return this.webReqService.delete(`api/users/${user._id}`);
  }

}
