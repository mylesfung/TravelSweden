# TravelSweden

A Travel Dashboard App for Visiting Skåne County in Sweden, offering various interactive widgets for information and planning.

---

## Table of Contents

- [Features](#features)
- [Stack](#stack)
- [Local Setup](#local-setup)
- [Deployment](#deployment)
- [Contribute](#contribute)

---

## Features

TravelSweden offers prospective travelers and study abroad students useful information and planning tools. 

Users can: 
- View, create travel stories anonymously
- Create account, login, view account information, logout, delete account
- Create, edit, delete travel stories tied to username
- View local travel information related to lodging, cuisine, history, nature, public transit, Swedish design
- Access the Skånetrafiken regional transit app, Weather Spark data for Malmö, Sweden, and information related to UCEAP study abroad programs in Skåne

---

## Stack

- **Frontend** React, Tailwind
- **Backend** Spring Boot (JPA/Hibernate, Spring Security, JUnit, Mockito), Maven
- **Database** PostgreSQL
- **Containerization** Docker
- **Deployment** Cloud Run

---

## Local Setup

### Prerequisities

- npm >= 10.1.0
- Java >= 21
- PostgreSQL
- Docker

### Create/Start Postgres Image in Docker

- Configure application-dev.properties (Maven) to expose your DB port, name, user credentials

### Run backend (contains React build) at localhost:8080

./mvnw spring-boot:run -Dspring-boot.run.profiles=dev

---

## Deployment 

1. Change directory to: backend/
2. Build image from Dockerfile
    % docker build -t travelsweden:X.X.X .
3. Tag image
    % docker tag travelsweden:X.X.X cloud-run-artifact-url
4. Deploy image
    % gcloud run deploy travelsweden --image=X --add-cloudsql-instances=X --set-env-vars=X

---

## Contribute 

1. Fork the repo
2. Create feature branch
3. Submit PR
