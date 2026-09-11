import HomeView from './views/HomeView';

// App.tsx est maintenant uniquement le composant de la page d'accueil.
// Toutes les autres pages sont des routes TanStack dans src/routes/.
export default function App() {
  return <HomeView />;
}
