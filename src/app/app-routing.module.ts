import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes =[
  {path:'', component:ServiciosComponent},
  {path:'perfil', component:PerfilComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
