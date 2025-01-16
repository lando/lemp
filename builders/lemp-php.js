'use strict';

const path = require('path');
const landoPhpPath = path.join(__dirname, '../node_modules/@lando/php');
const LandoPhp = require(`${landoPhpPath}/builders/php.js`);

/**
 * Lemp PHP builder class that extends Lando PHP builder.
 * Uses the bundled version of @lando/php plugin instead of user's version.
 *
 * @module lemp-php
 */
module.exports = {
  name: 'lemp-php',
  parent: '_appserver',
  /**
   * Builder function that returns the LempPhp class
   * @param {Object} parent - Parent builder class
   * @return {Class} LempPhp class extending LandoPhp builder
   */
  builder: parent => class LempPhp extends LandoPhp.builder(parent, LandoPhp.config) {
    /**
     * Create a new LempPhp instance
     * @param {string} id - Service id
     * @param {Object} options - Service options
     * @param {Object} factory - App factory instance
     */
    constructor(id, options = {}, factory) {
      options.nginxServiceType = 'lemp-nginx';
      super(id, options, factory);
    }
  },
};
