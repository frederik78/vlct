FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE
COPY ${JAR_FILE} /app.war
COPY wrapper.sh .
RUN chmod +x wrapper.sh
CMD sh wrapper.sh