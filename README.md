# L'Atelier by Lola — Site Web Officiel

Institut de beauté haut de gamme au **Pré-Saint-Gervais (93)** — Head Spa japonais, soins du visage signature, coiffure, blanchiment dentaire, épilation IPL et détatouage.

---

## ✨ Services

| Soin | Description |
|------|-------------|
| **Head Spa Japonais** | Rituel capillaire sensoriel inspiré des techniques nippones |
| **Soins Visage** | HydraFacial, soins signature adaptés à chaque peau |
| **Beauté du Regard** | Browlift, rehaussement cils, coloration |
| **Coiffure** | Lissages, kératine, colorations, coupes |
| **Blanchiment Dentaire** | Éclaircissement professionnel LED sans douleur |
| **Épilation IPL** | Épilation longue durée à lumière pulsée |
| **Détatouage** | Effacement laser de tatouages |
| **Soins Corps Algues** | Enveloppements et soins corps reminéralisants |

---

## 🛠 Stack Technique

- **Framework** : [TanStack React Start](https://tanstack.com/start) v1.168 (SSR via Nitro)
- **Router** : TanStack Router v1.170
- **Frontend** : React 19, Tailwind CSS v4, Framer Motion, Lucide React
- **Base de données / Auth** : [Supabase](https://supabase.com) (PostgreSQL)
- **Déploiement** : Vercel (preset Nitro `vercel`)

---

## 🚀 Installation locale

Prérequis : **Node.js ≥ 20** et **npm**.

```sh
# 1. Cloner le dépôt
git clone <url-du-repo>
cd <nom-du-repo>

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# → Remplir VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY, etc.

# 4. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

---

## 📦 Build de production

```sh
# Build standard (Node)
npm run build

# Build preset Vercel (génère .vercel/output/)
$env:NITRO_PRESET="vercel"; npm run build   # PowerShell
NITRO_PRESET=vercel npm run build           # bash/zsh
```

---

## ☁️ Déploiement Vercel

### Option A — Via l'interface Vercel (recommandé)

1. Pousser le code sur **GitHub** (branche `main`)
2. Aller sur [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
3. Sélectionner le dépôt `atelier-by-lola`
4. Dans **Settings > Environment Variables**, renseigner :

| Variable | Valeur |
|----------|--------|
| `VITE_SITE_URL` | `https://latelierbylola.fr` |
| `VITE_SUPABASE_URL` | *(depuis votre .env)* |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | *(depuis votre .env)* |
| `SUPABASE_URL` | *(depuis votre .env)* |
| `SUPABASE_PUBLISHABLE_KEY` | *(depuis votre .env)* |
| `SUPABASE_SERVICE_ROLE_KEY` | *(clé secrète Supabase)* |

5. Laisser les champs Build / Output par défaut (lus depuis `vercel.json`)
6. Cliquer **Deploy** ✅

### Option B — Via Vercel CLI

```sh
npm i -g vercel
vercel --prod
```

---

## 🔍 SEO & Indexation

- `public/sitemap.xml` — 12 URLs avec `<lastmod>`, `<changefreq>` et `<priority>`
- `public/robots.txt` — Autorise Googlebot/Bingbot, protège `/admin`, `/login`, `/api/`
- `public/favicon.svg` — Monogramme **L** doré (couleur marque `#B88F4D`)
- SSR activé via Nitro → HTML complet servi aux bots sans JS côté client
- Schema.org `LocalBusiness` intégré dans `<SchemaLocalBusiness />`

---

## 🗂 Structure du projet

```
src/
├── routes/         # Pages (TanStack Router file-based routing)
│   ├── __root.tsx  # Layout racine, <head> global, favicon, meta SEO
│   ├── index.tsx   # Page d'accueil
│   ├── head-spa.tsx
│   ├── reservation.tsx
│   └── api/        # Server functions (endpoints Supabase)
├── views/          # Composants de vue par page
├── components/     # Composants réutilisables (Header, Footer, UI...)
├── lib/            # Fonctions serveur (availability, admin)
└── integrations/   # Client Supabase (browser + server)
public/
├── favicon.svg     # Icône vectorielle marque
├── favicon.ico     # Icône fallback navigateurs anciens
├── sitemap.xml     # Plan du site pour Googlebot
└── robots.txt      # Règles d'exploration
```

---

## 📄 Licence

Code propriétaire — © L'Atelier by Lola. Tous droits réservés.
