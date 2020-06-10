import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedidos';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidoDetalle } from 'src/app/models/pedidoDetalle';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedido: Pedido = new Pedido();


  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit() {
    this.pedido = this.pedidosServicio.pedido;
    /* let pedido: Pedido = new Pedido();
    pedido.clienteId=1;
    pedido.pedidoId=1;
    pedido.nombreCliente="Juan";
    pedido.total=1500;
    pedido.pedidoDetalle.push(
      {
        productoId:1,
        nombreProducto:"Maiz",
        cantidad:5,
        precio:15,
        total:75
      },
      {
        productoId:2,
        nombreProducto:"Agua",
        cantidad:5,
        precio:15,
        total:75
      },
      {
        productoId:3,
        nombreProducto:"Coca Cola",
        cantidad:5,
        precio:15,
        total:75
      },
      {
        productoId:4,
        nombreProducto:"Arroz",
        cantidad:5,
        precio:20,
        total:75
      },
    )
    console.log(pedido); */

  }

  calcularTotal(posicion:number){
    this.pedidosServicio.pedido.actualizarCantidades(posicion)
    this.pedidosServicio.guardarLocalStorage()
    //this.pedidosServicio.pedido.pedidoDetalle[posicion].total = this.pedidosServicio.pedido.pedidoDetalle[posicion].cantidad*this.pedidosServicio.pedido.pedidoDetalle[posicion].precio
  }

  guardar(){
    this.pedidosServicio.guardarPedido()
  }

  eliminar(posicion:number){
    this.pedidosServicio.pedido.pedidoDetalle.splice(posicion, 1)
    this.pedidosServicio.guardarLocalStorage()
  }

}
