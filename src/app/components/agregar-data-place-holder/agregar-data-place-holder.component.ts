import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPlaceHolder } from 'src/app/models/dataJsonPlaceHolder';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-data-place-holder',
  templateUrl: './agregar-data-place-holder.component.html',
  styleUrls: ['./agregar-data-place-holder.component.css']
})
export class AgregarDataPlaceHolderComponent implements OnInit {
  usuarios:Array<User> = new Array<User>();
  formularioDataPlaceHolder : FormGroup
  dataJsonPlaceHolder: DataPlaceHolder = new DataPlaceHolder();
  esNuevo:boolean=true;

  constructor(private dataPlaceHolderInyectado: JsonPlaceHolderService, private fbGenerador:FormBuilder, private RutaActiva:ActivatedRoute) { }
  
  ngOnInit() {

    this.esNuevo=JSON.parse(this.RutaActiva.snapshot.params.esNuevo);

    
    this.formularioDataPlaceHolder = this.fbGenerador.group({
      title:['', Validators.required],
      body:['', Validators.required],
      userId:['', Validators.required]
    })

    if(!this.esNuevo){
      this.dataJsonPlaceHolder=this.dataPlaceHolderInyectado.jsonPlaceholder;
      this.formularioDataPlaceHolder.setValue({
        title:this.dataJsonPlaceHolder.title,
        body:this.dataJsonPlaceHolder.body,
        userId:this.dataJsonPlaceHolder.userId,
        //id:this.dataJsonPlaceHolder.id
      })
    }

    this.dataPlaceHolderInyectado.leerTodosLosUsuarios().subscribe((usuariosRecibidos)=>{
      this.usuarios = usuariosRecibidos
    })
  }

  agregar(){
    this.dataJsonPlaceHolder = this.formularioDataPlaceHolder.value as DataPlaceHolder;
    this.dataPlaceHolderInyectado.guardarArticulo(this.dataJsonPlaceHolder).subscribe((dataRecibido)=>{
      console.log(dataRecibido)
      console.log("Felicidades has registrado el primer articulo")
      this.formularioDataPlaceHolder.reset()
    })
  }

  editar(){
    this.dataJsonPlaceHolder = this.formularioDataPlaceHolder.value
    this.dataJsonPlaceHolder.id=this.dataPlaceHolderInyectado.jsonPlaceholder.id //Se puede llamar al servicio u obtener valor por valor directo del formulario sin cambiar el id en data
    this.dataPlaceHolderInyectado.actualizarArticulo(this.dataJsonPlaceHolder).subscribe((dataRecibido)=>{
      console.log(dataRecibido)
      console.log("Se edito correctamente")
    })
  }

}
