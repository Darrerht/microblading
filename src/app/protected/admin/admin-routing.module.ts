import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { UsuarioCrudComponent } from './pages/usuario-crud/usuario-crud.component';
import { CursoCrudComponent } from './pages/curso-crud/curso-crud.component';
import { TareasCrudComponent } from './pages/tareas-crud/tareas-crud.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'usuarios',
                component: UsuarioCrudComponent
            },
            {
                path: 'cursos',
                component: CursoCrudComponent
            },
            {
                path: 'tareas',
                component: TareasCrudComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
