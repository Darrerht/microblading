import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AdminUserService } from '../../services/admin-user.service';

import { readUsuario, usuario } from 'src/app/protected/interfaces/user-crud.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDComponent } from './usuario-d/usuario-d.component';

@Component({
    selector: 'app-usuario-crud',
    templateUrl: './usuario-crud.component.html',
    styleUrls: ['./usuario-crud.component.scss']
})
export class UsuarioCrudComponent implements OnInit {
    usuarios: readUsuario = { total: 0, usuarios: [] };
    displayedColumns: string[] = ['nombre', 'correo', 'role', 'acciones'];
    resultsLength = 0;
    loading: boolean = true;
    limiteAlcanzado: boolean = false;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    actual = 0;
    dataSource: MatTableDataSource<usuario> = new MatTableDataSource<usuario>(this.usuarios.usuarios);
    pageEvent!: PageEvent;
    constructor(private userService: AdminUserService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.getUsuarios();
    }
    getUsuarios = (l: number = 0, h: number = 100) => {
        this.userService.getUsuarios(l, h).subscribe(res => {
            console.log(res);
            this.dataSource = new MatTableDataSource<usuario>(res.usuarios);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.usuarios = res;
            this.loading = false;
        });
    };

    eliminar = () => {
        this.userService.deleteUsuario('614fb47bf50a42c0528e8bc6')
    };
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    abrirEliminar = (data: any) => {
        const dialogRef = this.dialog.open(UsuarioDComponent, {
            data
        });
        dialogRef.afterClosed().subscribe(res => {
            this.getUsuarios();
        })
    };
}
