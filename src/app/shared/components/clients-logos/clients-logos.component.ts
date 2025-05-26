import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

declare var $: any; // Declare jQuery for TypeScript

@Component({
  selector: 'app-clients-logos',
  standalone: true,
  imports: [],
  templateUrl: './clients-logos.component.html',
  styleUrls: ['./clients-logos.component.scss']
})
export class ClientsLogosComponent implements OnInit, AfterViewInit, OnDestroy {

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Reinitialize Slick slider after view is ready
    setTimeout(() => {
      this.initializeSlickSlider();
    }, 100);
  }

  ngOnDestroy() {
    // Clean up Slick slider when component is destroyed
    if ($('.client-logo-slider').hasClass('slick-initialized')) {
      $('.client-logo-slider').slick('unslick');
    }
  }

  private initializeSlickSlider() {
    const slider = $('.client-logo-slider');
    
    // Check if slider exists and jQuery/Slick is available
    if (slider.length === 0 || typeof $ === 'undefined' || typeof $.fn.slick === 'undefined') {
      return;
    }

    // Destroy existing slider if it's already initialized
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }

    // Initialize Slick slider with enhanced autoplay settings
    slider.slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Explicitly set autoplay speed (2 seconds)
      speed: 500, // Transition speed
      cssEase: 'linear', // Linear transition for smooth continuous movement
      pauseOnHover: false, // Don't pause on hover to maintain continuous movement
      pauseOnFocus: false, // Don't pause on focus
      dots: false,
      arrows: false,
      draggable: true, // Allow manual dragging
      swipe: true, // Allow swipe on touch devices
      touchMove: true, // Allow touch movement
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    });

    // Force start autoplay after initialization
    setTimeout(() => {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('slickPlay');
      }
    }, 100);
  }
}
