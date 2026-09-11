# Instructions pour agents IA — L'Atelier by Lola

Ce projet est le site officiel de **L'Atelier by Lola**, institut de beauté au Pré-Saint-Gervais (93310).

## Stack

- **Framework** : TanStack React Start v1.168 (SSR via Nitro)
- **Router** : TanStack Router v1.170 (file-based routing dans `src/routes/`)
- **Base de données** : Supabase (PostgreSQL + Auth)
- **Styles** : Tailwind CSS v4
- **Déploiement** : Vercel

## Conventions

- Les routes sont dans `src/routes/` — ne pas modifier `src/routeTree.gen.ts` (auto-généré).
- Les fonctions serveur utilisent `createServerFn` de `@tanstack/react-start`.
- L'URL canonique de production est `https://latelier-by-lola.fr`.
- La couleur principale de la marque est `#B88F4D` (doré).
- Ne pas exposer `SUPABASE_SERVICE_ROLE_KEY` côté client.
