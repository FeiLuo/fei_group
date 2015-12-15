requirejs.config({
  config: {
    text: {
      extension: ".mustache"
    }
  },
  // suggestion: some plugin should be located here instead of paths, Why?
  map: {
    '*': {
      // requirejs less file loader plugin
      less: "lib/require-less/less",
      // requirejs css file loader plugin
      css: "lib/require-css/css",
      // requirejs combined text loader plugin for html
      text: "lib/requirejs/text"
    }
  },
  paths: {
    jquery: "lib/jquery/jquery-2.1.4",
    // canJS library
    can: "lib/canjs/amd-dev/can",
    // canJS fixture
    // todo: we may not need to load it in AMD, but....?
    canfixture: "lib/canjs/amd-dev/can/util/fixture",
    // undersocre libarary to data process
    underscore: "lib/underscore/underscore-1.8.3",
    // enhance to process string
    underscorestring: 'lib/underscore/underscore.string.min',
    //  css
    bootstrap: "lib/bootstrap/js/bootstrap.min",
    bootstrapcss: "lib/bootstrap/css/bootstrap",
    // highchart v.s. D3
    d3: "lib/d3/d3"
  },
  shim: {
    underscore: { exports: "_" },
    underscorestring: { deps: ["underscore"] },
    can: {
      exports: "can",
      deps: ["jquery"]
    },
    //style: { deps: ["less"] },
    canfixture: { deps: ["can"] },
    bootstrap: { deps: ["jquery"] }
  }
});

requirejs(['app/main_app'])

