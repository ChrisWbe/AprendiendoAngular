import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre:string = "Christian";
  apellido:string = "Quintero";
  imagen:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  input:string="Input"
  inputNuevo:string="Hola soy input"

  correo:string="";
  pass:string="";
  constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log(`Correo: ${this.correo}, Contraseña: ${this.pass}`)
  }

}
