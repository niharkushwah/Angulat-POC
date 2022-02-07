import { Injectable } from '@angular/core';
import { CanLoad, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from "../services/session.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {

  constructor(private sessionService: SessionService) {
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sessionService.isSessionExist()){
      return true;
    }else{
      this.sessionService.endSession();
      return false;
    }
  }
}
