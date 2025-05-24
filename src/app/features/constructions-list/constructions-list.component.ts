import { ConstructionService,Construction } from '../../core/services/construction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructions-list',
  templateUrl: './constructions-list.component.html',
  styleUrls: ['./constructions-list.component.scss']
})
export class ConstructionsListComponent implements OnInit{

  constructions: Construction[] = [];
  
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


}
