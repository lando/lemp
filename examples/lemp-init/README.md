LEMP Example
============

This example exists primarily to test the following documentation:

* [LEMP Recipe](https://docs.devwithlando.io/tutorials/lemp.html)

Start up tests
--------------

Run the following commands to get up and running with this example

```bash
# Should poweroff
lando poweroff

# Should initialize the latest codeignitor codebase
rm -rf lemp && mkdir -p lemp && cd lemp
lando init --source remote --remote-url https://github.com/bcit-ci/CodeIgniter/archive/3.1.13.tar.gz --remote-options="--strip-components 1" --recipe lemp --webroot . --name lando-lemp --option composer_version=1.10.1
cp -f ../.lando.local.yml .lando.local.yml && cat .lando.local.yml

# Should start up successfully
cd lemp
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should return the drupal installation page by default
cd lemp
lando ssh -s appserver -c "curl -L localhost" | grep "CodeIgniter"

# Should use 7.4 as the default php version
cd lemp
lando php -v | grep "PHP 7.4"

# Should be running nginx 1.17 by default
lando ssh -s appserver_nginx -c "nginx -v 2>&1 | grep 1.17"

# Should be running mysql 5.7 by default
cd lemp
lando mysql -V | grep 5.7

# Should not enable xdebug by default
cd lemp
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd lemp
lando mysql -ulemp -plemp lemp -e quit

# Should be able to global require a composer dep
cd lemp
lando composer global require phpunit/phpunit
lando ssh -s appserver -c "phpunit --version"
lando ssh -s appserver -c "which phpunit | grep /var/www/"

# Should be able to require a composer dep
cd lemp
lando composer require phpunit/phpunit
lando ssh -s appserver -c "phpunit --version"
lando ssh -s appserver -c "which phpunit | grep /app"

# Should be able to configure via the config key
# This tests the 'How do I configure a Lando Recipe' guide.
# https://docs.lando.dev/guides/how-do-i-configure-a-lando-recipe.html
cd lemp
cp .lando.yml orig.lando.yml
cp ../config.lando.yml .lando.yml
lando rebuild -y
lando php -v |grep "5.6"
lando ssh -s database -c "mysql --version" |grep "10.3"
lando poweroff
mv orig.lando.yml .lando.yml
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd lemp
lando destroy -y
lando poweroff
```
