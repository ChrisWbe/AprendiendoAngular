import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';
import { DataPlaceHolder } from 'src/app/models/dataJsonPlaceHolder';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {

  placeHolder: DataPlaceHolder = new DataPlaceHolder();
  usuario:User = new User();

  constructor(private usuarioInyectado:JsonPlaceHolderService) { 
    this.placeHolder = usuarioInyectado.jsonPlaceholder
  }

  ngOnInit() {
    this.usuarioInyectado.leerUsuario(this.placeHolder.userId).subscribe((usuarioApi)=>{
      console.log(usuarioApi)
      this.usuario=usuarioApi;
      
    })
  }

}
