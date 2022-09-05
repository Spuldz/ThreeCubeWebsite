FROM golang:alpine AS base

# Set environment variable
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

FROM base AS build

WORKDIR /app

# loads from cahce and makes things faster
COPY go.mod go.sum ./

RUN go mod download

COPY . .

# main = output binary file
RUN go build -o main .

FROM alpine:latest AS dev

WORKDIR /app

# copies only the neccesary files to ne container

COPY --from=build /app/.env ./

COPY --from=build /app/main ./main

ENTRYPOINT [ "/app/main" ]