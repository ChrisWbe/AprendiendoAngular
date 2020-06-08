import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { ClientesService } from './services/clientes.service';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ClientesService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
