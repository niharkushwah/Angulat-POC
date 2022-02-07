import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from "../services/session.service";

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanLoad {

  constructor(private sessionService: SessionService) {
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sessionService.isSessionExist()){
      this.sessionService.navigate('/dashboard/dashboard');
      return false;
    }else{
      return true;
    }
  }

}
