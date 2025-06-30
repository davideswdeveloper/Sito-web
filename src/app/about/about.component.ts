import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    console.log("qi")

    const sections: NodeListOf<HTMLElement> = this.document.querySelectorAll('.fade-in-section');

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    const path = this.document.querySelector<SVGPathElement>('#arrow-path');
    const pathContainer = this.document.querySelector<HTMLElement>('.main-content-wrapper');
    console.log(path)
    console.log(pathContainer)

    if (path && pathContainer) {
      const pathLength: number = path.getTotalLength();
      console.log(pathLength)

      this.renderer.setStyle(path, 'strokeDasharray', pathLength.toString());
      this.renderer.setStyle(path, 'strokeDashoffset', pathLength.toString());

      const updateArrow = (): void => {

        const scrollableHeight: number = this.document.body.scrollHeight - window.innerHeight;
        const scrollFromTop: number = window.scrollY;
        const scrollPercentage: number = Math.min(scrollFromTop / scrollableHeight, 1);
        const drawLength: number = scrollPercentage * pathLength;
        this.renderer.setStyle(path, 'strokeDashoffset', (pathLength - drawLength).toString());
      };

      console.log("q")
      window.addEventListener('scroll', updateArrow);
      updateArrow();
    }
  }
}
