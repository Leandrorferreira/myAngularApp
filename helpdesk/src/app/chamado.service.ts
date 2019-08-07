import { Injectable } from '@angular/core';
import { Chamado } from './model/chamado';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  chamados: Chamado [] = [
    {
      id: 1,
      descricao: 'Computador não liga',
      status: 'Aberto',
      dataAbertura: '12/02/2019',
      dataFechamento: null,
      descricaoFinalizacao: null,
      idFila: 2
    },  
    {
      id: 2,
      descricao: 'Internet não funciona',
      status: 'Fechado',
      dataAbertura: '12/02/2019',
      dataFechamento: '12/02/2019',
      descricaoFinalizacao: 'troca do cabo',
      idFila: 3
    },
  ]
  constructor() { }

  public getChamados(): Chamado[]{
    return this.chamados;
  }

  public getChamadosPorFila(fila: Fila): Chamado[] {
    return this.chamados.filter(chamado => chamado.idFila === fila.id);
  }
}
