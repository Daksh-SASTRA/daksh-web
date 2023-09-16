FROM node:latest

WORKDIR /app

COPY . .

# RUN yarn add sharp

RUN npm i

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
