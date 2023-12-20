import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarprofesorComponent } from './pages/registrarprofesor/registrarprofesor.component';
import { RegistrarcursoComponent } from './pages/registrarcurso/registrarcurso.component';
import { ListarprofesorComponent } from './pages/listarprofesor/listarprofesor.component';
import { ListarcursoComponent } from './pages/listarcurso/listarcurso.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarprofesorComponent,
    RegistrarcursoComponent,
    ListarprofesorComponent,
    ListarcursoComponent,
    TituloComponent,
    MenuComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
