import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {

  constructor() {}

  private handleError(err: HttpErrorResponse, request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    //handle your auth error or rethrow
    debugger
    if (err.status !== 401 && err.status !== 404) {
      console.log('error status', err.status);
    }
    if (err.status === 404) {
      let newRequest = request.clone({ url: request.url.replace('users', 'user') });
      return next.handle(newRequest);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercepted request', request);
    return next.handle(request).pipe(catchError(error => this.handleError(error, request, next)));
  }
}
