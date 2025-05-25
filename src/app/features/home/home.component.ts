import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ConstructionsComponent } from '../constructions/constructions.component';
import { CompanyServicesComponent } from '../company-services/company-services.component';
import { ClientsLogosComponent } from '../../shared/components/clients-logos/clients-logos.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ConstructionsComponent, CompanyServicesComponent, ClientsLogosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private parallaxInitialized = false;
  private parallaxElements: { [key: string]: { left: number, top: number } } = {};

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Initialize parallax effect after view is ready
    setTimeout(() => {
      this.initializeParallax();
    }, 100);
  }

  ngOnDestroy(): void {
    // Clean up parallax event listeners
    const parallaxBox = document.getElementById('parallax');
    if (parallaxBox) {
      parallaxBox.onmousemove = null;
    }
  }

  private initializeParallax(): void {
    if (this.parallaxInitialized) return;

    const parallaxBox = document.getElementById('parallax');
    if (!parallaxBox) return;

    // Check if all required elements exist
    const elements = ['l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'];
    const elementsExist = elements.every(id => document.getElementById(id) !== null);

    if (!elementsExist) return;

    // Store initial positions
    elements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.parallaxElements[id] = {
          left: element.offsetLeft,
          top: element.offsetTop
        };
      }
    });

    // Set up mouse move handler
    parallaxBox.onmousemove = (event: MouseEvent) => {
      const x = event.clientX - parallaxBox.offsetLeft;
      const y = event.clientY - parallaxBox.offsetTop;

      this.mouseParallax('l2', this.parallaxElements['l2'].left, this.parallaxElements['l2'].top, x, y, 25);
      this.mouseParallax('l3', this.parallaxElements['l3'].left, this.parallaxElements['l3'].top, x, y, 20);
      this.mouseParallax('l4', this.parallaxElements['l4'].left, this.parallaxElements['l4'].top, x, y, 35);
      this.mouseParallax('l5', this.parallaxElements['l5'].left, this.parallaxElements['l5'].top, x, y, 30);
      this.mouseParallax('l6', this.parallaxElements['l6'].left, this.parallaxElements['l6'].top, x, y, 45);
      this.mouseParallax('l7', this.parallaxElements['l7'].left, this.parallaxElements['l7'].top, x, y, 30);
      this.mouseParallax('l8', this.parallaxElements['l8'].left, this.parallaxElements['l8'].top, x, y, 25);
      this.mouseParallax('l9', this.parallaxElements['l9'].left, this.parallaxElements['l9'].top, x, y, 40);
    };

    this.parallaxInitialized = true;
  }

  private mouseParallax(id: string, left: number, top: number, mouseX: number, mouseY: number, speed: number): void {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    const parentObj = obj.parentNode as HTMLElement;
    if (!parentObj) return;

    const containerWidth = parseInt(parentObj.offsetWidth.toString());
    const containerHeight = parseInt(parentObj.offsetHeight.toString());
    
    const newLeft = left - (((mouseX - (parseInt(obj.offsetWidth.toString()) / 2 + left)) / containerWidth) * speed);
    const newTop = top - (((mouseY - (parseInt(obj.offsetHeight.toString()) / 2 + top)) / containerHeight) * speed);
    
    obj.style.left = newLeft + 'px';
    obj.style.top = newTop + 'px';
  }
}
