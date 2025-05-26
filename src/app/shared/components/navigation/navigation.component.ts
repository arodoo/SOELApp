import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.checkScrollPosition();
    
    // Subscribe to router events to handle navigation changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkScrollPosition();
        this.closeMobileMenu(); // Close mobile menu on navigation
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
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
      this.cdr.detectChanges();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Close mobile menu when clicking outside
    const target = event.target as HTMLElement;
    const navbar = target.closest('.navbar');
    if (!navbar && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  private checkScrollPosition() {
    // Always apply colored navbar on todas-las-obras page or when scrolled
    const isOnConstructionsListPage = this.router.url.includes('todas-las-obras');
    this.isScrolled = isOnConstructionsListPage || window.pageYOffset > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.cdr.detectChanges();
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.cdr.detectChanges();
    }
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // Close mobile menu if open
    this.closeMobileMenu();
    
    // If not on home page, navigate to home first then scroll
    const isOnHomePage = this.router.url === '/inicio' || this.router.url === '/';
    
    if (!isOnHomePage) {
      this.router.navigate(['/inicio']).then(() => {
        // Give time for the home page to load completely
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 300);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  private performScroll(sectionId: string) {
    // Retry mechanism for finding the element
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // Account for fixed navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100); // Retry after 100ms
      }
    };
    
    tryScroll();
  }
}
