import { createFileRoute } from '@tanstack/react-router';
import ReservationView from '../views/ReservationView';

export const Route = createFileRoute('/reservation')({
  head: () => ({
    meta: [
      { title: "Réserver un Rendez-vous • L'Atelier by Lola — Pré-Saint-Gervais" },
      { name: 'description', content: "Réservez en ligne votre soin à L'Atelier by Lola au Pré-Saint-Gervais (93). Head Spa, soins visage, coiffure, Browlift, IPL, blanchiment dentaire. Disponibilités en temps réel." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Prendre Rendez-vous • L'Atelier by Lola" },
      { property: 'og:description', content: "Réservez en ligne votre soin à L'Atelier by Lola au Pré-Saint-Gervais (93). Disponibilités en temps réel." },
      { property: 'og:url', content: 'https://latelierbylola.fr/reservation' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/reservation' }],
  }),
  component: ReservationView,
});
