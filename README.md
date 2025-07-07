# Epetitpas-project

Ce projet est une application utilisant Express.js, React.js, Prisma postgreSQL

## Installation

Pour installer l'application il suffit de lancer le script suivant depuis la racine du projet :

``` bash
cd backend
npm install
cd ../frontend
npm install

```

## Utilisation

Pour lancer l'application, il faut d'abord lancer le serveur :

``` bash
cd backend
npx prisma generate
npx prisma db pull
node index.js
```

Puis on peut lancer l'application avec les commandes suivante :

``` bash
cd frontend
npm start
```

## Explication

La partie frontend possède deux pages, la première est celle de connexion et la deuxième est celle détaillant les information de la personne dans la base de données.

Comme il y a deux pages, nous avons besoin d'utiliser la librairies *react-router-dom* pour pouvoir naviquer entre les pages.

La page de connexion est juste un formulaire qui va être envoyer au serveur ainsi qu'une redirection. Sur cette page, nous utilisons la fonction useState de *react* pour permettre de mettre à jour les valeur à communiquer avec le backend. La fonction permettant d'envoyer les réponse du formulaire est la fonction asynchrone HandleClick qui empêche la page de s'actualiser et verifie que le mail possède bien un @. Ensuite cette fonction envoie une requête au serveur avec *fetch* et attend la réponse avec *await*, transforme cette réponse en format json si elle n'est pas nulle, la stocke localement et redirige l'utilisateur sur la deuxième page de l'interface.

La page des détails utilisateurs récupure les données stockées localement, et les affiche sous forme de liste.

Pour ce qui est de la partie backend il y a deux fichier : prismaClient.js qui sert juste à instancier le client prisma et index.js qui est le serveur.

index.js importe les module express, cors et prismaClient et les utilisent. Notamment cors qui est sert à communiquer entre client et serveur. Le serveur fait deux chose. Si on passe par la route api/signin il récupère le mail et le nom et recherche dans la base de données si il trouve qu'il n'y a personne dedans il renvoie un réponse nulle sinon il transforme le type BigInt de id en chaîne de caractère et renvoie les données qu'il a trouvé. Si on passe par la route api/signup, il cherche dans la base de données si le nom et le mail est associé à une ligne de la table. Si il trouve une ligne, le serveur renvoie une réponse nulle, sinon il créé une nouvelle ligne.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
