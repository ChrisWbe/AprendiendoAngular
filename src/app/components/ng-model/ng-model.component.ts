import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  public nameList:Array<string> = [];
  public inputName:string = "";

  constructor() { }

  ngOnInit() {
  }

  addName(){
    this.nameList.push(this.inputName);
    this.inputName = "";
    console.log(this.nameList);
  }

}
