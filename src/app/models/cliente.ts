import { DocumentReference } from '@angular/fire/firestore';

export class Cliente{
    nombre:string;
    apellido:string;
    correo:string;
    fechaNacimiento:Date;
    imgUrl:string;
    telefono:number;
    cedula:string;
    ref:DocumentReference;
    id:string;
    visible:boolean;
    constructor(){
    

    }
}