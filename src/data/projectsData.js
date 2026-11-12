import kasaMockup from '../assets/images/kasa-mockup.webp';
import ninaMockup from '../assets/images/nina-mockup.webp';
import eventsMockup from '../assets/images/724events-mockup.webp';

export const projectsData = [
    {
        id: "kasa-01",
        title: "Kasa",
        subtitle: "Application React de location d'appartements",
        coverImage: kasaMockup,
        tags: ["React", "React Router", "Sass"],
        content: {
            context: "Refonte totale du front-end d'une plateforme de location d'appartements entre particuliers, impliquant le passage d'une ancienne codebase obsolète vers une stack moderne.",
            objectives: "Développer l'interface en Single Page Application (SPA), assurer une navigation fluide sans rechargement, et garantir un affichage 100% responsive.",
            stack: "React, React Router, JavaScript (ES6+), Sass, Node.js.",
            skills: "Initialisation d'une app React, découpage en composants réutilisables, gestion complexe du routage et manipulation du state local.",
            results: "Livraison d'une application dynamique et performante avec des animations fluides, offrant une UX moderne.",
            improvements: "Intégration d'un outil de gestion d'état global comme Redux pour préparer un passage à l'échelle."
        },
        links: {
            github: "https://github.com/Adam93000/Projet-7-OpenClassrooms",
            demo: "https://kasaappproject.netlify.app/"
        }
    },
    {
        id: "nina-02",
        title: "Nina Carducci",
        subtitle: "Optimisation SEO et Accessibilité",
        coverImage: ninaMockup,
        tags: ["SEO", "Accessibilité", "Performance", "Lighthouse"],
        content: {
            context: "Intervention sur le site vitrine d'une photographe indépendante qui souffrait de temps de chargement longs et d'un manque de visibilité sur les moteurs de recherche.",
            objectives: "Réaliser un audit technique complet, puis optimiser les performances globales, le référencement naturel (SEO) et l'accessibilité du site web.",
            stack: "HTML5, CSS3, JavaScript, Lighthouse, Wave, outils de compression d'images.",
            skills: "Réalisation d'audits de performance, optimisation technique du SEO (balisage sémantique, métadonnées), correction de bugs d'affichage et rédaction d'un rapport d'intervention détaillé.",
            results: "Amélioration drastique des scores Lighthouse (Performance, Accessibilité et SEO dans le vert), réduction du poids des ressources et navigation plus fluide.",
            improvements: "Mise en place d'une intégration continue (CI/CD) pour exécuter automatiquement les tests Lighthouse à chaque nouvelle mise à jour du code."
        },
        links: {
            github: "https://github.com/Adam93000/Projet-8-OpenClassrooms",
            demo: "https://adam93000.github.io/Projet-8-OpenClassrooms/"
        }
    },
    {
        id: "724events-03",
        title: "724events",
        subtitle: "Débogage et tests d'une application React",
        coverImage: eventsMockup,
        tags: ["React", "Jest", "React Testing Library", "Débogage"],
        content: {
            context: "Le site vitrine d'une agence d'événementiel (724events) présentait des bugs bloquants au niveau de son slider, de ses filtres et de son formulaire, juste avant sa mise en production.",
            objectives: "Identifier et corriger les bugs existants sur l'application React, finaliser le cahier de recette et implémenter des tests unitaires et d'intégration.",
            stack: "React, Chrome DevTools, Jest, React Testing Library.",
            skills: "Utilisation avancée des React DevTools pour le débogage, rédaction et exécution de tests unitaires/intégration, et rédaction rigoureuse d'un cahier de recette.",
            results: "L'application est désormais 100% fonctionnelle avec une couverture de test améliorée, et le cahier de recette a été validé pour la mise en production.",
            improvements: "Mettre en place des tests End-to-End (E2E) avec Cypress pour simuler le parcours complet d'un utilisateur."
        },
        links: {
            github: "https://github.com/Adam93000/Projet-9-OpenClassrooms",
            demo: "https://glittering-macaron-3385d0.netlify.app/"
        }
    }
];
