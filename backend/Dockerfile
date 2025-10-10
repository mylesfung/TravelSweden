# Dockerfile : plaintext blueprint for Docker image
# Specifies OS, installs SW, copies files, sets env. vars, defines container start command

# Build with Maven and JDK 21
FROM maven:3.9.4-eclipse-temurin-21 AS builder
WORKDIR /app
COPY pom.xml .
# Download dependencies (this allows caching for faster rebuilds)
RUN mvn dependency:go-offline -B
COPY src ./src
# Build the Spring Boot jar
RUN mvn clean package -DskipTests

# Runtime -  lightweight image with only JRE
# images using x86 emulation (required for Cloud Run) have
# worse performance but still deploys fine
FROM eclipse-temurin:21-jre
WORKDIR /app
# Copy the built JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar
# Spring Boot default port
EXPOSE 8080
# Run
ENTRYPOINT ["java", "-jar", "app.jar"]