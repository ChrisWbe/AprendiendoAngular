import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Usuarios{
  nombre:string;
  correo:string;
  password:string;
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formularioCreado: FormGroup;
  usuarios:Array<Usuarios> = new Array<Usuarios>();
  esNuevo:boolean=true
  positionEdit:number = -1;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
    
  }

  crearFormulario(){
    this.formularioCreado=this.formBuilder.group({
      nombre:['Carmen', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password:['', Validators.compose([
        Validators.minLength(8), Validators.required
      ])]
    })
  }

  agregar(){
    console.log(this.formularioCreado.value)
    this.usuarios.push(this.formularioCreado.value as Usuarios)
    this.formularioCreado.reset();
  }

  editar(){
    this.usuarios[this.positionEdit].nombre=this.formularioCreado.value.nombre;
    this.usuarios[this.positionEdit].correo=this.formularioCreado.value.correo;
    this.usuarios[this.positionEdit].password=this.formularioCreado.value.password;
    this.formularioCreado.reset();
    this.esNuevo=true;
    this.positionEdit=-1;
  }

  editarUsuario(position:number){
    
    this.formularioCreado.setValue({
      nombre:this.usuarios[position].nombre,
      correo:this.usuarios[position].correo,
      password:this.usuarios[position].password
    })
    this.positionEdit=position;
    this.esNuevo=false;
  }

  eliminarUsuario(position:number){
    this.usuarios.splice(position, 1)
  }

}
