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

    validar():any{
        let respuesta = {
            esValido :false,
            mensaje:""
        }

        if(this.cliente == null || this.cliente==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "Por favor selecciona un cliente"
            return respuesta
        }
        if(this.fecha == null || this.fecha==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No tiene fecha inicio"
            return respuesta
        }
        if(this.fechaFinal == null || this.fechaFinal==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No tiene fecha final"
            return respuesta
        }
        if(this.precios == null || this.precios==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No tiene precio"
            return respuesta
        }
        if(this.precios == null || this.precios==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No tiene precio"
            return respuesta
        }
        if(this.subTotal == 0 || this.subTotal==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No se ha podido calcular el sub Total"
            return respuesta
        }
        if(this.isv == 0 || this.isv==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No se ha podido calcular el ISV"
            return respuesta
        }
        if(this.total == 0 || this.total==undefined){
            respuesta.esValido = false;
            respuesta.mensaje = "No se ha podido calcular el Total"
            return respuesta
        }

        respuesta.esValido = true
        return respuesta
    }
}