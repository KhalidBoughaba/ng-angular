#first stage of building angular image 

# Use the official Node.js image as the base image
FROM node:slim as build
RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the Docker image
COPY package*.json /app/

# Install the dependencies for the Angular application
RUN npm install

# Copy the rest of the Angular application files to the Docker image
COPY . /app/

# Build the Angular application using the Angular CLI
RUN npm run build --prod

#second stage of building angular image
# Use the official nginx image as the base image
FROM nginx:stable

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/ngTraining /usr/share/nginx/html

