'use strict';

const path = require('path');
const landoPhpPath = path.join(__dirname, '../node_modules/@lando/php');
const LandoPhp = require(`${landoPhpPath}/builders/php.js`);

// Builder
module.exports = {
  name: 'lemp-php',
  parent: '_appserver',
  builder: parent => class LempPhp extends LandoPhp.builder(parent, LandoPhp.config) {
    constructor(id, options = {}, factory) {
      options.nginxServiceType = 'lemp-nginx';
      super(id, options, factory);
    }
  },
};
