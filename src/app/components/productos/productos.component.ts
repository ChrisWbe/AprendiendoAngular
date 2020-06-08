import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();
  constructor(public productosServicio:ProductosService) { }

  ngOnInit() {
    this.productos = this.productosServicio.productosLocalStorage
  }

  buscarProductos(event){
    this.productos = this.productosServicio.productosLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
  }

}
