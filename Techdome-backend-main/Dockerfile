# Use a node base image
FROM node:17-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY / .

# Expose port 5000
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
