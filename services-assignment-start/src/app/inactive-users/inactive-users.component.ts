import { Component, EventEmitter, Input, Output } from '@angular/core';

import {UserService} from "../userservice.service";
import {CounterService} from "../counterservice.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];



  constructor(private userservice: UserService,private counterservice:CounterService){

  }
  onSetToActive(id: number) {

    this.userservice.setActive(id);
  }
}
