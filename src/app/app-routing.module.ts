import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { UsuarixComponent } from './paginas/usuarix/usuarix.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HomeComponent } from './paginas/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { VerSesionesComponent } from './componentes/ver-sesiones/ver-sesiones.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { VerTurnosComponent } from './componentes/ver-turnos/ver-turnos.component';
import { TurnosPasadosComponent } from './componentes/turnos-pasados/turnos-pasados.component';
import { VerTurnosEspecialistaComponent } from './componentes/ver-turnos-especialista/ver-turnos-especialista.component';
import { SacarTurnoRecepcionistaComponent } from './componentes/sacar-turno-recepcionista/sacar-turno-recepcionista.component';
import { VerTurnosRecepcionistaComponent } from './componentes/ver-turnos-recepcionista/ver-turnos-recepcionista.component';
import { ConsultoriosComponent } from './componentes/consultorios/consultorios.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'usuarix', component: UsuarixComponent, canActivate: [AuthGuard],
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
  },
  {
    path: 'ver-sesiones', component: VerSesionesComponent, canActivate: [AuthGuard],
  },
  {
    path: 'registrar-admin', component: RegistrarAdminComponent, canActivate: [AuthGuard],
  },
  {
    path: 'graficos', component: GraficosComponent, canActivate: [AuthGuard],
  },
  {
    path: 'sacar-turno', component: SacarTurnoComponent, canActivate: [AuthGuard],
  },
  {
    path: 'ver-turnos', component: VerTurnosComponent, canActivate: [AuthGuard],
  },
  {
    path: 'turnos-pasados', component: TurnosPasadosComponent, canActivate: [AuthGuard],
  },
  {
    path: 'ver-turnos-especialista', component: VerTurnosEspecialistaComponent, canActivate: [AuthGuard],
  },
  {
    path: 'sacar-turno-recepcionista', component: SacarTurnoRecepcionistaComponent, canActivate: [AuthGuard],
  },
  {
    path: 'ver-turnos-recepcionista', component: VerTurnosRecepcionistaComponent, canActivate: [AuthGuard],
  },
  {
    path: 'consultorios', component: ConsultoriosComponent, canActivate: [AuthGuard],
  },
  {
    path: '**', component: ErrorComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
