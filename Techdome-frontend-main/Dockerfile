# Use a node base image
FROM node:17-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY / .

# Build the frontend
RUN npm run build

# Use a smaller image for serving
FROM nginx:alpine

# Copy the build files to nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
