# 1. Build stage
FROM node:20-alpine AS builder

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat
    
WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# 2. Production stage
FROM node:20-alpine

WORKDIR /app

# Copy the built app and dependencies
COPY --from=builder /app ./
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
