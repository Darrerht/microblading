export interface curso {
    _id: string;
    nombre: string;
    descripcion: string;
    disponible: boolean;
    fechaInicio: Date;
    fechaFinal: Date;
}
export interface cursos {
    total?: number;
    productos?: curso[];
    msg?: string;
}
export interface tema {
    _id: string;
    curso: string;
    bloque: string;
    orden: number;
    nombre: string;
    contenidoHTML: string;
    videos: string[];
    tareas: [];
}
export interface cursoRes {
    producto: curso;
    ok: boolean;
    msg?: string;
}
export interface genRes {
    ok: boolean;
    msg?: string;
}