import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mi-componente',
	templateUrl: './mi-componente.component.html',
	styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

	public name:String;
	public comentario:String;
	public year:number;

	constructor() { 
		this.name = "Soy mi componente";
		this.comentario = "Soy un comentario";
		this.year = 2020;
	}

	ngOnInit() {
	}

}
