import { createFileRoute } from '@tanstack/react-router';
import BeauteRegardView from '../views/BeauteRegardView';

export const Route = createFileRoute('/beaute-regard')({
  head: () => ({
    meta: [
      { title: "Browlift & Rehaussement de Cils Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { name: 'description', content: "Browlift, rehaussement de cils, restructuration de sourcils et Pack Regard Sublime à L'Atelier by Lola au Pré-Saint-Gervais (93). Regard intense sans maquillage." },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: "Browlift & Beauté du Regard Le Pré-Saint-Gervais • L'Atelier by Lola" },
      { property: 'og:description', content: "Browlift, rehaussement de cils et restructuration de sourcils à L'Atelier by Lola au Pré-Saint-Gervais (93)." },
      { property: 'og:url', content: 'https://latelierbylola.fr/beaute-regard' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://latelierbylola.fr/beaute-regard' }],
  }),
  component: BeauteRegardView,
});
