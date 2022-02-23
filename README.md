## Setup

### run database on docker( ignore if you already had native postgres)

postgres docker:

```bash
docker run -d \
    --name postgres-docker \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD=postgres.local \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -e POSTGRES_DB=project-data \
    -v /mnt/project-data:/var/lib/postgresql/data \
    -p 5435:5432 \
    postgres
```

### Installation

```bash
   yarn
```

### env varibles: clone from .env.example and update acordingly based on you local

### init databse on the first run

```bash
   yarn build
   yarn typeorm schema:sync
   yarn typeorm migration:run
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn dev

# production mode
yarn start:prod
```

## Current APIs:

GET: /project-data
