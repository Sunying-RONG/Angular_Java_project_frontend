FROM node:alpine 
WORKDIR /app
RUN npm install -g @angular/cli@15
COPY package*.json ./
RUN npm ci 
COPY . .
EXPOSE 4200
CMD [ "ng", "serve" ]