import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-listarprofesor',
  templateUrl: './listarprofesor.component.html',
  styleUrls: ['./listarprofesor.component.scss']
})
export class ListarprofesorComponent {
  listadoProfesores: Profesor[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
  // constructor(private profesorService:ProfesorService,private router: Router ) {
  //   this.profesorService.getAll().subscribe(
  //     (data: Profesor[]) => {
  //       this.listadoProfesores = data
  //     }
  //   )
  // }

}
