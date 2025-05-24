import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Construction, ConstructionService } from 'src/app/core/services/construction.service';

@Component({
  selector: 'app-constructions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent {

  constructionsMain: Construction[] = [];
  selectedConstruction: Construction | null = null;
  selectedImage: string | null = null;

  constructor(private constructionService: ConstructionService) { 
    const constructionsMain = this.constructionService.getConstructionsMain();
    if (constructionsMain.length > 0) {
      this.constructionsMain = constructionsMain;
    }
  }

  showPopup(construction: Construction) {
    this.selectedConstruction = construction;
  }

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
