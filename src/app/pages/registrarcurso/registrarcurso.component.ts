import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/services/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrarcurso',
  templateUrl: './registrarcurso.component.html',
  styleUrls: ['./registrarcurso.component.scss']
})
export class RegistrarcursoComponent {

  curso:Curso=new Curso();
  //listadoProfesores: Profesor[] = [];
  //profesorSeleccionado: Profesor | null = null;

constructor(private cursoService: CursoService,
   private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
     this.curso= new Curso()
      this.curso = params['contacto']
    }
  

      
     }
  
  
   guardar(){
     
      
      console.log(this.curso)
      this.cursoService.save(this.curso).subscribe((data)=>{
       console.log("resultado POST: ", data)
       this.router.navigate(["paginas/listarcurso"]);
    })
      this.curso= new Curso();
     
      
  
    }

}
