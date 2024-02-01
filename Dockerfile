FROM node:21.6.1-alpine
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . .


RUN npm ci
RUN npm run build
EXPOSE 4000
CMD ["npm", "run","start"]
