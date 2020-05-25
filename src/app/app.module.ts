import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
