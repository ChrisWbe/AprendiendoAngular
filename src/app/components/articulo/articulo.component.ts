import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos:Array<Articulo> = new Array<Articulo>();
  constructor(private ruta:Router) { }

  ngOnInit() {
    this.articulos.push(
      {
        nombre:"Televisor de 24 pulgadas",
        desciption:"4 Años de garantía",
        precio: 1500,
        stock:10,
        precioMayorista:1400
      },
      {
        nombre:"asdf",
        desciption:"asdfasd",
        precio:500,
        stock:80,
        precioMayorista:5000
      },
      {
        nombre:"LG",
        desciption:"asdfasd",
        precio:800,
        stock:500,
        precioMayorista:7000
      },
      {
        nombre:"Samsung",
        desciption:"asdfasd",
        precio:900,
        stock:20,
        precioMayorista:80000
      }
    )
  }

  pasarArticulo(articuloRecibido:Articulo){
    console.log(articuloRecibido)
    this.ruta.navigate(['articuloDetalle2', {articulo: JSON.stringify(articuloRecibido)}])
  }

}
