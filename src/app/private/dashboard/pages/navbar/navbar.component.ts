import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logout() {
    this.sessionService.endSession();
  }

}
