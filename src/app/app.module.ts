import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceVariableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
