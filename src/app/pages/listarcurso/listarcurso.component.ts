import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.scss']
})
export class ListarcursoComponent {

  listadoCurso: Curso[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
   constructor(private cursoService:CursoService,private router: Router ) {
     this.cursoService.getAll().subscribe(
       (data: Curso[]) => {
         this.listadoCurso = data
       }
     )
   }
    

}
