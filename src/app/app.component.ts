import { Component } from '@angular/core';
import {LoggerServices} from './logger.service';
import {GreetingService} from './greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  constructor(private logger:LoggerServices, private greeting:GreetingService){
    logger.warn("PRueba");
    greeting.handleGreeting("Hola")
  }
}

//Se debe respetar el principio de resposabilidad unica de los componentes
