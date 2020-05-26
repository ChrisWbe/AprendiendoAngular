import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {
  public inputName:String;

  constructor() { }

  ngOnInit() {
  }

  addName(){

    console.log(this.inputName);
    this.inputName = "";
  }

  updateInputName(event:any){
    this.inputName = event.target.value;
    console.log(this.inputName);
  }

}
