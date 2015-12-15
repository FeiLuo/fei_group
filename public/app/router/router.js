define([
    'jquery',
    'can',
    '../models/demo',
    "text!./mustache/router.mustache",
    'bootstrap',
    'css!bootstrapcss',
    'less!./less/router'
  ],
  function($, can, demoModel, template) {
    'use strict';

    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
    //_.mixin(s.exports());

    var Router =  can.Control.extend({}, {
      init: function() {
        this.data = null;
        this.element = $(document.body)
        this.renderer = can.mustache(template);
      },

      //ROUTES
      'route': 'index',
      ':controller/:action/:id route': 'dispatch',
      ':controller/:action route': 'dispatch',
      ':controller route': 'dispatch',

      load: function() {
        var me = this;
        demoModel.findAll({}, function(data) {
          me.data = data;
          me.render();
          me.on();
        }, function(xhr) {
          console.error("read demo data error!");
        });
      },

      render: function() {
        if (this.data) {
          this.element.html(this.renderer({demos: this.data}));
          window.location.hash = "";
        } else {
          this.load();
        }
      },

      index: function(data) {
        this.render();
      },

      dispatch: function(data) {
        var me = this;
        if (data.controller && data.action) {
          var loadPath = "app/" + data.controller + "/" + data.action;
          require([loadPath], function(controller) {
            var content = me.element.find(".content");
            window.location.hash = data.controller + "/" + data.action;
            controller.init(content);
          });
        } else {
          this.index();
        }
      },

      "tr.demo-row click": function(el) {
        var data = can.data(el, "demo");
        this.dispatch(data.route);
      }
    });

    var Singleton = (function(T) {
      var instance;

      function createInstance() {
        var object = new T();
        return object;
      }

      return {
        getInstance: function() {
          if (!instance) {
            instance = createInstance();
          }
          return instance;
        }
      }
    });

    return {
      init: function() {
        $(function() {
          Singleton(Router).getInstance();
          can.route.ready();
        });
      }
    };
});