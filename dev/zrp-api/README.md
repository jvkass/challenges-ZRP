### Comando para execução do projeto em docker

docker compose up -d

### Comando para criação das tabelas após execução do container do docker

yarn typeorm migrations:run

### Comando utilizado para criação migrations do User e Hero

yarn typeorm migration:create -n CreateUser

yarn typeorm migration:create -n CreateHero
