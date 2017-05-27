import { Component } from '@angular/core';
import {UserService} from "./userservice.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private userservice:UserService){}

  OnActivate()
  {
    this.userservice.userActivated.next('user');
  }
}
