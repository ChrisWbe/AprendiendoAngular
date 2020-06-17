import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';

const routes :Routes=[
  {path:"listado-clientes", component:ListadoClientesComponent},
  {path:"agregar-cliente/:clienteID", component:AgregarClienteComponent},
  {path:"agregar-cliente", component:AgregarClienteComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
