import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, Form} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registrationForm: FormGroup = this.fb.group({
    firstName : ['', [Validators.required, Validators.minLength(4)]],
    lastName  : ['', [Validators.required, Validators.minLength(4)]],
    username  : ['', [Validators.required, Validators.minLength(4)]],
    email     : ['', [Validators.required, Validators.email, Validators.minLength(6) ]],
    phone     : ['', [Validators.required, Validators.required, Validators.minLength(10)]],
    password  : ['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(private fb: FormBuilder) { }

  onSubmit(): void
  {
    console.log(this.registrationForm.value);
  }

  get firstName(): FormControl
  {
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl
  {
    return this.registrationForm.get('lastName') as FormControl;
  }

  get username(): FormControl
  {
    return this.registrationForm.get('username') as FormControl;
  }
  get email(): FormControl
  {
    return this.registrationForm.get('email') as FormControl;
  }

  get phone(): FormControl
  {
    return this.registrationForm.get('phone') as FormControl;
  }
  get password(): FormControl
  {
    return this.registrationForm.get('password') as FormControl;
  }
}
