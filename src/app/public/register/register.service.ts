import { Injectable } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {RegisterInterface} from "./register.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService: HttpService,) { }

  register(formData: RegisterInterface): Observable<RegisterInterface> {
    return this.httpService.post('/user/user-auth/register/', formData);
  }
}
