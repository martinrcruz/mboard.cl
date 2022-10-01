import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './website/layout/layout.component';
import { AgendaComponent } from './website/pages/agenda/agenda.component';
import { CloudComponent } from './website/pages/cloud/cloud.component';
import { CuentasComponent } from './website/pages/cuentas/cuentas.component';
import { DashboardComponent } from './website/pages/dashboard/dashboard.component';
import { NotasComponent } from './website/pages/notas/notas.component';
import { PresupuestoComponent } from './website/pages/presupuesto/presupuesto.component';
import { ProyectosComponent } from './website/pages/proyectos/proyectos.component';


const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    data: {
        title: 'Home'
    },
    children: [{
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        }, {
            path: 'agenda',
            component: AgendaComponent
        }, {
            path: 'notas',
            component: NotasComponent
        }, {
            path: 'presupuesto',
            component: PresupuestoComponent
        }, {
            path: 'proyectos',
            component: ProyectosComponent
        }, {
            path: 'cuentas',
            component: CuentasComponent
        }, {
            path: 'cloud',
            component: CloudComponent
        },
    ],
}, ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}