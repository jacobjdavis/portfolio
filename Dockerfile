# Use the official Node.js image as a base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json package.json

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Build the React app
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
