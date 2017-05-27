import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prjstatus=['Stable','Critical','Finished'];
  forbiddenProjectName='Test';
  signUpForm: FormGroup;

  ngOnInit(){
     this.signUpForm=new FormGroup(
       {
         'name':new FormControl(null, Validators.required, this.forbiddenName.bind(this)),
         'email':new FormControl(null, [Validators.required, Validators.email]),
         'status':new FormControl(null, Validators.required)
       }

     )

  }

  onSubmit(){
      console.log(this.signUpForm.get('name').value);
    console.log(this.signUpForm.get('email').value);
    console.log(this.signUpForm.get('status').value);
    this.signUpForm.reset();
  }

  /*forbiddenName(control: FormControl):{[s:string]:boolean}
  {
    if(this.forbiddenProjectName.indexOf(control.value) !=-1)
    {
      return {'this is a invalid project name' : true};
    }

    return null;
  }*/

  forbiddenName(control: FormControl): Promise<any>|Observable<any>
  {
    const promise=new Promise(
      (resolve,reject)=> {
        setTimeout(
          () => {
            if (control.value === 'Test') {
              resolve({'Project name is forbodden': true});
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
