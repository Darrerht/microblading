import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminVideosService } from '../../services/admin-videos.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-videos-crud',
    templateUrl: './videos-crud.component.html',
    styleUrls: ['./videos-crud.component.scss']
})
export class VideosCrudComponent implements OnInit {
    formNombre: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        tipo: ['', [Validators.required]]
    });
    archivo!: File;
    archivoValido: boolean = false;
    nombreValido: boolean = false;
    mostrarErrores: boolean = false;
    mensajeError: string = '';
    textoBoton: string = 'SUBIR';
    cargaVideo: boolean = false;
    constructor(private fb: FormBuilder, private videoService: AdminVideosService) { }

    ngOnInit(): void {
    }
    upload = (event: any) => {

        const tipos = ['video/mp4', 'video/ms-asf', 'video/x-ms-wmv', 'video/x-msvideo'];
        const archivo = event.target.files[0];
        const tam = archivo.size / 1024 / 1024;
        if (!tipos.includes(archivo.type)) {
            this.textoBoton = 'SUBIR';
            this.mostrarErrores = true;
            this.mensajeError = 'El archivo no contiene un formato válido.';
            this.archivoValido = false;
        } else {
            if (tam > 60) {
                this.textoBoton = 'SUBIR';
                this.mostrarErrores = true;
                this.mensajeError = 'El archivo excede el tamaño máximo.';
                this.archivoValido = false;
            } else {
                this.textoBoton = 'ARCHIVO VÁLIDO';
                this.mostrarErrores = false;
                this.mensajeError = '';
                this.archivoValido = true;
                this.archivo = archivo;
            }

        }


    };

    subir = () => {
        this.cargaVideo = true;
        console.log(this.archivo);
        const data = this.formNombre.get('nombre')!.value;
        const separado = this.archivo.name.split('.');
        const ext = separado[separado.length - 1];
        const nombre = `${data}.${ext}`;

        const tam = this.archivo.size / 1024 / 1024;
        console.log(tam);
        let fd = new FormData();
        fd.set('archivo', this.archivo, nombre);
        fd.set('tipo', this.formNombre.get('tipo')!.value);
        this.videoService.subirVideo(fd).subscribe(res => {
            if (res.ok) {
                Swal.fire('Éxito.', 'Éxito al subir video.', 'success');
            } else {
                Swal.fire('Error.', 'Ha ocurrido un error al subir video', 'error');
            }
        }, err => {
            Swal.fire('Error.', 'Ha ocurrido un error al subir video', 'error');
        }, () => {
            this.cargaVideo = false;
        });
    };

}
