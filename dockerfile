

# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app


COPY . .

RUN npm install

EXPOSE 8081

CMD ["npx", "expo", "start"]