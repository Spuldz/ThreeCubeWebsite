# Starting  dev environment

    cd ./backend/docker
    docker-compose up --build
    
    cd ./frontend
    npm start

    OR

    in backend/docker/.env
        Environment = dev2

    docker-compose up --build



# Start Production environment

    cd ./backend/docker

    docker-compose up --build

    address- localhost:8080

    connect to the contaier:  docker exec -it three_cube bash


# backend/docker/.env Example, resides in ./
    Environment = dev
    Port = 8080
    
    POSTGRES_USER = root
    POSTGRES_PASSWORD= root
    POSTGRES_DB = three_cube

