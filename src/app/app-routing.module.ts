import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { PreciosComponent } from './components/precios/precios.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';

const routes :Routes=[
  {path:"", redirectTo:"inscripcion", pathMatch:"full"},
  {path:"inscripcion", component:InscripcionComponent},
  {path:"listado-clientes", component:ListadoClientesComponent},
  {path:"agregar-cliente/:clienteID", component:AgregarClienteComponent},
  {path:"agregar-cliente", component:AgregarClienteComponent},
  {path:"precios", component:PreciosComponent},
  
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
