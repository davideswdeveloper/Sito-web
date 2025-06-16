import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Nutrizione Funzionale',
      description: 'Piani nutrizionali personalizzati per ritrovare il benessere attraverso un\'alimentazione equilibrata e funzionale.'
    },
    {
      title: 'Percorsi Nutrizionali',
      description: 'Diete personalizzate, nutrizione sportiva, dieta chetogenica e molto altro.'
    },
    {
      title: 'Bioimpedenziometria',
      description: 'Analisi della composizione corporea per un piano nutrizionale preciso e mirato.'
    }
  ];
} 