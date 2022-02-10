import { Component, OnInit } from '@angular/core';
import {RegisterInterface} from "../../../../public/register/register.interface";
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private sessionService: SessionService) {
    this.getRole();
  }

  // role: RegisterInterface[] = [];
  // role = 1;
  ngOnInit(): void {
  }
  getRole(){
    this.sessionService.getUser().role;
  }
  role = this.getRole();
}
