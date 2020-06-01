import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ContinuaraPipe } from './pipes/continuara.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ContinuaraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
