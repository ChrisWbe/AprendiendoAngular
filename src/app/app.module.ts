import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForOfComponent } from './components/ng-for-of/ng-for-of.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForOfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
