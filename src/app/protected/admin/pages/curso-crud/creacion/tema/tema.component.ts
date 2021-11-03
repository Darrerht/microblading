import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminCrusoService } from 'src/app/protected/admin/services/admin-cruso.service';
import { modules } from '../../creacion/modulos-quill';
import Swal from 'sweetalert2';
@Component({
    templateUrl: './tema.component.html',
    styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {

    modules = {};
    formTema = this.fb.group({
        nombre: [this.data.nombre, [Validators.required]],
        contenidoHTML: [this.data.contenidoHTML, [Validators.required]],
        videos: this.fb.array([])
    });
    
    get videos() {
        return this.formTema.get('videos') as FormArray;
    }
    constructor(private MatDialogRef: MatDialogRef<TemaComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private adminService: AdminCrusoService) { 
        this.modules = modules;
    }

    ngOnInit(): void {
    }
    addVideo = () => {
        this.videos.push(new FormControl(''));
    }
    removerVideo = () => {
        this.videos.removeAt(this.videos.length - 1);
    }
    editor = (event: any) => {
        console.log(event);
        
    };
    guardar = (data: any)=> {
        const {nombre, contenidoHTML, videos} = data;
        const model = {
            curso: data.curso,
            bloque: data.bloque,
            nombre,
            contenidoHTML,
            videos
        };
        console.log(data)
        this.adminService.crearTema(this.data.curso, this.data.bloque, this.data.orden, nombre, contenidoHTML, videos).subscribe(
            res => {
                if (res) {
                    Swal.fire('Éxito', 'Éxito al crear un nuevo tema.', 'success')
                }
            }, err => {
                Swal.fire('Ha ocurrido un error', 'Ha ocurrido un error', 'error')
            }, () => {this.MatDialogRef.close()}
        )
    }
}
