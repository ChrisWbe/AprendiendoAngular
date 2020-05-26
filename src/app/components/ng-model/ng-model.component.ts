import { Component, OnInit } from '@angular/core';
//Importando el servicio a nivel de componente
import {GreetingService} from '../../greetings.service';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css'],
  providers:[GreetingService] // Se a creado una instancia nueva,son dos instancia del objeto, completamente distintas
})
export class NgModelComponent implements OnInit {
  public nameList:Array<string> = [];
  public inputName:string = "";

  constructor(private greetings:GreetingService) { }

  ngOnInit() {
  }

  addName(){
    this.nameList.push(this.inputName);
    this.inputName = "";
    console.log(this.nameList);
    this.greetings.counter++;
    console.log(this.greetings.counter);
  }

}
