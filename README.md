# Vlct

Ce projet repose sur SpringBoot et Angular 5. Il existe deux profiles  
Dev et Prod.  
Le profile dev s'exécute avec une base de données H2  
Le profile prod, lui, avec une base de donnée MySQL  

Des scripts liquibase initialisent la base de données (qu'elle soit H2 ou MySQL)  

## Profile dev

En mode développement ouvrir deux console.  
Se placer à racine du projet et exécuter :  

mvn clean install -DskipTests  
java -jar target/item.manager-0.0.1-SNAPSHOT.war  

dans la seconde console, en racine exécuter :   
npm install  
npm start  

## Profile prod
Afin de réaliser cette exécution, il est nécessaire de pouvoir accéder une base de données mysql.

## Exécution dans un container Docker
Il est possible d'exécuter le projet avec les deux profiles. 
Pour celà, se placer à la racine du projet et exécuter la commande suivante :  

npm install
pour le profile prod : mvn clean install -Pprod -DskipTests  
pour le profile dev : mvn clean install -DskipTests  

cd target  
mvn docker-compose up
