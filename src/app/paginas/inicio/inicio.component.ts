import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/model/prueba';
import { PRUEBAS } from 'src/app/model/constantes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pruebas: Array<Prueba>;

  constructor() {
    console.debug('InicioComponent constructor');
    this.pruebas = PRUEBAS;
  }// InicioComponent constructor

  ngOnInit() {
    console.debug('InicioComponent ngOnInit');
  }// InicioComponent ngOnInit

}// InicioComponent
