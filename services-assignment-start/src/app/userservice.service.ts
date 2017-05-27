
import {Injectable} from '@angular/core';
import {CounterService} from './counterservice.service';


@Injectable()
export class UserService {
  counterActive: number=0;
  counterInactive: number=0;

  constructor(private counterService:CounterService){}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


    setInactive(id: number)
    {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.countactiveToInactive(this.counterInactive++);
    }

    setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countinactiveToActive(this.counterActive++);
  }
}
