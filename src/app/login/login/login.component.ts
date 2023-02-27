import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm = new FormGroup({
    emaill: new FormControl("", [Validators.required,Validators.email]),
    pwds: new FormControl("", [Validators.required])
  });
  loginSubmit() 
  { 
    console.warn(this.loginForm.value); 
  }

  get emaill() {
    return this.loginForm.get('emaill')
  }
  
  get pwds() {
    return this.loginForm.get('pwds')
  }

}
