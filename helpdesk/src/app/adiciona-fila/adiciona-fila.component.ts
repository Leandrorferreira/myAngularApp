import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-fila',
  templateUrl: './adiciona-fila.component.html',
  styleUrls: ['./adiciona-fila.component.css']
})
export class AdicionaFilaComponent implements OnInit {

  //Atributo da classe que faz two-way-databing
  nomeFila: string;

  constructor() { }

  ngOnInit() {
  }

  adicionaFila(): void{
    if(this.nomeFila){
      window.alert('Fila Adicionada com Sucesso!');
    }else{
      window.alert('Você deve preencher o nome da fila!');
    }
  }
}
