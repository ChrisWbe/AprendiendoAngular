import { Injectable } from '@angular/core';
import { Articulos } from '../models/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo:Articulos = new Articulos();
  constructor() { }
}
