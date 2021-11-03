import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { cursoRes, cursos } from '../../interfaces/curso-crud.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { bloques } from '../../interfaces/user-crud.interface';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminCrusoService {


    productosUrl = `${environment.baseUrl}/productos`;
    cursosUrl = `${environment.baseUrl}/cursos`;
    temasUrl = `${environment.baseUrl}/temas`;
    bloquesUrl = `${environment.baseUrl}/bloques`;

    constructor(private http: HttpClient) { }

    public getCursos = (): Observable<cursos> => {
        const url = `${this.productosUrl}`;
        const params = new HttpParams().set('desde', 0).set('limite', 100);
        return this.http.get<cursos>(url, {params});
    };

    public getBloques = (id: string) => {
        const url = `${this.cursosUrl}/contenido/${id}`;
        return this.http.get<bloques>(url);

    };

    public crearTema = (curso: string, bloque: string, orden: string, nombre: string, contenidoHTML: string, videos: string[]) => {
        const url = `${this.temasUrl}`;
        return this.http.post(url, { curso, bloque, orden, nombre, contenidoHTML, videos }).pipe(
            map(res => true),
            catchError(err => of(false))
        );
    };
    public actualizarTema = (id: string, nombre: string, contenidoHTML: string, videos: string[]): Observable<any> => {
        const url = `${this.temasUrl}/${id}`;
        return this.http.patch(url, { nombre, contenidoHTML, videos });
    };

    public crearBloque = (curso: string, orden: number, nombre: string) => {
        const url = `${this.bloquesUrl}`;
        return this.http.post(url, { curso, orden, nombre });
    };
    public actualizarBloque = (bloque: string, nombre: string) => {
        const url = `${this.bloquesUrl}/${bloque}`;
        return this.http.patch(url, { nombre });
    };

    public actualizarCurso = (id: string, nombre: string, descripcion: string, fechaInicio: any, fechaFinal: any, categoria: string) => {
        const url = `${this.productosUrl}/${id}`;
        return this.http.put(url, {nombre, descripcion, fechaInicio, fechaFinal, categoria})
    }
    public activarCurso = (id: string, disponible: boolean) => {
        const url = `${this.productosUrl}/activar/${id}`;
        return this.http.patch<cursoRes>(url, {disponible});
    }
    public crearCurso = (nombre: string, categoria: string, precio: number, descripcion: string, fechaInicio: any, fechaFinal: any) => {
        const url = `${this.productosUrl}`;
        return this.http.post<cursoRes>(url, {nombre, categoria, precio, descripcion, fechaInicio, fechaFinal, disponible: true });
    }

}
