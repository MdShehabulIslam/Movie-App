# Movie App - Docker Setup Guide

This guide will help you run the Movie App using Docker on any computer.

## Prerequisites

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Make sure Docker is running on your system

## Getting Started

1. Clone the repository or download the project files
```bash
git clone <repository-url>
cd movie-app-tutorial
```

2. Build and run the Docker container using Docker Compose
```bash
docker-compose up --build
```

This command will:
- Build the Docker image for the frontend
- Start the container
- The application will be accessible at `http://localhost:80`

## Useful Docker Commands

### Starting the Application
```bash
# Start the application
docker-compose up

# Start in detached mode (run in background)
docker-compose up -d
```

### Stopping the Application
```bash
# Stop and remove containers
docker-compose down

# Stop, remove containers, and remove images
docker-compose down --rmi all
```

### Viewing Logs
```bash
# View real-time logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f frontend
```

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List Docker images
docker images
```

### Rebuilding
```bash
# Rebuild the images and start containers
docker-compose up --build

# Force rebuild ignoring cache
docker-compose build --no-cache
```

## Troubleshooting

1. If port 80 is already in use, you can modify the port in `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Change 80 to any available port
```

2. If you encounter permission issues:
   - Make sure Docker Desktop is running
   - Try running the commands with administrator privileges

3. For any other issues:
   - Check the logs using `docker-compose logs`
   - Ensure all required files are present in the project directory
