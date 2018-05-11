FROM openjdk:8-jdk-alpine
RUN apk add --no-cache bash
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE
COPY ${JAR_FILE} /app.war
COPY wrapper.sh /wrapper.sh
RUN chmod +x wrapper.sh
ENTRYPOINT ["/bin/bash", "/wrapper.sh"]