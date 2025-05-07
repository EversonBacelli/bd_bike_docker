#!/bin/sh

echo "Aguardando o banco de dados ficar disponível..."

until nc -z -v -w30 mysql_bike 3306; do
  echo "Banco de dados ainda não está acessível. Tentando novamente..."
  sleep 1
done

echo "Banco de dados está acessível! Continuando..."
exec "$@"