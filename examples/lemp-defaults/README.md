# LEMP Defaults Example

This example exists primarily to test the following documentation:

* [LEMP Recipe](https://docs.lando.dev/lemp/config.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should serve from app root by default
lando ssh -s appserver_nginx -c "curl -L localhost" | grep "DEFAULTS"

# Should use 8.3 as the default php version
lando php -v | grep "PHP 8.3"

# Should be running nginx 1.17 by default
lando ssh -s appserver_nginx -c "nginx -v 2>&1 | grep 1.17"

# Should be running mysql 5.7 by default
lando mysql -V | grep 5.7

# Should not enable xdebug by default
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
lando mysql lemp -e quit

# Should use composer 2 by default
lando ssh -s appserver -c "/bin/sh -c 'NO_COLOR=1 composer -V'" | grep "Composer version 2."
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
