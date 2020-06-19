import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  formularioPrecio:FormGroup;
  precios:Array<any> = new Array<any>();
  constructor(private fb:FormBuilder, private db: AngularFirestore, private msg:MensajesService) { }

  ngOnInit() {
    this.formularioPrecio = this.fb.group({
      nombre:['', Validators.required],
      costo:['', Validators.required],
      duracion:['',Validators.required],
      tipoDuracion:['', Validators.required]
    })

    this.db.collection("precios").get().subscribe((resultado)=>{
      console.log(resultado)
      resultado.docs.forEach((dato)=>{
        let precio = dato.data();
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
    }).catch(()=>{
      this.msg.error("Error", "Ocurrio un error")
    })
  }

}
