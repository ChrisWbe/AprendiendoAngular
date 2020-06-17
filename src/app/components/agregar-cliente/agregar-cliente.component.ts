import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  formularioCliente:FormGroup;
  porcentajeSubida:number = 0;
  constructor(private fb:FormBuilder, private storage:AngularFireStorage, private db:AngularFirestore) { }

  ngOnInit() {
    this.formularioCliente= this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      correo:['', Validators.compose([
        Validators.required, Validators.email
      ])],
      cedula:[''],
      fechaNacimiento:['', Validators.required],
      telefono:[''],
      imgUrl:['', Validators.required]
    })
  }

  agregar(){
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)
    this.db.collection('clientes').add(this.formularioCliente.value).then((resultado)=>{
      console.log("Registro Creado");
    })
    console.log(this.formularioCliente.value)
  }

  subirImagen(evento){

    console.log(evento);
    if(evento.target.files.length>0){
      let nombre = new Date().getTime().toString()
      let file = evento.target.files[0];
      let extension = file.name.toString().substring(file.name.toString().lastIndexOf('.'))

      let ruta=`clientes/${nombre}${extension}`;
      const ref = this.storage.ref(ruta)
      const tarea = ref.put(file)
      tarea.then((obj)=>{
        console.log("Imagen subida");
        ref.getDownloadURL().subscribe((url)=>{
          this.formularioCliente.value.imgUrl = url;
        })
      })
      tarea.percentageChanges().subscribe((porcentaje)=>{
        this.porcentajeSubida=parseInt(porcentaje.toString())
      })
    }
    


  }

}
