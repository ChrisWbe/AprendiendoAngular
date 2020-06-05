import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';

const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'agregar-clientes', component:AgregarClientesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
