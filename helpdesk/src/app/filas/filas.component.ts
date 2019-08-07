import { Component, OnInit, ViewChild } from '@angular/core';
import { FilaService } from '../fila.service';
import { Fila } from '../model/fila';
import { ChamadosComponent } from '../chamados/chamados.component';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.css']
})
export class FilasComponent implements OnInit {

  @ViewChild(ChamadosComponent, null) chamadosComponent :ChamadosComponent;

  filas: Fila [];
  constructor(private filaService: FilaService) { 
    this.filas = this.filaService.getFilas();
  }
  
  ngOnInit() {
  }  
  
  filaSelecionada: Fila;

  onSelectFila(fila: Fila) {
    this.filaSelecionada = fila;
    if(this.chamadosComponent)
      this.chamadosComponent.atualizaFila(fila);
  }
}
