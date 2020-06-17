import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';



@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  formularioCliente:FormGroup;
  porcentajeSubida:number = 0;
  editable:boolean=false;
  id:string="";
  constructor(private msg:MensajesService, private fb:FormBuilder, private storage:AngularFireStorage, private db:AngularFirestore, private activeRouter:ActivatedRoute) { }

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

    this.id = this.activeRouter.snapshot.params.clienteID
    if(this.id!=undefined){
      this.editable=true;
      console.log(this.id)
      this.db.doc<any>(`clientes/${this.activeRouter.snapshot.params.clienteID}`).valueChanges().subscribe((cliente)=>{
        console.log(cliente)
        this.formularioCliente.setValue({
          nombre:cliente.nombre,
          apellido:cliente.apellido,
          correo:cliente.correo,
          cedula:cliente.cedula,
          fechaNacimiento:new Date(cliente.fechaNacimiento.seconds*1000).toISOString().substr(0,10),
          telefono:cliente.telefono,
          imgUrl:""
          
        })
      })
    }
    
  }

  agregar(){
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)
    this.db.collection('clientes').add(this.formularioCliente.value).then((resultado)=>{
      console.log("Registro Creado");
      this.msg.success("Creado", "Registro creado exitosamente!");
    })
    console.log(this.formularioCliente.value)
  }

  editar(){
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)
    this.db.doc(`clientes/${this.id}`).update(this.formularioCliente.value).then((resultado)=>{
      console.log("Registro Actualizado");
      this.msg.success("Editado", "Registro editado exitosamente")
      
    }).catch(()=>{
      this.msg.error("Error", "Ocurrio algún error");
    })
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
