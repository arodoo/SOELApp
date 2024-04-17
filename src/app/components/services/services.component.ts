import { Component, OnInit } from '@angular/core';
import { ConstructionService, Service } from 'src/app/services/construction.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [];

  constructor(private constructionService: ConstructionService) {
    const services = this.constructionService.getServices();
    if (services.length > 0) {
      this.services = services;
    }
  }

  ngOnInit(): void {
    const element = document.getElementById('begin');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
