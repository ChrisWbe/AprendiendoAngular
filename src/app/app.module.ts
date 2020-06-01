import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app--routing.module';
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import { Error404Component } from './components/error404/error404.component';
import { HeadComponent } from './components/head/head.component';
import { Link3Component } from './components/link3/link3.component';
import { Link3Child1Component } from './components/link3/link3-child1/link3-child1.component';
import { Link3Child2Component } from './components/link3/link3-child2/link3-child2.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { ArticuloDetalle2Component } from './components/articulo-detalle2/articulo-detalle2.component';

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Error404Component,
    HeadComponent,
    Link3Component,
    Link3Child1Component,
    Link3Child2Component,
    ArticuloComponent,
    ArticuloDetalleComponent,
    ArticuloDetalle2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
