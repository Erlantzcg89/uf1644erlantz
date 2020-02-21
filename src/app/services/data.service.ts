import { Injectable } from '@angular/core';
import { Prueba } from '../model/prueba';
import { PRUEBAS } from '../model/constantes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Array<Prueba>;

  constructor() {

    console.debug('DataService constructor');

    this.data = PRUEBAS;
  }// DataService constructor

  setData(data: Array<Prueba>): void {

    console.debug('DataService setData');

    this.data = data;
  }// DataService setData

  getData(): Array<Prueba> {

    console.debug('DataService getData');

    return this.data;
  }// DataService getData

}// DataService
