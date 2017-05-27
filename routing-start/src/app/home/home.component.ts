import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    // const myNumber = Observable.interval(1000);
    // myNumber.subscribe(
    //   (number:  number) =>
    //   {
    //       console.log(number);
    //   }
    // )
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout( () =>
        {
          observer.next('first package');
        }, 2000);
      setTimeout( () =>
      {
        observer.next('second package');
      }, 4000);
      setTimeout( () =>
      {
        observer.error('This does not work');
      }, 5000);
      });
    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) =>{
        console.log(error)
      },
      () =>{
        console.log('completed');
      }
    );
  }

  loadserver(id: number)
  {
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:1}, fragment:'loading'});
  }

  onLogin(){
    this.authService.login();

  }

  onLogOut()
  {
    this.authService.logout();
  }
}
