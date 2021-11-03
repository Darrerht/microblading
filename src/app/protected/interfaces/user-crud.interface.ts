export interface usuario {
    nombre: string;
    correo: string;
    role: string;
    estado: string;
    google: string;
    img: string;
    uid: string;
}

export interface readUsuario {
    total: number;
    usuarios: usuario[];
}
export interface bloques {
    bloque?: bloque[];
    msg?: string;
}
export interface bloque {
    curso: string;
    orden: number;
    nombre: string;
    temas: tema[]
}
export interface tema {
    orden: number;
    nombre: string;
    contenidoHTML: string;
    videos: string[];
    tareas: tarea[];

}
export interface tarea {
    nombre: string;
    contenidoHTML: string;
    videos: string[];
}