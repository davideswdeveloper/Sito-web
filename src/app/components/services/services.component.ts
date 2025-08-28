import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  private intersectionObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // 🔹 Parole che ruotano nell'hero
  words = [
    { articolo: "il", parola: "benessere" },
    { articolo: "l'", parola: "equilibrio" },
    { articolo: "la", parola: "serenità" }
  ];
    currentWord = this.words[0];
    current = this.words[0];
    private index = 0;
    private intervalId?: any;
    

  // 🔹 Servizi
  services = [
    // Servizi principali
    {
      title: 'Educazione alimentare',
      description: 'Incontri per imparare a scegliere e gestire gli alimenti in modo consapevole e autonomo.'
    },
    {
      title: 'Dieta per disturbi metabolici',
      description: 'Piani nutrizionali specifici per gestire e prevenire problemi metabolici.'
    },
    {
      title: 'Dieta per disturbi gastrointestinali',
      description: 'Indicazioni alimentari per ridurre i sintomi e migliorare la salute intestinale.'
    },
    {
      title: 'Dieta in gravidanza',
      description: 'Consigli e piani alimentari per il benessere di mamma e bambino durante la gravidanza.'
    },
    {
      title: 'Dieta chetogenica',
      description: 'Percorsi chetogenici personalizzati e monitorati da un professionista per raggiungere i tuoi obiettivi.'
    },
    {
      title: 'Dieta vegetariana',
      description: 'Percorsi nutrizionali equilibrati per chi segue una dieta vegetariana, senza rinunciare al gusto.'
    },
    {
      title: 'Dieta vegana',
      description: 'Piani alimentari completi per chi segue uno stile di vita vegano, garantendo nutrienti essenziali.'
    },
    {
      title: 'Dieta per intolleranze',
      description: 'Piani personalizzati per gestire intolleranze alimentari mantenendo gusto e varietà.'
    },
  
    // Servizi aggiuntivi
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
  

  // 👉 Ciclo parole
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.words.length;
      this.current = this.words[this.index];
    }, 2500);
  }

  // 👉 Effetto reveal on scroll
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const revealTargets: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.feature-text h2, .feature-text p, .services-intro h2, .services-intro p, .service-card'
    );

    revealTargets.forEach((el) => el.classList.add('reveal'));

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('in-view');
            this.intersectionObserver?.unobserve(element);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    revealTargets.forEach((el) => this.intersectionObserver?.observe(el));
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
