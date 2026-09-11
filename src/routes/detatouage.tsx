import { createFileRoute } from '@tanstack/react-router';
import DetatouageView from '../views/DetatouageView';

export const Route = createFileRoute('/detatouage')({
  head: () => ({
    meta: [
      { title: "Détatouage Sourcils & Esthétique Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Correction et effacement de dermopigmentation au Pré-Saint-Gervais (93). Détatouage sourcils, contour lèvres, taches de rousseur à L'Atelier by Lola. Technique douce sans laser." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Détatouage Esthétique Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Correction de dermopigmentation, détatouage sourcils et contour lèvres à L'Atelier by Lola au Pré-Saint-Gervais (93)." },
      { property: 'og:url', content: 'https://latelierbylola.fr/detatouage' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/detatouage' }],
  }),
  component: DetatouageView,
});
