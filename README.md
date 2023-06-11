# Full Stack ToDoList Application

## Start Application

Make sure Docker and Docker Compose(v2) has been installed before starting application

Windows: `start.bat`

Linux: `start.sh`

## Backend

API: GraphQL

### Database

Use Postgresql docker image

Connects to Postgresql container `db:5432`

Docker compose expose Postgresql to localhost port `4004`

### Docker Image

A `Dockerfile` is written for docker compose to spin up the backend

## Frontend

A React frontend for user to access the ToDoList Application

### Docker Image

A `Dockerfile` is written for docker compose to spin up the frontend
