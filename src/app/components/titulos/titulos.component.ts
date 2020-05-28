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
    alert(`Correo: ${this.correo}, Contraseña: ${this.pass}`)
  }

  escribirCorreo(){
    console.log(this.correo);
  }

  escribirPass(){
    console.log(this.pass);
  }

  escribir(event:any){
    console.log(event.target.value);
  }

  colorearFondo(event:any){
    event.srcElement.style.background="red";
    console.log(event)
  }

  keyDown(event:any){
    if(event.key == "Enter"){
      alert("Enter");
    }
  }

  keyUp(event:any){
    if(event.key=="0"){
      alert("0");
    }
  }

  cambiarTamano(event:any){
    event.srcElement.style.width = "500px";
    event.srcElement.style.height="500px";

  }

  volverTamano(event:any){
    event.srcElement.style.width = "100px";
    event.srcElement.style.height="100px";
  }
}
