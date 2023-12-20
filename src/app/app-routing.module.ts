import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarcursoComponent } from './pages/listarcurso/listarcurso.component';
import { ListarprofesorComponent } from './pages/listarprofesor/listarprofesor.component';
import { RegistrarcursoComponent } from './pages/registrarcurso/registrarcurso.component';
import { RegistrarprofesorComponent } from './pages/registrarprofesor/registrarprofesor.component';

const routes: Routes = [
  {path:"paginas/listarprofesor", component:ListarprofesorComponent},
  {path:"paginas/listarcurso", component:ListarcursoComponent},
  {path:"paginas/registrarprofesor", component:RegistrarprofesorComponent},
  {path:"paginas/registrarcurso", component:RegistrarcursoComponent},
  {path:"", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
