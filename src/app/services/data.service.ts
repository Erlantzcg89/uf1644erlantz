import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';
import { NOTICIAS } from '../model/constantes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Array<Noticia>;

  constructor() {

    console.debug('DataService constructor');

    this.data = NOTICIAS.map(el => {

      console.debug('NOTICIAS map');

      let noticia = {
        'id': +el.id,
        'fecha': el.publicationDate,
        'titulo': el.longTitle,
        'imagen': el.imageSEO,
        'textoCorto': el.summary.replace(/<\/?[^>]+(>|$)/g, '').replace('&aacute;', 'á').replace('&eacute;', 'é').replace('&iacute;', 'í').replace('&oacute;', 'ó').replace('&uacute', 'ú').replace('&nbsp;', ' '),
        'texto': el.text,
        'url': el.htmlShortUrl
      }

      return noticia as Noticia;
    });
  }// DataService constructor

  setData(data: Array<Noticia>): void {

    console.debug('DataService setData');

    this.data = data;
  }// DataService setData

  getData(): Array<Noticia> {

    console.debug('DataService getData');

    return this.data;
  }// DataService getData

}// DataService
