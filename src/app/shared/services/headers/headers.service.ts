import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        if (req.headers.get('ss') || !token) {
            return next.handle(req)
        }

        
        const nuReq = req.clone({
            headers: req.headers.set('h-jwt', token)
        });

        return next.handle(nuReq);
    }
}
