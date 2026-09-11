import { createFileRoute } from '@tanstack/react-router';
import MentionsLegalesView from '../views/MentionsLegalesView';

export const Route = createFileRoute('/mentions-legales')({
  head: () => ({
    meta: [
      { title: "Mentions Légales • L'Atelier by Lola" },
      { name: 'description', content: "Mentions légales du site L'Atelier by Lola, institut de beauté au Pré-Saint-Gervais (93)." },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/mentions-legales' }],
  }),
  component: MentionsLegalesView,
});
