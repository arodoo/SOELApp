import { Component, Input } from '@angular/core';
import { Construction } from 'src/app/services/construction.service';

@Component({
  selector: 'app-construction-main',
  templateUrl: './construction-main.component.html',
  styleUrls: ['./construction-main.component.scss']
})
export class ConstructionMainComponent {

  @Input() constructionMain: Construction = {
    id: 0,
    nombre: '',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    ubicacion: '',
    descripcion: '',
    cliente: '',
    estado: '',
    
    img: [{id: 0, url: ''}]
  };
}
