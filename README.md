# CoffeeShop

## DB

```
# MySQL
$ docker run --name mariadb -d \
  -p 3306:3306 \
  -e MARIADB_USER=app
  -e MARIADB_PASSWORD=app \
  -e MARIADB_DATABASE=CoffeeShop \
  bitnami/mariadb:latest

# MongoDB
$ docker run --name mongodb -d \
  -p 27017:27017 \
  -e MONGODB_USER=app \
  -e MONGODB_PASSWORD=app \
  -e MONGODB_DATABASE=CoffeeShop \
  bitnami/mongodb:latest
```
