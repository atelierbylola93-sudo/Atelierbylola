import { createFileRoute } from '@tanstack/react-router';
import SoinsVisageView from '../views/SoinsVisageView';

export const Route = createFileRoute('/soins-visage')({
  head: () => ({
    meta: [
      { title: "Soins du Visage d'Exception Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Soins visage signature, HydraFacial, soin régénérant et rituels bio à L'Atelier by Lola au Pré-Saint-Gervais (93). Teint parfait et lumineux garanti." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Soins du Visage Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Soins visage signature, HydraFacial, soin régénérant et rituels bio à L'Atelier by Lola au Pré-Saint-Gervais (93)." },
      { property: 'og:url', content: 'https://latelierbylola.fr/soins-visage' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/soins-visage' }],
  }),
  component: SoinsVisageView,
});
