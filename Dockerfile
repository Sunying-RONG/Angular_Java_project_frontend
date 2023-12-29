FROM node:alpine 
WORKDIR /front-app
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm ci 
COPY . .
EXPOSE 4200
CMD [ "ng", "serve" ]