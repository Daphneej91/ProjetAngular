# ProjetTD1

Projet scolaire réalisé en groupe dans le cadre du cours de Angular.

Cette application Angular permet de gérer une bibliothèque de films avec différentes fonctionnalités selon le rôle de l’utilisateur (Developer ou User).

## Fonctionnalités principales :
- Ajouter, modifier et supprimer des films (mode Developer)
- Mettre un film en favoris
- Rechercher un film
- Choisir un film aléatoirement
- Gestion des rôles (User / Developer)

## Fonctionnalités detaillées

### Mode User
- Rechercher un film
- Ajouter un film aux favoris
- Choisir un film aléatoirement
- Consulter la liste des films

### Mode Developer
- Ajouter un film
- Modifier un film
- Supprimer un film

## Technologies utilisées

- Angular CLI (version 20.3.16)
- TypeScript
- HTML / CSS
- Jasmine & Karma (tests unitaires)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## tests

Aucun test n’a été implémenté pour le moment.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
