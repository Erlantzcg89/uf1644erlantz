import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: "/inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
