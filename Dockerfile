# Build Stage
FROM node:15-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build the source files
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# Deploy stage
FROM node:15-alpine

WORKDIR /app
COPY --from=builder /app/build ./

RUN npm install -g serve

CMD ["serve", "-n", "-s", "."]
