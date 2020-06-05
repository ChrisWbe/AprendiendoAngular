import { Component, OnInit } from '@angular/core';
interface Clientes{
  nombre:string;
  apellido:string;
  edad:number;
}

interface Productos{
  nombre:string;
  precio:number;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  guardarCliente(){
    let clientesAgregar:Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        nombre:"Carmen",
        apellido:"Najera",
        edad:23
      },
      {
        nombre:"Alejandro",
        apellido:"Pinead",
        edad:17
      },
      {
        nombre:"Christian",
        apellido:"Quintero",
        edad:27
      },
    )
    localStorage.setItem('clientes',JSON.stringify(clientesAgregar));
  }

  eliminarClientes(){
    localStorage.removeItem('clientes')
  }


  guardarProductos(){
    let productosAgregar: Array<Productos>=new Array<Productos>();
    productosAgregar.push(
      {
        nombre:"Maiz",
        precio:500
      },
      {
        nombre:"Agua en botella",
        precio:800
      },
      {
        nombre:"Papas",
        precio:600
      },
    )
    
    localStorage.setItem('productos',JSON.stringify(productosAgregar));
  }

  eliminarProductos(){
    localStorage.removeItem('productos')
  }


  eliminarTodos(){
    localStorage.clear()
  }

  get ClientesLocales():Clientes[]{
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'))
    //debugger
    if(clientesLocalStorage==null) return new Array<Clientes>()
    return clientesLocalStorage
  }

  get ProductosLocales():Productos[]{
    let productosLocalStorage:Productos[]=JSON.parse(localStorage.getItem('productos'))
    if(productosLocalStorage==null) return new Array<Productos>()
    return productosLocalStorage 
  }


}
