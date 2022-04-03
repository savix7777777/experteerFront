FROM node:12-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install --only=prod
COPY . /app
RUN yarn run build
FROM nginx:1.16.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]