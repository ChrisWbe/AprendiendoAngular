import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioInyectado: UsuarioService) { }

  ngOnInit() {
  }

  cambiarNombre(){
    this.usuarioInyectado.usuario.nombre="Maria";
  }

}
