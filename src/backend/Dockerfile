FROM node:10

WORKDIR /srv

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY entrypoint.sh /entrypoint.sh
COPY . .

RUN npm run build 

ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "start"]