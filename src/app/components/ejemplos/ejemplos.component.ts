import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string;
  apellido:string;
  excelencia:boolean;
  constructor(){
    
  }

}

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {
  alumno: Alumno = new Alumno();
  listadoAlumnos:Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit() {
  }

  agregar(){
    console.log(`${this.alumno.nombre} ${this.alumno.apellido}`);
    this.listadoAlumnos.push({
      nombre:this.alumno.nombre,
      apellido:this.alumno.apellido,
      excelencia:this.alumno.excelencia,
    });
    this.alumno.nombre="";
    this.alumno.apellido="";
    this.alumno.excelencia=false;
    console.log(this.listadoAlumnos)
  }

  alumnoExcelente(excelencia:boolean){
    return{
      "excelente":excelencia,
      "regular":!excelencia
    }
  }

}
