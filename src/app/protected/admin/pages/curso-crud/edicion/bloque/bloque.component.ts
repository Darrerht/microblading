import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminCrusoService } from 'src/app/protected/admin/services/admin-cruso.service';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './bloque.component.html',
    styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {
    formBloque: FormGroup = this.fb.group({
        nombre: [this.data.nombre, [Validators.required]]
    });
    constructor(private MatDialogRef: MatDialogRef<BloqueComponent>, private fb: FormBuilder, private cursoService: AdminCrusoService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }
    ngOnInit(): void {
        console.log('datos', this.data);
    }

    guardar = (data: any) => {
        const {nombre} = data;
        this.cursoService.actualizarBloque(this.data._id, nombre).subscribe((res: any) => {
            if (res.ok) {
                Swal.fire('Éxito', `Éxito al actualizar el bloque #${this.data.orden}`, 'success');
            } else {
                
            }
        }, err => {Swal.fire('Error', `Ha ocurrido un error al actualizar el bloque #${this.data.orden}`, 'error');}, () => {
            this.MatDialogRef.close();
        } )
    };
}
