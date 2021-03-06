import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilasComponent } from './filas/filas.component';
import { AdicionaFilaComponent } from './adiciona-fila/adiciona-fila.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';

@NgModule({
  declarations: [
    AppComponent,
    FilasComponent,
    AdicionaFilaComponent,
    ChamadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
