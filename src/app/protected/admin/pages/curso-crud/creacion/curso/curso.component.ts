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
        nombre: ['', [Validators.required]],
        categoria: ['616643e1b2712d5b0e351e13', [Validators.required]],
        descripcion: ['', [Validators.required]],
        precio: [1, [Validators.required]],
        fechaInicio: [new Date(), [Validators.required]],
        fechaFinal: [new Date(), [Validators.required]]
    });
  constructor(private dialogRef: MatDialogRef<CursoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private adminService: AdminCrusoService) { }

  ngOnInit(): void {
  }
  guardar = (curso: any) => {
    console.log(curso);
    const {nombre, categoria, descripcion, precio, fechaInicio, fechaFinal} = curso;
    this.adminService.crearCurso(nombre, categoria, precio, descripcion, fechaInicio, fechaFinal).subscribe(res => {
        if (res.ok) {
            Swal.fire('Éxito', `Éxito al crear el curso ${curso.nombre}`)
        } else {
            Swal.fire('Error', `Ha ocurrio un error al crear el curso ${curso.nombre}`)
        }
    }, (err) => {
        Swal.fire('Error', `Ha ocurrio un error al crear el curso ${curso.nombre}`)
    }, () => {
        this.dialogRef.close();
    })
  }
}
