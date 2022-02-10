import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../../../services/session.service";

@Component({
  selector: 'app-uploadnotes',
  templateUrl: './uploadnotes.component.html',
  styleUrls: ['./uploadnotes.component.css']
})
export class UploadnotesComponent implements OnInit {
  user: any = [];
  isFaculty = false;


  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              ) {
    this.setUserRole();
  }

  ngOnInit(): void {
  }

  setUserRole(){
    this.user = this.sessionService.getUser();
    this.isFaculty = this.user.role == 0;
  }

}
