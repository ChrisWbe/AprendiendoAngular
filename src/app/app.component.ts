import { Component, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  @ViewChild('inputNombre', {static:true})inputNombre:ElementRef; //true si no depende de una condicion en el html 
  @ViewChild(HijoComponent, {static:true})hijo:HijoComponent;

  constructor(){
    
  }

  mostrar(){
    /* console.log(this.inputNombre.nativeElement.style)
    console.log(this.inputNombre)
    this.inputNombre.nativeElement.select(); */
    this.hijo.titulo = "Lo modifiqué desde el padre"
  }
}
