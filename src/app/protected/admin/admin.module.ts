import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HTMLSanitizerPipe } from './pipes/html.pipe';
import { UsuarioCrudComponent } from './pages/usuario-crud/usuario-crud.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from '../../material';
import { UsuarioDComponent } from './pages/usuario-crud/usuario-d/usuario-d.component';
import { UsuarioUComponent } from './pages/usuario-crud/usuario-u/usuario-u.component';
import { CursoCrudComponent } from './pages/curso-crud/curso-crud.component';
import { TareasCrudComponent } from './pages/tareas-crud/tareas-crud.component';
import { QuillModule } from 'ngx-quill';
import { BloqueComponent as CreacionBloque } from './pages/curso-crud/creacion/bloque/bloque.component';
import { BloqueComponent as EdicionBloque } from './pages/curso-crud/edicion/bloque/bloque.component';
import { BloqueComponent as LecturaBloque } from './pages/curso-crud/lectura/bloque/bloque.component';
import { TemaComponent as EdicionTema } from './pages/curso-crud/edicion/tema/tema.component';
import { TemaComponent as CreacionTema } from './pages/curso-crud/creacion/tema/tema.component';
import { CursoComponent as  EdicionCurso} from './pages/curso-crud/edicion/curso/curso.component';
import { CursoComponent as CreacionCurso } from './pages/curso-crud/creacion/curso/curso.component';



@NgModule({
  declarations: [
    UsuarioCrudComponent,
    MainComponent,
    UsuarioDComponent,
    UsuarioUComponent,
    CursoCrudComponent,
    CreacionBloque,
    EdicionBloque,
    LecturaBloque,
    EdicionTema,
    CreacionTema,
    HTMLSanitizerPipe,
    EdicionCurso,
    CreacionCurso,
    TareasCrudComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    QuillModule
  ]
})
export class AdminModule { }
