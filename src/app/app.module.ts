import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassBindingsComponent } from './components/class-bindings/class-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
