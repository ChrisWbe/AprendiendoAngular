import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarLocalStorage(producto:Productos){
    let productosAntiguos:Productos[] = this.productosLocalStorage;
    producto.productoId = productosAntiguos.length+1;
    //debugger
    productosAntiguos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productosAntiguos))
  }

  get productosLocalStorage():Productos[]{
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'));
    if(productosLocalStorage==null)return new Array<Productos>();
    return productosLocalStorage;
  }
}
