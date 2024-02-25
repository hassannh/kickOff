

# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app


# Copy the entire app directory to the working directory
COPY . .

# Install app dependencies
RUN npm install

# Expose port 8081 for the React Native packager
EXPOSE 8081

# Start the app
CMD ["npx", "expo", "start"]