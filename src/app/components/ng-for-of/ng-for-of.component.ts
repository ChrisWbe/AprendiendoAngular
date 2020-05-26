import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for-of',
  templateUrl: './ng-for-of.component.html',
  styleUrls: ['./ng-for-of.component.css']
})
export class NgForOfComponent implements OnInit {

  public nameList:Array<string> = ['christian', 'wbeimar', 'Quintero'];
  constructor() { 

  }

  ngOnInit() {
  }

}
