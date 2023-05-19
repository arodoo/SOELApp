import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
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
