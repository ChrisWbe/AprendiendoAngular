import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bi-directional-bindings',
  templateUrl: './bi-directional-bindings.component.html',
  styleUrls: ['./bi-directional-bindings.component.css']
})
export class BiDirectionalBindingsComponent implements OnInit {

  public nameList:Array<string> = [];
  public inputName:string = "Christian";
  constructor() { }

  ngOnInit() {
  }

  addName(){
    this.nameList.push(this.inputName);
    this.inputName = "";
    console.log(this.nameList);
  }

  updateInputName(event:any){
    this.inputName = event.target.value;
    console.log(this.inputName);
  }

}
