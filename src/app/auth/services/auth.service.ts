import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth-interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl: string = `${environment.baseUrl}`;
    private _usuario!: Usuario;

    get usuario() {
        return { ...this._usuario };
    }

    constructor(private http: HttpClient) { }

    login = (correo: string, password: string): Observable<AuthResponse> => {
        const url = `${this.baseUrl}/auth/login`;
        const body = {
            correo,
            password,
        };
        const req = this.http.post<AuthResponse>(url, body).pipe(
            tap((res) => {
                if (res.usuario) {
                    this._usuario = res.usuario;
                    localStorage.setItem('token', res.token!);
                }
            }),
            map((res) => res),
            catchError((err) => of(err))
        );
        return req;
    };

    create = (nombre: string, correo: string, password: string): Observable<AuthResponse> => {
        const url = `${this.baseUrl}/usuarios`;
        const body = {
            nombre, correo, password
        };
        const req = this.http.post<AuthResponse>(url, body).pipe(
            tap((res) => {
                if (res.usuario) {
                    this._usuario = res.usuario;
                    localStorage.setItem('token', res.token!);
                }
            }),
            map((res) => res),
            catchError((err) => of(err))
        );
        return req;
    };

    validarToken = () => {
        const url = `${this.baseUrl}/auth/renew`;
        const headers = new HttpHeaders().set(
            'h-jwt',
            localStorage.getItem('token') || ''
        );
        const req = this.http.get<AuthResponse>(url, { headers }).pipe(
            map((res) => {
                if (res.usuario) {
                    this._usuario = res.usuario;
                    localStorage.setItem('token', res.token!);
                }
                return true;
            }),
            catchError((err) => of(false))
        );
        return req;
    };

    logOut = () => {
        localStorage.clear();
    };
}
