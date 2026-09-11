import { createFileRoute } from '@tanstack/react-router';
import IplView from '../views/IplView';

export const Route = createFileRoute('/ipl')({
  head: () => ({
    meta: [
      { title: "Épilation IPL Longue Durée Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Épilation à lumière pulsée (IPL) sans douleur au Pré-Saint-Gervais (93). Aisselles, maillot intégral, jambes, bras. Résultats durables dès les premières séances à L'Atelier by Lola." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Épilation IPL Longue Durée Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Épilation à lumière pulsée (IPL) sans douleur au Pré-Saint-Gervais (93). Résultats durables à L'Atelier by Lola." },
      { property: 'og:url', content: 'https://latelierbylola.fr/ipl' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/ipl' }],
  }),
  component: IplView,
});
