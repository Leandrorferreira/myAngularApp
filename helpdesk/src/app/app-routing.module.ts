import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdicionaFilaComponent } from './adiciona-fila/adiciona-fila.component';
import { FilasComponent } from './filas/filas.component';

const routes: Routes = [
  { path: 'adicionaFila', component: AdicionaFilaComponent },
  { path: 'filas', component: FilasComponent },
  { path: '', redirectTo: 'filas', pathMatch: 'full' }
]

@NgModule({
 // declarations: [],
  imports: [
   // CommonModule
   RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
