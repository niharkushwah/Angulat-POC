import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = env.apiUrl;
  }

  get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.apiUrl + url, data);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(this.apiUrl + url, data);
  }

  getDetailUrl(url: string, pk: number): string {
    return url + pk.toString() + '/';
  }

  putDetail(url: string, pk: number, body: any): Observable<any> {
    const newUrl = this.getDetailUrl(url, pk);
    return this.http.put(newUrl, body);
  }

  delete(url: string, pk: number): Observable<any> {
    const newUrl = this.getDetailUrl(url, pk);
    return this.http.delete(this.apiUrl + newUrl);
  }

  update(url: string, body: any): Observable<any> {
    url = this.apiUrl + url;
    return this.http.put(url, body);
  }

  detail(url: string, pk: number): Observable<any> {
    const newUrl = this.getDetailUrl(url, pk);
    return this.http.get(this.apiUrl + newUrl);
  }

}
