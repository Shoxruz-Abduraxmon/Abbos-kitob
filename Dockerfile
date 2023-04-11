# Specify the base image
FROM node:18


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variables for MongoDB
ENV MONGO_HOST mongodb
ENV MONGO_PORT 27017

# Expose port 3000 for the Node.js server
EXPOSE 8080

# Start the Node.js server
CMD ["npm", "start"]