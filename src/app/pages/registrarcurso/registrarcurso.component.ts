import { Component } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { Profesor } from 'src/app/model/profesor';

@Component({
  selector: 'app-registrarcurso',
  templateUrl: './registrarcurso.component.html',
  styleUrls: ['./registrarcurso.component.scss']
})
export class RegistrarcursoComponent {

  curso:Curso=new Curso();
  listadoProfesores: Profesor[] = [];
  profesorSeleccionado: Profesor | null = null;

  // constructor(private cursoService: CursoService,private profesorService:ProfesorService,
  //   private router: Router) {
  
  //     let params = this.router.getCurrentNavigation()?.extras.queryParams;
  //     if(params){
  //       console.log(params)
  //       this.curso= new Curso()
  //       this.curso = params['contacto']
  //     }
  //     this.profesorService.getAll().subscribe(
  //       (data: Profesor[]) => {
  //         this.listadoProfesores = data
  //       }
  //     )

      
  //   }
  
  
  //   guardar(){
     
  //     this.curso.profesor = this.profesorSeleccionado
  //     console.log(this.curso)
  //     this.cursoService.save(this.curso).subscribe((data)=>{
  //       console.log("resultado POST: ", data)
  //       this.router.navigate(["paginas/listadoCursos"]);
  //     })
  //     this.curso= new Curso();
  //     //this.seleccionarProfesor
      
  
  //   }

}
