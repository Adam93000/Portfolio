# Portfolio - Adam Moskatelo

Projet 12 - Parcours Développeur Web / Intégrateur Web OpenClassrooms.

## Architecture du projet

L'arborescence et les composants ont été déduits directement de la maquette Figma officielle du projet :

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── common/             # Composants d'interface génériques (SectionHeader, Button, Badge)
│   ├── layout/             # Éléments structurants globaux (Header, Navigation, Footer)
│   └── sections/           # Sections identifiées depuis la maquette Figma
│       ├── Hero/           # Présentation et proposition de valeur
│       ├── About/          # Pitch et démarche
│       ├── Skills/         # Grille de compétences techniques et outils
│       ├── Projects/       # Galerie de réalisations (ProjectCard, liens GitHub & Live)
│       ├── Timeline/       # Frise chronologique (Parcours & formations)
│       └── Contact/        # Formulaire de contact et liens réseaux
├── pages/
│   └── Home/               # Page principale assemblant les sections
├── styles/
│   ├── variables.css       # Variables CSS (couleurs, polices, tokens Figma)
│   └── global.css          # Reset et styles de base
├── App.jsx
├── main.jsx
└── index.css
```

## Démarrage rapide

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

3. Construire le projet pour la production :
   ```bash
   npm run build
   ```

