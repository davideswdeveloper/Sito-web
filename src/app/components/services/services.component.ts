import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
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

} 