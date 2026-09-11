import { createFileRoute } from '@tanstack/react-router';
import BlanchimentDentaireView from '../views/BlanchimentDentaireView';

export const Route = createFileRoute('/blanchiment-dentaire')({
  head: () => ({
    meta: [
      { title: "Blanchiment Dentaire Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Blanchiment dentaire LED esthétique au Pré-Saint-Gervais (93). Formules Soft, Max et Extra White. Jusqu'à 8 teintes en 1 séance, sans douleur ni sensibilité. L'Atelier by Lola." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Blanchiment Dentaire Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Blanchiment dentaire LED sans douleur au Pré-Saint-Gervais (93). Jusqu'à 8 teintes en 1 séance à L'Atelier by Lola." },
      { property: 'og:url', content: 'https://latelierbylola.fr/blanchiment-dentaire' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/blanchiment-dentaire' }],
  }),
  component: BlanchimentDentaireView,
});
