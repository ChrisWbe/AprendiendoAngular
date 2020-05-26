import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import {UpperCapitalPipe} from './components/ng-model/upper-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent,
    UpperCapitalPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
