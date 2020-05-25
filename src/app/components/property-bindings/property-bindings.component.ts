import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-bindings',
  templateUrl: './property-bindings.component.html',
  styleUrls: ['./property-bindings.component.css']
})
export class PropertyBindingsComponent implements OnInit {

  @Input() public name:String;

  constructor() { }

  ngOnInit() {
  }

}
