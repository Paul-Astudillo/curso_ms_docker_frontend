import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

const urlbase = "http://localhost:8090/ms/curso/"
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(private http: HttpClient){}

 

  save(curso:Curso){

    console.log("Servicio POST")
    console.log("curso: "+curso.id)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(curso), {headers})
    
  }
  getAll(): Observable<Curso[]>{
     return this.http.get<Curso[]>(urlbase+"all")
  }
}
