import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ConstructionsComponent } from '../constructions/constructions.component';
import { CompanyServicesComponent } from '../company-services/company-services.component';
import { ClientsLogosComponent } from '../../shared/components/clients-logos/clients-logos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent, 
    ConstructionsComponent, 
    CompanyServicesComponent, 
    ClientsLogosComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) { }

  elementoId:string = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.elementoId = params['id'];
      this.scrollToElement(this.elementoId);
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
