
# Node.js Application Health Dashboard – Docker

## Project Overview

A containerized Node.js application built using Express.js and Docker Multi-Stage Builds. The application provides a web-based health monitoring dashboard to display application status, environment, port, and uptime.

## Technology Stack

- Node.js 22
- Express.js
- Docker
- Docker Multi-Stage Build
- Alpine Linux
- npm

## Project Structure

```text
node/
├── Dockerfile
├── package.json
├── package-lock.json
├── .dockerignore
├── README.md
├── index.js
└── dist/
    └── index.js
```

## Application Features

- Node.js REST API
- Application health monitoring UI
- Application uptime display
- Docker containerization
- Multi-stage image build
- Production-only dependencies
- Lightweight Alpine-based image

## Dockerfile Architecture

### Stage 1: Builder

- Uses Node.js 22 Alpine base image.
- Installs application dependencies.
- Bundles application source code using esbuild.
- Generates production build artifacts.

### Stage 2: Production

- Uses a fresh Node.js 22 Alpine image.
- Installs production dependencies only.
- Copies compiled application from builder stage.
- Excludes development dependencies and original source files.

## Installation and Deployment

### 1. Clone or navigate to the project

```bash
cd /docker/node
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build Docker image

```bash
docker build -t node:v2 .
```

### 4. Verify Docker image

```bash
docker images
```

### 5. Run Docker container

```bash
docker run -d -p 3000:3000 --name mynode1 node:v2
```

### 6. Verify running container

```bash
docker ps
```

### 7. Check application logs

```bash
docker logs mynode1
```

## Application Access

| Endpoint | Description |
|---|---|
| `/` | Application home page |
| `/health` | Health monitoring dashboard |

Access the application:

```text
http//43.205.123.43/:3000
```

Health dashboard:

```text
http://43.205.123.43/:3000/health
```

Ensure TCP port 3000 is allowed in the EC2 Security Group.

## Docker Management Commands

```bash
# List Docker images
docker images

# List running containers
docker ps

# List all containers
docker ps -a

# View application logs
docker logs mynode1

# Access container shell
docker exec -it mynode1 /bin/sh

# Stop container
docker stop mynode1

# Start container
docker start mynode1

# Restart container
docker restart mynode1

# Remove container
docker rm -f mynode1

# Remove Docker image
docker rmi node:v2
```

## Key DevOps Concepts Demonstrated

1. Docker image creation and container management.
2. Multi-stage Docker builds.
3. Docker image optimization.
4. Dependency management using npm.
5. Production and development dependency separation.
6. Container port mapping.
7. Linux container troubleshooting.
8. Application health monitoring.
9. EC2 deployment and security group configuration.

## Project Outcome

Successfully containerized a Node.js application using Docker Multi-Stage Builds and deployed it with a lightweight production runtime. Implemented a browser-based health dashboard to monitor application availability and uptime.

---

**Project:** Node.js Docker Health Dashboard  
**Runtime:** Node.js 22  
**Container Port:** 3000  
**Deployment:** Docker on Linux / AWS EC2
