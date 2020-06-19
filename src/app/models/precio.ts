import { DocumentReference } from '@angular/fire/firestore';

export class Precio{
    nombre:string;
    costo:number;
    duracion:number;
    tipoDuracion:string;
    id:string;
    ref:DocumentReference
}