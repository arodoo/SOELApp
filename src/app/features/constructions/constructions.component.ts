import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConstructionService, Construction } from 'src/app/core/services/construction.service';
import { ConstructionModalComponent } from '../../shared/components/construction-modal/construction-modal.component';

@Component({
  selector: 'app-constructions',
  standalone: true,
  imports: [CommonModule, RouterLink, ConstructionModalComponent],
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent implements OnInit {

  constructionsMain: Construction[] = [];
  selectedConstruction: Construction | null = null;
  selectedImage: string | null = null;

  constructor(private constructionService: ConstructionService) {
    const constructions = this.constructionService.getConstructions();
    if (constructions.length > 0) {
      this.constructionsMain = constructions.slice(0, 6);
    }
  }

  ngOnInit(): void {
    const element = document.getElementById('begin');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  showPopup(construction: Construction) {
    this.selectedConstruction = construction;
  }

  onImageSelected(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
