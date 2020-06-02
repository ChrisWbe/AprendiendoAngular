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

}
