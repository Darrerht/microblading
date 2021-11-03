import { HttpErrorResponse } from "@angular/common/http";

export interface AuthResponse {
    usuario?: Usuario;
    token?: string;
}

export interface Usuario {
    nombre: string;
    correo: string;
    role: string;
    estado: string;
    google: string;
    img: string;
    uid: string;
}

export interface Error {
    msg: string;
}