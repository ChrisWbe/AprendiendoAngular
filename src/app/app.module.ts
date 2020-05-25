import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputDecoratorComponent } from './components/input-decorator/input-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDecoratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
