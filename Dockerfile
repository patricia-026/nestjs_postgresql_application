FROM node:18.15.0

WORKDIR /app

COPY ./package*.json ./
COPY ./tsconfig.build.json ./
COPY ./tsconfig.json ./
RUN npm install

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]