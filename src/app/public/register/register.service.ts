import { Injectable } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {RegisterInterface} from "./register.interface";
import {TokenResponseInterface} from "../login/login.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService: HttpService,) { }

  register(formData: RegisterInterface): Observable<TokenResponseInterface> {
    return this.httpService.post('/user/user-auth/register/', formData);
  }
  token_refresh(formData: any): Observable<any> {
    return this.httpService.post('/user/token/refresh/', formData);
  }
}
