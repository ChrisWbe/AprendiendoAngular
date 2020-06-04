import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  articulos:Array<Articulos> = new Array<Articulos>();
  constructor(private ruta:Router, private usuarioInyectado:UsuarioService, private articuloInyectado:ArticulosService) { }

  ngOnInit() {
    this.articulos.push(
      {
        titulo:"Curso de net core",
        description:"Loremasdfasdfasdfasdfasdfgadfgsdfgasdfasdf",
        fecha:new Date(),
        usuario:`${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
      },
      {
        titulo:"Curso de Angular",
        description:"Loremasdfasdfasdfasdfasdfgadfgsdfgasdfasdf",
        fecha:new Date("04/25/2001"),
        usuario:`${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
      },
      {
        titulo:"Curso de Python",
        description:"Loremasdfasdfasdfasdfasdfgadfgsdfgasdfasdf",
        fecha:new Date("04/25/1993"),
        usuario:`${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
      },
    )
  }

  irAlDetalle(articulo:Articulos){
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('articulo-detalle');
  }

}
