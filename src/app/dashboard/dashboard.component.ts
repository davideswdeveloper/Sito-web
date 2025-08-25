import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ReceiptsComponent } from '../components/receipts/receipts.component';
import { ServicesComponent } from '../components/services/services.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ ReceiptsComponent, ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild(ReceiptsComponent) receiptsComponent!: ReceiptsComponent;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      // Evita di eseguire codice DOM su server
      return;
    }

    setTimeout(() => {
      this.initScrollyAnimation();
      this.initMetodoScrollyAnimation();
      this.initRevealOnScroll();
      this.initHeroAnimation();
    }, 100);
  }

  private initScrollyAnimation(): void {
    const steps = this.document.querySelectorAll('.step');
    const plateFull = this.document.querySelector('.plate-full');
    const labelVerdure = this.document.querySelector('.label-verdure');
    const labelCarboidrati = this.document.querySelector('.label-carboidrati');
    const labelGrassi = this.document.querySelector('.label-grassi');
    const labelProteine = this.document.querySelector('.label-proteine');

    if (!plateFull) return;

    // Funzione per aggiornare l'animazione del piatto
    const updatePlateAnimation = (stepNumber: number) => {
      // Mappa degli step: 1=Base, 2=Carboidrati, 3=Proteine, 4=Verdure, 5=Completo
      let endDeg = 0;
      
      switch(stepNumber) {
        case 1: // Base di partenza
          endDeg = 0;
          break;
        case 2: // Carboidrati
          endDeg = 90;
          break;
        case 3: // Proteine
          endDeg = 180;
          break;
        case 4: // Verdure
          endDeg = 270;
          break;
        case 5: // Piatto completo
          endDeg = 360;
          break;
        default:
          endDeg = 0;
      }

      const mask = `conic-gradient(#000 0deg ${endDeg}deg, transparent ${endDeg}deg 360deg)`;
      (plateFull as HTMLElement).style.webkitMaskImage = mask;
      (plateFull as HTMLElement).style.maskImage = mask;

      // Mostra/nascondi le etichette in base allo step
      if (labelVerdure) (labelVerdure as HTMLElement).style.opacity = stepNumber >= 4 ? '1' : '0';
      if (labelCarboidrati) (labelCarboidrati as HTMLElement).style.opacity = stepNumber >= 2 ? '1' : '0';
      if (labelGrassi) (labelGrassi as HTMLElement).style.opacity = stepNumber >= 5 ? '1' : '0';
      if (labelProteine) (labelProteine as HTMLElement).style.opacity = stepNumber >= 3 ? '1' : '0';
    };

    // Configura l'Intersection Observer per ogni step
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Si attiva quando il 60% centrale è visibile
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.getAttribute('data-step') || '1');
          updatePlateAnimation(stepNumber);
        }
      });
    }, observerOptions);

    // Attacca l'observer a ogni step di testo
    steps.forEach(step => observer.observe(step));

    // Inizializza l'animazione
    updatePlateAnimation(1);
  }

  private initMetodoScrollyAnimation(): void {
    const metodoSteps = this.document.querySelectorAll('.metodo-step');
    const metodoStepTexts = this.document.querySelectorAll('.metodo-step-text');
    const metodoBgImages = this.document.querySelectorAll('.metodo-bg-image');
    
    if (metodoSteps.length === 0) return;

    // Funzione per aggiornare gli step attivi
    const updateMetodoSteps = (stepNumber: number) => {
      // Nascondi tutti gli step
      metodoSteps.forEach((step, index) => {
        if (index === stepNumber) {
          step.classList.add('is-active');
        } else {
          step.classList.remove('is-active');
        }
      });
      
      // Nascondi tutte le immagini di sfondo
      metodoBgImages.forEach((image, index) => {
        if (index === stepNumber) {
          image.classList.add('is-active');
        } else {
          image.classList.remove('is-active');
        }
      });
    };

    // Configura l'Intersection Observer per ogni step di testo
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Si attiva quando il 60% centrale è visibile
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.getAttribute('data-step') || '0');
          updateMetodoSteps(stepNumber);
        }
      });
    }, observerOptions);

    // Attacca l'observer a ogni step di testo
    metodoStepTexts.forEach(step => observer.observe(step));

    // Inizializza l'animazione
    updateMetodoSteps(0);
  }

  private initRevealOnScroll(): void {
    const revealables = Array.from(this.document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    if (revealables.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const delayValue = el.dataset['delay'];
          const delay = delayValue ? parseFloat(delayValue) : 0;
          if (delay) {
            el.style.transitionDelay = `${delay}s`;
          }
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    revealables.forEach(el => io.observe(el));
  }

  private initHeroAnimation(): void {
    const hero = this.document.querySelector('.home-hero__content');
    if (hero) {
      (hero as HTMLElement).classList.add('is-visible');
    }
  }
}
