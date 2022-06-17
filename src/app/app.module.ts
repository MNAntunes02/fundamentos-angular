import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { TwoAwayDataBindingComponent } from './two-away-data-binding/two-away-data-binding.component';
import { RenderizandoListaComponent } from './renderizando-lista/renderizando-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    TwoAwayDataBindingComponent,
    RenderizandoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
