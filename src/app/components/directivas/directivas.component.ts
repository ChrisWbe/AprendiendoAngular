import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre:string,
  stock:number,
  fabricante:string,
  fechaVence:Date
  
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  cargando:boolean = true;

  nombres:Array<string> = ["Maria", "Ana", "Juan", "Pedro"];
  productos:Array<Productos>=[
    {
      nombre:"Arroz",
      stock:100,
      fabricante:"Diana",
      fechaVence:new Date('04/15/2020')
    },
    {
      nombre:"Maíz",
      stock:25,
      fabricante:"Hola",
      fechaVence:new Date('04/15/2021')
    },
    {
      nombre:"Refresco",
      stock:200,
      fabricante:"Pepsi",
      fechaVence:new Date('04/15/2019')
    },
  ]

  pestana:string ="";

  mostrarCuadrado:boolean=false;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.cargando=false;
    }, 5000)
  }

  alternar(){
    this.cargando = !this.cargando;
  }

  cambiarPestana(pestana:string){
    this.pestana=pestana;
  }

  alternarCuadrado(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }

}
