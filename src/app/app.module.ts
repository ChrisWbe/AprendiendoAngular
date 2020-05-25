import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BiDirectionalBindingsComponent } from './components/bi-directional-bindings/bi-directional-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    BiDirectionalBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
