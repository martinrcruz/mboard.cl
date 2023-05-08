import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { LoginComponent } from './pages/auth/login/login.component';


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
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { AccountSettingsComponent } from './pages/auth/account-settings/account-settings.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { NotFoundComponent } from './components/misc/handlers/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { environment } from 'src/environments/environment';
import { TableComponent } from './components/ui-components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    DashboardComponent,
    CuentasComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AccountSettingsComponent,
    ProfileComponent,
    LogoutComponent,
    NotFoundComponent,
    TableComponent,
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
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: environment.xsrfTokenCookieName,
      headerName: environment.xsrfTokenHeaderName
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(environment.jwtTokenStorageKey);
        }
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
      AuthService,
      AuthGuard,
      JwtHelperService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      { 
        provide: 'API_BASE_URL', 
        useValue: environment.authApi 
      },
      {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: { hasBackdrop: true } 
      }

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
