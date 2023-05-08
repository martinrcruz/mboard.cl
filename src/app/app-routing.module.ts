import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NotFoundComponent } from './components/misc/handlers/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard], //desactivated for dev purpouse
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/menu.module')
                    .then(m => m.MenuModule),
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**', //not found
        component: NotFoundComponent,
      },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }