# Vlct

Ce projet repose sur SpringBoot et Angular 5. Il existe deux profiles  
- Dev et  
- Prod.  
Le profile **dev** s'exécute avec une base de données H2  
Le profile **prod**, lui, avec une base de donnée MySQL  

Des scripts **Liquibase** initialisent la base de données (qu'elle soit H2 ou MySQL)  

## Profile dev

En mode **développement**, ouvrir deux consoles.  
Se placer à la racine du projet et exécuter :  
npm install
mvn clean install -DskipTests  
java -jar target/item.manager-0.0.1-SNAPSHOT.war  

dans la seconde console, en racine, exécuter :   
npm install  
npm start  

À l'aide d'un navigateur se connecter à l'adresse http://localhost:9070

## Profile prod
### Pré requis
Ce profile permet d'obtenir un war monolithique dans lequel les fichiers Angular sont "packagés".  

Afin de réaliser cette exécution, il est nécessaire de pouvoir accéder à une base de données **mysql**.  
l'url par défaut est : **jdbc:mysql://192.168.99.101:3306/vlct**,  
l'utilisateur **root** et   
le mot de passe **mypassword**

Néanmoins, ces paramètres sont configurables en précisant  

**-Dspring-boot.run.arguments=--spring.datasource.url=jdbc:mysql://${DB_HOST}:${DB_PORT}/vlct, \  
--spring.datasource.password=mypassword, \  
--spring.datasource.username=root**

il est également possible d'exécuter la base de données sur un conteneur Docker:

**docker run -d \  
 --name vlct_mysql \  
 -p 3306:3306 \  
 -e MYSQL_ROOT_PASSWORD=mypassword \  
 -e MYSQL_DATABASE=vlct \  
 -e MYSQL_USER=vlct \  
 -e MYSQL_PASSWORD=mypassword \  
 mysql:5.7.22**

### Déploiement de l'application avec le profile Prod

npm install  
mvn clean install -DskipTests -Pprod  
java -jar target/item.manager-0.0.1-SNAPSHOT.war  

À l'aide d'un navigateur se connecter à l'adresse http://localhost:8080  

## Création d'une image Docker
Un plugin Maven permet de créer une image Docker de l'application.  

npm install (si l'import des librairies Angular n'a pas été fait au préalable)   
mvn clean install -Pprod -DskipTests
mvn dockerfile:build  

la commande :    
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;           docker images    
permet de valider la création de l'images **vlct:latest**

## Exécution dans un container Docker
Il est possible d'exécuter le projet sur des container Docker.  
Un container héberge la base de données MySQL et un autre l'application.  

Se placer à la racine du projet et exécuter la commande suivante :  

npm install (si l'import des librairies angular n'a pas été fait au préalable)   
mvn clean install -Pprod -DskipTests  
cd target  
mvn docker-compose up -d  

À l'aide d'un navigateur se connecter à l'adresse http://${DOCKER_HOST}:9090
