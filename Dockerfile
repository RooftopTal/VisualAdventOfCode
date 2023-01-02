# Stage 1
FROM node:18.12.1-alpine3.15 as node

# Set the working directory to /app
WORKDIR /user/src/app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.21-alpine

COPY --from=node /user/src/app/dist/towers-view /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
