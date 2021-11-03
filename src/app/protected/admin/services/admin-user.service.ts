import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { readUsuario, usuario } from '../../interfaces/user-crud.interface';

@Injectable({
    providedIn: 'root'
})
export class AdminUserService {

    baseUrl = `${environment.baseUrl}/usuarios`; 
    constructor(private http: HttpClient) { }

    getUsuarios = (desde: number, limite: number): Observable<readUsuario> => {
        const headers = new HttpHeaders().set('ss', 'ss');
        const params = new HttpParams().set('desde', `${desde}`).set('limite', `${limite}`);
        const url = `${this.baseUrl}`;
        const req = this.http.get<readUsuario>(url, {params, headers});
        return req;
    };
    deleteUsuario = (id: string) => {
        const url = `${this.baseUrl}/${id}`;
        const req = this.http.delete<any>(url).pipe(
            map((res) => {
                const r = {
                    ...res,
                    ok: true
                }
                return r;
            }),catchError((err)=> of({...err, ok: false}))
        )
        return req;
    }
}
