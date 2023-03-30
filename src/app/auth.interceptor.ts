import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrapiService } from './strapi.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: StrapiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     console.log(request, 'R')
    const account = this.authservice.getToken();
        const isApiUrl = request.url.startsWith('http://localhost:8501/api/auth/local');
        console.log(account, 'A')
        if (isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account}` }
            });
        }
    // const name = 'example';
    // const authToken = this.authservice.getToken();
    //     request = request.clone({
    //         setHeaders: {
    //             Authorization: `Bearer ${authToken}`
    //         }
    //     });
        return next.handle(request);
  }
}
