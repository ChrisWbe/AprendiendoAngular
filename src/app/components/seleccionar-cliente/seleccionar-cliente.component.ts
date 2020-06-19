import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.css']
})
export class SeleccionarClienteComponent implements OnInit {

  clientes:Cliente[] = new Array<Cliente>();
  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection<Cliente>("clientes").get().subscribe((resultados)=>{
      this.clientes.length=0;
      resultados.docs.forEach((item)=>{
        let cliente:Cliente = item.data() as Cliente;
        cliente.id = item.id
        cliente.ref = item.ref;
        this.clientes.push(cliente)
      })
    })

    console.log(this.clientes)
  }

}
