import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulos';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  nombre:string;
  precio:number;
  constructor(private ruta:ActivatedRoute) { //se inyecta la ruta

  }

  ngOnInit() {
    this.nombre = this.ruta.snapshot.params.nombre;
    this.precio = this.ruta.snapshot.params.precio;
    console.log(this.ruta.snapshot.params.nombre);
  }

}
