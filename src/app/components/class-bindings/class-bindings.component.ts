import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bindings',
  templateUrl: './class-bindings.component.html',
  styleUrls: ['./class-bindings.component.css']
})
export class ClassBindingsComponent implements OnInit {
  public inputName:string;
  constructor() { }

  ngOnInit() {
  }

  updateInputName(event:any){
    this.inputName = event.target.value;
  }

}
