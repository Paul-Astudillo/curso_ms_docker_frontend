import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-registrarprofesor',
  templateUrl: './registrarprofesor.component.html',
  styleUrls: ['./registrarprofesor.component.scss']
})
export class RegistrarprofesorComponent {


  profesor:Profesor=new Profesor();
  

  // constructor(private profesorService: ProfesorService,
  //   private router: Router) {
  
  //     let params = this.router.getCurrentNavigation()?.extras.queryParams;
  //     if(params){
  //       console.log(params)
  //       this.profesor= new Profesor()
  //       this.profesor = params['contacto']
  //     }
  //   }
  
  
    // guardar(){
    //   console.log(this.profesor)
    //   this.profesorService.save(this.profesor).subscribe((data)=>{
    //     console.log("resultado POST: ", data)
    //     this.router.navigate(["paginas/listadoProfesores"]);
    //   })
    //   this.profesor= new Profesor()
  
    // }


}
