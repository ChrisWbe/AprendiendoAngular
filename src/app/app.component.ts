import { Component } from '@angular/core';
import {LoggerServices} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  constructor(private logger:LoggerServices){
    logger.warn("PRueba");
  }
}
