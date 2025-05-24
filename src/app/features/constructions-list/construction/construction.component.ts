import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Construction } from 'src/app/core/services/construction.service';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [CommonModule],
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
    estado: '',
    
    img: [{id: 0, url: ''}]
  };

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

}
