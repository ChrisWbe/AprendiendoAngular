import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  constructor(public productosServicio: ProductosService, private fb:FormBuilder) { }
  formularioAgregar:FormGroup;
  ngOnInit() {
    this.formularioAgregar = this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  agregar(){
  
    this.productosServicio.agregarLocalStorage(this.formularioAgregar.value)
    this.formularioAgregar.reset()
  }

}
