import { Component, OnInit, Input } from '@angular/core';
import { ChamadoService } from '../chamado.service';
import { Fila } from '../model/fila';
import { Chamado } from '../model/chamado';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  @Input() fila: Fila;

  chamados: Chamado[];

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit() {
    this.chamados = this.chamadoService.getChamadosPorFila(this.fila);
  }  

  atualizaFila(fila: Fila): void {
    this.fila = fila;
    this.chamados = this.chamadoService.getChamadosPorFila(this.fila);
  }
}
