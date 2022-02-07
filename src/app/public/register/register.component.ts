import {Component, OnInit} from '@angular/core';
import {RegisterService} from "./register.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('click')
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
    })
  }

}
