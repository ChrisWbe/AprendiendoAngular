import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UsuarioService } from './services/usuario.service';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { ArticulosService } from './services/articulos.service';
import { JsonPlaceHolderComponent } from './components/json-place-holder/json-place-holder.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';
import { AgregarDataPlaceHolderComponent } from './components/agregar-data-place-holder/agregar-data-place-holder.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    EncabezadoComponent,
    PerfilComponent,
    ArticuloDetalleComponent,
    JsonPlaceHolderComponent,
    UserDetalleComponent,
    AgregarDataPlaceHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
