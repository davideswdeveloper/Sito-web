import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  prenotaVisita() {
    window.open('https://www.miodottore.it/maria-pia-raso/nutrizionista/roma', '_blank');
  }

  scriviWhatsApp() {
    const phone = '393295840904';
    const message = encodeURIComponent('Ciao, vorrei prenotare una consulenza.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }

  portamiQui(sede: string) {
    if (sede === 'online') {
      // Per le consulenze online, apri il link di prenotazione
      window.open('https://www.miodottore.it/maria-pia-raso/nutrizionista/roma', '_blank');
    } else {
      // Per le sedi fisiche, apri Google Maps con l'indirizzo
      const encodedAddress = encodeURIComponent(sede);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(googleMapsUrl, '_blank');
    }
  }
}
