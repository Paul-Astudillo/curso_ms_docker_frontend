import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarprofesorComponent } from './pages/registrarprofesor/registrarprofesor.component';
import { RegistrarcursoComponent } from './pages/registrarcurso/registrarcurso.component';
import { ListarprofesorComponent } from './pages/listarprofesor/listarprofesor.component';
import { ListarcursoComponent } from './pages/listarcurso/listarcurso.component';
import { TituloComponent } from './template/titulo/titulo.component';
import { MenuComponent } from './template/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarprofesorComponent,
    RegistrarcursoComponent,
    ListarprofesorComponent,
    ListarcursoComponent,
    TituloComponent,
    MenuComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
