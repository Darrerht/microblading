import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminCrusoService } from 'src/app/protected/admin/services/admin-cruso.service';
import { bloque } from 'src/app/protected/interfaces/user-crud.interface';
import { TemaComponent as EdicionTema } from '../../edicion/tema/tema.component';
import { TemaComponent as CreacionTema } from '../../creacion/tema/tema.component';
import { BloqueComponent as CreacionBloque } from '../../creacion/bloque/bloque.component';
import { BloqueComponent as EdicionBloque } from '../../edicion/bloque/bloque.component';
import { CursoComponent as EdicionCurso } from '../../edicion/curso/curso.component';

@Component({
    templateUrl: './bloque.component.html',
    styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {


    estadoI: boolean = false;
    estadoII: boolean = false;
    estadoIII: boolean = false;
    bloques: bloque[] | undefined;




    constructor(private cursoService: AdminCrusoService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {

    }
    getBloques = () => {
        this.estadoI = false;
        this.cursoService.getBloques(this.data._id).subscribe(res => {
            
            if (res.bloque) {
                this.bloques = res.bloque;
                this.estadoI = true;
            }
            console.log('bloques', this.bloques);

        });
    };
    ngOnInit(): void {
        this.getBloques();
    }

    enviarBloque = (info: any) => {
        const { _id, curso, temas } = info;
        const data = {
            curso, bloque: _id, orden: temas.length + 1
        };
        console.log(data);
        const dialog = this.dialog.open(CreacionTema, {
            data
        });
        dialog.afterClosed().subscribe(res => {
            this.getBloques();
        });
    };

    enviarTema = (data: any) => {
        console.log(data);
        const dialog = this.dialog.open(EdicionTema, {
            data
        });
        dialog.afterClosed().subscribe(res => {
            this.getBloques();
        });
    };
    enviarCurso = (id: string) => {
        console.log(id);
        const dialog = this.dialog.open(CreacionBloque, {
            data: { curso: id, orden: this.bloques!.length + 1 }
        });
        dialog.afterClosed().subscribe(res => {
            this.getBloques();
        });
    };

    editarBloque = (data: any) => {
        const dialog = this.dialog.open(EdicionBloque, {
            data
        });
        dialog.afterClosed().subscribe(res => {
            this.getBloques();
        })
    }

    editarCurso = () => {
        console.log('DATATATA', this.data)
        const dialog = this.dialog.open(EdicionCurso, {
            data: this.data
        });
        dialog.afterClosed().subscribe(res => {
            this.getBloques();
            this.dialog.closeAll();
        })
    }
}
