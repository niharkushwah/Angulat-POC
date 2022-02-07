import { Injectable } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {LoginInterface} from "./login.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  login(formData: LoginInterface): Observable<LoginInterface> {
    return this.httpService.post('/user/user-auth/login/', formData);
  }
}
