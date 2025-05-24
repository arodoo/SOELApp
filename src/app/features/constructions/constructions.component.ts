import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Construction, ConstructionService } from 'src/app/core/services/construction.service';
import { ConstructionMainComponent } from './construction-main/construction-main.component';

@Component({
  selector: 'app-constructions',
  standalone: true,
  imports: [CommonModule, RouterLink, ConstructionMainComponent],
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
