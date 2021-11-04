import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { genRes } from '../../interfaces/curso-crud.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminVideosService {

    videoUrl: string = `${environment.baseUrl}/uploads` 
  constructor(private http: HttpClient) { }

  public subirVideo = (formData: FormData) => {
      const url = `${this.videoUrl}/video/adm`;
      return this.http.post<genRes>(url, formData)
  }
  public getVideosTipo = (tipo: string) => {
    const url = `${this.videoUrl}/video/adm/${tipo}`; 
    return this.http.get(url);
  }
}
