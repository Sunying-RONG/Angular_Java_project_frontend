# Stage 1
FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/projet-java-avance-angular /usr/share/nginx/html