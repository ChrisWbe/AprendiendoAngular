import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedidos';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedidoDetalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido:Pedido = new Pedido();

  constructor() { 
    this.pedido = this.ultimoPedido;
  }
  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))
  }

  guardarPedido(){
    let listadoPedidos:Pedido[] = new Array<Pedido>();
    listadoPedidos = this.listadoPedidosLocalStorage
    this.pedido.pedidoId = listadoPedidos.length+1
    listadoPedidos.push(this.pedido)
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))
    localStorage.removeItem("ultimoPedido")
    this.pedido = new Pedido(null);
  }

  get ultimoPedido():Pedido{
    let pedidoLocalStorage:Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")));
    if(pedidoLocalStorage == null){
      return new Pedido()
    }
    return pedidoLocalStorage
    
  }

  get listadoPedidosLocalStorage():Pedido[]{
    //debugger
    let pedidos:Pedido[] = JSON.parse(localStorage.getItem("pedidos"))
    if(pedidos==null){
      return new Array<Pedido>()
    }
    return pedidos.sort((a,b)=> b.pedidoId - a.pedidoId);
  }

  
}
