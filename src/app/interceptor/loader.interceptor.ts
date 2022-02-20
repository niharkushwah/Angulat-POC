import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from "../services/session.service";
import {LoaderService} from "../services/loader.services";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService, private session: SessionService) {
  }

  removeRequest(req: HttpRequest<any>): void {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.requests.push(req);

    // console.log("No of requests--->" + this.requests.length);

    this.loaderService.isLoading.next(true);

    return Observable.create((observer: any) => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            if (err.status === 401 || err.status === 500) {
              this.session.endSession();
            }
            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
