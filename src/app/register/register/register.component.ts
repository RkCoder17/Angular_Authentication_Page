import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component(
  {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')])
  });
  registerSubmit() { console.warn(this.registerForm.value); }
  get name() {
    return this.registerForm.get('name')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get mobile() {
    return this.registerForm.get('mobile')
  }
  get pwd() {
    return this.registerForm.get('pwd')

  }
}