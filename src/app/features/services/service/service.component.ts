import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from 'src/app/core/services/construction.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  
  isPopupVisible = false;

  @Input() service: Service = {
    id: 0,
    titulo: '',
    icono: '',
    descripcion: '',
  };



  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
