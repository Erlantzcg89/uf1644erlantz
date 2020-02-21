import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/model/prueba';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pruebas: Array<Prueba>;

  constructor(private dao: DataService) {
    console.debug('InicioComponent constructor');
    this.pruebas = dao.getData();
  }// InicioComponent constructor

  ngOnInit() {
    console.debug('InicioComponent ngOnInit');
  }// InicioComponent ngOnInit

}// InicioComponent
