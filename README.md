# Vlct

Ce projet repose sur SpringBoot et Angular 5. Il existe deux profiles  
- Dev et  
- Prod.  
Le profile **dev** s'exécute avec une base de données H2  
Le profile **prod**, lui, avec une base de donnée MySQL  

Des scripts **Liquibase** initialisent la base de données (qu'elle soit H2 ou MySQL)  

## Profile dev

En mode **développement**, ouvrir deux console.  
Se placer à la racine du projet et exécuter :  
npm install
mvn clean install -DskipTests  
java -jar target/item.manager-0.0.1-SNAPSHOT.war  

dans la seconde console, en racine exécuter :   
npm install  
npm start  

À l'aide d'un navigateur se connecter à l'adresse http://localhost:9070

## Profile prod

Ce profile permet d'obtenir un war monolithique dans lequel les fichiers Angular sont "packagés".  

Afin de réaliser cette exécution, il est nécessaire de pouvoir accéder une base de données **mysql**.  
son url par défaut est : **jdbc:mysql://192.168.99.101:3306/vlct** 

Néanmoins, cette adresse est configurable en précisant le paramètre  
**-Dspring.datasource.url=jdbc:mysql://<HOST>:<PORT>/vlct**

npm install  
mvn clean install -DskipTests -Pprod  
java -jar target/item.manager-0.0.1-SNAPSHOT.war  

À l'aide d'un navigateur se connecter à l'adresse http://localhost:8080

## Exécution dans un container Docker
Il est possible d'exécuter le projet avec les deux profiles. 
Pour celà, se placer à la racine du projet et exécuter la commande suivante :  

npm install  
pour le profile **prod** : mvn clean install -Pprod -DskipTests  
pour le profile **dev** : mvn clean install -DskipTests  

cd target  
mvn docker-compose up

