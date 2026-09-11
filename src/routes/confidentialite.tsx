import { createFileRoute } from '@tanstack/react-router';
import ConfidentialiteView from '../views/ConfidentialiteView';

export const Route = createFileRoute('/confidentialite')({
  head: () => ({
    meta: [
      { title: "Politique de Confidentialité & RGPD • L'Atelier by Lola" },
      { name: 'description', content: "Politique de confidentialité et protection des données personnelles (RGPD) du site L'Atelier by Lola au Pré-Saint-Gervais (93)." },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/confidentialite' }],
  }),
  component: ConfidentialiteView,
});
