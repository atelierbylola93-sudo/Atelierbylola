import { createFileRoute } from '@tanstack/react-router';
import SoinsCorpsAlguesView from '../views/SoinsCorpsAlguesView';

export const Route = createFileRoute('/soins-corps-algues')({
  head: () => ({
    meta: [
      { title: "Soin Corps aux Algues Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Soin corps enveloppement aux algues marines au Pré-Saint-Gervais (93). Détoxification, drainage, reminéralisation et raffermissement à L'Atelier by Lola. Thalassothérapie premium." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Soin Corps aux Algues Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Enveloppement aux algues marines, drainage et reminéralisation au Pré-Saint-Gervais (93) à L'Atelier by Lola." },
      { property: 'og:url', content: 'https://latelierbylola.fr/soins-corps-algues' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/soins-corps-algues' }],
  }),
  component: SoinsCorpsAlguesView,
});
