# CRUDOtodo

### Une application en Javascript Utilisant l'environnement <br> NodeJs Pour se connecter à une base de données PostgreSQL


> L'utilisation de l'application nécessite une version de Nodejs 16.x, se rassurer que npm est aussi installer
>
> Une base de données (PostgreSQL) doit être créée au préalable, avec une table tasks(id, nom, temps)

<h4>Installation</h4>


* __Clôner le repertoire avec__ ```git```


```bash
https://github.com/Annette-Bwemere-Salama/CRUDtodo.git
```

* __Installer les modules nécessaires avec__ ```npm```

```bash
npm install
```
### Configuration

La configuration se fait dans le fichier ```.env``` à la racine du projet. Il devra contenir les informations de connexion à la base de données à utiliser.

```bash

DBPASSWORD='DATABASE_PASSWORD'
DBUSER='DATABASE_USER'
DBNAME='DATABASE_NAME'
DBTABLE='TABLE_NAME'
DBPORT='PORT'
DBHOST='DATABASE_SERVER_HOST'
```

Vous pouvez personnaliser le port sur lequel le serveur sera demarré en ajoutant la ligne suivante dans le fichier ```.env```

```bash
PORT='PORT_NUMBER'
```


<h3>Utilisation</h3>


🌟N'oubliez pas d'installer 
```bash
 https://www.postman.com/downloads/
```
postman est l'outils du développeur backend

🌟Utiliser la ligne de commande pour demarrer le serveur, par defaut au port 3001,

```bash
npm start
```


[http://localhost:3001](http://localhost:3001 "Ouvrir")

🛑 Le serveur peut être arrêter à tout moment avec le racourci ```ctrl+c``` sur la ligne de commande

<br>

#### Les contributeurs


🖥️[Alexandre Chambu](https://github.com/lexnotor)

💻[Josué Makuta](https://github.com/JoMakuta)

💻[GloiMir](https://github.com/GloiMir)

🖥️[Samuel Mbabhazi](https://github.com/samuelmbabhazi)

💻[Annette Bwemere](https://github.com/Annette-Bwemere-Salama)
