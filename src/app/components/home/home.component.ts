import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/app/models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes:Array<Clientes> = new Array<Clientes>();
  constructor(public clientesServicios: ClientesService) { }

  ngOnInit() {
    this.clientes=this.clientesServicios.clientesLocalStorage;
  }

  buscarClientes(event){

    console.log(event.target.value);
    let nombreBuscar : string = event.target.value
    this.clientes = this.clientesServicios.clientesLocalStorage.filter(x =>{
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

}
