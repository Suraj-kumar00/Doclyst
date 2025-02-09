FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

# using --legacy-peer-deps because using next version 15
RUN npm install --legacy-peer-deps 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]