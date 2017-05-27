import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
user={
  username:'',
  email:'',
  secret:''
}

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signUpForm.setValue(
      {
        userData:{
          username: suggestedName,
          email:''
        },
        secret: '',
        gender: 'male'
      }
    );*/

    this.signUpForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    )
  }
  genders=['male','female'];

  onSubmit()
  {

    this.user.username= this.signUpForm.value.userData.username;
    this.user.email= this.signUpForm.value.userData.email;
    this.user.secret= this.signUpForm.value.secret;

    this.signUpForm.reset();
  }
}
