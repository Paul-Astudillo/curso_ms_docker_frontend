import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

const urlbase = "localhost:8082/microservicios-rs/api/cursos/"
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(private http: HttpClient){}

 

  save(curso:Curso){

    console.log("Servicio POST")
    console.log("curso: "+curso.id)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"nuevocurso", JSON.stringify(curso), {headers})
    
  }
  getAll(): Observable<Curso[]>{
     return this.http.get<Curso[]>(urlbase+"all")
  }
}
