import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionService, Service } from 'src/app/core/services/construction.service';

@Component({
  selector: 'app-company-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent implements OnInit {

  services: Service[] = [];
  isPopupVisible = false;
  selectedService: Service | null = null;

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

  showPopup(service: Service) {
    this.selectedService = service;
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
    this.selectedService = null;
  }
}