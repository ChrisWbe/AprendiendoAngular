import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { JsonPlaceHolderComponent } from './components/json-place-holder/json-place-holder.component';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';
import { AgregarDataPlaceHolderComponent } from './components/agregar-data-place-holder/agregar-data-place-holder.component';


const routes: Routes =[
  {path:'', component:ServiciosComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'articulo-detalle', component:ArticuloDetalleComponent},
  {path:'json-placeholder', component:JsonPlaceHolderComponent},
  {path:'user-detalle', component:UserDetalleComponent},
  {path:'agregar-data-place-holder/:esNuevo', component:AgregarDataPlaceHolderComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
