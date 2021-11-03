import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/services/loader/loader.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

    registerForm: FormGroup = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private loaderService: LoaderService) { }

    register() {
        this.loaderService.loader(true);
        const { correo, nombre, password } = this.registerForm.value;
        this.authService.create(nombre, correo, password).subscribe((res: any) => {
            const { error, ...resto } = res;
            if (error) {
                this.loaderService.loader(false);
                Swal.fire('Ha ocurrido un error', error.msg, 'error');
            } else {
                this.router.navigate(['/dashboard']);
            }
        });
    }


}
