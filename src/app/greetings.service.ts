import {LoggerServices} from './logger.service';
import { Injectable } from '@angular/core';

@Injectable() //Se pone siempre qe se crea un servicio, así no tenga dependencia
export class GreetingService{
    public counter = 0;
    constructor(private logger: LoggerServices){

    }

    handleGreeting(message:string){
        this.counter++;
        this.logger.log(message);
    }
}