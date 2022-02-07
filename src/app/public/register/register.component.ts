import {Component, OnInit} from '@angular/core';
import {RegisterService} from "./register.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'name': ['', [Validators.required, Validators.minLength(3)]],
    'role': ['', [Validators.required]],
  })

  constructor(private registerService: RegisterService,
              private formBuilder: FormBuilder,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('click')
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value).subscribe(response => {
      this.sessionService.setSession(response);
    })
  }

}
