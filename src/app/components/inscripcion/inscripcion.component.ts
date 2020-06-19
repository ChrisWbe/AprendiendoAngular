import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscrpicion';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  inscripcion:Inscripcion = new Inscripcion();
  clienteSeleccionado:Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

  asignarCliente(cliente:Cliente){
    this.inscripcion.cliente=cliente.ref
    this.clienteSeleccionado=cliente
    // debugger
  }

  eliminarCliente(){
    this.clienteSeleccionado=new Cliente()
    this.inscripcion.cliente=undefined
    // debugger
  }

  guardar(){
    // debugger
    console.log(this.inscripcion)
    // debugger
  }

}
