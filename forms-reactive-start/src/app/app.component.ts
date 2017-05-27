import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup;
    forbiddenUserNames=['max','sriram'];
  ngOnInit(){
    this.signUpForm=new FormGroup(
      {
        'username':new FormControl(null, [Validators.required, this.forbiddennames.bind(this)]),
        'email':new FormControl(null,[ Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
        'gender':new FormControl('male'),
        'hobbies':new FormArray([])
      }
    );
    this.signUpForm.setValue(
      {
        'username':'max',
        'email':'',
        'gender':'',
        'hobbies':[]
      }
    )

    this.signUpForm.valueChanges.subscribe(
      (values: string) =>{
        console.log(values);
    }
    )
  }

  onAddHobby()
  {
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }
  onSubmit()
  {

    console.log(this.signUpForm);
  }

  forbiddennames(control: FormControl): {[s : string]:boolean}
  {
      if(this.forbiddenUserNames.indexOf(control.value)!==-1)
      {
        return {'this is forbidden':true};
      }
      return null;
  }

  forbiddenEmails(control: FormControl): Promise <any>|Observable<any>
  {
    const promise=new Promise(
      (resolve,reject)=> {
        setTimeout(
          () => {
            if (control.value === 'test@test.com') {
              resolve({'email is forbodden': true});
            }
            else {

              resolve(null);
            }
          }, 1500);
      }
    );
    return promise;
  }
}
