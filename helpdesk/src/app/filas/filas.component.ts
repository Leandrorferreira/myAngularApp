import { Component, OnInit } from '@angular/core';
import { FilaService } from '../fila.service';
import { Fila } from '../model/fila';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.css']
})
export class FilasComponent implements OnInit {

  filas: Fila [];
  constructor(private filaService: FilaService) { 
    this.filas = this.filaService.getFilas();
  }
  
  ngOnInit() {
  }     
}
