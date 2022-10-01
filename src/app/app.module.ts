import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './website/layout/layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { DashboardComponent } from './website/pages/dashboard/dashboard.component';
import { AgendaComponent } from './website/pages/agenda/agenda.component';
import { NotasComponent } from './website/pages/notas/notas.component';
import { PresupuestoComponent } from './website/pages/presupuesto/presupuesto.component';
import { ProyectosComponent } from './website/pages/proyectos/proyectos.component';
import { CuentasComponent } from './website/pages/cuentas/cuentas.component';
import { CloudComponent } from './website/pages/cloud/cloud.component';
import { LoginComponent } from './website/auth/login/login.component';


//MATERIAL MODULES
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GastosMensualesComponent } from './website/pages/presupuesto/gastos-mensuales/gastos-mensuales.component';
import { MovimientosComponent } from './website/pages/presupuesto/movimientos/movimientos.component';
import { AhorroComponent } from './website/pages/presupuesto/ahorro/ahorro.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoModalComponent } from './website/pages/presupuesto/gastos-mensuales/gasto-modal/gasto-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    DashboardComponent,
    AgendaComponent,
    NotasComponent,
    PresupuestoComponent,
    ProyectosComponent,
    CuentasComponent,
    CloudComponent,
    LoginComponent,
    GastosMensualesComponent,
    MovimientosComponent,
    AhorroComponent,
    GastoModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
