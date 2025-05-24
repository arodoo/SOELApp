import { ConstructionService, Construction } from '../../core/services/construction.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-constructions-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './constructions-list.component.html',
  styleUrls: ['./constructions-list.component.scss']
})
export class ConstructionsListComponent implements OnInit {

  constructions: Construction[] = [];
  selectedConstruction: Construction | null = null;
  selectedImage: string | null = null;
  
  constructor(private constructionService: ConstructionService) { 
    const constructions = this.constructionService.getConstructions();
    if (constructions.length > 0) {
      this.constructions = constructions;
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

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
