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
  }

  
}
