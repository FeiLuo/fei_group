define(['app/router/router'], function(router) {
  // restore the globe states from sessionStorage
  if (!window.sessionStorage) {
    window.sessionStorage = {}; // make it compatible for non-HTML5 browsers
  }

  // app_state stores the application states so it can be refered globally
  if (!window.app_state) {
    var old_state = window.sessionStorage.app_state;
    if (!old_state || old_state.length === 0) {
      old_state = "{}";
    }

    window.app_state = new can.Map(JSON.parse(old_state));
    app_state.bind('change', function (ev, attr, how, newVal, oldVal) {
      window.sessionStorage.app_state = JSON.stringify(window.app_state.serialize());
    });
  }

  // create a route
  can.route('#:controller/:action');
  router.init();
});