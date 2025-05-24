import { Component } from '@angular/core';
import { Construction, ConstructionService } from 'src/app/core/services/construction.service';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent {

  constructionsMain: Construction[] = [];

  constructor(private constructionService: ConstructionService) { 
    const constructionsMain = this.constructionService.getConstructionsMain();
    if (constructionsMain.length > 0) {
      this.constructionsMain = constructionsMain;
    }
  }
}
