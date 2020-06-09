import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedidos';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit() {
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

}
