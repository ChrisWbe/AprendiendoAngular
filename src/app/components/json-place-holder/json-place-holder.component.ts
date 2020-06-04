import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';
import { DataPlaceHolder } from 'src/app/models/dataJsonPlaceHolder';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-json-place-holder',
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.css']
})
export class JsonPlaceHolderComponent implements OnInit {
  dataPlaceHolder:Array<DataPlaceHolder> = new Array<DataPlaceHolder>();

  constructor(private ruta:Router, private dataPlaceHolderInyectado:JsonPlaceHolderService) { }

  ngOnInit() {
    this.dataPlaceHolderInyectado.leerNoticia().subscribe((data)=>{
      this.dataPlaceHolder = data;
    })
  }

  irAlDetalle(data:DataPlaceHolder){
    console.log(data)
    this.dataPlaceHolderInyectado.jsonPlaceholder = data;
    this.ruta.navigateByUrl('user-detalle');
  }

}
