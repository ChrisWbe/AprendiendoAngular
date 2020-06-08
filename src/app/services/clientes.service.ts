import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(cliente:Clientes){
    let clientesAntiguos:Clientes[] = this.clientesLocalStorage;
    cliente.clienteId = clientesAntiguos.length+1;
    //debugger
    clientesAntiguos.push(cliente)
    localStorage.setItem('clientes', JSON.stringify(clientesAntiguos))
  }

  get clientesLocalStorage():Clientes[]{
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'));
    if(clientesLocalStorage==null)return new Array<Clientes>();
    return clientesLocalStorage;
  }
}
