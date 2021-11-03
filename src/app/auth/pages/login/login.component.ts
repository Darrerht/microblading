import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { LoaderService } from '../../../shared/services/loader/loader.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup = this.fb.group({
        correo: ['a1@test.com', [Validators.required, Validators.email]],
        password: ['$Aa123', [Validators.required]],
    });
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private loadService: LoaderService
    ) { }

    login = () => {
        this.loadService.loader(true);
        console.log(this.loginForm.value);
        const { correo, password } = this.loginForm.value;
        this.authService.login(correo, password).subscribe((res: any) => {
            const { error, ...resto } = res;
            if (error) {
                this.loadService.loader(false);
                Swal.fire('Credenciales Incorrectas', error.msg, 'error');
            } else {
                this.router.navigate(['/dashboard']);
            }
        });
    };
}
