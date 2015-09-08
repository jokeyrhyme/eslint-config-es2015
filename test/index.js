'use strict';

// foreign modules

var test = require('tape');

var jsscs = require('eslint-config-standard');
var jssscs = require('eslint-config-semistandard');

// local modules

var config = require('..');

// this modules

test('project exports an ESLint config Object', function (t) {
  t.ok(config);
  t.equal(typeof config, 'object');
  t.ok(config.ecmaFeatures);
  t.equal(typeof config.ecmaFeatures, 'object');
  t.ok(config.env);
  t.equal(typeof config.env, 'object');
  t.ok(config.globals);
  t.equal(typeof config.globals, 'object');
  t.ok(config.rules);
  t.equal(typeof config.rules, 'object');
  t.end();
});

test('rules don\'t overlap with eslint-config-standard', function (t) {
  Object.keys(jsscs.rules).forEach(function (rule) {
    t.notOk(rule in config.rules, rule);
  });
  t.end();
});

test('rules don\'t overlap with eslint-config-semistandard', function (t) {
  Object.keys(jssscs.rules).forEach(function (rule) {
    t.notOk(rule in config.rules, rule);
  });
  t.end();
});
