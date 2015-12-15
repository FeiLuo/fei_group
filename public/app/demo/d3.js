define([
  "jquery",
  "can"
], function($, can){
  'use strict';

  var demo =  can.Control.extend({
  }, {
    init: function(element, options) {
      $(element).html("<h2>Hello,This is the D3 Demo Page!</h2>")
    }
  });
  return {
    init: function(element, options) {
      new demo(element, options);
    }
  };
});