import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoDetalle } from 'src/app/models/pedido-detalle';


@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {

  @Input() pedidoDetalle:PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() eliminarProducto = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  eliminar(posicion:number){
    this.eliminarProducto.emit({id:posicion})
  }

}
