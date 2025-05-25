import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Construction } from '../../../core/services/construction.service';

@Component({
  selector: 'app-construction-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './construction-modal.component.html',
  styleUrls: ['./construction-modal.component.scss']
})
export class ConstructionModalComponent {
  @Input() selectedConstruction: Construction | null = null;
  @Input() selectedImage: string | null = null;
  @Output() imageSelected = new EventEmitter<string>();

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.imageSelected.emit(imageUrl);
  }
}
