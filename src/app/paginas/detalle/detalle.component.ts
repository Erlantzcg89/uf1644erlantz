import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;
  noticias: Array<Noticia>;
  detalle: Noticia;

  constructor(private route: ActivatedRoute, private dao: DataService) {

    console.debug('DetalleComponent constructor');

    this.route.params.subscribe(params => {
      console.log('params: %o', params);
      return this.id = +params['id'];
    });

    this.noticias = dao.getData();

    this.detalle = this.noticias.find(el => {
      console.log('iteraciones: ' + el.id);
      return el.id === this.id;
    });

  }// DetalleComponent constructor

  ngOnInit() {

    console.debug('DetalleComponent ngOnInit');

  }// DetalleComponent ngOnInit

}// DetalleComponent
