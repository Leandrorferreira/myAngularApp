import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.css']
})
export class FilasComponent implements OnInit {
  //Array de Objetos JavaScript (JSON) representando filas
  filas = [
    { id: 1, nome: 'Redes'},
    { id: 2, nome: 'Telefonia'},
    { id: 3, nome: 'Computadores'}    
  ]

  constructor() { }
  
  ngOnInit() {
  }  

  //Metodo disparado pelo evento click no botão
  adicionarFila(): void{
    console.log('teste...');
  }
}
