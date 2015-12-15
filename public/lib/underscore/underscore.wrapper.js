require.config({
  paths: {
    underscore: "lib/underscore/underscore-1.8.3",
    underscorestring: 'lib/underscore/underscore.string',
  },
  shim: {
    underscore: { exports: "_" },
    underscorestring: { deps: ["underscore"] }
  }
});

define([
  "underscore",
  "underscore.string"
], function(_, s){
  _.mixin(s.exports());
  return _;
});