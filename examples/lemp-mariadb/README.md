LEMP MariaDB Example
====================

This example exists primarily to test the following documentation:

* [LEMP Recipe](https://docs.devwithlando.io/tutorials/lemp.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Initialize an empty lemp recipe
rm -rf mariadb && mkdir -p mariadb && cd mariadb
lando init --source cwd --recipe lemp --webroot app/public --name lando-lemp-mariadb --option php=8.3 --option database=mariadb:11.3
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

# Should be running mariadb 11.3.x by default
cd mariadb
lando mariadb -V | grep 11.3.

# Should not enable xdebug by default
cd mariadb
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mariadb
lando mariadb -ulemp -plemp lemp -e quit

# Should use the default mariadb config file
cd mariadb
lando ssh -s database -c "cat /opt/bitnami/mariadb/conf/my_custom.cnf" | grep "innodb_lock_wait_timeout = 121"
lando mariadb -u root -e "show variables;" | grep innodb_lock_wait_timeout | grep 121
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
