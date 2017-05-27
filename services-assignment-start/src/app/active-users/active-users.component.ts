import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UserService} from "../userservice.service";
import {CounterService} from "../counterservice.service";
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];



  constructor(private userservice: UserService,private counterservice:CounterService){

  }
  onSetToInactive(id: number) {

    this.userservice.setInactive(id);
  }
}
