import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
            },
            {
                path: '**', redirectTo: ''
            } 
        ]
    },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProtectedRoutingModule { }
