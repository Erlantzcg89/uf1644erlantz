import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private dataService: DataService) { }// FormularioComponent constructor

  ngOnInit() {
  }// FormularioComponent ngOnInit

}// FormularioComponent
