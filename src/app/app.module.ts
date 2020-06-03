import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UsuarioService } from './services/usuario.service';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    EncabezadoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
