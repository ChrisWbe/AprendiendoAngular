import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  error(titulo:string, texto:string){
    swal({
      title: titulo,
      text: texto,
      icon: "danger",
    });
  }

  success(titulo:string, texto:string){
    swal({
      title: titulo,
      text: texto,
      icon: "success",
    });
  }
}
