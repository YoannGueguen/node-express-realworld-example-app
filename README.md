# RealWorld - NodeJS

## Membres de l'équipe

- Victor DUCHENET
- Yoann GUEGUEN
- Kévin SIBUE

## Démarrage

* Cloner se repository
* `npm install` pour télécharger les dépendances
* Démarrer le serveur avec `npm run dev`

## Dépendances

- La version 3.2 de MongoDB est nécessaire pour faire fonctionner l'API

## Tests

**ATTENTION ! Il faut démarrer le serveur d'API avant d'executer les tests**

Pour les tests automatique de l'API via postman, merci d'executer les commande `npm run test`. Dans le cas des tests unitaires il faudra executer la commande `npm run unittest`

## Ce qui à été fait

- Création d'un script 'beforeTest.sh' to drop database
- Correction des tests d'intégrations (voir package.json script "npm run test")
- Mise en place de Jest pour les tests unitaires en NodeJS
- Création de plusieurs mock (voir dossier '/unit-tests/mocks')
- Création de plusieurs test unitaires :
  - slug is lowercase
  - slug must be unique
  - by default favoriteCounts is equal to 0
  - generate a JWT with a 60 days validity
  - username must be lowercase
  - email must be lowercase
  - username can't be blank
  - email can't be blank
  - throw error if username is invalid
  - throw error if email is invalid
  - send error if there no email in body
  - send error if there no password in body
  - send error if email is not valid
- Mise en place d'une configuration de debug pour VSCode (ne fonctionne pas sur toutes les machines)