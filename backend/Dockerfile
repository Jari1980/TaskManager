FROM maven:3.9.9-eclipse-temurin-21 AS builder


WORKDIR /build

COPY pom.xml .

RUN mvn -B -q -e -DskipTests dependency:go-offline

COPY src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine

WORKDIR /TaskManager

COPY --from=builder /build/target/*.jar TaskManager.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "TaskManager.jar"]