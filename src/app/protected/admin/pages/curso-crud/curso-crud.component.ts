import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';
import BlotFormatter from 'quill-blot-formatter';
Quill.register('modules/blotFormatter', BlotFormatter);
import Swal from 'sweetalert2';
import 'quill-emoji/dist/quill-emoji.js';
import { AdminCrusoService } from '../../services/admin-cruso.service';
import { cursos } from '../../../interfaces/curso-crud.interface';
import { MatDialog } from '@angular/material/dialog';
import { BloqueComponent } from './lectura/bloque/bloque.component';
import { CursoComponent as CreacionCurso } from './creacion/curso/curso.component';

@Component({
    selector: 'app-curso-crud',
    templateUrl: './curso-crud.component.html',
    styleUrls: ['./curso-crud.component.scss']
})
export class CursoCrudComponent implements OnInit {
    modules = {};
    content = '';
    spinnerCarga: boolean = true;
    cursos: cursos = { total: undefined, msg: undefined, productos: undefined };
    constructor(private cursoService: AdminCrusoService, public dialog: MatDialog) {
        this.modules = {
            'emoji-shortname': true,
            'emoji-textarea': false,
            'emoji-toolbar': true,
            blotFormatter: {
                // empty object for default behaviour.
            },
            'toolbar': {
                container: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction

                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],

                    ['clean'],                                         // remove formatting button

                    ['link', 'image', 'video'],                         // link and image, video
                    ['emoji'],
                ],
                handlers: { 'emoji': function () { } },

            }
        };
    }

    ngOnInit(): void {
        this.getCursos();
    }
    getCursos = () => {
        this.cursoService.getCursos().subscribe(res => {
            console.log(res);
            this.spinnerCarga = false;
            this.cursos = res;
        });
    };

    editor(e: any) {
        console.log(e);
        this.content = e.html;
    }
    abrirModal = (curso: any) => {
        console.log(curso);
        const { _id, nombre, fechaInicio, fechaFinal, descripcion, costo } = curso;
        const dialogRef = this.dialog.open(BloqueComponent, {
            data: { _id, nombre, fechaInicio, fechaFinal, descripcion },
            width: '90vw',
            maxWidth: '100vw',
            height: '90vh',
            maxHeight: '100vh'
        });
        dialogRef.afterClosed().subscribe(res => {
            this.spinnerCarga = true;
            this.getCursos();
        });
    };
    activar = (curso: any) => {
        console.log(curso);
        this.spinnerCarga = true;
        this.cursoService.activarCurso(curso._id, !curso.disponible).subscribe(res => {
            if (res.ok) {
                Swal.fire('Éxito', `Éxito al actualizar el curso ${curso.nombre}`, 'success');
            } else {
                Swal.fire('Error', `Ha ocurrido un error al actualizar el curso ${curso.nombre}`, 'error');
            }

        }, (err) => {
            Swal.fire('Error', `Ha ocurrido un error al actualizar el curso ${curso.nombre}`, 'error');
        }, () => {
            this.getCursos();
        });
    };
    crearCurso = () => {
        const dialogRef = this.dialog.open(CreacionCurso, {
            width: '90vw',
            maxWidth: '100vw',
            height: '90vh',
            maxHeight: '100vh'
        });
        dialogRef.afterClosed().subscribe(res => {
            this.spinnerCarga = true;
            this.getCursos();
        });
    };
}
