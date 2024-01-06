
import { Profesor } from "./profesor";

export class Curso {
    id?: number;
    nombre: string = '';
    descripcion: string = '';
    estado: string = '';
    duracion: number = 0;
   //profesor: Profesor | null = null; // Asigna un profesor al curso
  }