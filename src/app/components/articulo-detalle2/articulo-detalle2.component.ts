import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulos';

@Component({
  selector: 'app-articulo-detalle2',
  templateUrl: './articulo-detalle2.component.html',
  styleUrls: ['./articulo-detalle2.component.css']
})
export class ArticuloDetalle2Component implements OnInit {
  articulo:Articulo
  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo)
    
  }

}
