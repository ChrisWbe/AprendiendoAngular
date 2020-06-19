import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.css']
})
export class SeleccionarClienteComponent implements OnInit {

  clientes:Cliente[] = new Array<Cliente>();
  @Input('nombre') nombre:string;
  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection<Cliente>("clientes").get().subscribe((resultados)=>{
      this.clientes.length=0;
      resultados.docs.forEach((item)=>{
        let cliente:Cliente = item.data() as Cliente;
        cliente.id = item.id
        cliente.ref = item.ref;
        cliente.visible=false;
        this.clientes.push(cliente)
      })
    })

    console.log(this.clientes)
  }

  buscarClientes(nombre:string){
    console.log(nombre)
    this.clientes.forEach((cliente)=>{
      if(cliente.nombre.toLowerCase().includes(nombre.toLowerCase())){
        cliente.visible=true;
      }else{
        cliente.visible=false;
      }
    })
  }

  seleccionarCliente(cliente:Cliente){
    console.log(cliente)
    this.nombre=`${cliente.nombre} ${cliente.apellido}`
    this.clientes.forEach((item)=>{
      item.visible=false;
    })
    
  }

  cancelarCliente(){
    this.nombre=undefined;
  }

}
