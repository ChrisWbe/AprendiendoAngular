import { PedidoDetalle } from './pedidoDetalle';

export class Pedido{
    clienteId:number;
    pedidoId:number;
    nombreCliente:string;
    total:number;
    pedidoDetalle:Array<PedidoDetalle>;

    constructor(){
        this.clienteId=this.clienteId;
        this.pedidoId=this.pedidoId;
        this.nombreCliente=this.nombreCliente;
        this.total=this.total;
        this.pedidoDetalle=new Array<PedidoDetalle>();
    }


}