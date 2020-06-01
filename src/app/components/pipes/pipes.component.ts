import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo:string = "Soy un títulos";
  dinero:number=2400;
  ganancias:number=0.54;
  fechaNacimiento:Date = new Date('04-25-1993');

  textoLargo:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, rem voluptatem nulla recusandae voluptate commodi ipsa amet architecto fugit adipisci enim inventore praesentium quis velit ducimus consequuntur impedit, numquam eligendi.";
  constructor() { }

  ngOnInit() {
  }

}
