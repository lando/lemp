LEMP MariaDB/MySQL Example
==========================

This example exists primarily to test the following documentation:

* [LEMP Recipe](https://docs.devwithlando.io/tutorials/lemp.html)

Versions of MariaDB 10.3.x and lower do not have the mariadb command and must use the mysql executable.

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Initialize an empty lamp recipe
rm -rf mariadb && mkdir -p mariadb && cd mariadb
lando init --source cwd --recipe lemp --webroot app/public --name lando-lemp-mariadb-mysql --option php=8.3 --option database=mariadb:10.3
cp -f ../../.lando.upstream.yml .lando.upstream.yml && cat .lando.upstream.yml

# Should start up successfully
cd mariadb
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should use 8.3 as the default php version
cd mariadb
lando php -v | grep "PHP 8.3"

# Should be running nginx 1.17 by default
cd mariadb
lando ssh -s appserver_nginx -c "nginx -v 2>&1 | grep 1.17"

# Should be running mariadb 10.3.x by default
cd mariadb
lando mysql -V | grep "MariaDB" | grep 10.3.

# Should not enable xdebug by default
cd mariadb
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mariadb
lando mysql -ulemp -plemp lemp -e quit

# Should have artisan available
cd mariadb
lando artisan env
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd mariadb
lando destroy -y
lando poweroff
```
