import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScrollPosition();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // Close mobile menu on window resize
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  private checkScrollPosition() {
    // Always apply colored navbar on todas-las-obras page
    if (this.router.url.includes('todas-las-obras')) {
      this.isScrolled = true;
    } else {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    // Close mobile menu if open
    this.closeMobileMenu();
    
    // If not on home page, navigate to home first then scroll
    if (!this.router.url.includes('inicio') && this.router.url !== '/') {
      this.router.navigate(['/inicio']).then(() => {
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 100);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  private performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
