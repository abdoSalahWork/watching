import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {
    if(localStorage.userToken != null){
      _Router.navigate(['/home'])
    }
  }

  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.max(80),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/),
    ]),
  });

  submitRegisterForm(registerForm:FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response) => {

      if (response.message == 'success') {
        this._Router.navigate(['/login']);

      } else {

        this.error = response.errors.email.message;

      }
    });
  }

  ngOnInit(): void {}
}
