import { ConstructionService, Construction } from '../../core/services/construction.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-constructions-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './constructions-list.component.html',
  styleUrls: ['./constructions-list.component.scss']
})
export class ConstructionsListComponent implements OnInit, AfterViewInit {

  constructions: Construction[] = [];
  selectedConstruction: Construction | null = null;
  selectedImage: string | null = null;
  shouldScrollToTop = false;
  
  constructor(
    private constructionService: ConstructionService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    const constructions = this.constructionService.getConstructions();
    if (constructions.length > 0) {
      this.constructions = constructions;
    }
  }
  
  ngOnInit(): void {
    // Store the decision to scroll, but don't scroll yet
    this.route.queryParams.subscribe(params => {
      if (params['from'] === 'home') {
        this.shouldScrollToTop = true;
      }
    });
  }

  ngAfterViewInit(): void {
    // Scroll after the view is initialized with a slight delay
    if (this.shouldScrollToTop) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Small delay to ensure it runs after other initialization
    }
  }

  showPopup(construction: Construction) {
    this.selectedConstruction = construction;
  }

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
