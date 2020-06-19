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
    if(this.inscripcion.validar().esValido){
      console.log("guarda")
    }else{
      console.log(this.inscripcion.validar().mensaje)
    }

    // debugger
  }

  seleccionarPrecio(id:string){
    // debugger
    if(id!="null"){
      this.precioSeleccionado = this.precios.find(x=> x.id==id)
      this.inscripcion.precios = this.precioSeleccionado.ref
      console.log(this.precioSeleccionado)

      this.inscripcion.subTotal = this.precioSeleccionado.costo
      this.inscripcion.isv = this.inscripcion.subTotal*0.15
      this.inscripcion.total = this.inscripcion.subTotal+this.inscripcion.isv

      this.inscripcion.fecha = new Date()

      switch(this.precioSeleccionado.tipoDuracion){
        case "1":{
          this.inscripcion.fechaFinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDay() + this.precioSeleccionado.duracion*1);
          break
        }
        case "2":{
          this.inscripcion.fechaFinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDay() + this.precioSeleccionado.duracion*7);
          break
        }
        case "3":{
          this.inscripcion.fechaFinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDay() + this.precioSeleccionado.duracion*15);
          break
        }
        case "4":{
          this.inscripcion.fechaFinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth() + this.precioSeleccionado.duracion, this.inscripcion.fecha.getDay());
          break
        }
        case "5":{
          this.inscripcion.fechaFinal = new Date(this.inscripcion.fecha.getFullYear()+ this.precioSeleccionado.duracion, this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDay() + this.precioSeleccionado.duracion*15);
          break
        }
      }

    }else{
      this.precioSeleccionado = new Precio()
      this.inscripcion.precios = null
      this.inscripcion.fecha = null
      this.inscripcion.fechaFinal = null
      this.inscripcion.subTotal = 0
      this.inscripcion.isv =0
      this.inscripcion.total = 0
    }
  }

}
