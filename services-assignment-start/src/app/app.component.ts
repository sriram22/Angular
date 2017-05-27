import {Component, OnInit} from '@angular/core';
import {UserService} from "./userservice.service";
import {CounterService} from "./counterservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  activeUsers=[];
  inactiveUsers=[];


  constructor(private userservice: UserService,private counterservice:CounterService){

  }

  ngOnInit(){
    this.activeUsers = this.userservice.activeUsers;
    this.inactiveUsers = this.userservice.inactiveUsers;
  }





}
