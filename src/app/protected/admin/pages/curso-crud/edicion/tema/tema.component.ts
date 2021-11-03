import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { modules } from '../../creacion/modulos-quill';
import Swal from 'sweetalert2';
import { AdminCrusoService } from '../../../../services/admin-cruso.service';

@Component({
    templateUrl: './tema.component.html',
    styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {

    modules = {};
    formTema: FormGroup = this.fb.group({})

    get videos() {
        return this.formTema.get('videos') as FormArray;
    }

    constructor(private dialogRef: MatDialogRef<TemaComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private adminService: AdminCrusoService) { 
        this.modules = modules;
        this.formTema = this.fb.group({
            nombre: [this.data.nombre, [Validators.required]],
            contenidoHTML: [this.data.contenidoHTML, [Validators.required]],
            videos: this.fb.array(this.data.videos.map((video: any) => {
                return video;
            }))
        })
    }

    ngOnInit(): void {
        console.log(this.data);
        console.log(this.formTema)
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
    guardar = (data: any) => {
        console.log(data);
        const id = this.data._id;
        const {nombre, contenidoHTML, videos} = data;
        this.adminService.actualizarTema(id, nombre, contenidoHTML, videos).subscribe(res => {
            if (res.ok) {
                Swal.fire('Éxito', 'Éxito al actualizar el tema', 'success');
            } else {
                Swal.fire('Error', 'Ha ocurrido un error inesperado', 'error');
            }
            this.dialogRef.close();
        })
    }
    

}
