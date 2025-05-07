#!/bin/sh

echo "Executando migrações..."
npx sequelize-cli db:migrate

echo "Esperando 5 segundos para sincronização..."
sleep 15

echo "Executando seeds..."
npx sequelize-cli db:seed:all

echo "Processo concluído. Mantendo o container ativo..."
tail -f /dev/null