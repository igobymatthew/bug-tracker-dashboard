FROM node:18
WORKDIR /app
COPY ./server/api/package*.json ./
RUN npm install
COPY ./server/api .
EXPOSE 5000
CMD ["node", "app.js"]