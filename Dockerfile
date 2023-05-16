# Dockerfile - Development && Edit && Hot Relaod
# ==============================================
# $ docker-compose up -d --build
# Go to localhost:3000
# See .yml file
# Ref https://jameschambers.co.uk

# Dockerfile - Static Instance
# ============================
# $ docker build --tag countryooze:latest .  
# $ docker run -d --name countryooze-instance-0 -p 3000:3000 countryooze:latest  
# $ docker run -d --name countryooze-instance-1 -p 3001:3000 countryooze:latest    
# Ref https://amigoscode.com

# adDed thoughts
# ====================
# Using docker is sometimes overrated sometimes.. If you can set this up like a traditional developer, you'll enjoy smooth performance

# Use node alpine as it's a small node image
FROM node:alpine

# Create the directory on the node image 
# where our Next.js app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
# and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of our Next.js folder into /app
COPY . .

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD ["yarn", "dev"]
