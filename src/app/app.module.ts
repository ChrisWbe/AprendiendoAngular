import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { NgxSpinnerModule } from "ngx-spinner";
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { MensajesService } from './services/mensajes.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(), //Para que funcione en toda la aplicación
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    AngularFireStorageModule
    
  ],
  providers: [AngularFireAuth, AngularFirestore, MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
