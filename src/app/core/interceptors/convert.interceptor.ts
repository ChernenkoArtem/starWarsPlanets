import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable()
export class ConvertInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

          const responseBody = event.body;
          if (responseBody?.results !== undefined) {
            const modEvent = event.clone({ body: responseBody.results || null });
            return modEvent;
          } else {
            return event;
          }
        }
        return event;
      })
    );
  }

}
