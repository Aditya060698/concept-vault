# Starters

This folder contains minimal templates for quick concept drills.

## Java (Maven) Kata
```
cd templates/java-maven-kata
mvn -q -DskipTests=false test
mvn -q exec:java -Dexec.mainClass=app.Main  # if you add exec plugin
```

## Spring Boot (Maven)
```
cd templates/spring-boot-maven
mvn spring-boot:run
curl http://localhost:8080/api/ping  # -> pong
```

## React (Vite + TS)
```
cd templates/react-vite-ts
npm install    # or pnpm i / yarn
npm run dev
```

## JS/TS Kata
```
cd templates/js-ts-kata
npm install
npm run dev
```
