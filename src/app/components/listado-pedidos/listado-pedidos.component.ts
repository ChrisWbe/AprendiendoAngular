import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/models/pedidos';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {
  listadoPedidos:Pedido[] = new Array<Pedido>()
  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit() {
    this.listadoPedidos = this.pedidosServicio.listadoPedidosLocalStorage
  }


}
