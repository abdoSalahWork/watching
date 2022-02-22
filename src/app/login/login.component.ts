import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string='';
  constructor(private _AuthService: AuthService, private _Router: Router) {
    if(localStorage.userToken != null){
      _Router.navigate(['/home'])
    }
  }
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/),
    ]),
  });

  submitLoginForm(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe(response => {
      if(response.message == "success"){
        localStorage.setItem('userToken',response.token)
        this._Router.navigate(['/home'])
        this._AuthService.saveCurrentUser();
      }
      else{
        this.error=response.message;
        console.log(this.error);

      }
    })

  }
  ngOnInit(): void {
  }

}
