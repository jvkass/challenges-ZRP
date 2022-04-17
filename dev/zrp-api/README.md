###Comando para execução do projeto em docker

docker compose -d up

###Comando para criação das tabelas

yarn typeorm migrations:run

###Comando utilizado para criação migrations do User

yarn typeorm migration:create -n CreateUser