import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedido:Pedido = new Pedido();
  @ViewChild('buscador', {static:true}) buscador: ElementRef
  constructor() { }

  ngOnInit() {
    this.pedido.cliente="Christian";
    this.pedido.direccion="Dirección";
  }

  ngDoCheck(){
    console.log("Realizaste algo")
  }

  ngAfterViewInit(){
    console.log(this.buscador)
    this.buscador.nativeElement.focus()
  }

  ngOnDestroy(){
    Swal.fire(
      {
        title:"Estás abandonando los pedidos"
      }
    )
  }


  agregarProducto(){
    
    this.pedido.pedidoDetalle.push(
      {
        cantidad:20,
        precio:15,
        producto:"Agua",
        total:10
      }
    )
    Swal.fire(
      {
        title:"Producto Agregado",
        text:"Se agregó correctamente",
        icon:"success",
      }
    )
  }

  eliminarProducto(event:any){
    console.log(event)
    this.pedido.pedidoDetalle.splice(event.id, 1)
    Swal.fire(
      {
        title:"Producto Eliminado",
        text:"Se eliminó correctamente",
        icon:"warning"
      }
    )
  }

}
