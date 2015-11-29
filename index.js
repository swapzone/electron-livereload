'use strict';

var slice = [].slice;

require('coffee-script/register');

var server = require('./lib/server');
var client = require('./lib/client');

module.exports = {
  server: function(opts) {
    return new server(opts);
  },
  client: function(browser, port) {
    new client(browser, port);
  }
};