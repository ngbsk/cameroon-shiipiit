# shiipiit — site vitrine

Site vitrine one-page de **shiipiit** : sourcing tech & électroménager depuis la Chine vers le Cameroun (panneaux solaires, électroménager, téléphones, composants), avec service après-vente. Bilingue **FR / EN**.

## Fichiers

- `index.html` — structure de la page.
- `styles.css` — styles (thème clair, accents Cameroun).
- `script.js` — bascule de langue FR/EN, accordéon FAQ, animations (reveal au scroll, parallaxe).

Les trois fichiers doivent rester dans le même dossier (chemins relatifs).

## Sections

Hero · Le sourcing (processus en 3 étapes) · Réassurance · SAV · L'équipe (3 fondateurs) · FAQ · Contact.

## Bilingue FR / EN

Le contenu existe en français et en anglais via les attributs `data-fr` / `data-en` (et `data-fr-html` / `data-en-html` pour le titre). Le bouton **EN / FR** du header bascule toute la page ; le choix est mémorisé (`localStorage`).

## Images d'illustration (placeholders)

Des emplacements d'images sont marqués par un cadre pointillé (classe `.img-ph`) :

- une bannière large dans le hero (`.img-ph.wide`) ;
- une vignette en tête de chacune des 3 cartes du processus (`.img-ph.card-top`).

Pour remplacer un placeholder par une vraie image, il suffit d'insérer une balise `<img>` à l'intérieur du bloc :

```html
<div class="img-ph wide">
  <img src="images/hero.jpg" alt="Entrepôt et conteneurs" />
</div>
```

L'image couvre automatiquement le cadre (`object-fit:cover`). Formats conseillés : `.webp` ou `.jpg` optimisés. Une classe `.img-ph.founder` (avatar rond 84px) est aussi disponible si tu veux remplacer les initiales des fondateurs par des photos.

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
