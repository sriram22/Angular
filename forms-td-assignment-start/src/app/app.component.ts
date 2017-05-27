import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;

  onSubmit(){
      console.log(this.signUpForm.value.email);
    console.log(this.signUpForm.value.subscriptions);
    console.log(this.signUpForm.value.password);
  }

}
