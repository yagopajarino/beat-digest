FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

RUN yarn build

# Command to start the application
CMD ["yarn", "start"]
