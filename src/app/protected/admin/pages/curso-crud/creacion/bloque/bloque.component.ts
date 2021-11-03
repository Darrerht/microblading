import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminCrusoService } from 'src/app/protected/admin/services/admin-cruso.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './bloque.component.html',
    styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {

    formBloque: FormGroup = this.fb.group({
        nombre: ['', [Validators.required]]
    })
    
    constructor(private MatDialogRef: MatDialogRef<BloqueComponent>, private fb: FormBuilder, private cursoService: AdminCrusoService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    }
    ngOnInit(): void {
        console.log(this.data)
    }

    guardar = (data:any) => {
        console.log(data)
        const {nombre} = data;
        this.cursoService.crearBloque(this.data.curso, this.data.orden, nombre).subscribe((res: any) => {
            if (res.ok) {
                Swal.fire('Éxito', 'Bloque creado exitosamente.', 'success')
            } else {
                Swal.fire('Ha ocurrido un error', 'Ha ocurrido un error al crear el bloque.', 'error')
            }
        }, err => Swal.fire('Ha ocurrido un error', 'Ha ocurrido un error al crear el bloque.', 'error'), () => this.MatDialogRef.close())
    }
}
