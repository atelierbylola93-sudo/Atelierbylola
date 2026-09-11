import { createFileRoute } from '@tanstack/react-router';
import CoiffureView from '../views/CoiffureView';

export const Route = createFileRoute('/coiffure')({
  head: () => ({
    meta: [
      { title: "Coiffure & Lissages Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Coiffure premium, lissages brésiliens, Olaplex, balayages et colorations à L'Atelier by Lola au Pré-Saint-Gervais (93). Résultats professionnels garantis." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Coiffure & Lissages Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Coiffure premium, lissages brésiliens, Olaplex, balayages et colorations à L'Atelier by Lola au Pré-Saint-Gervais (93)." },
      { property: 'og:url', content: 'https://latelierbylola.fr/coiffure' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/coiffure' }],
  }),
  component: CoiffureView,
});
