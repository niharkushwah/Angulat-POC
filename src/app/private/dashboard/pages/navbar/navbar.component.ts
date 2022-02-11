import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any = [];
  isFaculty = false;

  constructor(private sessionService: SessionService) {
    this.setUserRole();
  }

  ngOnInit(): void {
  }
  logout() {
    this.sessionService.endSession();
  }
  setUserRole(){
    this.user = this.sessionService.getUser();
    this.isFaculty = this.user.role == 0;
  }
}
