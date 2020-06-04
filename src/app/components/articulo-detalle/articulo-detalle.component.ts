import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulos } from 'src/app/models/articulos';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo:Articulos = new Articulos();
  constructor(private articuloInyectado:ArticulosService) { 
    this.articulo = articuloInyectado.articulo;
  }

  ngOnInit() {
  }

}
