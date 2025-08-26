import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
private intersectionObserver?: IntersectionObserver;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

services = [
  {
    title: 'Dieta per disbiosi',
    description: 'Strategie alimentari per il riequilibrio della flora intestinale e il benessere digestivo.'
  },
  {
    title: 'Analisi dello stato nutrizionale',
    description: 'Valutazione approfondita dello stato nutrizionale generale per individuare eventuali carenze.'
  },
  {
    title: 'Analisi della composizione corporea',
    description: 'Esame della distribuzione di massa magra e grassa per un monitoraggio preciso.'
  },
  {
    title: 'Analisi bioimpedenziometrica',
    description: 'Misurazione precisa della composizione corporea tramite bioimpedenziometria.'
  },
  {
    title: 'Prima visita nutrizionistica',
    description: 'Incontro conoscitivo per impostare un percorso nutrizionale su misura.'
  },
  {
    title: 'Visita nutrizionale di controllo',
    description: 'Appuntamenti di follow-up per valutare i risultati e adattare il piano alimentare.'
  }
];

ngAfterViewInit(): void {
if (!isPlatformBrowser(this.platformId)) return;

const revealTargets: NodeListOf<HTMLElement> = document.querySelectorAll('.feature-text h2, .feature-text p, .services-intro h2, .services-intro p, .service-card');

revealTargets.forEach((el) => el.classList.add('reveal'));

this.intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const element = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      element.classList.add('in-view');
      this.intersectionObserver?.unobserve(element);
    }
  });
}, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

revealTargets.forEach((el) => this.intersectionObserver?.observe(el));
}

ngOnDestroy(): void {
this.intersectionObserver?.disconnect();
}

} 