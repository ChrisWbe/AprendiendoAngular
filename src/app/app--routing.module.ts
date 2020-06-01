import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import { Error404Component } from './components/error404/error404.component';
import { Link3Component } from './components/link3/link3.component';
import { Link3Child1Component } from './components/link3/link3-child1/link3-child1.component';
import { Link3Child2Component } from './components/link3/link3-child2/link3-child2.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { ArticuloDetalle2Component } from './components/articulo-detalle2/articulo-detalle2.component';

const routes: Routes=[
  { path:'', component:Link1Component},
  {path:'link1', component:Link1Component},
  {path:'link2', component:Link2Component},
  {
    path:'link3', component:Link3Component, children:[
      {
        path:'child1', component:Link3Child1Component
      },
      {
        path:'child2', component:Link3Child2Component
      }
    ]
  },
  {
    path:'articulo', component:ArticuloComponent
  },
  {
    path:'articuloDetalle/:nombre/:precio', component:ArticuloDetalleComponent
  },
  {
    path:'articuloDetalle2', component:ArticuloDetalle2Component
  },
  {path:'**', component:Error404Component},
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
