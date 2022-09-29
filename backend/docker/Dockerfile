
FROM golang:alpine AS backend

# Set environment variable
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /app

# loads from cahce and makes things faster
COPY ./backend/go.mod ./
COPY ./backend/go.sum ./

RUN go mod download

COPY ./backend .

# main = output binary file
RUN go build -o main .



FROM node:alpine AS frontend

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm install

COPY ./frontend ./

RUN npm run build



FROM node:alpine  AS dev2

# adding a shell
RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app

# copies only the neccesary files to ne container
COPY --from=backend /app/docker/.env ./
COPY --from=backend /app/main ./main

COPY ./frontend ./front

# idk why not work
# VOLUME ../../frontend

COPY ./backend/docker/dev.sh ./

RUN chmod +x dev.sh

CMD ./dev.sh



FROM node:alpine  AS dev

# adding a shell
RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app

COPY --from=backend /app/docker/.env ./
COPY --from=backend /app/main ./main

ENTRYPOINT [ "/app/main" ]



FROM alpine:latest AS production

# adding a shell
RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app

# copies only the neccesary files to ne container

COPY --from=backend /app/docker/.env ./
COPY --from=backend /app/main ./main

COPY --from=frontend /app/build ./frontend/


ENTRYPOINT [ "/app/main" ]