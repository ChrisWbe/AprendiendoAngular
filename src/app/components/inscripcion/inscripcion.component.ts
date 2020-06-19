import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscrpicion';
import { Cliente } from 'src/app/models/cliente';
import { AngularFirestore } from '@angular/fire/firestore';
import { Precio } from 'src/app/models/precio';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  inscripcion:Inscripcion = new Inscripcion();
  clienteSeleccionado:Cliente = new Cliente();
  precioSeleccionado:Precio = new Precio();
  precios:Array<Precio> = new Array<Precio>();

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection("precios").get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
        let precio = item.data() as Precio
        precio.id = item.id;
        precio.ref=item.ref;
        this.precios.push(precio)
      })
    })
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

  seleccionarPrecio(id:string){
    this.precioSeleccionado = this.precios.find(x=> x.id==id)
    this.inscripcion.precios = this.precioSeleccionado.ref
    console.log(this.precioSeleccionado)
  }

}
