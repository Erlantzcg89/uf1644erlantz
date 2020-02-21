import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  noticias: Array<Noticia>;

  constructor(private dao: DataService) {
    console.debug('InicioComponent constructor');
    this.noticias = dao.getData();
  }// InicioComponent constructor

  ngOnInit() {
    console.debug('InicioComponent ngOnInit');
  }// InicioComponent ngOnInit

}// InicioComponent
