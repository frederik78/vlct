#!/bin/sh
while sleep 15; do
  break
done
java -Djava.security.egd=file:/dev/./urandom -jar /app.war

