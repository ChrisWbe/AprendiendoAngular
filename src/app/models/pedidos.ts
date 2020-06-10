import { PedidoDetalle } from './pedidoDetalle';
import { Productos } from './productos';

export class Pedido{
    clienteId:number;
    pedidoId:number;
    nombreCliente:string;
    total:number;
    pedidoDetalle:Array<PedidoDetalle>;

    constructor(datos?:Pedido){
        if(datos!=null){
            this.clienteId=datos.clienteId
            this.pedidoId=datos.pedidoId;
            this.nombreCliente=datos.nombreCliente;
            this.total=datos.total;
            this.pedidoDetalle=datos.pedidoDetalle;
            return;
        }
        this.clienteId=this.clienteId;
        this.pedidoId=this.pedidoId;
        this.nombreCliente=this.nombreCliente;
        this.total=this.total;
        this.pedidoDetalle=new Array<PedidoDetalle>();
    }

    agregarProducto(producto:Productos){
        let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
        pedidoDetalle.cantidad = 1
        pedidoDetalle.nombreProducto = producto.nombre;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.productoId = producto.productoId;
        pedidoDetalle.total = pedidoDetalle.cantidad*pedidoDetalle.precio;

        //Validación de existencia
        let existe:number = this.pedidoDetalle.filter(x=>x.productoId == producto.productoId).length
        if(existe>0){
            let posicion:number = this.pedidoDetalle.findIndex(x=>x.productoId == producto.productoId)
            this.pedidoDetalle[posicion].cantidad++;
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad*this.pedidoDetalle[posicion].precio
        }else{
            this.pedidoDetalle.push(pedidoDetalle)
        }
        this.actualizarTotal();
    
    }

    private actualizarTotal(){
        this.total = 0;
        for(let producto of this.pedidoDetalle){
            this.total+=producto.total
        }
    }

    public actualizarCantidades(posicion:number){
        this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad*this.pedidoDetalle[posicion].precio
        this.actualizarTotal()
    }


}