# Use an official Node.js runtime as the base image
FROM node:latest
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install -y --force

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
