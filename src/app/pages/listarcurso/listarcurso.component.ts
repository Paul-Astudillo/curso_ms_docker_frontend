import { Component } from '@angular/core';
import { Curso } from 'src/app/model/curso';


@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.scss']
})
export class ListarcursoComponent {

  listadoCurso: Curso[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
  // constructor(private cursoService:CursoService,private router: Router ) {
  //   this.cursoService.getAll().subscribe(
  //     (data: Curso[]) => {
  //       this.listadoCurso = data
  //     }
  //   )
  // }
    

}
