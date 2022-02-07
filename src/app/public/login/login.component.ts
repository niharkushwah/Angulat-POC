import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value).subscribe( (response) => {
      console.log(response);
    }, () => {
      // this.invalidCredentials = true;
    });
  }

}
