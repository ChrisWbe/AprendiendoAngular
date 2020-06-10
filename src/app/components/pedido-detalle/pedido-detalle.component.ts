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
    //Justo despues del ngOnChanges
  }

  eliminar(posicion:number){
    this.eliminarProducto.emit({id:posicion})
  }

  ngOnChanges(){
    //Funciona cuando el input es asignado por primera vez o cambia completamente
    console.log("Se asigno un valor al pedidoDetalle")
    this.pedidoDetalle.length = 0;
  }

  ngDoCheck(){
    //Se ejecuta cada vez que algún evento se produce, no se deben hacer tareas muy grandes
    
  }

  ngAfterViewInit(){
    //Cuando el contenido HTML ya ha sido renderizado, ya se puede acceder a cualquier elemento si se desea.

  }

  ngOnDestroy(){
    //Antes de que anglar alimine el componente del DOM

  }



}
