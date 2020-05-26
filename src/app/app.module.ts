import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import {LoggerServices} from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerServices], //se pasa el proveedor para utilizarlo en el componente
  bootstrap: [AppComponent]
})
export class AppModule { }
