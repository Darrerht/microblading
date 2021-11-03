import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { MatSidenav } from '@angular/material/sidenav';
import {
    BreakpointObserver,
    BreakpointState
} from '@angular/cdk/layout';
import { menu } from '../../interfaces/menu.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    @ViewChild('menu') sideNav!: MatSidenav;
    menus: any;

    get usuario() {
        return this.authService.usuario;
    }
    constructor(private authService: AuthService, private router: Router, private loaderService: LoaderService, private cd: ChangeDetectorRef, public bo: BreakpointObserver) {
        this.loaderService.loader(false);
        this.menus = menu.menus.filter(menu => menu.permiso.includes(this.usuario.role))
        console.log('menus',this.menus)
    }

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        this.bo.observe(['(min-width: 500px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.sideNav.opened = true;
                this.sideNav.mode = 'side';
                this.cd.detectChanges();
            } else {
                this.sideNav.opened = false;
                this.sideNav.mode = 'over';
                this.cd.detectChanges();
            }
        });
    }

    navegar = () => {
        this.router.navigate(['/dashboard/admin']);
    };
    logOut = () => {
        this.router.navigate(['/auth']);
        this.authService.logOut();
    };

}
