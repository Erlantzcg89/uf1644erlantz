import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Prueba } from 'src/app/model/prueba';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;
  pruebas: Array<Prueba>;
  detalle: Prueba;

  constructor(private route: ActivatedRoute, private dao: DataService) {

    console.debug('DetalleComponent constructor');

    this.route.params.subscribe(params => {
      console.log('params: %o', params);
      return this.id = +params['id'];
    });

    this.pruebas = dao.getData();

    this.detalle = this.pruebas.find(el => {
      console.log('iteraciones: ' + el.id);
      return el.id === this.id;
    });

  }// DetalleComponent constructor

  ngOnInit() {

    console.debug('DetalleComponent ngOnInit');

  }// DetalleComponent ngOnInit

}// DetalleComponent
