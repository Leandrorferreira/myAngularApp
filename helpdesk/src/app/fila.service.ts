import { Injectable } from '@angular/core';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  //Atributo da Classe 
  filas: Fila [] = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Computadores'},
    {id: 3, nome: 'Redes'},
  ];

  constructor() { }

  //Metodos
  adicionaFila(fila: Fila) :void {
    //Referenciar o atributo da propria classe
    this.filas.push(fila);
  }

  public getFilas() :Fila[]{
    return this.filas;
  }
}
