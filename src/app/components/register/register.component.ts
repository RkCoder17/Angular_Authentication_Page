import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name : new FormControl("Rohan"),
    email : new FormControl(""),
    mobile : new FormControl(""),
    pwd : new FormControl("")
  });
  
registerSubmit()
{
console.warn(this.registerForm.value);
}

}
