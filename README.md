# RealWorld - NodeJS

## Membres de l'équipe

- Victor DUCHENET
- Yoann GUEGUEN
- Kévin SIBUE

## Démarrage

* Cloner le repository
* `npm install` pour télécharger les dépendances
* Démarrer le serveur avec `npm run dev`

## Dépendances

- La version 3.2 de MongoDB est nécessaire pour faire fonctionner l'API (pour Windows, il est nécessaire de créer les dossier : 'C:/data/db')

## Tests

**ATTENTION ! Il faut démarrer le serveur d'API avant d'executer les tests**

Pour les tests automatiques de l'API via postman, merci d'éxécuter la commande `npm run test`. Dans le cas des tests unitaires il faudra executer la commande `npm run unittest`

## Ce qui a été fait

- Création d'un script 'beforeTest.sh' to drop database
- Correction des tests d'intégration (voir package.json script "npm run test")
- Mise en place de Jest pour les tests unitaires en NodeJS
- Création de plusieurs mock (voir dossier '/unit-tests/mocks')
- Création de plusieurs tests unitaires :
    - Modèle 'Article'
      - slug is lowercase
      - slug must be unique
      - by default favoriteCounts is equal to 0
    - Modèle 'User'
      - generate a JWT with a 60 days validity
      - username must be lowercase
      - email must be lowercase
      - username can't be blank
      - email can't be blank
      - throw error if username is invalid
      - throw error if email is invalid
    - Route '/user' et '/users'
      - send error if there no email in body
      - send error if there no password in body
      - send error if email is not valid
- Mise en place d'une configuration de debug pour VSCode (ne fonctionne pas sur toutes les machines)