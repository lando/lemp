'use strict';

/*
 * Build LAMP
 */
module.exports = {
  name: 'lemp',
  parent: '_lamp',
  config: {
    confSrc: __dirname,
    database: 'mysql',
    php: '7.4',
    via: 'nginx',
    webroot: '.',
    xdebug: false,
  },
  builder: (parent, config) => class LandoLamp extends parent {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options));
    };
  },
};
