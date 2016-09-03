# CoffeeShop

## DB

```
docker run --name mariadb \
  -e MARIADB_USER=app -e MARIADB_PASSWORD=app \
  -e MARIADB_DATABASE=CoffeeShop \
  bitnami/mariadb:latest
```
