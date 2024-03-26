FROM node:latest

WORKDIR /

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "start"]