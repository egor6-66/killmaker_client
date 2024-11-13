ARG IMAGE=node:20-alpine

FROM $IMAGE AS builder
WORKDIR /app
COPY . .
RUN npm install

FROM builder AS dev
EXPOSE 3000
CMD ["npm", "run", "build:dev"]

FROM builder AS prod-build
ENV NODE_ENV=production
RUN npm run build:prod
RUN npm prune --production

FROM nginx AS prod
COPY --from=prod-build /app/build /usr/share/nginx/html
COPY --from=prod-build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
