import { DocumentReference } from '@angular/fire/firestore';

export class Inscripcion{
    fecha:Date;
    fechaFinal:Date;
    precios:DocumentReference;
    cliente:DocumentReference;
    subTotal:number;
    isv:number;
    total:number

    constructor(){
        this.fecha=null;
        this.fechaFinal=null;
        this.precios=this.precios;
        this.cliente=this.cliente;
        this.subTotal=this.subTotal;
        this.isv=this.isv;
        this.total=this.total

    }
}