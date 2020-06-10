import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/models/productos';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();
  constructor(public productosServicio:ProductosService, public pedidosServicio:PedidosService) { }

  ngOnInit() {
    this.productos = this.productosServicio.productosLocalStorage
  }

  buscarProductos(event){
    this.productos = this.productosServicio.productosLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
  }

  agregar(producto:Productos){
    this.pedidosServicio.pedido.agregarProducto(producto)
    this.pedidosServicio.guardarLocalStorage();
    alert("Producto Agregado")
    console.log(this.pedidosServicio.pedido)
  }

}
