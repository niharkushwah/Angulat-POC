import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logout() {
    this.sessionService.endSession();
  }

}
