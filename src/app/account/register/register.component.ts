import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registrationForm: FormGroup = this.fb.group({
    firstName : ['', Validators.required],
    lastName  : ['', Validators.required],
    username  : ['', Validators.required],
    email     : ['', Validators.required, Validators.email],
    phone     : ['', Validators.required],
    password  : ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  onSubmit(): void
  {
    console.log(this.registrationForm.value);
  }
}
