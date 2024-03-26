FROM node:latest

WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 3000

RUN npx prisma migrate generate
RUN npx prisma migrate dev

CMD ["npm", "start"]