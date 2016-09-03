# CoffeeShop

## DB

```
docker run --name mariadb -d \
  -p 3306:3306 \
  -e MARIADB_USER=app -e MARIADB_PASSWORD=app \
  -e MARIADB_DATABASE=CoffeeShop \
  bitnami/mariadb:latest
```
