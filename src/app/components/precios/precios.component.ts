import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Precio } from 'src/app/models/precio';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  formularioPrecio:FormGroup;
  precios:Array<Precio> = new Array<Precio>();
  esEditar: boolean = false;
  id:string="";
  constructor(private fb:FormBuilder, private db: AngularFirestore, private msg:MensajesService) { }

  ngOnInit() {
    this.formularioPrecio = this.fb.group({
      nombre:['', Validators.required],
      costo:['', Validators.required],
      duracion:['',Validators.required],
      tipoDuracion:['', Validators.required]
    })

    this.mostrarPrecio()
  }

  mostrarPrecio(){
    this.db.collection<Precio>("precios").get().subscribe((resultado)=>{
      this.precios.length=0;
      console.log(resultado)
      resultado.docs.forEach((dato)=>{
        let precio = dato.data() as Precio;
        precio.id = dato.id;
        precio.ref = dato.ref;
        console.log(precio)
        this.precios.push(precio)
      })
    })
  }

  agregar(){
    console.log(this.formularioPrecio.value);
    this.db.collection("precios").add(this.formularioPrecio.value).then(()=>{
      this.msg.success("Agregado", "Se agregó correctamente");
      this.formularioPrecio.reset();
      this.mostrarPrecio()
    }).catch(()=>{
      this.msg.error("Error", "Ocurrio un error")
    })
  }

  editar(){
    this.db.doc(`precios/${this.id}`).update(this.formularioPrecio.value).then(()=>{
      this.msg.success("Editado", "Se edito correctamente")
      this.formularioPrecio.reset()
      this.esEditar=false
      this.mostrarPrecio()
    }).catch(()=>{
      this.msg.error("Error", "Ocurrio un Error");
    })
  }

  editarPrecio(precio: Precio){
    this.esEditar=true;
    this.formularioPrecio.setValue({
      nombre:precio.nombre,
      costo:precio.costo,
      duracion:precio.duracion,
      tipoDuracion:precio.tipoDuracion
    })
    this.id=precio.id;
  }

}
