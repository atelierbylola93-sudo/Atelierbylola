import { createFileRoute } from '@tanstack/react-router';
import HeadSpaView from '../views/HeadSpaView';

export const Route = createFileRoute('/head-spa')({
  head: () => ({
    meta: [
      { title: "Head Spa Japonais Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Découvrez le Head Spa japonais de L'Atelier by Lola au Pré-Saint-Gervais (93). Massage crânien, arche d'eau thérapeutique, soin du cuir chevelu et relaxation profonde. Réservez en ligne." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Head Spa Japonais Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Découvrez le Head Spa japonais de L'Atelier by Lola au Pré-Saint-Gervais (93). Massage crânien, arche d'eau thérapeutique, soin du cuir chevelu et relaxation profonde." },
      { property: 'og:url', content: 'https://latelierbylola.fr/head-spa' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/head-spa' }],
  }),
  component: HeadSpaView,
});
