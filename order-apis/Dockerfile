# Use the proper Base Image for subsequent instructions
FROM node:20.18.2-alpine

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the port your app runs on (change if needed)
EXPOSE 3001

# Start the application
CMD ["node", "dist/app.js"]
