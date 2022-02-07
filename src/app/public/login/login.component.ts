import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  invalidCredentials = false;

  loginForm: FormGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value).subscribe( (response) => {
      this.sessionService.setSession(response);
    }, () => {
      this.invalidCredentials = true;
    });
  }
}
