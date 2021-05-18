FROM node:15
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install && yarn build
COPY . .
EXPOSE 9999
CMD [ "node", "dist/index.js"]