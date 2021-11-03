import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminUserService } from '../../../services/admin-user.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  templateUrl: './usuario-d.component.html',
  styleUrls: ['./usuario-d.component.scss']
})
export class UsuarioDComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsuarioDComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private userService: AdminUserService) { }

  ngOnInit(): void {
      console.log('dialogdata', this.data)
  }

  cerrar = () => {
      this.dialogRef.close();
  }
  confirmar = () => {
      this.userService.deleteUsuario(this.data.uid).subscribe(res => {
        let t1 = '';
        let t2 = '';
        let t3: SweetAlertIcon = 'success';
        if (res.ok) {
            t1 = 'Éxito';
            t2 = `Éxito al eliminar al usuario ${res.correo}`;
            t3 = 'success';
        } else {
            t1 = 'Ha ocurrido un error';
            t2 = res.error.errors[0].msg;
            t3 = 'error';
        }
        this.dialogRef.close();
        Swal.fire(t1, t2, t3);
    });
  }

}
