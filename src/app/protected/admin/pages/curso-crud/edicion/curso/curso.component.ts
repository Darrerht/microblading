import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminCrusoService } from 'src/app/protected/admin/services/admin-cruso.service';
import Swal from 'sweetalert2';
@Component({
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {


    formCurso: FormGroup = this.fb.group({
        nombre: [this.data.nombre, [Validators.required]],
        categoria: ['616643e1b2712d5b0e351e13', [Validators.required]],
        descripcion: [this.data.descripcion, [Validators.required]],
        precio: [1, [Validators.required]],
        fechaInicio: [this.data.fechaInicio, [Validators.required]],
        fechaFinal: [this.data.fechaFinal, [Validators.required]]
    });
    constructor(private dialogRef: MatDialogRef<CursoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private adminService: AdminCrusoService) { }

    ngOnInit(): void {
        console.log('dadada', this.data)
    }

    guardar = (data: any) => {
        let {nombre, descripcion, fechaInicio, fechaFinal} = data;
        
        fechaInicio = new Date(fechaInicio);
        fechaFinal = new Date(fechaFinal);
        fechaFinal.setHours(23,59,59,0)
        fechaInicio = fechaInicio.toISOString()
        fechaFinal = fechaFinal.toISOString()
        this.adminService.actualizarCurso(this.data._id, nombre, descripcion, fechaInicio, fechaFinal, '616643e1b2712d5b0e351e13').subscribe((res: any) => {
            if (!res.msg) {
                Swal.fire('Éxito', `Éxito al actualizar curso ${this.data.nombre}`, 'success')
            } else {
                Swal.fire('Éxito', `Ha ocurrido un error al actualizar curso ${this.data.nombre}`, 'error')
            }
        }, err=>Swal.fire('Éxito', `Ha ocurrido un error al actualizar curso ${this.data.nombre}`, 'error'), () => {
            this.dialogRef.close();
        })
    }
}
