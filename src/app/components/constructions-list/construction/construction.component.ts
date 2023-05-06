import { Component, Input } from '@angular/core';
import { Construction } from 'src/app/services/construction.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent {

  @Input() construction: Construction = {
    id: 0,
    nombre: '',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    ubicacion: '',
    descripcion: '',
    cliente: '',
    estado: ''
  };
}
