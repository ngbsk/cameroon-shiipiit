# cameroon.shiipiit — site vitrine

Site vitrine one-page de **cameroon.shiipiit** : sourcing tech & électroménager depuis la Chine vers le Cameroun (panneaux solaires, électroménager, téléphones, composants), avec service après-vente. Bilingue **FR / EN**.

## Fichiers

- `index.html` — structure de la page.
- `styles.css` — styles (thème clair, accents Cameroun).
- `script.js` — bascule de langue FR/EN, accordéon FAQ, animations (reveal au scroll, parallaxe).

Les trois fichiers doivent rester dans le même dossier (chemins relatifs).

## Sections

Hero · Le sourcing (processus en 3 étapes) · Réassurance · SAV · L'équipe (3 fondateurs) · FAQ · Contact.

## Bilingue FR / EN

Le contenu existe en français et en anglais via les attributs `data-fr` / `data-en` (et `data-fr-html` / `data-en-html` pour le titre). Le bouton **EN / FR** du header bascule toute la page ; le choix est mémorisé (`localStorage`).

## Images

Les images (hero, 3 cartes du processus, 3 fondateurs) sont hébergées sur **Cloudflare Images** et référencées par URL directement dans `index.html` (`https://imagedelivery.net/…/w=800`). Elles ne sont donc **pas versionnées** — le dossier local `images/` est ignoré par Git (`.gitignore`).

Chaque `<img>` est posée dans un conteneur `.img-ph` qui la recadre automatiquement (`object-fit:cover`) : bannière large du hero (`.img-ph.wide`) et vignette en tête des 3 cartes du processus (`.img-ph.card-top`). Les avatars des fondateurs utilisent `.avatar`.

Pour changer une image, il suffit de remplacer l'URL correspondante dans `index.html`.

## Développement

Aucune dépendance ni build. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python -m http.server 8000
```

## Déploiement (Cloudflare Pages)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages**.
2. Connecter ce dépôt Git (ou *Upload assets* avec les fichiers).
3. Build command : *(vide)* · Output directory : `/`.

Le site est statique : n'importe quel hébergeur de fichiers statiques convient.

## Contact

contact@shiipiit.com
