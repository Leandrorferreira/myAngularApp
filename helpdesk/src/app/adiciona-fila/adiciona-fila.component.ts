import { Component, OnInit } from '@angular/core';
import { FilaService } from '../fila.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adiciona-fila',
  templateUrl: './adiciona-fila.component.html',
  styleUrls: ['./adiciona-fila.component.css']
})
export class AdicionaFilaComponent implements OnInit {

  //Atributo da classe que faz two-way-databing
  nomeFila: string;
 
  constructor(private filaService: FilaService, private lotacion: Location) { }

  ngOnInit() {
  }

  adicionaFila(): void{
    if(this.nomeFila){
      this.filaService.adicionaFila({id: this.filaService.nextId(), nome: this.nomeFila});
      //retornar para pagina anterior
      this.lotacion.back();
    }else{
      window.alert('Você deve preencher o nome da fila!');
    }
  }

  voltar(): void {
    this.lotacion.back();
  }
}
