import {Injectable} from '@angular/core';
import {LoginInterface, TokenResponseInterface} from "../public/login/login.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) {
  }

  navigate(url: string): void{
    this.router.navigate([url]).then();
  }

  isSessionExist(): boolean{
    return !!localStorage.getItem('access')
  }

  setSession(data: TokenResponseInterface): void{
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.navigate('/dashboard/home');
  }

  endSession(): void{
    localStorage.clear();
    this.navigate('/login');
  }

  getUser(): LoginInterface {

    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    } else {
      return {
        id: 0, is_superuser: false,
        last_login: null,
        name: '',
        email: '',
        role: 0,
        mobile: '',
        roll_no: '',
        clg_name: '',
        is_active: true,
      };
    }
  }

  getToken(): string {
    const token = localStorage.getItem('access');
    return token ? token : '';
  }

  deleteToken(): void {
    localStorage.removeItem('access');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh');
  }

  setAccessToken(token: string): void {
    localStorage.setItem('access', token);
  }

}
