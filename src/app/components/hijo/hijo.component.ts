import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  titulo: string = "Hola Soy un hijo"
  constructor() { }

  ngOnInit() {
  }

}
