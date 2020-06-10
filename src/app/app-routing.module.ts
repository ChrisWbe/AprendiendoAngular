import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { ListadoPedidosComponent } from './components/listado-pedidos/listado-pedidos.component';

const routes:Routes=[
  {path:'', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'agregar-clientes', component:AgregarClientesComponent},
  {path:'agregar-productos', component:AgregarProductosComponent},
  {path:'listado-pedidos', component:ListadoPedidosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
