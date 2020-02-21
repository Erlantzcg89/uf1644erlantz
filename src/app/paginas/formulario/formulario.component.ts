import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Noticia } from 'src/app/model/noticia';
import { Alerta } from 'src/app/model/alerta';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alerta: Alerta;
  noticias: Array<Noticia>;
  formulario: FormGroup;

  constructor(private builder: FormBuilder,
    private dataService: DataService) {

    console.debug('FormularioComponent constructor');

    this.alerta = undefined;
    this.noticias = dataService.getData();
    this.crearFormulario();

  }// FormularioComponent constructor

  ngOnInit() {
    console.debug('FormularioComponent ngOnInit');

  }// FormularioComponent ngOnInit

  private crearFormulario() {

    console.debug('FormularioComponent crearFormulario');

    this.formulario = this.builder.group({
      id: new FormControl(0),
      fecha: new FormControl(new Date().toLocaleString().replace(/\//g, '-')),
      titulo: new FormControl('titulo de la noticia', Validators.compose([Validators.required])),
      imagen: new FormControl('https://i.ytimg.com/vi/xi5MliaC7uI/maxresdefault.jpg', Validators.compose([Validators.required])),
      resumen: new FormControl('resumen', Validators.compose([Validators.required])),
      texto: new FormControl('texto de la noticia', Validators.compose([Validators.required])),
      url: new FormControl('http://urlmock.com', Validators.compose([Validators.required]))
    });

  }// crearFormulario

  guardar(datos: any) {

    console.debug('guardar datos: %o', datos);

    let noticia = new Noticia();

    noticia.id = datos.id;
    noticia.fecha = datos.fecha;
    noticia.titulo = datos.titulo;
    noticia.imagen = datos.imagen;
    noticia.textoCorto = datos.texto;
    noticia.texto = datos.texto;
    noticia.url = datos.url;

    this.noticias.push(noticia);

    console.debug('investidura de la noticia: %o', this.noticias);

    this.dataService.setData(this.noticias);

    this.alerta = new Alerta();
    this.alerta.tipo = 'success';
    this.alerta.cuerpo = 'Noticia creada con éxito';


  }// FormularioComponent guardar

}// FormularioComponent
