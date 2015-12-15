define([
  "jquery",
  "can",
  "text!./mustache/bootstrap.mustache",
  "less!./less/bootstrap"
], function($, can, template){
  'use strict';

  var bootstrapDemo =  can.Control.extend({
  }, {
    init: function(element, options) {
      var renderer = can.mustache(template);
      $(element).html(renderer());
    }
  });
  return {
    init: function(element, options) {
      new bootstrapDemo(element, options);
    }
  };
});