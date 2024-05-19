## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

* Updated mariadb plugin [#51](https://github.com/lando/mariadb/issues/51)
* Use mysql command for MariaDB 10.3.x and below
* Cleaned up test comments

## v1.3.0 - [March 8, 2024](https://github.com/lando/lemp/releases/tag/v1.3.0)

* Updated to latest database services.

## v1.2.1 - [March 4, 2024](https://github.com/lando/lemp/releases/tag/v1.2.1)

### Fixes

* Improved `database` selection for purposes of `config` loading, fixes some `database` bootup issues when the `database` type is overridden downstream

## v1.2.0 - [February 27, 2024](https://github.com/lando/lemp/releases/tag/v1.2.0)

### New Features

* Make `php:8.3` the default PHP version. [#38](https://github.com/lando/lemp/issues/38)
* Added support for `php:8.3`
* Added support for `php:8.2`

### Internal

* Updated to `@lando/php@1.2.0`
* Added more test coverage.

## v1.1.0 - [February 20, 2024](https://github.com/lando/lemp/releases/tag/v1.1.0)

* Included ability to specify `database: mssql` in the `config` section to maintain backwards compatibility. [@lando/mssql#31](https://github.com/lando/mssql/issues/31)

## v1.0.0 - [December 7, 2023](https://github.com/lando/lemp/releases/tag/v1.0.0)
    * Dialed fully for `lando update`

## v0.8.0 - [July 3, 2023](https://github.com/lando/lemp/releases/tag/v0.8.0)
  * Removed bundle-dependencies and version-bump-prompt from plugin.
  * Updated package to use prepare-release-action.
  * Updated documentation to reflect new release process.

## v0.7.0 - [December 12, 2022](https://github.com/lando/lemp/releases/tag/v0.7.0)
  * Added bundle-dependencies to release process.
  * Fixed bug in plugin dogfooding test.

## v0.6.0 - [September 8, 2022](https://github.com/lando/lemp/releases/tag/v0.6.0)

* HYPERDRIVED

## v0.5.1 - [December 21, 2021](https://github.com/lando/lemp/releases/tag/v0.5.1)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Adjust lodash Issue

## v0.5.0 - [December 21, 2021](https://github.com/lando/lemp/releases/tag/v0.5.0)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Initial Release
